import { EmptyRequest } from "@shared/proto/index.cline"
import { VSCodeButton, VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { useEffect, useRef, useState } from "react"
import { RemoteConfigToggle } from "@/components/account/RemoteConfigToggle"
import { useClineAuth } from "@/context/ClineAuthContext"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { StateServiceClient } from "@/services/grpc-client"
import Section from "../Section"

interface RemoteConfigSectionProps {
	renderSectionHeader: (tabId: string) => JSX.Element | null
}

function BaseRemoteConfigSection({ renderSectionHeader, children }: React.PropsWithChildren<RemoteConfigSectionProps>) {
	return (
		<div>
			{renderSectionHeader("remote-config")}
			<Section>{children}</Section>
		</div>
	)
}

const AUTOMATIC_DELAY_MS = 30000

function RefreshButton() {
	const [isLoading, setIsLoading] = useState(false)
	const [retryIn, setRetryIn] = useState<number | null>(null)
	const intervalRef = useRef<NodeJS.Timeout>()

	useEffect(() => {
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [])

	const onRefresh = () => {
		setIsLoading(true)
		StateServiceClient.refreshRemoteConfig(EmptyRequest.create()).finally(() => {
			setIsLoading(false)
			setRetryIn(AUTOMATIC_DELAY_MS / 1000)

			intervalRef.current = setInterval(() => {
				setRetryIn((old) => {
					if (old && old > 0) return old - 1

					intervalRef.current && clearInterval(intervalRef.current)
					return null
				})
			}, 1000)
		})
	}

	return (
		<VSCodeButton
			className={`w-full rounded-xs ${isLoading ? "animate-pulse" : ""}`}
			disabled={isLoading || (retryIn !== null && retryIn > 0)}
			onClick={() => onRefresh()}>
			Refresh {retryIn && retryIn > 0 && <>(Retry in: {retryIn} seconds)</>}
		</VSCodeButton>
	)
}

interface SettingRowProps {
	label: string
	value: string | number | boolean | undefined | null
	isSecret?: boolean
}

function SettingRow({ label, value, isSecret }: SettingRowProps) {
	const displayValue = (() => {
		if (value === undefined || value === null) {
			return <span className="text-description italic">Not configured</span>
		}
		if (typeof value === "boolean") {
			return value ? <span className="text-green-500">활성화됨</span> : <span className="text-description">비활성화됨</span>
		}
		if (isSecret && typeof value === "string" && value.length > 0) {
			return <span className="font-mono text-xs">{"•".repeat(Math.min(value.length, 20))}</span>
		}
		return <span className="font-mono text-xs break-all">{String(value)}</span>
	})()

	const isLongValue = typeof value === "string" && value.length > 25
	if (isLongValue) {
		return (
			<div className="flex flex-col gap-1 py-1.5 border-b border-vscode-widget-border last:border-b-0">
				<span className="text-description text-xs">{label}</span>
				<div className="pl-2 overflow-hidden text-right">{displayValue}</div>
			</div>
		)
	}

	return (
		<div className="flex justify-between items-center py-1.5 border-b border-vscode-widget-border last:border-b-0 gap-2">
			<span className="text-description text-xs shrink-0">{label}</span>
			<span className="text-right overflow-hidden text-ellipsis">{displayValue}</span>
		</div>
	)
}

interface TestButtonProps {
	label: string
	onClick: () => Promise<void>
	disabled?: boolean
	successMessage?: string
}

function TestButton({ label, onClick, disabled, successMessage }: TestButtonProps) {
	const [isLoading, setIsLoading] = useState(false)
	const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
	const timeoutRef = useRef<NodeJS.Timeout>()

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
	}, [])

	const handleClick = async () => {
		setIsLoading(true)
		setResult(null)
		try {
			await onClick()
			setResult({ success: true, message: successMessage || "Success!" })
		} catch (error) {
			setResult({ success: false, message: error instanceof Error ? error.message : "Failed" })
		} finally {
			setIsLoading(false)
			timeoutRef.current = setTimeout(() => setResult(null), 5000)
		}
	}

	return (
		<div className="flex items-center gap-2">
			<VSCodeButton
				appearance="secondary"
				className={isLoading ? "animate-pulse" : ""}
				disabled={disabled || isLoading}
				onClick={handleClick}>
				{isLoading ? "Testing..." : label}
			</VSCodeButton>
			{result && <span className={`text-xs ${result.success ? "text-green-500" : "text-red-500"}`}>{result.message}</span>}
		</div>
	)
}

