import { ActionMetadata } from "./types"

export const ACTION_METADATA: ActionMetadata[] = [
	{
		id: "readFiles",
		label: "프로젝트 파일 읽기",
		shortName: "읽기",
		icon: "codicon-search",
		subAction: {
			id: "readFilesExternally",
			label: "모든 파일 읽기",
			shortName: "읽기 (전체)",
			icon: "codicon-folder-opened",
			parentActionId: "readFiles",
		},
	},
	{
		id: "editFiles",
		label: "프로젝트 파일 편집",
		shortName: "편집",
		icon: "codicon-edit",
		subAction: {
			id: "editFilesExternally",
			label: "모든 파일 편집",
			shortName: "편집 (전체)",
			icon: "codicon-files",
			parentActionId: "editFiles",
		},
	},
	{
		id: "executeSafeCommands",
		label: "안전한 명령어 실행",
		shortName: "안전한 명령어",
		icon: "codicon-terminal",
		subAction: {
			id: "executeAllCommands",
			label: "모든 명령어 실행",
			shortName: "전체 명령어",
			icon: "codicon-terminal-bash",
			parentActionId: "executeSafeCommands",
		},
	},
	{
		id: "useBrowser",
		label: "브라우저 사용",
		shortName: "브라우저",
		icon: "codicon-globe",
	},
	{
		id: "useMcp",
		label: "MCP 서버 사용",
		shortName: "MCP",
		icon: "codicon-server",
	},
]

export const NOTIFICATIONS_SETTING: ActionMetadata = {
	id: "enableNotifications",
	label: "알림 활성화",
	shortName: "알림",
	icon: "codicon-bell",
}
