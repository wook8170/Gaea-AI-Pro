import { BooleanRequest, EmptyRequest } from "@shared/proto/cline/common"
import { VSCodeButton, VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { memo, useEffect, useState } from "react"
import ClineLogoWhite from "@/assets/ClineLogoWhite"
import ApiOptions from "@/components/settings/ApiOptions"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { AccountServiceClient, StateServiceClient } from "@/services/grpc-client"
import { validateApiConfiguration } from "@/utils/validate"

const WelcomeView = memo(() => {
	const { apiConfiguration, mode } = useExtensionState()
	const [apiErrorMessage, setApiErrorMessage] = useState<string | undefined>(undefined)
	const [showApiOptions, setShowApiOptions] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const disableLetsGoButton = apiErrorMessage != null

	const handleLogin = () => {
		setIsLoading(true)
		AccountServiceClient.accountLoginClicked(EmptyRequest.create())
			.catch((err) => console.error("Failed to get login URL:", err))
			.finally(() => {
				setIsLoading(false)
			})
	}

	const handleSubmit = async () => {
		try {
			await StateServiceClient.setWelcomeViewCompleted(BooleanRequest.create({ value: true }))
		} catch (error) {
			console.error("Failed to update API configuration or complete welcome view:", error)
		}
	}

	useEffect(() => {
		setApiErrorMessage(validateApiConfiguration(mode, apiConfiguration))
	}, [apiConfiguration, mode])

	return (
		<div className="fixed inset-0 p-0 flex flex-col">
			<div className="h-full px-5 overflow-auto flex flex-col gap-2.5">
				<h2 className="text-lg font-semibold">안녕하세요, Gaea-AI-Pro입니다</h2>
				<div className="flex justify-center my-5">
					<ClineLogoWhite className="size-16" />
				</div>
				<p>
					Gaea-AI-Pro는{" "}
					<VSCodeLink className="inline" href="https://www.anthropic.com/claude/sonnet">
						Claude 4.6 Sonnet의
					</VSCodeLink>{" "}
					혁신적인 에이전트 코딩 능력 덕분에 다양한 작업을 수행할 수 있습니다. 파일을 생성 및 수정하고, 복잡한
					프로젝트를 탐색하며, 브라우저를 사용하고, 터미널 명령을 실행(물론 사용자의 허가가 필요합니다)할 수 있는
					도구들을 갖추고 있습니다. 또한 MCP를 사용하여 새로운 도구를 만들고 스스로의 기능을 확장할 수도 있습니다.
				</p>

				<p className="text-(--vscode-descriptionForeground)">
					계정을 등록하여 무료로 시작하거나, Claude Sonnet과 같은 모델을 사용할 수 있는 고유 API 키를 사용하세요.
				</p>

				<VSCodeButton appearance="primary" className="w-full mt-1" disabled={isLoading} onClick={handleLogin}>
					무료로 시작하기
					{isLoading && (
						<span className="ml-1 animate-spin">
							<span className="codicon codicon-refresh" />
						</span>
					)}
				</VSCodeButton>

				{!showApiOptions && (
					<VSCodeButton
						appearance="secondary"
						className="mt-2.5 w-full"
						onClick={() => setShowApiOptions(!showApiOptions)}>
						개인 API 키 사용하기
					</VSCodeButton>
				)}

				<div className="mt-4.5">
					{showApiOptions && (
						<div>
							<ApiOptions currentMode={mode} showModelOptions={false} />
							<VSCodeButton className="mt-0.75" disabled={disableLetsGoButton} onClick={handleSubmit}>
								시작하기!
							</VSCodeButton>
						</div>
					)}
				</div>
			</div>
		</div>
	)
})

export default WelcomeView
