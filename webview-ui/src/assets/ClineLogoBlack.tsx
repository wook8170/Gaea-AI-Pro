import { SVGProps } from "react"

const ClineLogoBlack = (props: SVGProps<SVGSVGElement>) => (
	<svg fill="none" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg" {...props}>
		{/* gaea-ai-pro.svg 디자인 기반 재구성 및 블랙 색상 고정 */}
		<rect height="60" rx="12" stroke="black" strokeWidth="6" width="70" x="15" y="25" />
		<rect fill="black" height="15" width="6" x="47" y="10" />
		<circle cx="50" cy="10" fill="black" r="5" />
		<rect fill="black" height="20" rx="2" width="7" x="8" y="45" />
		<rect fill="black" height="20" rx="2" width="7" x="85" y="45" />
		<circle cx="35" cy="50" fill="black" r="7" />
		<circle cx="65" cy="50" fill="black" r="7" />
		<rect fill="black" height="6" rx="3" width="30" x="35" y="70" />
	</svg>
)
export default ClineLogoBlack
