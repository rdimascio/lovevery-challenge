/** @jsx jsx */
import {jsx} from '@emotion/core'
import strToCamelCase from '../../helpers/strToCamelCase'
import strToTitle from '../../helpers/strToTitle'

const Input = ({styles, name, ...props}) => {
	return (
		<div
			css={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<label
				css={{
					fontSize: '14px',
				}}
				htmlFor={name}
			>
				{strToTitle(name)}
			</label>
			<input
				css={{
					fontSize: '16px',
					color: '#333',
					padding: '12px 16px',
					borderRadius: '2px',
					...styles,
				}}
				id={strToCamelCase(name)}
				name={name}
				{...props}
			/>
		</div>
	)
}

export default Input
