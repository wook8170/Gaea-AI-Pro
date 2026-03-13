export interface SlashCommand {
	name: string
	description?: string
	section?: "default" | "custom" | "mcp"
	cliCompatible?: boolean
}

export const BASE_SLASH_COMMANDS: SlashCommand[] = [
	{
		name: "newtask",
		description: "현재 작업의 컨텍스트를 유지하면서 새 작업을 시작합니다",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "deep-planning",
		description: "코딩을 시작하기 전에 종합적인 구현 계획을 수립합니다",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "smol",
		description: "현재 컨텍스트 윈도우를 압축합니다",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "newrule",
		description: "대화 내용을 바탕으로 새로운 Gaea AI Pro 규칙을 만듭니다",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "reportbug",
		description: "Gaea AI Pro를 사용하여 GitHub 이슈를 생성합니다",
		section: "default",
		cliCompatible: true,
	},
]

// VS Code-only slash commands
export const VSCODE_ONLY_COMMANDS: SlashCommand[] = [
	{
		name: "explain-changes",
		description: "Git ref(PR, 커밋, 브랜치 등) 간의 코드 변경 사항을 설명합니다",
		section: "default",
	},
]

// CLI-only slash commands (handled locally, not sent to backend)
export const CLI_ONLY_COMMANDS: SlashCommand[] = [
	{
		name: "help",
		description: "Gaea AI Pro CLI 사용 방법을 알아봅니다",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "settings",
		description: "API 제공자, 자동 승인 및 기능 설정을 변경합니다",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "models",
		description: "현재 모드에서 사용할 모델을 변경합니다",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "history",
		description: "작업 히스토리를 찾아보고 검색합니다",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "clear",
		description: "현재 작업을 지우고 새로 시작합니다",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "exit",
		description: "작업 종료 (Ctrl+C 대용)",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "q",
		description: "작업 종료 (Ctrl+C 대용)",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "skills",
		description: "설치된 스킬을 확인하고 관리합니다",
		section: "default",
		cliCompatible: true,
	},
]
