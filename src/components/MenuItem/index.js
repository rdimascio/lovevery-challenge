/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const MenuItem = ({
	styles,
	liStyles,
	padding = '20px',
	fontWeight = '600',
	fontSize = '16px',
	hide = false,
	text,
	url,
	...props
}) => {
	return (
		<li
			css={css`
				padding: ${padding};
				font-weight: ${fontWeight};
				font-size: ${fontSize};

				${hide && typeof hide === 'number'
					? `
					display: none;
					@media(min-width: ${hide}px) {
							display: block;
						}`
					: ''}

				${liStyles}
			`}
		>
			<a
				css={css`
					color: #333;
					text-decoration: none;

					&:hover {
						color: #333;
						text-decoration: none;
					}
					
					${styles}
				`}
				href={url}
			>
				{text}
				{props.children}
			</a>
		</li>
	)
}

export default MenuItem
