/** @jsx jsx */
import {jsx} from '@emotion/core'

const Menu = ({styles, children, direction = 'row', align = 'center'}) => {
	return (
		<ul
			css={{
				listStyle: 'none',
				marginBlockStart: '0',
				paddingInlineStart: '0',
				marginBlockEnd: '0',
				display: 'flex',
				flexDirection: direction,
				justifyContent: align,
				alignItems: align,
				...styles,
			}}
		>
			{children}
		</ul>
	)
}

export default Menu
