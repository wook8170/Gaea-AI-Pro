import { SVGProps } from "react"
import type { Environment } from "../../../src/shared/config-types"
import { getEnvironmentColor } from "../utils/environmentColors"

/**
 * ClineLogoVariable component renders the Cline logo with automatic theme adaptation
 * and environment-based color indicators.
 *
 * This component uses VS Code theme variables for the fill color, with environment-specific colors:
 * - Local: yellow/orange (development/experimental)
 * - Staging: blue (stable testing)
 * - Production: gray/white (default icon color)
 *
 * @param {SVGProps<SVGSVGElement> & { environment?: Environment }} props - Standard SVG props plus optional environment
 * @returns {JSX.Element} SVG Cline logo that adapts to VS Code themes and environment
 */
const ClineLogoVariable = (props: SVGProps<SVGSVGElement> & { environment?: Environment }) => {
	const { environment, ...svgProps } = props

	// Determine fill color based on environment
	const fillColor = environment ? getEnvironmentColor(environment) : "currentColor"

	return (
		<svg fill="none" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
			{/* gaea-ai-pro.svg 디자인 기반 재구성 및 환경 색상 대응 */}
			<rect height="60" rx="12" stroke={fillColor} strokeWidth="6" width="70" x="15" y="25" />
			<rect fill={fillColor} height="15" width="6" x="47" y="10" />
			<circle cx="50" cy="10" fill={fillColor} r="5" />
			<rect fill={fillColor} height="20" rx="2" width="7" x="8" y="45" />
			<rect fill={fillColor} height="20" rx="2" width="7" x="85" y="45" />
			<circle cx="35" cy="50" fill={fillColor} r="7" />
			<circle cx="65" cy="50" fill={fillColor} r="7" />
			<rect fill={fillColor} height="6" rx="3" width="30" x="35" y="70" />
		</svg>
	)
}
export default ClineLogoVariable
