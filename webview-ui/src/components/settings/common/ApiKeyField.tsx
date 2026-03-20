import { VSCodeLink, VSCodeTextField } from "@vscode/webview-ui-toolkit/react"
import { useDebouncedInput } from "../utils/useDebouncedInput"

/**
 * Props for the ApiKeyField component
 */
interface ApiKeyFieldProps {
	initialValue: string
	onChange: (value: string) => void
	providerName: string
	signupUrl?: string
	placeholder?: string
	helpText?: string
}

/**
 * A reusable component for API key input fields with standard styling and help text for signing up for key
 */
export const ApiKeyField = ({
	initialValue,
	onChange,
	providerName,
	signupUrl,
	placeholder = "API 키 입력...",
	helpText,
}: ApiKeyFieldProps) => {
	const [localValue, setLocalValue] = useDebouncedInput(initialValue, onChange)

	return (
		<div>
			<VSCodeTextField
				onInput={(e: any) => setLocalValue(e.target.value)}
				placeholder={placeholder}
				required={true}
				style={{ width: "100%" }}
				type="password"
				value={localValue}>
				<span style={{ fontWeight: 500 }}>{providerName} API 키</span>
			</VSCodeTextField>
			<p
				style={{
					fontSize: "12px",
					marginTop: 3,
					color: "var(--vscode-descriptionForeground)",
				}}>
				{helpText || "이 키는 로컬에만 저장되며, 오직 이 확장에서 API 요청을 보내는 용도로만 사용됩니다."}
				{!localValue && signupUrl && (
					<VSCodeLink
						href={signupUrl}
						style={{
							display: "inline",
							fontSize: "inherit",
						}}>
						여기서 {providerName} API 키를 발급받으실 수 있습니다.
					</VSCodeLink>
				)}
			</p>
		</div>
	)
}
