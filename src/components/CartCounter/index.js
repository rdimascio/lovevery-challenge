/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'

const CartCounterWrapper = styled.span({
	padding: '6px 10px',
	marginLeft: '14px',
	borderRadius: '50%',
	border: '1px solid #333',
})

const CartCounter = ({styles, count}) => {
	return <CartCounterWrapper>{count}</CartCounterWrapper>
}

export default CartCounter
