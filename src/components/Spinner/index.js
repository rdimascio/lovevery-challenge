/** @jsx jsx */
import {jsx} from '@emotion/core'
import {Loader} from 'react-feather'

const Spinner = () => {
	return (
		<Loader
			css={{
				animation: 'spin 2s infinite linear',
			}}
			size={14}
		/>
	)
}

export default Spinner
