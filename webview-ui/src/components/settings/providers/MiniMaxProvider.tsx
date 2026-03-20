import { minimaxModels } from "@shared/api"
import { Mode } from "@shared/storage/types"
import { VSCodeDropdown, VSCodeOption } from "@vscode/webview-ui-toolkit/react"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { ApiKeyField } from "../common/ApiKeyField"
import { ModelInfoView } from "../common/ModelInfoView"
import { DropdownContainer, ModelSelector } from "../common/ModelSelector"
import ThinkingBudgetSlider from "../ThinkingBudgetSlider"
import { normalizeApiConfiguration } from "../utils/providerUtils"
import { useApiConfigurationHandlers } from "../utils/useApiConfigurationHandlers"

/**
 * Props for the MinimaxProvider component
 */
interface MinimaxProviderProps {
	showModelOptions: boolean
	isPopup?: boolean
	currentMode: Mode
}

/**
 * The Minimax AI Studio provider configuration component
 */
export const MinimaxProvider = ({ showModelOptions, isPopup, currentMode }: MinimaxProviderProps) => {
	const { apiConfiguration } = useExtensionState()
	const { handleFieldChange, handleModeFieldChange } = useApiConfigurationHandlers()

	// Get the normalized configuration
	const { selectedModelId, selectedModelInfo } = normalizeApiConfiguration(apiConfiguration, currentMode)

	return (
		<div>
			<DropdownContainer className="dropdown-container" style={{ position: "inherit" }}>
				<div className="flex flex-col gap-2 mb-2">
					<span style={{ fontWeight: 500, marginTop: 5 }}>MiniMax 엔트리포인트</span>
					<VSCodeDropdown
						onChange={(e) => handleFieldChange("minimaxApiLine", (e.target as any).value)}
						style={{ width: "100%" }}
						value={apiConfiguration?.minimaxApiLine || "international"}>
						<VSCodeOption value="international">국제 서버 (api.minimax.io)</VSCodeOption>
						<VSCodeOption value="china">중국 서버 (api.minimaxi.com)</VSCodeOption>
					</VSCodeDropdown>
				</div>
			</DropdownContainer>
			<p className="text-xs text-description mt-0 mb-3">
				지역에 맞는 API 엔드포인트를 선택하세요: 중국 거주 시 <code>api.minimaxi.com</code>, 그 외 지역은 <code>api.minimax.io</code>를 선택하시면 됩니다.
			</p>
			<ApiKeyField
				initialValue={apiConfiguration?.minimaxApiKey || ""}
				onChange={(value) => handleFieldChange("minimaxApiKey", value)}
				providerName="MiniMax"
				signupUrl={
					apiConfiguration?.minimaxApiLine === "china"
						? "https://platform.minimaxi.com/user-center/basic-information/interface-key"
						: "https://www.minimax.io/platform/user-center/basic-information/interface-key"
				}
			/>

			{showModelOptions && (
				<>
					<ModelSelector
						models={minimaxModels}
						onChange={(e: any) =>
							handleModeFieldChange(
								{ plan: "planModeApiModelId", act: "actModeApiModelId" },
								e.target.value,
								currentMode,
							)
						}
						selectedModelId={selectedModelId}
					/>

					{selectedModelInfo?.supportsReasoning && (
						<ThinkingBudgetSlider currentMode={currentMode} showEnableToggle={false} />
					)}

					<ModelInfoView isPopup={isPopup} modelInfo={selectedModelInfo} selectedModelId={selectedModelId} />
				</>
			)}
		</div>
	)
}
