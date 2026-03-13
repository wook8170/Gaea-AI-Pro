import { UpdateSettingsRequest } from "@shared/proto/cline/state"
import { memo, type ReactNode, useCallback } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useExtensionState } from "@/context/ExtensionStateContext"
import Section from "../Section"
import SettingsSlider from "../SettingsSlider"
import { updateSetting } from "../utils/settingsHandlers"

// Reusable checkbox component for feature settings
interface FeatureCheckboxProps {
	checked: boolean | undefined
	onChange: (checked: boolean) => void
	label: string
	description: ReactNode
	disabled?: boolean
	isRemoteLocked?: boolean
	remoteTooltip?: string
	isVisible?: boolean
}

// Interface for feature toggle configuration
interface FeatureToggle {
	id: string
	label: string
	description: ReactNode
	settingKey: keyof UpdateSettingsRequest
	stateKey: string
	/** If set, the setting value is nested with this key (e.g., "enabled" -> { enabled: checked }) */
	nestedKey?: string
}

const agentFeatures: FeatureToggle[] = [
	{
		id: "subagents",
		label: "보조 에이전트(Subagents)",
		description: "Gaea-AI-Pro가 코드베이스를 탐색하기 위해 여러 보조 에이전트를 동시에 실행하도록 허용합니다.",
		stateKey: "subagentsEnabled",
		settingKey: "subagentsEnabled",
	},
	{
		id: "native-tool-call",
		label: "네이티브 도구 호출(Native Tool Call)",
		description: "사용 가능한 경우 모델의 네이티브 함수 호출 기능을 사용합니다.",
		stateKey: "nativeToolCallSetting",
		settingKey: "nativeToolCallEnabled",
	},
	{
		id: "parallel-tool-calling",
		label: "병렬 도구 호출(Parallel Tool Calling)",
		description: "여러 도구 호출을 동시에 실행합니다.",
		stateKey: "enableParallelToolCalling",
		settingKey: "enableParallelToolCalling",
	},
	{
		id: "strict-plan-mode",
		label: "엄격한 계획 모드(Strict Plan Mode)",
		description: "계획(Plan) 모드에서는 파일 수정을 방지합니다.",
		stateKey: "strictPlanModeEnabled",
		settingKey: "strictPlanModeEnabled",
	},
	{
		id: "auto-compact",
		label: "자동 요약(Auto Compact)",
		description: "대화 기록을 자동으로 압축하여 최적화합니다.",
		stateKey: "useAutoCondense",
		settingKey: "useAutoCondense",
	},
	{
		id: "focus-chain",
		label: "포커스 체인(Focus Chain)",
		description: "상호작용 전반에 걸쳐 컨텍스트 포커스를 유지합니다.",
		stateKey: "focusChainEnabled",
		settingKey: "focusChainSettings",
		nestedKey: "enabled",
	},
]

const editorFeatures: FeatureToggle[] = [
	{
		id: "background-edit",
		label: "백그라운드 수정(Background Edit)",
		description: "에디터 포커스를 뺏지 않고 파일 수정을 수행합니다.",
		stateKey: "backgroundEditEnabled",
		settingKey: "backgroundEditEnabled",
	},
	{
		id: "checkpoints",
		label: "체크포인트(Checkpoints)",
		description: "주요 지점에서 진행 상황을 저장하여 쉽게 되돌릴 수 있게 합니다.",
		stateKey: "enableCheckpointsSetting",
		settingKey: "enableCheckpointsSetting",
	},
	{
		id: "cline-web-tools",
		label: "Gaea-AI-Pro 웹 도구",
		description: "웹 브라우징 및 검색 기능을 활성화합니다.",
		stateKey: "clineWebToolsEnabled",
		settingKey: "clineWebToolsEnabled",
	},
	{
		id: "worktrees",
		label: "워크트리(Worktrees)",
		description: "병렬 Gaea-AI-Pro 작업을 실행하기 위해 Git 워크트리(worktree) 관리를 활성화합니다.",
		stateKey: "worktreesEnabled",
		settingKey: "worktreesEnabled",
	},
]

