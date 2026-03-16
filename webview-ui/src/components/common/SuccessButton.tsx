import { memo } from "react"
import styled from "styled-components"

interface SuccessButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button`
	background-color: #176f2c;
	border: 1px solid #176f2c;
	color: white;
	border-radius: 2px;
	padding: 0 8px;
	height: 24px;
	font-size: 11px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.2s, border-color 0.2s;
	outline: none;

	&:hover:not(:disabled) {
		background-color: #197f31;
		border-color: #197f31;
	}

	&:active:not(:disabled) {
		background-color: #156528;
		border-color: #156528;
	}

	&:disabled {
		opacity: 0.5;
		cursor: wait;
	}
`

const SuccessButton: React.FC<SuccessButtonProps> = memo(({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>
})

SuccessButton.displayName = "SuccessButton"

export default SuccessButton
