# UI 노출 문자열 전수 조사 보고서

## 1. 개요
이 보고서는 웹뷰 UI(`webview-ui`)와 VS Code 확장 프로그램 메타데이터(`package.json`) 내에서 사용자에게 직접 노출되는 'Cline' 관련 문자열을 추출한 결과입니다.

## 2. 조사 결과 상세

| 파일 | 위치 | UI 요소 타입 | 노출 텍스트 (원본) | 수정 방안 | 중요도 |
|---|---|---|---|---|---|
| webview-ui/src/App.tsx | 1 | 텍스트 | `import type { Boolean, EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.tsx | 11 | 텍스트 | `import { useClineAuth } from "./context/ClineAuthContext"` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.tsx | 41 | 텍스트 | `const { clineUser, organizations, activeOrganization } = useClineAuth()` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.tsx | 74 | 텍스트 | `clineUser={clineUser}` | Gaea-AI-Pro | Medium |
| webview-ui/src/theme.css | 3 | 텍스트 | `--color-cline: #9663f1;` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 7 | 텍스트 | `import type { UserInfo } from "@shared/proto/cline/account"` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 8 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 9 | 텍스트 | `import type { OpenRouterCompatibleModelInfo } from "@shared/proto/cline/models"` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 10 | 텍스트 | `import { OnboardingModelGroup, type TerminalProfile } from "@shared/proto/cline/state"` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 11 | 텍스트 | `import { convertProtoToClineMessage } from "@shared/proto-conversions/cline-message"` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 35 | 텍스트 | `clineModels: Record<string, ModelInfo> \| null` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 73 | 텍스트 | `setGlobalClineRulesToggles: (toggles: Record<string, boolean>) => void` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 74 | 텍스트 | `setLocalClineRulesToggles: (toggles: Record<string, boolean>) => void` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 91 | 텍스트 | `refreshClineModels: () => void` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 231 | 텍스트 | `clineMessages: [],` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 246 | 텍스트 | `globalClineRulesToggles: {},` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 247 | 텍스트 | `localClineRulesToggles: {},` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 268 | 텍스트 | `clineWebToolsEnabled: { user: true, featureFlag: false },` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 298 | 텍스트 | `const [clineModels, setClineModels] = useState<Record<string, ModelInfo> \| null>(null)` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 364 | 텍스트 | `// HACK: Preserve clineMessages if currentTaskItem is the same` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 366 | 텍스트 | `stateData.clineMessages = stateData.clineMessages?.length` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 367 | 텍스트 | `? stateData.clineMessages` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 368 | 텍스트 | `: prevState.clineMessages` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 514 | 텍스트 | `const partialMessage = convertProtoToClineMessage(protoMessage)` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 517 | 텍스트 | `const lastIndex = findLastIndex(prevState.clineMessages, (msg) => msg.ts === partialMessage.ts)` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 519 | 텍스트 | `const newClineMessages = [...prevState.clineMessages]` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 520 | 텍스트 | `newClineMessages[lastIndex] = partialMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 521 | 텍스트 | `return { ...prevState, clineMessages: newClineMessages }` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 765 | 텍스트 | `// Refresh Cline models function` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 766 | 텍스트 | `const refreshClineModels = useCallback(() => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 767 | 텍스트 | `ModelsServiceClient.refreshClineModelsRpc(EmptyRequest.create({}))` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 770 | 텍스트 | `setClineModels((prev) => (Object.keys(models).length > 0 ? models : (prev ?? null)))` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 772 | 텍스트 | `.catch((error: Error) => console.error("Failed to refresh Cline models:", error))` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 775 | 텍스트 | `// Auto-refresh Cline models when provider is cline` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 777 | 텍스트 | `const hasClineProvider =` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 778 | 텍스트 | `state.apiConfiguration?.actModeApiProvider === "cline" \|\| state.apiConfiguration?.planModeApiPr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 779 | 텍스트 | `if (hasClineProvider && clineModels === null) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 780 | 텍스트 | `refreshClineModels()` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 782 | 텍스트 | `}, [state.apiConfiguration?.actModeApiProvider, state.apiConfiguration?.planModeApiProvider, clin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 789 | 텍스트 | `clineModels,` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 812 | 텍스트 | `globalClineRulesToggles: state.globalClineRulesToggles \|\| {},` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 813 | 텍스트 | `localClineRulesToggles: state.localClineRulesToggles \|\| {},` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 855 | 텍스트 | `setGlobalClineRulesToggles: (toggles) =>` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 858 | 텍스트 | `globalClineRulesToggles: toggles,` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 860 | 텍스트 | `setLocalClineRulesToggles: (toggles) =>` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 863 | 텍스트 | `localClineRulesToggles: toggles,` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ExtensionStateContext.tsx | 912 | 텍스트 | `refreshClineModels,` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 1 | 텍스트 | `import type { UserOrganization } from "@shared/proto/cline/account"` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 2 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 9 | 텍스트 | `export interface ClineUser {` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 17 | 텍스트 | `export interface ClineAuthContextType {` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 18 | 텍스트 | `clineUser: ClineUser \| null` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 23 | 텍스트 | `export const ClineAuthContext = createContext<ClineAuthContextType \| undefined>(undefined)` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 25 | 텍스트 | `export const ClineAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 26 | 텍스트 | `const [user, setUser] = useState<ClineUser \| null>(null)` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 49 | 텍스트 | `console.log("Extension: ClineAuthContext: user updated:", user?.uid)` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 87 | 텍스트 | `<ClineAuthContext.Provider` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 89 | 텍스트 | `clineUser: user,` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 94 | 텍스트 | `</ClineAuthContext.Provider>` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 98 | 텍스트 | `export const useClineAuth = () => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 99 | 텍스트 | `const context = useContext(ClineAuthContext)` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 101 | 텍스트 | `throw new Error("useClineAuth must be used within a ClineAuthProvider")` | Gaea-AI-Pro | Medium |
| webview-ui/src/context/ClineAuthContext.tsx | 106 | 텍스트 | `export const useClineSignIn = () => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 8 | 텍스트 | `import { ClineAuthContext, ClineAuthContextType, ClineAuthProvider, useClineAuth } from "@/contex...` | Gaea-AI-Pro | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 48 | 텍스트 | `<ClineAuthProvider>` | Gaea-AI-Pro | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 50 | 텍스트 | `</ClineAuthProvider>` | Gaea-AI-Pro | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 66 | 텍스트 | `const ClineAuthProviderWithOverrides: React.FC<{` | Gaea-AI-Pro | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 67 | 텍스트 | `overrides?: Partial<ClineAuthContextType>` | Gaea-AI-Pro | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 70 | 텍스트 | `const authContext = useClineAuth()` | Gaea-AI-Pro | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 71 | 텍스트 | `return <ClineAuthContext.Provider value={{ ...authContext, ...overrides }}>{children}</ClineAuthC...` | Gaea-AI-Pro | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 75 | 텍스트 | `(overrideStates?: Partial<ExtensionStateContextType>, classNames?: string, authOverrides?: Partia...` | Gaea-AI-Pro | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 78 | 텍스트 | `<ClineAuthProviderWithOverrides overrides={authOverrides}>` | Gaea-AI-Pro | Medium |
| webview-ui/src/config/StorybookDecorator.tsx | 82 | 텍스트 | `</ClineAuthProviderWithOverrides>` | Gaea-AI-Pro | Medium |
| webview-ui/src/Providers.tsx | 4 | 텍스트 | `import { ClineAuthProvider } from "./context/ClineAuthContext"` | Gaea-AI-Pro | Medium |
| webview-ui/src/Providers.tsx | 13 | 텍스트 | `<ClineAuthProvider>` | Gaea-AI-Pro | Medium |
| webview-ui/src/Providers.tsx | 15 | 텍스트 | `</ClineAuthProvider>` | Gaea-AI-Pro | Medium |
| webview-ui/src/utils/bannerUtils.tsx | 1 | 텍스트 | `import { BannerAction, BannerCardData } from "@shared/cline/banner"` | Gaea-AI-Pro | Medium |
| webview-ui/src/utils/getConfiguredProviders.ts | 20 | 텍스트 | `return ["cline"] // Cline is always available` | Gaea-AI-Pro | Medium |
| webview-ui/src/utils/getConfiguredProviders.ts | 23 | 텍스트 | `// Cline - always available (uses account-based auth)` | Gaea-AI-Pro | Medium |
| webview-ui/src/utils/getConfiguredProviders.ts | 24 | 텍스트 | `configured.push("cline")` | Gaea-AI-Pro | Medium |
| webview-ui/src/utils/validate.ts | 73 | 텍스트 | `case "cline":` | Gaea-AI-Pro | Medium |
| webview-ui/src/utils/validate.ts | 184 | 텍스트 | `clineModels?: Record<string, ModelInfo>,` | Gaea-AI-Pro | Medium |
| webview-ui/src/utils/validate.ts | 187 | 텍스트 | `const { apiProvider, openRouterModelId, clineModelId } = getModeSpecificFields(apiConfiguration, ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/utils/validate.ts | 199 | 텍스트 | `case "cline":` | Gaea-AI-Pro | Medium |
| webview-ui/src/utils/validate.ts | 200 | 텍스트 | `const clineResolvedModelId = clineModelId \|\| openRouterDefaultModelId` | Gaea-AI-Pro | Medium |
| webview-ui/src/utils/validate.ts | 201 | 텍스트 | `if (!clineResolvedModelId) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/utils/validate.ts | 204 | 텍스트 | `if (clineModels && !Object.keys(clineModels).includes(clineResolvedModelId)) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/utils/environmentColors.ts | 31 | 텍스트 | `export function getClineEnvironmentClassname(environment: Environment \| undefined, type = "text") {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/ui/button.stories.tsx | 12 | 텍스트 | `"Displays different types of error messages in the chat interface, including API errors, credit l...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/ui/popover.stories.tsx | 25 | 버튼 | `<Button variant="cline">Open Popover</Button>` | Gaea-AI-Pro | High |
| webview-ui/src/components/ui/alert.stories.tsx | 2 | 텍스트 | `import ClineLogoWhite from "@/assets/ClineLogoWhite"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/ui/alert.stories.tsx | 35 | 툴팁/타이틀 | `<Alert icon={<ClineLogoWhite className="size-2" />} title="Brand" variant="cline">` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/ui/dialog.stories.tsx | 2 | 텍스트 | `import ClineLogoWhite from "@/assets/ClineLogoWhite"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/ui/dialog.stories.tsx | 99 | 텍스트 | `<ClineLogoWhite className="size-16" />` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/ui/alert.tsx | 15 | 텍스트 | `cline: "bg-cline/20 text-fg-cline border-cline [&>svg]:text-fg-cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/ui/select.stories.tsx | 2 | 텍스트 | `import ClineLogoWhite from "@/assets/ClineLogoWhite"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/ui/select.stories.tsx | 85 | 텍스트 | `<ClineLogoWhite className="size-16" />` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/ui/badge.tsx | 15 | 텍스트 | `cline: "bg-cline border-cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/ui/button.tsx | 22 | 텍스트 | `cline: "bg-cline border-foreground/20 text-cline-foreground",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/ui/badge.stories.tsx | 21 | 텍스트 | `const variants = ["default", "info", "danger", "outline", "cline", "success", "warning"] as const` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/ui/badge.stories.tsx | 51 | 텍스트 | `const variants = ["cline", "danger", "success", "warning"] as const` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 1 | 텍스트 | `import { UpdateTerminalConnectionTimeoutResponse } from "@shared/proto/index.cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 110 | 텍스트 | `Select the default terminal Cline will use. 'Default' uses your VSCode global setting.` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 129 | 텍스트 | `Set how long Cline waits for shell integration to activate before executing commands. Increase this` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 143 | 텍스트 | `When enabled, Cline will reuse existing terminal windows that aren't in the current working direc...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 161 | 텍스트 | `Choose whether Cline runs commands in the VS Code terminal or a background process.` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 171 | 텍스트 | `href="https://docs.cline.bot/troubleshooting/terminal-quick-fixes"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 179 | 텍스트 | `href="https://docs.cline.bot/troubleshooting/terminal-integration-guide"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 1 | 텍스트 | `import { UpdateSettingsRequest } from "@shared/proto/cline/state"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 39 | 텍스트 | `description: "Let Cline run focused subagents in parallel to explore the codebase for you.",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 97 | 텍스트 | `id: "cline-web-tools",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 98 | 텍스트 | `label: "Cline Web Tools",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 100 | 텍스트 | `stateKey: "clineWebToolsEnabled",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 101 | 텍스트 | `settingKey: "clineWebToolsEnabled",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 106 | 텍스트 | `description: "Enables git worktree management for running parallel Cline tasks.",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 206 | 텍스트 | `clineWebToolsEnabled,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 218 | 텍스트 | `updateSetting("focusChainSettings", { ...focusChainSettings, remindClineInterval: value })` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 234 | 텍스트 | `clineWebToolsEnabled: clineWebToolsEnabled?.user,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 244 | 텍스트 | `clineWebToolsEnabled: clineWebToolsEnabled?.featureFlag,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 297 | 텍스트 | `value={focusChainSettings?.remindClineInterval \|\| 6}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/ApiConfigurationSection.tsx | 1 | 텍스트 | `import { UpdateSettingsRequest } from "@shared/proto/cline/state"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/GeneralSettingsSection.tsx | 45 | 텍스트 | `Help improve Cline by sending usage data and error reports. No code, prompts, or personal informa...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/GeneralSettingsSection.tsx | 49 | 텍스트 | `href="https://docs.cline.bot/more-info/telemetry"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/GeneralSettingsSection.tsx | 56 | 텍스트 | `href="https://cline.bot/privacy"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 14 | 헤더 | `<h2 className="text-lg font-semibold">Cline v{version}</h2>` | Gaea-AI-Pro | High |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 16 | 텍스트 | `An AI assistant that can use your CLI and Editor. Cline can handle complex software development t...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 23 | 텍스트 | `<VSCodeLink href="https://x.com/cline">X</VSCodeLink>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 25 | 텍스트 | `<VSCodeLink href="https://discord.gg/cline">Discord</VSCodeLink>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 27 | 텍스트 | `<VSCodeLink href="https://www.reddit.com/r/cline/"> r/cline</VSCodeLink>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 32 | 텍스트 | `<VSCodeLink href="https://github.com/cline/cline">GitHub</VSCodeLink>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 34 | 텍스트 | `<VSCodeLink href="https://github.com/cline/cline/issues"> Issues</VSCodeLink>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 36 | 텍스트 | `<VSCodeLink href="https://github.com/cline/cline/discussions/categories/feature-requests?discussi...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 44 | 텍스트 | `<VSCodeLink href="https://docs.cline.bot/">Documentation</VSCodeLink>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 46 | 텍스트 | `<VSCodeLink href="https://cline.bot/">https://cline.bot</VSCodeLink>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/index.cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 5 | 텍스트 | `import { useClineAuth } from "@/context/ClineAuthContext"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 273 | 텍스트 | `const { activeOrganization } = useClineAuth()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 293 | 텍스트 | `<VSCodeLink href="https://app.cline.bot/dashboard/organization?tab=settings">dashboard</VSCodeLink>.` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.spec.tsx | 16 | 텍스트 | `clineWebToolsEnabled: { user: true, featureFlag: true },` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.spec.tsx | 18 | 텍스트 | `focusChainSettings: { enabled: false, remindClineInterval: 6 },` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 1 | 텍스트 | `import { EmptyRequest, StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 178 | 텍스트 | `Prevent Cline from using browser actions (e.g. launch, click, type).` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 249 | 텍스트 | `Enable Cline to use your Chrome` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/LiteLlmProvider.tsx | 2 | 텍스트 | `import { UpdateApiConfigurationRequestNew } from "@shared/proto/index.cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/VSCodeLmProvider.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 2 | 텍스트 | `import type { OcaAuthState, OcaUserInfo } from "@shared/proto/index.cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 3 | 텍스트 | `import { EmptyRequest, StringRequest } from "@shared/proto/index.cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 307 | 텍스트 | `href="https://confluence.oraclecorp.com/confluence/display/AICODE/Oracle+Code+Assist+via+Cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/HicapProvider.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/OpenRouterProvider.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/ClineProvider.tsx | 2 | 텍스트 | `import { ClineAccountInfoCard } from "../ClineAccountInfoCard"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/ClineProvider.tsx | 3 | 텍스트 | `import ClineModelPicker from "../ClineModelPicker"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/ClineProvider.tsx | 6 | 텍스트 | `* Props for the ClineProvider component` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/ClineProvider.tsx | 8 | 텍스트 | `interface ClineProviderProps {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/ClineProvider.tsx | 16 | 텍스트 | `* The Cline provider configuration component` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/ClineProvider.tsx | 18 | 텍스트 | `export const ClineProvider = ({ showModelOptions, isPopup, currentMode, initialModelTab }: ClineP...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/ClineProvider.tsx | 21 | 텍스트 | `{/* Cline Account Info Card */}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/ClineProvider.tsx | 23 | 텍스트 | `<ClineAccountInfoCard />` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/ClineProvider.tsx | 28 | 텍스트 | `<ClineModelPicker` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/NousresearchProvider.tsx | 61 | 텍스트 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 3 | 텍스트 | `import { OpenAiModelsRequest } from "@shared/proto/cline/models"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 401 | 텍스트 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 1 | 텍스트 | `import { SapAiCoreModelDeployment, SapAiCoreModelsRequest } from "@shared/proto/index.cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/RequestyProvider.tsx | 2 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/XaiProvider.tsx | 50 | 텍스트 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/TogetherProvider.tsx | 49 | 텍스트 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 167 | 텍스트 | `<span className="font-semibold">Note:</span> Cline uses complex prompts and works best with Claud...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/AihubmixProvider.tsx | 2 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/MoonshotProvider.tsx | 2 | 텍스트 | `import { UpdateApiConfigurationRequestNew } from "@shared/proto/index.cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/NebiusProvider.tsx | 31 | 텍스트 | `helpText="This key is stored locally and only used to make API requests from this extension. (Not...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 143 | 텍스트 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 2 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 266 | 텍스트 | `If you're unsure which model to choose, Cline works best with{" "}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/HicapModelPicker.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/settingsHandlers.ts | 1 | 텍스트 | `import { McpDisplayMode, UpdateSettingsRequest } from "@shared/proto/cline/state"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/useApiConfigurationHandlers.ts | 2 | 텍스트 | `import { UpdateApiConfigurationRequest } from "@shared/proto/cline/models"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 80 | 텍스트 | `* For providers with dynamic models (openrouter, cline, ollama, etc.), returns undefined.` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 147 | 텍스트 | `case "cline":` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 272 | 텍스트 | `case "cline":` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 279 | 텍스트 | `const clineModelId =` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 280 | 텍스트 | `(currentMode === "plan" ? apiConfiguration?.planModeClineModelId : apiConfiguration?.actModeCline...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 283 | 텍스트 | `const clineModelInfo =` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 284 | 텍스트 | `(currentMode === "plan" ? apiConfiguration?.planModeClineModelInfo : apiConfiguration?.actModeCli...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 289 | 텍스트 | `selectedModelId: clineModelId,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 290 | 텍스트 | `selectedModelInfo: clineModelInfo,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 528 | 텍스트 | `clineModelId: undefined,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 542 | 텍스트 | `clineModelInfo: undefined,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 568 | 텍스트 | `// Backward compatibility: Cline previously stored model selection in OpenRouter keys.` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 569 | 텍스트 | `const clineModelId =` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 570 | 텍스트 | `(mode === "plan" ? apiConfiguration.planModeClineModelId : apiConfiguration.actModeClineModelId) ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 571 | 텍스트 | `const clineModelInfo =` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 572 | 텍스트 | `(mode === "plan" ? apiConfiguration.planModeClineModelInfo : apiConfiguration.actModeClineModelIn...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 589 | 텍스트 | `clineModelId,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 608 | 텍스트 | `clineModelInfo,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 690 | 텍스트 | `case "cline":` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 691 | 텍스트 | `updates.planModeClineModelId = sourceFields.clineModelId` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 692 | 텍스트 | `updates.actModeClineModelId = sourceFields.clineModelId` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 693 | 텍스트 | `updates.planModeClineModelInfo = sourceFields.clineModelInfo` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/utils/providerUtils.ts | 694 | 텍스트 | `updates.actModeClineModelInfo = sourceFields.clineModelInfo` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/SettingsView.tsx | 2 | 텍스트 | `import { ResetStateRequest } from "@shared/proto/cline/state"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/SettingsView.tsx | 3 | 텍스트 | `import { UserOrganization } from "@shared/proto/index.cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/SettingsView.tsx | 18 | 텍스트 | `import { useClineAuth } from "@/context/ClineAuthContext"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/SettingsView.tsx | 96 | 텍스트 | `tooltipText: "About Cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/SettingsView.tsx | 150 | 텍스트 | `const { activeOrganization } = useClineAuth()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 44 | 텍스트 | `<p className="text-sm text-description mt-1">The language that Cline should use for communication...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/SapAiCoreModelPicker.tsx | 2 | 텍스트 | `import { SapAiCoreModelDeployment } from "@shared/proto/index.cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/SapAiCoreModelPicker.tsx | 73 | 텍스트 | `// Models that are both deployed AND supported in Cline` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/SapAiCoreModelPicker.tsx | 79 | 텍스트 | `// Models that are supported in Cline but NOT deployed` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 2 | 텍스트 | `import { CLINE_RECOMMENDED_MODELS_FALLBACK } from "@shared/cline/recommended-models"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 3 | 텍스트 | `import { EmptyRequest, StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 4 | 텍스트 | `import { type ClineRecommendedModel, ClineRecommendedModelsResponse } from "@shared/proto/cline/m...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 49 | 텍스트 | `export interface ClineModelPickerProps {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 62 | 텍스트 | `const CLINE_RECOMMENDED_MODELS_RETRY_DELAY_MS = 5000` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 69 | 텍스트 | `model: Pick<ClineRecommendedModel, "id" \| "description" \| "tags">,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 86 | 텍스트 | `const RECOMMENDED_MODELS_FALLBACK: FeaturedModelCardEntry[] = CLINE_RECOMMENDED_MODELS_FALLBACK.r...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 90 | 텍스트 | `const FREE_MODELS_FALLBACK: FeaturedModelCardEntry[] = CLINE_RECOMMENDED_MODELS_FALLBACK.free` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 94 | 텍스트 | `const ClineModelPicker: React.FC<ClineModelPickerProps> = ({ isPopup, currentMode, showProviderRo...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 96 | 텍스트 | `const { apiConfiguration, favoritedModelIds, clineModels, refreshClineModels } = useExtensionState()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 98 | 텍스트 | `const [searchTerm, setSearchTerm] = useState(modeFields.clineModelId \|\| openRouterDefaultModelId)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 101 | 텍스트 | `const [clineRecommendedModels, setClineRecommendedModels] = useState<FeaturedModelCardEntry[]>([])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 102 | 텍스트 | `const [clineFreeModels, setClineFreeModels] = useState<FeaturedModelCardEntry[]>([])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 103 | 텍스트 | `const freeClineModelIds = useMemo(() => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 105 | 텍스트 | `clineFreeModels.length > 0 ? clineFreeModels.map((model) => model.id) : FREE_MODELS_FALLBACK.map(...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 107 | 텍스트 | `}, [clineFreeModels])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 108 | 텍스트 | `const freeClineModelIdSet = useMemo(` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 109 | 텍스트 | `() => new Set(freeClineModelIds.map((modelId) => normalizeModelId(modelId))),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 110 | 텍스트 | `[freeClineModelIds],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 114 | 텍스트 | `() => (clineRecommendedModels.length > 0 ? clineRecommendedModels : RECOMMENDED_MODELS_FALLBACK),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 115 | 텍스트 | `[clineRecommendedModels],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 117 | 텍스트 | `const freeModels = useMemo(() => (clineFreeModels.length > 0 ? clineFreeModels : FREE_MODELS_FALL...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 118 | 텍스트 | `const hasSuccessfulClineRecommendedModelsFetchRef = useRef(false)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 119 | 텍스트 | `const isFetchingClineRecommendedModelsRef = useRef(false)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 120 | 텍스트 | `const clineRecommendedModelsRetryTimeoutRef = useRef<number \| null>(null)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 122 | 텍스트 | `const refreshClineRecommendedModels = useCallback(async (): Promise<boolean> => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 125 | 텍스트 | `"refreshClineRecommendedModelsRpc",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 128 | 텍스트 | `ClineRecommendedModelsResponse.fromJSON,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 136 | 텍스트 | `setClineRecommendedModels(recommended)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 137 | 텍스트 | `setClineFreeModels(free)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 140 | 텍스트 | `console.error("Failed to refresh Cline recommended models:", error)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 145 | 텍스트 | `const clearClineRecommendedModelsRetryTimeout = useCallback(() => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 146 | 텍스트 | `if (clineRecommendedModelsRetryTimeoutRef.current !== null) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 147 | 텍스트 | `window.clearTimeout(clineRecommendedModelsRetryTimeoutRef.current)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 148 | 텍스트 | `clineRecommendedModelsRetryTimeoutRef.current = null` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 152 | 텍스트 | `const fetchClineRecommendedModels = useCallback(async () => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 153 | 텍스트 | `if (hasSuccessfulClineRecommendedModelsFetchRef.current \|\| isFetchingClineRecommendedModelsRef....` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 156 | 텍스트 | `isFetchingClineRecommendedModelsRef.current = true` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 157 | 텍스트 | `const succeeded = await refreshClineRecommendedModels()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 158 | 텍스트 | `isFetchingClineRecommendedModelsRef.current = false` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 161 | 텍스트 | `hasSuccessfulClineRecommendedModelsFetchRef.current = true` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 162 | 텍스트 | `clearClineRecommendedModelsRetryTimeout()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 166 | 텍스트 | `if (clineRecommendedModelsRetryTimeoutRef.current === null) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 167 | 텍스트 | `clineRecommendedModelsRetryTimeoutRef.current = window.setTimeout(() => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 168 | 텍스트 | `clineRecommendedModelsRetryTimeoutRef.current = null` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 169 | 텍스트 | `void fetchClineRecommendedModels()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 170 | 텍스트 | `}, CLINE_RECOMMENDED_MODELS_RETRY_DELAY_MS)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 172 | 텍스트 | `}, [clearClineRecommendedModelsRetryTimeout, refreshClineRecommendedModels])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 176 | 텍스트 | `clearClineRecommendedModelsRetryTimeout()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 178 | 텍스트 | `}, [clearClineRecommendedModelsRetryTimeout])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 190 | 텍스트 | `const currentModelId = modeFields.clineModelId \|\| openRouterDefaultModelId` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 191 | 텍스트 | `setActiveTab(freeClineModelIdSet.has(normalizeModelId(currentModelId)) ? "free" : "recommended")` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 192 | 텍스트 | `}, [modeFields.clineModelId, freeClineModelIdSet, initialTab])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 202 | 텍스트 | `clineModelId: { plan: "planModeClineModelId", act: "actModeClineModelId" },` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 203 | 텍스트 | `clineModelInfo: { plan: "planModeClineModelInfo", act: "actModeClineModelInfo" },` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 206 | 텍스트 | `clineModelId: newModelId,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 207 | 텍스트 | `clineModelInfo: clineModels?.[newModelId],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 215 | 텍스트 | `if (freeClineModelIdSet.has(normalizeModelId(selected.selectedModelId))) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 228 | 텍스트 | `}, [apiConfiguration, currentMode, freeClineModelIdSet])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 231 | 텍스트 | `refreshClineModels()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 235 | 텍스트 | `void fetchClineRecommendedModels()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 236 | 텍스트 | `}, [fetchClineRecommendedModels])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 240 | 텍스트 | `const currentModelId = modeFields.clineModelId \|\| openRouterDefaultModelId` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 242 | 텍스트 | `}, [modeFields.clineModelId])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 258 | 텍스트 | `const unfilteredModelIds = Object.keys(clineModels ?? {}).sort((a, b) => a.localeCompare(b))` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 259 | 텍스트 | `return filterOpenRouterModelIds(unfilteredModelIds, "cline", freeClineModelIds)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 260 | 텍스트 | `}, [clineModels, freeClineModelIds])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 357 | 텍스트 | `Object.entries(clineModels ?? {})?.some(([id, m]) => id === selectedModelId && m.thinkingConfig) ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 373 | 텍스트 | `}, [clineModels, selectedModelId, selectedModelIdLower, showReasoningEffort])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 452 | 텍스트 | `zIndex: CLINE_MODEL_PICKER_Z_INDEX,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 562 | 텍스트 | `The extension automatically fetches the latest Cline model list. If you're unsure which model to ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 570 | 텍스트 | `export default ClineModelPicker` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 577 | 텍스트 | `const CLINE_MODEL_PICKER_Z_INDEX = 1_000` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 588 | 텍스트 | `z-index: ${CLINE_MODEL_PICKER_Z_INDEX - 1};` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 173 | 텍스트 | `// Provider routing props (optional - only shown for Cline provider)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineAccountInfoCard.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineAccountInfoCard.tsx | 4 | 텍스트 | `import { useClineAuth } from "@/context/ClineAuthContext"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineAccountInfoCard.tsx | 8 | 텍스트 | `export const ClineAccountInfoCard = () => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineAccountInfoCard.tsx | 9 | 텍스트 | `const { clineUser } = useClineAuth()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineAccountInfoCard.tsx | 13 | 텍스트 | `const user = clineUser \|\| undefined` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ClineAccountInfoCard.tsx | 37 | 텍스트 | `Sign Up with Cline` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/README.md | 3 | 텍스트 | `This directory contains the refactored API Options components for the Cline extension. The refact...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/README.md | 17 | 텍스트 | `│   ├── ClineProvider.tsx       # Cline configuration` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/HuggingFaceModelPicker.tsx | 2 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/RequestyModelPicker.tsx | 3 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/RequestyModelPicker.tsx | 267 | 텍스트 | `If you're unsure which model to choose, Cline works best with{" "}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/OpenRouterModelPicker.tsx | 2 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/OpenRouterModelPicker.tsx | 377 | 텍스트 | `If you're unsure which model to choose, Cline works best with{" "}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ApiOptions.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ApiOptions.tsx | 22 | 텍스트 | `import { ClineProvider } from "./providers/ClineProvider"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ApiOptions.tsx | 361 | 텍스트 | `{apiConfiguration && selectedProvider === "cline" && (` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/ApiOptions.tsx | 362 | 텍스트 | `<ClineProvider` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 269 | 텍스트 | `If you're unsure which model to choose, Cline works best with{" "}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 3 | 텍스트 | `ClineRulesToggles,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 8 | 텍스트 | `ToggleClineRuleRequest,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 13 | 텍스트 | `} from "@shared/proto/cline/file"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 28 | 텍스트 | `const ClineRulesToggleModal: React.FC = () => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 30 | 텍스트 | `globalClineRulesToggles = {},` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 31 | 텍스트 | `localClineRulesToggles = {},` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 43 | 텍스트 | `setGlobalClineRulesToggles,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 44 | 텍스트 | `setLocalClineRulesToggles,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 83 | 텍스트 | `if (response.globalClineRulesToggles?.toggles) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 84 | 텍스트 | `setGlobalClineRulesToggles(response.globalClineRulesToggles.toggles)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 86 | 텍스트 | `if (response.localClineRulesToggles?.toggles) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 87 | 텍스트 | `setLocalClineRulesToggles(response.localClineRulesToggles.toggles)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 111 | 텍스트 | `setGlobalClineRulesToggles,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 112 | 텍스트 | `setLocalClineRulesToggles,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 195 | 텍스트 | `const globalRules = Object.entries(globalClineRulesToggles \|\| {})` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 200 | 텍스트 | `const localRules = Object.entries(localClineRulesToggles \|\| {})` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 234 | 텍스트 | `FileServiceClient.toggleClineRule(` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 235 | 텍스트 | `ToggleClineRuleRequest.create({` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 243 | 텍스트 | `if (response.globalClineRulesToggles?.toggles) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 244 | 텍스트 | `setGlobalClineRulesToggles(response.globalClineRulesToggles.toggles)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 246 | 텍스트 | `if (response.localClineRulesToggles?.toggles) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 247 | 텍스트 | `setLocalClineRulesToggles(response.localClineRulesToggles.toggles)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 254 | 텍스트 | `console.error("Error toggling Cline rule:", error)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 283 | 텍스트 | `.then((response: ClineRulesToggles) => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 300 | 텍스트 | `.then((response: ClineRulesToggles) => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 352 | 텍스트 | `FileServiceClient.toggleClineRule(` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 353 | 텍스트 | `ToggleClineRuleRequest.create({` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 438 | 텍스트 | `{!isVisible && <TooltipContent>Manage Cline Rules & Workflows</TooltipContent>}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 442 | 라벨 | `aria-label={isVisible ? "Hide Cline Rules & Workflows" : "Show Cline Rules & Workflows"}` | Gaea-AI-Pro | High |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 501 | 텍스트 | `Rules allow you to provide Cline with system-level guidance. Think of them as a persistent way` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 505 | 텍스트 | `href="https://docs.cline.bot/features/cline-rules"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 512 | 텍스트 | `Workflows allow you to define a series of steps to guide Cline through a repetitive set of` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 517 | 텍스트 | `href="https://docs.cline.bot/features/slash-commands/workflows">` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 523 | 텍스트 | `Skills are reusable instruction sets that Cline can activate on-demand. When a task matches a` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 524 | 텍스트 | `skill's description, Cline uses the <span className="font-bold">use_skill</span> tool to load` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 529 | 텍스트 | `Hooks allow you to execute custom scripts at specific points in Cline's execution lifecycle,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 555 | 텍스트 | `ruleType="cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 573 | 텍스트 | `ruleType={"cline"}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 587 | 텍스트 | `ruleType={"cline"}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 688 | 텍스트 | `href="https://docs.cline.bot/features/hooks"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 745 | 텍스트 | `{workspace.workspaceName}/.clinerules/hooks/` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 859 | 텍스트 | `export default ClineRulesToggleModal` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 2 | 텍스트 | `import { DeleteSkillRequest, RuleFileRequest } from "@shared/proto/index.cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 126 | 텍스트 | `type: ruleType \|\| "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/HookRow.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/HookRow.tsx | 2 | 텍스트 | `import { DeleteHookRequest, HooksToggles } from "@shared/proto/cline/file"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 1 | 텍스트 | `import { CreateHookRequest, CreateSkillRequest, RuleFileRequest } from "@shared/proto/index.cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 128 | 텍스트 | `type: ruleType \|\| "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 170 | 텍스트 | `Choose a hook type to create. Hooks execute at specific points in Cline's lifecycle. Available:{" "}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/buttons/DeleteTaskButton.tsx | 1 | 텍스트 | `import { StringArrayRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/buttons/OpenDiskConversationHistoryButton.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 3 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/Highlights.tsx | 2 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 1 | 텍스트 | `import { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 34 | 텍스트 | `const createTask = (text: string, images?: string[], files?: string[]): ClineMessage => ({` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 44 | 텍스트 | `const createMessages = (): ClineMessage[] => [` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 89 | 텍스트 | `clineMessages: createMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 119 | 텍스트 | `clineMessages: createMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 153 | 텍스트 | `clineMessages: createMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 187 | 텍스트 | `clineMessages: createMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 219 | 텍스트 | `clineMessages: createMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 255 | 텍스트 | `clineMessages: createMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 283 | 텍스트 | `clineMessages: createMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 312 | 텍스트 | `clineMessages: createMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 344 | 텍스트 | `clineMessages: createMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 373 | 텍스트 | `clineMessages: createMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 402 | 텍스트 | `clineMessages: createMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 431 | 텍스트 | `clineMessages: createMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 459 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/StickyUserMessage.tsx | 1 | 텍스트 | `import { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/StickyUserMessage.tsx | 7 | 텍스트 | `readonly lastUserMessage: ClineMessage \| null` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/util.ts | 1 | 텍스트 | `import { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/util.ts | 8 | 텍스트 | `* @param message ClineMessage - The message to determine the color for` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/util.ts | 11 | 텍스트 | `export const getColor = (message: ClineMessage): string => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/CheckpointError.tsx | 38 | 텍스트 | `href="https://github.com/cline/cline/wiki/Installing-Git-for-Checkpoints">` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 1 | 텍스트 | `import { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 20 | 텍스트 | `task: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/OptionsButtons.tsx | 1 | 텍스트 | `import { AskResponseRequest } from "@shared/proto/cline/task"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorBlockTitle.tsx | 2 | 텍스트 | `import { ClineError, ClineErrorType } from "../../../../src/services/error/ClineError"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorBlockTitle.tsx | 60 | 텍스트 | `const clineError = ClineError.parse(apiRequestFailedMessage)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorBlockTitle.tsx | 61 | 텍스트 | `const titleText = clineError?.isErrorType(ClineErrorType.Balance) ? "Credit Limit Reached" : "API...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/HookMessage.tsx | 1 | 텍스트 | `import { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/HookMessage.tsx | 2 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/HookMessage.tsx | 26 | 텍스트 | `function shouldExpandHookByDefault(message: ClineMessage, metadata: HookMetadata): boolean {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/HookMessage.tsx | 38 | 텍스트 | `message: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 1 | 텍스트 | `import { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 9 | 텍스트 | `const createMockMessage = (overrides: Partial<ClineMessage> = {}): ClineMessage => ({` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 18 | 텍스트 | `clineUser: null,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 26 | 텍스트 | `clineMessages: [],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 54 | 텍스트 | `"Displays different types of error messages in the chat interface, including API errors, credit l...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 74 | 텍스트 | `options: ["error", "mistake_limit_reached", "diff_error", "clineignore_error"],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 123 | 텍스트 | `// Cline-specific errors` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 124 | 텍스트 | `export const ClineBalanceError: Story = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 132 | 텍스트 | `providerId: "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 144 | 텍스트 | `export const ClineRateLimitError: Story = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 151 | 텍스트 | `providerId: "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 165 | 텍스트 | `providerId: "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 188 | 텍스트 | `clineUser: { id: "user123", email: "user@example.com" },` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 209 | 텍스트 | `message: "Please sign in to access Cline services.",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 212 | 텍스트 | `providerId: "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 219 | 버튼 | `const signInButton = canvas.getByRole("button", { name: /sign in to cline/i })` | Gaea-AI-Pro | High |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 258 | 텍스트 | `providerId: "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/CompletionOutputRow.tsx | 4 | 텍스트 | `import { Int64Request } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveModal.tsx | 75 | 텍스트 | `Let Cline take these actions without asking for approval.{" "}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveModal.tsx | 78 | 텍스트 | `href="https://docs.cline.bot/features/auto-approve#auto-approve"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 5 | 텍스트 | `import { ClineAsk, ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 49 | 텍스트 | `lastMessage: ClineMessage \| undefined` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 50 | 텍스트 | `secondLastMessage: ClineMessage \| undefined` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 51 | 텍스트 | `clineAsk: ClineAsk \| undefined` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 52 | 텍스트 | `task: ClineMessage \| undefined` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 93 | 텍스트 | `scrolledPastUserMessage: ClineMessage \| null` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 121 | 텍스트 | `task: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 122 | 텍스트 | `messages: ClineMessage[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 140 | 텍스트 | `clineAsk?: ClineAsk` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 141 | 텍스트 | `modifiedMessages: ClineMessage[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 1 | 텍스트 | `import type { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 5 | 텍스트 | `const createTextMessage = (ts: number, text: string): ClineMessage => ({` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 12 | 텍스트 | `const createToolMessage = (ts: number, tool: string): ClineMessage => ({` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 19 | 텍스트 | `const createReasoningMessage = (ts: number, text: string): ClineMessage => ({` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 7 | 텍스트 | `import type { ClineMessage, ClineSayBrowserAction, ClineSayTool } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 24 | 텍스트 | `export function isLowStakesTool(message: ClineMessage): boolean {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 29 | 텍스트 | `const tool = JSON.parse(message.text \|\| "{}") as ClineSayTool` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 39 | 텍스트 | `export function isToolGroup(item: ClineMessage \| ClineMessage[]): item is ClineMessage[] & { _is...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 46 | 텍스트 | `export function processMessages(messages: ClineMessage[]): ClineMessage[] {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 53 | 텍스트 | `export function filterVisibleMessages(messages: ClineMessage[]): ClineMessage[] {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 57 | 텍스트 | `// don't show a chat row for a completion_result ask without text. This specific type of message ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 95 | 텍스트 | `// Sometimes cline returns an empty text message, we don't want to render these. (We also use a s...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 115 | 텍스트 | `export function isBrowserSessionMessage(message: ClineMessage): boolean {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 137 | 텍스트 | `export function groupMessages(visibleMessages: ClineMessage[]): (ClineMessage \| ClineMessage[])[] {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 138 | 텍스트 | `const result: (ClineMessage \| ClineMessage[])[] = []` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 139 | 텍스트 | `let currentGroup: ClineMessage[] = []` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 178 | 텍스트 | `const browserAction = JSON.parse(message.text \|\| "{}") as ClineSayBrowserAction` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 204 | 텍스트 | `export function getTaskMessage(messages: ClineMessage[]): ClineMessage \| undefined {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 221 | 텍스트 | `allMessages: ClineMessage[],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 261 | 텍스트 | `allMessages: ClineMessage[],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 291 | 텍스트 | `function isDisplayedCheckpoint(checkpointIndex: number, allMessages: ClineMessage[]): boolean {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 315 | 텍스트 | `const tool = JSON.parse(msg.text \|\| "{}") as ClineSayTool` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 338 | 텍스트 | `export function findNextSegmentCost(checkpointTs: number, allMessages: ClineMessage[]): number \|...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 381 | 텍스트 | `export function isTextMessagePendingToolCall(textTs: number, allMessages: ClineMessage[]): boolean {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 417 | 텍스트 | `export function isToolGroupInFlight(toolGroupMessages: ClineMessage[], allMessages: ClineMessage[...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 423 | 텍스트 | `let mostRecentApiReq: ClineMessage \| null = null` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 503 | 텍스트 | `export function getToolsNotInCurrentActivities(toolGroupMessages: ClineMessage[], allMessages: Cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 512 | 텍스트 | `let mostRecentApiReq: ClineMessage \| null = null` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 625 | 텍스트 | `* Note: this operates on a flat `ClineMessage[]` (e.g. `modifiedMessages`) rather than` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 629 | 텍스트 | `export function isApiReqAbsorbable(apiReqTs: number, allMessages: ClineMessage[]): boolean {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 681 | 텍스트 | `function isApiReqFollowedOnlyByLowStakesTools(index: number, messages: (ClineMessage \| ClineMess...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 729 | 텍스트 | `export function groupLowStakesTools(groupedMessages: (ClineMessage \| ClineMessage[])[]): (ClineM...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 730 | 텍스트 | `const result: (ClineMessage \| ClineMessage[])[] = []` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 731 | 텍스트 | `let toolGroup: ClineMessage[] = []` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 732 | 텍스트 | `let pendingReasoning: ClineMessage[] = []` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 733 | 텍스트 | `let pendingApiReq: ClineMessage[] = []` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 735 | 텍스트 | `const pendingTools: ClineMessage[] = []` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 746 | 텍스트 | `const group = toolGroup as ClineMessage[] & { _isToolGroup: boolean }` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 1 | 텍스트 | `import type { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 15 | 텍스트 | `const streamingMessage: ClineMessage = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 31 | 텍스트 | `const errorMessage: ClineMessage = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 47 | 텍스트 | `const toolMessage: ClineMessage = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 61 | 텍스트 | `const toolMessage: ClineMessage = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 76 | 텍스트 | `const commandMessage: ClineMessage = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 86 | 텍스트 | `const commandOutputMessage: ClineMessage = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 114 | 텍스트 | `const message: ClineMessage = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 127 | 텍스트 | `const apiReqMessage: ClineMessage = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 138 | 텍스트 | `const message: ClineMessage = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 1 | 텍스트 | `import type { ClineMessage, ClineSayTool } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 216 | 버튼 | `export function getButtonConfig(message: ClineMessage \| undefined, _mode: Mode = "act"): ButtonC...` | Gaea-AI-Pro | High |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 249 | 텍스트 | `const tool = JSON.parse(message.text \|\| "{}") as ClineSayTool` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 1 | 텍스트 | `import { ClineMessage, ClineSayTool } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 2 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 12 | 텍스트 | `messages: ClineMessage[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 13 | 텍스트 | `allMessages: ClineMessage[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 18 | 텍스트 | `tool: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 19 | 텍스트 | `parsedTool: ClineSayTool` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 28 | 텍스트 | `const getActivityText = (tool: ClineSayTool): string \| null => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 58 | 텍스트 | `const getCurrentActivities = (allMessages: ClineMessage[]): ClineMessage[] => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 82 | 텍스트 | `const activities: ClineMessage[] = []` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 237 | 텍스트 | `function buildToolsWithReasoning(messages: ClineMessage[]): ToolWithReasoning[] {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 262 | 텍스트 | `function parseToolSafe(text: string \| undefined): ClineSayTool {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 264 | 텍스트 | `return JSON.parse(text \|\| "{}") as ClineSayTool` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 266 | 텍스트 | `return {} as ClineSayTool` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 273 | 텍스트 | `function getToolDisplayInfo(tool: ClineSayTool) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 322 | 텍스트 | `function getToolGroupSummary(messages: ClineMessage[]): string {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 364 | 텍스트 | `return parts.length === 0 ? "Context" : "Cline" + action + parts.join(", ")` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 1 | 텍스트 | `import type { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 14 | 텍스트 | `messageOrGroup: ClineMessage \| ClineMessage[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 15 | 텍스트 | `groupedMessages: (ClineMessage \| ClineMessage[])[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 16 | 텍스트 | `modifiedMessages: ClineMessage[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 133 | 텍스트 | `groupedMessages: (ClineMessage \| ClineMessage[])[],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 134 | 텍스트 | `modifiedMessages: ClineMessage[],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/messages/MessageRenderer.tsx | 143 | 텍스트 | `return (index: number, messageOrGroup: ClineMessage \| ClineMessage[]) => (` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/IdleIndicator.stashed.tsx | 13 | 텍스트 | `import { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/IdleIndicator.stashed.tsx | 23 | 텍스트 | `export function useIdleIndicator(scrollContainerRef: React.RefObject<HTMLDivElement>, clineMessag...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/IdleIndicator.stashed.tsx | 35 | 텍스트 | `const isTaskComplete = clineMessages.some(` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/IdleIndicator.stashed.tsx | 111 | 텍스트 | `}, [scrollContainerRef, clineMessages])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/TaskSection.tsx | 1 | 텍스트 | `import { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/TaskSection.tsx | 7 | 텍스트 | `task: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 1 | 텍스트 | `import { BANNER_DATA, BannerAction, BannerActionType, BannerCardData } from "@shared/cline/banner"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 2 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 3 | 텍스트 | `import type { Worktree } from "@shared/proto/cline/worktree"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 4 | 텍스트 | `import { TrackWorktreeViewOpenedRequest } from "@shared/proto/cline/worktree"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 15 | 텍스트 | `import { useClineAuth } from "@/context/ClineAuthContext"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 61 | 텍스트 | `const { clineUser } = useClineAuth()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 163 | 텍스트 | `if (banner.isClineUserOnly !== undefined) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 164 | 텍스트 | `return banner.isClineUserOnly === !!clineUser` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 173 | 텍스트 | `}, [isBannerDismissed, clineUser])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 195 | 텍스트 | `planModeApiProvider: "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 196 | 텍스트 | `actModeApiProvider: "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 222 | 텍스트 | `StateServiceClient.installClineCli({}).catch((error) =>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 276 | 텍스트 | `}, [bannerConfig, banners, clineUser, handleBannerAction, handleBannerDismiss])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 309 | 텍스트 | `Cline tasks.` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 333 | 텍스트 | `View and manage git worktrees. Great for running parallel Cline tasks.` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 1 | 텍스트 | `import type { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 13 | 텍스트 | `task: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 14 | 텍스트 | `groupedMessages: (ClineMessage \| ClineMessage[])[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 15 | 텍스트 | `modifiedMessages: ClineMessage[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 33 | 텍스트 | `const { clineMessages } = useExtensionState()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 34 | 텍스트 | `const lastRawMessage = useMemo(() => clineMessages.at(-1), [clineMessages])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 54 | 텍스트 | `return clineMessages.findIndex((msg) => msg.ts === scrolledPastUserMessage.ts)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 55 | 텍스트 | `}, [clineMessages, scrolledPastUserMessage])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 156 | 텍스트 | `const displayedGroupedMessages = useMemo<(ClineMessage \| ClineMessage[])[]>(() => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 160 | 텍스트 | `const waitingRow: ClineMessage = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/ActionButtons.tsx | 1 | 텍스트 | `import type { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/ActionButtons.tsx | 11 | 텍스트 | `task?: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/components/layout/ActionButtons.tsx | 12 | 텍스트 | `messages: ClineMessage[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 1 | 텍스트 | `import type { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 2 | 텍스트 | `import { EmptyRequest, StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 3 | 텍스트 | `import { AskResponseRequest, NewTaskRequest } from "@shared/proto/cline/task"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 14 | 텍스트 | `export function useMessageHandlers(messages: ClineMessage[], chatState: ChatState): MessageHandle...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 24 | 텍스트 | `clineAsk,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 56 | 텍스트 | `} else if (clineAsk) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 59 | 텍스트 | `if (clineAsk === "resume_task" \|\| clineAsk === "resume_completed_task") {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 71 | 텍스트 | `switch (clineAsk) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 99 | 텍스트 | `// No clineAsk set - check if task is actively running` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 137 | 텍스트 | `clineAsk,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 240 | 텍스트 | `if (clineAsk === "new_task") {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 277 | 텍스트 | `switch (clineAsk) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 297 | 텍스트 | `clineAsk,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useChatState.ts | 1 | 텍스트 | `import { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useChatState.ts | 9 | 텍스트 | `export function useChatState(messages: ClineMessage[]): ChatState {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useChatState.ts | 30 | 텍스트 | `const clineAsk = useMemo(() => (lastMessage?.type === "ask" ? lastMessage.ask : undefined), [last...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useChatState.ts | 85 | 텍스트 | `clineAsk,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 1 | 텍스트 | `import { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 16 | 텍스트 | `messages: ClineMessage[],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 17 | 텍스트 | `visibleMessages: ClineMessage[],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 18 | 텍스트 | `groupedMessages: (ClineMessage \| ClineMessage[])[],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 28 | 텍스트 | `scrolledPastUserMessage: ClineMessage \| null` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 40 | 텍스트 | `const [scrolledPastUserMessage, setScrolledPastUserMessage] = useState<ClineMessage \| null>(null)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/chat-view/hooks/useScrollBehavior.ts | 60 | 텍스트 | `let mostRecentScrolledPast: ClineMessage \| null = null` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/DiffEditRow.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 2 | 텍스트 | `ClineAskUseSubagents,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 3 | 텍스트 | `ClineMessage,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 4 | 텍스트 | `ClineSaySubagentStatus,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 22 | 텍스트 | `message: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 24 | 텍스트 | `lastModifiedMessage?: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 75 | 텍스트 | `function parseSubagentRowData(message: ClineMessage): SubagentRowData \| null {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 82 | 텍스트 | `const parsed = JSON.parse(message.text) as ClineAskUseSubagents` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 108 | 텍스트 | `const parsed = JSON.parse(message.text) as ClineSaySubagentStatus` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 200 | 텍스트 | `const title = singular ? "Cline wants to use a subagent:" : "Cline wants to use subagents:"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/UserMessage.tsx | 1 | 텍스트 | `import { CheckpointRestoreRequest } from "@shared/proto/cline/checkpoints"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/UserMessage.tsx | 2 | 텍스트 | `import { ClineCheckpointRestore } from "@shared/WebviewMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/UserMessage.tsx | 43 | 텍스트 | `const handleRestoreWorkspace = async (type: ClineCheckpointRestore) => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/UserMessage.tsx | 161 | 텍스트 | `type: ClineCheckpointRestore` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/UserMessage.tsx | 164 | 텍스트 | `onClick: (type: ClineCheckpointRestore) => void` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 1 | 텍스트 | `import { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 5 | 텍스트 | `import { useClineAuth, useClineSignIn } from "@/context/ClineAuthContext"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 6 | 텍스트 | `import { ClineError, ClineErrorType } from "../../../../src/services/error/ClineError"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 11 | 텍스트 | `message: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 12 | 텍스트 | `errorType: "error" \| "mistake_limit_reached" \| "diff_error" \| "clineignore_error"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 18 | 텍스트 | `const { clineUser } = useClineAuth()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 21 | 텍스트 | `const { isLoginLoading, handleSignIn } = useClineSignIn()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 29 | 텍스트 | `// FIXME: ClineError parsing should not be applied to non-Cline providers, but it seems we're usi...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 30 | 텍스트 | `const clineError = ClineError.parse(rawApiError)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 31 | 텍스트 | `const errorMessage = clineError?._error?.message \|\| clineError?.message \|\| rawApiError` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 32 | 텍스트 | `const requestId = clineError?._error?.request_id` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 33 | 텍스트 | `const providerId = clineError?.providerId \|\| clineError?._error?.providerId` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 34 | 텍스트 | `const isClineProvider = providerId === "cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 35 | 텍스트 | `const errorCode = clineError?._error?.code` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 37 | 텍스트 | `if (clineError?.isErrorType(ClineErrorType.Balance)) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 38 | 텍스트 | `const errorDetails = clineError._error?.details` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 50 | 텍스트 | `if (clineError?.isErrorType(ClineErrorType.RateLimit)) {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 61 | 텍스트 | `{/* Display the well-formatted error extracted from the ClineError instance */}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 76 | 텍스트 | `href="https://github.com/cline/cline/wiki/TroubleShooting-%E2%80%90-%22PowerShell-is-not-recogniz...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 86 | 버튼 | `{/* Display Login button for non-logged in users using the Cline provider */}` | Gaea-AI-Pro | High |
| webview-ui/src/components/chat/ErrorRow.tsx | 88 | 텍스트 | `{/* The user is signed in or not using cline provider */}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 89 | 텍스트 | `{isClineProvider && !clineUser ? (` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 91 | 텍스트 | `Sign in to Cline` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 116 | 텍스트 | `case "clineignore_error":` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 120 | 텍스트 | `Cline tried to access <code>{message.text}</code> which is blocked by the <code>.clineignore</code>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 131 | 텍스트 | `// For diff_error and clineignore_error, we don't show the header separately` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.tsx | 132 | 텍스트 | `if (errorType === "diff_error" \|\| errorType === "clineignore_error") {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 2 | 텍스트 | `import { BrowserAction, BrowserActionResult, ClineMessage, ClineSayBrowserAction } from "@shared/...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 3 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 18 | 텍스트 | `messages: ClineMessage[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 21 | 텍스트 | `lastModifiedMessage?: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 148 | 텍스트 | `messages: ClineMessage[] // messages up to and including the result` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 151 | 텍스트 | `messages: ClineMessage[] // messages leading to next result` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 155 | 텍스트 | `let currentStateMessages: ClineMessage[] = []` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 156 | 텍스트 | `let nextActionMessages: ClineMessage[] = []` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 327 | 텍스트 | `const browserAction = JSON.parse(message.text \|\| "{}") as ClineSayBrowserAction` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 363 | 텍스트 | `{isAutoApproved ? "Cline is using the browser:" : "Cline wants to use the browser:"}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 494 | 텍스트 | `message: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 550 | 텍스트 | `const browserAction = JSON.parse(message.text \|\| "{}") as ClineSayBrowserAction` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatTextArea.tsx | 2 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatTextArea.tsx | 3 | 텍스트 | `import { FileSearchRequest, FileSearchType, RelativePathsRequest } from "@shared/proto/cline/file"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatTextArea.tsx | 4 | 텍스트 | `import { PlanActMode, TogglePlanActModeRequest } from "@shared/proto/cline/state"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatTextArea.tsx | 44 | 텍스트 | `import ClineRulesToggleModal from "../cline-rules/ClineRulesToggleModal"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1087 | 텍스트 | `case "cline":` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1576 | 텍스트 | `<ClineRulesToggleModal />` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1598 | 텍스트 | `{`In ${shownTooltipMode === "act" ? "Act" : "Plan"}  mode, Cline will ${shownTooltipMode === "act...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 3 | 텍스트 | `ClineApiReqInfo,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 4 | 텍스트 | `ClineAskQuestion,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 5 | 텍스트 | `ClineAskUseMcpServer,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 6 | 텍스트 | `ClineMessage,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 7 | 텍스트 | `ClinePlanModeResponse,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 8 | 텍스트 | `ClineSayGenerateExplanation,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 9 | 텍스트 | `ClineSayTool,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 12 | 텍스트 | `import { BooleanRequest, StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 71 | 텍스트 | `message: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 74 | 텍스트 | `lastModifiedMessage?: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 156 | 텍스트 | `clineMessages,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 203 | 텍스트 | `const info: ClineApiReqInfo = JSON.parse(message.text)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 321 | 텍스트 | `<span className="text-error font-bold">Cline is having trouble...</span>,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 326 | 텍스트 | `<span className="font-bold text-foreground">Cline wants to execute this command:</span>,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 329 | 텍스트 | `const mcpServerUse = JSON.parse(message.text \|\| "{}") as ClineAskUseMcpServer` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 337 | 텍스트 | `Cline wants to {mcpServerUse.type === "use_mcp_tool" ? "use a tool" : "access a resource"} on the...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 356 | 텍스트 | `<span className="font-bold text-foreground">Cline has a question:</span>,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 374 | 텍스트 | `return JSON.parse(message.text \|\| "{}") as ClineSayTool` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 434 | 텍스트 | `? "Cline is creating patches to edit this file:"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 435 | 텍스트 | `: "Cline wants to edit this file:"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 469 | 텍스트 | `<span style={{ fontWeight: "bold" }}>Cline wants to delete this file:</span>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 487 | 텍스트 | `<span className="font-bold">Cline wants to create a new file:</span>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 510 | 텍스트 | `<span className="font-bold">Cline wants to read this file:</span>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 544 | 텍스트 | `? "Cline wants to view the top level files in this directory:"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 545 | 텍스트 | `: "Cline viewed the top level files in this directory:"}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 566 | 텍스트 | `? "Cline wants to recursively view all files in this directory:"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 567 | 텍스트 | `: "Cline recursively viewed all files in this directory:"}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 588 | 텍스트 | `? "Cline wants to view source code definition names used in this directory:"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 589 | 텍스트 | `: "Cline viewed source code definition names used in this directory:"}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 608 | 텍스트 | `Cline wants to search this directory for <code className="break-all">{tool.regex}</code>:` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 625 | 텍스트 | `<span className="font-bold">Cline is condensing the conversation:</span>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 670 | 텍스트 | `? "Cline wants to fetch content from this URL:"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 671 | 텍스트 | `: "Cline fetched content from this URL:"}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 699 | 텍스트 | `? "Cline wants to search the web for:"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 700 | 텍스트 | `: "Cline searched the web for:"}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 715 | 텍스트 | `<span className="font-bold">Cline loaded the skill:</span>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 773 | 텍스트 | `const useMcpServer = JSON.parse(message.text \|\| "{}") as ClineAskUseMcpServer` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 842 | 텍스트 | `clineMessages={clineMessages}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 915 | 텍스트 | `const tool = JSON.parse(message.text \|\| "{}") as ClineSayTool` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 930 | 텍스트 | `case "clineignore_error":` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 931 | 텍스트 | `return <ErrorRow errorType="clineignore_error" message={message} />` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 942 | 텍스트 | `let explanationInfo: ClineSayGenerateExplanation = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1035 | 텍스트 | `Cline may have trouble viewing the command's output. Please update VSCode (` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1041 | 텍스트 | `href="https://github.com/cline/cline/wiki/Troubleshooting-%E2%80%90-Shell-Integration-Unavailable">` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1182 | 텍스트 | `const parsedMessage = JSON.parse(message.text \|\| "{}") as ClineAskQuestion` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1234 | 텍스트 | `<span className="text-foreground font-bold">Cline wants to start a new task:</span>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1244 | 텍스트 | `<span className="text-foreground font-bold">Cline wants to condense your conversation:</span>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1254 | 텍스트 | `<span className="text-foreground font-bold">Cline wants to create a Github issue:</span>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatRow.tsx | 1264 | 텍스트 | `const parsedMessage = JSON.parse(message.text \|\| "{}") as ClinePlanModeResponse` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 106 | 텍스트 | `href="https://github.com/cline/cline/issues/new?template=bug_report.yml"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/CreditLimitError.tsx | 1 | 텍스트 | `import { AskResponseRequest } from "@shared/proto/cline/task"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/CreditLimitError.tsx | 5 | 텍스트 | `import { useClineAuth } from "@/context/ClineAuthContext"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/CreditLimitError.tsx | 17 | 텍스트 | `USER: "https://app.cline.bot/dashboard/account?tab=credits&redirect=true",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/CreditLimitError.tsx | 18 | 텍스트 | `ORG: "https://app.cline.bot/dashboard/organization?tab=credits&redirect=true",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/CreditLimitError.tsx | 28 | 텍스트 | `const { activeOrganization } = useClineAuth()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ServersToggleModal.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ServersToggleModal.tsx | 2 | 텍스트 | `import { McpServers } from "@shared/proto/cline/mcp"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ReportBugPreview.tsx | 66 | 텍스트 | `{bugData.cline_version && (` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ReportBugPreview.tsx | 68 | 텍스트 | `<div className="font-semibold">Cline Version</div>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ReportBugPreview.tsx | 69 | 텍스트 | `<MarkdownBlock markdown={bugData.cline_version} />` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatView.tsx | 6 | 텍스트 | `import { BooleanRequest, StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatView.tsx | 48 | 텍스트 | `clineMessages: messages,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatView.tsx | 58 | 텍스트 | `const isProdHostedApp = userInfo?.apiBaseUrl === "https://app.cline.bot"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ChatView.tsx | 62 | 텍스트 | `const task = useMemo(() => messages.at(0), [messages]) // leaving this less safe version here sin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/CommandOutputRow.tsx | 2 | 텍스트 | `import { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/CommandOutputRow.tsx | 3 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/CommandOutputRow.tsx | 122 | 텍스트 | `message: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 1 | 텍스트 | `import type { ClineMessage, ClineSayTool } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 14 | 텍스트 | `message: ClineMessage` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 20 | 텍스트 | `clineMessages: ClineMessage[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 41 | 텍스트 | `const getActivityText = (tool: ClineSayTool): string \| null => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 60 | 텍스트 | `messages: ClineMessage[],` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 63 | 텍스트 | `stopCondition?: (msg: ClineMessage) => boolean,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 81 | 텍스트 | `const tool = JSON.parse(msg.text \|\| "{}") as ClineSayTool` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 95 | 텍스트 | `const findCurrentApiReq = (messages: ClineMessage[]): { index: number; hasCost: boolean } \| null...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 111 | 텍스트 | `const findPrevCompletedApiReq = (messages: ClineMessage[], beforeIdx: number): number => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 137 | 텍스트 | `clineMessages,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 147 | 텍스트 | `const hasCompletionResult = clineMessages.some(` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 163 | 텍스트 | `return isApiReqAbsorbable(message.ts, clineMessages)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 164 | 텍스트 | `}, [message.ts, clineMessages])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 169 | 텍스트 | `const currentApiReq = findCurrentApiReq(clineMessages)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 177 | 텍스트 | `return collectToolsInRange(clineMessages, currentApiReq.index + 1, clineMessages.length)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 181 | 텍스트 | `}, [clineMessages])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 186 | 텍스트 | `return clineMessages.some((msg, idx) => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 191 | 텍스트 | `const prevMsg = clineMessages[i]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/RequestStartRow.tsx | 204 | 텍스트 | `}, [clineMessages])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 1 | 텍스트 | `import type { ClineMessage } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 7 | 텍스트 | `vi.mock("@/context/ClineAuthContext", () => ({` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 8 | 텍스트 | `useClineAuth: () => ({` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 9 | 텍스트 | `clineUser: null,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 11 | 텍스트 | `useClineSignIn: () => ({` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 22 | 텍스트 | `// Mock ClineError` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 23 | 텍스트 | `vi.mock("../../../../src/services/error/ClineError", () => ({` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 24 | 텍스트 | `ClineError: {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 27 | 텍스트 | `ClineErrorType: {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 35 | 텍스트 | `const mockMessage: ClineMessage = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 67 | 텍스트 | `it("renders clineignore error", () => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 68 | 텍스트 | `const clineignoreMessage = { ...mockMessage, text: "/path/to/file.txt" }` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 69 | 텍스트 | `render(<ErrorRow errorType="clineignore_error" message={clineignoreMessage} />)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 71 | 텍스트 | `expect(screen.getByText(/Cline tried to access/)).toBeInTheDocument()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 77 | 텍스트 | `const mockClineError = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 86 | 텍스트 | `buy_credits_url: "https://app.cline.bot/dashboard",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 91 | 텍스트 | `const { ClineError } = await import("../../../../src/services/error/ClineError")` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 92 | 텍스트 | `vi.mocked(ClineError.parse).mockReturnValue(mockClineError as any)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 101 | 텍스트 | `const mockClineError = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 109 | 텍스트 | `const { ClineError } = await import("../../../../src/services/error/ClineError")` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 110 | 텍스트 | `vi.mocked(ClineError.parse).mockReturnValue(mockClineError as any)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 119 | 텍스트 | `const mockClineError = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 122 | 텍스트 | `providerId: "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 126 | 텍스트 | `const { ClineError } = await import("../../../../src/services/error/ClineError")` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 127 | 텍스트 | `vi.mocked(ClineError.parse).mockReturnValue(mockClineError as any)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 132 | 텍스트 | `expect(screen.getByText("Sign in to Cline")).toBeInTheDocument()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 136 | 텍스트 | `const mockClineError = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 142 | 텍스트 | `const { ClineError } = await import("../../../../src/services/error/ClineError")` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 143 | 텍스트 | `vi.mocked(ClineError.parse).mockReturnValue(mockClineError as any)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 157 | 텍스트 | `"https://github.com/cline/cline/wiki/TroubleShooting-%E2%80%90-%22PowerShell-is-not-recognized-as...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 162 | 텍스트 | `const mockClineError = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 168 | 텍스트 | `const { ClineError } = await import("../../../../src/services/error/ClineError")` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 169 | 텍스트 | `vi.mocked(ClineError.parse).mockReturnValue(mockClineError as any)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 176 | 텍스트 | `it("falls back to regular error message when ClineError.parse returns null", async () => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 177 | 텍스트 | `const { ClineError } = await import("../../../../src/services/error/ClineError")` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 178 | 텍스트 | `vi.mocked(ClineError.parse).mockReturnValue(undefined)` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 182 | 텍스트 | `// When ClineError.parse returns null, we display the raw error message for non-Cline providers` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 183 | 텍스트 | `// Since clineError is undefined, isClineProvider is false, so we show the raw apiRequestFailedMe...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/marketplace/McpMarketplaceCard.tsx | 2 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/marketplace/McpSubmitCard.tsx | 38 | 텍스트 | `<a href="https://github.com/cline/mcp-marketplace">github.com/cline/mcp-marketplace</a>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/marketplace/McpMarketplaceView.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/installed/server-row/McpToolRow.tsx | 2 | 텍스트 | `import { ToggleToolAutoApproveRequest } from "@shared/proto/cline/mcp"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/installed/server-row/ServerRow.tsx | 2 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/installed/server-row/ServerRow.tsx | 8 | 텍스트 | `} from "@shared/proto/cline/mcp"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/installed/ConfigureServersView.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/installed/ConfigureServersView.tsx | 27 | 텍스트 | `Cline's capabilities. You can use{" "}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/installed/ConfigureServersView.tsx | 31 | 텍스트 | `or ask Cline to create new tools specific to your workflow (e.g., "add a tool that gets the lates...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/add-server/AddRemoteServerForm.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/add-server/AddRemoteServerForm.tsx | 2 | 텍스트 | `import { AddRemoteMcpServerRequest, McpServers } from "@shared/proto/cline/mcp"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/add-server/AddLocalServerForm.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/add-server/AddLocalServerForm.tsx | 15 | 텍스트 | `Add a local MCP server by configuring it in <code>cline_mcp_settings.json</code>. You'll need to ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/tabs/add-server/AddLocalServerForm.tsx | 30 | 텍스트 | `Open cline_mcp_settings.json` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/McpConfigurationView.tsx | 2 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/configuration/McpConfigurationView.tsx | 3 | 텍스트 | `import { McpServers } from "@shared/proto/cline/mcp"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/chat-display/ImagePreview.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/chat-display/LinkPreview.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/mcp/chat-display/utils/mcpRichUtil.ts | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/welcome/HomeHeader.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/welcome/HomeHeader.tsx | 2 | 텍스트 | `import ClineLogoSanta from "@/assets/ClineLogoSanta"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/welcome/HomeHeader.tsx | 3 | 텍스트 | `import ClineLogoVariable from "@/assets/ClineLogoVariable"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/welcome/HomeHeader.tsx | 24 | 텍스트 | `const LogoComponent = isDecember ? ClineLogoSanta : ClineLogoVariable` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/welcome/WelcomeView.tsx | 1 | 텍스트 | `import { BooleanRequest, EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/welcome/WelcomeView.tsx | 4 | 텍스트 | `import ClineLogoWhite from "@/assets/ClineLogoWhite"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/welcome/WelcomeView.tsx | 42 | 헤더 | `<h2 className="text-lg font-semibold">Hi, I'm Cline</h2>` | Gaea-AI-Pro | High |
| webview-ui/src/components/welcome/WelcomeView.tsx | 44 | 텍스트 | `<ClineLogoWhite className="size-16" />` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/welcome/quickWinTasks.ts | 17 | 텍스트 | `actionCommand: "cline/createNextJsApp",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/welcome/quickWinTasks.ts | 26 | 텍스트 | `actionCommand: "cline/createCliTool",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/welcome/quickWinTasks.ts | 35 | 텍스트 | `actionCommand: "cline/createSnakeGame",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/welcome/SuggestedTasks.tsx | 1 | 텍스트 | `import { NewTaskRequest } from "@shared/proto/cline/task"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/welcome/SuggestedTasks.tsx | 17 | 텍스트 | `Quick <span className="text-white">[Wins]</span> with Cline` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/browser/BrowserSettingsMenu.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/Thumbnails.tsx | 2 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/MarkdownBlock.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/MarkdownBlock.tsx | 2 | 텍스트 | `import { PlanActMode, TogglePlanActModeRequest } from "@shared/proto/cline/state"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/MarkdownBlock.tsx | 269 | 텍스트 | `* Solves https://github.com/cline/cline/issues/1028` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewItems.tsx | 1 | 텍스트 | `import type { BannerAction, BannerCardData } from "@shared/cline/banner"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewItems.tsx | 82 | 텍스트 | `<strong>Try Codex 5.3:</strong> OpenAI's latest coding model, now available in Cline!{" "}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewItems.tsx | 86 | 텍스트 | `<strong>Try latest SOTA coding model:</strong> Claude Sonnet 4.6 and Gemini 3.1 pro within Cline!...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewItems.tsx | 90 | 텍스트 | `<strong>Try Cline CLI 2.0:</strong> with /mcp functionality added in CLI{" "}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewItems.tsx | 91 | 텍스트 | `<code style={inlineCodeStyle}>npm install -g cline</code>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/CheckmarkControl.tsx | 2 | 텍스트 | `import { CheckpointRestoreRequest } from "@shared/proto/cline/checkpoints"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/CheckmarkControl.tsx | 3 | 텍스트 | `import { Int64Request } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/CheckmarkControl.tsx | 4 | 텍스트 | `import { ClineCheckpointRestore } from "@shared/WebviewMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/CheckmarkControl.tsx | 105 | 텍스트 | `const restoreType: ClineCheckpointRestore = "task"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/CheckmarkControl.tsx | 122 | 텍스트 | `const restoreType: ClineCheckpointRestore = "workspace"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/CheckmarkControl.tsx | 139 | 텍스트 | `const restoreType: ClineCheckpointRestore = "taskAndWorkspace"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/MarkdownBlock.stories.tsx | 128 | 텍스트 | `- Official documentation: https://github.com/cline/cline` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/MarkdownBlock.stories.tsx | 129 | 텍스트 | `- API reference: https://api.cline.bot/docs` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/MarkdownBlock.stories.tsx | 130 | 텍스트 | `- Support forum: https://community.cline.bot` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/MarkdownBlock.stories.tsx | 132 | 텍스트 | `You can also visit our website at https://cline.bot for more information.`,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 1 | 텍스트 | `import { BannerAction, BannerCardData } from "@shared/cline/banner"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 31 | 텍스트 | `// Switch to Cline provider first so the model picker tab works` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 34 | 텍스트 | `planModeApiProvider: "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 35 | 텍스트 | `actModeApiProvider: "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 88 | 텍스트 | `href="https://x.com/cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 98 | 텍스트 | `href="https://discord.gg/cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 108 | 텍스트 | `href="https://github.com/cline/cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 118 | 텍스트 | `href="https://www.reddit.com/r/cline/"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 128 | 텍스트 | `href="https://www.linkedin.com/company/clinebot/"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 137 | 텍스트 | `Please support Cline by{" "}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/WhatsNewModal.tsx | 139 | 텍스트 | `href="https://github.com/cline/cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/CheckpointControls.tsx | 1 | 텍스트 | `import { CheckpointRestoreRequest } from "@shared/proto/cline/checkpoints"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/CheckpointControls.tsx | 2 | 텍스트 | `import { Int64Request } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/MermaidBlock.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/TelemetryBanner.tsx | 1 | 텍스트 | `import { TelemetrySettingEnum, TelemetrySettingRequest } from "@shared/proto/cline/state"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/TelemetryBanner.tsx | 24 | 헤더 | `<h3 className="m-0">Help Improve Cline</h3>` | Gaea-AI-Pro | High |
| webview-ui/src/components/common/TelemetryBanner.tsx | 27 | 텍스트 | `Cline collects error and usage data to help us fix bugs and improve the extension. No code, promp...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/common/PopupModalContainer.tsx | 12 | 텍스트 | `* Shared styled container for popup modals (ModelPicker, ServersToggle, ClineRulesToggle).` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 2 | 텍스트 | `import { NewTaskRequest } from "@shared/proto/cline/task"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 3 | 텍스트 | `import type { MergeWorktreeResult, Worktree as WorktreeProto } from "@shared/proto/cline/worktree"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 9 | 텍스트 | `} from "@shared/proto/cline/worktree"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 219 | 텍스트 | `// Ask Cline to resolve conflicts` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 220 | 텍스트 | `const handleAskClineToResolve = useCallback(async () => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 235 | 텍스트 | `setMergeError(err instanceof Error ? err.message : "Failed to create task for Cline")` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 254 | 텍스트 | `their own windows so Cline can work on multiple tasks in parallel.{" "}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 257 | 텍스트 | `href="https://docs.cline.bot/features/worktrees"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 279 | 텍스트 | `href="https://docs.cline.bot/features/worktrees#worktreeinclude"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 300 | 텍스트 | `href="https://docs.cline.bot/features/worktrees#worktreeinclude"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 576 | 버튼 | `<VSCodeButton onClick={handleAskClineToResolve} style={{ width: "100%" }}>` | Gaea-AI-Pro | High |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 577 | 텍스트 | `Ask Cline to Resolve` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/CreateWorktreeModal.tsx | 1 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/CreateWorktreeModal.tsx | 2 | 텍스트 | `import { CreateWorktreeRequest, SwitchWorktreeRequest } from "@shared/proto/cline/worktree"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/worktrees/CreateWorktreeModal.tsx | 135 | 텍스트 | `href="https://docs.cline.bot/features/worktrees#worktreeinclude"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/menu/Navbar.tsx | 70 | 텍스트 | `id="cline-navbar-container">` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/history/HistoryPreview.tsx | 1 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/history/HistoryViewItem.tsx | 2 | 텍스트 | `import { StringRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/history/HistoryView.tsx | 1 | 텍스트 | `import { BooleanRequest, EmptyRequest, StringArrayRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/history/HistoryView.tsx | 2 | 텍스트 | `import { GetTaskHistoryRequest, TaskFavoriteRequest } from "@shared/proto/cline/task"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/helpers.ts | 1 | 텍스트 | `import type { UsageTransaction as ClineAccountUsageTransaction } from "@shared/ClineAccount"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/helpers.ts | 2 | 텍스트 | `import type { UsageTransaction as ProtoUsageTransaction, UserOrganization } from "@shared/proto/c...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/helpers.ts | 19 | 텍스트 | `export const getClineUris = (base: string, type: "dashboard" \| "credits", route?: "account" \| "...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/helpers.ts | 33 | 텍스트 | `* Converts a protobuf UsageTransaction to a ClineAccount UsageTransaction` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/helpers.ts | 36 | 텍스트 | `export function convertProtoUsageTransaction(protoTransaction: ProtoUsageTransaction): ClineAccou...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/helpers.ts | 49 | 텍스트 | `* Converts an array of protobuf UsageTransactions to ClineAccount UsageTransactions` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/helpers.ts | 51 | 텍스트 | `export function convertProtoUsageTransactions(protoTransactions: ProtoUsageTransaction[]): ClineA...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 1 | 텍스트 | `import type { UsageTransaction as ClineAccountUsageTransaction, PaymentTransaction } from "@share...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 2 | 텍스트 | `import { isClineInternalTester } from "@shared/internal/account"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 3 | 텍스트 | `import type { UserOrganization } from "@shared/proto/cline/account"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 4 | 텍스트 | `import { EmptyRequest } from "@shared/proto/cline/common"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 10 | 텍스트 | `import { type ClineUser, handleSignOut } from "@/context/ClineAuthContext"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 19 | 텍스트 | `import { convertProtoUsageTransactions, getClineUris, getMainRole } from "./helpers"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 23 | 텍스트 | `clineUser: ClineUser \| null` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 29 | 텍스트 | `type ClineAccountViewProps = {` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 30 | 텍스트 | `clineUser: ClineUser` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 33 | 텍스트 | `clineEnv: "Production" \| "Staging" \| "Local"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 38 | 텍스트 | `usageData: ClineAccountUsageTransaction[]` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 43 | 텍스트 | `const ClineEnvOptions = ["Production", "Staging", "Local"] as const` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 45 | 텍스트 | `const AccountView = ({ onDone, clineUser, organizations, activeOrganization }: AccountViewProps) ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 52 | 텍스트 | `{clineUser?.uid ? (` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 53 | 텍스트 | `<ClineAccountView` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 55 | 텍스트 | `clineEnv={environment === "local" ? "Local" : environment === "staging" ? "Staging" : "Production"}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 56 | 텍스트 | `clineUser={clineUser}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 57 | 텍스트 | `key={clineUser.uid}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 68 | 텍스트 | `export const ClineAccountView = ({ clineUser, userOrganizations, activeOrganization, clineEnv }: ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 69 | 텍스트 | `const { email, displayName, appBaseUrl, uid } = clineUser` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 85 | 텍스트 | `const [usageData, setUsageData] = useState<ClineAccountUsageTransaction[]>([])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 123 | 텍스트 | `const isClineTester = useMemo(() => (email ? isClineInternalTester(email) : false), [email])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 232 | 텍스트 | `const clineUrl = appBaseUrl \|\| "https://app.cline.bot"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 359 | 버튼 | `<VSCodeButtonLink appearance="primary" className="w-full" href={getClineUris(clineUrl, "dashboard...` | Gaea-AI-Pro | High |
| webview-ui/src/components/account/AccountView.tsx | 372 | 텍스트 | `creditUrl={getClineUris(clineUrl, "credits", dropdownValue === uid ? "account" : "organization")}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 390 | 텍스트 | `{isClineTester && environment !== "selfHosted" && (` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 393 | 텍스트 | `<div className="text-sm font-semibold">Cline Environment</div>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 396 | 텍스트 | `currentValue={clineEnv}` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 401 | 텍스트 | `updateSetting("clineEnv", value.toLowerCase())` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountView.tsx | 404 | 텍스트 | `{ClineEnvOptions.map((env) => (` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountWelcomeView.tsx | 2 | 텍스트 | `import { useClineSignIn } from "@/context/ClineAuthContext"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountWelcomeView.tsx | 4 | 텍스트 | `import ClineLogoVariable from "../../assets/ClineLogoVariable"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountWelcomeView.tsx | 8 | 텍스트 | `// 		<ClineLogoWhite className="size-16 mb-4" />` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountWelcomeView.tsx | 11 | 텍스트 | `const { isLoginLoading, handleSignIn } = useClineSignIn()` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountWelcomeView.tsx | 15 | 텍스트 | `<ClineLogoVariable className="size-16 mb-4" environment={environment} />` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountWelcomeView.tsx | 23 | 텍스트 | `Sign up with Cline` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountWelcomeView.tsx | 32 | 텍스트 | `By continuing, you agree to the <VSCodeLink href="https://cline.bot/tos">Terms of Service</VSCode...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/AccountWelcomeView.tsx | 33 | 텍스트 | `<VSCodeLink href="https://cline.bot/privacy">Privacy Policy.</VSCodeLink>` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/CreditsHistoryTable.tsx | 1 | 텍스트 | `import type { PaymentTransaction, UsageTransaction } from "@shared/ClineAccount"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/account/RemoteConfigToggle.tsx | 1 | 텍스트 | `import { UpdateSettingsRequest, UserOrganization } from "@shared/proto/index.cline"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/OnboardingView.tsx | 2 | 텍스트 | `import type { OnboardingModel, OnboardingModelGroup, OpenRouterModelInfo } from "@shared/proto/in...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/OnboardingView.tsx | 5 | 텍스트 | `import ClineLogoWhite from "@/assets/ClineLogoWhite"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/OnboardingView.tsx | 17 | 텍스트 | `getClineUIOnboardingGroups,` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/OnboardingView.tsx | 284 | 텍스트 | `const models = useMemo(() => getClineUIOnboardingGroups(onboardingModels), [onboardingModels])` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/OnboardingView.tsx | 321 | 텍스트 | `planModeApiProvider: "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/OnboardingView.tsx | 322 | 텍스트 | `actModeApiProvider: "cline",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/OnboardingView.tsx | 380 | 텍스트 | `<ClineLogoWhite className="size-16 flex-shrink-0" />` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/data-models.ts | 1 | 텍스트 | `import type { OpenRouterModelInfo } from "@shared/proto/cline/models"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/data-models.ts | 2 | 텍스트 | `import type { OnboardingModel, OnboardingModelGroup } from "@shared/proto/cline/state"` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/data-models.ts | 14 | 텍스트 | `export function getClineUIOnboardingGroups(groupedModels: OnboardingModelGroup): OnboardingModels...` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/data-steps.ts | 15 | 텍스트 | `title: "How will you use Cline?",` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/data-steps.ts | 19 | 텍스트 | `{ text: "Login to Cline", action: "signin", variant: "secondary" },` | Gaea-AI-Pro | Medium |
| webview-ui/src/components/onboarding/data-steps.ts | 53 | 텍스트 | `{ title: "Bring my own API key", description: "Use Cline with your provider of choice", type: NEW...` | Gaea-AI-Pro | Medium |
| webview-ui/src/constants.ts | 3 | 텍스트 | `REMOTE_MCP_SERVER_DOCS: "https://docs.cline.bot/mcp/connecting-to-a-remote-server",` | Gaea-AI-Pro | Medium |
| webview-ui/src/constants.ts | 4 | 텍스트 | `LOCAL_MCP_SERVER_DOCS: "https://docs.cline.bot/mcp/configuring-mcp-servers#editing-mcp-settings-f...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 4 | 텍스트 | `import { CLINE_ONBOARDING_MODELS } from "@shared/cline/onboarding"` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 5 | 텍스트 | `import type { ClineMessage, ClineSayTool } from "@shared/ExtensionMessage"` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 51 | 텍스트 | `The ChatView component is the main interface for interacting with Cline. It provides a comprehens...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 148 | 텍스트 | `type: ClineMessage["type"],` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 149 | 텍스트 | `say: ClineMessage["say"],` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 151 | 텍스트 | `overrides: Partial<ClineMessage> = {},` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 152 | 텍스트 | `): ClineMessage => ({` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 162 | 텍스트 | `sayTool: ClineSayTool,` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 163 | 텍스트 | `overrides: Partial<ClineMessage> = {},` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 164 | 텍스트 | `): ClineMessage => ({` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 192 | 텍스트 | `const mockActiveMessages: ClineMessage[] = [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 228 | 텍스트 | `const mockStreamingMessages: ClineMessage[] = [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 246 | 텍스트 | `clineMessages: mockActiveMessages,` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 272 | 텍스트 | `decorators: [createStoryDecorator({ welcomeViewCompleted: false, showWelcome: true, clineMessages...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 300 | 텍스트 | `clineMessages: [],` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 301 | 텍스트 | `onboardingModels: { models: CLINE_ONBOARDING_MODELS },` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 312 | 텍스트 | `onboardingModels: { models: CLINE_ONBOARDING_MODELS },` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 324 | 텍스트 | `const title = canvas.getByText("How will you use Cline?")` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 371 | 텍스트 | `await expect(canvas.getByText("How will you use Cline?")).toBeInTheDocument()` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 386 | 텍스트 | `decorators: [createStoryDecorator({ clineMessages: [], taskHistory: [], isNewUser: true, showAnno...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 398 | 텍스트 | `createStoryDecorator({ clineMessages: [], taskHistory: mockTaskHistory, isNewUser: true, showAnno...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 414 | 텍스트 | `story: "An active conversation showing a typical interaction with Cline, including task creation,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 421 | 텍스트 | `decorators: [createStoryDecorator({ clineMessages: mockStreamingMessages })],` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 431 | 텍스트 | `const createLongMessages = (): ClineMessage[] => [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 486 | 텍스트 | `decorators: [createStoryDecorator({ clineMessages: createLongMessages() })],` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 532 | 텍스트 | `decorators: [createStoryDecorator({ clineMessages: createErrorMessages() })],` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 536 | 텍스트 | `story: "Shows how Cline handles and displays error messages, helping users understand and resolve...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 554 | 텍스트 | `story: "Shows the interface with auto-approval enabled, allowing Cline to execute certain actions...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 579 | 텍스트 | `clineMessages: createPlanModeMessages(),` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 587 | 텍스트 | `story: "Shows Cline in Plan mode, where it focuses on creating detailed plans and discussing appr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 619 | 텍스트 | `decorators: [createStoryDecorator({ clineMessages: createBrowserMessages() })],` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 623 | 텍스트 | `story: "Shows Cline performing browser automation tasks, including launching browsers, clicking e...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 637 | 텍스트 | `decorators: [createStoryDecorator({ clineMessages: createToolApprovalMessages() })],` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 650 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 676 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 698 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 748 | 텍스트 | `"Shows followup question state where Cline asks for next steps.",` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 765 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 777 | 텍스트 | `"Shows plan mode response where Cline presents a detailed plan for user approval.",` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 789 | 텍스트 | `steps_to_reproduce: "1. Open Cline\n2. Start a new task\n3. Observe the error",` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 790 | 텍스트 | `what_happened: "Cline crashes unexpectedly",` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 804 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 824 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 844 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 863 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 887 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 911 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 940 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 969 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 999 | 텍스트 | `clineMessages: [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 1074 | 텍스트 | `decorators: [createStoryDecorator({ backgroundEditEnabled: true, clineMessages: createNewFormatMu...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 1087 | 텍스트 | `const [messages, setMessages] = useState<ClineMessage[]>([` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 1091 | 텍스트 | `const mockState = useMemo(() => createMockState({ backgroundEditEnabled: true, clineMessages: mes...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 1118 | 텍스트 | `setMessages((prev: ClineMessage[]) => [` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 1134 | 텍스트 | `setMessages((prev: ClineMessage[]) => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 1151 | 텍스트 | `setMessages((prev: ClineMessage[]) => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 1214 | 텍스트 | `decorators: [createStoryDecorator({ backgroundEditEnabled: true, clineMessages: createReplaceDiff...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 1227 | 텍스트 | `const [messages, setMessages] = useState<ClineMessage[]>([` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 1231 | 텍스트 | `const mockState = useMemo(() => createMockState({ backgroundEditEnabled: true, clineMessages: mes...` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 1263 | 텍스트 | `setMessages((prev: ClineMessage[]) => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/App.stories.tsx | 1349 | 텍스트 | `decorators: [createStoryDecorator({ clineMessages: createMixedFormatMessages() })],` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoVariable.tsx | 6 | 텍스트 | `* ClineLogoVariable component renders the Cline logo with automatic theme adaptation` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoVariable.tsx | 15 | 텍스트 | `* @returns {JSX.Element} SVG Cline logo that adapts to VS Code themes and environment` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoVariable.tsx | 17 | 텍스트 | `const ClineLogoVariable = (props: SVGProps<SVGSVGElement> & { environment?: Environment }) => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoVariable.tsx | 32 | 텍스트 | `export default ClineLogoVariable` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoBlack.tsx | 3 | 텍스트 | `const ClineLogoBlack = (props: SVGProps<SVGSVGElement>) => (` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoBlack.tsx | 11 | 텍스트 | `export default ClineLogoBlack` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineCompactIcon.tsx | 1 | 텍스트 | `export const ClineCompactIcon = () => (` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoSanta.tsx | 6 | 텍스트 | `* ClineLogoSanta component renders the Cline logo with a festive Santa hat` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoSanta.tsx | 10 | 텍스트 | `* the same theme and environment color system as ClineLogoVariable.` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoSanta.tsx | 13 | 텍스트 | `* @returns {JSX.Element} SVG Cline logo with Santa hat that adapts to VS Code themes and environment` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoSanta.tsx | 15 | 텍스트 | `const ClineLogoSanta = (props: SVGProps<SVGSVGElement> & { environment?: Environment }) => {` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoSanta.tsx | 23 | 텍스트 | `{/* Original Cline robot logo */}` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoSanta.tsx | 46 | 텍스트 | `export default ClineLogoSanta` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoWhite.tsx | 3 | 텍스트 | `const ClineLogoWhite = (props: SVGProps<SVGSVGElement>) => (` | Gaea-AI-Pro | Medium |
| webview-ui/src/assets/ClineLogoWhite.tsx | 11 | 텍스트 | `export default ClineLogoWhite` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 7 | 텍스트 | `static override serviceName: string = "cline.AccountService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 8 | 텍스트 | `static async accountLoginClicked(request: proto.cline.EmptyRequest): Promise<proto.cline.String> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 9 | 텍스트 | `return this.makeUnaryRequest("accountLoginClicked", request, proto.cline.EmptyRequest.toJSON, pro...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 11 | 텍스트 | `static async accountLogoutClicked(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 12 | 텍스트 | `return this.makeUnaryRequest("accountLogoutClicked", request, proto.cline.EmptyRequest.toJSON, pr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 14 | 텍스트 | `static subscribeToAuthStatusUpdate(request: proto.cline.EmptyRequest, callbacks: Callbacks<proto....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 15 | 텍스트 | `return this.makeStreamingRequest("subscribeToAuthStatusUpdate", request, proto.cline.EmptyRequest...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 17 | 텍스트 | `static async authStateChanged(request: proto.cline.AuthStateChangedRequest): Promise<proto.cline....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 18 | 텍스트 | `return this.makeUnaryRequest("authStateChanged", request, proto.cline.AuthStateChangedRequest.toJ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 20 | 텍스트 | `static async getUserCredits(request: proto.cline.EmptyRequest): Promise<proto.cline.UserCreditsDa...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 21 | 텍스트 | `return this.makeUnaryRequest("getUserCredits", request, proto.cline.EmptyRequest.toJSON, proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 23 | 텍스트 | `static async getOrganizationCredits(request: proto.cline.GetOrganizationCreditsRequest): Promise<...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 24 | 텍스트 | `return this.makeUnaryRequest("getOrganizationCredits", request, proto.cline.GetOrganizationCredit...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 26 | 텍스트 | `static async getUserOrganizations(request: proto.cline.EmptyRequest): Promise<proto.cline.UserOrg...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 27 | 텍스트 | `return this.makeUnaryRequest("getUserOrganizations", request, proto.cline.EmptyRequest.toJSON, pr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 29 | 텍스트 | `static async setUserOrganization(request: proto.cline.UserOrganizationUpdateRequest): Promise<pro...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 30 | 텍스트 | `return this.makeUnaryRequest("setUserOrganization", request, proto.cline.UserOrganizationUpdateRe...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 32 | 텍스트 | `static async openrouterAuthClicked(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 33 | 텍스트 | `return this.makeUnaryRequest("openrouterAuthClicked", request, proto.cline.EmptyRequest.toJSON, p...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 35 | 텍스트 | `static async requestyAuthClicked(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 36 | 텍스트 | `return this.makeUnaryRequest("requestyAuthClicked", request, proto.cline.StringRequest.toJSON, pr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 38 | 텍스트 | `static async hicapAuthClicked(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 39 | 텍스트 | `return this.makeUnaryRequest("hicapAuthClicked", request, proto.cline.EmptyRequest.toJSON, proto....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 41 | 텍스트 | `static async getRedirectUrl(request: proto.cline.EmptyRequest): Promise<proto.cline.String> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 42 | 텍스트 | `return this.makeUnaryRequest("getRedirectUrl", request, proto.cline.EmptyRequest.toJSON, proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 44 | 텍스트 | `static async openAiCodexSignIn(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 45 | 텍스트 | `return this.makeUnaryRequest("openAiCodexSignIn", request, proto.cline.EmptyRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 47 | 텍스트 | `static async openAiCodexSignOut(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 48 | 텍스트 | `return this.makeUnaryRequest("openAiCodexSignOut", request, proto.cline.EmptyRequest.toJSON, prot...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 52 | 텍스트 | `static override serviceName: string = "cline.BrowserService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 53 | 텍스트 | `static async getBrowserConnectionInfo(request: proto.cline.EmptyRequest): Promise<proto.cline.Bro...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 54 | 텍스트 | `return this.makeUnaryRequest("getBrowserConnectionInfo", request, proto.cline.EmptyRequest.toJSON...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 56 | 텍스트 | `static async testBrowserConnection(request: proto.cline.StringRequest): Promise<proto.cline.Brows...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 57 | 텍스트 | `return this.makeUnaryRequest("testBrowserConnection", request, proto.cline.StringRequest.toJSON, ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 59 | 텍스트 | `static async discoverBrowser(request: proto.cline.EmptyRequest): Promise<proto.cline.BrowserConne...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 60 | 텍스트 | `return this.makeUnaryRequest("discoverBrowser", request, proto.cline.EmptyRequest.toJSON, proto.c...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 62 | 텍스트 | `static async getDetectedChromePath(request: proto.cline.EmptyRequest): Promise<proto.cline.Chrome...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 63 | 텍스트 | `return this.makeUnaryRequest("getDetectedChromePath", request, proto.cline.EmptyRequest.toJSON, p...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 65 | 텍스트 | `static async relaunchChromeDebugMode(request: proto.cline.EmptyRequest): Promise<proto.cline.Stri...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 66 | 텍스트 | `return this.makeUnaryRequest("relaunchChromeDebugMode", request, proto.cline.EmptyRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 70 | 텍스트 | `static override serviceName: string = "cline.CheckpointsService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 71 | 텍스트 | `static async checkpointDiff(request: proto.cline.Int64Request): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 72 | 텍스트 | `return this.makeUnaryRequest("checkpointDiff", request, proto.cline.Int64Request.toJSON, proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 74 | 텍스트 | `static async checkpointRestore(request: proto.cline.CheckpointRestoreRequest): Promise<proto.clin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 75 | 텍스트 | `return this.makeUnaryRequest("checkpointRestore", request, proto.cline.CheckpointRestoreRequest.t...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 77 | 텍스트 | `static subscribeToCheckpoints(request: proto.cline.CheckpointSubscriptionRequest, callbacks: Call...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 78 | 텍스트 | `return this.makeStreamingRequest("subscribeToCheckpoints", request, proto.cline.CheckpointSubscri...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 80 | 텍스트 | `static async getCwdHash(request: proto.cline.StringArrayRequest): Promise<proto.cline.PathHashMap> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 81 | 텍스트 | `return this.makeUnaryRequest("getCwdHash", request, proto.cline.StringArrayRequest.toJSON, proto....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 85 | 텍스트 | `static override serviceName: string = "cline.CommandsService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 86 | 텍스트 | `static async addToCline(request: proto.cline.CommandContext): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 87 | 텍스트 | `return this.makeUnaryRequest("addToCline", request, proto.cline.CommandContext.toJSON, proto.clin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 89 | 텍스트 | `static async fixWithCline(request: proto.cline.CommandContext): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 90 | 텍스트 | `return this.makeUnaryRequest("fixWithCline", request, proto.cline.CommandContext.toJSON, proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 92 | 텍스트 | `static async explainWithCline(request: proto.cline.CommandContext): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 93 | 텍스트 | `return this.makeUnaryRequest("explainWithCline", request, proto.cline.CommandContext.toJSON, prot...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 95 | 텍스트 | `static async improveWithCline(request: proto.cline.CommandContext): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 96 | 텍스트 | `return this.makeUnaryRequest("improveWithCline", request, proto.cline.CommandContext.toJSON, prot...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 100 | 텍스트 | `static override serviceName: string = "cline.FileService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 101 | 텍스트 | `static async copyToClipboard(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 102 | 텍스트 | `return this.makeUnaryRequest("copyToClipboard", request, proto.cline.StringRequest.toJSON, proto....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 104 | 텍스트 | `static async openFile(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 105 | 텍스트 | `return this.makeUnaryRequest("openFile", request, proto.cline.StringRequest.toJSON, proto.cline.E...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 107 | 텍스트 | `static async openImage(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 108 | 텍스트 | `return this.makeUnaryRequest("openImage", request, proto.cline.StringRequest.toJSON, proto.cline....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 110 | 텍스트 | `static async openMention(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 111 | 텍스트 | `return this.makeUnaryRequest("openMention", request, proto.cline.StringRequest.toJSON, proto.clin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 113 | 텍스트 | `static async deleteRuleFile(request: proto.cline.RuleFileRequest): Promise<proto.cline.RuleFile> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 114 | 텍스트 | `return this.makeUnaryRequest("deleteRuleFile", request, proto.cline.RuleFileRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 116 | 텍스트 | `static async createRuleFile(request: proto.cline.RuleFileRequest): Promise<proto.cline.RuleFile> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 117 | 텍스트 | `return this.makeUnaryRequest("createRuleFile", request, proto.cline.RuleFileRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 119 | 텍스트 | `static async searchCommits(request: proto.cline.StringRequest): Promise<proto.cline.GitCommits> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 120 | 텍스트 | `return this.makeUnaryRequest("searchCommits", request, proto.cline.StringRequest.toJSON, proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 122 | 텍스트 | `static async selectFiles(request: proto.cline.BooleanRequest): Promise<proto.cline.StringArrays> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 123 | 텍스트 | `return this.makeUnaryRequest("selectFiles", request, proto.cline.BooleanRequest.toJSON, proto.cli...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 125 | 텍스트 | `static async getRelativePaths(request: proto.cline.RelativePathsRequest): Promise<proto.cline.Rel...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 126 | 텍스트 | `return this.makeUnaryRequest("getRelativePaths", request, proto.cline.RelativePathsRequest.toJSON...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 128 | 텍스트 | `static async searchFiles(request: proto.cline.FileSearchRequest): Promise<proto.cline.FileSearchR...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 129 | 텍스트 | `return this.makeUnaryRequest("searchFiles", request, proto.cline.FileSearchRequest.toJSON, proto....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 131 | 텍스트 | `static async toggleClineRule(request: proto.cline.ToggleClineRuleRequest): Promise<proto.cline.To...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 132 | 텍스트 | `return this.makeUnaryRequest("toggleClineRule", request, proto.cline.ToggleClineRuleRequest.toJSO...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 134 | 텍스트 | `static async toggleCursorRule(request: proto.cline.ToggleCursorRuleRequest): Promise<proto.cline....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 135 | 텍스트 | `return this.makeUnaryRequest("toggleCursorRule", request, proto.cline.ToggleCursorRuleRequest.toJ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 137 | 텍스트 | `static async toggleWindsurfRule(request: proto.cline.ToggleWindsurfRuleRequest): Promise<proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 138 | 텍스트 | `return this.makeUnaryRequest("toggleWindsurfRule", request, proto.cline.ToggleWindsurfRuleRequest...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 140 | 텍스트 | `static async toggleAgentsRule(request: proto.cline.ToggleAgentsRuleRequest): Promise<proto.cline....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 141 | 텍스트 | `return this.makeUnaryRequest("toggleAgentsRule", request, proto.cline.ToggleAgentsRuleRequest.toJ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 143 | 텍스트 | `static async refreshRules(request: proto.cline.EmptyRequest): Promise<proto.cline.RefreshedRules> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 144 | 텍스트 | `return this.makeUnaryRequest("refreshRules", request, proto.cline.EmptyRequest.toJSON, proto.clin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 146 | 텍스트 | `static async openDiskConversationHistory(request: proto.cline.StringRequest): Promise<proto.cline...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 147 | 텍스트 | `return this.makeUnaryRequest("openDiskConversationHistory", request, proto.cline.StringRequest.to...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 149 | 텍스트 | `static async toggleWorkflow(request: proto.cline.ToggleWorkflowRequest): Promise<proto.cline.Clin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 150 | 텍스트 | `return this.makeUnaryRequest("toggleWorkflow", request, proto.cline.ToggleWorkflowRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 152 | 텍스트 | `static async ifFileExistsRelativePath(request: proto.cline.StringRequest): Promise<proto.cline.Bo...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 153 | 텍스트 | `return this.makeUnaryRequest("ifFileExistsRelativePath", request, proto.cline.StringRequest.toJSO...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 155 | 텍스트 | `static async openFileRelativePath(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 156 | 텍스트 | `return this.makeUnaryRequest("openFileRelativePath", request, proto.cline.StringRequest.toJSON, p...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 158 | 텍스트 | `static async openFocusChainFile(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 159 | 텍스트 | `return this.makeUnaryRequest("openFocusChainFile", request, proto.cline.StringRequest.toJSON, pro...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 161 | 텍스트 | `static async refreshHooks(request: proto.cline.EmptyRequest): Promise<proto.cline.HooksToggles> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 162 | 텍스트 | `return this.makeUnaryRequest("refreshHooks", request, proto.cline.EmptyRequest.toJSON, proto.clin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 164 | 텍스트 | `static async toggleHook(request: proto.cline.ToggleHookRequest): Promise<proto.cline.ToggleHookRe...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 165 | 텍스트 | `return this.makeUnaryRequest("toggleHook", request, proto.cline.ToggleHookRequest.toJSON, proto.c...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 167 | 텍스트 | `static async createHook(request: proto.cline.CreateHookRequest): Promise<proto.cline.CreateHookRe...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 168 | 텍스트 | `return this.makeUnaryRequest("createHook", request, proto.cline.CreateHookRequest.toJSON, proto.c...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 170 | 텍스트 | `static async deleteHook(request: proto.cline.DeleteHookRequest): Promise<proto.cline.DeleteHookRe...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 171 | 텍스트 | `return this.makeUnaryRequest("deleteHook", request, proto.cline.DeleteHookRequest.toJSON, proto.c...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 173 | 텍스트 | `static async refreshSkills(request: proto.cline.EmptyRequest): Promise<proto.cline.RefreshedSkill...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 174 | 텍스트 | `return this.makeUnaryRequest("refreshSkills", request, proto.cline.EmptyRequest.toJSON, proto.cli...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 176 | 텍스트 | `static async toggleSkill(request: proto.cline.ToggleSkillRequest): Promise<proto.cline.SkillsTogg...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 177 | 텍스트 | `return this.makeUnaryRequest("toggleSkill", request, proto.cline.ToggleSkillRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 179 | 텍스트 | `static async createSkillFile(request: proto.cline.CreateSkillRequest): Promise<proto.cline.Skills...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 180 | 텍스트 | `return this.makeUnaryRequest("createSkillFile", request, proto.cline.CreateSkillRequest.toJSON, p...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 182 | 텍스트 | `static async deleteSkillFile(request: proto.cline.DeleteSkillRequest): Promise<proto.cline.Skills...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 183 | 텍스트 | `return this.makeUnaryRequest("deleteSkillFile", request, proto.cline.DeleteSkillRequest.toJSON, p...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 187 | 텍스트 | `static override serviceName: string = "cline.McpService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 188 | 텍스트 | `static async toggleMcpServer(request: proto.cline.ToggleMcpServerRequest): Promise<proto.cline.Mc...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 189 | 텍스트 | `return this.makeUnaryRequest("toggleMcpServer", request, proto.cline.ToggleMcpServerRequest.toJSO...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 191 | 텍스트 | `static async updateMcpTimeout(request: proto.cline.UpdateMcpTimeoutRequest): Promise<proto.cline....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 192 | 텍스트 | `return this.makeUnaryRequest("updateMcpTimeout", request, proto.cline.UpdateMcpTimeoutRequest.toJ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 194 | 텍스트 | `static async addRemoteMcpServer(request: proto.cline.AddRemoteMcpServerRequest): Promise<proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 195 | 텍스트 | `return this.makeUnaryRequest("addRemoteMcpServer", request, proto.cline.AddRemoteMcpServerRequest...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 197 | 텍스트 | `static async downloadMcp(request: proto.cline.StringRequest): Promise<proto.cline.McpDownloadResp...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 198 | 텍스트 | `return this.makeUnaryRequest("downloadMcp", request, proto.cline.StringRequest.toJSON, proto.clin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 200 | 텍스트 | `static async restartMcpServer(request: proto.cline.StringRequest): Promise<proto.cline.McpServers> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 201 | 텍스트 | `return this.makeUnaryRequest("restartMcpServer", request, proto.cline.StringRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 203 | 텍스트 | `static async deleteMcpServer(request: proto.cline.StringRequest): Promise<proto.cline.McpServers> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 204 | 텍스트 | `return this.makeUnaryRequest("deleteMcpServer", request, proto.cline.StringRequest.toJSON, proto....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 206 | 텍스트 | `static async toggleToolAutoApprove(request: proto.cline.ToggleToolAutoApproveRequest): Promise<pr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 207 | 텍스트 | `return this.makeUnaryRequest("toggleToolAutoApprove", request, proto.cline.ToggleToolAutoApproveR...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 209 | 텍스트 | `static async refreshMcpMarketplace(request: proto.cline.EmptyRequest): Promise<proto.cline.McpMar...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 210 | 텍스트 | `return this.makeUnaryRequest("refreshMcpMarketplace", request, proto.cline.EmptyRequest.toJSON, p...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 212 | 텍스트 | `static async openMcpSettings(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 213 | 텍스트 | `return this.makeUnaryRequest("openMcpSettings", request, proto.cline.EmptyRequest.toJSON, proto.c...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 215 | 텍스트 | `static async authenticateMcpServer(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 216 | 텍스트 | `return this.makeUnaryRequest("authenticateMcpServer", request, proto.cline.StringRequest.toJSON, ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 218 | 텍스트 | `static subscribeToMcpMarketplaceCatalog(request: proto.cline.EmptyRequest, callbacks: Callbacks<p...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 219 | 텍스트 | `return this.makeStreamingRequest("subscribeToMcpMarketplaceCatalog", request, proto.cline.EmptyRe...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 221 | 텍스트 | `static async getLatestMcpServers(request: proto.cline.Empty): Promise<proto.cline.McpServers> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 222 | 텍스트 | `return this.makeUnaryRequest("getLatestMcpServers", request, proto.cline.Empty.toJSON, proto.clin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 224 | 텍스트 | `static subscribeToMcpServers(request: proto.cline.EmptyRequest, callbacks: Callbacks<proto.cline....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 225 | 텍스트 | `return this.makeStreamingRequest("subscribeToMcpServers", request, proto.cline.EmptyRequest.toJSO...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 229 | 텍스트 | `static override serviceName: string = "cline.ModelsService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 230 | 텍스트 | `static async getOllamaModels(request: proto.cline.StringRequest): Promise<proto.cline.StringArray> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 231 | 텍스트 | `return this.makeUnaryRequest("getOllamaModels", request, proto.cline.StringRequest.toJSON, proto....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 233 | 텍스트 | `static async getLmStudioModels(request: proto.cline.StringRequest): Promise<proto.cline.StringArr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 234 | 텍스트 | `return this.makeUnaryRequest("getLmStudioModels", request, proto.cline.StringRequest.toJSON, prot...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 236 | 텍스트 | `static async getVsCodeLmModels(request: proto.cline.EmptyRequest): Promise<proto.cline.VsCodeLmMo...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 237 | 텍스트 | `return this.makeUnaryRequest("getVsCodeLmModels", request, proto.cline.EmptyRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 239 | 텍스트 | `static async refreshOpenRouterModelsRpc(request: proto.cline.EmptyRequest): Promise<proto.cline.O...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 240 | 텍스트 | `return this.makeUnaryRequest("refreshOpenRouterModelsRpc", request, proto.cline.EmptyRequest.toJS...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 242 | 텍스트 | `static async refreshClineRecommendedModelsRpc(request: proto.cline.EmptyRequest): Promise<proto.c...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 243 | 텍스트 | `return this.makeUnaryRequest("refreshClineRecommendedModelsRpc", request, proto.cline.EmptyReques...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 245 | 텍스트 | `static async refreshClineModelsRpc(request: proto.cline.EmptyRequest): Promise<proto.cline.OpenRo...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 246 | 텍스트 | `return this.makeUnaryRequest("refreshClineModelsRpc", request, proto.cline.EmptyRequest.toJSON, p...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 248 | 텍스트 | `static async refreshHuggingFaceModels(request: proto.cline.EmptyRequest): Promise<proto.cline.Ope...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 249 | 텍스트 | `return this.makeUnaryRequest("refreshHuggingFaceModels", request, proto.cline.EmptyRequest.toJSON...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 251 | 텍스트 | `static async refreshOpenAiModels(request: proto.cline.OpenAiModelsRequest): Promise<proto.cline.S...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 252 | 텍스트 | `return this.makeUnaryRequest("refreshOpenAiModels", request, proto.cline.OpenAiModelsRequest.toJS...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 254 | 텍스트 | `static async refreshRequestyModels(request: proto.cline.EmptyRequest): Promise<proto.cline.OpenRo...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 255 | 텍스트 | `return this.makeUnaryRequest("refreshRequestyModels", request, proto.cline.EmptyRequest.toJSON, p...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 257 | 텍스트 | `static async refreshHicapModels(request: proto.cline.EmptyRequest): Promise<proto.cline.OpenRoute...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 258 | 텍스트 | `return this.makeUnaryRequest("refreshHicapModels", request, proto.cline.EmptyRequest.toJSON, prot...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 260 | 텍스트 | `static async refreshLiteLlmModelsRpc(request: proto.cline.EmptyRequest): Promise<proto.cline.Open...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 261 | 텍스트 | `return this.makeUnaryRequest("refreshLiteLlmModelsRpc", request, proto.cline.EmptyRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 263 | 텍스트 | `static subscribeToOpenRouterModels(request: proto.cline.EmptyRequest, callbacks: Callbacks<proto....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 264 | 텍스트 | `return this.makeStreamingRequest("subscribeToOpenRouterModels", request, proto.cline.EmptyRequest...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 266 | 텍스트 | `static subscribeToLiteLlmModels(request: proto.cline.EmptyRequest, callbacks: Callbacks<proto.cli...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 267 | 텍스트 | `return this.makeStreamingRequest("subscribeToLiteLlmModels", request, proto.cline.EmptyRequest.to...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 269 | 텍스트 | `static async updateApiConfigurationProto(request: proto.cline.UpdateApiConfigurationRequest): Pro...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 270 | 텍스트 | `return this.makeUnaryRequest("updateApiConfigurationProto", request, proto.cline.UpdateApiConfigu...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 272 | 텍스트 | `static async updateApiConfiguration(request: proto.cline.UpdateApiConfigurationRequestNew): Promi...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 273 | 텍스트 | `return this.makeUnaryRequest("updateApiConfiguration", request, proto.cline.UpdateApiConfiguratio...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 275 | 텍스트 | `static async updateApiConfigurationPartial(request: proto.cline.UpdateApiConfigurationPartialRequ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 276 | 텍스트 | `return this.makeUnaryRequest("updateApiConfigurationPartial", request, proto.cline.UpdateApiConfi...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 278 | 텍스트 | `static async refreshGroqModelsRpc(request: proto.cline.EmptyRequest): Promise<proto.cline.OpenRou...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 279 | 텍스트 | `return this.makeUnaryRequest("refreshGroqModelsRpc", request, proto.cline.EmptyRequest.toJSON, pr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 281 | 텍스트 | `static async refreshBasetenModelsRpc(request: proto.cline.EmptyRequest): Promise<proto.cline.Open...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 282 | 텍스트 | `return this.makeUnaryRequest("refreshBasetenModelsRpc", request, proto.cline.EmptyRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 284 | 텍스트 | `static async getSapAiCoreModels(request: proto.cline.SapAiCoreModelsRequest): Promise<proto.cline...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 285 | 텍스트 | `return this.makeUnaryRequest("getSapAiCoreModels", request, proto.cline.SapAiCoreModelsRequest.to...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 287 | 텍스트 | `static async refreshOcaModels(request: proto.cline.StringRequest): Promise<proto.cline.OcaCompati...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 288 | 텍스트 | `return this.makeUnaryRequest("refreshOcaModels", request, proto.cline.StringRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 290 | 텍스트 | `static async getAihubmixModels(request: proto.cline.EmptyRequest): Promise<proto.cline.OpenRouter...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 291 | 텍스트 | `return this.makeUnaryRequest("getAihubmixModels", request, proto.cline.EmptyRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 293 | 텍스트 | `static async refreshVercelAiGatewayModelsRpc(request: proto.cline.EmptyRequest): Promise<proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 294 | 텍스트 | `return this.makeUnaryRequest("refreshVercelAiGatewayModelsRpc", request, proto.cline.EmptyRequest...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 298 | 텍스트 | `static override serviceName: string = "cline.OcaAccountService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 299 | 텍스트 | `static async ocaAccountLoginClicked(request: proto.cline.EmptyRequest): Promise<proto.cline.Strin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 300 | 텍스트 | `return this.makeUnaryRequest("ocaAccountLoginClicked", request, proto.cline.EmptyRequest.toJSON, ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 302 | 텍스트 | `static async ocaAccountLogoutClicked(request: proto.cline.EmptyRequest): Promise<proto.cline.Empt...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 303 | 텍스트 | `return this.makeUnaryRequest("ocaAccountLogoutClicked", request, proto.cline.EmptyRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 305 | 텍스트 | `static ocaSubscribeToAuthStatusUpdate(request: proto.cline.EmptyRequest, callbacks: Callbacks<pro...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 306 | 텍스트 | `return this.makeStreamingRequest("ocaSubscribeToAuthStatusUpdate", request, proto.cline.EmptyRequ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 310 | 텍스트 | `static override serviceName: string = "cline.SlashService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 311 | 텍스트 | `static async reportBug(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 312 | 텍스트 | `return this.makeUnaryRequest("reportBug", request, proto.cline.StringRequest.toJSON, proto.cline....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 314 | 텍스트 | `static async condense(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 315 | 텍스트 | `return this.makeUnaryRequest("condense", request, proto.cline.StringRequest.toJSON, proto.cline.E...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 317 | 텍스트 | `static async getAvailableSlashCommands(request: proto.cline.EmptyRequest): Promise<proto.cline.Sl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 318 | 텍스트 | `return this.makeUnaryRequest("getAvailableSlashCommands", request, proto.cline.EmptyRequest.toJSO...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 322 | 텍스트 | `static override serviceName: string = "cline.StateService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 323 | 텍스트 | `static async getLatestState(request: proto.cline.EmptyRequest): Promise<proto.cline.State> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 324 | 텍스트 | `return this.makeUnaryRequest("getLatestState", request, proto.cline.EmptyRequest.toJSON, proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 326 | 텍스트 | `static async updateTerminalConnectionTimeout(request: proto.cline.UpdateTerminalConnectionTimeout...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 327 | 텍스트 | `return this.makeUnaryRequest("updateTerminalConnectionTimeout", request, proto.cline.UpdateTermin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 329 | 텍스트 | `static async updateTerminalReuseEnabled(request: proto.cline.BooleanRequest): Promise<proto.cline...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 330 | 텍스트 | `return this.makeUnaryRequest("updateTerminalReuseEnabled", request, proto.cline.BooleanRequest.to...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 332 | 텍스트 | `static async getAvailableTerminalProfiles(request: proto.cline.EmptyRequest): Promise<proto.cline...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 333 | 텍스트 | `return this.makeUnaryRequest("getAvailableTerminalProfiles", request, proto.cline.EmptyRequest.to...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 335 | 텍스트 | `static subscribeToState(request: proto.cline.EmptyRequest, callbacks: Callbacks<proto.cline.State...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 336 | 텍스트 | `return this.makeStreamingRequest("subscribeToState", request, proto.cline.EmptyRequest.toJSON, pr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 338 | 텍스트 | `static async toggleFavoriteModel(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 339 | 텍스트 | `return this.makeUnaryRequest("toggleFavoriteModel", request, proto.cline.StringRequest.toJSON, pr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 341 | 텍스트 | `static async resetState(request: proto.cline.ResetStateRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 342 | 텍스트 | `return this.makeUnaryRequest("resetState", request, proto.cline.ResetStateRequest.toJSON, proto.c...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 344 | 텍스트 | `static async togglePlanActModeProto(request: proto.cline.TogglePlanActModeRequest): Promise<proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 345 | 텍스트 | `return this.makeUnaryRequest("togglePlanActModeProto", request, proto.cline.TogglePlanActModeRequ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 347 | 텍스트 | `static async updateAutoApprovalSettings(request: proto.cline.AutoApprovalSettingsRequest): Promis...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 348 | 텍스트 | `return this.makeUnaryRequest("updateAutoApprovalSettings", request, proto.cline.AutoApprovalSetti...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 350 | 텍스트 | `static async updateSettings(request: proto.cline.UpdateSettingsRequest): Promise<proto.cline.Empt...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 351 | 텍스트 | `return this.makeUnaryRequest("updateSettings", request, proto.cline.UpdateSettingsRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 353 | 텍스트 | `static async updateSettingsCli(request: proto.cline.UpdateSettingsRequestCli): Promise<proto.clin...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 354 | 텍스트 | `return this.makeUnaryRequest("updateSettingsCli", request, proto.cline.UpdateSettingsRequestCli.t...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 356 | 텍스트 | `static async updateTaskSettings(request: proto.cline.UpdateTaskSettingsRequest): Promise<proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 357 | 텍스트 | `return this.makeUnaryRequest("updateTaskSettings", request, proto.cline.UpdateTaskSettingsRequest...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 359 | 텍스트 | `static async updateTelemetrySetting(request: proto.cline.TelemetrySettingRequest): Promise<proto....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 360 | 텍스트 | `return this.makeUnaryRequest("updateTelemetrySetting", request, proto.cline.TelemetrySettingReque...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 362 | 텍스트 | `static async captureOnboardingProgress(request: proto.cline.OnboardingProgressRequest): Promise<p...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 363 | 텍스트 | `return this.makeUnaryRequest("captureOnboardingProgress", request, proto.cline.OnboardingProgress...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 365 | 텍스트 | `static async setWelcomeViewCompleted(request: proto.cline.BooleanRequest): Promise<proto.cline.Em...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 366 | 텍스트 | `return this.makeUnaryRequest("setWelcomeViewCompleted", request, proto.cline.BooleanRequest.toJSO...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 368 | 텍스트 | `static async updateInfoBannerVersion(request: proto.cline.Int64Request): Promise<proto.cline.Empt...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 369 | 텍스트 | `return this.makeUnaryRequest("updateInfoBannerVersion", request, proto.cline.Int64Request.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 371 | 텍스트 | `static async updateModelBannerVersion(request: proto.cline.Int64Request): Promise<proto.cline.Emp...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 372 | 텍스트 | `return this.makeUnaryRequest("updateModelBannerVersion", request, proto.cline.Int64Request.toJSON...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 374 | 텍스트 | `static async updateCliBannerVersion(request: proto.cline.Int64Request): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 375 | 텍스트 | `return this.makeUnaryRequest("updateCliBannerVersion", request, proto.cline.Int64Request.toJSON, ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 377 | 텍스트 | `static async dismissBanner(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 378 | 텍스트 | `return this.makeUnaryRequest("dismissBanner", request, proto.cline.StringRequest.toJSON, proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 380 | 텍스트 | `static async trackBannerEvent(request: proto.cline.TrackBannerEventRequest): Promise<proto.cline....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 381 | 텍스트 | `return this.makeUnaryRequest("trackBannerEvent", request, proto.cline.TrackBannerEventRequest.toJ...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 383 | 텍스트 | `static async installClineCli(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 384 | 텍스트 | `return this.makeUnaryRequest("installClineCli", request, proto.cline.EmptyRequest.toJSON, proto.c...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 386 | 텍스트 | `static async checkCliInstallation(request: proto.cline.EmptyRequest): Promise<proto.cline.Boolean> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 387 | 텍스트 | `return this.makeUnaryRequest("checkCliInstallation", request, proto.cline.EmptyRequest.toJSON, pr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 389 | 텍스트 | `static async getProcessInfo(request: proto.cline.EmptyRequest): Promise<proto.cline.ProcessInfo> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 390 | 텍스트 | `return this.makeUnaryRequest("getProcessInfo", request, proto.cline.EmptyRequest.toJSON, proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 392 | 텍스트 | `static async flushPendingState(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 393 | 텍스트 | `return this.makeUnaryRequest("flushPendingState", request, proto.cline.EmptyRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 395 | 텍스트 | `static async refreshRemoteConfig(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 396 | 텍스트 | `return this.makeUnaryRequest("refreshRemoteConfig", request, proto.cline.EmptyRequest.toJSON, pro...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 398 | 텍스트 | `static async testOtelConnection(request: proto.cline.EmptyRequest): Promise<proto.cline.TestConne...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 399 | 텍스트 | `return this.makeUnaryRequest("testOtelConnection", request, proto.cline.EmptyRequest.toJSON, prot...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 401 | 텍스트 | `static async testPromptUploading(request: proto.cline.EmptyRequest): Promise<proto.cline.TestConn...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 402 | 텍스트 | `return this.makeUnaryRequest("testPromptUploading", request, proto.cline.EmptyRequest.toJSON, pro...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 406 | 텍스트 | `static override serviceName: string = "cline.TaskService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 407 | 텍스트 | `static async cancelTask(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 408 | 텍스트 | `return this.makeUnaryRequest("cancelTask", request, proto.cline.EmptyRequest.toJSON, proto.cline....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 410 | 텍스트 | `static async cancelBackgroundCommand(request: proto.cline.EmptyRequest): Promise<proto.cline.Empt...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 411 | 텍스트 | `return this.makeUnaryRequest("cancelBackgroundCommand", request, proto.cline.EmptyRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 413 | 텍스트 | `static async clearTask(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 414 | 텍스트 | `return this.makeUnaryRequest("clearTask", request, proto.cline.EmptyRequest.toJSON, proto.cline.E...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 416 | 텍스트 | `static async getTotalTasksSize(request: proto.cline.EmptyRequest): Promise<proto.cline.Int64> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 417 | 텍스트 | `return this.makeUnaryRequest("getTotalTasksSize", request, proto.cline.EmptyRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 419 | 텍스트 | `static async deleteTasksWithIds(request: proto.cline.StringArrayRequest): Promise<proto.cline.Emp...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 420 | 텍스트 | `return this.makeUnaryRequest("deleteTasksWithIds", request, proto.cline.StringArrayRequest.toJSON...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 422 | 텍스트 | `static async newTask(request: proto.cline.NewTaskRequest): Promise<proto.cline.String> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 423 | 텍스트 | `return this.makeUnaryRequest("newTask", request, proto.cline.NewTaskRequest.toJSON, proto.cline.S...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 425 | 텍스트 | `static async showTaskWithId(request: proto.cline.StringRequest): Promise<proto.cline.TaskResponse> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 426 | 텍스트 | `return this.makeUnaryRequest("showTaskWithId", request, proto.cline.StringRequest.toJSON, proto.c...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 428 | 텍스트 | `static async exportTaskWithId(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 429 | 텍스트 | `return this.makeUnaryRequest("exportTaskWithId", request, proto.cline.StringRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 431 | 텍스트 | `static async toggleTaskFavorite(request: proto.cline.TaskFavoriteRequest): Promise<proto.cline.Em...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 432 | 텍스트 | `return this.makeUnaryRequest("toggleTaskFavorite", request, proto.cline.TaskFavoriteRequest.toJSO...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 434 | 텍스트 | `static async getTaskHistory(request: proto.cline.GetTaskHistoryRequest): Promise<proto.cline.Task...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 435 | 텍스트 | `return this.makeUnaryRequest("getTaskHistory", request, proto.cline.GetTaskHistoryRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 437 | 텍스트 | `static async askResponse(request: proto.cline.AskResponseRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 438 | 텍스트 | `return this.makeUnaryRequest("askResponse", request, proto.cline.AskResponseRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 440 | 텍스트 | `static async taskFeedback(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 441 | 텍스트 | `return this.makeUnaryRequest("taskFeedback", request, proto.cline.StringRequest.toJSON, proto.cli...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 443 | 텍스트 | `static async taskCompletionViewChanges(request: proto.cline.Int64Request): Promise<proto.cline.Em...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 444 | 텍스트 | `return this.makeUnaryRequest("taskCompletionViewChanges", request, proto.cline.Int64Request.toJSO...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 446 | 텍스트 | `static async executeQuickWin(request: proto.cline.ExecuteQuickWinRequest): Promise<proto.cline.Em...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 447 | 텍스트 | `return this.makeUnaryRequest("executeQuickWin", request, proto.cline.ExecuteQuickWinRequest.toJSO...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 449 | 텍스트 | `static async deleteAllTaskHistory(request: proto.cline.EmptyRequest): Promise<proto.cline.DeleteA...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 450 | 텍스트 | `return this.makeUnaryRequest("deleteAllTaskHistory", request, proto.cline.EmptyRequest.toJSON, pr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 452 | 텍스트 | `static async explainChanges(request: proto.cline.ExplainChangesRequest): Promise<proto.cline.Empt...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 453 | 텍스트 | `return this.makeUnaryRequest("explainChanges", request, proto.cline.ExplainChangesRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 457 | 텍스트 | `static override serviceName: string = "cline.UiService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 458 | 텍스트 | `static async scrollToSettings(request: proto.cline.StringRequest): Promise<proto.cline.KeyValuePa...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 459 | 텍스트 | `return this.makeUnaryRequest("scrollToSettings", request, proto.cline.StringRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 461 | 텍스트 | `static async setTerminalExecutionMode(request: proto.cline.BooleanRequest): Promise<proto.cline.K...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 462 | 텍스트 | `return this.makeUnaryRequest("setTerminalExecutionMode", request, proto.cline.BooleanRequest.toJS...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 464 | 텍스트 | `static async onDidShowAnnouncement(request: proto.cline.EmptyRequest): Promise<proto.cline.Boolea...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 465 | 텍스트 | `return this.makeUnaryRequest("onDidShowAnnouncement", request, proto.cline.EmptyRequest.toJSON, p...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 467 | 텍스트 | `static subscribeToAddToInput(request: proto.cline.EmptyRequest, callbacks: Callbacks<proto.cline....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 468 | 텍스트 | `return this.makeStreamingRequest("subscribeToAddToInput", request, proto.cline.EmptyRequest.toJSO...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 470 | 버튼 | `static subscribeToMcpButtonClicked(request: proto.cline.EmptyRequest, callbacks: Callbacks<proto....` | Gaea-AI-Pro | High |
| webview-ui/src/services/grpc-client.ts | 471 | 버튼 | `return this.makeStreamingRequest("subscribeToMcpButtonClicked", request, proto.cline.EmptyRequest...` | Gaea-AI-Pro | High |
| webview-ui/src/services/grpc-client.ts | 473 | 버튼 | `static subscribeToHistoryButtonClicked(request: proto.cline.EmptyRequest, callbacks: Callbacks<pr...` | Gaea-AI-Pro | High |
| webview-ui/src/services/grpc-client.ts | 474 | 버튼 | `return this.makeStreamingRequest("subscribeToHistoryButtonClicked", request, proto.cline.EmptyReq...` | Gaea-AI-Pro | High |
| webview-ui/src/services/grpc-client.ts | 476 | 버튼 | `static subscribeToChatButtonClicked(request: proto.cline.EmptyRequest, callbacks: Callbacks<proto...` | Gaea-AI-Pro | High |
| webview-ui/src/services/grpc-client.ts | 477 | 버튼 | `return this.makeStreamingRequest("subscribeToChatButtonClicked", request, proto.cline.EmptyReques...` | Gaea-AI-Pro | High |
| webview-ui/src/services/grpc-client.ts | 479 | 버튼 | `static subscribeToAccountButtonClicked(request: proto.cline.EmptyRequest, callbacks: Callbacks<pr...` | Gaea-AI-Pro | High |
| webview-ui/src/services/grpc-client.ts | 480 | 버튼 | `return this.makeStreamingRequest("subscribeToAccountButtonClicked", request, proto.cline.EmptyReq...` | Gaea-AI-Pro | High |
| webview-ui/src/services/grpc-client.ts | 482 | 버튼 | `static subscribeToSettingsButtonClicked(request: proto.cline.EmptyRequest, callbacks: Callbacks<p...` | Gaea-AI-Pro | High |
| webview-ui/src/services/grpc-client.ts | 483 | 버튼 | `return this.makeStreamingRequest("subscribeToSettingsButtonClicked", request, proto.cline.EmptyRe...` | Gaea-AI-Pro | High |
| webview-ui/src/services/grpc-client.ts | 485 | 버튼 | `static subscribeToWorktreesButtonClicked(request: proto.cline.EmptyRequest, callbacks: Callbacks<...` | Gaea-AI-Pro | High |
| webview-ui/src/services/grpc-client.ts | 486 | 버튼 | `return this.makeStreamingRequest("subscribeToWorktreesButtonClicked", request, proto.cline.EmptyR...` | Gaea-AI-Pro | High |
| webview-ui/src/services/grpc-client.ts | 488 | 텍스트 | `static subscribeToPartialMessage(request: proto.cline.EmptyRequest, callbacks: Callbacks<proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 489 | 텍스트 | `return this.makeStreamingRequest("subscribeToPartialMessage", request, proto.cline.EmptyRequest.t...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 491 | 텍스트 | `static async initializeWebview(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 492 | 텍스트 | `return this.makeUnaryRequest("initializeWebview", request, proto.cline.EmptyRequest.toJSON, proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 494 | 텍스트 | `static subscribeToRelinquishControl(request: proto.cline.EmptyRequest, callbacks: Callbacks<proto...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 495 | 텍스트 | `return this.makeStreamingRequest("subscribeToRelinquishControl", request, proto.cline.EmptyReques...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 497 | 텍스트 | `static subscribeToShowWebview(request: proto.cline.EmptyRequest, callbacks: Callbacks<proto.cline...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 498 | 텍스트 | `return this.makeStreamingRequest("subscribeToShowWebview", request, proto.cline.EmptyRequest.toJS...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 500 | 텍스트 | `static async getWebviewHtml(request: proto.cline.EmptyRequest): Promise<proto.cline.String> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 501 | 텍스트 | `return this.makeUnaryRequest("getWebviewHtml", request, proto.cline.EmptyRequest.toJSON, proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 503 | 텍스트 | `static async openUrl(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 504 | 텍스트 | `return this.makeUnaryRequest("openUrl", request, proto.cline.StringRequest.toJSON, proto.cline.Em...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 506 | 텍스트 | `static async openWalkthrough(request: proto.cline.EmptyRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 507 | 텍스트 | `return this.makeUnaryRequest("openWalkthrough", request, proto.cline.EmptyRequest.toJSON, proto.c...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 511 | 텍스트 | `static override serviceName: string = "cline.WebService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 512 | 텍스트 | `static async checkIsImageUrl(request: proto.cline.StringRequest): Promise<proto.cline.IsImageUrl> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 513 | 텍스트 | `return this.makeUnaryRequest("checkIsImageUrl", request, proto.cline.StringRequest.toJSON, proto....` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 515 | 텍스트 | `static async fetchOpenGraphData(request: proto.cline.StringRequest): Promise<proto.cline.OpenGrap...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 516 | 텍스트 | `return this.makeUnaryRequest("fetchOpenGraphData", request, proto.cline.StringRequest.toJSON, pro...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 518 | 텍스트 | `static async openInBrowser(request: proto.cline.StringRequest): Promise<proto.cline.Empty> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 519 | 텍스트 | `return this.makeUnaryRequest("openInBrowser", request, proto.cline.StringRequest.toJSON, proto.cl...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 523 | 텍스트 | `static override serviceName: string = "cline.WorktreeService"` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 524 | 텍스트 | `static async listWorktrees(request: proto.cline.EmptyRequest): Promise<proto.cline.WorktreeList> {` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 525 | 텍스트 | `return this.makeUnaryRequest("listWorktrees", request, proto.cline.EmptyRequest.toJSON, proto.cli...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 527 | 텍스트 | `static async createWorktree(request: proto.cline.CreateWorktreeRequest): Promise<proto.cline.Work...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 528 | 텍스트 | `return this.makeUnaryRequest("createWorktree", request, proto.cline.CreateWorktreeRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 530 | 텍스트 | `static async deleteWorktree(request: proto.cline.DeleteWorktreeRequest): Promise<proto.cline.Work...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 531 | 텍스트 | `return this.makeUnaryRequest("deleteWorktree", request, proto.cline.DeleteWorktreeRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 533 | 텍스트 | `static async switchWorktree(request: proto.cline.SwitchWorktreeRequest): Promise<proto.cline.Work...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 534 | 텍스트 | `return this.makeUnaryRequest("switchWorktree", request, proto.cline.SwitchWorktreeRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 536 | 텍스트 | `static async getAvailableBranches(request: proto.cline.EmptyRequest): Promise<proto.cline.BranchL...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 537 | 텍스트 | `return this.makeUnaryRequest("getAvailableBranches", request, proto.cline.EmptyRequest.toJSON, pr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 539 | 텍스트 | `static async getWorktreeDefaults(request: proto.cline.EmptyRequest): Promise<proto.cline.Worktree...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 540 | 텍스트 | `return this.makeUnaryRequest("getWorktreeDefaults", request, proto.cline.EmptyRequest.toJSON, pro...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 542 | 텍스트 | `static async getWorktreeIncludeStatus(request: proto.cline.EmptyRequest): Promise<proto.cline.Wor...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 543 | 텍스트 | `return this.makeUnaryRequest("getWorktreeIncludeStatus", request, proto.cline.EmptyRequest.toJSON...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 545 | 텍스트 | `static async createWorktreeInclude(request: proto.cline.CreateWorktreeIncludeRequest): Promise<pr...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 546 | 텍스트 | `return this.makeUnaryRequest("createWorktreeInclude", request, proto.cline.CreateWorktreeIncludeR...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 548 | 텍스트 | `static async checkoutBranch(request: proto.cline.CheckoutBranchRequest): Promise<proto.cline.Work...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 549 | 텍스트 | `return this.makeUnaryRequest("checkoutBranch", request, proto.cline.CheckoutBranchRequest.toJSON,...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 551 | 텍스트 | `static async mergeWorktree(request: proto.cline.MergeWorktreeRequest): Promise<proto.cline.MergeW...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 552 | 텍스트 | `return this.makeUnaryRequest("mergeWorktree", request, proto.cline.MergeWorktreeRequest.toJSON, p...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 554 | 텍스트 | `static async trackWorktreeViewOpened(request: proto.cline.TrackWorktreeViewOpenedRequest): Promis...` | Gaea-AI-Pro | Medium |
| webview-ui/src/services/grpc-client.ts | 555 | 텍스트 | `return this.makeUnaryRequest("trackWorktreeViewOpened", request, proto.cline.TrackWorktreeViewOpe...` | Gaea-AI-Pro | Medium |