const experimentalFeatures: FeatureToggle[] = [
	{
		id: "yolo",
		label: "욜로 모드(Yolo Mode)",
		description:
			"사용자 확인 없이 작업을 바로 실행합니다. 계획(Plan)에서 실행(Act) 모드로 자동 전환되며 질문 도구를 비활성화합니다. 극도로 주의해서 사용하세요.",
		stateKey: "yoloModeToggled",
		settingKey: "yoloModeToggled",
	},
	{
		id: "double-check-completion",
		label: "완료 상태 재확인(Double-Check Completion)",
		description: "첫 번째 완료 시도를 거부하고, 모델에게 원래 작업 요구사항과 비교하여 결과물을 재검증하도록 요청합니다.",
		stateKey: "doubleCheckCompletionEnabled",
		settingKey: "doubleCheckCompletionEnabled",
	},
]

const advancedFeatures: FeatureToggle[] = [
	{
		id: "hooks",
		label: "훅(Hooks)",
		description: "작업 실행 중 생명주기 및 도구 훅을 활성화합니다.",
		stateKey: "hooksEnabled",
		settingKey: "hooksEnabled",
	},
]

const FeatureRow = memo(
	({
		checked = false,
		onChange,
		label,
		description,
		disabled,
		isRemoteLocked,
		isVisible = true,
		remoteTooltip,
	}: FeatureCheckboxProps) => {
		if (!isVisible) {
			return null
		}

		const checkbox = (
			<div className="flex items-center justify-between w-full">
				<div>{label}</div>
				<div>
					<Switch
						checked={checked}
						className="shrink-0"
						disabled={disabled || isRemoteLocked}
						id={label}
						onCheckedChange={onChange}
						size="lg"
					/>
					{isRemoteLocked && <i className="codicon codicon-lock text-description text-sm" />}
				</div>
			</div>
		)

		return (
			<div className="flex flex-col items-start justify-between gap-4 py-3 w-full">
				<div className="space-y-0.5 flex-1 w-full">
					{isRemoteLocked ? (
						<Tooltip>
							<TooltipTrigger asChild>{checkbox}</TooltipTrigger>
							<TooltipContent className="max-w-xs" side="top">
								{remoteTooltip}
							</TooltipContent>
						</Tooltip>
					) : (
						checkbox
					)}
				</div>
				<div className="text-xs text-description">{description}</div>
			</div>
		)
	},
)

interface FeatureSettingsSectionProps {
	renderSectionHeader: (tabId: string) => JSX.Element | null
}

