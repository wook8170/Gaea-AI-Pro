export interface QuickWinTask {
	id: string
	title: string
	description: string
	icon?: string
	actionCommand: string
	prompt: string
	buttonText?: string
}

export const quickWinTasks: QuickWinTask[] = [
	{
		id: "nextjs_notetaking_app",
		title: "Next.js 앱 만들기",
		description: "Next.js와 Tailwind를 사용하여 아름다운 메모 앱을 만듭니다.",
		icon: "WebAppIcon",
		actionCommand: "cline/createNextJsApp",
		prompt: "Tailwind CSS를 스타일링에 사용하여 아름다운 Next.js 메모 앱을 만들어줘. 메모를 추가하고 볼 수 있는 기본 구조와 간단한 UI를 설정해줘.",
		buttonText: ">",
	},
	{
		id: "terminal_cli_tool",
		title: "CLI 도구 제작",
		description: "반복 작업을 자동화하는 강력한 터미널 CLI를 개발합니다.",
		icon: "TerminalIcon",
		actionCommand: "cline/createCliTool",
		prompt: "Node.js를 사용하여 디렉토리의 파일을 유형, 크기 또는 날짜별로 정리하는 터미널 CLI 도구를 만들어줘. 파일을 폴더로 분류하고, 파일 통계를 표시하며, 중복 파일을 찾고, 빈 디렉토리를 정리하는 옵션이 있어야 해. 컬러풀한 출력과 진행률 표시기를 포함해줘.",
		buttonText: ">",
	},
	{
		id: "snake_game",
		title: "게임 개발하기",
		description: "브라우저에서 실행되는 클래식 스네이크 게임을 코딩합니다.",
		icon: "GameIcon",
		actionCommand: "cline/createSnakeGame",
		prompt: "HTML, CSS, JavaScript를 사용하여 클래식 스네이크 게임을 만들어줘. 스네이크 방향키 조작, 점수 시스템, 게임 종료 상태가 포함되어 브라우저에서 플레이 가능해야 해.",
		buttonText: ">",
	},
]
