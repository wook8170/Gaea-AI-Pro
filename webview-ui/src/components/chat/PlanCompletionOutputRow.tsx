import { NotepadTextIcon } from "lucide-react"
import { memo } from "react"
import { CopyButton } from "@/components/common/CopyButton"
import MarkdownBlock from "@/components/common/MarkdownBlock"
import { cn } from "@/lib/utils"

interface PlanCompletionOutputProps {
	text: string
	onCopy?: () => void
	headClassNames?: string
}

/**
 * Styled completion output for Plan mode responses
 * Uses grayscale colors to distinguish from Act mode's green success theme
 */
const PlanCompletionOutputRow = memo(({ text, headClassNames }: PlanCompletionOutputProps) => {
	const PLAN_COLOR = "var(--vscode-activityWarningBadge-background)"

	return (
		<div
			className="rounded-sm border overflow-visible p-2 pt-3"
			style={{
				borderColor: `color-mix(in srgb, ${PLAN_COLOR}, transparent 50%)`,
				backgroundColor: `color-mix(in srgb, ${PLAN_COLOR}, transparent 90%)`,
			}}>
			{/* Header */}
			<div className={cn(headClassNames, "justify-between px-1")}>
				<div className="flex gap-2 items-center">
					<NotepadTextIcon className="size-2" style={{ color: PLAN_COLOR }} />
					<span className="font-bold" style={{ color: PLAN_COLOR }}>
						Plan created
					</span>
				</div>
				<CopyButton textToCopy={text || ""} />
			</div>

			{/* Content */}
			<div
				className="w-full relative border-t-1 rounded-b-sm"
				style={{ borderColor: `color-mix(in srgb, ${PLAN_COLOR}, transparent 80%)` }}>
				<div className="plan-completion-content p-2 pt-3 w-full [&_hr]:opacity-20 [&_p:last-child]:mb-0">
					<div className="wrap-anywhere [&_hr]:opacity-20">
						<MarkdownBlock markdown={text} />
					</div>
				</div>
			</div>
		</div>
	)
})

PlanCompletionOutputRow.displayName = "PlanCompletionOutputRow"

export default PlanCompletionOutputRow
