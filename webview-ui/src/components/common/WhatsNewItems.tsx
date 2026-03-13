import type { BannerAction, BannerCardData } from "@shared/cline/banner"
import React from "react"
import Markdown from "react-markdown"

interface WhatsNewItemsProps {
	welcomeBanners?: BannerCardData[]
	onBannerAction?: (action: BannerAction) => void
	onClose: () => void
	inlineCodeStyle: React.CSSProperties
	onNavigateToModelPicker: (initialModelTab: "recommended" | "free", modelId?: string) => void
}

type InlineModelLinkProps = { pickerTab: "recommended" | "free"; modelId: string; label: string }

export const WhatsNewItems: React.FC<WhatsNewItemsProps> = ({
	welcomeBanners,
	onBannerAction,
	onClose,
	inlineCodeStyle,
	onNavigateToModelPicker,
}) => {
	const InlineModelLink: React.FC<InlineModelLinkProps> = ({ pickerTab, modelId, label }) => (
		<span
			onClick={() => onNavigateToModelPicker(pickerTab, modelId)}
			style={{ color: "var(--vscode-textLink-foreground)", cursor: "pointer" }}>
			{label}
		</span>
	)

	const hasWelcomeBanners = welcomeBanners && welcomeBanners.length > 0

	return (
		<ul className="text-sm pl-3 list-disc" style={{ color: "var(--vscode-descriptionForeground)" }}>
			{hasWelcomeBanners ? (
				welcomeBanners.map((banner) => (
					<li className="mb-2" key={banner.id}>
						{banner.title && <strong>{banner.title}</strong>}{" "}
						{banner.description && (
							<Markdown
								components={{
									a: ({ href, children }) => (
										<a
											href={href}
											rel="noopener noreferrer"
											style={{ color: "var(--vscode-textLink-foreground)" }}
											target="_blank">
											{children}
										</a>
									),
									code: ({ children }) => <code style={inlineCodeStyle}>{children}</code>,
									p: ({ children }) => <p style={{ display: "inline", margin: 0 }}>{children}</p>,
								}}>
								{banner.description}
							</Markdown>
						)}
						{banner.actions && banner.actions.length > 0 && onBannerAction && (
							<span className="inline-flex gap-2 ml-2 align-middle">
								{banner.actions.map((action, idx) => (
									<a
										href="#"
										key={idx}
										onClick={(event) => {
											event.preventDefault()
											onBannerAction(action)
											onClose()
										}}
										style={{
											color: "var(--vscode-textLink-foreground)",
											cursor: "pointer",
										}}>
										{action.title}
									</a>
								))}
							</span>
						)}
					</li>
				))
			) : (
				<>
					{/* Hardcoded fallback items shown when remote welcome banners feature flag is off */}
					<li className="mb-2">
						<strong>Codex 5.3 체험하기:</strong> OpenAI의 최신 코딩 모델을 이제 Gaea-AI-Pro에서 사용할 수 있습니다!{" "}
						<InlineModelLink label="지금 체험하기" modelId="openai/gpt-5.3-codex" pickerTab="recommended" />
					</li>
					<li className="mb-2">
						<strong>최신 SOTA 코딩 모델:</strong> Claude Sonnet 4.6 및 Gemini 3.1 Pro를 Gaea-AI-Pro에서 만나보세요!{" "}
						<InlineModelLink label="지금 체험하기" modelId="anthropic/claude-sonnet-4.6" pickerTab="recommended" />
					</li>
					<li className="mb-2">
						<strong>Gaea-AI-Pro CLI 2.0:</strong> CLI에 /mcp 기능이 추가되었습니다.{" "}
						<code style={inlineCodeStyle}>npm install -g gaea-ai-pro</code>
					</li>
					<li className="mb-2">
						<strong>Minimax M2.5 and Z.ai GLM 5:</strong> no longer free starting Feb 23, 2026
					</li>
				</>
			)}
		</ul>
	)
}

export default WhatsNewItems
