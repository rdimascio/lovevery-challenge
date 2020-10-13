/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'
import {Mobile} from '../../constants/media-queries'

const HeroWrapper = styled.div({
	display: 'none',
	width: '100%',
	minHeight: '820px',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundImage: 'url("/sign-in-background.png")',
	[`@media(min-width: ${Mobile}px)`]: {
		display: 'block',
	}
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