function OtelSettingsSection() {
	const { remoteConfigSettings } = useExtensionState()

	const otelEnabled = remoteConfigSettings?.openTelemetryEnabled
	const hasOtelConfig =
		otelEnabled !== undefined ||
		remoteConfigSettings?.openTelemetryOtlpEndpoint !== undefined ||
		remoteConfigSettings?.openTelemetryMetricsExporter !== undefined ||
		remoteConfigSettings?.openTelemetryLogsExporter !== undefined

	if (!hasOtelConfig) {
		return null
	}

	const handleTestOtel = async () => {
		const response = await StateServiceClient.testOtelConnection(EmptyRequest.create({}))
		if (!response.success) {
			throw new Error(response.error || "Test failed")
		}
	}

	return (
		<div className="mb-4">
			<h4 className="text-sm font-medium mb-2 flex items-center gap-2">
				<i className="codicon codicon-pulse" />
				OpenTelemetry Configuration
			</h4>
			<div className="bg-vscode-textBlockQuote-background rounded p-3 mb-2">
				<SettingRow label="활성화 여부" value={otelEnabled} />
				<SettingRow label="메트릭 내보내기" value={remoteConfigSettings?.openTelemetryMetricsExporter} />
				<SettingRow label="로그 내보내기" value={remoteConfigSettings?.openTelemetryLogsExporter} />
				<SettingRow label="OTLP Protocol" value={remoteConfigSettings?.openTelemetryOtlpProtocol} />
				<SettingRow label="OTLP Endpoint" value={remoteConfigSettings?.openTelemetryOtlpEndpoint} />
				{remoteConfigSettings?.openTelemetryOtlpMetricsEndpoint && (
					<SettingRow label="메트릭 엔드포인트" value={remoteConfigSettings?.openTelemetryOtlpMetricsEndpoint} />
				)}
				{remoteConfigSettings?.openTelemetryOtlpLogsEndpoint && (
					<SettingRow label="로그 엔드포인트" value={remoteConfigSettings?.openTelemetryOtlpLogsEndpoint} />
				)}
				{remoteConfigSettings?.openTelemetryOtlpHeaders && (
					<SettingRow
						label="OTLP 헤더"
						value={`${Object.keys(remoteConfigSettings.openTelemetryOtlpHeaders).length} header(s)`}
					/>
				)}
				{remoteConfigSettings?.openTelemetryMetricExportInterval && (
					<SettingRow
						label="메트릭 내보내기 간격"
						value={`${remoteConfigSettings.openTelemetryMetricExportInterval}ms`}
					/>
				)}
				{remoteConfigSettings?.openTelemetryOtlpInsecure !== undefined && (
					<SettingRow label="OTLP 보안 비활성화" value={remoteConfigSettings?.openTelemetryOtlpInsecure} />
				)}
				{remoteConfigSettings?.openTelemetryLogBatchSize && (
					<SettingRow label="로그 배치 크기" value={remoteConfigSettings?.openTelemetryLogBatchSize} />
				)}
				{remoteConfigSettings?.openTelemetryLogBatchTimeout && (
					<SettingRow label="로그 배치 타임아웃" value={`${remoteConfigSettings.openTelemetryLogBatchTimeout}ms`} />
				)}
				{remoteConfigSettings?.openTelemetryLogMaxQueueSize && (
					<SettingRow label="로그 최대 큐 크기" value={remoteConfigSettings?.openTelemetryLogMaxQueueSize} />
				)}
			</div>

			{otelEnabled && (
				<div className="flex gap-2 flex-wrap">
					<TestButton
						disabled={!remoteConfigSettings?.openTelemetryMetricsExporter}
						label="테스트"
						successMessage="Flushed buffers! Please check the output channel for more detailed information"
						onClick={handleTestOtel}
					/>
				</div>
			)}
		</div>
	)
}

