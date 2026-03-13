# 정제된 리브랜딩 분석 보고서 (사용자 노출 문자열 중심)

## 1. 개요
사용자 요청에 따라 소스 코드 레벨(변수, 클래스, 함수, 경로, ID 등)을 제외하고, **사용자 화면에 직접 노출되는 문자열**만을 필터링한 결과입니다.

## 2. 필터링 기준
- **제외**: `import`, `export`, 변수/함수/클래스명, 시스템 경로, 내부 ID, 커맨드 식별자, 코드 주석
- **유지**: UI 타이틀, 설명(Description), 라벨, 플레이스홀더, 메시지 텍스트 등

## 3. 정제된 분석 내역

| 파일 | 위치 | 타입 | 노출 문자열 (원본) | 수정 영향도 |
|---|---|---|---|---|
| webview-ui/src/App.tsx | 41 | UI/문구 | `const { clineUser, organizations, activeOrganization } = useClineAuth()` | Medium |
| webview-ui/src/App.tsx | 74 | UI/문구 | `clineUser={clineUser}` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 35 | UI/문구 | `clineModels: Record<string, ModelInfo> \| null` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 73 | UI/문구 | `setGlobalClineRulesToggles: (toggles: Record<string, boolean>) => void` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 74 | UI/문구 | `setLocalClineRulesToggles: (toggles: Record<string, boolean>) => void` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 91 | UI/문구 | `refreshClineModels: () => void` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 231 | UI/문구 | `clineMessages: [],` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 246 | UI/문구 | `globalClineRulesToggles: {},` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 247 | UI/문구 | `localClineRulesToggles: {},` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 268 | UI/문구 | `clineWebToolsEnabled: { user: true, featureFlag: false },` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 298 | UI/문구 | `const [clineModels, setClineModels] = useState<Record<string, ModelInfo> \| null>(null)` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 366 | UI/문구 | `stateData.clineMessages = stateData.clineMessages?.length` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 367 | UI/문구 | `? stateData.clineMessages` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 368 | UI/문구 | `: prevState.clineMessages` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 514 | UI/문구 | `const partialMessage = convertProtoToClineMessage(protoMessage)` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 517 | UI/문구 | `const lastIndex = findLastIndex(prevState.clineMessages, (msg) => msg.ts === partialMessage.ts)` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 520 | UI/문구 | `newClineMessages[lastIndex] = partialMessage` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 521 | UI/문구 | `return { ...prevState, clineMessages: newClineMessages }` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 767 | UI/문구 | `ModelsServiceClient.refreshClineModelsRpc(EmptyRequest.create({}))` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 770 | UI/문구 | `setClineModels((prev) => (Object.keys(models).length > 0 ? models : (prev ?? null)))` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 772 | UI/문구 | `.catch((error: Error) => console.error("Failed to refresh Cline models:", error))` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 778 | UI/문구 | `state.apiConfiguration?.actModeApiProvider === "cline" \|\| state.apiConfiguration?.planModeApiProvider === "cline"` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 779 | UI/문구 | `if (hasClineProvider && clineModels === null) {` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 780 | UI/문구 | `refreshClineModels()` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 782 | UI/문구 | `}, [state.apiConfiguration?.actModeApiProvider, state.apiConfiguration?.planModeApiProvider, clineModels, refreshClin...` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 789 | UI/문구 | `clineModels,` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 812 | UI/문구 | `globalClineRulesToggles: state.globalClineRulesToggles \|\| {},` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 813 | UI/문구 | `localClineRulesToggles: state.localClineRulesToggles \|\| {},` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 855 | UI/문구 | `setGlobalClineRulesToggles: (toggles) =>` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 858 | UI/문구 | `globalClineRulesToggles: toggles,` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 860 | UI/문구 | `setLocalClineRulesToggles: (toggles) =>` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 863 | UI/문구 | `localClineRulesToggles: toggles,` | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 912 | UI/문구 | `refreshClineModels,` | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 18 | UI/문구 | `clineUser: ClineUser \| null` | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 26 | UI/문구 | `const [user, setUser] = useState<ClineUser \| null>(null)` | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 49 | UI/문구 | `console.log("Extension: ClineAuthContext: user updated:", user?.uid)` | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 89 | UI/문구 | `clineUser: user,` | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 99 | UI/문구 | `const context = useContext(ClineAuthContext)` | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 101 | UI/문구 | `throw new Error("useClineAuth must be used within a ClineAuthProvider")` | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 48 | UI/문구 | `<ClineAuthProvider>` | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 67 | UI/문구 | `overrides?: Partial<ClineAuthContextType>` | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 70 | UI/문구 | `const authContext = useClineAuth()` | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 75 | UI/문구 | `(overrideStates?: Partial<ExtensionStateContextType>, classNames?: string, authOverrides?: Partial<ClineAuthContextTy...` | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 78 | UI/문구 | `<ClineAuthProviderWithOverrides overrides={authOverrides}>` | Medium |
| webview-ui/src/Providers.tsx | 13 | UI/문구 | `<ClineAuthProvider>` | Medium |
| webview-ui/src/utils/getConfiguredProviders.ts | 20 | UI/문구 | `return ["cline"] // Cline is always available` | Medium |
| webview-ui/src/utils/getConfiguredProviders.ts | 24 | UI/문구 | `configured.push("cline")` | Medium |
| webview-ui/src/utils/validate.ts | 73 | UI/문구 | `case "cline":` | Medium |
| webview-ui/src/utils/validate.ts | 184 | UI/문구 | `clineModels?: Record<string, ModelInfo>,` | Medium |
| webview-ui/src/utils/validate.ts | 187 | UI/문구 | `const { apiProvider, openRouterModelId, clineModelId } = getModeSpecificFields(apiConfiguration, currentMode)` | Medium |
| webview-ui/src/utils/validate.ts | 199 | UI/문구 | `case "cline":` | Medium |
| webview-ui/src/utils/validate.ts | 201 | UI/문구 | `if (!clineResolvedModelId) {` | Medium |
| webview-ui/src/utils/validate.ts | 204 | UI/문구 | `if (clineModels && !Object.keys(clineModels).includes(clineResolvedModelId)) {` | Medium |
| webview-ui/src/components/ui/button.stories.tsx | 12 | UI/문구 | `"Displays different types of error messages in the chat interface, including API errors, credit limit errors, diff er...` | Medium |
| webview-ui/src/components/ui/popover.stories.tsx | 25 | UI/문구 | `<Button variant="cline">Open Popover</Button>` | Medium |
| webview-ui/src/components/ui/alert.stories.tsx | 35 | UI/문구 | `<Alert icon={<ClineLogoWhite className="size-2" />} title="Brand" variant="cline">` | High |
| webview-ui/src/components/ui/dialog.stories.tsx | 99 | UI/문구 | `<ClineLogoWhite className="size-16" />` | Medium |
| webview-ui/src/components/ui/alert.tsx | 15 | UI/문구 | `cline: "bg-cline/20 text-fg-cline border-cline [&>svg]:text-fg-cline",` | Medium |
| webview-ui/src/components/ui/select.stories.tsx | 85 | UI/문구 | `<ClineLogoWhite className="size-16" />` | Medium |
| webview-ui/src/components/ui/badge.tsx | 15 | UI/문구 | `cline: "bg-cline border-cline",` | Medium |
| webview-ui/src/components/ui/button.tsx | 22 | UI/문구 | `cline: "bg-cline border-foreground/20 text-cline-foreground",` | Medium |
| webview-ui/src/components/ui/badge.stories.tsx | 21 | UI/문구 | `const variants = ["default", "info", "danger", "outline", "cline", "success", "warning"] as const` | Medium |
| webview-ui/src/components/ui/badge.stories.tsx | 51 | UI/문구 | `const variants = ["cline", "danger", "success", "warning"] as const` | Medium |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 110 | UI/문구 | `Select the default terminal Cline will use. 'Default' uses your VSCode global setting.` | Medium |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 129 | UI/문구 | `Set how long Cline waits for shell integration to activate before executing commands. Increase this` | Medium |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 143 | UI/문구 | `When enabled, Cline will reuse existing terminal windows that aren't in the current working directory.` | Medium |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 161 | UI/문구 | `Choose whether Cline runs commands in the VS Code terminal or a background process.` | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 98 | UI/문구 | `label: "Cline Web Tools",` | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 100 | UI/문구 | `stateKey: "clineWebToolsEnabled",` | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 101 | UI/문구 | `settingKey: "clineWebToolsEnabled",` | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 106 | UI/문구 | `description: "Enables git worktree management for running parallel Cline tasks.",` | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 206 | UI/문구 | `clineWebToolsEnabled,` | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 218 | UI/문구 | `updateSetting("focusChainSettings", { ...focusChainSettings, remindClineInterval: value })` | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 234 | UI/문구 | `clineWebToolsEnabled: clineWebToolsEnabled?.user,` | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 244 | UI/문구 | `clineWebToolsEnabled: clineWebToolsEnabled?.featureFlag,` | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 297 | UI/문구 | `value={focusChainSettings?.remindClineInterval \|\| 6}` | Medium |
| webview-ui/src/components/settings/sections/GeneralSettingsSection.tsx | 45 | UI/문구 | `Help improve Cline by sending usage data and error reports. No code, prompts, or personal information are` | Medium |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 14 | UI/문구 | `<h2 className="text-lg font-semibold">Cline v{version}</h2>` | Medium |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 16 | UI/문구 | `An AI assistant that can use your CLI and Editor. Cline can handle complex software development tasks` | Medium |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 44 | UI/문구 | `<VSCodeLink href="https://docs.cline.bot/">Documentation</VSCodeLink>` | Medium |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 273 | UI/문구 | `const { activeOrganization } = useClineAuth()` | Medium |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 293 | UI/문구 | `<VSCodeLink href="https://app.cline.bot/dashboard/organization?tab=settings">dashboard</VSCodeLink>.` | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.spec.tsx | 16 | UI/문구 | `clineWebToolsEnabled: { user: true, featureFlag: true },` | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.spec.tsx | 18 | UI/문구 | `focusChainSettings: { enabled: false, remindClineInterval: 6 },` | Medium |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 178 | UI/문구 | `Prevent Cline from using browser actions (e.g. launch, click, type).` | Medium |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 249 | UI/문구 | `Enable Cline to use your Chrome` | Medium |
| webview-ui/src/components/settings/providers/ClineProvider.tsx | 21 | UI/문구 | `{/* Cline Account Info Card */}` | Medium |
| webview-ui/src/components/settings/providers/ClineProvider.tsx | 23 | UI/문구 | `<ClineAccountInfoCard />` | Medium |
| webview-ui/src/components/settings/providers/ClineProvider.tsx | 28 | UI/문구 | `<ClineModelPicker` | Medium |
| webview-ui/src/components/settings/providers/NousresearchProvider.tsx | 61 | UI/문구 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Claude` | Medium |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 401 | UI/문구 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Claude models.` | Medium |
| webview-ui/src/components/settings/providers/XaiProvider.tsx | 50 | UI/문구 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Claude` | Medium |
| webview-ui/src/components/settings/providers/TogetherProvider.tsx | 49 | UI/문구 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Claude models.` | Medium |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 167 | UI/문구 | `<span className="font-semibold">Note:</span> Cline uses complex prompts and works best with Claude models.` | Medium |
| webview-ui/src/components/settings/providers/NebiusProvider.tsx | 31 | UI/문구 | `helpText="This key is stored locally and only used to make API requests from this extension. (Note: Cline uses comple...` | Medium |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 143 | UI/문구 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Claude models.` | Medium |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 266 | UI/문구 | `If you're unsure which model to choose, Cline works best with{" "}` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 147 | UI/문구 | `case "cline":` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 272 | UI/문구 | `case "cline":` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 280 | UI/문구 | `(currentMode === "plan" ? apiConfiguration?.planModeClineModelId : apiConfiguration?.actModeClineModelId) \|\|` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 284 | UI/문구 | `(currentMode === "plan" ? apiConfiguration?.planModeClineModelInfo : apiConfiguration?.actModeClineModelInfo) \|\|` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 289 | UI/문구 | `selectedModelId: clineModelId,` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 290 | UI/문구 | `selectedModelInfo: clineModelInfo,` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 528 | UI/문구 | `clineModelId: undefined,` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 542 | UI/문구 | `clineModelInfo: undefined,` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 570 | UI/문구 | `(mode === "plan" ? apiConfiguration.planModeClineModelId : apiConfiguration.actModeClineModelId) \|\| openRouterModelId` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 572 | UI/문구 | `(mode === "plan" ? apiConfiguration.planModeClineModelInfo : apiConfiguration.actModeClineModelInfo) \|\|` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 589 | UI/문구 | `clineModelId,` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 608 | UI/문구 | `clineModelInfo,` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 690 | UI/문구 | `case "cline":` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 691 | UI/문구 | `updates.planModeClineModelId = sourceFields.clineModelId` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 692 | UI/문구 | `updates.actModeClineModelId = sourceFields.clineModelId` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 693 | UI/문구 | `updates.planModeClineModelInfo = sourceFields.clineModelInfo` | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 694 | UI/문구 | `updates.actModeClineModelInfo = sourceFields.clineModelInfo` | Medium |
| webview-ui/src/components/settings/SettingsView.tsx | 96 | UI/문구 | `tooltipText: "About Cline",` | Medium |
| webview-ui/src/components/settings/SettingsView.tsx | 150 | UI/문구 | `const { activeOrganization } = useClineAuth()` | Medium |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 44 | UI/문구 | `<p className="text-sm text-description mt-1">The language that Cline should use for communication.</p>` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 69 | UI/문구 | `model: Pick<ClineRecommendedModel, "id" \| "description" \| "tags">,` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 86 | UI/문구 | `const RECOMMENDED_MODELS_FALLBACK: FeaturedModelCardEntry[] = CLINE_RECOMMENDED_MODELS_FALLBACK.recommended` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 90 | UI/문구 | `const FREE_MODELS_FALLBACK: FeaturedModelCardEntry[] = CLINE_RECOMMENDED_MODELS_FALLBACK.free` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 96 | UI/문구 | `const { apiConfiguration, favoritedModelIds, clineModels, refreshClineModels } = useExtensionState()` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 98 | UI/문구 | `const [searchTerm, setSearchTerm] = useState(modeFields.clineModelId \|\| openRouterDefaultModelId)` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 101 | UI/문구 | `const [clineRecommendedModels, setClineRecommendedModels] = useState<FeaturedModelCardEntry[]>([])` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 102 | UI/문구 | `const [clineFreeModels, setClineFreeModels] = useState<FeaturedModelCardEntry[]>([])` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 105 | UI/문구 | `clineFreeModels.length > 0 ? clineFreeModels.map((model) => model.id) : FREE_MODELS_FALLBACK.map((model) => model.id)` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 107 | UI/문구 | `}, [clineFreeModels])` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 109 | UI/문구 | `() => new Set(freeClineModelIds.map((modelId) => normalizeModelId(modelId))),` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 110 | UI/문구 | `[freeClineModelIds],` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 114 | UI/문구 | `() => (clineRecommendedModels.length > 0 ? clineRecommendedModels : RECOMMENDED_MODELS_FALLBACK),` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 115 | UI/문구 | `[clineRecommendedModels],` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 117 | UI/문구 | `const freeModels = useMemo(() => (clineFreeModels.length > 0 ? clineFreeModels : FREE_MODELS_FALLBACK), [clineFreeMod...` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 125 | UI/문구 | `"refreshClineRecommendedModelsRpc",` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 136 | UI/문구 | `setClineRecommendedModels(recommended)` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 137 | UI/문구 | `setClineFreeModels(free)` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 140 | UI/문구 | `console.error("Failed to refresh Cline recommended models:", error)` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 146 | UI/문구 | `if (clineRecommendedModelsRetryTimeoutRef.current !== null) {` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 147 | UI/문구 | `window.clearTimeout(clineRecommendedModelsRetryTimeoutRef.current)` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 148 | UI/문구 | `clineRecommendedModelsRetryTimeoutRef.current = null` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 153 | UI/문구 | `if (hasSuccessfulClineRecommendedModelsFetchRef.current \|\| isFetchingClineRecommendedModelsRef.current) {` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 156 | UI/문구 | `isFetchingClineRecommendedModelsRef.current = true` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 157 | UI/문구 | `const succeeded = await refreshClineRecommendedModels()` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 158 | UI/문구 | `isFetchingClineRecommendedModelsRef.current = false` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 161 | UI/문구 | `hasSuccessfulClineRecommendedModelsFetchRef.current = true` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 162 | UI/문구 | `clearClineRecommendedModelsRetryTimeout()` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 166 | UI/문구 | `if (clineRecommendedModelsRetryTimeoutRef.current === null) {` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 167 | UI/문구 | `clineRecommendedModelsRetryTimeoutRef.current = window.setTimeout(() => {` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 168 | UI/문구 | `clineRecommendedModelsRetryTimeoutRef.current = null` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 169 | UI/문구 | `void fetchClineRecommendedModels()` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 170 | UI/문구 | `}, CLINE_RECOMMENDED_MODELS_RETRY_DELAY_MS)` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 172 | UI/문구 | `}, [clearClineRecommendedModelsRetryTimeout, refreshClineRecommendedModels])` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 176 | UI/문구 | `clearClineRecommendedModelsRetryTimeout()` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 178 | UI/문구 | `}, [clearClineRecommendedModelsRetryTimeout])` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 190 | UI/문구 | `const currentModelId = modeFields.clineModelId \|\| openRouterDefaultModelId` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 191 | UI/문구 | `setActiveTab(freeClineModelIdSet.has(normalizeModelId(currentModelId)) ? "free" : "recommended")` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 192 | UI/문구 | `}, [modeFields.clineModelId, freeClineModelIdSet, initialTab])` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 202 | UI/문구 | `clineModelId: { plan: "planModeClineModelId", act: "actModeClineModelId" },` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 203 | UI/문구 | `clineModelInfo: { plan: "planModeClineModelInfo", act: "actModeClineModelInfo" },` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 206 | UI/문구 | `clineModelId: newModelId,` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 207 | UI/문구 | `clineModelInfo: clineModels?.[newModelId],` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 215 | UI/문구 | `if (freeClineModelIdSet.has(normalizeModelId(selected.selectedModelId))) {` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 228 | UI/문구 | `}, [apiConfiguration, currentMode, freeClineModelIdSet])` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 231 | UI/문구 | `refreshClineModels()` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 235 | UI/문구 | `void fetchClineRecommendedModels()` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 236 | UI/문구 | `}, [fetchClineRecommendedModels])` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 240 | UI/문구 | `const currentModelId = modeFields.clineModelId \|\| openRouterDefaultModelId` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 242 | UI/문구 | `}, [modeFields.clineModelId])` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 258 | UI/문구 | `const unfilteredModelIds = Object.keys(clineModels ?? {}).sort((a, b) => a.localeCompare(b))` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 259 | UI/문구 | `return filterOpenRouterModelIds(unfilteredModelIds, "cline", freeClineModelIds)` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 260 | UI/문구 | `}, [clineModels, freeClineModelIds])` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 357 | UI/문구 | `Object.entries(clineModels ?? {})?.some(([id, m]) => id === selectedModelId && m.thinkingConfig) \|\|` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 373 | UI/문구 | `}, [clineModels, selectedModelId, selectedModelIdLower, showReasoningEffort])` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 452 | UI/문구 | `zIndex: CLINE_MODEL_PICKER_Z_INDEX,` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 562 | UI/문구 | `The extension automatically fetches the latest Cline model list. If you're unsure which model to choose, Cline` | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 588 | UI/문구 | `z-index: ${CLINE_MODEL_PICKER_Z_INDEX - 1};` | Medium |
| webview-ui/src/components/settings/ClineAccountInfoCard.tsx | 9 | UI/문구 | `const { clineUser } = useClineAuth()` | Medium |
| webview-ui/src/components/settings/ClineAccountInfoCard.tsx | 13 | UI/문구 | `const user = clineUser \|\| undefined` | Medium |
| webview-ui/src/components/settings/ClineAccountInfoCard.tsx | 37 | UI/문구 | `Sign Up with Cline` | Medium |
| webview-ui/src/components/settings/README.md | 3 | UI/문구 | `This directory contains the refactored API Options components for the Cline extension. The refactoring aims to improv...` | Medium |
| webview-ui/src/components/settings/RequestyModelPicker.tsx | 267 | UI/문구 | `If you're unsure which model to choose, Cline works best with{" "}` | Medium |
| webview-ui/src/components/settings/OpenRouterModelPicker.tsx | 377 | UI/문구 | `If you're unsure which model to choose, Cline works best with{" "}` | Medium |
| webview-ui/src/components/settings/ApiOptions.tsx | 361 | UI/문구 | `{apiConfiguration && selectedProvider === "cline" && (` | Medium |
| webview-ui/src/components/settings/ApiOptions.tsx | 362 | UI/문구 | `<ClineProvider` | Medium |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 269 | UI/문구 | `If you're unsure which model to choose, Cline works best with{" "}` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 3 | UI/문구 | `ClineRulesToggles,` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 8 | UI/문구 | `ToggleClineRuleRequest,` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 30 | UI/문구 | `globalClineRulesToggles = {},` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 31 | UI/문구 | `localClineRulesToggles = {},` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 43 | UI/문구 | `setGlobalClineRulesToggles,` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 44 | UI/문구 | `setLocalClineRulesToggles,` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 83 | UI/문구 | `if (response.globalClineRulesToggles?.toggles) {` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 84 | UI/문구 | `setGlobalClineRulesToggles(response.globalClineRulesToggles.toggles)` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 86 | UI/문구 | `if (response.localClineRulesToggles?.toggles) {` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 87 | UI/문구 | `setLocalClineRulesToggles(response.localClineRulesToggles.toggles)` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 111 | UI/문구 | `setGlobalClineRulesToggles,` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 112 | UI/문구 | `setLocalClineRulesToggles,` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 195 | UI/문구 | `const globalRules = Object.entries(globalClineRulesToggles \|\| {})` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 200 | UI/문구 | `const localRules = Object.entries(localClineRulesToggles \|\| {})` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 234 | UI/문구 | `FileServiceClient.toggleClineRule(` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 235 | UI/문구 | `ToggleClineRuleRequest.create({` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 243 | UI/문구 | `if (response.globalClineRulesToggles?.toggles) {` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 244 | UI/문구 | `setGlobalClineRulesToggles(response.globalClineRulesToggles.toggles)` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 246 | UI/문구 | `if (response.localClineRulesToggles?.toggles) {` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 247 | UI/문구 | `setLocalClineRulesToggles(response.localClineRulesToggles.toggles)` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 254 | UI/문구 | `console.error("Error toggling Cline rule:", error)` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 283 | UI/문구 | `.then((response: ClineRulesToggles) => {` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 300 | UI/문구 | `.then((response: ClineRulesToggles) => {` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 352 | UI/문구 | `FileServiceClient.toggleClineRule(` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 353 | UI/문구 | `ToggleClineRuleRequest.create({` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 438 | UI/문구 | `{!isVisible && <TooltipContent>Manage Cline Rules & Workflows</TooltipContent>}` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 442 | UI/문구 | `aria-label={isVisible ? "Hide Cline Rules & Workflows" : "Show Cline Rules & Workflows"}` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 501 | UI/문구 | `Rules allow you to provide Cline with system-level guidance. Think of them as a persistent way` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 512 | UI/문구 | `Workflows allow you to define a series of steps to guide Cline through a repetitive set of` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 523 | UI/문구 | `Skills are reusable instruction sets that Cline can activate on-demand. When a task matches a` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 524 | UI/문구 | `skill's description, Cline uses the <span className="font-bold">use_skill</span> tool to load` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 529 | UI/문구 | `Hooks allow you to execute custom scripts at specific points in Cline's execution lifecycle,` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 555 | UI/문구 | `ruleType="cline"` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 573 | UI/문구 | `ruleType={"cline"}` | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 587 | UI/문구 | `ruleType={"cline"}` | Medium |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 126 | UI/문구 | `type: ruleType \|\| "cline",` | Medium |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 128 | UI/문구 | `type: ruleType \|\| "cline",` | Medium |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 170 | UI/문구 | `Choose a hook type to create. Hooks execute at specific points in Cline's lifecycle. Available:{" "}` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 34 | UI/문구 | `const createTask = (text: string, images?: string[], files?: string[]): ClineMessage => ({` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 44 | UI/문구 | `const createMessages = (): ClineMessage[] => [` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 89 | UI/문구 | `clineMessages: createMessages(),` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 119 | UI/문구 | `clineMessages: createMessages(),` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 153 | UI/문구 | `clineMessages: createMessages(),` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 187 | UI/문구 | `clineMessages: createMessages(),` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 219 | UI/문구 | `clineMessages: createMessages(),` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 255 | UI/문구 | `clineMessages: createMessages(),` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 283 | UI/문구 | `clineMessages: createMessages(),` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 312 | UI/문구 | `clineMessages: createMessages(),` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 344 | UI/문구 | `clineMessages: createMessages(),` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 373 | UI/문구 | `clineMessages: createMessages(),` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 402 | UI/문구 | `clineMessages: createMessages(),` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 431 | UI/문구 | `clineMessages: createMessages(),` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 459 | UI/문구 | `clineMessages: [` | Medium |
| webview-ui/src/components/chat/task-header/StickyUserMessage.tsx | 7 | UI/문구 | `readonly lastUserMessage: ClineMessage \| null` | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 20 | UI/문구 | `task: ClineMessage` | Medium |
| webview-ui/src/components/chat/HookMessage.tsx | 26 | UI/문구 | `function shouldExpandHookByDefault(message: ClineMessage, metadata: HookMetadata): boolean {` | Medium |
| webview-ui/src/components/chat/HookMessage.tsx | 38 | UI/문구 | `message: ClineMessage` | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 9 | UI/문구 | `const createMockMessage = (overrides: Partial<ClineMessage> = {}): ClineMessage => ({` | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 18 | UI/문구 | `clineUser: null,` | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 26 | UI/문구 | `clineMessages: [],` | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 54 | UI/문구 | `"Displays different types of error messages in the chat interface, including API errors, credit limit errors, diff er...` | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 74 | UI/문구 | `options: ["error", "mistake_limit_reached", "diff_error", "clineignore_error"],` | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 132 | UI/문구 | `providerId: "cline",` | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 151 | UI/문구 | `providerId: "cline",` | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 165 | UI/문구 | `providerId: "cline",` | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 209 | UI/문구 | `message: "Please sign in to access Cline services.",` | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 212 | UI/문구 | `providerId: "cline",` | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 219 | UI/문구 | `const signInButton = canvas.getByRole("button", { name: /sign in to cline/i })` | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 258 | UI/문구 | `providerId: "cline",` | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 49 | UI/문구 | `lastMessage: ClineMessage \| undefined` | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 50 | UI/문구 | `secondLastMessage: ClineMessage \| undefined` | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 51 | UI/문구 | `clineAsk: ClineAsk \| undefined` | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 52 | UI/문구 | `task: ClineMessage \| undefined` | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 93 | UI/문구 | `scrolledPastUserMessage: ClineMessage \| null` | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 121 | UI/문구 | `task: ClineMessage` | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 122 | UI/문구 | `messages: ClineMessage[]` | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 140 | UI/문구 | `clineAsk?: ClineAsk` | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 141 | UI/문구 | `modifiedMessages: ClineMessage[]` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 5 | UI/문구 | `const createTextMessage = (ts: number, text: string): ClineMessage => ({` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 12 | UI/문구 | `const createToolMessage = (ts: number, tool: string): ClineMessage => ({` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 19 | UI/문구 | `const createReasoningMessage = (ts: number, text: string): ClineMessage => ({` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 29 | UI/문구 | `const tool = JSON.parse(message.text \|\| "{}") as ClineSayTool` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 138 | UI/문구 | `const result: (ClineMessage \| ClineMessage[])[] = []` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 139 | UI/문구 | `let currentGroup: ClineMessage[] = []` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 178 | UI/문구 | `const browserAction = JSON.parse(message.text \|\| "{}") as ClineSayBrowserAction` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 221 | UI/문구 | `allMessages: ClineMessage[],` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 261 | UI/문구 | `allMessages: ClineMessage[],` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 291 | UI/문구 | `function isDisplayedCheckpoint(checkpointIndex: number, allMessages: ClineMessage[]): boolean {` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 315 | UI/문구 | `const tool = JSON.parse(msg.text \|\| "{}") as ClineSayTool` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 423 | UI/문구 | `let mostRecentApiReq: ClineMessage \| null = null` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 512 | UI/문구 | `let mostRecentApiReq: ClineMessage \| null = null` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 681 | UI/문구 | `function isApiReqFollowedOnlyByLowStakesTools(index: number, messages: (ClineMessage \| ClineMessage[])[]): boolean {` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 730 | UI/문구 | `const result: (ClineMessage \| ClineMessage[])[] = []` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 731 | UI/문구 | `let toolGroup: ClineMessage[] = []` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 732 | UI/문구 | `let pendingReasoning: ClineMessage[] = []` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 733 | UI/문구 | `let pendingApiReq: ClineMessage[] = []` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 735 | UI/문구 | `const pendingTools: ClineMessage[] = []` | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 746 | UI/문구 | `const group = toolGroup as ClineMessage[] & { _isToolGroup: boolean }` | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 15 | UI/문구 | `const streamingMessage: ClineMessage = {` | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 31 | UI/문구 | `const errorMessage: ClineMessage = {` | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 47 | UI/문구 | `const toolMessage: ClineMessage = {` | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 61 | UI/문구 | `const toolMessage: ClineMessage = {` | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 76 | UI/문구 | `const commandMessage: ClineMessage = {` | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 86 | UI/문구 | `const commandOutputMessage: ClineMessage = {` | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 114 | UI/문구 | `const message: ClineMessage = {` | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 127 | UI/문구 | `const apiReqMessage: ClineMessage = {` | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 138 | UI/문구 | `const message: ClineMessage = {` | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 249 | UI/문구 | `const tool = JSON.parse(message.text \|\| "{}") as ClineSayTool` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 12 | UI/문구 | `messages: ClineMessage[]` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 13 | UI/문구 | `allMessages: ClineMessage[]` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 18 | UI/문구 | `tool: ClineMessage` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 19 | UI/문구 | `parsedTool: ClineSayTool` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 28 | UI/문구 | `const getActivityText = (tool: ClineSayTool): string \| null => {` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 58 | UI/문구 | `const getCurrentActivities = (allMessages: ClineMessage[]): ClineMessage[] => {` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 82 | UI/문구 | `const activities: ClineMessage[] = []` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 237 | UI/문구 | `function buildToolsWithReasoning(messages: ClineMessage[]): ToolWithReasoning[] {` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 262 | UI/문구 | `function parseToolSafe(text: string \| undefined): ClineSayTool {` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 264 | UI/문구 | `return JSON.parse(text \|\| "{}") as ClineSayTool` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 266 | UI/문구 | `return {} as ClineSayTool` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 273 | UI/문구 | `function getToolDisplayInfo(tool: ClineSayTool) {` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 322 | UI/문구 | `function getToolGroupSummary(messages: ClineMessage[]): string {` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 364 | UI/문구 | `return parts.length === 0 ? "Context" : "Cline" + action + parts.join(", ")` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 14 | UI/문구 | `messageOrGroup: ClineMessage \| ClineMessage[]` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 15 | UI/문구 | `groupedMessages: (ClineMessage \| ClineMessage[])[]` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 16 | UI/문구 | `modifiedMessages: ClineMessage[]` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 133 | UI/문구 | `groupedMessages: (ClineMessage \| ClineMessage[])[],` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 134 | UI/문구 | `modifiedMessages: ClineMessage[],` | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 143 | UI/문구 | `return (index: number, messageOrGroup: ClineMessage \| ClineMessage[]) => (` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/IdleIndicator.stashed.tsx | 35 | UI/문구 | `const isTaskComplete = clineMessages.some(` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/IdleIndicator.stashed.tsx | 111 | UI/문구 | `}, [scrollContainerRef, clineMessages])` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/TaskSection.tsx | 7 | UI/문구 | `task: ClineMessage` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 61 | UI/문구 | `const { clineUser } = useClineAuth()` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 163 | UI/문구 | `if (banner.isClineUserOnly !== undefined) {` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 164 | UI/문구 | `return banner.isClineUserOnly === !!clineUser` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 173 | UI/문구 | `}, [isBannerDismissed, clineUser])` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 195 | UI/문구 | `planModeApiProvider: "cline",` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 196 | UI/문구 | `actModeApiProvider: "cline",` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 222 | UI/문구 | `StateServiceClient.installClineCli({}).catch((error) =>` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 276 | UI/문구 | `}, [bannerConfig, banners, clineUser, handleBannerAction, handleBannerDismiss])` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 309 | UI/문구 | `Cline tasks.` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 333 | UI/문구 | `View and manage git worktrees. Great for running parallel Cline tasks.` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 13 | UI/문구 | `task: ClineMessage` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 14 | UI/문구 | `groupedMessages: (ClineMessage \| ClineMessage[])[]` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 15 | UI/문구 | `modifiedMessages: ClineMessage[]` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 33 | UI/문구 | `const { clineMessages } = useExtensionState()` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 34 | UI/문구 | `const lastRawMessage = useMemo(() => clineMessages.at(-1), [clineMessages])` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 54 | UI/문구 | `return clineMessages.findIndex((msg) => msg.ts === scrolledPastUserMessage.ts)` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 55 | UI/문구 | `}, [clineMessages, scrolledPastUserMessage])` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 156 | UI/문구 | `const displayedGroupedMessages = useMemo<(ClineMessage \| ClineMessage[])[]>(() => {` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 160 | UI/문구 | `const waitingRow: ClineMessage = {` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/ActionButtons.tsx | 11 | UI/문구 | `task?: ClineMessage` | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/ActionButtons.tsx | 12 | UI/문구 | `messages: ClineMessage[]` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 24 | UI/문구 | `clineAsk,` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 56 | UI/문구 | `} else if (clineAsk) {` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 59 | UI/문구 | `if (clineAsk === "resume_task" \|\| clineAsk === "resume_completed_task") {` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 71 | UI/문구 | `switch (clineAsk) {` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 137 | UI/문구 | `clineAsk,` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 240 | UI/문구 | `if (clineAsk === "new_task") {` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 277 | UI/문구 | `switch (clineAsk) {` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 297 | UI/문구 | `clineAsk,` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useChatState.ts | 85 | UI/문구 | `clineAsk,` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 16 | UI/문구 | `messages: ClineMessage[],` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 17 | UI/문구 | `visibleMessages: ClineMessage[],` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 18 | UI/문구 | `groupedMessages: (ClineMessage \| ClineMessage[])[],` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 28 | UI/문구 | `scrolledPastUserMessage: ClineMessage \| null` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 40 | UI/문구 | `const [scrolledPastUserMessage, setScrolledPastUserMessage] = useState<ClineMessage \| null>(null)` | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 60 | UI/문구 | `let mostRecentScrolledPast: ClineMessage \| null = null` | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 2 | UI/문구 | `ClineAskUseSubagents,` | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 3 | UI/문구 | `ClineMessage,` | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 4 | UI/문구 | `ClineSaySubagentStatus,` | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 22 | UI/문구 | `message: ClineMessage` | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 24 | UI/문구 | `lastModifiedMessage?: ClineMessage` | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 75 | UI/문구 | `function parseSubagentRowData(message: ClineMessage): SubagentRowData \| null {` | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 82 | UI/문구 | `const parsed = JSON.parse(message.text) as ClineAskUseSubagents` | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 108 | UI/문구 | `const parsed = JSON.parse(message.text) as ClineSaySubagentStatus` | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 200 | UI/문구 | `const title = singular ? "Cline wants to use a subagent:" : "Cline wants to use subagents:"` | High |
| webview-ui/src/components/chat/UserMessage.tsx | 43 | UI/문구 | `const handleRestoreWorkspace = async (type: ClineCheckpointRestore) => {` | Medium |
| webview-ui/src/components/chat/UserMessage.tsx | 161 | UI/문구 | `type: ClineCheckpointRestore` | Medium |
| webview-ui/src/components/chat/UserMessage.tsx | 164 | UI/문구 | `onClick: (type: ClineCheckpointRestore) => void` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 11 | UI/문구 | `message: ClineMessage` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 12 | UI/문구 | `errorType: "error" \| "mistake_limit_reached" \| "diff_error" \| "clineignore_error"` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 18 | UI/문구 | `const { clineUser } = useClineAuth()` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 21 | UI/문구 | `const { isLoginLoading, handleSignIn } = useClineSignIn()` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 31 | UI/문구 | `const errorMessage = clineError?._error?.message \|\| clineError?.message \|\| rawApiError` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 32 | UI/문구 | `const requestId = clineError?._error?.request_id` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 33 | UI/문구 | `const providerId = clineError?.providerId \|\| clineError?._error?.providerId` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 35 | UI/문구 | `const errorCode = clineError?._error?.code` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 38 | UI/문구 | `const errorDetails = clineError._error?.details` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 61 | UI/문구 | `{/* Display the well-formatted error extracted from the ClineError instance */}` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 86 | UI/문구 | `{/* Display Login button for non-logged in users using the Cline provider */}` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 88 | UI/문구 | `{/* The user is signed in or not using cline provider */}` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 89 | UI/문구 | `{isClineProvider && !clineUser ? (` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 91 | UI/문구 | `Sign in to Cline` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 116 | UI/문구 | `case "clineignore_error":` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 120 | UI/문구 | `Cline tried to access <code>{message.text}</code> which is blocked by the <code>.clineignore</code>` | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 132 | UI/문구 | `if (errorType === "diff_error" \|\| errorType === "clineignore_error") {` | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 18 | UI/문구 | `messages: ClineMessage[]` | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 21 | UI/문구 | `lastModifiedMessage?: ClineMessage` | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 148 | UI/문구 | `messages: ClineMessage[] // messages up to and including the result` | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 151 | UI/문구 | `messages: ClineMessage[] // messages leading to next result` | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 155 | UI/문구 | `let currentStateMessages: ClineMessage[] = []` | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 156 | UI/문구 | `let nextActionMessages: ClineMessage[] = []` | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 327 | UI/문구 | `const browserAction = JSON.parse(message.text \|\| "{}") as ClineSayBrowserAction` | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 363 | UI/문구 | `{isAutoApproved ? "Cline is using the browser:" : "Cline wants to use the browser:"}` | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 494 | UI/문구 | `message: ClineMessage` | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 550 | UI/문구 | `const browserAction = JSON.parse(message.text \|\| "{}") as ClineSayBrowserAction` | Medium |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1087 | UI/문구 | `case "cline":` | Medium |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1576 | UI/문구 | `<ClineRulesToggleModal />` | Medium |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1598 | UI/문구 | `{`In ${shownTooltipMode === "act" ? "Act" : "Plan"}  mode, Cline will ${shownTooltipMode === "act" ? "complete the ta...` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 3 | UI/문구 | `ClineApiReqInfo,` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 4 | UI/문구 | `ClineAskQuestion,` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 5 | UI/문구 | `ClineAskUseMcpServer,` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 6 | UI/문구 | `ClineMessage,` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 7 | UI/문구 | `ClinePlanModeResponse,` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 8 | UI/문구 | `ClineSayGenerateExplanation,` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 9 | UI/문구 | `ClineSayTool,` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 71 | UI/문구 | `message: ClineMessage` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 74 | UI/문구 | `lastModifiedMessage?: ClineMessage` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 156 | UI/문구 | `clineMessages,` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 203 | UI/문구 | `const info: ClineApiReqInfo = JSON.parse(message.text)` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 321 | UI/문구 | `<span className="text-error font-bold">Cline is having trouble...</span>,` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 326 | UI/문구 | `<span className="font-bold text-foreground">Cline wants to execute this command:</span>,` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 329 | UI/문구 | `const mcpServerUse = JSON.parse(message.text \|\| "{}") as ClineAskUseMcpServer` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 337 | UI/문구 | `Cline wants to {mcpServerUse.type === "use_mcp_tool" ? "use a tool" : "access a resource"} on the{" "}` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 356 | UI/문구 | `<span className="font-bold text-foreground">Cline has a question:</span>,` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 374 | UI/문구 | `return JSON.parse(message.text \|\| "{}") as ClineSayTool` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 434 | UI/문구 | `? "Cline is creating patches to edit this file:"` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 435 | UI/문구 | `: "Cline wants to edit this file:"` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 469 | UI/문구 | `<span style={{ fontWeight: "bold" }}>Cline wants to delete this file:</span>` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 487 | UI/문구 | `<span className="font-bold">Cline wants to create a new file:</span>` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 510 | UI/문구 | `<span className="font-bold">Cline wants to read this file:</span>` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 544 | UI/문구 | `? "Cline wants to view the top level files in this directory:"` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 545 | UI/문구 | `: "Cline viewed the top level files in this directory:"}` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 566 | UI/문구 | `? "Cline wants to recursively view all files in this directory:"` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 567 | UI/문구 | `: "Cline recursively viewed all files in this directory:"}` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 588 | UI/문구 | `? "Cline wants to view source code definition names used in this directory:"` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 589 | UI/문구 | `: "Cline viewed source code definition names used in this directory:"}` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 608 | UI/문구 | `Cline wants to search this directory for <code className="break-all">{tool.regex}</code>:` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 625 | UI/문구 | `<span className="font-bold">Cline is condensing the conversation:</span>` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 670 | UI/문구 | `? "Cline wants to fetch content from this URL:"` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 671 | UI/문구 | `: "Cline fetched content from this URL:"}` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 699 | UI/문구 | `? "Cline wants to search the web for:"` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 700 | UI/문구 | `: "Cline searched the web for:"}` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 715 | UI/문구 | `<span className="font-bold">Cline loaded the skill:</span>` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 773 | UI/문구 | `const useMcpServer = JSON.parse(message.text \|\| "{}") as ClineAskUseMcpServer` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 842 | UI/문구 | `clineMessages={clineMessages}` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 915 | UI/문구 | `const tool = JSON.parse(message.text \|\| "{}") as ClineSayTool` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 930 | UI/문구 | `case "clineignore_error":` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 931 | UI/문구 | `return <ErrorRow errorType="clineignore_error" message={message} />` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 942 | UI/문구 | `let explanationInfo: ClineSayGenerateExplanation = {` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1035 | UI/문구 | `Cline may have trouble viewing the command's output. Please update VSCode (` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1182 | UI/문구 | `const parsedMessage = JSON.parse(message.text \|\| "{}") as ClineAskQuestion` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1234 | UI/문구 | `<span className="text-foreground font-bold">Cline wants to start a new task:</span>` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1244 | UI/문구 | `<span className="text-foreground font-bold">Cline wants to condense your conversation:</span>` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1254 | UI/문구 | `<span className="text-foreground font-bold">Cline wants to create a Github issue:</span>` | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1264 | UI/문구 | `const parsedMessage = JSON.parse(message.text \|\| "{}") as ClinePlanModeResponse` | Medium |
| webview-ui/src/components/chat/CreditLimitError.tsx | 17 | UI/문구 | `USER: "https://app.cline.bot/dashboard/account?tab=credits&redirect=true",` | Medium |
| webview-ui/src/components/chat/CreditLimitError.tsx | 18 | UI/문구 | `ORG: "https://app.cline.bot/dashboard/organization?tab=credits&redirect=true",` | Medium |
| webview-ui/src/components/chat/CreditLimitError.tsx | 28 | UI/문구 | `const { activeOrganization } = useClineAuth()` | Medium |
| webview-ui/src/components/chat/ReportBugPreview.tsx | 66 | UI/문구 | `{bugData.cline_version && (` | Medium |
| webview-ui/src/components/chat/ReportBugPreview.tsx | 68 | UI/문구 | `<div className="font-semibold">Cline Version</div>` | Medium |
| webview-ui/src/components/chat/ReportBugPreview.tsx | 69 | UI/문구 | `<MarkdownBlock markdown={bugData.cline_version} />` | Medium |
| webview-ui/src/components/chat/ChatView.tsx | 48 | UI/문구 | `clineMessages: messages,` | Medium |
| webview-ui/src/components/chat/ChatView.tsx | 58 | UI/문구 | `const isProdHostedApp = userInfo?.apiBaseUrl === "https://app.cline.bot"` | Medium |
| webview-ui/src/components/chat/CommandOutputRow.tsx | 122 | UI/문구 | `message: ClineMessage` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 14 | UI/문구 | `message: ClineMessage` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 20 | UI/문구 | `clineMessages: ClineMessage[]` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 41 | UI/문구 | `const getActivityText = (tool: ClineSayTool): string \| null => {` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 60 | UI/문구 | `messages: ClineMessage[],` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 63 | UI/문구 | `stopCondition?: (msg: ClineMessage) => boolean,` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 81 | UI/문구 | `const tool = JSON.parse(msg.text \|\| "{}") as ClineSayTool` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 95 | UI/문구 | `const findCurrentApiReq = (messages: ClineMessage[]): { index: number; hasCost: boolean } \| null => {` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 111 | UI/문구 | `const findPrevCompletedApiReq = (messages: ClineMessage[], beforeIdx: number): number => {` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 137 | UI/문구 | `clineMessages,` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 147 | UI/문구 | `const hasCompletionResult = clineMessages.some(` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 163 | UI/문구 | `return isApiReqAbsorbable(message.ts, clineMessages)` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 164 | UI/문구 | `}, [message.ts, clineMessages])` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 169 | UI/문구 | `const currentApiReq = findCurrentApiReq(clineMessages)` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 177 | UI/문구 | `return collectToolsInRange(clineMessages, currentApiReq.index + 1, clineMessages.length)` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 181 | UI/문구 | `}, [clineMessages])` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 186 | UI/문구 | `return clineMessages.some((msg, idx) => {` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 191 | UI/문구 | `const prevMsg = clineMessages[i]` | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 204 | UI/문구 | `}, [clineMessages])` | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 8 | UI/문구 | `useClineAuth: () => ({` | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 9 | UI/문구 | `clineUser: null,` | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 11 | UI/문구 | `useClineSignIn: () => ({` | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 24 | UI/문구 | `ClineError: {` | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 27 | UI/문구 | `ClineErrorType: {` | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 35 | UI/문구 | `const mockMessage: ClineMessage = {` | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 67 | UI/문구 | `it("renders clineignore error", () => {` | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 69 | UI/문구 | `render(<ErrorRow errorType="clineignore_error" message={clineignoreMessage} />)` | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 71 | UI/문구 | `expect(screen.getByText(/Cline tried to access/)).toBeInTheDocument()` | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 86 | UI/문구 | `buy_credits_url: "https://app.cline.bot/dashboard",` | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 122 | UI/문구 | `providerId: "cline",` | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 132 | UI/문구 | `expect(screen.getByText("Sign in to Cline")).toBeInTheDocument()` | Medium |
| webview-ui/src/components/mcp/configuration/tabs/installed/ConfigureServersView.tsx | 27 | UI/문구 | `Cline's capabilities. You can use{" "}` | Medium |
| webview-ui/src/components/mcp/configuration/tabs/installed/ConfigureServersView.tsx | 31 | UI/문구 | `or ask Cline to create new tools specific to your workflow (e.g., "add a tool that gets the latest npm docs").{" "}` | Medium |
| webview-ui/src/components/mcp/configuration/tabs/add-server/AddLocalServerForm.tsx | 15 | UI/문구 | `Add a local MCP server by configuring it in <code>cline_mcp_settings.json</code>. You'll need to specify the` | Medium |
| webview-ui/src/components/mcp/configuration/tabs/add-server/AddLocalServerForm.tsx | 30 | UI/문구 | `Open cline_mcp_settings.json` | Medium |
| webview-ui/src/components/welcome/HomeHeader.tsx | 24 | UI/문구 | `const LogoComponent = isDecember ? ClineLogoSanta : ClineLogoVariable` | Medium |
| webview-ui/src/components/welcome/WelcomeView.tsx | 42 | UI/문구 | `<h2 className="text-lg font-semibold">Hi, I'm Cline</h2>` | Medium |
| webview-ui/src/components/welcome/WelcomeView.tsx | 44 | UI/문구 | `<ClineLogoWhite className="size-16" />` | Medium |
| webview-ui/src/components/welcome/quickWinTasks.ts | 17 | UI/문구 | `actionCommand: "cline/createNextJsApp",` | Medium |
| webview-ui/src/components/welcome/quickWinTasks.ts | 26 | UI/문구 | `actionCommand: "cline/createCliTool",` | Medium |
| webview-ui/src/components/welcome/quickWinTasks.ts | 35 | UI/문구 | `actionCommand: "cline/createSnakeGame",` | Medium |
| webview-ui/src/components/welcome/SuggestedTasks.tsx | 17 | UI/문구 | `Quick <span className="text-white">[Wins]</span> with Cline` | Medium |
| webview-ui/src/components/common/WhatsNewItems.tsx | 82 | UI/문구 | `<strong>Try Codex 5.3:</strong> OpenAI's latest coding model, now available in Cline!{" "}` | Medium |
| webview-ui/src/components/common/WhatsNewItems.tsx | 86 | UI/문구 | `<strong>Try latest SOTA coding model:</strong> Claude Sonnet 4.6 and Gemini 3.1 pro within Cline!{" "}` | Medium |
| webview-ui/src/components/common/WhatsNewItems.tsx | 90 | UI/문구 | `<strong>Try Cline CLI 2.0:</strong> with /mcp functionality added in CLI{" "}` | Medium |
| webview-ui/src/components/common/WhatsNewItems.tsx | 91 | UI/문구 | `<code style={inlineCodeStyle}>npm install -g cline</code>` | Medium |
| webview-ui/src/components/common/CheckmarkControl.tsx | 105 | UI/문구 | `const restoreType: ClineCheckpointRestore = "task"` | Medium |
| webview-ui/src/components/common/CheckmarkControl.tsx | 122 | UI/문구 | `const restoreType: ClineCheckpointRestore = "workspace"` | Medium |
| webview-ui/src/components/common/CheckmarkControl.tsx | 139 | UI/문구 | `const restoreType: ClineCheckpointRestore = "taskAndWorkspace"` | Medium |
| webview-ui/src/components/common/MarkdownBlock.stories.tsx | 129 | UI/문구 | `- API reference: https://api.cline.bot/docs` | Medium |
| webview-ui/src/components/common/MarkdownBlock.stories.tsx | 130 | UI/문구 | `- Support forum: https://community.cline.bot` | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 34 | UI/문구 | `planModeApiProvider: "cline",` | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 35 | UI/문구 | `actModeApiProvider: "cline",` | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 137 | UI/문구 | `Please support Cline by{" "}` | Medium |