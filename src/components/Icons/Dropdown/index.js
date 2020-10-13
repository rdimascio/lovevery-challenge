/** @jsx jsx */
import {jsx} from '@emotion/core'

const Dropdown = ({styles, ...props}) => {
	return (
		<svg
			width="13"
			height="8"
            viewBox="0 0 13 8"
			fill="none"
            xmlns="http://www.w3.org/2000/svg"
            css={styles}
            {...props}
		>
			<path
				d="M1.89999 0.900024L0.799988 2.00002L6.49999 7.20002L12.2 2.00002L11.1 0.900024L6.49999 5.00002L1.89999 0.900024Z"
				fill="#666666"
			/>
		</svg>
	)
}

export default Dropdown
