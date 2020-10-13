/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'

const BodyWrapper = styled.div({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'stretch',
	paddingTop: '80px',
	position: 'relative',
})

const Body = ({children}) => {
	return (
		<BodyWrapper>
			{children}
		</BodyWrapper>
	)
}

export default Body