function PromptUploadingSection() {
	const { remoteConfigSettings } = useExtensionState()

	const blobStoreConfig = remoteConfigSettings?.blobStoreConfig
	if (!blobStoreConfig) {
		return null
	}

	const handleTestPromptUploading = async () => {
		const response = await StateServiceClient.testPromptUploading(EmptyRequest.create({}))
		if (!response.success) {
			throw new Error(response.error || "Test failed")
		}
	}

	return (
		<div className="mb-4">
			<h4 className="text-sm font-medium mb-2 flex items-center gap-2">
				<i className="codicon codicon-cloud-upload" />
				Prompt Uploading Configuration
			</h4>
			<div className="bg-vscode-textBlockQuote-background rounded p-3 mb-2">
				<SettingRow label="저장소 유형" value={blobStoreConfig.adapterType?.toUpperCase()} />
				<SettingRow label="버킷(Bucket)" value={blobStoreConfig.bucket} />
				<SettingRow label="리전(Region)" value={blobStoreConfig.region} />
				{blobStoreConfig.endpoint && <SettingRow label="엔드포인트" value={blobStoreConfig.endpoint} />}
				{blobStoreConfig.accountId && <SettingRow label="계정 ID" value={blobStoreConfig.accountId} />}
				<SettingRow isSecret label="액세스 키 ID" value={blobStoreConfig.accessKeyId} />
				<SettingRow isSecret label="비밀 액세스 키" value={blobStoreConfig.secretAccessKey} />
				{blobStoreConfig.intervalMs && <SettingRow label="동기화 간격" value={`${blobStoreConfig.intervalMs}ms`} />}
				{blobStoreConfig.batchSize && <SettingRow label="배치 크기" value={blobStoreConfig.batchSize} />}
				{blobStoreConfig.maxRetries && <SettingRow label="최대 재시도 횟수" value={blobStoreConfig.maxRetries} />}
				{blobStoreConfig.maxQueueSize && <SettingRow label="최대 큐 크기" value={blobStoreConfig.maxQueueSize} />}
				<SettingRow label="백필 활성화 (Backfill)" value={blobStoreConfig.backfillEnabled} />
			</div>

			<TestButton label="업로드 테스트" onClick={handleTestPromptUploading} />
		</div>
	)
}

export function RemoteConfigSection({ renderSectionHeader }: RemoteConfigSectionProps) {
	const { remoteConfigSettings, optOutOfRemoteConfig } = useExtensionState()
	const { activeOrganization } = useClineAuth()

	if (optOutOfRemoteConfig) {
		return (
			<BaseRemoteConfigSection renderSectionHeader={renderSectionHeader}>
				<div className="flex flex-col justify-center gap-4">
					<h3>You have opted out of remote config. Opt back in to apply it and see it here.</h3>

					<RemoteConfigToggle activeOrganization={activeOrganization} />
				</div>
			</BaseRemoteConfigSection>
		)
	}

	if (!remoteConfigSettings || Object.keys(remoteConfigSettings).length === 0) {
		return (
			<BaseRemoteConfigSection renderSectionHeader={renderSectionHeader}>
				<div className="flex flex-col justify-center gap-4">
					<h3>
						You haven't configured remote config yet. Do so through our{" "}
						<VSCodeLink href="https://app.cline.bot/dashboard/organization?tab=settings">dashboard</VSCodeLink>.
					</h3>

					<RefreshButton />
				</div>
			</BaseRemoteConfigSection>
		)
	}

	return (
		<BaseRemoteConfigSection renderSectionHeader={renderSectionHeader}>
			<div className="flex flex-col gap-2">
				<p className="text-description text-xs mb-2">
					These settings are managed by your organization's remote configuration.
				</p>

				<OtelSettingsSection />
				<PromptUploadingSection />

				<div className="mt-2">
					<RefreshButton />
				</div>
			</div>
		</BaseRemoteConfigSection>
	)
}
