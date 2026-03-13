import { Mode } from "@shared/storage/types"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { ApiKeyField } from "../common/ApiKeyField"
import { DebouncedTextField } from "../common/DebouncedTextField"
import { getModeSpecificFields } from "../utils/providerUtils"
import { useApiConfigurationHandlers } from "../utils/useApiConfigurationHandlers"

/**
 * Props for the TogetherProvider component
 */
interface TogetherProviderProps {
	showModelOptions: boolean
	isPopup?: boolean
	currentMode: Mode
}

/**
 * The Together provider configuration component
 */
export const TogetherProvider = ({ showModelOptions, isPopup, currentMode }: TogetherProviderProps) => {
	const { apiConfiguration } = useExtensionState()
	const { handleFieldChange, handleModeFieldChange } = useApiConfigurationHandlers()

	const { togetherModelId } = getModeSpecificFields(apiConfiguration, currentMode)

	return (
		<div>
			<ApiKeyField
				helpText="이 키는 로컬에 저장되며 이 확장에서 API 요청을 보내는 데만 사용됩니다. (참고: Gaea AI Pro는 복잡한 프롬프트(complex prompts)를 사용하므로 Claude 모델에서 가장 잘 작동합니다. 성능이 낮은 모델은 예상대로 작동하지 않을 수 있습니다.)"
				initialValue={apiConfiguration?.togetherApiKey || ""}
				onChange={(value) => handleFieldChange("togetherApiKey", value)}
				providerName="Together"
			/>
			<p
				style={{
					fontSize: "12px",
					marginTop: 3,
					color: "var(--vscode-descriptionForeground)",
				}}>
				<span style={{ color: "var(--vscode-errorForeground)" }}>
					(<span style={{ fontWeight: 500 }}>참고:</span> Gaea AI Pro는 복잡한 프롬프트(complex prompts)를 사용하므로
					Claude 모델에서 가장 잘 작동합니다. 성능이 낮은 모델은 예상대로 작동하지 않을 수 있습니다.)
				</span>
			</p>
			<DebouncedTextField
				initialValue={togetherModelId || ""}
				onChange={(value) =>
					handleModeFieldChange({ plan: "planModeTogetherModelId", act: "actModeTogetherModelId" }, value, currentMode)
				}
				placeholder={"Enter Model ID..."}
				style={{ width: "100%" }}>
				<span style={{ fontWeight: 500 }}>Model ID</span>
			</DebouncedTextField>
		</div>
	)
}
