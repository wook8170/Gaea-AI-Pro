import { VSCodeCheckbox, VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useExtensionState } from "@/context/ExtensionStateContext"
import PreferredLanguageSetting from "../PreferredLanguageSetting"
import Section from "../Section"
import { updateSetting } from "../utils/settingsHandlers"

interface GeneralSettingsSectionProps {
	renderSectionHeader: (tabId: string) => JSX.Element | null
}

const GeneralSettingsSection = ({ renderSectionHeader }: GeneralSettingsSectionProps) => {
	const { telemetrySetting, remoteConfigSettings } = useExtensionState()

	return (
		<div>
			{renderSectionHeader("general")}
			<Section>
				<PreferredLanguageSetting />

				<div className="mb-[5px]">
					<Tooltip>
						<TooltipContent hidden={remoteConfigSettings?.telemetrySetting === undefined}>
							이 설정은 소속 조직의 원격 구성에 의해 관리됩니다.
						</TooltipContent>
						<TooltipTrigger asChild>
							<div className="flex items-center gap-2 mb-[5px]">
								<VSCodeCheckbox
									checked={telemetrySetting !== "disabled"}
									disabled={remoteConfigSettings?.telemetrySetting === "disabled"}
									onChange={(e: any) => {
										const checked = e.target.checked === true
										updateSetting("telemetrySetting", checked ? "enabled" : "disabled")
									}}>
									오류 및 사용 보고 허용
								</VSCodeCheckbox>
								{!!remoteConfigSettings?.telemetrySetting && (
									<i className="codicon codicon-lock text-description text-sm" />
								)}
							</div>
						</TooltipTrigger>
					</Tooltip>

					<p className="text-sm mt-[5px] text-description">
						사용량 데이터와 오류 보고서를 전송하여 Gaea-AI-Pro의 성능 개선을 도와주세요. 어떠한 코드나 프롬프트, 개인
						정보도 전송되지 않습니다. 자세한 내용은{" "}
						<VSCodeLink
							className="text-inherit"
							href="https://docs.gaea-ai-pro.bot/more-info/telemetry"
							style={{ fontSize: "inherit", textDecoration: "underline" }}>
							원격 측정(Telemetry) 개요
						</VSCodeLink>
						와{" "}
						<VSCodeLink
							className="text-inherit"
							href="https://gaea-ai-pro.bot/privacy"
							style={{ fontSize: "inherit", textDecoration: "underline" }}>
							개인정보 처리방침
						</VSCodeLink>
						을 확인하세요.
					</p>
				</div>
			</Section>
		</div>
	)
}

export default GeneralSettingsSection
