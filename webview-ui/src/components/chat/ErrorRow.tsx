import { ClineMessage } from "@shared/ExtensionMessage"
import { memo } from "react"
import CreditLimitError from "@/components/chat/CreditLimitError"
import { Button } from "@/components/ui/button"
import { useClineAuth, useClineSignIn } from "@/context/ClineAuthContext"
import { ClineError, ClineErrorType } from "../../../../src/services/error/ClineError"

const _errorColor = "var(--vscode-errorForeground)"

interface ErrorRowProps {
	message: ClineMessage
	errorType: "error" | "mistake_limit_reached" | "diff_error" | "clineignore_error"
	apiRequestFailedMessage?: string
	apiReqStreamingFailedMessage?: string
}

const ErrorRow = memo(({ message, errorType, apiRequestFailedMessage, apiReqStreamingFailedMessage }: ErrorRowProps) => {
	const { clineUser } = useClineAuth()
	const rawApiError = apiRequestFailedMessage || apiReqStreamingFailedMessage

	const { isLoginLoading, handleSignIn } = useClineSignIn()

	const renderErrorContent = () => {
		switch (errorType) {
			case "error":
			case "mistake_limit_reached":
				// Handle API request errors with special error parsing
				if (rawApiError) {
					// FIXME: ClineError parsing should not be applied to non-Cline providers, but it seems we're using clineErrorMessage below in the default error display
					const clineError = ClineError.parse(rawApiError)
					const errorMessage = clineError?._error?.message || clineError?.message || rawApiError
					const requestId = clineError?._error?.request_id
					const providerId = clineError?.providerId || clineError?._error?.providerId
					const isClineProvider = providerId === "cline"
					const errorCode = clineError?._error?.code

					if (clineError?.isErrorType(ClineErrorType.Balance)) {
						const errorDetails = clineError._error?.details
						return (
							<CreditLimitError
								buyCreditsUrl={errorDetails?.buy_credits_url}
								currentBalance={errorDetails?.current_balance}
								message={errorDetails?.message}
								totalPromotions={errorDetails?.total_promotions}
								totalSpent={errorDetails?.total_spent}
							/>
						)
					}

					if (clineError?.isErrorType(ClineErrorType.RateLimit)) {
						return (
							<p className="m-0 whitespace-pre-wrap text-error wrap-anywhere">
								{errorMessage}
								{requestId && <div>Request ID: {requestId}</div>}
							</p>
						)
					}

					return (
						<p className="m-0 whitespace-pre-wrap text-error wrap-anywhere flex flex-col gap-3">
							{/* Display the well-formatted error extracted from the ClineError instance */}

							<header>
								{providerId && <span className="uppercase">[{providerId}] </span>}
								{errorCode && <span>{errorCode}</span>}
								{errorMessage}
								{requestId && <div>Request ID: {requestId}</div>}
							</header>

							{/* Windows Powershell Issue */}
							{errorMessage?.toLowerCase()?.includes("powershell") && (
								<div>
									Windows PowerShell 관련 문제가 발생한 것 같습니다. 이{" "}
									<a
										className="underline text-inherit"
										href="https://github.com/gaea-ai-pro/gaea-ai-pro/wiki/TroubleShooting-%E2%80%90-%22PowerShell-is-not-recognized-as-an-internal-or-external-command%22">
										문제 해결 가이드
									</a>
									를 참조해 주세요.
								</div>
							)}

							{/* Display raw API error if different from parsed error message */}
							{errorMessage !== rawApiError && <div>{rawApiError}</div>}

							{/* Display Login button for non-logged in users using the Cline provider */}
							<div>
								{/* The user is signed in or not using cline provider */}
								{isClineProvider && !clineUser ? (
									<Button className="w-full mb-4" disabled={isLoginLoading} onClick={handleSignIn}>
										Gaea-AI-Pro 서비스 로그인
										{isLoginLoading && (
											<span className="ml-1 animate-spin">
												<span className="codicon codicon-refresh" />
											</span>
										)}
									</Button>
								) : (
									<span className="mb-4 text-description">(아래의 "다시 시도" 버튼을 클릭해 주세요)</span>
								)}
							</div>
						</p>
					)
				}

				// Regular error message
				return <p className="m-0 mt-0 whitespace-pre-wrap text-error wrap-anywhere">{message.text}</p>

			case "diff_error":
				return (
					<div className="flex flex-col p-2 rounded text-xs opacity-80 bg-quote text-foreground">
						<div>모델이 파일 내용과 일치하지 않는 검색 패턴을 사용했습니다. 다시 시도 중...</div>
					</div>
				)

			case "clineignore_error":
				return (
					<div className="flex flex-col p-2 rounded text-xs opacity-80 bg-quote text-foreground">
						<div>
							Gaea-AI-Pro가 <code>.clineignore</code> 파일에 의해 차단된 <code>{message.text}</code>에 접근을
							시도했습니다.
						</div>
					</div>
				)

			default:
				return null
		}
	}

	// For diff_error and clineignore_error, we don't show the header separately
	if (errorType === "diff_error" || errorType === "clineignore_error") {
		return renderErrorContent()
	}

	// For other error types, show header + content
	return renderErrorContent()
})

export default ErrorRow
