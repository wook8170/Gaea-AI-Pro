import { TelemetrySettingEnum, TelemetrySettingRequest } from "@shared/proto/cline/state"
import { useCallback } from "react"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { StateServiceClient } from "@/services/grpc-client"

const telemetryRequest = TelemetrySettingRequest.create({
	setting: TelemetrySettingEnum.ENABLED,
})

export const TelemetryBanner: React.FC = () => {
	const { navigateToSettings } = useExtensionState()

	const handleClose = useCallback(() => {
		StateServiceClient.updateTelemetrySetting(telemetryRequest).catch(console.error)
	}, [])

	const handleOpenSettings = useCallback(() => {
		handleClose()
		navigateToSettings()
	}, [handleClose, navigateToSettings])

	return (
		<div className="bg-banner-background text-banner-foreground px-3 py-2 flex flex-col gap-1 shrink-0 mb-1 relative text-sm m-4">
			<h3 className="m-0">Gaea-AI-Pro 개선에 참여해 주세요</h3>
			<i>(실험적 기능에 대한 접근 권한 부여)</i>
			<p className="m-0">
				Gaea-AI-Pro는 버그 수정과 확장 프로그램 개선을 위해 오류 및 사용 데이터를 수집합니다. 코드, 프롬프트 또는 개인
				정보는 절대 전송되지 않습니다.
			</p>
			<p className="m-0">
				<span>이 설정은 언제든지 </span>
				<span className="text-link cursor-pointer" onClick={handleOpenSettings}>
					설정
				</span>
				<span>에서 끌 수 있습니다.</span>
			</p>

			{/* Close button */}
			<button
				aria-label="Close banner and enable telemetry"
				className="absolute top-3 right-3 opacity-70 hover:opacity-100 cursor-pointer border-0 bg-transparent p-0 text-inherit"
				onClick={handleClose}
				type="button">
				✕
			</button>
		</div>
	)
}

export default TelemetryBanner
