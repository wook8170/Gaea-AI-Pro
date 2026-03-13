import { VSCodeButton, VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { useClineSignIn } from "@/context/ClineAuthContext"
import { useExtensionState } from "@/context/ExtensionStateContext"
import ClineLogoVariable from "../../assets/ClineLogoVariable"

// export const AccountWelcomeView = () => (
// 	<div className="flex flex-col items-center pr-3 gap-2.5">
// 		<ClineLogoWhite className="size-16 mb-4" />
export const AccountWelcomeView = () => {
	const { environment } = useExtensionState()
	const { isLoginLoading, handleSignIn } = useClineSignIn()

	return (
		<div className="flex flex-col items-center gap-2.5">
			<ClineLogoVariable className="size-16 mb-4" environment={environment} />

			<p>
				계정을 생성하여 최신 모델을 사용하고, 사용량 및 크레딧을 확인할 수 있는 빌링 대시보드와 더불어 향후 추가될 다양한
				기능들을 만나보세요.
			</p>

			<VSCodeButton className="w-full mb-4" disabled={isLoginLoading} onClick={handleSignIn}>
				Gaea AI Pro로 시작하기
				{isLoginLoading && (
					<span className="ml-1 animate-spin">
						<span className="codicon codicon-refresh" />
					</span>
				)}
			</VSCodeButton>

			<p className="text-(--vscode-descriptionForeground) text-xs text-center m-0">
				계속 진행함으로써 귀하는 <VSCodeLink href="https://gaea-ai-pro.bot/tos">서비스 약관</VSCodeLink> 및{" "}
				<VSCodeLink href="https://gaea-ai-pro.bot/privacy">개인정보 처리방침</VSCodeLink>에 동의하게 됩니다.
			</p>
		</div>
	)
}
