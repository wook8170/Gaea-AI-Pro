import { EmptyRequest } from "@shared/proto/cline/common"
import ClineLogoWhite from "@/assets/ClineLogoWhite"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { UiServiceClient } from "@/services/grpc-client"

interface HomeHeaderProps {
	shouldShowQuickWins?: boolean
}

const HomeHeader = ({ shouldShowQuickWins = false }: HomeHeaderProps) => {
	const { environment } = useExtensionState()

	const handleTakeATour = async () => {
		try {
			await UiServiceClient.openWalkthrough(EmptyRequest.create())
		} catch (error) {
			console.error("Error opening walkthrough:", error)
		}
	}

	// Check if it's December for festive logo
	const isDecember = new Date().getMonth() === 11 // 11 = December (0-indexed)
	// 리브랜딩을 위해 기본 로고인 ClineLogoWhite로 통합 (추후 산타 로고도 Gaea 기반으로 필요시 교체)
	const LogoComponent = ClineLogoWhite

	return (
		<div className="flex flex-col items-center mb-5">
			<div className="my-7">
				<ClineLogoWhite className="size-20" />
			</div>
			<div className="text-center flex items-center justify-center px-4">
				<h1 className="m-0 font-bold">무엇을 도와드릴까요?</h1>
			</div>
			{shouldShowQuickWins && (
				<div className="mt-4">
					<button
						className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-panel bg-white/2 hover:bg-list-background-hover transition-colors duration-150 ease-in-out text-code-foreground text-sm font-medium cursor-pointer"
						onClick={handleTakeATour}
						type="button">
						둘러보기
						<span className="codicon codicon-play scale-90" />
					</button>
				</div>
			)}
		</div>
	)
}

export default HomeHeader
