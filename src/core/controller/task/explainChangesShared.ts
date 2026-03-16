import { buildApiHandler } from "@core/api"
import { isBinaryFile } from "isbinaryfile"
import { HostProvider } from "@/hosts/host-provider"
import { formatContentBlockToMarkdown } from "@/integrations/misc/export-markdown"
import { ApiConfiguration } from "@/shared/api"
import { ClineStorageMessage } from "@/shared/messages/content"
import { Logger } from "@/shared/services/Logger"

export interface ChangedFile {
	relativePath: string
	absolutePath: string
	before: string
	after: string
}

const EXPLAINER_SYSTEM_PROMPT = `You are an AI coding assistant called Cline that will be explaining code changes to a developer. Your goal is to help the user understand what changed and why.
- Use a friendly, conversational tone as if pair programming
- When relevant, briefly explain technical concepts or patterns used
- Focus on helping the user learn and understand the codebase
- Highlight any important decisions, trade-offs, or things the user should be aware of

Remember: The user wants to understand the changes well enough to maintain, extend, or debug this code themselves.
`

/**
 * Add line numbers to content (0-indexed for AI reference)
 */
function addLineNumbers(content: string): string {
	if (!content) {
		return content
	}
	const lines = content.split("\n")
	return lines.map((line, index) => `${index}: ${line}`).join("\n")
}

/**
 * Build a unified diff content string for the AI
 * Includes 0-indexed line numbers so the AI can reference specific lines
 */
export function buildDiffContent(changedFiles: ChangedFile[]): string {
	const parts: string[] = []

	for (const file of changedFiles) {
		parts.push(`\n=== File: ${file.absolutePath} ===\n`)
		parts.push(`--- Before ---\n${file.before || "(new file)"}\n`)
		parts.push(
			`--- After (use these line numbers for comments) ---\n${file.after ? addLineNumbers(file.after) : "(deleted)"}\n`,
		)
	}

	return parts.join("\n")
}

/**
 * Open the multi-file diff view with the changed files
 */
export async function openDiffView(title: string, changedFiles: ChangedFile[]): Promise<void> {
	await HostProvider.diff.openMultiFileDiff({
		title,
		diffs: changedFiles.map((file) => ({
			filePath: file.absolutePath,
			leftContent: file.before,
			rightContent: file.after,
		})),
	})
}

/**
 * Set up the comment controller and reply handler
 */
export async function setupCommentController(
	apiConfiguration: ApiConfiguration,
	changedFiles: ChangedFile[],
	conversationContext: string,
) {
	const commentController = HostProvider.get().createCommentReviewController()
	commentController.clearAllComments()

	// Ensure the Comments panel won't auto-open when we add comments
	await commentController.ensureCommentsViewDisabled()

	// Set up reply handler for conversations
	commentController.setOnReplyCallback(async (filePath, startLine, endLine, replyText, existingComments, onChunk) => {
		await handleCommentReply(
			apiConfiguration,
			filePath,
			startLine,
			endLine,
			replyText,
			existingComments,
			changedFiles,
			conversationContext,
			onChunk,
		)
	})

	return commentController
}

/**
 * Stream AI explanation comments with real-time updates.
 * Uses a structured format that allows creating comment UI immediately when location is known,
 * then streaming the comment text as it arrives.
 *
 * @param shouldAbort - Optional callback that returns true if the operation should be aborted
 */
