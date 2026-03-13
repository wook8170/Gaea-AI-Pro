import { Anthropic } from "@anthropic-ai/sdk"
import * as diff from "diff"
import * as path from "path"
import { Mode } from "@/shared/storage/types"
import { ClineIgnoreController, LOCK_TEXT_SYMBOL } from "../ignore/ClineIgnoreController"

const CONTEXT_WINDOW_WARNING_THRESHOLD_PERCENT = 50

export const formatResponse = {
	duplicateFileReadNotice: () =>
		`[[참고] 이 파일 읽기 기록은 컨텍스트 창 공간을 절약하기 위해 제거되었습니다. 이 파일의 최신 내용은 가장 최근의 파일 읽기 기록을 참조하십시오.]`,

	contextTruncationNotice: () =>
		`[참고] 최적의 컨텍스트 창 길이를 유지하기 위해 사용자와의 이전 대화 기록 중 일부가 제거되었습니다. 연속성을 위해 초기 사용자 작업 내용은 유지되었으나, 중간 대화 내용은 삭제되었습니다. 사용자를 계속 지원할 때 이 점을 유의하십시오. 특히 사용자의 최신 메시지에 집중해 주세요.`,

	processFirstUserMessageForTruncation: () => {
		return "[사용자 지원을 계속합니다!]"
	},

	condense: () =>
		`사용자가 생성된 대화 요약본을 수락했습니다. 이 요약은 잘려나간 이전 대화의 중요한 세부 사항들을 포함하고 있습니다.\n<explicit_instructions type="condense_response">이후 응답 시 오직 사용자에게 다음에 수행할 작업이 무엇인지 물어보는 답변만 해야 합니다. 작업을 계속 진행하는 것에 대해 어떠한 주도권도 갖거나 가정을 해서는 안 됩니다. 예를 들어, 파일 변경을 제안하거나 파일을 읽으려 시도해서는 안 됩니다.\n다음에 무엇을 할지 물어볼 때 방금 생성된 요약 정보는 참조할 수 있습니다. 하지만 이 응답에서는 요약 내용 이외의 정보는 참조하지 마십시오. 응답은 간결하게 작성해 주십시오.</explicit_instructions>`,

	toolDenied: () => `사용자가 이 작업을 거부했습니다.`,

	toolError: (error?: string) => `도구 실행 중 다음 오류가 발생했습니다:\n<error>\n${error}\n</error>`,

	clineIgnoreError: (path: string) =>
		`${path}에 대한 액세스가 .clineignore 파일 설정에 의해 차단되었습니다. 이 파일을 사용하지 않고 작업을 계속 진행하거나, 사용자에게 .clineignore 파일 업데이트를 요청해야 합니다. (Gaea-AI-Pro)`,

	permissionDeniedError: (reason: string) =>
		`GAEA_AI_PRO_COMMAND_PERMISSIONS에 의해 명령 실행이 차단되었습니다: ${reason}. 다른 접근 방식을 시도하거나 사용자에게 권한 설정 업데이트를 요청하십시오.`,

	noToolsUsed: (usingNativeToolCalls: boolean) =>
		`[오류] 이전 응답에서 도구를 사용하지 않았습니다! 도구 사용을 포함하여 다시 시도해 주세요.

${usingNativeToolCalls ? "" : toolUseInstructionsReminder}

# 다음 단계

사용자의 작업을 완료했다면, attempt_completion 도구를 사용하십시오.
사용자의 추가 정보가 필요하다면, ask_followup_question 도구를 사용하십시오.
그 외에 작업을 완료하지 않았고 추가 정보가 필요하지 않다면, 작업의 다음 단계를 진행하십시오.
(이 메시지는 자동으로 생성된 것이므로 일상적인 대화로 응답하지 마십시오.)`,

	tooManyMistakes: (feedback?: string) =>
		`작업 진행에 어려움을 겪고 있는 것 같습니다. 사용자가 도움을 주기 위해 다음과 같은 피드백을 제공했습니다:\n<feedback>\n${feedback}\n</feedback>`,

	missingToolParameterError: (paramName: string) =>
		`필수 매개변수 '${paramName}'의 값이 누락되었습니다. 전체 응답과 함께 다시 시도해 주세요.\n\n${toolUseInstructionsReminder}`,

	/**
	 * Specialized error for write_to_file when the 'content' parameter is missing.
	 * Provides progressive guidance based on how many times this has happened consecutively,
	 * and includes token budget awareness to help the model understand output constraints.
	 */
	writeToFileMissingContentError: (relPath: string, consecutiveFailures: number, contextUsagePercent?: number): string => {
		const baseError = `Failed to write to '${relPath}': The 'content' parameter was empty. This typically happens when the file content is too large to generate in a single response, or when output token limits are reached before the content parameter is fully written.`

		const contextWarning =
			contextUsagePercent !== undefined && contextUsagePercent > CONTEXT_WINDOW_WARNING_THRESHOLD_PERCENT
				? `\n\nWarning: Context window is ${contextUsagePercent}% full. The remaining output budget may be insufficient for large file writes. You MUST use a strategy that produces smaller outputs.`
				: ""

		if (consecutiveFailures >= 3) {
			// After 3+ failures, be very directive — stop trying write_to_file entirely
			return (
				`${baseError}${contextWarning}\n\n` +
				`CRITICAL: You have failed to write this file ${consecutiveFailures} times in a row. You MUST change your approach — do NOT retry write_to_file for this file again.\n\n` +
				`Required action — choose ONE of these strategies:\n` +
				`1. **Create an empty file first, then use replace_in_file** to add content in small sections (recommended)\n` +
				`2. **Break the file into multiple smaller files** if architecturally appropriate\n` +
				`3. **Write a minimal skeleton** using write_to_file (just imports, class/function signatures, no implementations), then use replace_in_file to fill in each section one at a time\n\n` +
				`Each replace_in_file call should add no more than 50-100 lines of content at a time.`
			)
		}
		if (consecutiveFailures >= 2) {
			// After 2 failures, strongly suggest alternative approaches
			return (
				`${baseError}${contextWarning}\n\n` +
				`This is your ${consecutiveFailures}${consecutiveFailures === 2 ? "nd" : "rd"} failed attempt. The file content is likely too large to generate in one response. You must use a different strategy:\n\n` +
				`Recommended approaches:\n` +
				`1. **Use write_to_file with a minimal skeleton** (just the structure — imports, class/function signatures, no implementations), then use replace_in_file to fill in each section incrementally\n` +
				`2. **Use replace_in_file with smaller chunks** — if the file already exists, make targeted edits instead of rewriting the entire file\n` +
				`3. **Break the task into smaller steps** — write one function or section at a time\n\n` +
				`Do NOT attempt to write the full file content in a single write_to_file call again.`
			)
		}
		// First failure — provide helpful guidance
		return (
			`${baseError}${contextWarning}\n\n` +
			`Suggestions:\n` +
			`- If the file is large, try breaking down the task into smaller steps. Write a skeleton first, then fill in sections using replace_in_file.\n` +
			`- If the file already exists, prefer replace_in_file to make targeted edits instead of rewriting the entire file.\n` +
			`- Ensure the 'content' parameter contains the complete file content before closing the tool tag.\n\n` +
			toolUseInstructionsReminder
		)
	},

	invalidMcpToolArgumentError: (serverName: string, toolName: string) =>
		`Invalid JSON argument used with ${serverName} for ${toolName}. Please retry with a properly formatted JSON argument.`,

	toolResult: (
		text: string,
		images?: string[],
		fileString?: string,
	): string | Array<Anthropic.TextBlockParam | Anthropic.ImageBlockParam> => {
		const toolResultOutput = []

		if (!(images && images.length > 0) && !fileString) {
			return text
		}

		const textBlock: Anthropic.TextBlockParam = { type: "text", text }
		toolResultOutput.push(textBlock)

		if (images && images.length > 0) {
			const imageBlocks: Anthropic.ImageBlockParam[] = formatImagesIntoBlocks(images)
			toolResultOutput.push(...imageBlocks)
		}

		if (fileString) {
			const fileBlock: Anthropic.TextBlockParam = { type: "text", text: fileString }
			toolResultOutput.push(fileBlock)
		}

		return toolResultOutput
	},

	imageBlocks: (images?: string[]): Anthropic.ImageBlockParam[] => {
		return formatImagesIntoBlocks(images)
	},

	formatFilesList: (
		absolutePath: string,
		files: string[],
		didHitLimit: boolean,
		clineIgnoreController?: ClineIgnoreController,
	): string => {
		const sorted = files
			.map((file) => {
				// convert absolute path to relative path
				const relativePath = path.relative(absolutePath, file).toPosix()
				return file.endsWith("/") ? relativePath + "/" : relativePath
			})
			// Sort so files are listed under their respective directories to make it clear what files are children of what directories. Since we build file list top down, even if file list is truncated it will show directories that cline can then explore further.
			.sort((a, b) => {
				const aParts = a.split("/") // only works if we use toPosix first
				const bParts = b.split("/")
				for (let i = 0; i < Math.min(aParts.length, bParts.length); i++) {
					if (aParts[i] !== bParts[i]) {
						// If one is a directory and the other isn't at this level, sort the directory first
						if (i + 1 === aParts.length && i + 1 < bParts.length) {
							return -1
						}
						if (i + 1 === bParts.length && i + 1 < aParts.length) {
							return 1
						}
						// Otherwise, sort alphabetically
						return aParts[i].localeCompare(bParts[i], undefined, {
							numeric: true,
							sensitivity: "base",
						})
					}
				}
				// If all parts are the same up to the length of the shorter path,
				// the shorter one comes first
				return aParts.length - bParts.length
			})

		const clineIgnoreParsed = clineIgnoreController
			? sorted.map((filePath) => {
					// path is relative to absolute path, not cwd
					// validateAccess expects either path relative to cwd or absolute path
					// otherwise, for validating against ignore patterns like "assets/icons", we would end up with just "icons", which would result in the path not being ignored.
					const absoluteFilePath = path.resolve(absolutePath, filePath)
					const isIgnored = !clineIgnoreController.validateAccess(absoluteFilePath)
					if (isIgnored) {
						return LOCK_TEXT_SYMBOL + " " + filePath
					}

					return filePath
				})
			: sorted

		if (didHitLimit) {
			return `${clineIgnoreParsed.join(
				"\n",
			)}\n\n(File list truncated. Use list_files on specific subdirectories if you need to explore further.)`
		}
		if (clineIgnoreParsed.length === 0 || (clineIgnoreParsed.length === 1 && clineIgnoreParsed[0] === "")) {
			return "No files found."
		}
		return clineIgnoreParsed.join("\n")
	},

	createPrettyPatch: (filename = "file", oldStr?: string, newStr?: string) => {
		// strings cannot be undefined or diff throws exception
		const patch = diff.createPatch(filename.toPosix(), oldStr || "", newStr || "")
		const lines = patch.split("\n")
		const prettyPatchLines = lines.slice(4)
		return prettyPatchLines.join("\n")
	},

	taskResumption: (
		mode: Mode,
		agoText: string,
		cwd: string,
		wasRecent: boolean | 0 | undefined,
		responseText?: string,
		hasPendingFileContextWarnings?: boolean,
	): [string, string] => {
		const taskResumptionMessage = `[TASK RESUMPTION] ${
			mode === "plan"
				? `This task was interrupted ${agoText}. The conversation may have been incomplete. Be aware that the project state may have changed since then. The current working directory is now '${cwd.toPosix()}'.\n\nNote: If you previously attempted a tool use that the user did not provide a result for, you should assume the tool use was not successful. However you are in PLAN MODE, so rather than continuing the task, you must respond to the user's message.`
				: `This task was interrupted ${agoText}. It may or may not be complete, so please reassess the task context. Be aware that the project state may have changed since then. The current working directory is now '${cwd.toPosix()}'. If the task has not been completed, retry the last step before interruption and proceed with completing the task.\n\nNote: If you previously attempted a tool use that the user did not provide a result for, you should assume the tool use was not successful and assess whether you should retry. If the last tool was a browser_action, the browser has been closed and you must launch a new browser if needed.`
		}${
			wasRecent && !hasPendingFileContextWarnings
				? "\n\nIMPORTANT: If the last tool use was a replace_in_file or write_to_file that was interrupted, the file was reverted back to its original state before the interrupted edit, and you do NOT need to re-read the file as you already have its up-to-date contents."
				: ""
		}`

		const userResponseMessage = `${
			responseText
				? `${mode === "plan" ? "New message to respond to with plan_mode_respond tool (be sure to provide your response in the <response> parameter)" : "New instructions for task continuation"}:\n<user_message>\n${responseText}\n</user_message>`
				: mode === "plan"
					? "(The user did not provide a new message. Consider asking them how they'd like you to proceed, or suggest to them to switch to Act mode to continue with the task.)"
					: ""
		}`

		return [taskResumptionMessage, userResponseMessage]
	},

	planModeInstructions: () => {
		return `In this mode you should focus on information gathering, asking questions, and architecting a solution. Once you have a plan, use the plan_mode_respond tool to engage in a conversational back and forth with the user. Do not use the plan_mode_respond tool until you've gathered all the information you need e.g. with read_file or ask_followup_question.
(Remember: If it seems the user wants you to use tools only available in Act Mode, you should ask the user to "toggle to Act mode" (use those words) - they will have to manually do this themselves with the Plan/Act toggle button below. You do not have the ability to switch to Act Mode yourself, and must wait for the user to do it themselves once they are satisfied with the plan. You also cannot present an option to toggle to Act mode, as this will be something you need to direct the user to do manually themselves.)`
	},

	fileEditWithUserChanges: (
		relPath: string,
		userEdits: string,
		autoFormattingEdits: string | undefined,
		finalContent: string | undefined,
		newProblemsMessage: string | undefined,
	) =>
		`The user made the following updates to your content:\n\n${userEdits}\n\n` +
		(autoFormattingEdits
			? `The user's editor also applied the following auto-formatting to your content:\n\n${autoFormattingEdits}\n\n(Note: Pay close attention to changes such as single quotes being converted to double quotes, semicolons being removed or added, long lines being broken into multiple lines, adjusting indentation style, adding/removing trailing commas, etc. This will help you ensure future SEARCH/REPLACE operations to this file are accurate.)\n\n`
			: "") +
		`The updated content, which includes both your original modifications and the additional edits, has been successfully saved to ${relPath.toPosix()}. Here is the full, updated content of the file that was saved:\n\n` +
		`<final_file_content path="${relPath.toPosix()}">\n${finalContent}\n</final_file_content>\n\n` +
		`Please note:\n` +
		`1. You do not need to re-write the file with these changes, as they have already been applied.\n` +
		`2. Proceed with the task using this updated file content as the new baseline.\n` +
		`3. If the user's edits have addressed part of the task or changed the requirements, adjust your approach accordingly.` +
		`4. IMPORTANT: For any future changes to this file, use the final_file_content shown above as your reference. This content reflects the current state of the file, including both user edits and any auto-formatting (e.g., if you used single quotes but the formatter converted them to double quotes). Always base your SEARCH/REPLACE operations on this final version to ensure accuracy.\n` +
		`${newProblemsMessage}`,

	fileEditWithoutUserChanges: (
		relPath: string,
		autoFormattingEdits: string | undefined,
		finalContent: string | undefined,
		newProblemsMessage: string | undefined,
	) =>
		`The content was successfully saved to ${relPath.toPosix()}.\n\n` +
		(autoFormattingEdits
			? `Along with your edits, the user's editor applied the following auto-formatting to your content:\n\n${autoFormattingEdits}\n\n(Note: Pay close attention to changes such as single quotes being converted to double quotes, semicolons being removed or added, long lines being broken into multiple lines, adjusting indentation style, adding/removing trailing commas, etc. This will help you ensure future SEARCH/REPLACE operations to this file are accurate.)\n\n`
			: "") +
		`Here is the full, updated content of the file that was saved:\n\n` +
		`<final_file_content path="${relPath.toPosix()}">\n${finalContent}\n</final_file_content>\n\n` +
		`IMPORTANT: For any future changes to this file, use the final_file_content shown above as your reference. This content reflects the current state of the file, including any auto-formatting (e.g., if you used single quotes but the formatter converted them to double quotes). Always base your SEARCH/REPLACE operations on this final version to ensure accuracy.\n\n` +
		`${newProblemsMessage}`,

	diffError: (relPath: string, originalContent: string | undefined) =>
		`This is likely because the SEARCH block content doesn't match exactly with what's in the file, or if you used multiple SEARCH/REPLACE blocks they may not have been in the order they appear in the file. (Please also ensure that when using the replace_in_file tool, Do NOT add extra characters to the markers (e.g., ------- SEARCH> is INVALID). Do NOT forget to use the closing +++++++ REPLACE marker. Do NOT modify the marker format in any way. Malformed XML will cause complete tool failure and break the entire editing process.)\n\n` +
		`The file was reverted to its original state:\n\n` +
		`<file_content path="${relPath.toPosix()}">\n${originalContent}\n</file_content>\n\n` +
		`Now that you have the latest state of the file, try the operation again with fewer, more precise SEARCH blocks. For large files especially, it may be prudent to try to limit yourself to <5 SEARCH/REPLACE blocks at a time, then wait for the user to respond with the result of the operation before following up with another replace_in_file call to make additional edits.\n(If you run into this error 3 times in a row, you may use the write_to_file tool as a fallback.)`,

	toolAlreadyUsed: (toolName: string) =>
		`Tool [${toolName}] was not executed because a tool has already been used in this message. Only one tool may be used per message. You must assess the first tool's result before proceeding to use the next tool.`,

	clineIgnoreInstructions: (content: string) =>
		`# .clineignore\n\n(The following is provided by a root-level .clineignore file where the user has specified files and directories that should not be accessed. When using list_files, you'll notice a ${LOCK_TEXT_SYMBOL} next to files that are blocked. Attempting to access the file's contents e.g. through read_file will result in an error. Gaea-AI-Pro will respect these settings.)\n\n${content}\n.clineignore`,

	clineRulesGlobalDirectoryInstructions: (globalClineRulesFilePath: string, content: string) =>
		`# .clinerules/\n\nThe following is provided by a global .clinerules/ directory, located at ${globalClineRulesFilePath.toPosix()}, where the user has specified instructions for all working directories:\n\n${content}`,

	clineRulesLocalDirectoryInstructions: (cwd: string, content: string) =>
		`# .clinerules/\n\nThe following is provided by a root-level .clinerules/ directory where the user has specified instructions for this working directory (${cwd.toPosix()})\n\n${content}`,

	clineRulesLocalFileInstructions: (cwd: string, content: string) =>
		`# .clinerules\n\nThe following is provided by a root-level .clinerules file where the user has specified instructions for this working directory (${cwd.toPosix()})\n\n${content}`,

	windsurfRulesLocalFileInstructions: (cwd: string, content: string) =>
		`# .windsurfrules\n\nThe following is provided by a root-level .windsurfrules file where the user has specified instructions for this working directory (${cwd.toPosix()})\n\n${content}`,

	cursorRulesLocalFileInstructions: (cwd: string, content: string) =>
		`# .cursorrules\n\nThe following is provided by a root-level .cursorrules file where the user has specified instructions for this working directory (${cwd.toPosix()})\n\n${content}`,

	cursorRulesLocalDirectoryInstructions: (cwd: string, content: string) =>
		`# .cursor/rules\n\nThe following is provided by a root-level .cursor/rules directory where the user has specified instructions for this working directory (${cwd.toPosix()})\n\n${content}`,

	agentsRulesLocalFileInstructions: (cwd: string, content: string) =>
		`# AGENTS.md\n\nThe following is provided by AGENTS.md files found recursively throughout this working directory (${cwd.toPosix()}) where the user has specified instructions. Nested AGENTS.md will be combined below, and you should only apply the instructions for each AGENTS.md file that is directly applicable to the current task, i.e. if you are reading or writing to a file in that directory.\n\n${content}`,

	fileContextWarning: (editedFiles: string[]): string => {
		const fileCount = editedFiles.length
		const fileVerb = fileCount === 1 ? "파일이" : "파일들이"
		const fileDemonstrativePronoun = fileCount === 1 ? "이 파일" : "이 파일들"
		const filePersonalPronoun = fileCount === 1 ? "이것" : "이것들"

		return (
			`<explicit_instructions>\n중요 파일 상태 알림: 마지막 상호작용 이후 ${fileCount}개의 ${fileVerb} 외부에서 수정되었습니다. ${fileDemonstrativePronoun}에 대해 알고 있는 정보는 이제 오래되어 신뢰할 수 없습니다. ${fileDemonstrativePronoun}을 수정하기 전에 반드시 read_file을 실행하여 현재 상태를 확인하십시오. 예상과 완전히 다른 내용이 포함되어 있을 수 있습니다:\n` +
			`${editedFiles.map((file) => ` ${path.resolve(file).toPosix()}`).join("\n")}\n` +
			`수정 전 다시 읽지 않으면 replace_in_file 편집 오류가 발생하여 재시도가 필요하게 되고 토큰이 낭비됩니다. 이후 추가 지침이 없는 한, 편집 후 이 파일들을 다시 읽을 필요는 없습니다.\n</explicit_instructions>`
		)
	},
}

// to avoid circular dependency
const formatImagesIntoBlocks = (images?: string[]): Anthropic.ImageBlockParam[] => {
	return images
		? images.map((dataUrl) => {
				// data:image/png;base64,base64string
				const [rest, base64] = dataUrl.split(",")
				const mimeType = rest.split(":")[1].split(";")[0]
				return {
					type: "image",
					source: {
						type: "base64",
						media_type: mimeType,
						data: base64,
					},
				} as Anthropic.ImageBlockParam
			})
		: []
}

const toolUseInstructionsReminder = `# 참고: 도구 사용 지침
도구 사용은 XML 스타일 태그를 사용하여 형식화됩니다. 도구 이름은 여는 태그와 닫는 태그로 감싸지며, 각 매개변수 또한 자체 태그 세트 내에 포함됩니다. 구조는 다음과 같습니다:
<tool_name>
<parameter1_name>값1</parameter1_name>
<parameter2_name>값2</parameter2_name>
...
</tool_name>
예시:
<attempt_completion>
<result>
작업을 완료했습니다...
</result>
</attempt_completion>
적절한 구문 분석 및 실행을 위해 모든 도구 사용 시 항상 이 형식을 준수하십시오.`
