import { LightbulbIcon } from "lucide-react"
import { memo, useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FeatureTipItem {
	text: string
}

const FEATURE_TIPS: FeatureTipItem[] = [
	{
		text: '설정에서 "작업 완료 전 재확인"을 활성화하면 Gaea AI Pro가 작업을 마치기 전에 검토를 수행합니다.',
	},
	{
		text: "프로젝트 루트에 .clinerules 파일을 추가하여 Gaea AI Pro에게 프로젝트 전용 지침을 제공할 수 있습니다.",
	},
	{
		text: "Gaea AI Pro가 작업을 시작하기 전에 계획 모드(Plan Mode)에서 접근 방식을 먼저 논의해 보세요.",
	},
	{
		text: "채팅창에 @를 입력하여 파일, 폴더 또는 URL을 작업 컨텍스트로 추가할 수 있습니다.",
	},
	{
		text: "MCP 서버를 설정하여 Gaea AI Pro가 외부 도구 및 API에 접근할 수 있도록 하세요.",
	},
	{
		text: "Gaea AI Pro는 변경 사항마다 체크포인트를 생성합니다 — 언제든지 이전 상태로 복구할 수 있습니다.",
	},
	{
		text: "/compact를 사용하여 긴 대화를 압축하고 컨텍스트 공간을 확보하세요.",
	},
	{
		text: "파일 읽기와 같은 읽기 전용 도구에 대해 자동 승인을 활성화하면 분석 속도가 빨라집니다.",
	},
	{
		text: "답변의 인용(quote) 버튼을 사용하여 Gaea AI Pro의 응답 중 특정 부분을 참조해 보세요.",
	},
	{
		text: "채팅창에 이미지를 드래그 앤 드롭하여 스크린샷을 Gaea AI Pro와 공유할 수 있습니다.",
	},
	{
		text: "Gaea AI Pro는 웹 브라우징이 가능합니다 — 브라우저에서 로컬 개발 서버를 테스트해 달라고 요청해 보세요.",
	},
	{
		text: "/reportbug를 사용하여 진단 정보가 포함된 GitHub 이슈를 빠르게 작성할 수 있습니다.",
	},
]

const SHOW_DELAY_MS = 2000
const CYCLE_INTERVAL_MS = 8000
const FADE_DURATION_MS = 300

/**
 * Shows rotating feature tips below the "Thinking..." indicator.
 * Appears after a brief delay and cycles through tips while Cline is thinking.
 */
export const FeatureTip = memo(() => {
	const [isVisible, setIsVisible] = useState(false)
	const [hasFadedIn, setHasFadedIn] = useState(false)
	const [isFading, setIsFading] = useState(false)
	const [tipIndex, setTipIndex] = useState(() => Math.floor(Math.random() * FEATURE_TIPS.length))
	const cycleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
	const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
	const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	const currentTip = FEATURE_TIPS[tipIndex]

	const advanceTip = useCallback(() => {
		setIsFading(true)
		fadeTimerRef.current = setTimeout(() => {
			setTipIndex((prev) => (prev + 1) % FEATURE_TIPS.length)
			setIsFading(false)
		}, FADE_DURATION_MS)
	}, [])

	useEffect(() => {
		showTimerRef.current = setTimeout(() => {
			setIsVisible(true)
			// Trigger fade-in on next frame so transition applies
			requestAnimationFrame(() => setHasFadedIn(true))
			cycleTimerRef.current = setInterval(advanceTip, CYCLE_INTERVAL_MS)
		}, SHOW_DELAY_MS)

		return () => {
			if (showTimerRef.current) {
				clearTimeout(showTimerRef.current)
			}
			if (cycleTimerRef.current) {
				clearInterval(cycleTimerRef.current)
			}
			if (fadeTimerRef.current) {
				clearTimeout(fadeTimerRef.current)
			}
		}
	}, [advanceTip])

	if (!isVisible) {
		return null
	}

	return (
		<div
			className={cn(
				"flex items-start gap-1.5 mt-2 ml-1 transition-opacity duration-300",
				!hasFadedIn || isFading ? "opacity-0" : "opacity-100",
			)}>
			<LightbulbIcon className="size-3 text-description shrink-0 mt-[1px]" />
			<span className="text-xs text-description leading-relaxed">
				<span className="font-medium">팁:</span> {currentTip.text}
			</span>
		</div>
	)
})

FeatureTip.displayName = "FeatureTip"
