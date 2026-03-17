import { StringRequest } from "@shared/proto/cline/common"
import { FolderIcon } from "lucide-react"
import { memo } from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { TaskServiceClient } from "@/services/grpc-client"

type HistoryPreviewProps = {
	showHistoryView: () => void
}

const HistoryPreview = ({ showHistoryView }: HistoryPreviewProps) => {
	const { taskHistory } = useExtensionState()
	const handleHistorySelect = (id: string) => {
		TaskServiceClient.showTaskWithId(StringRequest.create({ value: id })).catch((error) =>
			console.error("Error showing task:", error),
		)
	}

	const formatDate = (timestamp: number) => {
		const date = new Date(timestamp)
		return date?.toLocaleString("ko-KR", {
			month: "long",
			day: "numeric",
		})
	}

	return (
		<div style={{ flexShrink: 0 }}>
			<style>
				{`
					.history-preview-item {
						background-color: color-mix(in srgb, var(--vscode-toolbar-hoverBackground) 65%, transparent);
						border-radius: 4px;
						position: relative;
						overflow: hidden;
						cursor: pointer;
						margin-bottom: 8px;
						padding: 10px 12px;
						display: flex;
						flex-direction: column;
						gap: 6px;
					}
					.history-preview-item:hover {
						background-color: color-mix(in srgb, var(--vscode-toolbar-hoverBackground) 100%, transparent);
						pointer-events: auto;
					}
					.history-row {
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 100%;
						gap: 12px;
					}
					.history-task-content {
						flex: 1;
						display: flex;
						align-items: flex-start;
						gap: 8px;
						min-width: 0;
					}
					.history-task-description {
						flex: 1;
						overflow: hidden;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
						color: var(--vscode-foreground);
						font-size: var(--vscode-font-size);
						line-height: 1.4;
					}
					.history-date {
						color: var(--vscode-descriptionForeground);
						font-size: 0.85em;
						white-space: nowrap;
						flex-shrink: 0;
					}
					.history-cost-chip {
						background-color: var(--vscode-badge-background);
						color: var(--vscode-badge-foreground);
						padding: 2px 8px;
						border-radius: 12px;
						font-size: 0.85em;
						font-weight: 500;
						white-space: nowrap;
						flex-shrink: 0;
					}
					.history-view-all-btn {
						background: none;
						border: none;
						padding: 4px 0 4px 8px;
						cursor: pointer;
						font-size: 0.85em;
						font-weight: 500;
						color: var(--vscode-descriptionForeground);
						white-space: nowrap;
						display: flex;
						align-items: center;
						gap: 2px;
					}
					.history-view-all-btn .codicon {
						font-size: 1.2em;
					}
					.history-view-all-btn:hover {
						color: var(--vscode-foreground);
					}
				`}
			</style>

			<div
				className="history-header"
				style={{
					color: "var(--vscode-descriptionForeground)",
					margin: "10px 16px 10px 16px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
				<div style={{ display: "flex", alignItems: "center" }}>
					<span
						className="codicon codicon-comment-discussion"
						style={{
							marginRight: "4px",
							transform: "scale(0.9)",
						}}
					/>
					<span
						style={{
							fontWeight: 500,
							fontSize: "0.85em",
							textTransform: "uppercase",
						}}>
						최근 대화
					</span>
				</div>
				{taskHistory.filter((item) => item.ts && item.task).length > 0 && (
					<button
						aria-label="View all history"
						className="history-view-all-btn"
						onClick={() => showHistoryView()}
						type="button">
						전체 보기
						<span className="codicon codicon-chevron-right" />
					</button>
				)}
			</div>

			{
				<div className="px-4">
					{taskHistory.filter((item) => item.ts && item.task).length > 0 ? (
						taskHistory
							.filter((item) => item.ts && item.task)
							.slice(0, 3)
							.map((item) => {
								const workspacePath = item.cwdOnTaskInitialization || ""

								return (
									<div
										className="history-preview-item"
										key={item.id}
										onClick={() => handleHistorySelect(item.id)}>
										<div className="history-row">
											<div className="history-task-content">
												{item.isFavorited && (
													<span
														aria-label="Favorited"
														className="codicon codicon-star-full"
														style={{
															color: "var(--vscode-button-background)",
															flexShrink: 0,
														}}
													/>
												)}
												<div className="history-task-description ph-no-capture">{item.task}</div>
											</div>
											<span className="history-date">{formatDate(item.ts)}</span>
										</div>

										<div className="history-row mt-0.5">
											{workspacePath ? (
												<Tooltip>
													<TooltipTrigger asChild>
														<div
															className="flex items-center gap-1 px-1.5 py-0.5 rounded-xs bg-accent/5 border border-accent/10 min-w-0 cursor-help flex-1"
															onClick={(e) => e.stopPropagation()}
															style={{
																fontSize: "10px",
																color: "var(--vscode-descriptionForeground)",
															}}>
															<FolderIcon className="!size-1 flex-shrink-0" />
															<span className="truncate max-w-[500px]">{workspacePath}</span>
														</div>
													</TooltipTrigger>
													<TooltipContent className="max-w-md break-all" side="bottom">
														{workspacePath}
													</TooltipContent>
												</Tooltip>
											) : (
												<div />
											)}
											{item.totalCost != null && (
												<span className="history-cost-chip">${item.totalCost.toFixed(2)}</span>
											)}
										</div>
									</div>
								)
							})
					) : (
						<div
							style={{
								textAlign: "center",
								color: "var(--vscode-descriptionForeground)",
								fontSize: "var(--vscode-font-size)",
								padding: "10px 0",
							}}>
							최근 대화 기록이 없습니다
						</div>
					)}
				</div>
			}
		</div>
	)
}

export default memo(HistoryPreview)
