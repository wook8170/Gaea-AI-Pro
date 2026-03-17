import React from "react"
import MarkdownBlock from "../common/MarkdownBlock"

interface NewTaskPreviewProps {
	context: string
}

const NewTaskPreview: React.FC<NewTaskPreviewProps> = ({ context }) => {
	const BLUE_COLOR = "var(--vscode-charts-blue)"

	return (
		<div
			className="rounded-sm border p-[14px] pb-[6px]"
			style={{
				borderColor: `color-mix(in srgb, ${BLUE_COLOR}, transparent 60%)`,
				backgroundColor: `color-mix(in srgb, ${BLUE_COLOR}, transparent 85%)`,
			}}>
			<span style={{ fontWeight: "bold", color: BLUE_COLOR }}>작업 내용</span>
			<MarkdownBlock markdown={context} />
		</div>
	)
}

export default NewTaskPreview
