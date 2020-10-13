/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'

const HeroWrapper = styled.div({
	width: '100%',
	minHeight: '820px',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundImage: 'url("/sign-in-background.png")',
})

const Hero = ({styles}) => {
	return (
		<HeroWrapper
			css={{
				...styles,
			}}
		></HeroWrapper>
	)
}

export default Hero
