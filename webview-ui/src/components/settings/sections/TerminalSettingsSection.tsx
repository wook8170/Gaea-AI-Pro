import { UpdateTerminalConnectionTimeoutResponse } from "@shared/proto/index.cline"
import { VSCodeCheckbox, VSCodeDropdown, VSCodeOption, VSCodeTextField } from "@vscode/webview-ui-toolkit/react"
import React, { useState } from "react"
import { PlatformType } from "@/config/platform.config"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { usePlatform } from "@/context/PlatformContext"
import { StateServiceClient } from "../../../services/grpc-client"
import Section from "../Section"
import TerminalOutputLineLimitSlider from "../TerminalOutputLineLimitSlider"
import { updateSetting } from "../utils/settingsHandlers"

interface TerminalSettingsSectionProps {
	renderSectionHeader: (tabId: string) => JSX.Element | null
}

export const TerminalSettingsSection: React.FC<TerminalSettingsSectionProps> = ({ renderSectionHeader }) => {
	const {
		shellIntegrationTimeout,
		terminalReuseEnabled,
		defaultTerminalProfile,
		availableTerminalProfiles,
		vscodeTerminalExecutionMode,
	} = useExtensionState()
	const platformConfig = usePlatform()
	const isVsCodePlatform = platformConfig.type === PlatformType.VSCODE

	const [inputValue, setInputValue] = useState((shellIntegrationTimeout / 1000).toString())
	const [inputError, setInputError] = useState<string | null>(null)

	const handleTimeoutChange = (event: Event) => {
		const target = event.target as HTMLInputElement
		const value = target.value

		setInputValue(value)

		const seconds = Number.parseFloat(value)
		if (Number.isNaN(seconds) || seconds <= 0) {
			setInputError("양수인 숫자를 입력해 주세요.")
			return
		}

		setInputError(null)
		const timeoutMs = Math.round(seconds * 1000)

		StateServiceClient.updateTerminalConnectionTimeout({ timeoutMs })
			.then((response: UpdateTerminalConnectionTimeoutResponse) => {
				const timeoutMs = response.timeoutMs
				// Backend calls postStateToWebview(), so state will update via subscription
				// Just sync the input value with the confirmed backend value
				if (timeoutMs !== undefined) {
					setInputValue((timeoutMs / 1000).toString())
				}
			})
			.catch((error) => {
				console.error("Failed to update terminal connection timeout:", error)
			})
	}

	const handleInputBlur = () => {
		if (inputError) {
			setInputValue((shellIntegrationTimeout / 1000).toString())
			setInputError(null)
		}
	}

	const handleTerminalReuseChange = (event: Event) => {
		const target = event.target as HTMLInputElement
		const checked = target.checked
		updateSetting("terminalReuseEnabled", checked)
	}

	const handleExecutionModeChange = (event: Event) => {
		const target = event.target as HTMLSelectElement
		const value = target.value === "backgroundExec" ? "backgroundExec" : "vscodeTerminal"
		updateSetting("vscodeTerminalExecutionMode", value)
	}

	// Use any to avoid type conflicts between Event and FormEvent
	const handleDefaultTerminalProfileChange = (event: any) => {
		const target = event.target as HTMLSelectElement
		const profileId = target.value

		// Save immediately using the consolidated updateSettings approach
		updateSetting("defaultTerminalProfile", profileId || "default")
	}

	const profilesToShow = availableTerminalProfiles

	return (
		<div>
			{renderSectionHeader("terminal")}
			<Section>
				<div className="mb-5" id="terminal-settings-section">
					<div className="mb-4">
						<label className="font-medium block mb-1" htmlFor="default-terminal-profile">
							기본 터미널 프로필(Default Terminal Profile)
						</label>
						<VSCodeDropdown
							className="w-full"
							id="default-terminal-profile"
							onChange={handleDefaultTerminalProfileChange}
							value={defaultTerminalProfile || "default"}>
							{profilesToShow.map((profile) => (
								<VSCodeOption key={profile.id} title={profile.description} value={profile.id}>
									{profile.name}
								</VSCodeOption>
							))}
						</VSCodeDropdown>
						<p className="text-xs text-(--vscode-descriptionForeground) mt-1">
							Gaea-AI-Pro가 사용할 기본 터미널을 선택하세요. 'Default'를 선택하면 VS Code의 글로벌 설정이
							적용됩니다.
						</p>
					</div>

					<div className="mb-4">
						<div className="mb-2">
							<label className="font-medium block mb-1">셸 통합 대기 시간 (초)</label>
							<div className="flex items-center">
								<VSCodeTextField
									className="w-full"
									onBlur={handleInputBlur}
									onChange={(event) => handleTimeoutChange(event as Event)}
									placeholder="대기 시간을 초 단위로 입력하세요"
									value={inputValue}
								/>
							</div>
							{inputError && <div className="text-(--vscode-errorForeground) text-xs mt-1">{inputError}</div>}
						</div>
						<p className="text-xs text-(--vscode-descriptionForeground)">
							명령을 실행하기 전에 Gaea-AI-Pro가 셸 통합(Shell integration)이 활성화될 때까지 기다릴 시간을
							설정합니다. 터미널 연결 시간 초과가 발생하는 경우 이 값을 높여보세요.
						</p>
					</div>

					<div className="mb-4">
						<div className="flex items-center mb-2">
							<VSCodeCheckbox
								checked={terminalReuseEnabled ?? true}
								onChange={(event) => handleTerminalReuseChange(event as Event)}>
								적극적인 터미널 재사용 활성화 (Aggressive terminal reuse)
							</VSCodeCheckbox>
						</div>
						<p className="text-xs text-(--vscode-descriptionForeground)">
							활성화하면 Gaea-AI-Pro가 현재 작업 디렉토리가 아닌 기존 터미널 창들을 재사용합니다. 터미널 명령 후
							작업이 잠기는 등의 문제가 발생하면 이 기능을 비활성화하세요.
						</p>
					</div>
					{isVsCodePlatform && (
						<div className="mb-4">
							<label className="font-medium block mb-1" htmlFor="terminal-execution-mode">
								터미널 실행 모드(Terminal Execution Mode)
							</label>
							<VSCodeDropdown
								className="w-full"
								id="terminal-execution-mode"
								onChange={(event) => handleExecutionModeChange(event as Event)}
								value={vscodeTerminalExecutionMode ?? "vscodeTerminal"}>
								<VSCodeOption value="vscodeTerminal">VS Code 터미널</VSCodeOption>
								<VSCodeOption value="backgroundExec">백그라운드 실행(Background Exec)</VSCodeOption>
							</VSCodeDropdown>
							<p className="text-xs text-[var(--vscode-descriptionForeground)] mt-1">
								Gaea-AI-Pro가 명령을 VS Code 터미널에서 실행할지, 아니면 백그라운드 프로세스로 실행할지
								선택합니다.
							</p>
						</div>
					)}
					<TerminalOutputLineLimitSlider />
					<div className="mt-5 p-3 bg-(--vscode-textBlockQuote-background) rounded border border-(--vscode-textBlockQuote-border)">
						<p className="text-[13px] m-0">
							<strong>터미널에 문제가 있나요?</strong> 다음 문서를 확인해 보세요:{" "}
							<a
								className="text-(--vscode-textLink-foreground) underline hover:no-underline"
								href="https://docs.gaea-ai-pro.bot/troubleshooting/terminal-quick-fixes"
								rel="noopener noreferrer"
								target="_blank">
								터미널 빠른 해결 방법
							</a>{" "}
							또는{" "}
							<a
								className="text-(--vscode-textLink-foreground) underline hover:no-underline"
								href="https://docs.gaea-ai-pro.bot/troubleshooting/terminal-integration-guide"
								rel="noopener noreferrer"
								target="_blank">
								전체 트러블슈팅 가이드
							</a>
							.
						</p>
					</div>
				</div>
			</Section>
		</div>
	)
}

export default TerminalSettingsSection
