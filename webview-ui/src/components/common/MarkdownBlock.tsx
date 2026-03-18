import { StringRequest } from "@shared/proto/cline/common"
import { PlanActMode, TogglePlanActModeRequest } from "@shared/proto/cline/state"
import { SquareArrowOutUpRightIcon } from "lucide-react"
import { marked } from "marked"
import type { ComponentProps } from "react"
import React, { memo, useEffect, useMemo, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight, { Options } from "rehype-highlight"
import remarkGfm from "remark-gfm"
import type { Node } from "unist"
import { visit } from "unist-util-visit"
import MermaidBlock from "@/components/common/MermaidBlock"
import { Button } from "@/components/ui/button"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { cn } from "@/lib/utils"
import { FileServiceClient, StateServiceClient } from "@/services/grpc-client"
import { WithCopyButton } from "./CopyButton"
import UnsafeImage from "./UnsafeImage"

function parseMarkdownIntoBlocks(markdown: string): string[] {
	try {
		const tokens = marked.lexer(markdown)
		return tokens?.map((token) => token.raw)
	} catch {
		return [markdown]
	}
}

const MemoizedMarkdownBlock = memo(
	({ content }: { content: string }) => {
		return (
			<ReactMarkdown
				components={{
					pre: ({ children, ...preProps }: React.HTMLAttributes<HTMLPreElement>) => {
						if (Array.isArray(children) && children.length === 1 && React.isValidElement(children[0])) {
							const child = children[0] as React.ReactElement<{ className?: string }>
							if (child.props?.className?.includes("language-mermaid")) {
								return child
							}
						}
						return <PreWithCopyButton {...preProps}>{children}</PreWithCopyButton>
					},
					code: (props: ComponentProps<"code"> & { [key: string]: any }) => {
						const className = props.className || ""
						if (className.includes("language-mermaid")) {
							const codeText = String(props.children || "")
							return <MermaidBlock code={codeText} />
						}

						// Use the async file check component for potential file paths
						return <InlineCodeWithFileCheck {...props} />
					},
					strong: (props: ComponentProps<"strong">) => {
						// Check if this is an "Act Mode" strong element by looking for the keyboard shortcut
						// Handle both string children and array of children cases
						const childrenText = React.Children.toArray(props.children)
							.map((child) => {
								if (typeof child === "string") {
									return child
								}
								if (typeof child === "object" && "props" in child && child.props.children) {
									return String(child.props.children)
								}
								return ""
							})
							.join("")

						// Case-insensitive check for "실행 모드 (⌘⇧A)" pattern
						// This ensures we only style the exact "실행 모드" mentions with keyboard shortcut
						// Using case-insensitive flag to catch all capitalization variations
						if (/^실행 모드\s*\(⌘⇧A\)$/i.test(childrenText)) {
							return <ActModeHighlight />
						}

						return <strong {...props} />
					},
					img: (props) => <UnsafeImage {...props} />,
				}}
				rehypePlugins={[[rehypeHighlight as any, {} as Options]]}
				remarkPlugins={[
					[remarkGfm, { singleTilde: false }],
					remarkPreventBoldFilenames,
					remarkUrlToLink,
					remarkHighlightActMode,
					remarkMarkPotentialFilePaths,
					() => {
						return (tree: any) => {
							visit(tree, "code", (node: any) => {
								if (!node.lang) {
									node.lang = "javascript"
								} else if (node.lang.includes(".")) {
									node.lang = node.lang.split(".").slice(-1)[0]
								}
							})
						}
					},
				]}>
				{content}
			</ReactMarkdown>
		)
	},
	(prevProps, nextProps) => {
		if (prevProps.content !== nextProps.content) return false
		return true
	},
)

MemoizedMarkdownBlock.displayName = "MemoizedMarkdownBlock"

const MemoizedMarkdown = memo(({ content, id }: { content: string; id: string }) => {
	const blocks = useMemo(() => parseMarkdownIntoBlocks(content), [content])
	return blocks?.map((block, index) => <MemoizedMarkdownBlock content={block} key={`${id}-block_${index}`} />)
})

MemoizedMarkdown.displayName = "MemoizedMarkdown"

/**
 * A component for Act Mode text that contains a clickable toggle and keyboard shortcut hint.
 */
const ActModeHighlight: React.FC = () => {
	const { mode } = useExtensionState()

	return (
		<span
			className={cn("text-link inline-flex items-center gap-1", {
				"hover:opacity-90 cursor-pointer": mode === "plan",
				"cursor-not-allowed opacity-60": mode !== "plan",
			})}
			onClick={() => {
				// Only toggle to Act mode if we're currently in Plan mode
				if (mode === "plan") {
					StateServiceClient.togglePlanActModeProto(
						TogglePlanActModeRequest.create({
							mode: PlanActMode.ACT,
						}),
					)
				}
			}}
			title={mode === "plan" ? "클릭하여 실행 모드로 전환" : "이미 실행 모드입니다"}>
			<div className="p-1 rounded-md bg-code flex items-center justify-end w-7 border border-input-border">
				<div className="rounded-full bg-link w-2 h-2" />
			</div>
			실행 모드 (⌘⇧A)
		</span>
	)
}

interface MarkdownBlockProps {
	markdown?: string
	compact?: boolean
	showCursor?: boolean
}

/**
 * Custom remark plugin that converts plain URLs in text into clickable links
 *
 * The original bug: We were converting text nodes into paragraph nodes,
 * which broke the markdown structure because text nodes should remain as text nodes
 * within their parent elements (like paragraphs, list items, etc.).
 * This caused the entire content to disappear because the structure became invalid.
 */
const remarkUrlToLink = () => {
	return (tree: Node) => {
		// Visit all "text" nodes in the markdown AST (Abstract Syntax Tree)
		visit(tree, "text", (node: any, index: number | undefined, parent: any) => {
			const urlRegex = /https?:\/\/[^\s<>)"]+/g
			const matches = node.value.match(urlRegex)
			if (!matches) {
				return
			}

			const parts = node.value.split(urlRegex)
			const children: any[] = []

			parts.forEach((part: string, i: number) => {
				if (part) {
					children.push({ type: "text", value: part })
				}
				if (matches[i]) {
					children.push({
						type: "link",
						url: matches[i],
						children: [{ type: "text", value: matches[i] }],
					})
				}
			})

			// Fix: Instead of converting the node to a paragraph (which broke things),
			// we replace the original text node with our new nodes in the parent's children array.
			// This preserves the document structure while adding our links.
			if (parent) {
				parent.children.splice(index, 1, ...children)
			}
		})
	}
}

/**
 * Custom remark plugin that highlights "실행 모드로" mentions and adds keyboard shortcut hint
 */
const remarkHighlightActMode = () => {
	return (tree: Node) => {
		visit(tree, "text", (node: any, index: number | undefined, parent: any) => {
			// Case-insensitive regex to match "실행 모드로" in various capitalizations
			// Using word boundaries to avoid matching within words
			// Added negative lookahead to avoid matching if already followed by the shortcut
			const actModeRegex = /\b실행\s+모드로\b(?!\s*\(⌘⇧A\))/i

			if (!node.value.match(actModeRegex)) {
				return
			}

			// Split the text by the matches
			const parts = node.value.split(actModeRegex)
			const matches = node.value.match(actModeRegex)

			if (!matches || parts.length <= 1) {
				return
			}

			const children: any[] = []

			parts.forEach((part: string, i: number) => {
				// Add the text before the match
				if (part) {
					children.push({ type: "text", value: part })
				}

				// Add the match, but only make "실행 모드" bold (not the "로" part)
				if (matches[i]) {
					// Extract "실행 모드" and "로" parts
					const matchText = matches[i]
					const actModeIndex = matchText.indexOf("실행 모드")
					const roIndex = matchText.indexOf("로", actModeIndex + 4)

					if (actModeIndex !== -1 && roIndex !== -1) {
						// Add "실행 모드" as bold with keyboard shortcut
						const actModePart = matchText.substring(actModeIndex, roIndex).trim()
						children.push({
							type: "strong",
							children: [{ type: "text", value: `${actModePart} (⌘⇧A)` }],
						})

						// Add "로" as regular text
						const roPart = matchText.substring(roIndex)
						children.push({ type: "text", value: roPart + " " })
					} else {
						// Fallback if we can't parse it correctly
						children.push({ type: "text", value: matchText + " " })
						children.push({
							type: "strong",
							children: [{ type: "text", value: `(⌘⇧A)` }],
						})
					}
				}
			})

			// Replace the original text node with our new nodes
			if (parent) {
				parent.children.splice(index, 1, ...children)
			}
		})
	}
}

/**
 * Custom remark plugin that prevents filenames with extensions from being parsed as bold text
 * For example: __init__.py should not be rendered as bold "init" followed by ".py"
 * Solves https://github.com/cline/cline/issues/1028
 */
const remarkPreventBoldFilenames = () => {
	return (tree: any) => {
		visit(tree, "strong", (node: any, index: number | undefined, parent: any) => {
			// Only process if there's a next node (potential file extension)
			if (!parent || typeof index === "undefined" || index === parent.children.length - 1) {
				return
			}

			const nextNode = parent.children[index + 1]

			// Check if next node is text and starts with . followed by extension
			if (nextNode.type !== "text" || !nextNode.value.match(/^\.[a-zA-Z0-9]+/)) {
				return
			}

			// If the strong node has multiple children, something weird is happening
			if (node.children?.length !== 1) {
				return
			}

			// Get the text content from inside the strong node
			const strongContent = node.children?.[0]?.value
			if (!strongContent || typeof strongContent !== "string") {
				return
			}

			// Validate that the strong content is a valid filename
			if (!strongContent.match(/^[a-zA-Z0-9_-]+$/)) {
				return
			}

			// Combine into a single text node
			const newNode = {
				type: "text",
				value: `__${strongContent}__${nextNode.value}`,
			}

			// Replace both nodes with the combined text node
			parent.children.splice(index, 2, newNode)
		})
	}
}

const PreWithCopyButton = ({ children, ...preProps }: React.HTMLAttributes<HTMLPreElement>) => {
	const preRef = useRef<HTMLPreElement>(null)

	const handleCopy = () => {
		if (preRef.current) {
			const codeElement = preRef.current.querySelector("code")
			const textToCopy = codeElement ? codeElement.textContent : preRef.current.textContent

			if (!textToCopy) {
				return
			}
			return textToCopy
		}
		return null
	}

	return (
		<WithCopyButton ariaLabel="Copy code" onCopy={handleCopy} position="top-right">
			<pre {...preProps} ref={preRef}>
				{children}
			</pre>
		</WithCopyButton>
	)
}

// Regex to detect potential file paths (used in both remark plugin and component)
const FILE_PATH_REGEX = /^(?!\/)[\w\-./]+(?<!\/)$/

/**
 * Custom remark plugin that marks potential file paths in inline code blocks
 * This is synchronous - actual file existence checking happens in the React component
 */
const remarkMarkPotentialFilePaths = () => {
	return (tree: Node) => {
		visit(tree, "inlineCode", (node: Node & { value: string; data?: any }) => {
			if (FILE_PATH_REGEX.test(node.value) && !node.value.includes("\n")) {
				// Mark as potential file path - actual checking happens in React component
				node.data = node.data || {}
				node.data.hProperties = node.data.hProperties || {}
				node.data.hProperties["data-potential-file-path"] = "true"
			}
		})
	}
}

/**
 * Component that renders inline code and checks if it's a valid file path asynchronously
 * Shows the code immediately, then adds the file link icon when confirmed
 */
const InlineCodeWithFileCheck: React.FC<ComponentProps<"code"> & { [key: string]: any }> = (props) => {
	const [isFilePath, setIsFilePath] = useState<boolean | null>(null)
	const filePath = typeof props.children === "string" ? props.children : String(props.children || "")
	const isPotentialFilePath = props["data-potential-file-path"] === "true"

	useEffect(() => {
		if (!isPotentialFilePath) {
			return
		}

		let cancelled = false

		// Check file existence asynchronously
		FileServiceClient.ifFileExistsRelativePath(StringRequest.create({ value: filePath }))
			.then((exists) => {
				if (!cancelled) {
					setIsFilePath(exists.value)
				}
			})
			.catch((err) => {
				console.debug(`Failed to check file existence for ${filePath}:`, err)
				if (!cancelled) {
					setIsFilePath(false)
				}
			})

		return () => {
			cancelled = true
		}
	}, [filePath, isPotentialFilePath])

	// If confirmed as a file path, render as clickable button
	if (isFilePath) {
		return (
			<Button
				className="p-0 ml-0.5 leading-none align-middle transition-opacity text-preformat gap-0.5 inline text-left"
				onClick={() => FileServiceClient.openFileRelativePath({ value: filePath })}
				size="icon"
				title={`Open ${filePath} in editor`}
				type="button"
				variant="icon">
				<code {...props} />
				<SquareArrowOutUpRightIcon className="inline align-middle ml-0.5" />
			</Button>
		)
	}

	// Otherwise render as regular code (shows immediately, before file check completes)
	return <code {...props} />
}

const MarkdownBlock = memo(({ markdown, compact, showCursor }: MarkdownBlockProps) => {
	return (
		<div className="inline-markdown-block">
			<span
				className={cn("inline [&>p]:mt-0", {
					"inline-cursor-container": showCursor,
					"[&>p]:m-0": compact,
				})}>
				{markdown ? <MemoizedMarkdown content={markdown} id="markdown-block" /> : markdown}
			</span>
		</div>
	)
})

export default MarkdownBlock
