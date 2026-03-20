import { nebiusModels } from "@shared/api"
import { Mode } from "@shared/storage/types"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { ApiKeyField } from "../common/ApiKeyField"
import { ModelInfoView } from "../common/ModelInfoView"
import { ModelSelector } from "../common/ModelSelector"
import { normalizeApiConfiguration } from "../utils/providerUtils"
import { useApiConfigurationHandlers } from "../utils/useApiConfigurationHandlers"

/**
 * Props for the NebiusProvider component
 */
interface NebiusProviderProps {
	showModelOptions: boolean
	isPopup?: boolean
	currentMode: Mode
}

/**
 * The Nebius AI Studio provider configuration component
 */
export const NebiusProvider = ({ showModelOptions, isPopup, currentMode }: NebiusProviderProps) => {
	const { apiConfiguration } = useExtensionState()
	const { handleFieldChange, handleModeFieldChange } = useApiConfigurationHandlers()

	const { selectedModelId, selectedModelInfo } = normalizeApiConfiguration(apiConfiguration, currentMode)

	return (
		<div>
			<ApiKeyField
				helpText="이 키는 로컬에 저장되며 이 확장에서 API 요청을 보내는 데만 사용됩니다. (참고: Gaea AI Pro는 복잡한 프롬프트(complex prompts)를 사용하므로 Claude 모델에서 가장 잘 작동합니다. 성능이 낮은 모델은 예상대로 작동하지 않을 수 있습니다.)"
				initialValue={apiConfiguration?.nebiusApiKey || ""}
				onChange={(value) => handleFieldChange("nebiusApiKey", value)}
				providerName="Nebius"
				signupUrl="https://studio.nebius.com/settings/api-keys"
			/>

			{showModelOptions && (
				<>
					<ModelSelector
						label="모델"
						models={nebiusModels}
						onChange={(e: any) =>
							handleModeFieldChange(
								{ plan: "planModeApiModelId", act: "actModeApiModelId" },
								e.target.value,
								currentMode,
							)
						}
						selectedModelId={selectedModelId}
					/>

					<ModelInfoView isPopup={isPopup} modelInfo={selectedModelInfo} selectedModelId={selectedModelId} />
				</>
			)}
		</div>
	)
}
