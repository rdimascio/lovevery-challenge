/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const MenuItem = ({
	styles,
	padding = '20px',
	fontWeight = '600',
	fontSize = '16px',
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
