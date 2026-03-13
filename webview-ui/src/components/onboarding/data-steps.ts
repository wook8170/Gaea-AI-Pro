export enum NEW_USER_TYPE {
	FREE = "free",
	POWER = "power",
	BYOK = "byok",
}

type UserTypeSelection = {
	title: string
	description: string
	type: NEW_USER_TYPE
}

export const STEP_CONFIG = {
	0: {
		title: "Gaea-AI-Pro를 어떻게 사용하실 건가요?",
		description: "시작하려면 아래 옵션 중 하나를 선택하세요.",
		buttons: [
			{ text: "계속하기", action: "next", variant: "default" },
			{ text: "Gaea-AI-Pro 서비스 로그인", action: "signin", variant: "secondary" },
		],
	},
	[NEW_USER_TYPE.FREE]: {
		title: "Select a free model",
		buttons: [
			{ text: "Create my Account", action: "signup", variant: "default" },
			{ text: "Back", action: "back", variant: "secondary" },
		],
	},
	[NEW_USER_TYPE.POWER]: {
		title: "Select your model",
		buttons: [
			{ text: "Create my Account", action: "signup", variant: "default" },
			{ text: "Back", action: "back", variant: "secondary" },
		],
	},
	[NEW_USER_TYPE.BYOK]: {
		title: "Configure your provider",
		buttons: [
			{ text: "Continue", action: "done", variant: "default" },
			{ text: "Back", action: "back", variant: "secondary" },
		],
	},
	2: {
		title: "Almost there!",
		description: "Complete account creation in your browser. Then come back here to finish up.",
		buttons: [{ text: "Back", action: "back", variant: "secondary" }],
	},
} as const

export const USER_TYPE_SELECTIONS: UserTypeSelection[] = [
	{ title: "완전 무료", description: "비용 부담 없이 시작하기", type: NEW_USER_TYPE.FREE },
	{ title: "최신 모델 (SOTA)", description: "Claude 4.5, GPT-5 Codex 등 최신 모델 사용", type: NEW_USER_TYPE.POWER },
	{ title: "개인 API 키 사용", description: "원하는 서비스 제공자의 API 키로 Gaea-AI-Pro 사용", type: NEW_USER_TYPE.BYOK },
]
