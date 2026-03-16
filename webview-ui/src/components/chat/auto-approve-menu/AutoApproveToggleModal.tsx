import { VSCodeButton, VSCodeCheckbox } from "@vscode/webview-ui-toolkit/react"
import React, { useEffect, useRef, useState } from "react"
import { useClickAway, useWindowSize } from "react-use"
import PopupModalContainer from "@/components/common/PopupModalContainer"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { useAutoApproveActions } from "@/hooks/useAutoApproveActions"
import { getAsVar, VSC_DESCRIPTION_FOREGROUND, VSC_TITLEBAR_INACTIVE_FOREGROUND } from "@/utils/vscStyles"
import AutoApproveMenuItem from "./AutoApproveMenuItem"
import { updateAutoApproveSettings } from "./AutoApproveSettingsAPI"
import { ACTION_METADATA } from "./constants"

const breakpoint = 400

const AutoApproveToggleModal: React.FC = () => {
	const { autoApprovalSettings, yoloModeToggled, navigateToSettings } = useExtensionState()
	const { isChecked, updateAction } = useAutoApproveActions()
	const [isVisible, setIsVisible] = useState(false)
	const buttonRef = useRef<HTMLDivElement>(null)
	const modalRef = useRef<HTMLDivElement>(null)
	const itemsContainerRef = useRef<HTMLDivElement>(null)
	const [containerWidth, setContainerWidth] = useState(0)
	const { width: viewportWidth, height: viewportHeight } = useWindowSize()
	const [arrowPosition, setArrowPosition] = useState(0)
	const [menuPosition, setMenuPosition] = useState(0)

	// Close modal when clicking outside
	useClickAway(modalRef, (e) => {
		if (buttonRef.current && buttonRef.current.contains(e.target as Node)) {
			return
		}
		setIsVisible(false)
	})

	// Calculate positions for modal and arrow
	useEffect(() => {
		if (isVisible && buttonRef.current) {
			const buttonRect = buttonRef.current.getBoundingClientRect()
			const buttonCenter = buttonRect.left + buttonRect.width / 2
			const rightPosition = document.documentElement.clientWidth - buttonCenter - 5

			setArrowPosition(rightPosition)
			setMenuPosition(buttonRect.top + 1)
		}
	}, [isVisible, viewportWidth, viewportHeight])

	// Track container width for responsive layout
	useEffect(() => {
		if (!isVisible) {
			return
		}

		const updateWidth = () => {
			if (itemsContainerRef.current) {
				setContainerWidth(itemsContainerRef.current.offsetWidth)
			}
		}

		updateWidth()
		const resizeObserver = new ResizeObserver(updateWidth)
		if (itemsContainerRef.current) {
			resizeObserver.observe(itemsContainerRef.current)
		}

		return () => {
			resizeObserver.disconnect()
		}
	}, [isVisible])

	const handleNavigateToFeatures = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		navigateToSettings("features")
	}

	return (
		<div className="inline-flex min-w-0 max-w-full items-center" ref={modalRef}>
			<div className="inline-flex w-full items-center" ref={buttonRef}>
				<Tooltip>
					{!isVisible && <TooltipContent>자동 승인 설정</TooltipContent>}
					<TooltipTrigger>
						<VSCodeButton
							appearance="icon"
							aria-label={isVisible ? "자동 승인 설정 숨기기" : "자동 승인 설정 보기"}
							className="p-0 m-0 flex items-center"
							onClick={() => setIsVisible(!isVisible)}>
							<span
								className={`codicon ${yoloModeToggled ? "codicon-warning" : "codicon-pass"} text-[12.5px]`}
								style={{ color: yoloModeToggled ? "var(--vscode-errorForeground)" : "inherit" }}
							/>
						</VSCodeButton>
					</TooltipTrigger>
				</Tooltip>
			</div>

			{isVisible && (
				<PopupModalContainer $arrowPosition={arrowPosition} $maxHeight="70vh" $menuPosition={menuPosition}>
					<div className="flex-shrink-0 px-3 pt-2">
						<div className="flex justify-between items-center mb-2.5">
							<div className="m-0 text-sm font-medium">자동 승인</div>
							<VSCodeButton
								appearance="icon"
								aria-label="자동 승인 상세 설정으로 이동"
								onClick={(e) => {
									setIsVisible(false)
									handleNavigateToFeatures(e)
								}}>
								<span className="codicon codicon-gear text-[10px]" />
							</VSCodeButton>
						</div>
					</div>

					<div className="flex-1 overflow-y-auto px-3 pb-3" style={{ minHeight: 0 }}>
						{yoloModeToggled ? (
							<div className="p-2 border border-error/20 bg-error/10 rounded-sm mb-3">
								<div className="text-xs font-bold mb-1 text-error">YOLO 모드 활성화됨</div>
								<div className="text-[11px] text-muted-foreground">
									YOLO 모드에서는 모든 작업이 자동으로 승인됩니다. 설정에서 비활성화할 수 있습니다.
								</div>
							</div>
						) : (
							<>
								<div className="mb-2.5 text-muted-foreground text-[11px]">
									승인 요청 없이 다음 작업을 수행하도록 허용합니다:
								</div>

								<div
									className="relative mb-2 w-full"
									ref={itemsContainerRef}
									style={{
										columnCount: containerWidth > breakpoint ? 2 : 1,
										columnGap: "4px",
									}}>
									{containerWidth > breakpoint && (
										<div
											className="absolute left-1/2 top-0 bottom-0 opacity-20"
											style={{
												background: getAsVar(VSC_TITLEBAR_INACTIVE_FOREGROUND),
												transform: "translateX(-50%)",
											}}
										/>
									)}

									{ACTION_METADATA.map((action) => (
										<AutoApproveMenuItem
											action={action}
											isChecked={isChecked}
											key={action.id}
											onToggle={updateAction}
										/>
									))}
								</div>

								<div
									style={{
										height: "0.5px",
										background: getAsVar(VSC_DESCRIPTION_FOREGROUND),
										opacity: 0.1,
										margin: "8px 0",
									}}
								/>

								<div className="flex items-center gap-2">
									<VSCodeCheckbox
										checked={autoApprovalSettings.enableNotifications}
										onChange={async (e: any) => {
											const checked = e.target.checked === true
											await updateAutoApproveSettings({
												...autoApprovalSettings,
												version: (autoApprovalSettings.version ?? 1) + 1,
												enableNotifications: checked,
											})
										}}>
										<span className="text-[11px]">알림 활성화</span>
									</VSCodeCheckbox>
								</div>
							</>
						)}
					</div>
				</PopupModalContainer>
			)}
		</div>
	)
}

export default AutoApproveToggleModal
