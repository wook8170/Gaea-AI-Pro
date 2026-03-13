# 리브랜딩 분석 보고서 (Cline -> Gaea-AI-Pro)

## 1. 개요
이 보고서는 `Cline` 브랜드를 `Gaea-AI-Pro`로 변경하기 위한 전수 조사 결과입니다. 사용자에게 직접 노출되는 문자열과 시스템 내부의 간접 참조 리소스를 구분하여 정리했습니다.

> [!IMPORTANT]
> `grpc-js`가 생성한 코드(`src/generated/`)나 시스템 내부 프로토콜 이름은 수정 시 통신 장애를 유발할 수 있으므로 'High' 영향도로 분류하며 특별한 주의가 필요합니다.

## 2. 분석 상세 내역

| 파일 | 위치(Line) | 기능/역할 | 유형 | 직접/간접 | 영향도 | 상세 설명 |
|---|---|---|---|---|---|---|
| src/core/prompts/commands.ts | 142 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `The user has explicitly asked you to help them cre`) |
| src/core/prompts/commands.ts | 143 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `When creating a new Cline rule file, you should NO`) |
| src/core/prompts/commands.ts | 148 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `Your task is to create a new Cline rule file which`) |
| src/core/prompts/commands.ts | 149 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `The Cline rule file must be formatted as markdown `) |
| src/core/prompts/commands.ts | 152 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `- Path: (required) The path of the file to write t`) |
| src/core/prompts/commands.ts | 153 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `- Content: (required) The content to write to the `) |
| src/core/prompts/commands.ts | 154 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `  1. Format the Cline rule file to have distinct g`) |
| src/core/prompts/commands.ts | 155 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `  2. These guidelines can be specific to the task(`) |
| src/core/prompts/commands.ts | 161 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `<path>.clinerules/{file name}.md</path>`) |
| src/core/prompts/commands.ts | 162 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `<content>Cline rule file content here</content>`) |
| src/core/prompts/commands.ts | 167 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `<path>.clinerules/project-preferences.md</path>`) |
| src/core/prompts/commands.ts | 194 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `Below is the user's input when they indicated that`) |
| src/core/prompts/commands.ts | 200 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `The user has explicitly asked you to help them sub`) |
| src/core/prompts/system-prompt/tools/execute_command.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/execute_command.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/execute_command.ts | 5 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const GENERIC: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/execute_command.ts | 7 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.BASH,`) |
| src/core/prompts/system-prompt/tools/execute_command.ts | 37 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/execute_command.ts | 39 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.BASH,`) |
| src/core/prompts/system-prompt/tools/execute_command.ts | 40 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	name: ClineDefaultTool.BASH,`) |
| src/core/prompts/system-prompt/tools/execute_command.ts | 60 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/execute_command.ts | 65 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const GEMINI_3: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/execute_command.ts | 67 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.BASH,`) |
| src/core/prompts/system-prompt/tools/execute_command.ts | 68 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	name: ClineDefaultTool.BASH,`) |
| src/core/prompts/system-prompt/tools/execute_command.ts | 88 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `export const execute_command_variants: ClineToolSp`) |
| src/core/prompts/system-prompt/tools/attempt_completion.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/attempt_completion.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/attempt_completion.ts | 5 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.ATTEMPT`) |
| src/core/prompts/system-prompt/tools/attempt_completion.ts | 7 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/attempt_completion.ts | 34 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			dependencies: [ClineDefaultTool.TODO],`) |
| src/core/prompts/system-prompt/tools/attempt_completion.ts | 41 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/attempt_completion.ts | 68 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			dependencies: [ClineDefaultTool.TODO],`) |
| src/core/prompts/system-prompt/tools/attempt_completion.ts | 75 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/attempt_completion.ts | 96 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			dependencies: [ClineDefaultTool.TODO],`) |
| src/core/prompts/system-prompt/tools/attempt_completion.ts | 103 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/web_search.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/web_search.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/web_search.ts | 6 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const GENERIC: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/web_search.ts | 8 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.WEB_SEARCH,`) |
| src/core/prompts/system-prompt/tools/web_search.ts | 19 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	contextRequirements: (context) => context.provide`) |
| src/core/prompts/system-prompt/tools/web_search.ts | 43 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/web_search.ts | 45 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.WEB_SEARCH,`) |
| src/core/prompts/system-prompt/tools/web_search.ts | 49 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	contextRequirements: (context) => context.provide`) |
| src/core/prompts/system-prompt/tools/web_search.ts | 70 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/list_files.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/list_files.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/list_files.ts | 6 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.LIST_FILES`) |
| src/core/prompts/system-prompt/tools/list_files.ts | 8 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/list_files.ts | 33 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/list_files.ts | 55 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/init.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineToolSet } from "../registry/ClineToo`) |
| src/core/prompts/system-prompt/tools/init.ts | 28 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: ` * Registers all tool variants with the ClineToolS`) |
| src/core/prompts/system-prompt/tools/init.ts | 32 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `export function registerClineToolSets(): void {`) |
| src/core/prompts/system-prompt/tools/init.ts | 62 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineToolSet.register(v)`) |
| src/core/prompts/system-prompt/tools/read_file.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/read_file.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/read_file.ts | 6 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.FILE_READ`) |
| src/core/prompts/system-prompt/tools/read_file.ts | 8 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/read_file.ts | 25 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/read_file.ts | 42 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/generate_explanation.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/generate_explanation.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/generate_explanation.ts | 5 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.GENERATE_EXPLANATION`) |
| src/core/prompts/system-prompt/tools/generate_explanation.ts | 7 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const GENERIC: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/ask_followup_question.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/ask_followup_question.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/ask_followup_question.ts | 6 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/ask_followup_question.ts | 8 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.ASK,`) |
| src/core/prompts/system-prompt/tools/ask_followup_question.ts | 32 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/ask_followup_question.ts | 34 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.ASK,`) |
| src/core/prompts/system-prompt/tools/ask_followup_question.ts | 55 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/use_skill.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/use_skill.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/use_skill.ts | 5 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.USE_SKILL`) |
| src/core/prompts/system-prompt/tools/use_skill.ts | 7 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/replace_in_file.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/replace_in_file.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/replace_in_file.ts | 6 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.FILE_EDIT`) |
| src/core/prompts/system-prompt/tools/replace_in_file.ts | 63 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/replace_in_file.ts | 86 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/replace_in_file.ts | 107 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/load_mcp_documentation.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/load_mcp_documentation.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/load_mcp_documentation.ts | 14 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.MCP_DOCS`) |
| src/core/prompts/system-prompt/tools/load_mcp_documentation.ts | 16 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/new_task.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/new_task.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/new_task.ts | 22 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.NEW_TASK`) |
| src/core/prompts/system-prompt/tools/new_task.ts | 24 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/search_files.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/search_files.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/search_files.ts | 21 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.SEARCH`) |
| src/core/prompts/system-prompt/tools/search_files.ts | 23 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/search_files.ts | 53 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/search_files.ts | 83 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/README.md | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `This directory contains the tool registration syst`) |
| src/core/prompts/system-prompt/tools/README.md | 7 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `Each tool file in this directory exports a `{toolN`) |
| src/core/prompts/system-prompt/tools/README.md | 40 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineToolSet } from "../registry/ClineToo`) |
| src/core/prompts/system-prompt/tools/README.md | 44 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const claudeTools = ClineToolSet.getTools(PromptVa`) |
| src/core/prompts/system-prompt/tools/README.md | 47 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const writeToFileTool = ClineToolSet.getToolByName`) |
| src/core/prompts/system-prompt/tools/README.md | 55 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool, PromptVariant, type Cli`) |
| src/core/prompts/system-prompt/tools/README.md | 57 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const claude: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/README.md | 66 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const gpt: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/write_to_file.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/write_to_file.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/write_to_file.ts | 25 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.FILE_NEW`) |
| src/core/prompts/system-prompt/tools/write_to_file.ts | 27 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const GENERIC: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/write_to_file.ts | 51 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/write_to_file.ts | 73 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/web_fetch.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/web_fetch.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/web_fetch.ts | 6 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const GENERIC: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/web_fetch.ts | 8 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.WEB_FETCH,`) |
| src/core/prompts/system-prompt/tools/web_fetch.ts | 19 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	contextRequirements: (context) => context.provide`) |
| src/core/prompts/system-prompt/tools/web_fetch.ts | 37 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/web_fetch.ts | 39 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.WEB_FETCH,`) |
| src/core/prompts/system-prompt/tools/web_fetch.ts | 43 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	contextRequirements: (context) => context.provide`) |
| src/core/prompts/system-prompt/tools/web_fetch.ts | 59 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/use_mcp_tool.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/use_mcp_tool.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/use_mcp_tool.ts | 34 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/use_mcp_tool.ts | 36 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.MCP_USE,`) |
| src/core/prompts/system-prompt/tools/act_mode_respond.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/act_mode_respond.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/act_mode_respond.ts | 23 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.ACT_MODE`) |
| src/core/prompts/system-prompt/tools/act_mode_respond.ts | 25 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/act_mode_respond.ts | 59 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/act_mode_respond.ts | 64 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const GEMINI_3: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/apply_patch.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/apply_patch.ts | 4 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/apply_patch.ts | 79 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/apply_patch.ts | 81 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.APPLY_PATCH,`) |
| src/core/prompts/system-prompt/tools/apply_patch.ts | 96 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/focus_chain.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/focus_chain.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/focus_chain.ts | 6 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/focus_chain.ts | 8 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.TODO,`) |
| src/core/prompts/system-prompt/tools/subagent.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/subagent.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/subagent.ts | 5 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.USE_SUBAGENTS`) |
| src/core/prompts/system-prompt/tools/subagent.ts | 7 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/list_code_definition_names.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/list_code_definition_names.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/list_code_definition_names.ts | 6 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.LIST_CODE_DEF`) |
| src/core/prompts/system-prompt/tools/list_code_definition_names.ts | 8 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/list_code_definition_names.ts | 25 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/list_code_definition_names.ts | 41 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/plan_mode_respond.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/plan_mode_respond.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/plan_mode_respond.ts | 23 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.PLAN_MODE`) |
| src/core/prompts/system-prompt/tools/plan_mode_respond.ts | 25 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/plan_mode_respond.ts | 53 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			dependencies: [ClineDefaultTool.TODO],`) |
| src/core/prompts/system-prompt/tools/plan_mode_respond.ts | 58 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/plan_mode_respond.ts | 78 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const GEMINI_3: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/plan_mode_respond.ts | 104 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			dependencies: [ClineDefaultTool.TODO],`) |
| src/core/prompts/system-prompt/tools/plan_mode_respond.ts | 109 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/access_mcp_resource.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/access_mcp_resource.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/access_mcp_resource.ts | 23 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const generic: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/access_mcp_resource.ts | 25 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.MCP_ACCESS,`) |
| src/core/prompts/system-prompt/tools/access_mcp_resource.ts | 47 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_GPT_5: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/access_mcp_resource.ts | 49 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	id: ClineDefaultTool.MCP_ACCESS,`) |
| src/core/prompts/system-prompt/tools/access_mcp_resource.ts | 74 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/browser_action.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/tools/browser_action.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import type { ClineToolSpec } from "../spec"`) |
| src/core/prompts/system-prompt/tools/browser_action.ts | 5 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const id = ClineDefaultTool.BROWSER`) |
| src/core/prompts/system-prompt/tools/browser_action.ts | 7 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const GENERIC: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/tools/browser_action.ts | 60 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `const NATIVE_NEXT_GEN: ClineToolSpec = {`) |
| src/core/prompts/system-prompt/variants/variant-builder.ts | 2 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/variants/variant-builder.ts | 123 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	tools(...tools: ClineDefaultTool[]): this {`) |
| src/core/prompts/system-prompt/variants/variant-builder.ts | 134 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	overrideTool(tool: ClineDefaultTool, override: Co`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 4 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 51 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.BASH,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 52 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_READ,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 53 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_NEW,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 54 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_EDIT,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 55 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.SEARCH,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 56 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.LIST_FILES,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 57 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.LIST_CODE_DEF,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 58 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.BROWSER,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 59 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.WEB_FETCH,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 60 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.WEB_SEARCH,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 61 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_USE,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 62 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_ACCESS,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 63 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.ASK,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 64 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.ATTEMPT,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 65 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.PLAN_MODE,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 66 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_DOCS,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 67 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.TODO,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 68 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.GENERATE_EXPLANATION,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 69 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.USE_SKILL,`) |
| src/core/prompts/system-prompt/variants/next-gen/config.ts | 70 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.USE_SUBAGENTS,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 4 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 40 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.BASH,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 41 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_READ,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 42 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_NEW,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 43 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_EDIT,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 44 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.SEARCH,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 45 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.LIST_FILES,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 46 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.LIST_CODE_DEF,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 47 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.BROWSER,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 48 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_USE,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 49 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_ACCESS,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 50 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.ASK,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 51 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.ATTEMPT,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 52 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.PLAN_MODE,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 53 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_DOCS,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 54 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.TODO,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 55 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.GENERATE_EXPLANATION,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 56 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.USE_SKILL,`) |
| src/core/prompts/system-prompt/variants/trinity/config.ts | 57 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.USE_SUBAGENTS,`) |
| src/core/prompts/system-prompt/variants/devstral/overrides.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `export const DEVSTRAL_AGENT_ROLE_TEMPLATE = `You a`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 3 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 38 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.BASH,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 39 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_READ,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 40 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_NEW,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 41 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_EDIT,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 42 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.SEARCH,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 43 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.LIST_FILES,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 44 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.LIST_CODE_DEF,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 45 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.BROWSER,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 46 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.WEB_FETCH,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 47 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.WEB_SEARCH,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 48 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_USE,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 49 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_ACCESS,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 50 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.ASK,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 51 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.ATTEMPT,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 52 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.PLAN_MODE,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 53 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_DOCS,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 54 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.TODO,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 55 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.USE_SKILL,`) |
| src/core/prompts/system-prompt/variants/devstral/config.ts | 56 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.USE_SUBAGENTS,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 16 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 50 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.BASH,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 51 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_READ,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 52 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_NEW,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 53 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_EDIT,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 54 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.SEARCH,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 55 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.LIST_FILES,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 56 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.LIST_CODE_DEF,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 57 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.BROWSER,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 58 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_USE,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 59 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_ACCESS,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 60 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.ASK,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 61 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.ATTEMPT,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 62 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.NEW_TASK,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 63 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.PLAN_MODE,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 64 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_DOCS,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 65 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.TODO,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 81 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `	// .overrideTool(ClineDefaultTool.BASH, {`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 114 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		.tools(ClineDefaultTool.FILE_READ, ClineDefaultT`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 135 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.BASH,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 136 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.FILE_READ,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 137 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.FILE_NEW,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 138 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.FILE_EDIT,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 139 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.SEARCH,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 140 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.LIST_FILES,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 141 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.LIST_CODE_DEF,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 142 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.BROWSER,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 143 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.WEB_FETCH,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 144 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.MCP_USE,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 145 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.MCP_ACCESS,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 146 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.ASK,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 147 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.ATTEMPT,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 148 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.NEW_TASK,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 149 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.PLAN_MODE,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 150 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.MCP_DOCS,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 151 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.TODO,`) |
| src/core/prompts/system-prompt/variants/config.template.ts | 152 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `			ClineDefaultTool.USE_SUBAGENTS,`) |
| src/core/prompts/system-prompt/variants/xs/overrides.ts | 104 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		"You are Cline, a senior software engineer + pre`) |
| src/core/prompts/system-prompt/variants/xs/config.ts | 4 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/variants/xs/config.ts | 44 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.BASH,`) |
| src/core/prompts/system-prompt/variants/xs/config.ts | 45 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_READ,`) |
| src/core/prompts/system-prompt/variants/xs/config.ts | 46 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_NEW,`) |
| src/core/prompts/system-prompt/variants/xs/config.ts | 47 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_EDIT,`) |
| src/core/prompts/system-prompt/variants/xs/config.ts | 48 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.SEARCH,`) |
| src/core/prompts/system-prompt/variants/xs/config.ts | 49 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.ASK,`) |
| src/core/prompts/system-prompt/variants/xs/config.ts | 50 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.ATTEMPT,`) |
| src/core/prompts/system-prompt/variants/xs/config.ts | 51 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.PLAN_MODE,`) |
| src/core/prompts/system-prompt/variants/xs/config.ts | 52 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.USE_SUBAGENTS,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 4 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `import { ClineDefaultTool } from "@/shared/tools"`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 48 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.ASK,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 49 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.BASH,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 50 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_READ,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 51 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_NEW,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 52 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.FILE_EDIT,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 53 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.SEARCH,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 54 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.LIST_FILES,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 55 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.LIST_CODE_DEF,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 56 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.BROWSER,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 57 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.WEB_FETCH,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 58 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.WEB_SEARCH,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 59 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_ACCESS,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 60 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.ATTEMPT,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 61 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.PLAN_MODE,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 62 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.MCP_DOCS,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 63 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.TODO,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 64 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.GENERATE_EXPLANATION,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 65 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.USE_SKILL,`) |
| src/core/prompts/system-prompt/variants/native-next-gen/config.ts | 66 | 시스템 프롬프트 | AI 명령성 대화 | 직접 | High | AI 에이전트의 역할 및 도구 안내 (예: `		ClineDefaultTool.USE_SUBAGENTS,`) |