export interface SlashCommand {
	name: string
	description?: string
	section?: "default" | "custom" | "mcp"
	cliCompatible?: boolean
}

export const BASE_SLASH_COMMANDS: SlashCommand[] = [
	{
		name: "newtask",
		description: "현재 컨텍스트를 유지하면서 새로운 작업 시작",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "deep-planning",
		description: "코딩을 시작하기 전에 포괄적인 구현 계획 생성",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "smol",
		description: "현재 컨텍스트 창 축소(Condense)",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "newrule",
		description: "대화 내용을 기반으로 새로운 Gaea AI Pro 규칙 생성",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "reportbug",
		description: "Gaea AI Pro 버그 신고 및 GitHub 이슈 생성",
		section: "default",
		cliCompatible: true,
	},
]

// VS Code-only slash commands
export const VSCODE_ONLY_COMMANDS: SlashCommand[] = [
	{
		name: "explain-changes",
		description: "Git 참조 간의 코드 변경 사항 설명 (PR, 커밋, 브랜치 등)",
		section: "default",
	},
]

// CLI-only slash commands (handled locally, not sent to backend)
export const CLI_ONLY_COMMANDS: SlashCommand[] = [
	{
		name: "help",
		description: "Gaea AI Pro CLI 사용법 알아보기",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "settings",
		description: "API 제공자, 자동 승인 및 기능 설정 변경",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "models",
		description: "현재 모드에 사용되는 모델 변경",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "history",
		description: "작업 기록 탐색 및 검색",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "clear",
		description: "현재 작업 지우기 및 새로 시작",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "exit",
		description: "CLI 종료 (Ctrl+C 단축키)",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "q",
		description: "CLI 종료 (Ctrl+C 단축키)",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "skills",
		description: "설치된 스킬(Skills) 확인 및 관리",
		section: "default",
		cliCompatible: true,
	},
]
