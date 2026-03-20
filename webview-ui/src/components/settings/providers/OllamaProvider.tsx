import { StringRequest } from "@shared/proto/cline/common"
import { Mode } from "@shared/storage/types"
import { VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { useCallback, useEffect, useState } from "react"
import { useInterval } from "react-use"
import UseCustomPromptCheckbox from "@/components/settings/UseCustomPromptCheckbox"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { ModelsServiceClient } from "@/services/grpc-client"
import { ApiKeyField } from "../common/ApiKeyField"
import { BaseUrlField } from "../common/BaseUrlField"
import { DebouncedTextField } from "../common/DebouncedTextField"
import OllamaModelPicker from "../OllamaModelPicker"
import { getModeSpecificFields } from "../utils/providerUtils"
import { useApiConfigurationHandlers } from "../utils/useApiConfigurationHandlers"

/**
 * Props for the OllamaProvider component
 */
interface OllamaProviderProps {
	showModelOptions: boolean
	isPopup?: boolean
	currentMode: Mode
}

/**
 * The Ollama provider configuration component
 */
export const OllamaProvider = ({ showModelOptions, isPopup, currentMode }: OllamaProviderProps) => {
	const { apiConfiguration } = useExtensionState()
	const { handleFieldChange, handleModeFieldChange } = useApiConfigurationHandlers()

	const { ollamaModelId } = getModeSpecificFields(apiConfiguration, currentMode)

	const [ollamaModels, setOllamaModels] = useState<string[]>([])

	// Poll ollama models
	const requestOllamaModels = useCallback(async () => {
		try {
			const response = await ModelsServiceClient.getOllamaModels(
				StringRequest.create({
					value: apiConfiguration?.ollamaBaseUrl || "",
				}),
			)
			if (response && response.values) {
				setOllamaModels(response.values)
			}
		} catch (error) {
			console.error("Failed to fetch Ollama models:", error)
			setOllamaModels([])
		}
	}, [apiConfiguration?.ollamaBaseUrl])

	useEffect(() => {
		requestOllamaModels()
	}, [requestOllamaModels])

	useInterval(requestOllamaModels, 2000)

	return (
		<div className="flex flex-col gap-2">
			<BaseUrlField
				initialValue={apiConfiguration?.ollamaBaseUrl}
				label="Use custom base URL"
				onChange={(value) => handleFieldChange("ollamaBaseUrl", value)}
				placeholder="Default: http://localhost:11434"
			/>

			{apiConfiguration?.ollamaBaseUrl && (
				<ApiKeyField
					helpText="인증된 Ollama 인스턴스 또는 클라우드 서비스를 위한 선택적 API 키입니다. 로컬 설치의 경우 비워두세요."
					initialValue={apiConfiguration?.ollamaApiKey || ""}
					onChange={(value) => handleFieldChange("ollamaApiKey", value)}
					placeholder="API 키 입력 (선택 사항)..."
					providerName="Ollama"
				/>
			)}

			{/* Model selection - use filterable picker */}
			<label htmlFor="ollama-model-selection">
				<span className="font-semibold">모델</span>
			</label>
			<OllamaModelPicker
				ollamaModels={ollamaModels}
				onModelChange={(modelId) => {
					handleModeFieldChange({ plan: "planModeOllamaModelId", act: "actModeOllamaModelId" }, modelId, currentMode)
				}}
				placeholder={ollamaModels.length > 0 ? "Search and select a model..." : "e.g. llama3.1"}
				selectedModelId={ollamaModelId || ""}
			/>

			{/* Show status message based on model availability */}
			{ollamaModels.length === 0 && (
				<p className="text-sm mt-1 text-description italic">
					Unable to fetch models from Ollama server. Please ensure Ollama is running and accessible, or enter the model
					ID manually above.
				</p>
			)}

			<DebouncedTextField
				initialValue={apiConfiguration?.ollamaApiOptionsCtxNum || "32768"}
				onChange={(v) => handleFieldChange("ollamaApiOptionsCtxNum", v || undefined)}
				placeholder="기본값: 8192"
				style={{ width: "100%" }}>
				<span className="font-semibold">모델 컨텍스트 창</span>
			</DebouncedTextField>

			{showModelOptions && (
				<>
					<DebouncedTextField
						initialValue={apiConfiguration?.requestTimeoutMs ? apiConfiguration.requestTimeoutMs.toString() : "30000"}
						onChange={(value) => {
							// Convert to number, with validation
							const numValue = Number.parseInt(value, 10)
							if (!Number.isNaN(numValue) && numValue > 0) {
								handleFieldChange("requestTimeoutMs", numValue)
							}
						}}
						placeholder="기본값: 30000 (30초)"
						style={{ width: "100%" }}>
						<span className="font-semibold">요청 시간 제한 (ms)</span>
					</DebouncedTextField>
					<p className="text-xs mt-0 text-description">
						API 응답을 기다리는 최대 시간(밀리초)입니다. 이 시간을 초과하면 타임아웃됩니다.
					</p>
				</>
			)}

			<UseCustomPromptCheckbox providerId="ollama" />

			<p
				style={{
					fontSize: "12px",
					marginTop: "5px",
					color: "var(--vscode-descriptionForeground)",
				}}>
				Ollama allows you to run models locally on your computer. For instructions on how to get started, see their{" "}
				<VSCodeLink
					href="https://github.com/ollama/ollama/blob/main/README.md"
					style={{ display: "inline", fontSize: "inherit" }}>
					quickstart guide.
				</VSCodeLink>{" "}
				<span style={{ color: "var(--vscode-errorForeground)" }}>
					(<span style={{ fontWeight: 500 }}>참고:</span> Gaea AI Pro는 복잡한 프롬프트(complex prompts)를 사용하므로
					Claude 모델에서 가장 잘 작동합니다. 성능이 낮은 모델은 예상대로 작동하지 않을 수 있습니다.)
				</span>
			</p>
		</div>
	)
}
