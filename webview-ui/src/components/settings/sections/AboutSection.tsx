import { VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import Section from "../Section"

interface AboutSectionProps {
	version: string
	renderSectionHeader: (tabId: string) => JSX.Element | null
}
const AboutSection = ({ version, renderSectionHeader }: AboutSectionProps) => {
	return (
		<div>
			{renderSectionHeader("about")}
			<Section>
				<div className="flex px-4 flex-col gap-2">
					<h2 className="text-lg font-semibold">Gaea-AI-Pro v{version}</h2>
					<p>
						당신의 CLI와 에디터를 사용할 수 있는 AI 어시스턴트입니다. Gaea-AI-Pro는 파일을 생성 및 수정하고, 대규모
						프로젝트를 탐색하며, 브라우저를 사용하고, 터미널 명령을 실행(사용자 권한 부여 후)할 수 있는 도구들을 통해
						복잡한 소프트웨어 개발 작업을 단계별로 처리할 수 있습니다.
					</p>

					<h3 className="text-md font-semibold">커뮤니티 및 지원</h3>
					<p>
						<VSCodeLink href="https://x.com/cline">X</VSCodeLink>
						{" • "}
						<VSCodeLink href="https://discord.gg/gaea-ai-pro">Discord</VSCodeLink>
						{" • "}
						<VSCodeLink href="https://www.reddit.com/r/cline/"> r/gaea-ai-pro</VSCodeLink>
					</p>

					<h3 className="text-md font-semibold">개발 및 오픈소스</h3>
					<p>
						<VSCodeLink href="https://github.com/gaea-ai-pro/gaea-ai-pro">GitHub</VSCodeLink>
						{" • "}
						<VSCodeLink href="https://github.com/gaea-ai-pro/gaea-ai-pro/issues"> Issues</VSCodeLink>
						{" • "}
						<VSCodeLink href="https://github.com/gaea-ai-pro/gaea-ai-pro/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop">
							{" "}
							기능 제안(Feature Requests)
						</VSCodeLink>
					</p>

					<h3 className="text-md font-semibold">관련 리소스</h3>
					<p>
						<VSCodeLink href="https://docs.gaea-ai-pro.bot/">문서(Documentation)</VSCodeLink>
						{" • "}
						<VSCodeLink href="https://gaea-ai-pro.bot/">https://gaea-ai-pro.bot</VSCodeLink>
					</p>
				</div>
			</Section>
		</div>
	)
}

export default AboutSection
