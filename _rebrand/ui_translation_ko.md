# UI 한글화(i18n) 준비 보고서 (순수 텍스트 중심)

## 1. 개요
디자인 시스템 클래스명, 코드 ID 등을 배제하고 **순수하게 번역이 필요한 화면 문구**만 추출했습니다.

## 2. 제외 기준
- CSS 클래스명 (`bg-cline` 등), variant 명칭, 내부 ID, 정적 경로

## 3. 번역 대상 리스트

| 파일 | 위치 | 영문 텍스트 (원본) | 한글 번역 (제안) |
|---|---|---|---|
| webview-ui/src/App.tsx | 53 | `console.error("Failed to acknowledge announcement:", error)` | (번역 필요) |
| webview-ui/src/App.tsx | 67 | `<div className="flex h-screen w-full flex-col">` | (번역 필요) |
| webview-ui/src/App.tsx | 80 | `{/* Do not conditionally load ChatView, it's expensive and there's state we don't want to lose (user input, disableInput, askResponse promise, etc.) */}` | (번역 필요) |
| webview-ui/src/theme.css | 76 | `var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,` | (번역 필요) |
| webview-ui/src/theme.css | 77 | `"Open Sans", "Helvetica Neue", sans-serif;` | (번역 필요) |
| webview-ui/src/theme.css | 79 | `var(--vscode-editor-font-family), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 95 | `refreshLiteLlmModels: () => Promise<void>` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 392 | `console.error("Error parsing state JSON:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 393 | `console.log("[DEBUG] ERR getting state", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 396 | `console.log('[DEBUG] ended "got subscribed state"')` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 399 | `console.error("Error in state subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 402 | `console.log("State subscription completed")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 411 | `console.log("[DEBUG] Received mcpButtonClicked event from gRPC stream")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 415 | `console.error("Error in mcpButtonClicked subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 418 | `console.log("mcpButtonClicked subscription completed")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 429 | `console.log("[DEBUG] Received history button clicked event from gRPC stream")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 433 | `console.error("Error in history button clicked subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 436 | `console.log("History button clicked subscription completed")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 447 | `console.log("[DEBUG] Received chat button clicked event from gRPC stream")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 451 | `console.error("Error in chat button subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 460 | `console.log("[DEBUG] Received MCP servers update from gRPC stream")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 466 | `console.error("Error in MCP servers subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 469 | `console.log("MCP servers subscription completed")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 480 | `console.error("Error in settings button clicked subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 483 | `console.log("Settings button clicked subscription completed")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 496 | `console.error("Error in worktrees button clicked subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 499 | `console.log("Worktrees button clicked subscription completed")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 510 | `console.error("Invalid timestamp in partial message:", protoMessage)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 526 | `console.error("Failed to process partial message:", error, protoMessage)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 530 | `console.error("Error in partialMessage subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 533 | `console.log("[DEBUG] partialMessage subscription completed")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 540 | `console.log("[DEBUG] Received MCP marketplace catalog update from gRPC stream")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 544 | `console.error("Error in MCP marketplace catalog subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 547 | `console.log("MCP marketplace catalog subscription completed")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 561 | `console.error("Error in OpenRouter models subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 564 | `console.log("OpenRouter models subscription completed")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 575 | `console.error("Error in LiteLLM models subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 578 | `console.log("LiteLLM models subscription completed")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 585 | `console.log("[DEBUG] Webview initialization completed via gRPC")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 588 | `console.error("Failed to initialize webview via gRPC:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 595 | `console.log("[DEBUG] Received account button clicked event from gRPC stream")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 599 | `console.error("Error in account button clicked subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 602 | `console.log("Account button clicked subscription completed")` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 612 | `console.error("Failed to fetch available terminal profiles:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 624 | `console.error("Error in relinquishControl subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 699 | `.catch((error: Error) => console.error("Failed to refresh OpenRouter models:", error))` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 710 | `.catch((error: Error) => console.error("Failed to refresh Hicap models:", error))` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 719 | `.catch((error: Error) => console.error("Failed to refresh LiteLLM models:", error))` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 730 | `.catch((err) => console.error("Failed to refresh Baseten models:", err))` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 739 | `.catch((error: Error) => console.error("Failed to refresh Vercel AI Gateway models:", error))` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 772 | `.catch((error: Error) => console.error("Failed to refresh Cline models:", error))` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 923 | `return <ExtensionStateContext.Provider value={contextValue}>{children}</ExtensionStateContext.Provider>` | (번역 필요) |
| webview-ui/src/context/ExtensionStateContext.tsx | 929 | `throw new Error("useExtensionState must be used within an ExtensionStateContextProvider")` | (번역 필요) |
| webview-ui/src/context/ClineAuthContext.tsx | 40 | `console.error("Failed to fetch user organizations:", error)` | (번역 필요) |
| webview-ui/src/context/ClineAuthContext.tsx | 49 | `console.log("Extension: ClineAuthContext: user updated:", user?.uid)` | (번역 필요) |
| webview-ui/src/context/ClineAuthContext.tsx | 73 | `console.error("Error in auth callback subscription:", error)` | (번역 필요) |
| webview-ui/src/context/ClineAuthContext.tsx | 76 | `console.log("Auth callback subscription completed")` | (번역 필요) |
| webview-ui/src/context/ClineAuthContext.tsx | 101 | `throw new Error("useClineAuth must be used within a ClineAuthProvider")` | (번역 필요) |
| webview-ui/src/context/ClineAuthContext.tsx | 114 | `.catch((err) => console.error("Failed to get login URL:", err))` | (번역 필요) |
| webview-ui/src/context/ClineAuthContext.tsx | 119 | `console.error("Error signing in:", error)` | (번역 필요) |
| webview-ui/src/context/ClineAuthContext.tsx | 132 | `console.error("Failed to logout:", err),` | (번역 필요) |
| webview-ui/src/context/ClineAuthContext.tsx | 135 | `console.error("Error signing out:", error)` | (번역 필요) |
| webview-ui/src/context/PlatformContext.tsx | 8 | `return <PlatformContext.Provider value={PLATFORM_CONFIG}>{children}</PlatformContext.Provider>` | (번역 필요) |
| webview-ui/src/config/platform.config.ts | 27 | `console.error("Unknown platform:", name)` | (번역 필요) |
| webview-ui/src/config/platform.config.ts | 63 | `console.log("postMessage fallback: ", message)` | (번역 필요) |
| webview-ui/src/config/platform.config.ts | 68 | `console.error("Standalone postMessage not found.")` | (번역 필요) |
| webview-ui/src/config/platform.config.ts | 72 | `console.log("Standalone postMessage: " + json.slice(0, 200))` | (번역 필요) |
| webview-ui/src/config/StorybookDecorator.tsx | 41 | `return <>{children}</>` | (번역 필요) |
| webview-ui/src/config/StorybookDecorator.tsx | 49 | `<ThemeHandler theme={parameters?.globals?.theme}>{React.createElement(story)}</ThemeHandler>` | (번역 필요) |
| webview-ui/src/config/StorybookDecorator.tsx | 63 | `return <ExtensionStateContext.Provider value={{ ...extensionState, ...overrides }}>{children}</ExtensionStateContext.Provider>` | (번역 필요) |
| webview-ui/src/config/StorybookDecorator.tsx | 71 | `return <ClineAuthContext.Provider value={{ ...authContext, ...overrides }}>{children}</ClineAuthContext.Provider>` | (번역 필요) |
| webview-ui/src/config/StorybookDecorator.tsx | 75 | `(overrideStates?: Partial<ExtensionStateContextType>, classNames?: string, authOverrides?: Partial<ClineAuthContextType>) =>` | (번역 필요) |
| webview-ui/src/config/StorybookDecorator.tsx | 79 | `<div className={cn("max-w-lg mx-auto", classNames)}>` | (번역 필요) |
| webview-ui/src/Providers.tsx | 14 | `<HeroUIProvider>{children}</HeroUIProvider>` | (번역 필요) |
| webview-ui/src/utils/slash-commands.ts | 88 | `description: prompt.description \|\| prompt.title \|\| `MCP prompt from ${server.name}`,` | (번역 필요) |
| webview-ui/src/utils/slash-commands.ts | 155 | `// don't show menu if there's whitespace after the slash but before the cursor` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 20 | `return "You must provide a valid API key or choose a different provider."` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 25 | `return "You must choose a region to use with AWS Bedrock."` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 35 | `return "You must provide a valid Google Cloud Project ID and Region."` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 85 | `return "You must provide a valid base URL, API key, and model ID."` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 105 | `return "You must provide a valid model ID."` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 115 | `return "You must provide a valid model selector."` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 140 | `return "You must provide a valid Base URL key or choose a different provider."` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 143 | `return "You must provide a valid Client Id or choose a different provider."` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 146 | `return "You must provide a valid Client Secret or choose a different provider."` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 149 | `return "You must provide a valid Auth URL or choose a different provider."` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 159 | `return "You must provide a valid Base URL or choose a different provider."` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 172 | `return "You must provide a valid API key"` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 192 | `return "You must provide a model ID."` | (번역 필요) |
| webview-ui/src/utils/validate.ts | 196 | `return "The model ID you provided is not available. Please choose a different model."` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 6 | `it("should add quotes to file paths with spaces", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 7 | `const text = "Check @"` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 13 | `expect(result.newValue).toBe('Check @"/path with spaces/file.txt" ')` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 17 | `it("should not add quotes to file paths without spaces", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 28 | `it("should not add quotes to non-file mentions", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 35 | `expect(result.newValue).toBe("Check @terminal ")` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 39 | `it("should replace existing partial mention", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 40 | `const text = "Check @/pa and more"` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 46 | `expect(result.newValue).toBe('Check @"/path with spaces/file.txt" and more')` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 50 | `it("should handle folder paths with spaces", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 51 | `const text = "Look in @"` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 57 | `expect(result.newValue).toBe('Look in @"/folder with spaces/" ')` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 64 | `const text = "Some text "` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 70 | `expect(result.newValue).toBe('Some text @"/folder with spaces/" ')` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 85 | `it("should handle URLs without adding quotes", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 96 | `it("should handle special mentions without adding quotes", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/context-mentions.test.ts | 103 | `expect(result.newValue).toBe("Check @git-changes ")` | (번역 필요) |
| webview-ui/src/utils/__tests__/platformUtils.spec.ts | 5 | `it("should return ⌘ Command for darwin platform", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/platformUtils.spec.ts | 10 | `it("should return ⊞ Win for win32 platform", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/platformUtils.spec.ts | 15 | `it("should return Alt for linux platform", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/platformUtils.spec.ts | 20 | `it("should return generic CMD for unknown platform", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/hooks.spec.ts | 6 | `it("should call the callback when the shortcut is pressed", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/hooks.spec.ts | 16 | `it("should not call the callback when the shortcut is not pressed", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/hooks.spec.ts | 26 | `it("should not call the callback when typing in a text input when disableTextInputs is true", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/hooks.spec.ts | 44 | `it("should detect Windows OS and metaKey from platform", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/hooks.spec.ts | 51 | `it("should detect Mac OS and metaKey from platform", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/hooks.spec.ts | 58 | `it("should detect Linux OS and metaKey from platform", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 21 | `it("should return empty array when no servers provided", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 26 | `it("should return empty array when servers have no prompts", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 32 | `it("should skip disconnected servers", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 36 | `prompts: [{ name: "test-prompt", description: "A test prompt" }],` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 43 | `it("should skip servers with connecting status", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 54 | `it("should generate commands for connected servers with prompts", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 58 | `prompts: [{ name: "summarize", description: "Summarize text" }],` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 65 | `description: "Summarize text",` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 71 | `it("should use title as fallback description", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 75 | `prompts: [{ name: "prompt", title: "My Prompt Title" }],` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 79 | `expect(result[0].description).toBe("My Prompt Title")` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 82 | `it("should use default description when no description or title", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 90 | `expect(result[0].description).toBe("MCP prompt from server")` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 93 | `it("should handle multiple prompts from single server", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 98 | `{ name: "prompt1", description: "First prompt" },` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 99 | `{ name: "prompt2", description: "Second prompt" },` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 100 | `{ name: "prompt3", description: "Third prompt" },` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 113 | `it("should handle multiple servers with prompts", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 117 | `prompts: [{ name: "promptA", description: "From A" }],` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 121 | `prompts: [{ name: "promptB", description: "From B" }],` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 130 | `it("should skip servers with undefined prompts", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 142 | `describe("getMatchingSlashCommands with MCP servers", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 147 | `{ name: "summarize", description: "Summarize content" },` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 148 | `{ name: "translate", description: "Translate text" },` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 153 | `it("should include MCP commands in results when no query", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 159 | `it("should filter MCP commands by query prefix", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 165 | `it("should filter to specific MCP prompt", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 171 | `it("should return empty for non-matching MCP query", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 177 | `describe("validateSlashCommand with MCP servers", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 185 | `it("should return full for exact MCP command match", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 190 | `it("should return partial for partial MCP command match", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 195 | `it("should return partial for server prefix only", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 200 | `it("should return null for non-matching MCP command", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 206 | `describe("slashCommandRegex with MCP format", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 207 | `it("should match MCP command format with colons", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 214 | `it("should match MCP command in middle of text", () => {` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 215 | `const text = "Please run /mcp:server:prompt now"` | (번역 필요) |
| webview-ui/src/utils/__tests__/slash-commands.test.ts | 221 | `it("should not match MCP-like pattern in URL", () => {` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 33 | `// If there's an '@' symbol, replace everything after it with the new mention` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 41 | `// If there's no '@' symbol, insert the mention at the cursor position` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 127 | `label: "Working changes",` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 128 | `description: "Current uncommitted changes",` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 185 | `label: "Git Commits",` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 186 | `description: "Search repository history",` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 210 | `label: `Commit ${lowerQuery}`,` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 211 | `description: "Git commit hash",` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 291 | `// Check if there's any whitespace after the '@'` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 296 | `// Don't show the menu if it's a URL` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 301 | `// Don't show the menu if it's a problems or terminal` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 306 | `// NOTE: it's okay that menu shows when there's trailing punctuation since user could be inputting a path with marks` | (번역 필요) |
| webview-ui/src/utils/context-mentions.ts | 308 | `// Show the menu if there's just '@' or '@' followed by some text (but not a URL)` | (번역 필요) |
| webview-ui/src/utils/vscStyles.ts | 43 | `return `#${rgbValues.map((x) => x.toString(16).padStart(2, "0")).join("")}`` | (번역 필요) |
| webview-ui/src/main.css | 89 | `The above scrollbar styling uses some transparent background color magic to accomplish its animation. However this doesn't play nicely with SyntaxHighlighter, so we need to set a background color for the code blocks' horizontal scrollbar. This actually has the unintended consequence of always showing the scrollbar which I prefer since it makes it more obvious that there is more content to scroll to.` | (번역 필요) |
| webview-ui/src/components/ui/input.stories.tsx | 12 | `"A styled text input component that supports all standard HTML input types. Includes focus states, placeholder text, and disabled state styling.",` | (번역 필요) |
| webview-ui/src/components/ui/input.stories.tsx | 21 | `<div className="w-screen flex justify-center items-center">` | (번역 필요) |
| webview-ui/src/components/ui/input.stories.tsx | 22 | `<div className="flex flex-col gap-4 w-full max-w-md px-4">` | (번역 필요) |
| webview-ui/src/components/ui/input.stories.tsx | 23 | `<Input placeholder="Default text input" type="text" />` | (번역 필요) |
| webview-ui/src/components/ui/input.stories.tsx | 24 | `<Input placeholder="Email input" type="email" />` | (번역 필요) |
| webview-ui/src/components/ui/input.stories.tsx | 25 | `<Input placeholder="Password input" type="password" />` | (번역 필요) |
| webview-ui/src/components/ui/input.stories.tsx | 26 | `<Input placeholder="Number input" type="number" />` | (번역 필요) |
| webview-ui/src/components/ui/input.stories.tsx | 27 | `<Input disabled placeholder="Disabled input" type="text" />` | (번역 필요) |
| webview-ui/src/components/ui/input.stories.tsx | 28 | `<Input defaultValue="Input with value" type="text" />` | (번역 필요) |
| webview-ui/src/components/ui/input.stories.tsx | 29 | `<div className="flex w-full items-center gap-2">` | (번역 필요) |
| webview-ui/src/components/ui/input.stories.tsx | 31 | `<Button type="submit">Subscribe</Button>` | (번역 필요) |
| webview-ui/src/components/ui/button.stories.tsx | 12 | `"Displays different types of error messages in the chat interface, including API errors, credit limit errors, diff errors, and clineignore errors. Handles special error parsing for Cline provider errors and provides appropriate user actions.",` | (번역 필요) |
| webview-ui/src/components/ui/button.stories.tsx | 31 | `<div className="w-screen flex justify-center gap-4">` | (번역 필요) |
| webview-ui/src/components/ui/button.stories.tsx | 33 | `<div className="flex flex-col gap-4 w-md px-auto" key={size.value}>` | (번역 필요) |
| webview-ui/src/components/ui/button.stories.tsx | 34 | `<h1>{size.label}</h1>` | (번역 필요) |
| webview-ui/src/components/ui/button.stories.tsx | 40 | `{size.value === "default" && " Icon with Text"}` | (번역 필요) |
| webview-ui/src/components/ui/slider.tsx | 11 | `className={cn("relative flex w-full touch-none select-none items-center", className)}` | (번역 필요) |
| webview-ui/src/components/ui/slider.tsx | 14 | `<SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary">` | (번역 필요) |
| webview-ui/src/components/ui/slider.tsx | 15 | `<SliderPrimitive.Range className="absolute h-full bg-foreground" />` | (번역 필요) |
| webview-ui/src/components/ui/progress.tsx | 15 | `className="h-full w-full flex-1 bg-code-foreground transition-all"` | (번역 필요) |
| webview-ui/src/components/ui/progress.tsx | 16 | `style={{ transform: `translateX(-${100 - (value \|\| 0)}%)` }}` | (번역 필요) |
| webview-ui/src/components/ui/hover-card.stories.tsx | 12 | `"Displays additional content in a floating card when hovering over a trigger element. Built on Radix UI with customizable alignment and side offset.",` | (번역 필요) |
| webview-ui/src/components/ui/hover-card.stories.tsx | 21 | `<div className="w-screen flex justify-center items-center min-h-[400px]">` | (번역 필요) |
| webview-ui/src/components/ui/hover-card.stories.tsx | 22 | `<div className="flex flex-col gap-8 w-full max-w-md px-4">` | (번역 필요) |
| webview-ui/src/components/ui/hover-card.stories.tsx | 25 | `<Button>Hover over me</Button>` | (번역 필요) |
| webview-ui/src/components/ui/hover-card.stories.tsx | 29 | `<h4 className="text-sm font-semibold">Hover Card Title</h4>` | (번역 필요) |
| webview-ui/src/components/ui/hover-card.stories.tsx | 30 | `<p className="text-sm">This is the content that appears when you hover over the trigger element.</p>` | (번역 필요) |
| webview-ui/src/components/ui/hover-card.stories.tsx | 37 | `<span className="text-sm underline cursor-pointer">Hover for more info</span>` | (번역 필요) |
| webview-ui/src/components/ui/hover-card.stories.tsx | 41 | `<h4 className="text-sm font-semibold">Additional Information</h4>` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 11 | `"Visually separates content with a horizontal or vertical line. Built on Radix UI and supports both orientations for flexible layout separation.",` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 20 | `<div className="w-screen flex justify-center items-center">` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 21 | `<div className="flex flex-col gap-8 w-full max-w-md px-4">` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 23 | `<h4 className="text-sm font-medium">Horizontal Separator</h4>` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 25 | `<p className="text-sm">Content above the separator</p>` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 29 | `<p className="text-sm">Content below the separator</p>` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 34 | `<h4 className="text-sm font-medium">Vertical Separator</h4>` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 35 | `<div className="flex h-20 items-center space-x-4">` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 36 | `<div className="text-sm">Left content</div>` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 38 | `<div className="text-sm">Middle content</div>` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 40 | `<div className="text-sm">Right content</div>` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 45 | `<h4 className="text-sm font-medium">In a Menu Layout</h4>` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 47 | `<div className="text-sm p-2 hover:bg-accent rounded-sm cursor-pointer">Menu Item 1</div>` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 48 | `<div className="text-sm p-2 hover:bg-accent rounded-sm cursor-pointer">Menu Item 2</div>` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 50 | `<div className="text-sm p-2 hover:bg-accent rounded-sm cursor-pointer">Menu Item 3</div>` | (번역 필요) |
| webview-ui/src/components/ui/separator.stories.tsx | 51 | `<div className="text-sm p-2 hover:bg-accent rounded-sm cursor-pointer">Menu Item 4</div>` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 12 | `"Displays rich content in a floating panel when clicking a trigger element. Built on Radix UI with customizable alignment, side positioning, and an arrow indicator.",` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 21 | `<div className="w-screen flex justify-center items-center min-h-[400px]">` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 22 | `<div className="flex flex-col gap-8 w-full max-w-md px-4">` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 25 | `<Button variant="cline">Open Popover</Button>` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 29 | `<h4 className="font-medium leading-none">Popover Title</h4>` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 30 | `<p className="text-sm text-muted-foreground">` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 37 | `<div className="flex gap-4 justify-center">` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 40 | `<Button variant="secondary">Left Align</Button>` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 44 | `<p className="text-sm">This popover is aligned to the start of the trigger.</p>` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 51 | `<Button variant="secondary">Right Align</Button>` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 55 | `<p className="text-sm">This popover is aligned to the end of the trigger.</p>` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 63 | `<Button variant="default">With Actions</Button>` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 68 | `<h4 className="font-medium leading-none">Confirm Action</h4>` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 69 | `<p className="text-sm text-muted-foreground">Are you sure you want to proceed?</p>` | (번역 필요) |
| webview-ui/src/components/ui/popover.stories.tsx | 71 | `<div className="flex gap-2 justify-end">` | (번역 필요) |
| webview-ui/src/components/ui/switch.stories.tsx | 20 | `<div className="w-screen flex justify-center items-center">` | (번역 필요) |
| webview-ui/src/components/ui/switch.stories.tsx | 21 | `<div className="flex flex-col gap-6 w-full max-w-md px-4">` | (번역 필요) |
| webview-ui/src/components/ui/switch.stories.tsx | 22 | `<div className="flex items-center justify-between">` | (번역 필요) |
| webview-ui/src/components/ui/switch.stories.tsx | 23 | `<label className="text-sm font-medium cursor-pointer" htmlFor="switch-1">` | (번역 필요) |
| webview-ui/src/components/ui/switch.stories.tsx | 30 | `<label className="text-sm font-medium cursor-pointer" htmlFor="switch-2">` | (번역 필요) |
| webview-ui/src/components/ui/switch.stories.tsx | 37 | `<label className="text-sm font-medium cursor-not-allowed opacity-50" htmlFor="switch-3">` | (번역 필요) |
| webview-ui/src/components/ui/switch.stories.tsx | 44 | `<label className="text-sm font-medium cursor-not-allowed opacity-50" htmlFor="switch-4">` | (번역 필요) |
| webview-ui/src/components/ui/switch.stories.tsx | 51 | `<h4 className="text-sm font-medium">Setting Example</h4>` | (번역 필요) |
| webview-ui/src/components/ui/switch.stories.tsx | 54 | `<label className="text-sm font-medium cursor-pointer" htmlFor="notifications">` | (번역 필요) |
| webview-ui/src/components/ui/switch.stories.tsx | 57 | `<div className="text-xs text-muted-foreground">Receive updates about your account activity</div>` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 12 | `"Displays alert messages with different severity levels (default, warning, danger). Includes optional dismiss functionality and supports title and description content.",` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 21 | `<div className="w-screen flex justify-center items-center">` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 22 | `<div className="flex flex-col gap-4 w-full max-w-md px-4">` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 24 | `<AlertDescription>This is a default alert message.</AlertDescription>` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 27 | `<AlertDescription>This is a warning alert.</AlertDescription>` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 30 | `<AlertDescription>An error has occurred.</AlertDescription>` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 32 | `<Alert isDismissible={false} title="Non Dismissible" variant="default">` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 33 | `<AlertDescription>This alert cannot be dismissed.</AlertDescription>` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 37 | `<p className="my-1">How can I help you?</p>` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 38 | `<ul className="list-inside list-disc text-sm">` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 39 | `<li>Coding</li>` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 40 | `<li>Debugging</li>` | (번역 필요) |
| webview-ui/src/components/ui/alert.stories.tsx | 41 | `<li>Write Tests</li>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 22 | `"A modal dialog component built on Radix UI. Displays content in a layer above the main application with an overlay backdrop. Includes header, footer, title, description, and close button components for composing dialog layouts.",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 45 | `dialogTitle: "Dialog Title",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 46 | `dialogDescription: "This is a description of what this dialog is about.",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 47 | `dialogContent: "This is the main content area of the dialog.",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 58 | `description: "Dialog title text",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 62 | `description: "Dialog description text",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 66 | `description: "Main content of the dialog",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 70 | `description: "Show or hide the footer with action buttons",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 74 | `description: "Cancel button text",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 78 | `description: "Confirm button text",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 83 | `description: "Trigger button variant",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 88 | `description: "Confirm button variant",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 92 | `description: "Hide or show the close button in the dialog",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 96 | `<div className="w-full h-full flex justify-center items-center overflow-hidden">` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 97 | `<div className="flex flex-col justify-center items-center h-[60%] w-[50%] overflow-hidden mt-50">` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 98 | `<div className="flex justify-center my-5">` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 109 | `<Button variant={args.triggerVariant}>Open Dialog</Button>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 113 | `<DialogTitle>{args.dialogTitle}</DialogTitle>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 114 | `<DialogDescription>{args.dialogDescription}</DialogDescription>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 116 | `<p className="text-sm">{args.dialogContent}</p>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 120 | `<Button variant="ghost">{args.cancelText}</Button>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 122 | `<Button variant={args.confirmVariant}>{args.confirmText}</Button>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 139 | `title: "Dialog Title",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 141 | `"This is a description of what this dialog is about. It provides context to the user about the action they're taking.",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 143 | `"This is the main content area of the dialog. You can put any content here, such as forms, information, or other interactive elements.",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 152 | `title: "Simple Dialog",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 153 | `description: "This dialog has no footer, just content.",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 154 | `content: "This is a simpler dialog without action buttons in the footer.",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 160 | `title: "Are you sure?",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 161 | `description: "This action cannot be undone. This will permanently delete the item.",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 169 | `label: "With Form",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 171 | `title: "Edit Profile",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 172 | `description: "Make changes to your profile here.",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 174 | `<div className="grid gap-4 py-4">` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 175 | `<div className="grid gap-2">` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 176 | `<label className="text-sm font-medium" htmlFor="name">` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 180 | `className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 181 | `defaultValue="John Doe"` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 186 | `<label className="text-sm font-medium" htmlFor="email">` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 201 | `confirmText: "Save Changes",` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 207 | `<div className="flex flex-col justify-center h-[60%] w-[80%] overflow-hidden gap-8 p-8">` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 209 | `<div className="flex flex-col gap-4 items-center" key={variant.label}>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 210 | `<h2 className="text-lg font-semibold">{variant.label}</h2>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 213 | `<Button variant={variant.triggerVariant}>Open {variant.label}</Button>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 217 | `<DialogTitle>{variant.title}</DialogTitle>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 218 | `<DialogDescription>{variant.description}</DialogDescription>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 221 | `<p className="text-sm">{variant.content}</p>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 228 | `<Button variant={variant.cancelVariant}>Cancel</Button>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.stories.tsx | 230 | `<Button variant={variant.confirmVariant}>{variant.confirmText}</Button>` | (번역 필요) |
| webview-ui/src/components/ui/label.tsx | 7 | `const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")` | (번역 필요) |
| webview-ui/src/components/ui/label.tsx | 11 | `React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>` | (번역 필요) |
| webview-ui/src/components/ui/label.tsx | 12 | `>(({ className, ...props }, ref) => <LabelPrimitive.Root className={cn(labelVariants(), className)} ref={ref} {...props} />)` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.tsx | 42 | `<span className="leading-tight text-ellipsis p-2">{children}</span>` | (번역 필요) |
| webview-ui/src/components/ui/alert.tsx | 8 | `"relative w-full rounded-sm border p-2 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:text-foreground [&>svg~*]:pl-7 flex flex-col gap-1 mb-1",` | (번역 필요) |
| webview-ui/src/components/ui/alert.tsx | 36 | `<div className="flex items-center justify-between w-full">` | (번역 필요) |
| webview-ui/src/components/ui/alert.tsx | 37 | `<AlertTitle className="flex gap-1 w-full">` | (번역 필요) |
| webview-ui/src/components/ui/alert.tsx | 38 | `<span className="mr-1 shrink-0">{icon ?? <AlertTriangleIcon className="size-2" />}</span>` | (번역 필요) |
| webview-ui/src/components/ui/alert.tsx | 44 | `className="opacity-100 hover:opacity-100 justify-center"` | (번역 필요) |
| webview-ui/src/components/ui/alert.tsx | 65 | `className={cn("font-medium leading-none tracking-tight text-base flex gap-1 items-center grow", className)}` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 21 | `"A select dropdown component built on Radix UI. Allows users to choose from a list of options with support for grouping, separators, labels, and custom styling. Includes trigger, content, item, and value components for composing select layouts.",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 42 | `placeholder: "Select an option",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 44 | `items: ["Option 1", "Option 2", "Option 3", "Option 4"],` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 53 | `description: "Placeholder text shown when no option is selected",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 58 | `description: "Size variant of the select trigger",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 62 | `description: "Array of items to display in the select",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 66 | `description: "Default selected value",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 70 | `description: "Disable the select component",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 74 | `description: "Show items organized in groups with labels",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 78 | `description: "Show separators between items",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 82 | `<div className="w-full h-full flex justify-center items-center overflow-hidden">` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 83 | `<div className="flex flex-col justify-center items-center h-[60%] w-[50%] overflow-hidden mt-50">` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 84 | `<div className="flex justify-center my-5">` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 101 | `<SelectLabel>Group 1</SelectLabel>` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 110 | `<SelectLabel>Group 2</SelectLabel>` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 142 | `placeholder: "Select a fruit",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 148 | `label: "With Groups",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 150 | `placeholder: "Select a language",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 165 | `label: "With Separators",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 167 | `placeholder: "Select a tool",` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 176 | `<div className="flex justify-center h-[60%] w-[80%] overflow-hidden gap-8 p-8">` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 178 | `<div className="flex flex-col gap-4" key={variant.label}>` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 179 | `<h2 className="text-lg font-semibold">{variant.label}</h2>` | (번역 필요) |
| webview-ui/src/components/ui/select.stories.tsx | 189 | `<SelectLabel>{group.label}</SelectLabel>` | (번역 필요) |
| webview-ui/src/components/ui/switch.tsx | 10 | `root: "h-3 w-6",` | (번역 필요) |
| webview-ui/src/components/ui/switch.tsx | 11 | `thumb: "h-2 w-2 data-[state=checked]:translate-x-2.5",` | (번역 필요) |
| webview-ui/src/components/ui/switch.tsx | 14 | `root: "h-5 w-10",` | (번역 필요) |
| webview-ui/src/components/ui/switch.tsx | 15 | `thumb: "h-4 w-4 data-[state=checked]:translate-x-[1.3rem]",` | (번역 필요) |
| webview-ui/src/components/ui/item.tsx | 26 | `default: "gap-1 p-2 ",` | (번역 필요) |
| webview-ui/src/components/ui/item.tsx | 27 | `sm: "gap-2.5 px-4 py-3",` | (번역 필요) |
| webview-ui/src/components/ui/item.tsx | 43 | `}: React.ComponentProps<"div"> & VariantProps<typeof itemVariants> & { asChild?: boolean }) {` | (번역 필요) |
| webview-ui/src/components/ui/item.tsx | 77 | `}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants> & { selected?: boolean }) {` | (번역 필요) |
| webview-ui/src/components/ui/item.tsx | 86 | `className={cn("w-full flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", className)}` | (번역 필요) |
| webview-ui/src/components/ui/item.tsx | 96 | `className={cn("w-full flex items-center gap-2 text-sm font-medium leading-snug", className)}` | (번역 필요) |
| webview-ui/src/components/ui/item.tsx | 107 | `"w-full text-muted-foreground line-clamp-2 text-pretty text-sm font-normal leading-normal p-0 m-0",` | (번역 필요) |
| webview-ui/src/components/ui/item.tsx | 108 | `"[&>a:hover]:text-foreground [&>a]:underline [&>a]:underline-offset-4",` | (번역 필요) |
| webview-ui/src/components/ui/item.tsx | 118 | `return <div className={cn("flex items-center gap-2", className)} data-slot="item-actions" {...props} />` | (번역 필요) |
| webview-ui/src/components/ui/item.tsx | 124 | `className={cn("w-full flex basis-full items-center justify-between gap-2", className)}` | (번역 필요) |
| webview-ui/src/components/ui/item.tsx | 133 | `<div className={cn("flex basis-full items-center justify-between gap-2", className)} data-slot="item-footer" {...props} />` | (번역 필요) |
| webview-ui/src/components/ui/hooks/useOpenRouterKeyInfo.ts | 32 | `Authorization: `Bearer ${apiKey}`,` | (번역 필요) |
| webview-ui/src/components/ui/hooks/useOpenRouterKeyInfo.ts | 39 | `console.warn("OpenRouter API key is invalid or unauthorized.")` | (번역 필요) |
| webview-ui/src/components/ui/hooks/useOpenRouterKeyInfo.ts | 41 | `console.error(`Error fetching OpenRouter key info: HTTP ${response.status}`)` | (번역 필요) |
| webview-ui/src/components/ui/hooks/useOpenRouterKeyInfo.ts | 49 | `console.error("OpenRouter API key info validation failed:", result.error.flatten().fieldErrors)` | (번역 필요) |
| webview-ui/src/components/ui/hooks/useOpenRouterKeyInfo.ts | 55 | `console.error("Error fetching OpenRouter key info:", error)` | (번역 필요) |
| webview-ui/src/components/ui/hooks/useOpenRouterKeyInfo.ts | 126 | `console.error("[useOpenRouterKeyInfo] Fetch error:", err)` | (번역 필요) |
| webview-ui/src/components/ui/hooks/useOpenRouterKeyInfo.ts | 127 | `setError(err instanceof Error ? err : new Error("An unknown error occurred"))` | (번역 필요) |
| webview-ui/src/components/ui/progress.stories.tsx | 11 | `"Displays a horizontal progress bar with a smooth animated indicator. Built on Radix UI and accepts a value between 0-100 to show completion percentage.",` | (번역 필요) |
| webview-ui/src/components/ui/progress.stories.tsx | 20 | `<div className="w-screen flex justify-center items-center">` | (번역 필요) |
| webview-ui/src/components/ui/progress.stories.tsx | 21 | `<div className="flex flex-col gap-6 w-full max-w-md px-4">` | (번역 필요) |
| webview-ui/src/components/ui/progress.stories.tsx | 23 | `<div className="text-sm text-muted-foreground">0% Complete</div>` | (번역 필요) |
| webview-ui/src/components/ui/progress.stories.tsx | 27 | `<div className="text-sm text-muted-foreground">25% Complete</div>` | (번역 필요) |
| webview-ui/src/components/ui/progress.stories.tsx | 31 | `<div className="text-sm text-muted-foreground">50% Complete</div>` | (번역 필요) |
| webview-ui/src/components/ui/progress.stories.tsx | 35 | `<div className="text-sm text-muted-foreground">75% Complete</div>` | (번역 필요) |
| webview-ui/src/components/ui/progress.stories.tsx | 39 | `<div className="text-sm text-muted-foreground">100% Complete</div>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.tsx | 47 | `<DialogPrimitive.Close className="absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer">` | (번역 필요) |
| webview-ui/src/components/ui/dialog.tsx | 49 | `<span className="sr-only">Close</span>` | (번역 필요) |
| webview-ui/src/components/ui/dialog.tsx | 59 | `<div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />` | (번역 필요) |
| webview-ui/src/components/ui/dialog.tsx | 64 | `<div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />` | (번역 필요) |
| webview-ui/src/components/ui/dialog.tsx | 72 | `<DialogPrimitive.Title className={cn("text-lg font-semibold leading-none tracking-tight", className)} ref={ref} {...props} />` | (번역 필요) |
| webview-ui/src/components/ui/dialog.tsx | 80 | `<DialogPrimitive.Description className={cn("text-sm text-description", className)} ref={ref} {...props} />` | (번역 필요) |
| webview-ui/src/components/ui/badge.tsx | 11 | `default: "border-transparent bg-badge-background",` | (번역 필요) |
| webview-ui/src/components/ui/badge.tsx | 13 | `danger: "border-transparent bg-error-icon",` | (번역 필요) |
| webview-ui/src/components/ui/badge.tsx | 15 | `cline: "bg-cline border-cline",` | (번역 필요) |
| webview-ui/src/components/ui/badge.tsx | 20 | `default: "rounded px-1.5 py-0.5",` | (번역 필요) |
| webview-ui/src/components/ui/badge.tsx | 21 | `round: "rounded-full h-5 w-5 justify-center p-0 border-none",` | (번역 필요) |
| webview-ui/src/components/ui/badge.tsx | 22 | `icon: "rounded px-1.5 py-0.5 gap-1 ring-0",` | (번역 필요) |
| webview-ui/src/components/ui/badge.tsx | 32 | `export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}` | (번역 필요) |
| webview-ui/src/components/ui/separator.tsx | 15 | `"bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",` | (번역 필요) |
| webview-ui/src/components/ui/button.tsx | 11 | `default: "bg-button-background text-primary-foreground hover:bg-button-hover",` | (번역 필요) |
| webview-ui/src/components/ui/button.tsx | 19 | `link: "text-link underline-offset-4 hover:underline p-0 m-0 cursor-text select-text hover:text-link-hover",` | (번역 필요) |
| webview-ui/src/components/ui/button.tsx | 20 | `text: "text-foreground cursor-text select-text p-0 m-0",` | (번역 필요) |
| webview-ui/src/components/ui/button.tsx | 21 | `icon: "hover:opacity-80 p-0 m-0 border-0 cursor-pointer hover:shadow-none focus:ring-0 focus:ring-offset-0",` | (번역 필요) |
| webview-ui/src/components/ui/button.tsx | 25 | `danger: "bg-[#c42b2b] border-[#c42b2b]! text-white! hover:bg-[#a82424]! hover:border-[#a82424]! active:bg-[#8f1f1f]! active:border-[#8f1f1f]!",` | (번역 필요) |
| webview-ui/src/components/ui/button.tsx | 46 | `export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 12 | `"Displays a badge with different variants (default, info, danger, outline, brand, neutral, gray, success, warning) and types (default, round, icon). Used to highlight status, categories, or counts.",` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 25 | `{ value: "icon", label: "With Icon" },` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 26 | `{ value: "round", label: "Icon Only" },` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 30 | `<div className="w-screen flex justify-center p-8">` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 31 | `<div className="flex flex-col gap-8 w-full max-w-4xl">` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 33 | `<div className="flex flex-col gap-4" key={type.value}>` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 34 | `<h2 className="text-lg font-semibold">{type.label}</h2>` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 35 | `<div className="flex flex-wrap gap-3 items-center">` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 55 | `<div className="flex flex-wrap gap-3">` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 57 | `<Badge className="gap-1 pe-0.5 ps-1.5" key={variant} type="icon" variant={variant}>` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 58 | `<span>{variant.charAt(0).toUpperCase() + variant.slice(1)}</span>` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 61 | `className="inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:opacity-80"` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 63 | `<XIcon className="w-3 h-3" />` | (번역 필요) |
| webview-ui/src/components/ui/badge.stories.tsx | 64 | `<span className="sr-only">Remove badge</span>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 13 | `"Displays helpful text when hovering over an element. Built on Radix UI with customizable positioning, optional arrow indicator, and smooth animations.",` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 22 | `<div className="w-screen flex justify-center items-center min-h-[400px]">` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 23 | `<div className="flex flex-col gap-8 w-full max-w-md px-4 items-center">` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 26 | `<Button>Hover for tooltip</Button>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 29 | `<p>This is a helpful tooltip</p>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 33 | `<div className="flex gap-4">` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 36 | `<Button variant="secondary">Top</Button>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 39 | `<p>Tooltip on top</p>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 45 | `<Button variant="secondary">Bottom</Button>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 48 | `<p>Tooltip on bottom</p>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 54 | `<Button variant="secondary">Left</Button>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 57 | `<p>Tooltip on left</p>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 63 | `<Button variant="secondary">Right</Button>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 66 | `<p>Tooltip on right</p>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 78 | `<p>Click for more information</p>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 84 | `<Button>No arrow</Button>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 87 | `<p>This tooltip has no arrow</p>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 93 | `<span className="text-sm underline cursor-help">Hover me</span>` | (번역 필요) |
| webview-ui/src/components/ui/tooltip.stories.tsx | 96 | `<p>Tooltips can wrap any element, not just buttons</p>` | (번역 필요) |
| webview-ui/src/components/ui/select.tsx | 1 | `"use client"` | (번역 필요) |
| webview-ui/src/components/ui/select.tsx | 43 | `<ChevronDownIcon className="size-4 opacity-50" />` | (번역 필요) |
| webview-ui/src/components/ui/select.tsx | 62 | `"bg-menu text-menu-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-xs border border-editor-group-border shadow-md",` | (번역 필요) |
| webview-ui/src/components/ui/select.tsx | 64 | `"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",` | (번역 필요) |
| webview-ui/src/components/ui/select.tsx | 75 | `"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",` | (번역 필요) |
| webview-ui/src/components/ui/select.tsx | 99 | `"focus:bg-button-background/50 focus:text-input [&_svg:not([class*='text-'])]:text-description relative flex w-full cursor-default items-center gap-2 rounded-xs py-1 pr-8 pl-2 text-xs outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-2 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",` | (번역 필요) |
| webview-ui/src/components/ui/select.tsx | 104 | `<span className="absolute right-2 flex size-2 items-center justify-center" data-slot="select-item-indicator">` | (번역 필요) |
| webview-ui/src/components/ui/select.tsx | 109 | `<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>` | (번역 필요) |
| webview-ui/src/components/ui/select.tsx | 117 | `className={cn("bg-editor-group-border pointer-events-none -mx-1 my-1 h-px", className)}` | (번역 필요) |
| webview-ui/src/components/ui/select.tsx | 127 | `className={cn("flex cursor-default items-center justify-center py-1", className)}` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 25 | `"A flexible item component for building lists with media, content, actions, and separators. Supports multiple variants (default, outline, select, muted) and sizes.",` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 34 | `<div className="w-screen flex justify-center items-center">` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 35 | `<div className="flex flex-col gap-5 w-full max-w-md px-4">` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 42 | `<ItemTitle>User Profile</ItemTitle>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 43 | `<ItemDescription>View and edit your profile information</ItemDescription>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 57 | `<ItemTitle>Settings</ItemTitle>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 58 | `<ItemDescription>Manage your account settings and preferences</ItemDescription>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 67 | `<ItemTitle>Notifications</ItemTitle>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 68 | `<ItemDescription>Configure notification preferences</ItemDescription>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 81 | `<ItemTitle>Item with Header and Footer</ItemTitle>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 82 | `<Badge variant="default">New</Badge>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 84 | `<ItemDescription>This item has a header and footer layout</ItemDescription>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 86 | `<span className="text-xs text-muted-foreground">2 hours ago</span>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 96 | `<ItemTitle>Select Variant</ItemTitle>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 97 | `<ItemDescription>This item uses the select variant with small size</ItemDescription>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 103 | `<ItemTitle>Muted Variant</ItemTitle>` | (번역 필요) |
| webview-ui/src/components/ui/item.stories.tsx | 104 | `<ItemDescription>This item has a subtle muted background</ItemDescription>` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 38 | `setInputError("Please enter a positive number")` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 55 | `console.error("Failed to update terminal connection timeout:", error)` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 95 | `<label className="font-medium block mb-1" htmlFor="default-terminal-profile">` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 109 | `<p className="text-xs text-(--vscode-descriptionForeground) mt-1">` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 116 | `<label className="font-medium block mb-1">Shell integration timeout (seconds)</label>` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 117 | `<div className="flex items-center">` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 122 | `placeholder="Enter timeout in seconds"` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 126 | `{inputError && <div className="text-(--vscode-errorForeground) text-xs mt-1">{inputError}</div>}` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 128 | `<p className="text-xs text-(--vscode-descriptionForeground)">` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 135 | `<div className="flex items-center mb-2">` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 149 | `<label className="font-medium block mb-1" htmlFor="terminal-execution-mode">` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 157 | `<VSCodeOption value="vscodeTerminal">VS Code Terminal</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 158 | `<VSCodeOption value="backgroundExec">Background Exec</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 160 | `<p className="text-xs text-[var(--vscode-descriptionForeground)] mt-1">` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 166 | `<div className="mt-5 p-3 bg-(--vscode-textBlockQuote-background) rounded border border-(--vscode-textBlockQuote-border)">` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 167 | `<p className="text-[13px] m-0">` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 168 | `<strong>Having terminal issues?</strong> Check our{" "}` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 170 | `className="text-(--vscode-textLink-foreground) underline hover:no-underline"` | (번역 필요) |
| webview-ui/src/components/settings/sections/TerminalSettingsSection.tsx | 172 | `rel="noopener noreferrer"` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 39 | `description: "Let Cline run focused subagents in parallel to explore the codebase for you.",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 45 | `label: "Native Tool Call",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 46 | `description: "Use native function calling when available",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 52 | `label: "Parallel Tool Calling",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 53 | `description: "Execute multiple tool calls simultaneously",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 59 | `label: "Strict Plan Mode",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 60 | `description: "Prevents file edits while in Plan mode",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 66 | `label: "Auto Compact",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 67 | `description: "Automatically compress conversation history.",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 73 | `label: "Focus Chain",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 74 | `description: "Maintain context focus across interactions",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 84 | `label: "Background Edit",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 85 | `description: "Allow edits without stealing editor focus",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 92 | `description: "Save progress at key points for easy rollback",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 98 | `label: "Cline Web Tools",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 99 | `description: "Access web browsing and search capabilities",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 106 | `description: "Enables git worktree management for running parallel Cline tasks.",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 115 | `label: "Yolo Mode",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 117 | `"Execute tasks without user's confirmation. Auto-switches from Plan to Act mode and disables the ask question tool. Use with extreme caution.",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 123 | `label: "Double-Check Completion",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 125 | `"Rejects the first completion attempt and asks the model to re-verify its work against the original task requirements before accepting.",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 135 | `description: "Enable lifecycle and tool hooks during task execution.",` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 157 | `<div className="flex items-center justify-between w-full">` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 158 | `<div>{label}</div>` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 168 | `{isRemoteLocked && <i className="codicon codicon-lock text-description text-sm" />}` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 174 | `<div className="flex flex-col items-start justify-between gap-4 py-3 w-full">` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 175 | `<div className="space-y-0.5 flex-1 w-full">` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 178 | `<TooltipTrigger asChild>{checkbox}</TooltipTrigger>` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 187 | `<div className="text-xs text-description">{description}</div>` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 269 | `<div className="mb-5 flex flex-col gap-3">` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 272 | `<div className="text-xs font-medium text-foreground/80 uppercase tracking-wider mb-3">Agent</div>` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 292 | `label="Reminder Interval (1-10)"` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 308 | `<div className="text-xs font-medium text-foreground/80 uppercase tracking-wider mb-3">Editor</div>` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 327 | `<div className="text-xs font-medium uppercase tracking-wider mb-3 text-warning/80">Experimental</div>` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 341 | `remoteTooltip="This setting is managed by your organization's remote configuration"` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 350 | `<div className="text-xs font-medium text-foreground/80 uppercase tracking-wider mb-3">Advanced</div>` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 366 | `<Label className="text-sm font-medium text-foreground">MCP Display Mode</Label>` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 367 | `<p className="text-xs text-muted-foreground">Controls how MCP responses are displayed</p>` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 373 | `<SelectItem value="plain">Plain Text</SelectItem>` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 374 | `<SelectItem value="rich">Rich Display</SelectItem>` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 375 | `<SelectItem value="markdown">Markdown</SelectItem>` | (번역 필요) |
| webview-ui/src/components/settings/sections/ApiConfigurationSection.tsx | 28 | `<div className="rounded-md mb-5">` | (번역 필요) |
| webview-ui/src/components/settings/sections/ApiConfigurationSection.tsx | 29 | `<div className="flex gap-px mb-[10px] -mt-2 border-0 border-b border-solid border-(--vscode-panel-border)">` | (번역 필요) |
| webview-ui/src/components/settings/sections/ApiConfigurationSection.tsx | 78 | `console.error("Failed to update separate models setting:", error)` | (번역 필요) |
| webview-ui/src/components/settings/sections/ApiConfigurationSection.tsx | 83 | `<p className="text-xs mt-[5px] text-(--vscode-descriptionForeground)">` | (번역 필요) |
| webview-ui/src/components/settings/sections/GeneralSettingsSection.tsx | 27 | `<div className="flex items-center gap-2 mb-[5px]">` | (번역 필요) |
| webview-ui/src/components/settings/sections/GeneralSettingsSection.tsx | 38 | `<i className="codicon codicon-lock text-description text-sm" />` | (번역 필요) |
| webview-ui/src/components/settings/sections/GeneralSettingsSection.tsx | 44 | `<p className="text-sm mt-[5px] text-description">` | (번역 필요) |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 13 | `<div className="flex px-4 flex-col gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 14 | `<h2 className="text-lg font-semibold">Cline v{version}</h2>` | (번역 필요) |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 21 | `<h3 className="text-md font-semibold">Community & Support</h3>` | (번역 필요) |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 23 | `<VSCodeLink href="https://x.com/cline">X</VSCodeLink>` | (번역 필요) |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 25 | `<VSCodeLink href="https://discord.gg/cline">Discord</VSCodeLink>` | (번역 필요) |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 27 | `<VSCodeLink href="https://www.reddit.com/r/cline/"> r/cline</VSCodeLink>` | (번역 필요) |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 30 | `<h3 className="text-md font-semibold">Development</h3>` | (번역 필요) |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 32 | `<VSCodeLink href="https://github.com/cline/cline">GitHub</VSCodeLink>` | (번역 필요) |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 34 | `<VSCodeLink href="https://github.com/cline/cline/issues"> Issues</VSCodeLink>` | (번역 필요) |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 42 | `<h3 className="text-md font-semibold">Resources</h3>` | (번역 필요) |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 44 | `<VSCodeLink href="https://docs.cline.bot/">Documentation</VSCodeLink>` | (번역 필요) |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 46 | `<VSCodeLink href="https://cline.bot/">https://cline.bot</VSCodeLink>` | (번역 필요) |
| webview-ui/src/components/settings/sections/DebugSection.tsx | 7 | `onResetState: (resetGlobalState?: boolean) => Promise<void>` | (번역 필요) |
| webview-ui/src/components/settings/sections/DebugSection.tsx | 23 | `<p className="text-xs mt-[5px] text-(--vscode-descriptionForeground)">` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 18 | `<Section>{children}</Section>` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 57 | `className={`w-full rounded-xs ${isLoading ? "animate-pulse" : ""}`}` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 60 | `Refresh {retryIn && retryIn > 0 && <>(Retry in: {retryIn} seconds)</>}` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 74 | `return <span className="text-description italic">Not configured</span>` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 77 | `return value ? <span className="text-green-500">Enabled</span> : <span className="text-description">Disabled</span>` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 80 | `return <span className="font-mono text-xs">{"•".repeat(Math.min(value.length, 20))}</span>` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 82 | `return <span className="font-mono text-xs break-all">{String(value)}</span>` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 88 | `<div className="flex flex-col gap-1 py-1.5 border-b border-vscode-widget-border last:border-b-0">` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 89 | `<span className="text-description text-xs">{label}</span>` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 90 | `<div className="pl-2 overflow-hidden text-right">{displayValue}</div>` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 96 | `<div className="flex justify-between items-center py-1.5 border-b border-vscode-widget-border last:border-b-0 gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 97 | `<span className="text-description text-xs shrink-0">{label}</span>` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 98 | `<span className="text-right overflow-hidden text-ellipsis">{displayValue}</span>` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 105 | `onClick: () => Promise<void>` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 138 | `<div className="flex items-center gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 146 | `{result && <span className={`text-xs ${result.success ? "text-green-500" : "text-red-500"}`}>{result.message}</span>}` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 168 | `throw new Error(response.error \|\| "Test failed")` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 174 | `<h4 className="text-sm font-medium mb-2 flex items-center gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 175 | `<i className="codicon codicon-pulse" />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 178 | `<div className="bg-vscode-textBlockQuote-background rounded p-3 mb-2">` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 180 | `<SettingRow label="Metrics Exporter" value={remoteConfigSettings?.openTelemetryMetricsExporter} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 181 | `<SettingRow label="Logs Exporter" value={remoteConfigSettings?.openTelemetryLogsExporter} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 182 | `<SettingRow label="OTLP Protocol" value={remoteConfigSettings?.openTelemetryOtlpProtocol} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 183 | `<SettingRow label="OTLP Endpoint" value={remoteConfigSettings?.openTelemetryOtlpEndpoint} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 185 | `<SettingRow label="Metrics Endpoint" value={remoteConfigSettings?.openTelemetryOtlpMetricsEndpoint} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 188 | `<SettingRow label="Logs Endpoint" value={remoteConfigSettings?.openTelemetryOtlpLogsEndpoint} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 192 | `label="OTLP Headers"` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 193 | `value={`${Object.keys(remoteConfigSettings.openTelemetryOtlpHeaders).length} header(s)`}` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 198 | `label="Metric Export Interval"` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 203 | `<SettingRow label="OTLP Insecure" value={remoteConfigSettings?.openTelemetryOtlpInsecure} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 206 | `<SettingRow label="Log Batch Size" value={remoteConfigSettings?.openTelemetryLogBatchSize} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 209 | `<SettingRow label="Log Batch Timeout" value={`${remoteConfigSettings.openTelemetryLogBatchTimeout}ms`} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 212 | `<SettingRow label="Log Max Queue Size" value={remoteConfigSettings?.openTelemetryLogMaxQueueSize} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 217 | `<div className="flex gap-2 flex-wrap">` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 222 | `successMessage="Flushed buffers! Please check the output channel for more detailed information"` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 248 | `<i className="codicon codicon-cloud-upload" />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 252 | `<SettingRow label="Storage Type" value={blobStoreConfig.adapterType?.toUpperCase()} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 256 | `{blobStoreConfig.accountId && <SettingRow label="Account ID" value={blobStoreConfig.accountId} />}` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 257 | `<SettingRow isSecret label="Access Key ID" value={blobStoreConfig.accessKeyId} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 258 | `<SettingRow isSecret label="Secret Access Key" value={blobStoreConfig.secretAccessKey} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 259 | `{blobStoreConfig.intervalMs && <SettingRow label="Sync Interval" value={`${blobStoreConfig.intervalMs}ms`} />}` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 260 | `{blobStoreConfig.batchSize && <SettingRow label="Batch Size" value={blobStoreConfig.batchSize} />}` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 261 | `{blobStoreConfig.maxRetries && <SettingRow label="Max Retries" value={blobStoreConfig.maxRetries} />}` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 262 | `{blobStoreConfig.maxQueueSize && <SettingRow label="Max Queue Size" value={blobStoreConfig.maxQueueSize} />}` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 263 | `<SettingRow label="Backfill Enabled" value={blobStoreConfig.backfillEnabled} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 266 | `<TestButton label="Test Upload" onClick={handleTestPromptUploading} />` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 278 | `<div className="flex flex-col justify-center gap-4">` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 279 | `<h3>You have opted out of remote config. Opt back in to apply it and see it here.</h3>` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 292 | `You haven't configured remote config yet. Do so through our{" "}` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 293 | `<VSCodeLink href="https://app.cline.bot/dashboard/organization?tab=settings">dashboard</VSCodeLink>.` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 304 | `<div className="flex flex-col gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/sections/RemoteConfigSection.tsx | 305 | `<p className="text-description text-xs mb-2">` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.spec.tsx | 32 | `it("renders Hooks feature toggle", () => {` | (번역 필요) |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.spec.tsx | 44 | `it("calls updateSetting with hooksEnabled when toggled", () => {` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 35 | `<StatusText>Checking connection...</StatusText>` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 39 | `<CheckIcon className="codicon codicon-check" />` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 40 | `<StatusText style={{ color: "var(--vscode-terminal-ansiGreen)" }}>Connected</StatusText>` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 43 | `<StatusText style={{ color: "var(--vscode-errorForeground)" }}>Not connected</StatusText>` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 76 | `console.error("Error getting detected Chrome path:", error)` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 88 | `console.error("Error testing browser connection:", error)` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 97 | `console.error("Error discovering browser:", error)` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 144 | `console.error("Error relaunching Chrome:", error)` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 147 | `message: `Error relaunching Chrome: ${error.message}`,` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 176 | `margin: "4px 0 0 0px",` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 185 | `<label style={{ fontWeight: "500", display: "block", marginBottom: 5 }}>Viewport size</label>` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 247 | `margin: "0 0 6px 0px",` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 251 | `? "(not detected on your machine)"` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 260 | `manually (<code>--remote-debugging-port=9222</code>) or using the button below. Enter the` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 285 | `{debugMode ? "Launching Browser..." : "Launch Browser with Debug Mode"}` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 296 | `? "rgba(0, 128, 0, 0.1)"` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 297 | `: "rgba(255, 0, 0, 0.1)",` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 329 | `placeholder="e.g., /usr/bin/google-chrome or C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 336 | `margin: "4px 0 0 0",` | (번역 필요) |
| webview-ui/src/components/settings/sections/BrowserSettingsSection.tsx | 352 | `placeholder="e.g., --no-sandbox --disable-setuid-sandbox --disable-dev-shm-usage --disable-gpu --no-first-run --no-zygote"` | (번역 필요) |
| webview-ui/src/components/settings/providers/LiteLlmProvider.tsx | 79 | `<div className="flex items-center gap-2 mb-1">` | (번역 필요) |
| webview-ui/src/components/settings/providers/LiteLlmProvider.tsx | 80 | `<span style={{ fontWeight: 500 }}>Base URL (optional)</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/LiteLlmProvider.tsx | 101 | `placeholder="Default: noop"` | (번역 필요) |
| webview-ui/src/components/settings/providers/LiteLlmProvider.tsx | 105 | `<span style={{ fontWeight: 500 }}>API Key</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/LiteLlmProvider.tsx | 116 | `placeholder="Search or enter a custom model ID..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/LiteLlmProvider.tsx | 120 | `className={`my-2 ${isLoading ? "animate-pulse" : ""}`}` | (번역 필요) |
| webview-ui/src/components/settings/providers/LiteLlmProvider.tsx | 157 | `LiteLLM provides a unified interface to access various LLM providers' models. See their{" "}` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 104 | `setSelectedIndex((prev) => (prev < regionSearchResults.length - 1 ? prev + 1 : prev))` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 112 | `if (selectedIndex >= 0 && selectedIndex < regionSearchResults.length) {` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 160 | `<div className="flex flex-col gap-1">` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 167 | `<VSCodeRadio value="apikey">API Key</VSCodeRadio>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 168 | `<VSCodeRadio value="profile">AWS Profile</VSCodeRadio>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 169 | `<VSCodeRadio value="credentials">AWS Credentials</VSCodeRadio>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 179 | `placeholder="Enter profile name (default if empty)">` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 180 | `<span className="font-medium">AWS Profile Name</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 188 | `placeholder="Enter Bedrock Api Key"` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 190 | `<span className="font-medium">AWS Bedrock Api Key</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 199 | `placeholder="Enter Access Key..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 201 | `<span className="font-medium">AWS Access Key</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 207 | `placeholder="Enter Secret Key..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 209 | `<span className="font-medium">AWS Secret Key</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 215 | `placeholder="Enter Session Token..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 217 | `<span className="font-medium">AWS Session Token</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 227 | `<DropdownContainer className="dropdown-container mb-2.5" zIndex={DROPDOWN_Z_INDEX - 1}>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 228 | `<div className="flex items-center gap-2 mb-1">` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 230 | `<span className="font-medium">AWS Region</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 233 | `<i className="codicon codicon-lock text-description text-sm flex items-center" />` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 257 | `placeholder="Search or enter custom region..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 268 | `aria-label="Clear search"` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 269 | `className="input-icon-button codicon codicon-close"` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 304 | `<span>{region}</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 314 | `<div className="flex flex-col">` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 320 | `<div className="flex items-center gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 340 | `className="mt-0.5 mb-1 text-sm text-description"` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 344 | `placeholder="Enter VPC Endpoint URL (optional)"` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 368 | `<i className="codicon codicon-lock text-description text-sm" />` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 423 | `<p className="mt-1 text-sm text-description">` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 432 | `<span className="font-medium">Model</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 462 | `<VSCodeOption value="">Select a model...</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 465 | `className="whitespace-normal wrap-break-word max-w-full"` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 471 | `<VSCodeOption value="custom">Custom</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 482 | `className="w-full mt-0.5"` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 492 | `placeholder="Enter custom model ID...">` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 493 | `<span className="font-medium">Model ID</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/BedrockProvider.tsx | 496 | `<span className="font-medium">Base Inference Model</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/VSCodeLmProvider.tsx | 32 | `console.error("Failed to fetch VS Code LM models:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/VSCodeLmProvider.tsx | 47 | `<span style={{ fontWeight: 500 }}>Language Model</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/VSCodeLmProvider.tsx | 68 | `? `${vsCodeLmModelSelector.vendor ?? ""}/${vsCodeLmModelSelector.family ?? ""}`` | (번역 필요) |
| webview-ui/src/components/settings/providers/VSCodeLmProvider.tsx | 71 | `<VSCodeOption value="">Select a model...</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/providers/VSCodeLmProvider.tsx | 86 | `<a href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot">Copilot extension</a> and` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 27 | `<div className="min-w-[22px] h-[22px] flex items-center justify-center shrink-0 mt-2">{icon}</div>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 28 | `<div className="flex-1">{children}</div>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 53 | `console.error("OCA login failed:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 61 | `console.error("OCA logout failed:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 82 | `console.error("OCA auth callback subscription error:", err)` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 116 | `login: () => Promise<void>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 145 | `console.error("Failed to refresh Oca models:", err)` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 268 | `<div aria-live="polite" className="flex items-center gap-2 py-2" role="status">` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 270 | `<span className={`text-[13px] [color:var(${VSC_DESCRIPTION_FOREGROUND})]`}>Connecting…</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 275 | `aria-label="Oracle employment"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 299 | `margin: "12px 0",` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 303 | `<p className="text-xs mt-0 text-(--vscode-descriptionForeground)">` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 308 | `rel="noopener noreferrer"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 317 | `<div className="flex flex-col gap-0 font-semibold text-[13px]">` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 318 | `<span>Signed in</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 320 | `<span className="font-semibold opacity-95 mt-2">{ocaUser.email}</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 322 | `<span className="font-semibold opacity-95 mt-2">{ocaUser.uid}</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 324 | `<span className="font-semibold opacity-95 mt-2">Unknown User</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 339 | `label="Custom Base URL (optional)"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 359 | `<div>Failed to refresh models. Check your session or network.</div>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 360 | `<div className="mt-2 flex gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 383 | `viewBox="0 0 36 35"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 387 | `d="M20 13.5991C20 14.672 19.1046 15.5418 18 15.5418C16.8954 15.5418 16 14.672 16 13.5991C16 12.5261 16.8954 11.6563 18 11.6563C19.1046 11.6563 20 12.5261 20 13.5991Z"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 393 | `d="M10 15.5418C11.1046 15.5418 12 14.672 12 13.5991C12 12.5261 11.1046 11.6563 10 11.6563C8.89543 11.6563 8 12.5261 8 13.5991C8 14.672 8.89543 15.5418 10 15.5418Z"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 399 | `d="M28 13.5991C28 14.672 27.1046 15.5418 26 15.5418C24.8954 15.5418 24 14.672 24 13.5991C24 12.5261 24.8954 11.6563 26 11.6563C27.1046 11.6563 28 12.5261 28 13.5991Z"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 406 | `d="M0 0V25.2554H10V34.4L19.4142 25.2554H36V0H0ZM2 23.3127V1.94272H34V23.3127H18.5858L12 29.7099V23.3127H2Z"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 458 | `padding: "8px 14px",` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaProvider.tsx | 460 | `border: "1px solid var(--vscode-button-border, transparent)",` | (번역 필요) |
| webview-ui/src/components/settings/providers/HicapProvider.tsx | 44 | `placeholder="Enter API Key..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/HicapProvider.tsx | 53 | `margin: "10px 0 0 0",` | (번역 필요) |
| webview-ui/src/components/settings/providers/HicapProvider.tsx | 55 | `<span style={{ fontWeight: 500 }}>Hicap API Key</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/HicapProvider.tsx | 66 | `console.error("Failed to open Hicap auth:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/HicapProvider.tsx | 69 | `style={{ margin: "5px 0 0 0" }}>` | (번역 필요) |
| webview-ui/src/components/settings/providers/HicapProvider.tsx | 76 | `<div style={{ margin: "10px 0 0 0" }}>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenRouterProvider.tsx | 19 | `return <span style={{ fontSize: "12px", color: "var(--vscode-descriptionForeground)" }}>Loading...</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenRouterProvider.tsx | 23 | `// Don't show anything if there's an error, no info, or no limit set` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenRouterProvider.tsx | 42 | `title={`Remaining balance: ${formattedBalance}\nLimit: ${formatPrice(keyInfo.limit)}\nUsage: ${formatPrice(keyInfo.usage)}`}>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenRouterProvider.tsx | 70 | `placeholder="Enter API Key..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenRouterProvider.tsx | 74 | `<span style={{ fontWeight: 500 }}>OpenRouter API Key</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenRouterProvider.tsx | 87 | `console.error("Failed to open OpenRouter auth:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenRouterProvider.tsx | 90 | `style={{ margin: "5px 0 0 0" }}>` | (번역 필요) |
| webview-ui/src/components/settings/providers/VertexProvider.tsx | 70 | `placeholder="Enter Project ID..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/VertexProvider.tsx | 72 | `<div className="flex items-center gap-2 mb-1">` | (번역 필요) |
| webview-ui/src/components/settings/providers/VertexProvider.tsx | 73 | `<span style={{ fontWeight: 500 }}>Google Cloud Project ID</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/VertexProvider.tsx | 82 | `className="flex items-center gap-2 mb-1"` | (번역 필요) |
| webview-ui/src/components/settings/providers/VertexProvider.tsx | 85 | `<span className="font-medium">Google Cloud Region</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/VertexProvider.tsx | 95 | `<VSCodeOption value="">Select a region...</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/providers/VertexProvider.tsx | 115 | `{"1) create a Google Cloud account › enable the Vertex AI API › enable the desired Claude models,"}` | (번역 필요) |
| webview-ui/src/components/settings/providers/VertexProvider.tsx | 120 | `{"2) install the Google Cloud CLI › configure Application Default Credentials."}` | (번역 필요) |
| webview-ui/src/components/settings/providers/QwenProvider.tsx | 59 | `<span style={{ fontWeight: 500, marginTop: 5 }}>Alibaba API Line</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAiCodexProvider.tsx | 33 | `console.error("Failed to sign in to OpenAI Codex:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAiCodexProvider.tsx | 41 | `console.error("Failed to sign out of OpenAI Codex:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAiCodexProvider.tsx | 50 | `<span style={{ color: "var(--vscode-descriptionForeground)" }}>Signed in to OpenAI Codex</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAiCodexProvider.tsx | 65 | `<VSCodeButton onClick={handleSignIn}>Sign in to OpenAI Codex</VSCodeButton>` | (번역 필요) |
| webview-ui/src/components/settings/providers/HuggingFaceProvider.tsx | 32 | `placeholder="Enter API Key..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/HuggingFaceProvider.tsx | 35 | `<span style={{ fontWeight: 500 }}>Hugging Face API Key</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/HuggingFaceProvider.tsx | 45 | `<a href="https://huggingface.co/settings/tokens" rel="noopener noreferrer" target="_blank">` | (번역 필요) |
| webview-ui/src/components/settings/providers/NousresearchProvider.tsx | 61 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Claude` | (번역 필요) |
| webview-ui/src/components/settings/providers/DifyProvider.tsx | 40 | `placeholder={"Enter base URL..."}` | (번역 필요) |
| webview-ui/src/components/settings/providers/DifyProvider.tsx | 43 | `<span style={{ fontWeight: 500 }}>Base URL</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/DifyProvider.tsx | 60 | `<strong>Note:</strong> The model selection is handled within your Dify application configuration.` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaModelPicker.tsx | 16 | `onRefresh: () => void \| Promise<void>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaModelPicker.tsx | 148 | `<label className="font-medium text-[12px] mt-[10px] mb-[2px]">Model</label>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaModelPicker.tsx | 149 | `<div className="relative z-100 flex items-center gap-2 mb-1">` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaModelPicker.tsx | 151 | `className="flex-1 text-[12px] min-h-[24px]"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaModelPicker.tsx | 164 | `padding: "4px 8px",` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaModelPicker.tsx | 181 | `background: "var(--vscode-button-background, #0078d4)",` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaModelPicker.tsx | 182 | `color: "var(--vscode-button-foreground, #fff)",` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaModelPicker.tsx | 190 | `<div className="text-[11px] text-(--vscode-descriptionForeground) mt-0 mb-2">` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaModelPicker.tsx | 196 | `<label className="font-medium text-[12px] mt-[10px] mb-[2px]">Reasoning Effort</label>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaModelPicker.tsx | 197 | `<div className="flex items-center gap-2 mb-1">` | (번역 필요) |
| webview-ui/src/components/settings/providers/OcaModelPicker.tsx | 240 | `<div className="fixed top-0 left-0 w-screen h-screen z-2000 [background:rgba(0,0,0,0.25)] flex items-center justify-center">` | (번역 필요) |
| webview-ui/src/components/settings/providers/GeminiProvider.tsx | 43 | `label="Use custom base URL"` | (번역 필요) |
| webview-ui/src/components/settings/providers/GeminiProvider.tsx | 45 | `placeholder="Default: https://generativelanguage.googleapis.com"` | (번역 필요) |
| webview-ui/src/components/settings/providers/ClaudeCodeProvider.tsx | 47 | `placeholder="Default: claude"` | (번역 필요) |
| webview-ui/src/components/settings/providers/ClaudeCodeProvider.tsx | 50 | `<span style={{ fontWeight: 500 }}>Claude Code CLI Path</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 69 | `console.error("Failed to refresh OpenAI models:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 80 | `<div className="flex items-center gap-2 mb-1">` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 81 | `<span style={{ fontWeight: 500 }}>Base URL</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 83 | `<i className="codicon codicon-lock text-description text-sm" />` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 93 | `placeholder={"Enter base URL..."}` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 110 | `providerName="OpenAI Compatible"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 118 | `placeholder={"Enter Model ID..."}` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 120 | `<span style={{ fontWeight: 500 }}>Model ID</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 132 | `<div className="flex items-center gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 133 | `<span style={{ fontWeight: 500 }}>Custom Headers</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 148 | `const newKey = `header${headerCount + 1}`` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 172 | `placeholder="Header name"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 184 | `placeholder="Header value"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 209 | `label="Set Azure API version"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 211 | `placeholder={`Default: ${azureOpenAiDefaultApiVersion}`}` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 215 | `<TooltipContent>This setting is managed by your organization's remote configuration</TooltipContent>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 240 | `margin: "10px 0",` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 245 | `className={`codicon ${modelConfigurationSelected ? "codicon-chevron-down" : "codicon-chevron-right"}`}` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 309 | `<span style={{ fontWeight: 500 }}>Context Window Size</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 328 | `<span style={{ fontWeight: 500 }}>Max Output Tokens</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 349 | `<span style={{ fontWeight: 500 }}>Input Price / 1M tokens</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 368 | `<span style={{ fontWeight: 500 }}>Output Price / 1M tokens</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 388 | `<span style={{ fontWeight: 500 }}>Temperature</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OpenAICompatible.tsx | 401 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Claude models.` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 83 | `console.error("Error fetching SAP AI Core models:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 84 | `setModelError("Failed to fetch models. Please check your configuration.")` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 130 | `<div className="flex flex-col gap-1.5">` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 134 | `placeholder="Enter AI Core Client Id..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 137 | `<span className="font-medium">AI Core Client Id</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 140 | `<p className="text-xs text-(--vscode-descriptionForeground)">` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 148 | `placeholder="Enter AI Core Client Secret..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 151 | `<span className="font-medium">AI Core Client Secret</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 162 | `placeholder="Enter AI Core Base URL..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 164 | `<span className="font-medium">AI Core Base URL</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 170 | `placeholder="Enter AI Core Auth URL..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 172 | `<span className="font-medium">AI Core Auth URL</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 178 | `placeholder="Enter AI Core Resource Group..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 180 | `<span className="font-medium">AI Core Resource Group</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 183 | `<p className="text-xs mt-1.5 text-(--vscode-descriptionForeground)">` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 193 | `<div className="flex flex-col gap-2.5 mt-[15px]">` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 194 | `<div className="flex items-center gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 196 | `aria-label="Orchestration Mode"` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 200 | `<span className="font-medium">Orchestration Mode</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 216 | `<div className="text-xs text-(--vscode-descriptionForeground)">Loading models...</div>` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 218 | `<div className="text-xs text-(--vscode-errorForeground)">` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 221 | `className="ml-2 text-[11px] px-1.5 py-0.5 bg-(--vscode-button-background) text-(--vscode-button-foreground) border-none rounded-sm cursor-pointer"` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 229 | `<div className="text-xs text-(--vscode-errorForeground) mb-2">` | (번역 필요) |
| webview-ui/src/components/settings/providers/SapAiCoreProvider.tsx | 236 | `placeholder="Select a model..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/MiniMaxProvider.tsx | 35 | `<span style={{ fontWeight: 500, marginTop: 5 }}>MiniMax Entrypoint</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/MiniMaxProvider.tsx | 45 | `<VSCodeOption value="international">api.minimax.io</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/providers/MiniMaxProvider.tsx | 46 | `<VSCodeOption value="china">api.minimaxi.com</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/providers/MiniMaxProvider.tsx | 55 | `Select the API endpoint according to your region: <code>api.minimaxi.com</code> for China, or{" "}` | (번역 필요) |
| webview-ui/src/components/settings/providers/MiniMaxProvider.tsx | 56 | `<code>api.minimax.io</code> for all other locations.` | (번역 필요) |
| webview-ui/src/components/settings/providers/RequestyProvider.tsx | 53 | `console.error("Failed to open Requesty auth:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/RequestyProvider.tsx | 56 | `style={{ margin: "5px 0 0 0" }}>` | (번역 필요) |
| webview-ui/src/components/settings/providers/RequestyProvider.tsx | 82 | `placeholder="Custom base URL"` | (번역 필요) |
| webview-ui/src/components/settings/providers/XaiProvider.tsx | 40 | `providerName="X AI"` | (번역 필요) |
| webview-ui/src/components/settings/providers/XaiProvider.tsx | 50 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Claude` | (번역 필요) |
| webview-ui/src/components/settings/providers/XaiProvider.tsx | 93 | `<span style={{}}>Reasoning Effort</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/XaiProvider.tsx | 107 | `<VSCodeOption value="low">low</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/providers/XaiProvider.tsx | 108 | `<VSCodeOption value="high">high</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/providers/TogetherProvider.tsx | 38 | `placeholder={"Enter Model ID..."}` | (번역 필요) |
| webview-ui/src/components/settings/providers/TogetherProvider.tsx | 40 | `<span style={{ fontWeight: 500 }}>Model ID</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/TogetherProvider.tsx | 49 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Claude models.` | (번역 필요) |
| webview-ui/src/components/settings/providers/AnthropicProvider.tsx | 70 | `label="Use custom base URL"` | (번역 필요) |
| webview-ui/src/components/settings/providers/AnthropicProvider.tsx | 72 | `placeholder="Default: https://api.anthropic.com"` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 68 | `console.error("Failed to parse LM Studio models:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 96 | `<div className="flex flex-col gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 99 | `label="Use custom base URL"` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 101 | `placeholder="Default: http://localhost:1234"` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 104 | `<div className="font-semibold">Model</div>` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 108 | `className="w-full mb-3"` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 141 | `placeholder={"e.g. meta-llama-3.1-8b-instruct"}` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 146 | `<div className="font-semibold">Context Window</div>` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 148 | `className="w-full pointer-events-none"` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 150 | `title="Not editable - the value is returned by the connected endpoint"` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 156 | `<div className="text-xs text-description">` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 165 | `feature with <code>lms server start</code> to use it with this extension.{" "}` | (번역 필요) |
| webview-ui/src/components/settings/providers/LMStudioProvider.tsx | 167 | `<span className="font-semibold">Note:</span> Cline uses complex prompts and works best with Claude models.` | (번역 필요) |
| webview-ui/src/components/settings/providers/AihubmixProvider.tsx | 32 | `const ensureSelectedPresent = (base: Record<string, ModelInfo>): Record<string, ModelInfo> => {` | (번역 필요) |
| webview-ui/src/components/settings/providers/AihubmixProvider.tsx | 75 | `console.error("Failed to fetch AIhubmix models:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/AihubmixProvider.tsx | 84 | `helpText="Now request 10% discount!"` | (번역 필요) |
| webview-ui/src/components/settings/providers/MoonshotProvider.tsx | 34 | `<span style={{ fontWeight: 500, marginTop: 5 }}>Moonshot Entrypoint</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/MoonshotProvider.tsx | 56 | `<VSCodeOption value="international">api.moonshot.ai</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/providers/MoonshotProvider.tsx | 57 | `<VSCodeOption value="china">api.moonshot.cn</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/providers/MoonshotProvider.tsx | 61 | `helpText="This key is stored locally and only used to make API requests from this extension."` | (번역 필요) |
| webview-ui/src/components/settings/providers/VercelAIGatewayProvider.tsx | 30 | `placeholder="Enter API Key..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/VercelAIGatewayProvider.tsx | 33 | `<span style={{ fontWeight: 500 }}>Vercel AI Gateway API Key</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/AskSageProvider.tsx | 39 | `console.error("Failed to fetch AskSage models, falling back to default list.")` | (번역 필요) |
| webview-ui/src/components/settings/providers/AskSageProvider.tsx | 62 | `console.error("Error fetching AskSage models:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/AskSageProvider.tsx | 73 | `helpText="This key is stored locally and only used to make API requests from this extension."` | (번역 필요) |
| webview-ui/src/components/settings/providers/AskSageProvider.tsx | 82 | `placeholder="Enter AskSage API URL..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/AskSageProvider.tsx | 85 | `<span style={{ fontWeight: 500 }}>AskSage API URL</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/ZAiProvider.tsx | 41 | `<span style={{ fontWeight: 500, marginTop: 5 }}>Z AI Entrypoint</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/ZAiProvider.tsx | 51 | `<VSCodeOption value="international">api.z.ai</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/providers/ZAiProvider.tsx | 52 | `<VSCodeOption value="china">open.bigmodel.cn</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/providers/ZAiProvider.tsx | 67 | `providerName="Z AI"` | (번역 필요) |
| webview-ui/src/components/settings/providers/QwenCodeProvider.tsx | 31 | `<h3 style={{ color: "var(--vscode-foreground)", margin: "8px 0" }}>Qwen Code API Configuration</h3>` | (번역 필요) |
| webview-ui/src/components/settings/providers/NebiusProvider.tsx | 31 | `helpText="This key is stored locally and only used to make API requests from this extension. (Note: Cline uses complex prompts and works best with Claude models. Less capable models may not work as expected.)"` | (번역 필요) |
| webview-ui/src/components/settings/providers/HuaweiCloudMaasProvider.tsx | 27 | `providerName="Huawei Cloud MaaS"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 48 | `console.error("Failed to fetch Ollama models:", error)` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 60 | `<div className="flex flex-col gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 63 | `label="Use custom base URL"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 65 | `placeholder="Default: http://localhost:11434"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 70 | `helpText="Optional API key for authenticated Ollama instances or cloud services. Leave empty for local installations."` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 73 | `placeholder="Enter API Key (optional)..."` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 80 | `<span className="font-semibold">Model</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 87 | `placeholder={ollamaModels.length > 0 ? "Search and select a model..." : "e.g. llama3.1"}` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 93 | `<p className="text-sm mt-1 text-description italic">` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 102 | `placeholder={"e.g. 32768"}` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 104 | `<span className="font-semibold">Model Context Window</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 118 | `placeholder="Default: 30000 (30 seconds)"` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 120 | `<span className="font-semibold">Request Timeout (ms)</span>` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 122 | `<p className="text-xs mt-0 text-description">` | (번역 필요) |
| webview-ui/src/components/settings/providers/OllamaProvider.tsx | 143 | `(<span style={{ fontWeight: 500 }}>Note:</span> Cline uses complex prompts and works best with Claude models.` | (번역 필요) |
| webview-ui/src/components/settings/ModelDescriptionMarkdown.tsx | 35 | `<div className="inline-block mb-2 description line-clamp-3" key={key}>` | (번역 필요) |
| webview-ui/src/components/settings/ModelDescriptionMarkdown.tsx | 36 | `<div className="relative wrap-anywhere overflow-y-hidden">` | (번역 필요) |
| webview-ui/src/components/settings/ModelDescriptionMarkdown.tsx | 38 | `className={cn("overflow-hidden text-sm line-clamp-3", {` | (번역 필요) |
| webview-ui/src/components/settings/ModelDescriptionMarkdown.tsx | 46 | `<div className="absolute bottom-0 right-0 flex items-center">` | (번역 필요) |
| webview-ui/src/components/settings/ModelDescriptionMarkdown.tsx | 47 | `<div className="w-10 h-5 bg-linear-to-r from-transparent to-sidebar-background" />` | (번역 필요) |
| webview-ui/src/components/settings/ModelDescriptionMarkdown.tsx | 49 | `className={cn("bg-sidebar-background p-0 m-0 text-sm cursor-pointer", {` | (번역 필요) |
| webview-ui/src/components/settings/ModelDescriptionMarkdown.tsx | 54 | `{isExpanded ? "See less" : "See more"}` | (번역 필요) |
| webview-ui/src/components/settings/FeaturedModelCard.tsx | 57 | `<ModelName>{modelId}</ModelName>` | (번역 필요) |
| webview-ui/src/components/settings/FeaturedModelCard.tsx | 58 | `<Label>{label}</Label>` | (번역 필요) |
| webview-ui/src/components/settings/FeaturedModelCard.tsx | 60 | `<Description>{description}</Description>` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 64 | `console.error("Failed to refresh Groq models:", err)` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 139 | `setSelectedIndex((prev) => (prev < modelSearchResults.length - 1 ? prev + 1 : prev))` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 147 | `if (selectedIndex >= 0 && selectedIndex < modelSearchResults.length) {` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 193 | `<div className="flex flex-col">` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 195 | `<span className="font-medium">Model</span>` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 197 | `<div className="relative w-full" ref={dropdownRef}>` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 206 | `placeholder="Search and select a model..."` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 216 | `aria-label="Clear search"` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 217 | `className="input-icon-button codicon codicon-close flex justify-center items-center h-full"` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 228 | `className="absolute top-[calc(100%-3px)] left-0 w-[calc(100%-2px)] max-h-[200px] overflow-y-auto border border-(--vscode-list-activeSelectionBackground) rounded-b-[3px]"` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 261 | `<p className="text-xs mt-0 text-(--vscode-descriptionForeground)">` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 263 | `<VSCodeLink className="inline text-inherit" href="https://console.groq.com/docs/models">` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 266 | `If you're unsure which model to choose, Cline works best with{" "}` | (번역 필요) |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 267 | `<VSCodeLink className="inline text-inherit" onClick={() => handleModelChange("llama-3.3-70b-versatile")}>` | (번역 필요) |
| webview-ui/src/components/settings/HicapModelPicker.tsx | 19 | `className={`cursor-pointer ${isFavorite ? "text-[var(--vscode-terminal-ansiBlue)]" : "text-[var(--vscode-descriptionForeground)]"} ml-[8px] text-[16px] flex items-center justify-center select-none`}` | (번역 필요) |
| webview-ui/src/components/settings/HicapModelPicker.tsx | 128 | `setSelectedIndex((prev) => (prev < modelSearchResults.length - 1 ? prev + 1 : prev))` | (번역 필요) |
| webview-ui/src/components/settings/HicapModelPicker.tsx | 136 | `if (selectedIndex >= 0 && selectedIndex < modelSearchResults.length) {` | (번역 필요) |
| webview-ui/src/components/settings/HicapModelPicker.tsx | 166 | `<div className="flex flex-col">` | (번역 필요) |
| webview-ui/src/components/settings/HicapModelPicker.tsx | 168 | `<span className="font-medium">Model ID</span>` | (번역 필요) |
| webview-ui/src/components/settings/HicapModelPicker.tsx | 171 | `<div className="relative w-full" ref={dropdownRef}>` | (번역 필요) |
| webview-ui/src/components/settings/HicapModelPicker.tsx | 173 | `className="w-full relative"` | (번역 필요) |
| webview-ui/src/components/settings/HicapModelPicker.tsx | 182 | `placeholder="Search and select a model..."` | (번역 필요) |
| webview-ui/src/components/settings/HicapModelPicker.tsx | 188 | `aria-label="Clear search"` | (번역 필요) |
| webview-ui/src/components/settings/HicapModelPicker.tsx | 189 | `className="flex justify-center items-center h-full input-icon-button codicon codicon-close"` | (번역 필요) |
| webview-ui/src/components/settings/HicapModelPicker.tsx | 230 | `).catch((error) => console.error("Failed to toggle favorite model:", error))` | (번역 필요) |
| webview-ui/src/components/settings/utils/settingsHandlers.ts | 21 | `throw new Error(`Invalid MCP display mode value: ${value}`)` | (번역 필요) |
| webview-ui/src/components/settings/utils/settingsHandlers.ts | 40 | `console.error(`Failed to update setting ${field}:`, error)` | (번역 필요) |
| webview-ui/src/components/settings/utils/pricingUtils.ts | 67 | `if (value === "" \|\| value === ".") {` | (번역 필요) |
| webview-ui/src/components/settings/utils/__tests__/pricingUtils.test.ts | 8 | `it("should parse valid decimal numbers", () => {` | (번역 필요) |
| webview-ui/src/components/settings/utils/__tests__/pricingUtils.test.ts | 15 | `it("should parse decimals starting with a dot", () => {` | (번역 필요) |
| webview-ui/src/components/settings/utils/__tests__/pricingUtils.test.ts | 21 | `it("should return default for empty string", () => {` | (번역 필요) |
| webview-ui/src/components/settings/utils/__tests__/pricingUtils.test.ts | 26 | `it("should return default for just a dot", () => {` | (번역 필요) |
| webview-ui/src/components/settings/utils/__tests__/pricingUtils.test.ts | 31 | `it("should return default for invalid input", () => {` | (번역 필요) |
| webview-ui/src/components/settings/utils/__tests__/pricingUtils.test.ts | 37 | `it("should handle trailing zeros correctly", () => {` | (번역 필요) |
| webview-ui/src/components/settings/utils/__tests__/pricingUtils.test.ts | 43 | `it("should handle numbers with trailing dot", () => {` | (번역 필요) |
| webview-ui/src/components/settings/utils/__tests__/pricingUtils.test.ts | 49 | `it("should use the provided default value", () => {` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 86 | `dynamicModels: { liteLlmModels?: Record<string, ModelInfo>; basetenModels?: Record<string, ModelInfo> } = {},` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 402 | `description: "Baseten model",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 433 | `description: "Dify workflow - model selection is configured in your Dify application",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 652 | `* This is used when the "Use different models for Plan and Act modes" toggle is unchecked` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 657 | `handleFieldsChange: (updates: Partial<ApiConfiguration>) => Promise<void>,` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 859 | `helpText: "Start Baseten and load a model to begin",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 866 | `helpText: "Start LM Studio and load a model to begin",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 873 | `helpText: "Run `ollama serve` and pull a model",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 880 | `helpText: "Add your LiteLLM proxy URL in settings",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 887 | `helpText: "Add your OpenAI API key and endpoint",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 893 | `helpText: "Select a VS Code language model from settings",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 900 | `helpText: "Add your Requesty API key in settings",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 907 | `helpText: "Add your Together AI API key in settings",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 913 | `helpText: "Configure your Dify workflow URL and API key",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 919 | `helpText: "Add your HiCap API key in settings",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 925 | `helpText: "Configure your OCA endpoint in settings",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 932 | `helpText: "Add your AIHubMix API key in settings",` | (번역 필요) |
| webview-ui/src/components/settings/utils/providerUtils.ts | 938 | `helpText: "Configure this provider in model settings",` | (번역 필요) |
| webview-ui/src/components/settings/ReasoningEffortSelector.tsx | 18 | `label = "Reasoning Effort",` | (번역 필요) |
| webview-ui/src/components/settings/ReasoningEffortSelector.tsx | 19 | `description = "Higher effort improves depth, but uses more tokens.",` | (번역 필요) |
| webview-ui/src/components/settings/ReasoningEffortSelector.tsx | 32 | `<Label className="text-xs font-medium">{label}</Label>` | (번역 필요) |
| webview-ui/src/components/settings/ReasoningEffortSelector.tsx | 38 | `<SelectTrigger className="w-full mt-1">` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 52 | `tooltipText: "API Configuration",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 53 | `headerText: "API Configuration",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 59 | `tooltipText: "Feature Settings",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 60 | `headerText: "Feature Settings",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 66 | `tooltipText: "Browser Settings",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 67 | `headerText: "Browser Settings",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 73 | `tooltipText: "Terminal Settings",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 74 | `headerText: "Terminal Settings",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 80 | `tooltipText: "General Settings",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 81 | `headerText: "General Settings",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 87 | `tooltipText: "Remotely configured fields",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 88 | `headerText: "Remote Config",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 96 | `tooltipText: "About Cline",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 104 | `tooltipText: "Debug Tools",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 125 | `<div className="flex items-center gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 127 | `<div>{tab.headerText}</div>` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 185 | `element.style.transition = "background-color 0.5s ease"` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 201 | `console.error("Failed to reset state:", error)` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 216 | `<TabTrigger className="flex justify-baseline" data-testid={`tab-${tab.id}`} key={tab.id} value={tab.id}>` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 221 | `"whitespace-nowrap overflow-hidden h-12 sm:py-3 box-border flex items-center border-l-2 border-transparent text-foreground opacity-70 bg-transparent hover:bg-list-hover p-4 cursor-pointer gap-2",` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 223 | `"opacity-100 border-l-2 border-l-foreground border-t-0 border-r-0 border-b-0 bg-selection":` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 227 | `<tab.icon className="w-4 h-4" />` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 228 | `<span className="hidden sm:block">{tab.name}</span>` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 231 | `<TooltipContent side="right">{tab.tooltipText}</TooltipContent>` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 263 | `<div className="flex flex-1 overflow-hidden">` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 265 | `className="shrink-0 flex flex-col overflow-y-auto border-r border-sidebar-background"` | (번역 필요) |
| webview-ui/src/components/settings/SettingsView.tsx | 271 | `<TabContent className="flex-1 overflow-auto">{ActiveContent}</TabContent>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 15 | `<label className="block mb-1 text-base font-medium" htmlFor="preferred-language-dropdown">` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 25 | `<VSCodeOption value="English">English</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 26 | `<VSCodeOption value="Arabic - العربية">Arabic - العربية</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 27 | `<VSCodeOption value="Portuguese - Português (Brasil)">Portuguese - Português (Brasil)</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 28 | `<VSCodeOption value="Czech - Čeština">Czech - Čeština</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 29 | `<VSCodeOption value="French - Français">French - Français</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 30 | `<VSCodeOption value="German - Deutsch">German - Deutsch</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 31 | `<VSCodeOption value="Hindi - हिन्दी">Hindi - हिन्दी</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 32 | `<VSCodeOption value="Hungarian - Magyar">Hungarian - Magyar</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 33 | `<VSCodeOption value="Italian - Italiano">Italian - Italiano</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 34 | `<VSCodeOption value="Japanese - 日本語">Japanese - 日本語</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 35 | `<VSCodeOption value="Korean - 한국어">Korean - 한국어</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 36 | `<VSCodeOption value="Polish - Polski">Polish - Polski</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 37 | `<VSCodeOption value="Portuguese - Português (Portugal)">Portuguese - Português (Portugal)</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 38 | `<VSCodeOption value="Russian - Русский">Russian - Русский</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 39 | `<VSCodeOption value="Simplified Chinese - 简体中文">Simplified Chinese - 简体中文</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 40 | `<VSCodeOption value="Spanish - Español">Spanish - Español</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 41 | `<VSCodeOption value="Traditional Chinese - 繁體中文">Traditional Chinese - 繁體中文</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 42 | `<VSCodeOption value="Turkish - Türkçe">Turkish - Türkçe</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 44 | `<p className="text-sm text-description mt-1">The language that Cline should use for communication.</p>` | (번역 필요) |
| webview-ui/src/components/settings/Section.tsx | 6 | `<div className={`flex flex-col gap-3 pl-[16px] pr-[12px] py-2 ${className \|\| ""}`} {...props} />` | (번역 필요) |
| webview-ui/src/components/settings/SapAiCoreModelPicker.tsx | 29 | `placeholder = "Select a model...",` | (번역 필요) |
| webview-ui/src/components/settings/SapAiCoreModelPicker.tsx | 164 | `<span className="font-medium">Model</span>` | (번역 필요) |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 81 | `description: model.description \|\| (fallbackLabel === "FREE" ? "Free model" : "Recommended model"),` | (번역 필요) |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 140 | `console.error("Failed to refresh Cline recommended models:", error)` | (번역 필요) |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 302 | `setSelectedIndex((prev) => (prev < modelSearchResults.length - 1 ? prev + 1 : prev))` | (번역 필요) |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 310 | `if (selectedIndex >= 0 && selectedIndex < modelSearchResults.length) {` | (번역 필요) |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 387 | `<span style={{ fontWeight: 500 }}>Model</span>` | (번역 필요) |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 448 | `placeholder="Search and select a model..."` | (번역 필요) |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 458 | `aria-label="Clear search"` | (번역 필요) |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 459 | `className="input-icon-button codicon codicon-close"` | (번역 필요) |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 497 | `).catch((error) => console.error("Failed to toggle favorite model:", error))` | (번역 필요) |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 563 | `works best with <strong>anthropic/claude-sonnet-4.5</strong>.` | (번역 필요) |
| webview-ui/src/components/settings/UseCustomPromptCheckbox.tsx | 27 | `<div className="text-xs text-description">` | (번역 필요) |
| webview-ui/src/components/settings/UseCustomPromptCheckbox.tsx | 29 | `<div className="text-error flex align-middle">` | (번역 필요) |
| webview-ui/src/components/settings/UseCustomPromptCheckbox.tsx | 30 | `<i className="codicon codicon-x" />` | (번역 필요) |
| webview-ui/src/components/settings/SectionHeader.tsx | 11 | `<div className={cn("text-foreground px-5 py-3", className)} {...props}>` | (번역 필요) |
| webview-ui/src/components/settings/SectionHeader.tsx | 12 | `<h2 className="m-0 text-base">{children}</h2>` | (번역 필요) |
| webview-ui/src/components/settings/SectionHeader.tsx | 13 | `{description && <p className="text-description text-sm mt-2 mb-0">{description}</p>}` | (번역 필요) |
| webview-ui/src/components/settings/common/ContextWindowSwitcher.tsx | 25 | `linkText: "Switch to 1M context window model",` | (번역 필요) |
| webview-ui/src/components/settings/common/ContextWindowSwitcher.tsx | 31 | `linkText: "Switch to 200K context window model",` | (번역 필요) |
| webview-ui/src/components/settings/common/ApiKeyField.tsx | 24 | `placeholder = "Enter API Key...",` | (번역 필요) |
| webview-ui/src/components/settings/common/ApiKeyField.tsx | 38 | `<span style={{ fontWeight: 500 }}>{providerName} API Key</span>` | (번역 필요) |
| webview-ui/src/components/settings/common/ApiKeyField.tsx | 46 | `{helpText \|\| "This key is stored locally and only used to make API requests from this extension."}` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelAutocomplete.tsx | 25 | `placeholder = "Search and select a model...",` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelAutocomplete.tsx | 101 | `setSelectedIndex((prev) => (prev < modelSearchResults.length - 1 ? prev + 1 : prev))` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelAutocomplete.tsx | 109 | `if (selectedIndex >= 0 && selectedIndex < modelSearchResults.length) {` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelAutocomplete.tsx | 157 | `<span style={{ fontWeight: 500 }}>{label}</span>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelAutocomplete.tsx | 192 | `aria-label="Clear search"` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelAutocomplete.tsx | 193 | `className="input-icon-button codicon codicon-close"` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelAutocomplete.tsx | 210 | `aria-label="Model suggestions"` | (번역 필요) |
| webview-ui/src/components/settings/common/BaseUrlField.tsx | 24 | `label = "Use custom base URL",` | (번역 필요) |
| webview-ui/src/components/settings/common/BaseUrlField.tsx | 25 | `placeholder = "Default: https://api.example.com",` | (번역 필요) |
| webview-ui/src/components/settings/common/BaseUrlField.tsx | 42 | `<div className="flex items-center gap-2">` | (번역 필요) |
| webview-ui/src/components/settings/common/BaseUrlField.tsx | 46 | `{showLockIcon && <i className="codicon codicon-lock text-(--vscode-descriptionForeground) text-sm" />}` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelSelector.tsx | 41 | `In our case, when the user switches between providers, we recalculate the selectedModelId depending on the provider, the default model for that provider, and a modelId that the user may have selected. Unfortunately, the VSCodeDropdown component wouldn't select this calculated value, and would default to the first "Select a model..." option instead, which makes it seem like the model was cleared out when it wasn't.` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelSelector.tsx | 53 | `<span className="font-medium">{label}</span>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelSelector.tsx | 56 | `<VSCodeOption value="">Select a model...</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelSelector.tsx | 58 | `<VSCodeOption className="break-words whitespace-normal max-w-full" key={modelId} value={modelId}>` | (번역 필요) |
| webview-ui/src/components/settings/common/ErrorMessage.tsx | 18 | `margin: "-10px 0 4px 0",` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 214 | `<InfoLabel>Context: </InfoLabel>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 215 | `<InfoValue>{formatCompactContext(modelInfo.contextWindow)}</InfoValue>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 220 | `<InfoLabel>Input: </InfoLabel>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 221 | `<InfoValue>{formatCompactPrice(modelInfo.inputPrice)}</InfoValue>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 226 | `<InfoLabel>Output: </InfoLabel>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 245 | `<AdvancedLabel>Images</AdvancedLabel>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 246 | `<AdvancedValue>{hasImages ? "Yes" : "No"}</AdvancedValue>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 249 | `<AdvancedLabel>Browser</AdvancedLabel>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 250 | `<AdvancedValue>{hasBrowser ? "Yes" : "No"}</AdvancedValue>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 254 | `<AdvancedLabel>Prompt Caching</AdvancedLabel>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 255 | `<AdvancedValue>{hasCaching ? "Yes" : "No"}</AdvancedValue>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 264 | `<AdvancedLabel>Cache Reads</AdvancedLabel>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 265 | `<AdvancedValue>{formatCompactPrice(modelInfo.cacheReadsPrice)}</AdvancedValue>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 270 | `<AdvancedLabel>Cache Writes</AdvancedLabel>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 271 | `<AdvancedValue>{formatCompactPrice(modelInfo.cacheWritesPrice)}</AdvancedValue>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 280 | `<div style={{ fontWeight: 500, marginBottom: 4 }}>Tiered Pricing:</div>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 284 | `<span style={{ fontWeight: 500 }}>Input:</span>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 289 | `<span style={{ fontWeight: 500 }}>Output:</span>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 301 | `<ProviderRoutingLabel>Provider Routing</ProviderRoutingLabel>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 306 | `<VSCodeOption value="">Default</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 307 | `<VSCodeOption value="price">Price</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 308 | `<VSCodeOption value="throughput">Throughput</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 309 | `<VSCodeOption value="latency">Latency</VSCodeOption>` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 319 | `"Load balance across providers (AWS, Google Vertex, etc.), prioritizing price while considering uptime"}` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 320 | `{providerSorting === "price" && "Sort by price, prioritizing the lowest cost provider"}` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 322 | `"Sort by throughput, prioritizing highest throughput (may increase cost)"}` | (번역 필요) |
| webview-ui/src/components/settings/common/ModelInfoView.tsx | 323 | `{providerSorting === "latency" && "Sort by response time, prioritizing lowest latency"}` | (번역 필요) |
| webview-ui/src/components/settings/common/RemotelyConfiguredInputWrapper.tsx | 6 | `<TooltipContent hidden={hidden}>This setting is managed by your organization's remote configuration</TooltipContent>` | (번역 필요) |
| webview-ui/src/components/settings/common/RemotelyConfiguredInputWrapper.tsx | 7 | `<TooltipTrigger>{children}</TooltipTrigger>` | (번역 필요) |
| webview-ui/src/components/settings/common/RemotelyConfiguredInputWrapper.tsx | 12 | `export const LockIcon = () => <i className="codicon codicon-lock text-description text-sm" />` | (번역 필요) |
| webview-ui/src/components/settings/ClineAccountInfoCard.tsx | 18 | `.catch((err) => console.error("Failed to get login URL:", err))` | (번역 필요) |
| webview-ui/src/components/settings/ClineAccountInfoCard.tsx | 39 | `<span className="ml-1 animate-spin">` | (번역 필요) |
| webview-ui/src/components/settings/ClineAccountInfoCard.tsx | 40 | `<span className="codicon codicon-refresh"></span>` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 36 | `describe("ApiOptions Component", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 49 | `it("renders Requesty API Key input", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 55 | `const apiKeyInput = screen.getByPlaceholderText("Enter API Key...")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 59 | `it("renders Requesty Model ID input", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 65 | `const modelIdInput = screen.getByPlaceholderText("Search and select a model...")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 83 | `it("renders Together API Key input", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 93 | `it("renders Together Model ID input", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 99 | `const modelIdInput = screen.getByPlaceholderText("Enter Model ID...")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 123 | `it("renders Fireworks API Key input", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 133 | `it("renders Fireworks Model Select", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 158 | `it("renders OpenAI Supports Images input", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 164 | `fireEvent.click(screen.getByText("Model Configuration"))` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 165 | `const apiKeyInput = screen.getByText("Supports Images")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 169 | `it("renders OpenAI Context Window Size input", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 176 | `const orgIdInput = screen.getByText("Context Window Size")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 180 | `it("renders OpenAI Max Output Tokens input", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 187 | `const modelInput = screen.getByText("Max Output Tokens")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 207 | `it("renders Nebius API Key input", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/APIOptions.spec.tsx | 217 | `it("renders Nebius Model ID select with a default model", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 21 | `describe("OllamaModelPicker Component", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 32 | `it("renders the model search input", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 42 | `const modelSearchInput = screen.getByPlaceholderText("Search and select a model...")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 47 | `it("renders with custom placeholder", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 53 | `placeholder="Select an Ollama model..."` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 58 | `const modelSearchInput = screen.getByPlaceholderText("Select an Ollama model...")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 62 | `it("shows dropdown when input is focused", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 81 | `it("filters models when searching", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 106 | `it("calls onModelChange when a model is selected", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 132 | `it("clears input when clear button is clicked", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 144 | `const clearButton = screen.getByLabelText("Clear search")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 151 | `it("updates search term when selectedModelId changes externally", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 181 | `it("handles keyboard navigation in dropdown", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 208 | `it("closes dropdown when Escape key is pressed", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/OllamaModelPicker.spec.tsx | 233 | `it("handles empty models array", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 16 | `deploymentId: `deployment-${index + 1}`,` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 69 | `describe("SapAiCoreModelPicker Component", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 77 | `it("renders the model dropdown with correct label", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 96 | `it("renders with default placeholder", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 103 | `const placeholderOption = screen.getByText("Select a model...")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 107 | `it("renders with custom placeholder", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 112 | `placeholder="Choose SAP AI Core model..."` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 119 | `const placeholderOption = screen.getByText("Choose SAP AI Core model...")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 123 | `it("shows deployed models section when deployed models exist", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 135 | `const deployedHeader = screen.getByText("── Deployed Models ──")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 145 | `it("shows not deployed models section when supported but not deployed models exist", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 157 | `const notDeployedHeader = screen.getByText("── Not Deployed Models ──")` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 167 | `it("correctly categorizes models into deployed and not deployed", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 187 | `it("calls onModelChange when a model is selected", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 209 | `it("handles selection of not deployed models", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 230 | `it("updates selected value when selectedModelId prop changes", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 258 | `it("handles empty deployed models array", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 266 | `expect(screen.queryByText("── Deployed Models ──")).not.toBeInTheDocument()` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 279 | `it("handles case where all supported models are deployed", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 297 | `expect(screen.queryByText("── Not Deployed Models ──")).not.toBeInTheDocument()` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 306 | `it("handles models that are deployed but not in supported list", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 326 | `it("maintains correct dropdown structure with sections", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 348 | `it("handles model selection with empty string", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 365 | `expect(screen.getByText("Select a model...")).toBeInTheDocument()` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 368 | `it("handles orchestration mode correctly", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 391 | `it("should auto-set deployment ID when model is selected but deployment ID is missing", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 409 | `it("should update deployment ID when model is selected but deployment ID is stale", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 427 | `it("should clear deployment ID when deployments change and selected model no longer has deployment", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 445 | `it("should handle switching from credentials with deployments to credentials without deployments", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 476 | `it("should handle switching between different credential sets with different available deployments", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 508 | `it("should ensure model replacement keeps the model changed correctly", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 539 | `it("should handle model replacement from deployed to undeployed model", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 570 | `it("should handle model replacement from undeployed to deployed model", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 601 | `it("should handle complex credential switching scenario", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 632 | `it("should not trigger changes when deployments array is empty (loading state)", () => {` | (번역 필요) |
| webview-ui/src/components/settings/__tests__/SapAiCoreModelPicker.spec.tsx | 648 | `it("should not trigger changes when selectedModelId is empty", () => {` | (번역 필요) |
| webview-ui/src/components/settings/HuggingFaceModelPicker.tsx | 62 | `console.error("Failed to refresh Hugging Face models:", err)` | (번역 필요) |
| webview-ui/src/components/settings/HuggingFaceModelPicker.tsx | 127 | `setSelectedIndex((prev) => (prev < modelSearchResults.length - 1 ? prev + 1 : 0))` | (번역 필요) |
| webview-ui/src/components/settings/HuggingFaceModelPicker.tsx | 135 | `if (selectedIndex >= 0 && selectedIndex < modelSearchResults.length) {` | (번역 필요) |
| webview-ui/src/components/settings/HuggingFaceModelPicker.tsx | 167 | `<div className="flex flex-col">` | (번역 필요) |
| webview-ui/src/components/settings/HuggingFaceModelPicker.tsx | 169 | `<span className="font-medium">Model</span>` | (번역 필요) |
| webview-ui/src/components/settings/HuggingFaceModelPicker.tsx | 172 | `<div className="relative w-full" ref={dropdownRef}>` | (번역 필요) |
| webview-ui/src/components/settings/HuggingFaceModelPicker.tsx | 174 | `className="w-full relative z-1000"` | (번역 필요) |
| webview-ui/src/components/settings/HuggingFaceModelPicker.tsx | 183 | `placeholder="Search models..."` | (번역 필요) |
| webview-ui/src/components/settings/HuggingFaceModelPicker.tsx | 188 | `aria-label="Clear search"` | (번역 필요) |
| webview-ui/src/components/settings/HuggingFaceModelPicker.tsx | 189 | `className="input-icon-button codicon codicon-close"` | (번역 필요) |
| webview-ui/src/components/settings/SettingsSlider.tsx | 33 | `<div className="flex items-center justify-between gap-4">` | (번역 필요) |
| webview-ui/src/components/settings/SettingsSlider.tsx | 34 | `<Label className="space-y-0.5 flex-1 text-xs text-description">{label}</Label>` | (번역 필요) |
| webview-ui/src/components/settings/SettingsSlider.tsx | 35 | `<span className={`text-sm font-mono text-foreground ${valueWidth} text-right`}>{value}</span>` | (번역 필요) |
| webview-ui/src/components/settings/SettingsSlider.tsx | 38 | `{description && <p className="text-xs text-description mt-2">{description}</p>}` | (번역 필요) |
| webview-ui/src/components/settings/OllamaModelPicker.tsx | 20 | `placeholder = "Search and select a model...",` | (번역 필요) |
| webview-ui/src/components/settings/OllamaModelPicker.tsx | 78 | `setSelectedIndex((prev) => (prev < modelSearchResults.length - 1 ? prev + 1 : prev))` | (번역 필요) |
| webview-ui/src/components/settings/OllamaModelPicker.tsx | 86 | `if (selectedIndex >= 0 && selectedIndex < modelSearchResults.length) {` | (번역 필요) |
| webview-ui/src/components/settings/OllamaModelPicker.tsx | 151 | `aria-label="Clear search"` | (번역 필요) |
| webview-ui/src/components/settings/OllamaModelPicker.tsx | 152 | `className="input-icon-button codicon codicon-close"` | (번역 필요) |
| webview-ui/src/components/settings/ThinkingBudgetSlider.tsx | 140 | `Enable thinking{localValue && localValue > 0 ? ` (${localValue.toLocaleString()} tokens)` : ""}` | (번역 필요) |
| webview-ui/src/components/settings/ThinkingBudgetSlider.tsx | 143 | `<p className="text-[var(--vscode-descriptionForeground)] text-sm">` | (번역 필요) |
| webview-ui/src/components/settings/ThinkingBudgetSlider.tsx | 155 | `aria-label={`Thinking budget: ${localValue.toLocaleString()} tokens`}` | (번역 필요) |
| webview-ui/src/components/settings/RequestyModelPicker.tsx | 74 | `console.error("Failed to refresh Requesty models:", err)` | (번역 필요) |
| webview-ui/src/components/settings/RequestyModelPicker.tsx | 130 | `setSelectedIndex((prev) => (prev < modelSearchResults.length - 1 ? prev + 1 : prev))` | (번역 필요) |
| webview-ui/src/components/settings/RequestyModelPicker.tsx | 138 | `if (selectedIndex >= 0 && selectedIndex < modelSearchResults.length) {` | (번역 필요) |
| webview-ui/src/components/settings/RequestyModelPicker.tsx | 190 | `<span style={{ fontWeight: 500 }}>Model</span>` | (번역 필요) |
| webview-ui/src/components/settings/RequestyModelPicker.tsx | 201 | `placeholder="Search and select a model..."` | (번역 필요) |
| webview-ui/src/components/settings/RequestyModelPicker.tsx | 211 | `aria-label="Clear search"` | (번역 필요) |
| webview-ui/src/components/settings/RequestyModelPicker.tsx | 212 | `className="input-icon-button codicon codicon-close"` | (번역 필요) |
| webview-ui/src/components/settings/RequestyModelPicker.tsx | 267 | `If you're unsure which model to choose, Cline works best with{" "}` | (번역 필요) |
| webview-ui/src/components/settings/OpenRouterModelPicker.tsx | 156 | `setSelectedIndex((prev) => (prev < modelSearchResults.length - 1 ? prev + 1 : prev))` | (번역 필요) |
| webview-ui/src/components/settings/OpenRouterModelPicker.tsx | 164 | `if (selectedIndex >= 0 && selectedIndex < modelSearchResults.length) {` | (번역 필요) |
| webview-ui/src/components/settings/OpenRouterModelPicker.tsx | 242 | `<span style={{ fontWeight: 500 }}>Model</span>` | (번역 필요) |
| webview-ui/src/components/settings/OpenRouterModelPicker.tsx | 259 | `placeholder="Search and select a model..."` | (번역 필요) |
| webview-ui/src/components/settings/OpenRouterModelPicker.tsx | 269 | `aria-label="Clear search"` | (번역 필요) |
| webview-ui/src/components/settings/OpenRouterModelPicker.tsx | 270 | `className="input-icon-button codicon codicon-close"` | (번역 필요) |
| webview-ui/src/components/settings/OpenRouterModelPicker.tsx | 308 | `).catch((error) => console.error("Failed to toggle favorite model:", error))` | (번역 필요) |
| webview-ui/src/components/settings/OpenRouterModelPicker.tsx | 377 | `If you're unsure which model to choose, Cline works best with{" "}` | (번역 필요) |
| webview-ui/src/components/settings/TerminalOutputLineLimitSlider.tsx | 29 | `<span>{terminalOutputLineLimit ?? 500}</span>` | (번역 필요) |
| webview-ui/src/components/settings/TerminalOutputLineLimitSlider.tsx | 31 | `<p style={{ fontSize: "12px", color: "var(--vscode-descriptionForeground)", margin: "5px 0 0 0" }}>` | (번역 필요) |
| webview-ui/src/components/settings/VercelModelPicker.tsx | 116 | `setSelectedIndex((prev) => (prev < modelSearchResults.length - 1 ? prev + 1 : prev))` | (번역 필요) |
| webview-ui/src/components/settings/VercelModelPicker.tsx | 124 | `if (selectedIndex >= 0 && selectedIndex < modelSearchResults.length) {` | (번역 필요) |
| webview-ui/src/components/settings/VercelModelPicker.tsx | 199 | `<span style={{ fontWeight: 500 }}>Model</span>` | (번역 필요) |
| webview-ui/src/components/settings/VercelModelPicker.tsx | 216 | `placeholder="Search and select a model..."` | (번역 필요) |
| webview-ui/src/components/settings/VercelModelPicker.tsx | 226 | `aria-label="Clear search"` | (번역 필요) |
| webview-ui/src/components/settings/VercelModelPicker.tsx | 227 | `className="input-icon-button codicon codicon-close"` | (번역 필요) |
| webview-ui/src/components/settings/VercelModelPicker.tsx | 263 | `? "Loading models..."` | (번역 필요) |
| webview-ui/src/components/settings/VercelModelPicker.tsx | 264 | `: "No models found"}` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 68 | `export const DROPDOWN_Z_INDEX = OPENROUTER_MODEL_PICKER_Z_INDEX + 2 // Higher than the OpenRouterModelPicker's and ModelSelectorTooltip's z-index` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 121 | `console.error("Failed to fetch Ollama models:", error)` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 206 | `setSelectedIndex((prev) => (prev < providerSearchResults.length - 1 ? prev + 1 : prev))` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 214 | `if (selectedIndex >= 0 && selectedIndex < providerSearchResults.length) {` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 263 | `In our case, when the user switches between providers, we recalculate the selectedModelId depending on the provider, the default model for that provider, and a modelId that the user may have selected. Unfortunately, the VSCodeDropdown component wouldn't select this calculated value, and would default to the first "Select a model..." option instead, which makes it seem like the model was cleared out when it wasn't.` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 282 | `<div className="flex items-center gap-2 mb-1">` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 284 | `<span style={{ fontWeight: 500 }}>API Provider</span>` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 286 | `<i className="codicon codicon-lock text-description text-sm" />` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 289 | `<TooltipContent>Provider options are managed by your organization's remote configuration</TooltipContent>` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 309 | `placeholder="Search and select provider..."` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 320 | `aria-label="Clear search"` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 321 | `className="input-icon-button codicon codicon-close"` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 349 | `<span>{item.html}</span>` | (번역 필요) |
| webview-ui/src/components/settings/ApiOptions.tsx | 523 | `margin: "-10px 0 4px 0",` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 123 | `if (part.startsWith('<span class="model-item-highlight">')) {` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 146 | `setSelectedIndex((prev) => (prev < modelSearchResults.length - 1 ? prev + 1 : prev))` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 154 | `if (selectedIndex >= 0 && selectedIndex < modelSearchResults.length) {` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 196 | `<div className="flex flex-col">` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 198 | `<span className="font-medium">Model</span>` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 200 | `<div className="relative w-full" ref={dropdownRef}>` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 209 | `placeholder="Search and select a model..."` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 219 | `aria-label="Clear search"` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 220 | `className="input-icon-button codicon codicon-close flex justify-center items-center h-full"` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 231 | `className="absolute top-[calc(100%-3px)] left-0 w-[calc(100%-2px)] max-h-[200px] overflow-y-auto border border-(--vscode-list-activeSelectionBackground) rounded-b-[3px]"` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 264 | `<p className="text-xs mt-0 text-(--vscode-descriptionForeground)">` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 266 | `<VSCodeLink className="inline text-inherit" href="https://www.baseten.co/products/model-apis/">` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 269 | `If you're unsure which model to choose, Cline works best with{" "}` | (번역 필요) |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 270 | `<VSCodeLink className="inline text-inherit" onClick={() => handleModelChange("moonshotai/Kimi-K2-Instruct")}>` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 106 | `console.error("Failed to refresh rules:", error)` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 140 | `console.error("Failed to refresh hooks:", error)` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 177 | `console.error("Failed to refresh skills:", error)` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 254 | `console.error("Error toggling Cline rule:", error)` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 272 | `console.error("Error toggling Cursor rule:", error)` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 289 | `console.error("Error toggling Windsurf rule:", error)` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 306 | `console.error("Error toggling Agents rule:", error)` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 324 | `console.error("Error toggling hook:", error)` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 346 | `console.error("Failed to toggle workflow:", err)` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 366 | `console.error("Error toggling remote rule:", error)` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 385 | `console.error("Error toggling remote workflow:", error)` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 413 | `console.error("Error toggling skill:", error)` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 435 | `<div className="inline-flex min-w-0 max-w-full items-center" ref={modalRef}>` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 436 | `<div className="inline-flex w-full items-center" ref={buttonRef}>` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 438 | `{!isVisible && <TooltipContent>Manage Cline Rules & Workflows</TooltipContent>}` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 442 | `aria-label={isVisible ? "Hide Cline Rules & Workflows" : "Show Cline Rules & Workflows"}` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 443 | `className="p-0 m-0 flex items-center"` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 445 | `<i className="codicon codicon-law" style={{ fontSize: "12.5px" }} />` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 454 | `<div className="flex-shrink-0 px-2 pt-0">` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 466 | `borderBottom: "1px solid var(--vscode-panel-border)",` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 487 | `<div className="flex items-center gap-2 px-5 py-3 mb-4 bg-vscode-textBlockQuote-background border-l-[3px] border-vscode-textLink-foreground">` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 488 | `<i className="codicon codicon-lock text-sm" />` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 491 | `? "Your organization manages some rules"` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 492 | `: "Your organization manages some workflows"}` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 498 | `<div className="text-xs text-description mb-4">` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 514 | `<span className="text-foreground font-bold">/workflow-name</span> in the chat.{" "}` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 516 | `className="text-xs inline"` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 524 | `skill's description, Cline uses the <span className="font-bold">use_skill</span> tool to load` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 537 | `<div className="flex-1 overflow-y-auto px-2 pb-3" style={{ minHeight: 0 }}>` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 543 | `<div className="text-sm font-normal mb-2">Enterprise Rules</div>` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 544 | `<div className="flex flex-col gap-0">` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 566 | `<div className="text-sm font-normal mb-2">Global Rules</div>` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 582 | `<div className="text-sm font-normal mb-2">Workspace Rules</div>` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 627 | `<div className="text-sm font-normal mb-2">Enterprise Workflows</div>` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 651 | `<div className="text-sm font-normal mb-2">Global Workflows</div>` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 667 | `<div className="text-sm font-normal mb-2">Workspace Workflows</div>` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 684 | `? "On Windows, hooks execute whenever the hook file exists."` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 697 | `<div className="flex items-center gap-2 px-5 py-3 mb-4 bg-vscode-inputValidation-warningBackground border-l-[3px] border-vscode-inputValidation-warningBorder">` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 698 | `<i className="codicon codicon-warning text-sm" />` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 709 | `<div className="text-sm font-normal mb-2">Global Hooks</div>` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 744 | `<div className="text-sm font-normal mb-2">` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 783 | `<div className="text-sm font-normal mb-2">Global Skills</div>` | (번역 필요) |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 803 | `<div className="text-sm font-normal mb-2">Workspace Skills</div>` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 55 | `viewBox="0 0 24 24"` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 59 | `<path d="M12 4L5 8l7 4 7-4-7-4z" fill="rgba(255,255,255,0.2)" />` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 60 | `<path d="M5 8v8l7 4v-8L5 8z" fill="rgba(255,255,255,0.1)" />` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 61 | `<path d="M19 8v8l-7 4v-8l7-4z" fill="rgba(255,255,255,0.15)" />` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 77 | `<path d="M6 18L16 5L14 18H6z" fill="currentColor" />` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 79 | `<path d="M4 19h12c0.5 0 1-0.3 1-1s-0.3-1-1-1H4c-0.5 0-1 0.3-1 1s0.3 1 1 1z" fill="currentColor" />` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 94 | `<path d="M12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z" />` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 107 | `console.error("Failed to open file:", err),` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 120 | `.catch((err) => console.error("Failed to delete skill:", err))` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 128 | `).catch((err) => console.error("Failed to delete rule file:", err))` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 134 | `<div className="flex items-center px-2 py-4 rounded bg-text-block-background max-h-4">` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 135 | `<span className="flex-1 overflow-hidden break-all whitespace-normal flex items-center mr-1" title={rulePath}>` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 136 | `{getRuleTypeIcon() && <span className="mr-1.5">{getRuleTypeIcon()}</span>}` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 137 | `<span className="ph-no-capture">{finalDisplayName}</span>` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 141 | `<InfoIcon className="ml-1.5 opacity-70 size-[0.85rem]" />` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 151 | `<div className="flex items-center space-x-2 gap-2">` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 158 | `title={isDisabled ? "This rule is required and cannot be disabled" : undefined}` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 161 | `aria-label={isRemote ? "View rule file" : "Edit rule file"}` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 164 | `title={isRemote ? "View rule file (read-only)" : "Edit rule file"}` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 169 | `aria-label="Delete rule file"` | (번역 필요) |
| webview-ui/src/components/cline-rules/RuleRow.tsx | 173 | `title="Delete rule file"` | (번역 필요) |
| webview-ui/src/components/cline-rules/HookRow.tsx | 31 | `console.error("Failed to open file:", err),` | (번역 필요) |
| webview-ui/src/components/cline-rules/HookRow.tsx | 48 | `.catch((err) => console.error("Failed to delete hook:", err))` | (번역 필요) |
| webview-ui/src/components/cline-rules/HookRow.tsx | 53 | `<div className="flex items-center px-2 py-4 rounded bg-text-block-background max-h-4">` | (번역 필요) |
| webview-ui/src/components/cline-rules/HookRow.tsx | 54 | `<span className="flex-1 overflow-hidden break-all whitespace-normal flex items-center mr-1">` | (번역 필요) |
| webview-ui/src/components/cline-rules/HookRow.tsx | 55 | `<span className="ph-no-capture">{hookName}</span>` | (번역 필요) |
| webview-ui/src/components/cline-rules/HookRow.tsx | 59 | `<div className="flex items-center space-x-2 gap-2">` | (번역 필요) |
| webview-ui/src/components/cline-rules/HookRow.tsx | 63 | `? "Hook toggling is not yet supported on Windows in this foundation PR. Hooks execute when the hook file exists."` | (번역 필요) |
| webview-ui/src/components/cline-rules/HookRow.tsx | 75 | `<Button aria-label="Edit hook file" onClick={handleEditClick} size="xs" title="Edit hook file" variant="icon">` | (번역 필요) |
| webview-ui/src/components/cline-rules/HookRow.tsx | 79 | `aria-label="Delete hook file"` | (번역 필요) |
| webview-ui/src/components/cline-rules/HookRow.tsx | 82 | `title="Delete hook file"` | (번역 필요) |
| webview-ui/src/components/cline-rules/RulesToggleList.tsx | 34 | `<div className={`flex flex-col ${gapClass}`}>` | (번역 필요) |
| webview-ui/src/components/cline-rules/RulesToggleList.tsx | 54 | `<div className="flex flex-col items-center gap-3 my-3 text-(--vscode-descriptionForeground)">` | (번역 필요) |
| webview-ui/src/components/cline-rules/RulesToggleList.tsx | 55 | `{ruleType === "workflow" ? "No workflows found" : "No rules found"}` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 17 | `{ name: "TaskStart", description: "Executes when a new task begins" },` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 18 | `{ name: "TaskResume", description: "Executes when a task is resumed" },` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 19 | `{ name: "TaskCancel", description: "Executes when a task is cancelled" },` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 20 | `{ name: "TaskComplete", description: "Executes when a task completes" },` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 21 | `{ name: "PreToolUse", description: "Executes before any tool is used" },` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 22 | `{ name: "PostToolUse", description: "Executes after any tool is used" },` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 23 | `{ name: "UserPromptSubmit", description: "Executes when user submits a prompt" },` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 24 | `{ name: "PreCompact", description: "Executes before conversation compaction" },` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 62 | `return ext === "" \|\| ext === ".md" \|\| ext === ".txt"` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 77 | `console.error("Error creating hook:", err)` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 91 | `setError("Skill name can only contain letters, numbers, dashes, and underscores")` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 106 | `setError(err instanceof Error ? err.message : "Failed to create skill")` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 114 | `setError("Only .md, .txt, or no file extension allowed")` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 132 | `console.error("Error creating rule file:", err)` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 151 | `className={cn("mb-2.5 transition-all duration-300 ease-in-out", {` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 153 | `"opacity-70 hover:opacity-100": !isExpanded,` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 159 | `"flex items-center px-2 py-4 rounded bg-input-background transition-all duration-300 ease-in-out h-5",` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 170 | `Choose a hook type to create. Hooks execute at specific points in Cline's lifecycle. Available:{" "}` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 175 | `aria-label="Select hook type to create"` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 176 | `className="flex-1 bg-input-background text-input-foreground border-0 outline-0 rounded focus:outline-none focus:ring-0 focus:border-transparent px-2 cursor-pointer"` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 189 | `backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23cccccc' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 191 | `backgroundPosition: "right 8px center",` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 196 | `{availableHookTypes.length === 0 ? "All hooks created" : "New hook..."}` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 206 | `<form className="flex flex-1 items-center" onSubmit={handleSubmit}>` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 209 | `"flex-1 bg-input-background text-input-foreground border-0 outline-0 rounded focus:outline-none focus:ring-0 focus:border-transparent",` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 218 | `? "workflow-name (.md, .txt, or no extension)"` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 220 | `? "skill-name (letters, numbers, dashes, underscores)"` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 221 | `: "rule-name (.md, .txt, or no extension)"` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 223 | `? "New workflow file..."` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 225 | `? "New skill..."` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 226 | `: "New rule file..."` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 237 | `? "Create skill"` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 238 | `: "Create file"` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 253 | `title={isExpanded ? (ruleType === "skill" ? "Create skill" : "Create file") : "New file"}` | (번역 필요) |
| webview-ui/src/components/cline-rules/NewRuleRow.tsx | 261 | `{isExpanded && error && <div className="text-error text-xs mt-1 ml-2">{error}</div>}` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/CompactTaskButton.tsx | 12 | `<TooltipContent side="left">Compact Task</TooltipContent>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/CompactTaskButton.tsx | 13 | `<TooltipTrigger className={cn("flex items-center", className)}>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/CompactTaskButton.tsx | 15 | `aria-label="Compact Task"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/DeleteTaskButton.tsx | 15 | `<TooltipContent>{`Delete Task (size: ${taskSize ? formatSize(taskSize) : "--"})`}</TooltipContent>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/DeleteTaskButton.tsx | 16 | `<TooltipTrigger className={cn("flex items-center", className)}>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/DeleteTaskButton.tsx | 18 | `aria-label="Delete Task"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/NewTaskButton.tsx | 12 | `<TooltipContent side="left">Start a New Task</TooltipContent>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/NewTaskButton.tsx | 13 | `<TooltipTrigger className={cn("flex items-center", className)}>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/NewTaskButton.tsx | 15 | `aria-label="New Task"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/CopyTaskButton.tsx | 26 | `<TooltipContent side="bottom">Copy Text</TooltipContent>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/CopyTaskButton.tsx | 27 | `<TooltipTrigger className={cn("flex items-center", className)}>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/OpenDiskConversationHistoryButton.tsx | 24 | `<TooltipContent>Open Conversation History File</TooltipContent>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/OpenDiskConversationHistoryButton.tsx | 25 | `<TooltipTrigger className={cn("flex items-center", className)}>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/buttons/OpenDiskConversationHistoryButton.tsx | 27 | `aria-label="Open Disk Conversation History"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 26 | `const COMPLETED_MESSAGE = "All tasks have been completed!"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 27 | `const TODO_LIST_LABEL = "To-Do list"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 28 | `const NEW_STEPS_MESSAGE = "New steps will be generated if you continue the task"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 29 | `const CLICK_TO_EDIT_TITLE = "Click to edit to-do list in file"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 44 | `className={cn("relative w-full h-full", {` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 49 | `"absolute bottom-0 left-0 transition-[width] duration-300 ease-in-out pointer-events-none z-1 h-1 bg-success",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 58 | `<div className="flex items-center gap-2 z-10 py-2 px-2.5">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 59 | `<div className="flex items-center gap-1.5 flex-1 min-w-0 text-sm">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 64 | `"bg-success text-black": isCompleted,` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 69 | `<div className="header-text flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 73 | `<div className="flex items-center text-foreground shrink-0">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 197 | `<span className="text-sm text-foreground/80 truncate">TODOs</span>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 210 | `aria-label={isExpanded ? "Collapse focus chain" : "Expand focus chain"}` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 224 | `<div className="mx-1 pb-2 px-1 relative" onClick={handleEditClick}>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/FocusChain.tsx | 227 | `<div className="mt-2 text-xs font-semibold text-muted-foreground">{NEW_STEPS_MESSAGE}</div>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/Highlights.tsx | 43 | `className={`${withShadow ? "mention-context-highlight-with-shadow" : "mention-context-highlight"} cursor-pointer`}` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 15 | `"TaskHeader displays task information, token usage, cost, and provides controls for task management. It includes expandable details, context window visualization, and task timeline.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 21 | `tokensIn: { control: "number", description: "Input tokens used" },` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 22 | `tokensOut: { control: "number", description: "Output tokens used" },` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 23 | `cacheWrites: { control: "number", description: "Cache write tokens" },` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 24 | `cacheReads: { control: "number", description: "Cache read tokens" },` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 25 | `totalCost: { control: "number", description: "Total cost in USD" },` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 26 | `doesModelSupportPromptCache: { control: "boolean", description: "Whether model supports prompt caching" },` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 49 | `text: "Create a React component",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 67 | `text: "Component created successfully.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 73 | `task: createTask("Create a responsive navigation component for a React application"),` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 80 | `onClose: () => console.log("Close clicked"),` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 95 | `story: "TaskHeader in collapsed state showing task title, cost, and new task button.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 125 | `story: "TaskHeader in expanded state showing full task details, context window, and timeline.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 134 | `"Analyze these screenshots and identify UI issues",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 159 | `story: "TaskHeader with attached images displayed as thumbnails.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 167 | `task: createTask("Review these configuration files and suggest improvements", undefined, [` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 193 | `story: "TaskHeader with attached files displayed as thumbnails.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 202 | `"Create a comprehensive e-commerce application with the following features:\n1. User authentication and authorization\n2. Product catalog with search and filtering\n3. Shopping cart functionality\n4. Checkout process with payment integration\n5. Order management system\n6. Admin dashboard for managing products and orders\n7. Responsive design for mobile and desktop\n8. Performance optimization and caching\n9. SEO optimization\n10. Analytics integration",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 225 | `story: "TaskHeader with long task text that can be expanded to show full content.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 233 | `task: createTask("Refactor large codebase with TypeScript migration"),` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 261 | `story: "TaskHeader showing high token usage approaching context window limits.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 269 | `task: createTask("Test local model with Ollama"),` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 289 | `story: "TaskHeader with local model (Ollama) showing no cost information.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 297 | `task: createTask("Fix authentication bug in login system"),` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 307 | `checkpointManagerErrorMessage: "Git is not installed or not configured properly disabling checkpoints.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 318 | `story: "TaskHeader displaying a checkpoint error message with settings link.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 326 | `task: createTask("Build a REST API with Express and MongoDB"),` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 333 | `"- [x] Set up project structure\n- [x] Install dependencies\n- [ ] Create API routes\n- [ ] Test endpoints",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 350 | `story: "TaskHeader with progress checklist displayed in FocusChain component.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 358 | `task: createTask("Test feature in local environment"),` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 387 | `task: createTask("Deploy to staging environment"),` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 408 | `story: "TaskHeader with staging environment border color (blue).",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 416 | `task: createTask("Deploy to production environment"),` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 437 | `story: "TaskHeader with production environment (default colors).",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 445 | `task: createTask("Fix typo"),` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 464 | `text: "Fix typo",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 470 | `text: "Fixed the typo.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.stories.tsx | 478 | `story: "TaskHeader with minimal task showing basic functionality.",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 30 | `<div className="text-sm my-2 flex items-center gap-0 justify-between">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 31 | `<span className="font-semibold text-sm">Compact the current task?</span>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 32 | `<span className="flex gap-1">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 37 | `title="No, keep the task as is"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 46 | `title="Yes, compact the task"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 142 | `<div className="flex flex-col my-1.5" onMouseLeave={debounceCloseHover}>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 143 | `<div className="flex gap-1 flex-row @max-xs:flex-col @max-xs:items-start items-center text-sm">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 144 | `<div className="flex items-center gap-1.5 flex-1 whitespace-nowrap">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 145 | `<span className="cursor-pointer text-sm" title="Current tokens used in this request">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 148 | `<div className="flex relative items-center gap-1 flex-1 w-full h-full" onMouseEnter={() => setIsOpened(true)}>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 150 | `<HoverCardContent className="bg-menu rounded-xs shadow-sm">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 165 | `className="relative w-full text-foreground context-window-progress brightness-100"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 169 | `aria-label="Context window usage progress"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindow.tsx | 178 | `<span className="cursor-pointer text-sm" title="Maximum context window size for this model">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/StickyUserMessage.tsx | 45 | `aria-label={`Scroll to your message: ${messageText}`}` | (번역 필요) |
| webview-ui/src/components/chat/task-header/StickyUserMessage.tsx | 47 | `"relative flex items-center px-2.5 pt-2 pb-2 cursor-pointer select-none",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/StickyUserMessage.tsx | 59 | `title="Click to scroll to your message">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/StickyUserMessage.tsx | 63 | `"flex-1 min-w-0 text-sm text-badge-foreground",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/StickyUserMessage.tsx | 64 | `"overflow-hidden text-ellipsis whitespace-nowrap",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/CheckpointError.tsx | 16 | `checkpointManagerErrorMessage?.endsWith("disabling checkpoints.") \|\|` | (번역 필요) |
| webview-ui/src/components/chat/task-header/CheckpointError.tsx | 17 | `checkpointManagerErrorMessage?.includes("multi-root workspaces")` | (번역 필요) |
| webview-ui/src/components/chat/task-header/CheckpointError.tsx | 18 | `const showGitInstructions = checkpointManagerErrorMessage?.includes("Git must be installed to use checkpoints.")` | (번역 필요) |
| webview-ui/src/components/chat/task-header/CheckpointError.tsx | 27 | `<div className="flex items-center justify-center w-full">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/CheckpointError.tsx | 29 | `<AlertDescription className="flex gap-2 justify-end">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/CheckpointError.tsx | 31 | `<Button aria-label="Disable Checkpoints" onClick={handleCheckpointSettingsClick} variant="ghost">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/CheckpointError.tsx | 37 | `className="text-link underline"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 34 | `const BUTTON_CLASS = "max-h-3 border-0 font-bold bg-transparent hover:opacity-100 text-foreground"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 116 | `<div className="py-2 px-4 flex flex-col gap-2">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 127 | `"opacity-100 border-1": isTaskExpanded, // No hover effects when expanded, add border` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 128 | `"hover:bg-toolbar-hover border-1": !isTaskExpanded, // Hover effects only when collapsed` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 136 | `aria-label={isTaskExpanded ? "Collapse task header" : "Expand task header"}` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 137 | `className="flex justify-between items-center cursor-pointer"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 147 | `<div className="flex justify-between items-center">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 150 | `<div className="mt-1 flex justify-end cursor-pointer opacity-80 gap-2 mx-2">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 164 | `<div className="flex items-center select-none grow min-w-0 gap-1 justify-between">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 166 | `<div className="whitespace-nowrap overflow-hidden text-ellipsis grow min-w-0">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 167 | `<span className="ph-no-capture text-base">{highlightedText}</span>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 171 | `<div className="inline-flex items-center justify-end select-none shrink-0">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 176 | `<span className="text-xs sm:text-sm">${totalCost?.toFixed(4)}</span>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 185 | `<div className="flex flex-col break-words" key={`task-details-${currentTaskItem?.id}`}>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 188 | `"ph-no-capture whitespace-pre-wrap break-words px-0.5 text-sm mt-1 relative",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 189 | `"max-h-[4.5rem] overflow-hidden",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 191 | `"max-h-[25vh] overflow-y-auto scroll-smooth": isHighlightedTextExpanded,` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 200 | `WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/TaskHeader.tsx | 201 | `maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 45 | `<div className="flex flex-col w-full">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 49 | `<div className="flex items-center gap-1">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 51 | `<div className="font-semibold">{title}</div>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 53 | `<div className="text-muted-foreground">{value}</div>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 55 | `{isExpanded && children && <div className="ml-5 my-1 text-xs text-muted-foreground">{children}</div>}` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 63 | `{ title: "Prompt Tokens", icon: "codicon-arrow-up" },` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 64 | `{ title: "Completion Tokens", icon: "codicon-arrow-down" },` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 65 | `{ title: "Cache Writes", icon: "codicon-arrow-left" },` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 66 | `{ title: "Cache Reads", icon: "codicon-arrow-right" },` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 76 | `return <div>No token usage data available</div>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 82 | `<div className="flex justify-between">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 83 | `<span>{item.title}</span>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 84 | `<span className="font-mono">{formatTokenNumber(item.value \|\| 0)}</span>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 124 | `<div className="context-window-tooltip-content flex flex-col gap-2 bg-menu rounded shadow-sm z-100 w-60 p-1">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 129 | `title="Auto Condense Threshold"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 130 | `value={<span className="text-muted-foreground">{`${(autoCompactThreshold * 100).toFixed(0)}%`}</span>}>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 132 | `<p className="text-xs leading-relaxed text-white">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 135 | `<p className="text-xs leading-relaxed mt-0 mb-0">` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 145 | `title="Context Window"` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 149 | `<span>Used:</span>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 150 | `<span className="font-mono">{formatTokenNumber(tokenUsed)}</span>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 153 | `<span>Total:</span>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 154 | `<span className="font-mono">{formatTokenNumber(contextWindow)}</span>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 157 | `<span>Remaining:</span>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 158 | `<span className="font-mono">{formatTokenNumber(contextWindow - tokenUsed)}</span>` | (번역 필요) |
| webview-ui/src/components/chat/task-header/ContextWindowSummary.tsx | 167 | `title="Token Usage"` | (번역 필요) |
| webview-ui/src/components/chat/OptionsButtons.tsx | 68 | `text: option + (inputValue ? `: ${inputValue?.trim()}` : ""),` | (번역 필요) |
| webview-ui/src/components/chat/OptionsButtons.tsx | 73 | `console.error("Error sending option response:", error)` | (번역 필요) |
| webview-ui/src/components/chat/OptionsButtons.tsx | 76 | `<span className="ph-no-capture">{option}</span>` | (번역 필요) |
| webview-ui/src/components/chat/ErrorBlockTitle.tsx | 24 | `<div className="w-4 h-4 flex items-center justify-center">` | (번역 필요) |
| webview-ui/src/components/chat/ErrorBlockTitle.tsx | 25 | `<span className={`codicon codicon-${iconName} text-base -mb-0.5 ${colorClass}`}></span>` | (번역 필요) |
| webview-ui/src/components/chat/ErrorBlockTitle.tsx | 46 | `const details = { title: "API Request...", classNames: ["font-bold"] }` | (번역 필요) |
| webview-ui/src/components/chat/ErrorBlockTitle.tsx | 49 | `details.title = "API Request Cancelled"` | (번역 필요) |
| webview-ui/src/components/chat/ErrorBlockTitle.tsx | 52 | `details.title = "API Request Failed"` | (번역 필요) |
| webview-ui/src/components/chat/ErrorBlockTitle.tsx | 56 | `details.title = "API Request"` | (번역 필요) |
| webview-ui/src/components/chat/ErrorBlockTitle.tsx | 61 | `const titleText = clineError?.isErrorType(ClineErrorType.Balance) ? "Credit Limit Reached" : "API Request Failed"` | (번역 필요) |
| webview-ui/src/components/chat/ErrorBlockTitle.tsx | 63 | `details.classNames.push("font-bold text-(--vscode-errorForeground)")` | (번역 필요) |
| webview-ui/src/components/chat/ErrorBlockTitle.tsx | 70 | `return <span className={details.classNames.join(" ")}>{details.title}</span>` | (번역 필요) |
| webview-ui/src/components/chat/QuoteButton.tsx | 26 | `<ButtonContainer $left={left} $top={top} className="quote-button-class absolute">` | (번역 필요) |
| webview-ui/src/components/chat/QuoteButton.tsx | 28 | `aria-label="Quote selection"` | (번역 필요) |
| webview-ui/src/components/chat/QuoteButton.tsx | 29 | `className="p-3 h-auto min-w-auto rounded-md shadow-sm transition-transform hover:scale-105 z-10"` | (번역 필요) |
| webview-ui/src/components/chat/QuoteButton.tsx | 35 | `title="Quote selection in reply">` | (번역 필요) |
| webview-ui/src/components/chat/QuoteButton.tsx | 36 | `<QuoteIcon className="size-2 fill-button-foreground rotate-180 stroke-1" />` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 88 | `[ContextMenuOptionType.URL]: "Paste URL to fetch contents",` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 89 | `[ContextMenuOptionType.NoResults]: "No results found",` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 103 | `return `${option.label}${option.description ? `, ${option.description}` : ""}`` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 105 | `return "Git Commits"` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 111 | `return `Add ${option.type === ContextMenuOptionType.File ? "File" : "Folder"}`` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 121 | `return <span>{simpleLabel}</span>` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 147 | `return <span>Git Commits</span>` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 173 | `return <span>Add {option.type === ContextMenuOptionType.File ? "File" : "Folder"}</span>` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 228 | `bottom: "calc(100% - 10px)",` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 242 | `aria-label="Context mentions"` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 247 | `border: "1px solid var(--vscode-editorGroup-border)",` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 249 | `boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 260 | `padding: "8px 12px",` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 266 | `<i className="codicon codicon-loading codicon-modifier-spin" style={{ fontSize: "14px" }} />` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 267 | `<span>Searching...</span>` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 273 | `const generatedKey = `${option.type}-${workspacePrefix}${option.value \|\| index}`` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 291 | `borderBottom: "1px solid var(--vscode-editorGroup-border)",` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 309 | `className={`codicon codicon-${getIconForOption(option)}`}` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 323 | `className="codicon codicon-chevron-right"` | (번역 필요) |
| webview-ui/src/components/chat/ContextMenu.tsx | 338 | `className="codicon codicon-add"` | (번역 필요) |
| webview-ui/src/components/chat/HookMessage.tsx | 146 | `className="codicon codicon-symbol-event"` | (번역 필요) |
| webview-ui/src/components/chat/HookMessage.tsx | 151 | `<span style={{ color: normalColor, fontWeight: "bold" }}>Hook:</span>` | (번역 필요) |
| webview-ui/src/components/chat/HookMessage.tsx | 152 | `<span style={{ color: normalColor }}>{metadata.hookName}</span>` | (번역 필요) |
| webview-ui/src/components/chat/HookMessage.tsx | 154 | `<span style={{ color: "var(--vscode-descriptionForeground)", fontSize: "0.9em" }}>({metadata.toolName})</span>` | (번역 필요) |
| webview-ui/src/components/chat/HookMessage.tsx | 160 | `border: "1px solid var(--vscode-editorGroup-border)",` | (번역 필요) |
| webview-ui/src/components/chat/HookMessage.tsx | 163 | `transition: "all 0.3s ease-in-out",` | (번역 필요) |
| webview-ui/src/components/chat/HookMessage.tsx | 170 | `padding: "8px 10px",` | (번역 필요) |
| webview-ui/src/components/chat/HookMessage.tsx | 173 | `metadata.pendingToolInfo \|\| output.length > 0 ? "1px solid var(--vscode-editorGroup-border)" : "none",` | (번역 필요) |
| webview-ui/src/components/chat/HookMessage.tsx | 191 | `animation: isRunning ? "pulse 2s ease-in-out infinite" : "none",` | (번역 필요) |
| webview-ui/src/components/chat/HookMessage.tsx | 228 | `console.error("Failed to cancel task:", err),` | (번역 필요) |
| webview-ui/src/components/chat/HookMessage.tsx | 242 | `padding: "4px 10px",` | (번역 필요) |
| webview-ui/src/components/chat/HookMessage.tsx | 257 | `borderBottom: output.length > 0 ? "1px solid var(--vscode-editorGroup-border)" : "none",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 13 | `text: "An error occurred while processing your request.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 54 | `"Displays different types of error messages in the chat interface, including API errors, credit limit errors, diff errors, and clineignore errors. Handles special error parsing for Cline provider errors and provides appropriate user actions.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 67 | `message: createMockMessage({ text: "Something went wrong while executing the command." }),` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 75 | `description: "Type of error to display",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 79 | `description: "Message object containing error text and metadata",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 87 | `"PowerShell is not recognized as an internal or external command, operable program or batch file.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 90 | `message: "error message.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 99 | `story: "Interactive story for testing different plain text error types and messages. Use the preset dropdown to quickly test common scenarios, or manually configure the error type and message object.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 111 | `"Network error: Unable to connect to the API server. Please check your internet connection and try again.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 119 | `apiReqStreamingFailedMessage: "Streaming error: Connection was interrupted while receiving the response.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 129 | `message: "Insufficient credits to complete this request.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 137 | `message: "You have run out of credits. Please purchase more to continue.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 149 | `message: "Rate limit exceeded. Please wait before making another request.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 162 | `message: "Authentication failed. Please sign in to continue.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 171 | `description: "JSON string containing error details",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 196 | `message: "Authentication failed. Please retry your request.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 209 | `message: "Please sign in to access Cline services.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 235 | `"PowerShell is not recognized as an internal or external command. Please check your system configuration.",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 256 | `message: "An unexpected error occurred while processing your request.",` | (번역 필요) |
| webview-ui/src/components/chat/CompletionOutputRow.tsx | 43 | `<div className={cn(headClassNames, "justify-between px-1")}>` | (번역 필요) |
| webview-ui/src/components/chat/CompletionOutputRow.tsx | 44 | `<div className="flex gap-2 items-center">` | (번역 필요) |
| webview-ui/src/components/chat/CompletionOutputRow.tsx | 45 | `<CheckIcon className="size-3 text-success" />` | (번역 필요) |
| webview-ui/src/components/chat/CompletionOutputRow.tsx | 46 | `<span className="text-success font-bold">Task Completed</span>` | (번역 필요) |
| webview-ui/src/components/chat/CompletionOutputRow.tsx | 101 | `).catch((err) => console.error("Failed to show task completion view changes:", err))` | (번역 필요) |
| webview-ui/src/components/chat/CompletionOutputRow.tsx | 107 | `<i className="codicon codicon-new-file" style={{ marginRight: 6 }} />` | (번역 필요) |
| webview-ui/src/components/chat/CompletionOutputRow.tsx | 120 | `console.error("Failed to explain changes:", err)` | (번역 필요) |
| webview-ui/src/components/chat/CompletionOutputRow.tsx | 128 | `<i className="codicon codicon-comment-discussion" style={{ marginRight: 6 }} />` | (번역 필요) |
| webview-ui/src/components/chat/CompletionOutputRow.tsx | 129 | `{explainChangesDisabled ? "Explaining..." : "Explain Changes"}` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 26 | `? "text-foreground truncate"` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 27 | `: "text-muted-foreground group-hover:text-foreground truncate"` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 50 | `return <span className={baseClasses}>None</span>` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 66 | `const borderGradient = `linear-gradient(to bottom, ${borderColor} 0%, transparent 50%)`` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 67 | `const bgGradient = `linear-gradient(to bottom, color-mix(in srgb, var(--vscode-sideBar-background) 96%, white) 0%, transparent 80%)`` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 73 | `className="mx-3.5 select-none break-words relative"` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 75 | `borderTop: `0.5px solid ${borderColor}`,` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 76 | `borderRadius: "4px 4px 0 0",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 83 | `className="absolute left-0 pointer-events-none"` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 93 | `className="absolute right-0 top-0 pointer-events-none"` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 102 | `<div className="pt-4 pb-3.5 px-3.5">` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 103 | `<div className="text-sm mb-1">Auto-approve: YOLO</div>` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 104 | `<div className="text-muted-foreground text-xs">` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 106 | `<span className="underline cursor-pointer hover:text-foreground" onClick={handleNavigateToFeatures}>` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 147 | `aria-label={isModalVisible ? "Close auto-approve settings" : "Open auto-approve settings"}` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 148 | `className="group cursor-pointer pt-3 pb-3.5 pr-2 px-3.5 flex items-center justify-between gap-0"` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 161 | `<div className="flex flex-nowrap items-center gap-1 min-w-0 flex-1">` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveBar.tsx | 162 | `<span className="whitespace-nowrap">Auto-approve:</span>` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveSettingsAPI.ts | 13 | `console.error("Failed to update auto approval settings:", error)` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 6 | `label: "Read project files",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 11 | `label: "Read all files",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 12 | `shortName: "Read (all)",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 19 | `label: "Edit project files",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 24 | `label: "Edit all files",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 25 | `shortName: "Edit (all)",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 32 | `label: "Execute safe commands",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 33 | `shortName: "Safe Commands",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 37 | `label: "Execute all commands",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 38 | `shortName: "All Commands",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 45 | `label: "Use the browser",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 51 | `label: "Use MCP servers",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/constants.ts | 59 | `label: "Enable notifications",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveMenuItem.tsx | 8 | `onToggle: (action: ActionMetadata, checked: boolean) => Promise<void>` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveMenuItem.tsx | 46 | `<div className="w-full flex text-sm items-center justify-start text-foreground gap-2">` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveMenuItem.tsx | 47 | `{showIcon && <span className={`codicon ${action.icon} icon`}></span>}` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveMenuItem.tsx | 48 | `<span className="label">{action.label}</span>` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveModal.tsx | 70 | `className="overflow-y-auto pb-3 px-3.5 overscroll-contain"` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveModal.tsx | 74 | `<div className="mb-2.5 text-muted-foreground text-xs cursor-pointer" onClick={() => setIsVisible(false)}>` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveModal.tsx | 77 | `className="text-link hover:text-link-hover"` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveModal.tsx | 87 | `className="relative mb-2 w-full"` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveModal.tsx | 116 | `margin: "8px 0",` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveModal.tsx | 121 | `<div className="flex items-center gap-2">` | (번역 필요) |
| webview-ui/src/components/chat/auto-approve-menu/AutoApproveModal.tsx | 132 | `<span className="text-sm">Enable notifications</span>` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 69 | `executeButtonAction: (action: ButtonActionType, text?: string, images?: string[], files?: string[]) => Promise<void>` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 70 | `handleSendMessage: (text: string, images: string[], files: string[]) => Promise<void>` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 72 | `startNewTask: () => Promise<void>` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/types/chatTypes.ts | 171 | `selectFilesAndImages: () => Promise<void>` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 27 | `it("ignores text that arrives after a low-stakes tool group has started", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 29 | `createTextMessage(1, "Initial text"),` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 31 | `createTextMessage(3, "Late text that should be ignored"),` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 35 | `expect(grouped[0]).toMatchObject({ type: "say", say: "text", text: "Initial text" })` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 43 | `it("keeps text when no low-stakes tool group is active", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 47 | `createTextMessage(3, "Follow-up text"),` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 53 | `expect(grouped[2]).toMatchObject({ type: "say", say: "text", text: "Follow-up text" })` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 56 | `it("keeps standalone reasoning when no low-stakes tool group follows", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 58 | `createReasoningMessage(1, "Thinking through options"),` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 59 | `createTextMessage(2, "Answer text"),` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 63 | `expect(grouped[0]).toMatchObject({ type: "say", say: "reasoning", text: "Thinking through options" })` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 64 | `expect(grouped[1]).toMatchObject({ type: "say", say: "text", text: "Answer text" })` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 67 | `it("keeps standalone reasoning before a non-low-stakes tool", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 78 | `it("keeps reasoning visible when low-stakes tool group starts immediately after", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 79 | `const grouped = groupLowStakesTools([createReasoningMessage(1, "Planning next read"), createToolMessage(2, "readFile")])` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.test.ts | 82 | `expect(grouped[0]).toMatchObject({ type: "say", say: "reasoning", text: "Planning next read" })` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 96 | `if ((message.text ?? "") === "" && (message.images?.length ?? 0) === 0) {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 288 | `* A checkpoint is absorbed if it's PRECEDED by low-stakes tools (meaning we're in a tool group).` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 410 | `*    this tool group falls in the "current activities" range (between the previous completed api_req and the current one)` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 412 | `*    this tool group appears after it (just arrived, waiting to be shown as "in flight")` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 479 | `// If no previous completed api_req, there's no "current activities" range` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 485 | `return toolIndex > prevCompletedApiReqIndex && toolIndex < mostRecentApiReqIndex` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 493 | `* Filter a tool group to exclude tools that are in the "current activities" range.` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 497 | `* while the loading state shows ACTIVE tools (what's being "read" now).` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 499 | `* "Current activities" includes:` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 539 | `// Step 3: Determine which tools are "in current activities"` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 562 | `// No previous completed api_req, so no tools are in the "current activities" range` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 580 | `// Tool is in "current activities" range if AFTER prevCompleted AND BEFORE current` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 581 | `const isInCurrentActivitiesRange = toolIndex > prevCompletedApiReqIndex && toolIndex < mostRecentApiReqIndex` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 591 | `// Tools that appear AFTER this completed api_req are "in flight" (just arrived)` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 607 | `// Tool is in "current activities" if it appears AFTER the most recent api_req` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/utils/messageUtils.ts | 671 | `// Don't absorb if there's reasoning - we want to show "Thoughts >"` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 7 | `it("returns default config when no task is provided", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 14 | `it("returns partial config for streaming messages", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 26 | `describe("Error Recovery States", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 30 | `it(`returns correct config for ${errorState}`, () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 45 | `describe("Tool Approval States", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 74 | `describe("Command Execution States", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 75 | `it("returns command config for command ask", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 97 | `describe("Other Ask States", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 113 | `it(`returns ${expectedConfig} config for ${ask} ask`, () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.test.ts | 137 | `it("handles mode parameter without changing core behavior", () => {` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 38 | `secondaryText: "Start New Task",` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 45 | `primaryText: "Proceed Anyways",` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 73 | `primaryText: "Run Command",` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 81 | `primaryText: "Proceed While Running",` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 133 | `primaryText: "Start New Task",` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 141 | `primaryText: "Resume Task",` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 157 | `primaryText: "Start New Task with Context",` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 167 | `primaryText: "Condense Conversation",` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 175 | `primaryText: "Report GitHub issue",` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 224 | `// Special case: command_output should show "Proceed While Running" button even while streaming` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/shared/buttonConfig.ts | 303 | `// Special case: command_output say messages should show "Proceed While Running" button` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 44 | `return tool.path ? `Reading ${cleanedPath}...` : null` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 49 | `return tool.regex && tool.path ? `Searching ${formatSearchRegex(tool.regex, tool.path, tool.filePattern)}...` : null` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 105 | `// Filter out tools in the "current activities" range (being shown in loading state)` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 151 | `console.error("Failed to open file:", err),` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 165 | `<div className={cn("px-4 py-2 ml-1 text-description")}>` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 167 | `<div className="text-[13px] text-description font-semibold mb-1">{summary}:</div>` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 187 | `className="flex items-center gap-[3px] text-[13px] text-description py-[1px] min-w-0 max-w-full px-0 leading-tight -my-0.5"` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 191 | `<info.icon className="opacity-70 shrink-0 size-[12px]" />` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 192 | `<span className="flex-1 min-w-0 whitespace-nowrap overflow-hidden text-ellipsis text-left text-[13px]">` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 204 | `className="flex items-center gap-[3px] cursor-pointer text-[13px] text-description py-[1px] hover:text-link min-w-0 max-w-full px-0 leading-tight -my-0.5"` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 211 | `"flex-1 min-w-0 whitespace-nowrap overflow-hidden text-ellipsis text-left [direction:rtl] text-[13px]",` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 221 | `<pre className="m-1 ml-4 text-xs opacity-80 whitespace-pre-wrap break-words p-2 max-h-40 overflow-auto rounded-xs">` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 284 | `return { icon, path: folderPath, label: "listed recursively" }` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 291 | `label: `search: ${tool.regex}`,` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 309 | `const termDisplay = terms.length > 3 ? `${terms.length} patterns` : `"${terms.join(" \| ")}"`` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 352 | `parts.push(`${counts.read} file${counts.read > 1 ? "s" : ""}`)` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 355 | `parts.push(`${counts.list} folder${counts.list > 1 ? "s" : ""}`)` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 358 | `parts.push(`${counts.def} definition${counts.def > 1 ? "s" : ""}`)` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/messages/ToolGroupRenderer.tsx | 361 | `parts.push(`performed ${counts.search} search${counts.search > 1 ? "es" : ""}`)` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/InputSection.tsx | 12 | `selectFilesAndImages: () => Promise<void>` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/IdleIndicator.stashed.tsx | 46 | `console.log("[IdleIndicator] Setting up MutationObserver")` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/IdleIndicator.stashed.tsx | 67 | ``[IdleIndicator] DOM mutation detected, restarting timer. Elapsed: ${elapsed}ms, Remaining: ${remaining}ms`,` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/IdleIndicator.stashed.tsx | 72 | `console.log("[IdleIndicator] DOM idle for 3s, showing indicator")` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/IdleIndicator.stashed.tsx | 104 | `console.log("[IdleIndicator] Cleaning up MutationObserver")` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/IdleIndicator.stashed.tsx | 126 | `*           <div className="flex items-center text-description text-sm px-4 pt-2.5 pb-2.5">` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 37 | `// Track if we've shown the "What's New" modal this session` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 73 | `// Show modal when there's a new announcement and we haven't shown it this session.` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 203 | `AccountServiceClient.accountLoginClicked({}).catch((err) => console.error("Failed to get login URL:", err))` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 223 | `console.error("Failed to initiate CLI installation:", error),` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 228 | `console.warn("Unknown banner action:", action.action)` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 279 | `<div className="flex flex-col flex-1 w-full h-full p-0 m-0">` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 287 | `<div className="overflow-y-auto flex flex-col pb-2.5">` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 295 | `<div className="flex flex-col items-center gap-3 mt-2 mb-4 px-5">` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 303 | `<span className="codicon codicon-empty-window"></span>` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 317 | `className="flex flex-col items-center gap-0.5 text-xs text-[var(--vscode-descriptionForeground)] hover:text-[var(--vscode-foreground)] cursor-pointer bg-transparent border-none p-1 rounded"` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 320 | `<div className="flex items-center gap-1.5 text-xs">` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 321 | `<GitBranch className="w-3 h-3 stroke-[2.5] flex-shrink-0" />` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 322 | `<span className="break-all text-center">` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 323 | `<span className="font-semibold">Current:</span>{" "}` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 324 | `{currentWorktree.branch \|\| "detached HEAD"}` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/WelcomeSection.tsx | 327 | `<span className="break-all text-center max-w-[300px]">` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 120 | `// (some rows like checkpoint_created don't set `partial`, and should be treated as non-partial)` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 204 | `<div className="overflow-hidden flex flex-col h-full relative">` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 208 | `"absolute top-0 left-0 right-0 z-10 pl-[15px] pr-[14px] bg-background",` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 218 | `<div className="grow flex" ref={scrollContainerRef}>` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/MessagesArea.tsx | 228 | `className="scrollable grow overflow-y-scroll"` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/ChatLayout.tsx | 16 | `<MainContent>{children}</MainContent>` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/ActionButtons.tsx | 132 | `<div className="flex px-3.5">` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/ActionButtons.tsx | 135 | `aria-label={showScrollToBottom ? "Scroll to bottom" : "Scroll to top"}` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/ActionButtons.tsx | 149 | `<span className="codicon codicon-chevron-down" />` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/ActionButtons.tsx | 151 | `<span className="codicon codicon-chevron-up" />` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/ActionButtons.tsx | 161 | `<div className="flex px-3.5" style={{ opacity }}>` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/components/layout/ActionButtons.tsx | 165 | `className={secondaryText ? "flex-1 mr-[6px]" : "flex-2"}` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 37 | `const prefix = "[context] \n> "` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 40 | `messageToSend = `${prefix} ${formattedQuote} ${suffix} ${messageToSend}`` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 44 | `console.log("[ChatView] handleSendMessage - Sending message:", messageToSend)` | (번역 필요) |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 263 | `console.error("Failed to cancel background command:", err),` | (번역 필요) |
| webview-ui/src/components/chat/PlanCompletionOutputRow.tsx | 21 | `<div className={cn(headClassNames, "justify-between px-1")}>` | (번역 필요) |
| webview-ui/src/components/chat/PlanCompletionOutputRow.tsx | 22 | `<div className="flex gap-2 items-center">` | (번역 필요) |
| webview-ui/src/components/chat/PlanCompletionOutputRow.tsx | 24 | `<span className="text-foreground font-bold">Plan Created</span>` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 17 | `SEARCH_BLOCK: "------- SEARCH",` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 19 | `REPLACE_BLOCK: "+++++++ REPLACE",` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 20 | `NEW_BEGIN: "*** Begin Patch",` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 21 | `NEW_END: "*** End Patch",` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 53 | `<div className="space-y-4 rounded-xs">` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 103 | `console.error("Failed to open file:", err),` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 140 | `<div className="bg-code rounded-xs border border-editor-group-border overflow-hidden">` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 142 | `className="w-full flex items-center gap-2 p-2 bg-code transition-colors justify-between cursor-pointer"` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 145 | `<div className="flex items-center gap-3 flex-1 w-full overflow-hidden">` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 146 | `<div className={cn("flex items-center gap-2 w-full", actionStyle.borderClass)}>` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 147 | `<ActionIcon className={cn("w-5 h-5", actionStyle.iconClass)} />` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 149 | `className="font-medium truncate hover:underline hover:text-link"` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 151 | `title="Open file in editor">` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 156 | `<div className="flex items-center gap-2">` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 162 | `<SquareArrowOutUpRightIcon className="size-2 text-description hover:text-foreground" />` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 169 | `className="border-t border-code-block-background max-h-80 overflow-y-auto overflow-x-auto"` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 172 | `<div className="font-mono text-xs w-max min-w-full">` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 174 | `<DiffLine key={`${index}-${line.slice(0, 20)}`} line={line} lineNumber={lineNumbers?.[index]} />` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 193 | `<div className="text-xs text-gray-500 flex">` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 194 | `{additions > 0 && <span className="text-success">+{additions}</span>}` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 195 | `{additions > 0 && deletions > 0 && <span className="mx-1">·</span>}` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 196 | `{deletions > 0 && <span className="text-error">-{deletions}</span>}` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 214 | `"flex text-xs font-mono",` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 219 | `isAddition && "border-l-4 border-l-green-500",` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 220 | `isDeletion && "border-l-4 border-l-red-500",` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 221 | `!isAddition && !isDeletion && "border-l-4 border-l-transparent",` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 238 | `"w-4 min-w-4 text-center py-0.5 select-none",` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 248 | `"flex-1 pr-2 py-0.5 whitespace-nowrap",` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 311 | `lines: lines.map((line) => `+ ${line}`),` | (번역 필요) |
| webview-ui/src/components/chat/DiffEditRow.tsx | 478 | `patch.lines.push(`${prefix} ${line}`)` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 44 | `return <LoaderCircleIcon className="size-2 animate-spin text-link shrink-0 mt-[1px]" />` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 46 | `return <CheckIcon className="size-2 text-success shrink-0 mt-[1px]" />` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 48 | `return <CircleXIcon className="size-2 text-error shrink-0 mt-[1px]" />` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 50 | `return <CircleSlashIcon className="size-2 text-foreground shrink-0 mt-[1px]" />` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 157 | `className={`text-xs font-medium text-foreground whitespace-pre-wrap break-words ${!isExpanded ? "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]" : ""}`}` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 163 | `aria-label="Show full subagent prompt"` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 164 | `className="absolute right-0 bottom-0 z-10 text-[11px] text-link border-0 px-1 py-[1px] cursor-pointer leading-none rounded-[2px]"` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 170 | `className="pointer-events-none absolute inset-y-0 -left-[6px] w-[6px]"` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 171 | `style={{ background: "linear-gradient(to left, var(--vscode-editor-background), transparent)" }}` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 186 | `return <div className="text-foreground opacity-80">Subagent status update unavailable.</div>` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 200 | `const title = singular ? "Cline wants to use a subagent:" : "Cline wants to use subagents:"` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 217 | `<div className="flex items-center gap-2.5 mb-3">` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 218 | `<NetworkIcon className="size-2 text-foreground" />` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 219 | `<span className="font-bold text-foreground">{title}</span>` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 232 | `const statsText = `${formatCount(entry.toolCalls)} tools called · ${formatCount(entry.contextTokens)} tokens · ${formatCost(entry.totalCost)}`` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 236 | `className="rounded-xs border border-editor-group-border px-2 py-1.5"` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 239 | `<div className="flex items-start gap-2">` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 241 | `<div className="min-w-0 flex-1">` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 250 | `<div className="mt-1 text-[11px] opacity-70 min-w-0 whitespace-pre-wrap break-words">` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 251 | `<span>{statsText}</span>` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 256 | `aria-label={isExpanded ? "Hide subagent output" : "Show subagent output"}` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 257 | `className="mt-1 text-[11px] opacity-80 flex items-center gap-1 bg-transparent border-0 p-0 cursor-pointer text-left text-foreground w-full"` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 261 | `<ChevronDownIcon className="size-2 shrink-0" />` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 263 | `<ChevronRightIcon className="size-2 shrink-0" />` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 265 | `<span className="shrink-0">{isExpanded ? "Hide output" : "Show output"}</span>` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 269 | `<div className="mt-1 text-[10px] opacity-70 min-w-0 truncate font-mono">{latestToolCallText}</div>` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 272 | `<div className="mt-2 text-xs opacity-80 wrap-anywhere overflow-hidden">` | (번역 필요) |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 277 | `<div className="mt-2 text-xs text-error whitespace-pre-wrap break-words">{entry.error}</div>` | (번역 필요) |
| webview-ui/src/components/chat/TypewriterText.tsx | 34 | `return <span className="truncate">{text.slice(0, displayedLength)}</span>` | (번역 필요) |
| webview-ui/src/components/chat/UserMessage.tsx | 64 | `console.error("Checkpoint restore error:", err)` | (번역 필요) |
| webview-ui/src/components/chat/UserMessage.tsx | 92 | `className="p-2.5 pr-1 my-1 text-badge-foreground rounded-xs"` | (번역 필요) |
| webview-ui/src/components/chat/UserMessage.tsx | 112 | `border: "1px solid",` | (번역 필요) |
| webview-ui/src/components/chat/UserMessage.tsx | 130 | `label="Restore All"` | (번역 필요) |
| webview-ui/src/components/chat/UserMessage.tsx | 133 | `title="Restore both the chat and workspace files to this checkpoint and send your edited message"` | (번역 필요) |
| webview-ui/src/components/chat/UserMessage.tsx | 139 | `label="Restore Chat"` | (번역 필요) |
| webview-ui/src/components/chat/UserMessage.tsx | 142 | `title="Restore just the chat to this checkpoint and send your edited message"` | (번역 필요) |
| webview-ui/src/components/chat/UserMessage.tsx | 148 | `<span className="ph-no-capture text-sm" style={{ display: "block" }}>` | (번역 필요) |
| webview-ui/src/components/chat/UserMessage.tsx | 181 | `: "var(--vscode-button-secondaryBackground, var(--vscode-descriptionForeground))",` | (번역 필요) |
| webview-ui/src/components/chat/UserMessage.tsx | 184 | `: "var(--vscode-button-secondaryForeground, var(--vscode-foreground))",` | (번역 필요) |
| webview-ui/src/components/chat/UserMessage.tsx | 186 | `padding: "4px 8px",` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 52 | `<p className="m-0 whitespace-pre-wrap text-error wrap-anywhere">` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 54 | `{requestId && <div>Request ID: {requestId}</div>}` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 60 | `<p className="m-0 whitespace-pre-wrap text-error wrap-anywhere flex flex-col gap-3">` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 64 | `{providerId && <span className="uppercase">[{providerId}] </span>}` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 65 | `{errorCode && <span>{errorCode}</span>}` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 73 | `It seems like you're having Windows PowerShell issues, please see this{" "}` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 75 | `className="underline text-inherit"` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 84 | `{errorMessage !== rawApiError && <div>{rawApiError}</div>}` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 90 | `<Button className="w-full mb-4" disabled={isLoginLoading} onClick={handleSignIn}>` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 93 | `<span className="ml-1 animate-spin">` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 94 | `<span className="codicon codicon-refresh"></span>` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 99 | `<span className="mb-4 text-description">(Click "Retry" below)</span>` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 107 | `return <p className="m-0 mt-0 whitespace-pre-wrap text-error wrap-anywhere">{message.text}</p>` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 111 | `<div className="flex flex-col p-2 rounded text-xs opacity-80 bg-quote text-foreground">` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 112 | `<div>The model used search patterns that don't match anything in the file. Retrying...</div>` | (번역 필요) |
| webview-ui/src/components/chat/ErrorRow.tsx | 120 | `Cline tried to access <code>{message.text}</code> which is blocked by the <code>.clineignore</code>` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 39 | `margin: "5px auto",` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 40 | `width: "calc(100% - 10px)",` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 58 | `transform: "translate(-50%, -50%)",` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 70 | `padding: "8px 0px",` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 72 | `borderTop: "1px solid var(--vscode-editorGroup-border)",` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 78 | `border: "1px solid var(--vscode-editorGroup-border)",` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 82 | `const browserActionBoxContainerStyle: CSSProperties = { padding: "10px 0 0 0" }` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 92 | `padding: "9px 10px",` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 99 | `const chatRowContentContainerStyle: CSSProperties = { padding: "10px 0 10px 0" }` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 270 | `const defaultMousePosition = `${browserSettings.viewport.width * 0.7},${browserSettings.viewport.height * 0.5}`` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 272 | `// Use latest state if we're on the last page and don't have a state yet` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 350 | `const maxWidth = browserSettings.viewport.width < BROWSER_VIEWPORT_PRESETS["Small Desktop (900x600)"].width ? 200 : undefined` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 353 | `// We don't declare a constant for the inline style here because `useSize` will try to modify the style object` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 354 | `// Which will cause `Uncaught TypeError: Cannot assign to read only property 'position' of object '#<Object>'`` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 360 | `<span className="codicon codicon-inspect" style={browserIconStyle}></span>` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 363 | `{isAutoApproved ? "Cline is using the browser:" : "Cline wants to use the browser:"}` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 374 | `margin: "0 auto 10px auto", // Center the container` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 380 | `"flex bg-input-background border border-input-border rounded-sm px-1 py-0.5 min-w-0 text-description w-full justify-center",` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 385 | `<span className="text-xs text-ellipsis overflow-hidden whitespace-nowrap">` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 402 | `alt="Browser screenshot"` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 405 | `(err) => console.error("Failed to open image:", err),` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 413 | `<span className="codicon codicon-globe" style={noScreenshotIconStyle} />` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 422 | `transition: "top 0.3s ease-out, left 0.3s ease-out",` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 440 | `padding: `9px 8px ${consoleLogsExpanded ? 0 : 8}px 8px`,` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 443 | `<span style={consoleLogsTextStyle}>Console Logs</span>` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 446 | `<CodeBlock source={`${"```"}shell\n${displayState.consoleLogs \|\| "(No new logs)"}\n${"```"}`} />` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 452 | `<div style={{ minHeight: maxActionHeight }}>{actionContent}</div>` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 520 | `<span style={browserSessionStartedTextStyle}>Browser Session Started</span>` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 577 | `return `Launch browser at ${text}`` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 579 | `return `Click (${coordinate?.replace(",", ", ")})`` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 583 | `return "Scroll down"` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 585 | `return "Scroll up"` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 587 | `return "Close browser"` | (번역 필요) |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 597 | `<span style={browseActionTextStyle}>Browse Action: </span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatErrorBoundary.tsx | 30 | `console.error("Error in ChatErrorBoundary:", error.message)` | (번역 필요) |
| webview-ui/src/components/chat/ChatErrorBoundary.tsx | 31 | `console.error("Component stack:", errorInfo.componentStack)` | (번역 필요) |
| webview-ui/src/components/chat/ChatErrorBoundary.tsx | 46 | `border: "1px solid var(--vscode-editorError-foreground)",` | (번역 필요) |
| webview-ui/src/components/chat/ChatErrorBoundary.tsx | 48 | `backgroundColor: "var(--vscode-inputValidation-errorBackground, rgba(255, 0, 0, 0.1))",` | (번역 필요) |
| webview-ui/src/components/chat/ChatErrorBoundary.tsx | 50 | `<h3 style={{ margin: "0 0 8px 0" }}>{errorTitle \|\| "Something went wrong displaying this content"}</h3>` | (번역 필요) |
| webview-ui/src/components/chat/ChatErrorBoundary.tsx | 51 | `<p style={{ margin: "0" }}>{errorBody \|\| `Error: ${this.state.error?.message \|\| "Unknown error"}`}</p>` | (번역 필요) |
| webview-ui/src/components/chat/ChatErrorBoundary.tsx | 93 | `throw new Error("This is an error for testing the error boundary")` | (번역 필요) |
| webview-ui/src/components/chat/ChatErrorBoundary.tsx | 117 | `background: "rgba(255, 0, 0, 0.5)",` | (번역 필요) |
| webview-ui/src/components/chat/ChatErrorBoundary.tsx | 119 | `padding: "2px 5px",` | (번역 필요) |
| webview-ui/src/components/chat/ChatErrorBoundary.tsx | 121 | `borderRadius: "0 0 0 4px",` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 54 | `reject(new Error("Image dimensions exceed maximum allowed size of 7500px."))` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 60 | `console.error("Failed to load image for dimension check:", err)` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 61 | `reject(new Error("Failed to load image to check dimensions."))` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 273 | `description: `${commit.shortHash} by ${commit.author} on ${commit.date}`,` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 280 | `console.error("Error searching commits:", error)` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 368 | `console.error("Error searching files:", error)` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 871 | `console.error("Error reading file:", reader.error)` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 904 | `console.warn("No valid images were processed")` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 943 | `.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c] \|\| c)` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 945 | `.replace(mentionRegexGlobal, '<mark class="mention-context-textarea-highlight">$&</mark>')` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 970 | `return `${prefix}<mark class="mention-context-textarea-highlight">${command}</mark>`` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1092 | `return `vscode-lm:${vsCodeLmModelSelector ? `${vsCodeLmModelSelector.vendor ?? ""}/${vsCodeLmModelSelector.family ?? ""}` : unknownModel}`` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1104 | `return `${selectedProvider}:${vercelAiGatewayModelId \|\| selectedModelId}`` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1217 | `console.error("Failed to parse resourceurls JSON:", error)` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1247 | `console.error("Error getting relative paths:", error)` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1348 | `className="relative flex transition-colors ease-in-out duration-100 px-3.5 py-2.5"` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1354 | `<div className="absolute inset-2.5 bg-[rgba(var(--vscode-errorForeground-rgb),0.1)] border-2 border-error rounded-xs flex items-center justify-center z-10 pointer-events-none">` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1355 | `<span className="text-error font-bold text-xs text-center">Image dimensions exceed 7500px</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1360 | `<span className="text-error font-bold text-xs">Files other than images are currently disabled</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1397 | `"absolute bottom-2.5 top-2.5 whitespace-pre-wrap break-words rounded-xs overflow-hidden bg-input-background",` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1398 | `isTextAreaFocused ? "left-3.5 right-3.5" : "left-3.5 right-3.5 border border-input-border",` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1416 | `padding: `9px 28px ${9 + thumbnailsHeight}px 9px`,` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1459 | `//border: "1px solid var(--vscode-input-border)",` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1469 | `// borderTop: "9px solid transparent",` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1473 | `borderBottom: `${thumbnailsHeight}px solid transparent`,` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1475 | `// borderRight: "54px solid transparent",` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1476 | `// borderLeft: "9px solid transparent", // NOTE: react-textarea-autosize doesn't calculate correct height when using borderLeft/borderRight so we need to use horizontal padding instead` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1478 | `// boxShadow: "0px 0px 0px 1px var(--vscode-input-border)",` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1479 | `padding: "9px 28px 9px 9px",` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1485 | `? "2px dashed var(--vscode-focusBorder)"` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1487 | `? `1px solid ${mode === "plan" ? PLAN_MODE_COLOR : "var(--vscode-focusBorder)"}`` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1516 | `className="absolute flex items-end bottom-4.5 right-5 z-10 h-8 text-xs"` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1518 | `<div className="flex flex-row items-center">` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1520 | `className={cn("input-icon-button", { disabled: sendingDisabled }, "codicon codicon-send text-sm")}` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1532 | `<div className="flex justify-between items-center -mt-[2px] px-3 pb-2">` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1534 | `<div className="relative flex-1 min-w-0 h-5">` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1536 | `<ButtonGroup className="absolute top-0 left-0 right-0 ease-in-out w-full h-5 z-10 flex items-center">` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1538 | `<TooltipContent>Add Context</TooltipContent>` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1542 | `aria-label="Add Context"` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1543 | `className="p-0 m-0 flex items-center"` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1554 | `<TooltipContent>Add Files & Images</TooltipContent>` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1558 | `aria-label="Add Files & Images"` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1585 | `title="Open API Settings">` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1586 | `<ModelButtonContent className="text-xs">{modelDisplayName}</ModelButtonContent>` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1595 | `className="text-xs px-2 flex flex-col gap-1"` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1598 | `{`In ${shownTooltipMode === "act" ? "Act" : "Plan"}  mode, Cline will ${shownTooltipMode === "act" ? "complete the task immediately" : "gather information to architect a plan"}`}` | (번역 필요) |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1600 | `Toggle w/ <kbd className="text-muted-foreground mx-1">{togglePlanActKeys}</kbd>` | (번역 필요) |
| webview-ui/src/components/chat/NewTaskPreview.tsx | 10 | `<div className="bg-(--vscode-badge-background) text-(--vscode-badge-foreground) rounded-[3px] p-[14px] pb-[6px]">` | (번역 필요) |
| webview-ui/src/components/chat/NewTaskPreview.tsx | 11 | `<span style={{ fontWeight: "bold" }}>Task</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 68 | `const HEADER_CLASSNAMES = "flex items-center gap-2.5 mb-3"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 96 | `export const ProgressIndicator = () => <LoaderCircleIcon className="size-2 mr-2 animate-spin" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 107 | `<div className="relative pt-2.5 px-4">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 114 | `// NOTE: it's important we don't distinguish between partial or complete here since our scroll effects in chatview need to handle height change during partial -> complete` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 180 | `// Auto-expand if it's last and we haven't already auto-expanded` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 222 | `// A command is pending if it hasn't started (no output) and hasn't completed` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 315 | `<span className="codicon codicon-error text-error mb-[-1.5px]" />,` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 316 | `<span className="text-error font-bold">Error</span>,` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 320 | `<CircleXIcon className="text-error size-2" />,` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 321 | `<span className="text-error font-bold">Cline is having trouble...</span>,` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 325 | `<TerminalIcon className="text-foreground size-2" />,` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 326 | `<span className="font-bold text-foreground">Cline wants to execute this command:</span>,` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 334 | `<span className="codicon codicon-server text-foreground mb-[-1.5px]" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 336 | `<span className="ph-no-capture font-bold text-foreground break-words">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 337 | `Cline wants to {mcpServerUse.type === "use_mcp_tool" ? "use a tool" : "access a resource"} on the{" "}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 346 | `<span className="codicon codicon-check text-success mb-[-1.5px]" />,` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 347 | `<span className="text-success font-bold">Task Completed</span>,` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 355 | `<span className="codicon codicon-question text-foreground mb-[-1.5px]" />,` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 356 | `<span className="font-bold text-foreground">Cline has a question:</span>,` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 405 | `<span style={{ fontWeight: "bold" }}>Conditional rules applied:</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 406 | `<span className="ph-no-capture break-words whitespace-pre-wrap">{names}</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 419 | `className={`codicon codicon-${name} ph-no-capture`}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 432 | `const isApplyingPatch = content?.startsWith("%%bash") && !content.endsWith("*** End Patch\nEOF")` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 434 | `? "Cline is creating patches to edit this file:"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 435 | `: "Cline wants to edit this file:"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 441 | `toolIcon("sign-out", "yellow", -90, "This file is outside of your workspace")}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 442 | `<span style={{ fontWeight: "bold" }}>{editToolTitle}</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 469 | `<span style={{ fontWeight: "bold" }}>Cline wants to delete this file:</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 487 | `<span className="font-bold">Cline wants to create a new file:</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 510 | `<span className="font-bold">Cline wants to read this file:</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 512 | `<div className="bg-code rounded-sm overflow-hidden border border-editor-group-border">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 514 | `className={cn("text-description flex items-center cursor-pointer select-none py-2 px-2.5", {` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 515 | `"cursor-default select-text": isImage,` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 520 | `(err) => console.error("Failed to open file:", err),` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 526 | `<span className="ph-no-capture whitespace-nowrap overflow-hidden text-ellipsis mr-2 text-left [direction: rtl]">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 541 | `toolIcon("sign-out", "yellow", -90, "This is outside of your workspace")}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 544 | `? "Cline wants to view the top level files in this directory:"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 545 | `: "Cline viewed the top level files in this directory:"}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 566 | `? "Cline wants to recursively view all files in this directory:"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 567 | `: "Cline recursively viewed all files in this directory:"}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 588 | `? "Cline wants to view source code definition names used in this directory:"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 589 | `: "Cline viewed source code definition names used in this directory:"}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 608 | `Cline wants to search this directory for <code className="break-all">{tool.regex}</code>:` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 625 | `<span className="font-bold">Cline is condensing the conversation:</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 627 | `<div className="bg-code overflow-hidden border border-editor-group-border rounded-[3px]">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 629 | `aria-label={isExpanded ? "Collapse summary" : "Expand summary"}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 630 | `className="text-description py-2 px-2.5 cursor-pointer select-none"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 642 | `<div className="flex items-center mb-2">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 643 | `<span className="font-bold mr-1">Summary:</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 645 | `<ChevronDownIcon className="my-0.5 shrink-0 size-4" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 647 | `<span className="ph-no-capture break-words whitespace-pre-wrap">{tool.content}</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 650 | `<div className="flex items-center">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 651 | `<span className="ph-no-capture whitespace-nowrap overflow-hidden text-ellipsis text-left flex-1 mr-2 [direction:rtl]">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 654 | `<ChevronRightIcon className="my-0.5 shrink-0 size-4" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 667 | `toolIcon("sign-out", "yellow", -90, "This URL is external")}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 670 | `? "Cline wants to fetch content from this URL:"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 671 | `: "Cline fetched content from this URL:"}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 675 | `className="bg-code rounded-xs overflow-hidden border border-editor-group-border py-2 px-2.5 cursor-pointer select-none"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 680 | `console.error("Failed to open URL:", err)` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 684 | `<span className="ph-no-capture whitespace-nowrap overflow-hidden text-ellipsis mr-2 [direction:rtl] text-left text-link underline">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 694 | `<SearchIcon className="size-2 rotate-90" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 696 | `toolIcon("sign-out", "yellow", -90, "This search is external")}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 699 | `? "Cline wants to search the web for:"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 700 | `: "Cline searched the web for:"}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 703 | `<div className="bg-code border border-editor-group-border overflow-hidden rounded-xs select-text py-[9px] px-2.5">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 704 | `<span className="ph-no-capture whitespace-nowrap overflow-hidden text-ellipsis mr-2 text-left [direction:rtl]">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 715 | `<span className="font-bold">Cline loaded the skill:</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 717 | `<div className="bg-code border border-editor-group-border overflow-hidden rounded-xs py-[9px] px-2.5">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 718 | `<span className="ph-no-capture font-medium">{tool.path}</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 782 | `<div className="bg-code rounded-xs py-2 px-2.5 mt-2">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 818 | `<div className="mb-1 opacity-80 uppercase">Arguments</div>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 858 | `<div className="flex items-start gap-2 py-2.5 px-3 bg-quote rounded-sm text-base text-foreground opacity-90 mb-2">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 859 | `<BellIcon className="mt-0.5 size-2 text-notification-foreground shrink-0" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 860 | `<div className="break-words flex-1">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 861 | `<span className="font-medium">MCP Notification: </span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 862 | `<span className="ph-no-capture">{message.text}</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 874 | `<div className={cn("flex-1 min-w-0 pl-1")}>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 917 | `<div className="w-full -mt-2.5">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 936 | `<div className="text-foreground flex items-center opacity-70 text-[12px] py-1 px-0">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 937 | `<i className="codicon codicon-book mr-1.5" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 943 | `title: "code changes",` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 966 | `<div className="bg-code flex flex-col border border-editor-group-border rounded-sm py-2.5 px-3">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 971 | `<CircleXIcon className="size-2 mr-2 text-error" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 973 | `<CircleSlashIcon className="size-2 mr-2" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 975 | `<CheckIcon className="size-2 mr-2 text-success" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 979 | `? "Generating explanation"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 981 | `? "Failed to generate explanation"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 983 | `? "Explanation cancelled"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 984 | `: "Generated explanation"}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 988 | `<div className="opacity-80 ml-6 mt-1.5 text-error break-words">{explanationInfo.error}</div>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 991 | `<div className="opacity-80 ml-6 mt-1.5">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 992 | `<div>{explanationInfo.title}</div>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 994 | `<div className="opacity-70 mt-1.5 break-all text-xs">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 995 | `<code className="bg-quote rounded-sm py-0.5 pr-1.5">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 998 | `<ArrowRightIcon className="inline size-2 mx-1" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 999 | `<code className="bg-quote rounded-sm py-0.5 px-1.5">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1000 | `{explanationInfo.toRef \|\| "working directory"}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1030 | `<div className="flex items-center mb-1">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1031 | `<TriangleAlertIcon className="mr-2 size-2 stroke-3 text-error" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1032 | `<span className="font-medium text-foreground">Shell Integration Unavailable</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1034 | `<div className="text-foreground opacity-80">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1036 | `<code>CMD/CTRL + Shift + P</code> → "Update") and make sure you're using a supported shell:` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1037 | `zsh, bash, fish, or PowerShell (<code>CMD/CTRL + Shift + P</code> → "Terminal: Select Default` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1054 | `<div className="flex flex-col gap-2">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1056 | `<p className="m-0 whitespace-pre-wrap text-error wrap-anywhere text-xs">{errorMessage}</p>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1058 | `<div className="flex flex-col bg-quote p-0 rounded-[3px] text-[12px] p-3">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1061 | `<TriangleAlertIcon className="mr-2 size-2" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1063 | `<RefreshCwIcon className="mr-2 size-2 animate-spin" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1065 | `<span className="font-medium text-foreground">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1066 | `{isFailed ? "Auto-Retry Failed" : "Auto-Retry in Progress"}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1072 | `Auto-retry failed after <strong>{maxAttempts}</strong> attempts. Manual` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1077 | `Attempt <strong>{attempt}</strong> of <strong>{maxAttempts}</strong> -` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1105 | `<LightbulbIcon className="mr-1.5 size-2 text-link" />` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1106 | `<span className="font-medium text-foreground">Shell integration issues</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1108 | `<div className="text-foreground opacity-90 mb-2">` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1114 | `"bg-button-background text-button-foreground border-0 rounded-xs py-1.5 px-3 text-[12px] flex items-center gap-1.5 cursor-pointer hover:bg-button-hover",` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1116 | `"cursor-default opacity-80 bg-success": isBackgroundModeEnabled,` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1125 | `console.error("Failed to enable background terminal:", error)` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1130 | `? "Background Terminal Enabled"` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1131 | `: "Enable Background Terminal (Recommended)"}` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1234 | `<span className="text-foreground font-bold">Cline wants to start a new task:</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1244 | `<span className="text-foreground font-bold">Cline wants to condense your conversation:</span>` | (번역 필요) |
| webview-ui/src/components/chat/ChatRow.tsx | 1254 | `<span className="text-foreground font-bold">Cline wants to create a Github issue:</span>` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 37 | `console.error("Error checking feedback history:", e)` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 67 | `console.error("Error updating feedback history:", e)` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 70 | `console.error("Error sending task feedback:", error)` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 75 | `<div className={cn("flex items-center justify-end shrink-0", classNames)}>` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 80 | `aria-label="This was helpful"` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 83 | `title="This was helpful">` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 86 | `className={`codicon ${feedback === "thumbs_up" ? "codicon-thumbsup-filled" : "codicon-thumbsup"}`}` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 94 | `aria-label="This wasn't helpful"` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 97 | `title="This wasn't helpful">` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 100 | `className={`codicon ${feedback === "thumbs_down" ? "codicon-thumbsdown-filled" : "codicon-thumbsdown"}`}` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 108 | `title="Report a bug"` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 109 | `aria-label="Report a bug">` | (번역 필요) |
| webview-ui/src/components/chat/TaskFeedbackButtons.tsx | 110 | `<span className="codicon codicon-bug" />` | (번역 필요) |
| webview-ui/src/components/chat/CreditLimitError.tsx | 22 | `message = "You have run out of credits.",` | (번역 필요) |
| webview-ui/src/components/chat/CreditLimitError.tsx | 43 | `console.error("Error fetching callback URL:", error)` | (번역 필요) |
| webview-ui/src/components/chat/CreditLimitError.tsx | 53 | `<div className="p-2 border-none rounded-md mb-2 bg-(--vscode-textBlockQuote-background)">` | (번역 필요) |
| webview-ui/src/components/chat/CreditLimitError.tsx | 54 | `<div className="mb-3 font-azeret-mono">` | (번역 필요) |
| webview-ui/src/components/chat/CreditLimitError.tsx | 55 | `<div className="text-error mb-2">{message}</div>` | (번역 필요) |
| webview-ui/src/components/chat/CreditLimitError.tsx | 59 | `Current Balance: <span className="font-bold">{currentBalance.toFixed(2)}</span>` | (번역 필요) |
| webview-ui/src/components/chat/CreditLimitError.tsx | 62 | `{totalSpent ? <div className="text-foreground">Total Spent: {totalSpent.toFixed(2)}</div> : null}` | (번역 필요) |
| webview-ui/src/components/chat/CreditLimitError.tsx | 64 | `<div className="text-foreground">Total Promotions: {totalPromotions.toFixed(2)}</div>` | (번역 필요) |
| webview-ui/src/components/chat/CreditLimitError.tsx | 69 | `<VSCodeButtonLink className="w-full mb-2" href={fullBuyCreditsUrl}>` | (번역 필요) |
| webview-ui/src/components/chat/CreditLimitError.tsx | 70 | `<span className="codicon codicon-credit-card mr-[6px] text-[14px]" />` | (번역 필요) |
| webview-ui/src/components/chat/CreditLimitError.tsx | 85 | `console.error("Error invoking action:", error)` | (번역 필요) |
| webview-ui/src/components/chat/CreditLimitError.tsx | 88 | `<span className="codicon codicon-refresh mr-1.5" />` | (번역 필요) |
| webview-ui/src/components/chat/SlashCommandMenu.tsx | 50 | `const description = command.description ? `, ${command.description}` : ""` | (번역 필요) |
| webview-ui/src/components/chat/SlashCommandMenu.tsx | 92 | `className="text-xs text-(--vscode-descriptionForeground) px-3 py-1 font-bold border-b border-(--vscode-editorGroup-border)"` | (번역 필요) |
| webview-ui/src/components/chat/SlashCommandMenu.tsx | 103 | `? "bg-(--vscode-quickInputList-focusBackground) text-(--vscode-quickInputList-focusForeground)"` | (번역 필요) |
| webview-ui/src/components/chat/SlashCommandMenu.tsx | 111 | `<div className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">` | (번역 필요) |
| webview-ui/src/components/chat/SlashCommandMenu.tsx | 112 | `<span className="ph-no-capture">/{command.name}</span>` | (번역 필요) |
| webview-ui/src/components/chat/SlashCommandMenu.tsx | 115 | `<div className="text-[0.85em] text-(--vscode-descriptionForeground) whitespace-normal overflow-hidden text-ellipsis">` | (번역 필요) |
| webview-ui/src/components/chat/SlashCommandMenu.tsx | 116 | `<span className="ph-no-capture">{command.description}</span>` | (번역 필요) |
| webview-ui/src/components/chat/SlashCommandMenu.tsx | 128 | `className="absolute bottom-[calc(100%-10px)] left-[15px] right-[15px] overflow-x-hidden z-1000"` | (번역 필요) |
| webview-ui/src/components/chat/SlashCommandMenu.tsx | 134 | `aria-label="Slash commands"` | (번역 필요) |
| webview-ui/src/components/chat/SlashCommandMenu.tsx | 138 | `style={{ maxHeight: "min(200px, calc(50vh))", overscrollBehavior: "contain" }}>` | (번역 필요) |