const FeatureSettingsSection = ({ renderSectionHeader }: FeatureSettingsSectionProps) => {
	const {
		enableCheckpointsSetting,
		hooksEnabled,
		mcpDisplayMode,
		strictPlanModeEnabled,
		yoloModeToggled,
		useAutoCondense,
		subagentsEnabled,
		clineWebToolsEnabled,
		worktreesEnabled,
		focusChainSettings,
		remoteConfigSettings,
		nativeToolCallSetting,
		enableParallelToolCalling,
		backgroundEditEnabled,
		doubleCheckCompletionEnabled,
	} = useExtensionState()

	const handleFocusChainIntervalChange = useCallback(
		(value: number) => {
			updateSetting("focusChainSettings", { ...focusChainSettings, remindClineInterval: value })
		},
		[focusChainSettings],
	)

	const isYoloRemoteLocked = remoteConfigSettings?.yoloModeToggled !== undefined

	// State lookup for mapped features
	const featureState: Record<string, boolean | undefined> = {
		enableCheckpointsSetting,
		strictPlanModeEnabled,
		hooksEnabled,
		nativeToolCallSetting,
		focusChainEnabled: focusChainSettings?.enabled,
		useAutoCondense,
		subagentsEnabled,
		clineWebToolsEnabled: clineWebToolsEnabled?.user,
		worktreesEnabled: worktreesEnabled?.user,
		enableParallelToolCalling,
		backgroundEditEnabled,
		doubleCheckCompletionEnabled,
		yoloModeToggled: isYoloRemoteLocked ? remoteConfigSettings?.yoloModeToggled : yoloModeToggled,
	}

	// Visibility lookup for features with feature flags
	const featureVisibility: Record<string, boolean | undefined> = {
		clineWebToolsEnabled: clineWebToolsEnabled?.featureFlag,
		worktreesEnabled: worktreesEnabled?.featureFlag,
	}

	// Handler for feature toggle changes, supports nested settings like focusChainSettings
	const handleFeatureChange = useCallback(
		(feature: FeatureToggle, checked: boolean) => {
			if (feature.nestedKey) {
				// For nested settings, spread the existing value and set the nested key
				let currentValue = {}
				if (feature.settingKey === "focusChainSettings") {
					currentValue = focusChainSettings ?? {}
				}
				updateSetting(feature.settingKey, { ...currentValue, [feature.nestedKey]: checked })
			} else {
				updateSetting(feature.settingKey, checked)
			}
		},
		[focusChainSettings],
	)

	return (
		<div className="mb-2">
			{renderSectionHeader("features")}
			<Section>
				<div className="mb-5 flex flex-col gap-3">
					{/* Core features */}
					<div>
						<div className="text-xs font-medium text-foreground/80 uppercase tracking-wider mb-3">
							에이전트(Agent)
						</div>
						<div
							className="relative p-3 pt-0 my-3 rounded-md border border-editor-widget-border/50"
							id="agent-features">
							{agentFeatures.map((feature) => (
								<div key={feature.id}>
									<FeatureRow
										checked={featureState[feature.stateKey]}
										description={feature.description}
										isVisible={featureVisibility[feature.stateKey] ?? true}
										key={feature.id}
										label={feature.label}
										onChange={(checked) =>
											feature.nestedKey === "enabled"
												? handleFeatureChange(feature, checked)
												: updateSetting(feature.settingKey, checked)
										}
									/>
									{feature.id === "focus-chain" && featureState[feature.stateKey] && (
										<SettingsSlider
											label="알림 간격 (1-10)"
											max={10}
											min={1}
											onChange={handleFocusChainIntervalChange}
											step={1}
											value={focusChainSettings?.remindClineInterval || 6}
											valueWidth="w-6"
										/>
									)}
								</div>
							))}
						</div>
					</div>

					{/* Editor features */}
					<div>
						<div className="text-xs font-medium text-foreground/80 uppercase tracking-wider mb-3">에디터(Editor)</div>
						<div
							className="relative p-3 pt-0 my-3 rounded-md border border-editor-widget-border/50"
							id="optional-features">
							{editorFeatures.map((feature) => (
								<FeatureRow
									checked={featureState[feature.stateKey]}
									description={feature.description}
									isVisible={featureVisibility[feature.stateKey] ?? true}
									key={feature.id}
									label={feature.label}
									onChange={(checked) => handleFeatureChange(feature, checked)}
								/>
							))}
						</div>
					</div>

					{/* Experimental features */}
					<div>
						<div className="text-xs font-medium uppercase tracking-wider mb-3 text-warning/80">
							실험적 기능(Experimental)
						</div>
						<div
							className="relative p-3 pt-0 my-3 rounded-md border border-editor-widget-border/50 w-full"
							id="experimental-features">
							{experimentalFeatures.map((feature) => (
								<FeatureRow
									checked={featureState[feature.stateKey]}
									description={feature.description}
									disabled={feature.id === "yolo" && isYoloRemoteLocked}
									isRemoteLocked={feature.id === "yolo" && isYoloRemoteLocked}
									isVisible={featureVisibility[feature.stateKey] ?? true}
									key={feature.id}
									label={feature.label}
									onChange={(checked) => handleFeatureChange(feature, checked)}
									remoteTooltip="이 설정은 소속 조직의 원격 구성에 의해 관리됩니다."
								/>
							))}
						</div>
					</div>
				</div>

				{/* Advanced */}
				<div>
					<div className="text-xs font-medium text-foreground/80 uppercase tracking-wider mb-3">
						고급 설정(Advanced)
					</div>
					<div className="relative p-3 my-3 rounded-md border border-editor-widget-border/50" id="advanced-features">
						<div className="space-y-3">
							{advancedFeatures.map((feature) => (
								<FeatureRow
									checked={featureState[feature.stateKey]}
									description={feature.description}
									isVisible={featureVisibility[feature.stateKey] ?? true}
									key={feature.id}
									label={feature.label}
									onChange={(checked) => handleFeatureChange(feature, checked)}
								/>
							))}

							{/* MCP 표시 모드 */}
							<div className="space-y-2">
								<Label className="text-sm font-medium text-foreground">MCP 표시 모드</Label>
								<p className="text-xs text-muted-foreground">MCP 응답이 표시되는 방식을 제어합니다.</p>
								<Select onValueChange={(v) => updateSetting("mcpDisplayMode", v)} value={mcpDisplayMode}>
									<SelectTrigger className="w-full">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="plain">일반 텍스트(Plain Text)</SelectItem>
										<SelectItem value="rich">리치 디스플레이(Rich Display)</SelectItem>
										<SelectItem value="markdown">마크다운(Markdown)</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</div>
	)
}
export default memo(FeatureSettingsSection)
