import { SVGProps } from "react"
import type { Environment } from "../../../src/shared/config-types"
import { getEnvironmentColor } from "../utils/environmentColors"

/**
 * ClineLogoSanta component renders the Cline logo with a festive Santa hat
 * Includes automatic theme adaptation and environment-based color indicators.
 *
 * This festive version adds a Santa hat to the robot character while maintaining
 * the same theme and environment color system as ClineLogoVariable.
 *
 * @param {SVGProps<SVGSVGElement> & { environment?: Environment }} props - Standard SVG props plus optional environment
 * @returns {JSX.Element} SVG Cline logo with Santa hat that adapts to VS Code themes and environment
 */
const ClineLogoSanta = (props: SVGProps<SVGSVGElement> & { environment?: Environment }) => {
	const { environment, ...svgProps } = props

	// Determine fill color based on environment
	const fillColor = environment ? getEnvironmentColor(environment) : "currentColor"

	return (
		<svg fill="none" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
			{/* 안테나 */}
			<rect fill={fillColor} height="15" width="6" x="47" y="12" />
			<circle cx="50" cy="12" fill={fillColor} r="5" />
			{/* 귀 */}
			<rect fill={fillColor} height="20" rx="2" width="7" x="8" y="45" />
			<rect fill={fillColor} height="20" rx="2" width="7" x="85" y="45" />
			{/* 얼굴 몸체 */}
			<rect height="60" rx="12" stroke={fillColor} strokeWidth="6" width="70" x="15" y="27" />
			{/* 눈 */}
			<circle cx="35" cy="52" fill={fillColor} r="7" />
			<circle cx="65" cy="52" fill={fillColor} r="7" />
			{/* 입 */}
			<rect fill={fillColor} height="6" rx="3" width="30" x="35" y="72" />
		</svg>
	)
}
export default ClineLogoSanta