export async function streamAIExplanationComments(
	apiConfiguration: ApiConfiguration,
	diffContent: string,
	contextDescription: string,
	changedFiles: ChangedFile[],
	onCommentStart: (filePath: string, startLine: number, endLine: number) => void,
	onCommentChunk: (chunk: string) => void,
	onCommentEnd: () => void,
	shouldAbort?: () => boolean,
): Promise<number> {
	// Disable thinking/reasoning for faster response
	const configWithoutThinking: ApiConfiguration = {
		...apiConfiguration,
		actModeThinkingBudgetTokens: 0,
		planModeThinkingBudgetTokens: 0,
	}
	const apiHandler = buildApiHandler(configWithoutThinking, "act")

	const fileCount = changedFiles.length
	const maxCommentsPerFile = fileCount > 3 ? 1 : 3

	const systemPrompt = `${EXPLAINER_SYSTEM_PROMPT}

CRITICAL: Create comments for LOGICAL GROUPINGS of changes, not individual lines. Think in terms of:
- "Added a new function that does X" (spanning the entire function)
- "Refactored error handling in this section" (spanning all related changes)
- "Updated imports and dependencies" (one comment for all import changes)

OUTPUT FORMAT - Use this exact structure for each comment:
@@@ FILE: /absolute/path/to/file.ts
@@@ LINE: 45
Your explanation of what changed and why goes here. Can be multiple sentences.
@@@

@@@ FILE: /absolute/path/to/other.ts
@@@ LINE: 20
Another explanation here.
@@@

Rules:
1. Start each comment with @@@ FILE: followed by the absolute file path. This MUST be on a new line.
2. Next line must be @@@ LINE: followed by a single line number (0-indexed from the "After" content).
   - For ADDITIONS or MODIFICATIONS: Use the LAST LINE of the changed code block
   - For DELETIONS: Use the FIRST LINE where the deletion occurred
   - The comment must be on a line that's part of the diff to be visible.
3. Then write your explanation text. Use markdown formatting.
4. End each comment with @@@ on its own line.
5. Each file MUST have at least one comment, MAX ${maxCommentsPerFile} comment${maxCommentsPerFile > 1 ? "s" : ""} per file.
6. Explain non-obvious changes. Skip trivial changes (whitespace, renames).

CRITICAL: Do NOT translate markers (@@@ FILE:, @@@ LINE:, @@@). Use English for these markers. Only translate your explanation text.
CRITICAL: Ensure each marker is on its own separate line.
`

	const userMessage = `Explain these code changes:

## Context
${contextDescription}

## Files changed
${changedFiles.map((f) => `- ${f.absolutePath}`).join("\n")}

## Diff content
${diffContent}

Output your explanation comments now using the @@@ format:`

	let commentCount = 0
	let buffer = ""
	let currentFile: string | null = null
	let currentStartLine: number | null = null
	let currentEndLine: number | null = null
	let inComment = false
	let isDuplicate = false
	const seenComments = new Set<string>()

	try {
		for await (const chunk of apiHandler.createMessage(systemPrompt, [{ role: "user", content: userMessage }])) {
			// Check if we should abort before processing each chunk
			if (shouldAbort?.()) {
				// If we're in the middle of a comment, end it cleanly
				if (inComment) {
					onCommentEnd()
				}
				return commentCount
			}

			if (chunk.type === "text") {
				buffer += chunk.text

				// Regex for markers (Case-insensitive, handles variable @ counts and spaces)
				const fileMarkerRegex = /^@+\s*FILE:\s*(.+)$/i
				const lineMarkerRegex = /^@+\s*LINE:\s*(\d+)$/i
				const endMarkerRegex = /^@+\s*$/

				// Process buffer line by line, keeping incomplete lines
				while (true) {
					// Check abort before processing each line
					if (shouldAbort?.()) {
						if (inComment) {
							onCommentEnd()
						}
						return commentCount
					}

					const newlineIndex = buffer.indexOf("\n")
					if (newlineIndex === -1) {
						break
					}

					const line = buffer.substring(0, newlineIndex)
					buffer = buffer.substring(newlineIndex + 1)

					const trimmedLine = line.trim()

					// Check for FILE header
					const fileMatch = trimmedLine.match(fileMarkerRegex)
					if (fileMatch) {
						if (inComment) {
							onCommentEnd()
							inComment = false
						}
						isDuplicate = false // Reset duplicate flag for new file
						const filePath = fileMatch[1].trim()
						const matchingFile = changedFiles.find((f) => f.absolutePath === filePath || f.relativePath === filePath)
						currentFile = matchingFile?.absolutePath || filePath
						continue
					}

					// Check for LINE header
					const lineMatch = trimmedLine.match(lineMarkerRegex)
					if (lineMatch) {
						const lineNum = Number.parseInt(lineMatch[1], 10)
						if (!Number.isNaN(lineNum) && currentFile) {
							// Deduplication: check if we've already commented on this exact spot in this session
							const locationKey = `${currentFile}:${lineNum}`
							if (seenComments.has(locationKey)) {
								isDuplicate = true
								continue
							}
							isDuplicate = false
							seenComments.add(locationKey)

							// If we're already in a comment (missing end marker), close it first
							if (inComment) {
								onCommentEnd()
							}
							currentStartLine = lineNum
							currentEndLine = lineNum
							onCommentStart(currentFile, currentStartLine, currentEndLine)
							inComment = true
							commentCount++
						}
						continue
					}

					// Check for end marker
					if (endMarkerRegex.test(trimmedLine)) {
						if (inComment) {
							onCommentEnd()
							inComment = false
							currentFile = null
							currentStartLine = null
							currentEndLine = null
						}
						isDuplicate = false // Reset duplicate flag on end marker
						continue
					}

					// If we're in a comment and it's NOT a duplicate, stream the text
					if (inComment && !isDuplicate) {
						onCommentChunk(line + "\n")
					}
				}

				// Stream partial content in buffer for more responsive UI
				// But don't stream if it might be a marker (starts with @) or if it's a duplicate
				if (inComment && !isDuplicate && buffer.length > 0 && !buffer.startsWith("@")) {
					onCommentChunk(buffer)
					buffer = "" // Clear buffer after streaming
				}
			}
		}

		// Handle any remaining content in buffer
		if (buffer.trim()) {
			const trimmedBuffer = buffer.trim()
			if (trimmedBuffer === "@@@") {
				if (inComment) {
					onCommentEnd()
					inComment = false
				}
			} else if (inComment && !isDuplicate && !trimmedBuffer.startsWith("@@@")) {
				onCommentChunk(buffer)
				onCommentEnd()
				inComment = false
			}
		} else if (inComment) {
			onCommentEnd()
		}

		return commentCount
	} catch (error) {
		Logger.error("Error streaming AI explanation comments:", error)
		if (inComment) {
			onCommentEnd()
		}
		return commentCount
	}
}

