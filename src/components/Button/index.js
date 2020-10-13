/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const Button = ({children, theme = 'primary', ...props}) => {
	const THEMES = {
		primary: {
			text: 'white',
			background: '#536DC4',
		},
		secondary: {
			text: '#536DC4',
			background: '#EEF1FA',
		},
	}

	return (
		<button
			css={css`
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				color: ${THEMES[theme]['text']};
				background-color: ${THEMES[theme]['background']};
				cursor: pointer;
				border-radius: 4px;
				border: none;
				padding: 10px 30px;
				font-size: 14px;

				&[disabled] {
					opacity: 0.5;
					cursor: not-allowed;
				}
			`}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
