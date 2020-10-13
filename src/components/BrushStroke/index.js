/** @jsx jsx */
import styled from '@emotion/styled'

const BrushStroke = styled.div({
	position: 'absolute',
	bottom: '0',
	left: '-5%',
	width: '100%',
	height: '275px',
	backgroundImage: 'url("/sign-in-brushstroke.png")',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'contain',
	backgroundPosition: 'bottom center',
	pointerEvents: 'none',
})

export default BrushStroke