/**
 * Handle a reply to a comment thread with streaming
 */
async function handleCommentReply(
	apiConfiguration: ApiConfiguration,
	filePath: string,
	startLine: number,
	endLine: number,
	replyText: string,
	existingComments: string[],
	changedFiles: ChangedFile[],
	conversationContext: string,
	onChunk: (chunk: string) => void,
): Promise<void> {
	// Disable thinking/reasoning for faster response
	const configWithoutThinking: ApiConfiguration = {
		...apiConfiguration,
		actModeThinkingBudgetTokens: 0,
		planModeThinkingBudgetTokens: 0,
	}

	// Find the relevant file - check both absolutePath and relativePath for robustness
	const file = changedFiles.find((f) => f.absolutePath === filePath || f.relativePath === filePath)
	if (!file) {
		onChunk("Error: Could not find the file context")
		return
	}

	// Get the relevant code snippet
	const afterLines = file.after.split("\n")
	const codeSnippet = afterLines.slice(startLine, endLine + 1).join("\n")

	const apiHandler = buildApiHandler(configWithoutThinking, "act")

	const systemPrompt = `${EXPLAINER_SYSTEM_PROMPT}

The user is asking followup questions about code change explanations you provided.
Respond helpfully to the user's question about the code.
Use markdown formatting where appropriate.
If the user asks you to make changes, fix something, or do any work that requires modifying code, let them know they can click the "Add to Cline Chat" button (the arrow icon in the top-right of the comment box) to send this conversation to the main Cline agent, which can then make the requested changes.
`

	const userMessage = `## Context
${conversationContext}

## Code Being Discussed
File: ${file.relativePath}
Lines ${startLine + 1}-${endLine + 1}:
\`\`\`
${codeSnippet}
\`\`\`

## Comment Thread
${existingComments.join("\n\n")}

## User's Question
${replyText}

Please respond to the user's question about this code.`

	try {
		for await (const chunk of apiHandler.createMessage(systemPrompt, [{ role: "user", content: userMessage }])) {
			if (chunk.type === "text") {
				onChunk(chunk.text)
			}
		}
	} catch (error) {
		Logger.error("Error getting reply:", error)
		onChunk(`Error: ${error instanceof Error ? error.message : "Unknown error"}`)
	}
}

/**
 * Stringify conversation history into a readable summary for context
 */
export function stringifyConversationHistory(apiConversationHistory: ClineStorageMessage[]): string {
	if (!apiConversationHistory || apiConversationHistory.length === 0) {
		return "No prior conversation context available."
	}

	return apiConversationHistory
		.map((message) => {
			const role = message.role === "user" ? "**User:**" : "**Assistant:**"
			const content = Array.isArray(message.content)
				? message.content.map((block) => formatContentBlockToMarkdown(block)).join("\n")
				: message.content
			return `${role}\n\n${content}\n\n`
		})
		.join("---\n\n")
}

/**
 * Binary file extensions to exclude from diff view
 */
const BINARY_EXTENSIONS = new Set([
	// Images
	".png",
	".jpg",
	".jpeg",
	".gif",
	".bmp",
	".ico",
	".webp",
	".svg",
	".tiff",
	".tif",
	// Audio
	".mp3",
	".wav",
	".ogg",
	".flac",
	".aac",
	".m4a",
	// Video
	".mp4",
	".avi",
	".mov",
	".wmv",
	".flv",
	".webm",
	".mkv",
	// Archives
	".zip",
	".tar",
	".gz",
	".rar",
	".7z",
	".bz2",
	// Documents
	".pdf",
	".doc",
	".docx",
	".xls",
	".xlsx",
	".ppt",
	".pptx",
	// Fonts
	".ttf",
	".otf",
	".woff",
	".woff2",
	".eot",
	// Executables/binaries
	".exe",
	".dll",
	".so",
	".dylib",
	".bin",
	".o",
	".a",
	// Other
	".db",
	".sqlite",
	".sqlite3",
	".lock",
	".wasm",
])

/**
 * Check if a file is binary based on its extension or content.
 * @param filePath - Absolute path to the file to check
 * @returns Promise<boolean> - true if the file is binary, false if text or if detection fails
 */
export async function detectBinaryFile(filePath: string): Promise<boolean> {
	const lastDotIndex = filePath.lastIndexOf(".")
	const lastSlashIndex = Math.max(filePath.lastIndexOf("/"), filePath.lastIndexOf("\\"))
	const ext = lastDotIndex > lastSlashIndex ? filePath.substring(lastDotIndex).toLowerCase() : ""
	const isDotfile = lastDotIndex !== -1 && lastDotIndex === lastSlashIndex + 1

	// Legacy/fast method: Check known binary extensions
	if (ext && BINARY_EXTENSIONS.has(ext)) {
		return true
	}

	// Use actual binary check for dotfiles or files without extensions. Returns true if file is binary.
	if (!ext || isDotfile) {
		try {
			const result = await isBinaryFile(filePath)
			return result
		} catch {
			return false
		}
	}
	return false
}
