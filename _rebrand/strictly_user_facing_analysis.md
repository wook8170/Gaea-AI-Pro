# 초정밀 UI 문자열 분석 보고서 (코드/테마 명칭 완벽 제외)

## 1. 개요
사용자 요청에 따라 CSS 클래스명, 변수명, 테마 아이디 등 **코드 명칭**을 완전히 배제하고, 화면에 **텍스트**로 출력되는 문구만 선별했습니다.

## 2. 주의사항
> [!IMPORTANT]
> `badge.tsx`나 `button.tsx`의 `variant: "cline"`과 같은 테마 명칭은 수정 대상에서 제외되었습니다.

## 3. 분석 내역

| 파일 | 위치 | 노출 문자열 (원본) |
|---|---|---|
| webview-ui/src/context/ExtensionStateContext.tsx | 772 | `.catch((error: Error) => console.error("Failed to refresh Cline models:", error))` |
| webview-ui/src/context/ClineAuthContext.tsx | 49 | `console.log("Extension: ClineAuthContext: user updated:", user?.uid)` |
| webview-ui/src/context/ClineAuthContext.tsx | 101 | `throw new Error("useClineAuth must be used within a ClineAuthProvider")` |
| webview-ui/src/components/ui/button.stories.tsx | 12 | `"Displays different types of error messages in the chat interface, including API errors, credit limit errors, diff errors, and clineignore errors. Handles special error parsing for Cline provider errors and provides appropriate user actions.",` |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 39 | `description: "Let Cline run focused subagents in parallel to explore the codebase for you.",` |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 98 | `label: "Cline Web Tools",` |
| webview-ui/src/components/settings/sections/FeatureSettingsSection.tsx | 106 | `description: "Enables git worktree management for running parallel Cline tasks.",` |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 27 | `<VSCodeLink href="https://www.reddit.com/r/cline/"> r/cline</VSCodeLink>` |
| webview-ui/src/components/settings/sections/AboutSection.tsx | 46 | `<VSCodeLink href="https://cline.bot/">https://cline.bot</VSCodeLink>` |
| webview-ui/src/components/settings/providers/NebiusProvider.tsx | 31 | `helpText="This key is stored locally and only used to make API requests from this extension. (Note: Cline uses complex prompts and works best with Claude models. Less capable models may not work as expected.)"` |
| webview-ui/src/components/settings/GroqModelPicker.tsx | 266 | `If you're unsure which model to choose, Cline works best with{" "}` |
| webview-ui/src/components/settings/SettingsView.tsx | 96 | `tooltipText: "About Cline",` |
| webview-ui/src/components/settings/PreferredLanguageSetting.tsx | 44 | `<p className="text-sm text-description mt-1">The language that Cline should use for communication.</p>` |
| webview-ui/src/components/settings/ClineModelPicker.tsx | 140 | `console.error("Failed to refresh Cline recommended models:", error)` |
| webview-ui/src/components/settings/RequestyModelPicker.tsx | 267 | `If you're unsure which model to choose, Cline works best with{" "}` |
| webview-ui/src/components/settings/OpenRouterModelPicker.tsx | 377 | `If you're unsure which model to choose, Cline works best with{" "}` |
| webview-ui/src/components/settings/BasetenModelPicker.tsx | 269 | `If you're unsure which model to choose, Cline works best with{" "}` |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 254 | `console.error("Error toggling Cline rule:", error)` |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 438 | `{!isVisible && <TooltipContent>Manage Cline Rules & Workflows</TooltipContent>}` |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 442 | `aria-label={isVisible ? "Hide Cline Rules & Workflows" : "Show Cline Rules & Workflows"}` |
| webview-ui/src/components/cline-rules/ClineRulesToggleModal.tsx | 524 | `skill's description, Cline uses the <span className="font-bold">use_skill</span> tool to load` |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 54 | `"Displays different types of error messages in the chat interface, including API errors, credit limit errors, diff errors, and clineignore errors. Handles special error parsing for Cline provider errors and provides appropriate user actions.",` |
| webview-ui/src/components/chat/ErrorRow.stories.tsx | 209 | `message: "Please sign in to access Cline services.",` |
| webview-ui/src/components/chat/chat-view/hooks/useMessageHandlers.ts | 59 | `if (clineAsk === "resume_task" \|\| clineAsk === "resume_completed_task") {` |
| webview-ui/src/components/chat/SubagentStatusRow.tsx | 200 | `const title = singular ? "Cline wants to use a subagent:" : "Cline wants to use subagents:"` |
| webview-ui/src/components/chat/BrowserSessionRow.tsx | 363 | `{isAutoApproved ? "Cline is using the browser:" : "Cline wants to use the browser:"}` |
| webview-ui/src/components/chat/ChatTextArea.tsx | 1598 | `{`In ${shownTooltipMode === "act" ? "Act" : "Plan"}  mode, Cline will ${shownTooltipMode === "act" ? "complete the task immediately" : "gather information to architect a plan"}`}` |
| webview-ui/src/components/chat/ChatRow.tsx | 434 | `? "Cline is creating patches to edit this file:"` |
| webview-ui/src/components/chat/ChatRow.tsx | 435 | `: "Cline wants to edit this file:"` |
| webview-ui/src/components/chat/ChatRow.tsx | 544 | `? "Cline wants to view the top level files in this directory:"` |
| webview-ui/src/components/chat/ChatRow.tsx | 545 | `: "Cline viewed the top level files in this directory:"}` |
| webview-ui/src/components/chat/ChatRow.tsx | 566 | `? "Cline wants to recursively view all files in this directory:"` |
| webview-ui/src/components/chat/ChatRow.tsx | 567 | `: "Cline recursively viewed all files in this directory:"}` |
| webview-ui/src/components/chat/ChatRow.tsx | 588 | `? "Cline wants to view source code definition names used in this directory:"` |
| webview-ui/src/components/chat/ChatRow.tsx | 589 | `: "Cline viewed source code definition names used in this directory:"}` |
| webview-ui/src/components/chat/ChatRow.tsx | 670 | `? "Cline wants to fetch content from this URL:"` |
| webview-ui/src/components/chat/ChatRow.tsx | 671 | `: "Cline fetched content from this URL:"}` |
| webview-ui/src/components/chat/ChatRow.tsx | 699 | `? "Cline wants to search the web for:"` |
| webview-ui/src/components/chat/ChatRow.tsx | 700 | `: "Cline searched the web for:"}` |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 67 | `it("renders clineignore error", () => {` |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 132 | `expect(screen.getByText("Sign in to Cline")).toBeInTheDocument()` |
| webview-ui/src/components/chat/ErrorRow.test.tsx | 176 | `it("falls back to regular error message when ClineError.parse returns null", async () => {` |
| webview-ui/src/components/mcp/configuration/tabs/marketplace/McpSubmitCard.tsx | 38 | `<a href="https://github.com/cline/mcp-marketplace">github.com/cline/mcp-marketplace</a>` |
| webview-ui/src/components/welcome/WelcomeView.tsx | 42 | `<h2 className="text-lg font-semibold">Hi, I'm Cline</h2>` |
| webview-ui/src/components/common/WhatsNewItems.tsx | 82 | `<strong>Try Codex 5.3:</strong> OpenAI's latest coding model, now available in Cline!{" "}` |
| webview-ui/src/components/common/WhatsNewItems.tsx | 90 | `<strong>Try Cline CLI 2.0:</strong> with /mcp functionality added in CLI{" "}` |
| webview-ui/src/components/common/WhatsNewItems.tsx | 91 | `<code style={inlineCodeStyle}>npm install -g cline</code>` |
| webview-ui/src/components/common/TelemetryBanner.tsx | 24 | `<h3 className="m-0">Help Improve Cline</h3>` |
| webview-ui/src/components/worktrees/WorktreesView.tsx | 235 | `setMergeError(err instanceof Error ? err.message : "Failed to create task for Cline")` |
| webview-ui/src/components/onboarding/data-steps.ts | 15 | `title: "How will you use Cline?",` |
| webview-ui/src/components/onboarding/data-steps.ts | 19 | `{ text: "Login to Cline", action: "signin", variant: "secondary" },` |
| webview-ui/src/components/onboarding/data-steps.ts | 53 | `{ title: "Bring my own API key", description: "Use Cline with your provider of choice", type: NEW_USER_TYPE.BYOK },` |
| webview-ui/src/App.stories.tsx | 324 | `const title = canvas.getByText("How will you use Cline?")` |
| webview-ui/src/App.stories.tsx | 371 | `await expect(canvas.getByText("How will you use Cline?")).toBeInTheDocument()` |
| webview-ui/src/App.stories.tsx | 414 | `story: "An active conversation showing a typical interaction with Cline, including task creation, tool usage, and AI responses.",` |
| webview-ui/src/App.stories.tsx | 536 | `story: "Shows how Cline handles and displays error messages, helping users understand and resolve issues.",` |
| webview-ui/src/App.stories.tsx | 554 | `story: "Shows the interface with auto-approval enabled, allowing Cline to execute certain actions automatically without user confirmation.",` |
| webview-ui/src/App.stories.tsx | 587 | `story: "Shows Cline in Plan mode, where it focuses on creating detailed plans and discussing approaches before implementation.",` |
| webview-ui/src/App.stories.tsx | 623 | `story: "Shows Cline performing browser automation tasks, including launching browsers, clicking elements, and testing web applications.",` |
| webview-ui/src/App.stories.tsx | 748 | `"Shows followup question state where Cline asks for next steps.",` |
| webview-ui/src/App.stories.tsx | 777 | `"Shows plan mode response where Cline presents a detailed plan for user approval.",` |
| webview-ui/src/App.stories.tsx | 789 | `steps_to_reproduce: "1. Open Cline\n2. Start a new task\n3. Observe the error",` |
| webview-ui/src/App.stories.tsx | 790 | `what_happened: "Cline crashes unexpectedly",` |
| src/core/prompts/system-prompt/variants/xs/overrides.ts | 104 | `"You are Cline, a senior software engineer + precise task runner. Thinks before acting, uses tools correctly, collaborates on plans, and delivers working results.",` |
| src/core/prompts/system-prompt/variants/hermes/overrides.ts | 7 | `"You are Cline, ",` |
| src/core/prompts/system-prompt/variants/gemini-3/overrides.ts | 5 | ``You are Cline, a software engineering AI. Your mission is to execute precisely what is requested - implement exactly what was asked for, with the simplest solution that fulfills all requirements. Ask clarifying questions to ensure you understand the user's requirements and that they understand your approach before proceeding.`` |
| src/core/prompts/system-prompt/CONTRIBUTING.md | 706 | `"systemPrompt": "You are Cline...\n\n====\n\n# Agent Role\n...",` |
| src/core/prompts/system-prompt/components/agent_role.ts | 6 | `"You are Cline,",` |
| src/core/prompts/system-prompt/components/feedback.ts | 9 | `When the user directly asks about Cline (eg 'can Cline do...', 'does Cline have...') or asks in second person (eg 'are you able...', 'can you do...'), first use the web_fetch tool to gather information to answer the question from Cline docs at https://docs.cline.bot.` |
| src/core/prompts/system-prompt/components/feedback.ts | 10 | `- The available sub-pages are \`getting-started\` (Intro for new coders, installing Cline and dev essentials), \`model-selection\` (Model Selection Guide, Custom Model Configs, Bedrock, Vertex, Codestral, LM Studio, Ollama), \`features\` (Auto approve, Checkpoints, Cline rules, Drag & Drop, Plan & Act, Workflows, etc), \`task-management\` (Task and Context Management in Cline), \`prompt-engineering\` (Improving your prompting skills, Prompt Engineering Guide), \`cline-tools\` (Cline Tools Reference Guide, New Task Tool, Remote Browser Support, Slash Commands), \`mcp\` (MCP Overview, Adding/Configuring Servers, Transport Mechanisms, MCP Dev Protocol), \`enterprise\` (Cloud provider integration, Security concerns, Custom instructions), \`more-info\` (Telemetry and other reference content)` |
| src/core/prompts/system-prompt/__tests__/PromptBuilder.test.ts | 58 | `"You are Cline.\n\n{{TOOL_USE_SECTION}}\n\n{{CAPABILITIES_SECTION}}\n\n{{RULES_SECTION}}\n\n{{SYSTEM_INFO_SECTION}}",` |
| src/core/prompts/system-prompt/__tests__/PromptBuilder.test.ts | 76 | `expect(result).to.include("You are Cline.")` |
| src/core/prompts/system-prompt/__tests__/PromptBuilder.test.ts | 104 | `expect(result).to.include("You are Cline.")` |
| src/core/prompts/system-prompt/__tests__/PromptBuilder.test.ts | 194 | `expect(result).to.include("You are Cline.")` |
| src/core/prompts/system-prompt-legacy/families/next-gen-models/gpt-5.ts | 778 | `When the user directly asks about Cline (eg 'can Cline do...', 'does Cline have...') or asks in second person (eg 'are you able...', 'can you do...'), first use the web_fetch tool to gather information to answer the question from Cline docs at https://docs.cline.bot.` |
| src/core/prompts/system-prompt-legacy/families/next-gen-models/gpt-5.ts | 779 | `- The available sub-pages are \`getting-started\` (Intro for new coders, installing Cline and dev essentials), \`model-selection\` (Model Selection Guide, Custom Model Configs, Bedrock, Vertex, Codestral, LM Studio, Ollama), \`features\` (Auto approve, Checkpoints, Cline rules, Drag & Drop, Plan & Act, Workflows, etc), \`task-management\` (Task and Context Management in Cline), \`prompt-engineering\` (Improving your prompting skills, Prompt Engineering Guide), \`cline-tools\` (Cline Tools Reference Guide, New Task Tool, Remote Browser Support, Slash Commands), \`mcp\` (MCP Overview, Adding/Configuring Servers, Transport Mechanisms, MCP Dev Protocol), \`enterprise\` (Cloud provider integration, Security concerns, Custom instructions), \`more-info\` (Telemetry and other reference content)` |
| src/core/prompts/responses.ts | 28 | ``Access to ${path} is blocked by the .clineignore file settings. You must try to continue in the task without using this file, or ask the user to update the .clineignore file.`,` |
| src/core/prompts/responses.ts | 31 | ``Command execution blocked by CLINE_COMMAND_PERMISSIONS: ${reason}. You must try a different approach or ask the user to update the permission settings.`,` |
| src/core/prompts/responses.ts | 283 | ``# .clineignore\n\n(The following is provided by a root-level .clineignore file where the user has specified files and directories that should not be accessed. When using list_files, you'll notice a ${LOCK_TEXT_SYMBOL} next to files that are blocked. Attempting to access the file's contents e.g. through read_file will result in an error.)\n\n${content}\n.clineignore`,` |
| src/core/prompts/responses.ts | 292 | ``# .clinerules\n\nThe following is provided by a root-level .clinerules file where the user has specified instructions for this working directory (${cwd.toPosix()})\n\n${content}`,` |
| src/extension.ts | 191 | `Logger.log("[Cline Dev] Dev mode activated & dev commands registered")` |
| src/extension.ts | 194 | `Logger.log("[Cline Dev] Failed to register dev commands: " + error)` |
| src/extension.ts | 288 | `const addAction = new vscode.CodeAction("Add to Cline", vscode.CodeActionKind.QuickFix)` |
| src/extension.ts | 291 | `title: "Add to Cline",` |
| src/extension.ts | 297 | `const explainAction = new vscode.CodeAction("Explain with Cline", vscode.CodeActionKind.RefactorExtract) // Using a refactor kind` |
| src/extension.ts | 300 | `title: "Explain with Cline",` |
| src/extension.ts | 306 | `const improveAction = new vscode.CodeAction("Improve with Cline", vscode.CodeActionKind.RefactorRewrite) // Using a refactor kind` |
| src/extension.ts | 309 | `title: "Improve with Cline",` |
| src/extension.ts | 316 | `const fixAction = new vscode.CodeAction("Fix with Cline", vscode.CodeActionKind.QuickFix)` |
| src/extension.ts | 320 | `title: "Fix with Cline",` |
| src/extension.ts | 545 | `Logger.log(`[Cline] extension activated in ${performance.now() - activationStartTime} ms`)` |
| src/extension.ts | 598 | `outputChannel.appendLine("[Cline] Setting up VS Code host...")` |
| src/extension.ts | 656 | `Logger.warn("Task URI handling timed out waiting for Cline sidebar visibility")` |
| package.json | 3 | `"displayName": "Cline",` |
| package.json | 15 | `"name": "Cline Bot Inc."` |
| package.json | 56 | `"description": "cline",` |
| package.json | 66 | `"title": "Meet Cline, your new coding partner",` |
| package.json | 67 | `"description": "Cline codes like a developer because it thinks like one. Here are 5 ways to put it to work:",` |
| package.json | 72 | `"description": "Tell Cline what you want to achieve. It plans, asks, and then codes, like a true partner.",` |
| package.json | 79 | `"title": "Let Cline Learn Your Codebase",` |
| package.json | 80 | `"description": "Point Cline to your project. It builds understanding to make smart, context-aware changes.",` |
| package.json | 88 | `"description": "Cline empowers you with State-of-the-Art AI, connecting to top models (Anthropic, Gemini, OpenAI & more).",` |
| package.json | 104 | `"description": "Review Cline's plans and diffs. Approve changes before they happen. No surprises.",` |
| package.json | 119 | `"title": "Cline",` |
| package.json | 174 | `"title": "Add to Cline",` |
| package.json | 179 | `"title": "Add to Cline",` |
| package.json | 189 | `"title": "Generate Commit Message with Cline",` |
| package.json | 195 | `"title": "Generate Commit Message with Cline - Stop",` |
| package.json | 201 | `"title": "Explain with Cline",` |
| package.json | 206 | `"title": "Improve with Cline",` |
| package.json | 211 | `"title": "Generate Jupyter Cell with Cline",` |
| package.json | 217 | `"title": "Explain Jupyter Cell with Cline",` |
| package.json | 223 | `"title": "Improve Jupyter Cell with Cline",` |
| package.json | 245 | `"title": "Add to Cline Chat",` |
| package.json | 254 | `"when": "commentEditorFocused && commentController == cline-ai-review && !commentIsEmpty"` |
| package.json | 322 | `"when": "config.git.enabled && scmProvider == git && !cline.isGeneratingCommit"` |
| package.json | 327 | `"when": "config.git.enabled && scmProvider == git && cline.isGeneratingCommit"` |
| package.json | 352 | `"when": "config.git.enabled && !cline.isGeneratingCommit"` |
| package.json | 356 | `"when": "config.git.enabled && cline.isGeneratingCommit"` |
| package.json | 367 | `"when": "commentController == cline-ai-review"` |
| package.json | 374 | `"when": "commentController == cline-ai-review"` |
| package.json | 379 | `"title": "Cline",` |
| cli/package.json | 41 | `"unlink": "npm unlink -g cline",` |
| cli/package.json | 61 | `"name": "Cline Bot Inc."` |