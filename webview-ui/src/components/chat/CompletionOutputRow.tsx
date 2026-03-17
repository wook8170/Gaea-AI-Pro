import { Int64Request } from "@shared/proto/cline/common"
import { CircleCheckBig } from "lucide-react"
import { memo } from "react"
import { PLATFORM_CONFIG, PlatformType } from "@/config/platform.config"
import { cn } from "@/lib/utils"
import { TaskServiceClient } from "@/services/grpc-client"
import { CopyButton } from "../common/CopyButton"
import SuccessButton from "../common/SuccessButton"
import { QuoteButtonState } from "./ChatRow"
import { MarkdownRow } from "./MarkdownRow"
import QuoteButton from "./QuoteButton"

interface CompletionOutputRowProps {
	text: string
	quoteButtonState: QuoteButtonState
	handleQuoteClick: () => void
	headClassNames?: string
	showActionRow?: boolean
	seeNewChangesDisabled: boolean
	setSeeNewChangesDisabled: (value: boolean) => void
	explainChangesDisabled: boolean
	setExplainChangesDisabled: (value: boolean) => void
	messageTs: number
}

export const CompletionOutputRow = memo(
	({
		headClassNames,
		text,
		quoteButtonState,
		showActionRow,
		seeNewChangesDisabled,
		setSeeNewChangesDisabled,
		explainChangesDisabled,
		setExplainChangesDisabled,
		messageTs,
		handleQuoteClick,
	}: CompletionOutputRowProps) => {
		const SUCCESS_COLOR = "var(--vscode-charts-green)"
		return (
			<div>
				<div
					className="rounded-sm border overflow-visible p-2 pt-3"
					style={{
						borderColor: `color-mix(in srgb, ${SUCCESS_COLOR}, transparent 70%)`,
						backgroundColor: `color-mix(in srgb, ${SUCCESS_COLOR}, transparent 90%)`,
					}}>
					{/* Title */}
					<div className={cn(headClassNames, "justify-between px-1")}>
						<div className="flex gap-2 items-center">
							<CircleCheckBig className="size-3 text-success" />
							<span className="text-success font-bold">작업 완료</span>
						</div>
						<CopyButton className="text-success" textToCopy={text} />
					</div>
					{/* Content */}
					<div
						className="w-full relative border-t-1 rounded-b-sm"
						style={{ borderColor: `color-mix(in srgb, ${SUCCESS_COLOR}, transparent 80%)` }}>
						<div className="completion-output-content p-2 pt-3 w-full [&_hr]:opacity-20 [&_p:last-child]:mb-0 rounded-sm">
							<MarkdownRow markdown={text} />
							{quoteButtonState.visible && (
								<QuoteButton left={quoteButtonState.left} onClick={handleQuoteClick} top={quoteButtonState.top} />
							)}
						</div>
					</div>
				</div>
				{/* Action Buttons */}
				{showActionRow && (
					<CompletionOutputActionRow
						explainChangesDisabled={explainChangesDisabled}
						messageTs={messageTs}
						seeNewChangesDisabled={seeNewChangesDisabled}
						setExplainChangesDisabled={setExplainChangesDisabled}
						setSeeNewChangesDisabled={setSeeNewChangesDisabled}
					/>
				)}
			</div>
		)
	},
)

CompletionOutputRow.displayName = "CompletionOutputRow"

const CompletionOutputActionRow = memo(
	({
		seeNewChangesDisabled,
		setSeeNewChangesDisabled,
		explainChangesDisabled,
		setExplainChangesDisabled,
		messageTs,
	}: {
		seeNewChangesDisabled: boolean
		setSeeNewChangesDisabled: (value: boolean) => void
		explainChangesDisabled: boolean
		setExplainChangesDisabled: (value: boolean) => void
		messageTs: number
	}) => {
		return (
			<div
				style={{
					paddingTop: 10,
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
					gap: 8,
					flexWrap: "wrap",
				}}>
				<SuccessButton
					disabled={seeNewChangesDisabled}
					onClick={() => {
						setSeeNewChangesDisabled(true)
						TaskServiceClient.taskCompletionViewChanges(
							Int64Request.create({
								value: messageTs,
							}),
						).catch((err) => console.error("Failed to show task completion view changes:", err))
					}}
					style={seeNewChangesDisabled ? { cursor: "wait" } : {}}>
					<i className="codicon codicon-new-file" style={{ fontSize: "12px", marginRight: "4px" }} />
					<span>변경 사항 보기</span>
				</SuccessButton>

				{PLATFORM_CONFIG.type === PlatformType.VSCODE && (
					<SuccessButton
						disabled={explainChangesDisabled}
						onClick={() => {
							setExplainChangesDisabled(true)
							TaskServiceClient.explainChanges({
								metadata: {},
								messageTs,
							}).catch((err) => {
								console.error("Failed to explain changes:", err)
								setExplainChangesDisabled(false)
							})
						}}
						style={explainChangesDisabled ? { cursor: "wait" } : {}}>
						<i className="codicon codicon-comment-discussion" style={{ fontSize: "12px", marginRight: "4px" }} />
						<span>{explainChangesDisabled ? "설명 중..." : "변경 사항 설명"}</span>
					</SuccessButton>
				)}
			</div>
		)
	},
)
