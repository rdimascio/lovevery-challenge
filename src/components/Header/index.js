/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import Logo from '../Logo'
import CartCounter from '../CartCounter'
import Dropdown from '../Icons/Dropdown'

const HeaderWrapper = styled.header({
	display: 'flex',
	justifyContent: 'flex-between',
	alignItems: 'center',
	padding: '10px',
	backgroundColor: '#FFF',
	boxShadow: '0 8px 5px -6px rgba(0, 0, 0, 0.1)',
	position: 'fixed',
	width: '100%',
	zIndex: '9',
	height: '80px',
})

const Header = ({styles, children, ...props}) => {
	return (
		<HeaderWrapper
			css={{
				...styles,
			}}
		>
			<Menu align="flex-start" styles={{flex: 1}}>
				<MenuItem url="/">
					Shop
					<Dropdown css={{marginLeft: '6px'}} />
				</MenuItem>
				<MenuItem url="/">
					About Us
					<Dropdown css={{marginLeft: '6px'}} />
				</MenuItem>
			</Menu>
			<Logo styles={{flex: 1}} width="" height="" />
			<Menu align="flex-end" styles={{flex: 1}}>
				<MenuItem text="Help" url="/" />
				<MenuItem text="Sign In" url="/" />
				<MenuItem url="/cart">
					Cart
					<CartCounter count={props.cart} />
				</MenuItem>
			</Menu>
		</HeaderWrapper>
	)
}

export default Header
