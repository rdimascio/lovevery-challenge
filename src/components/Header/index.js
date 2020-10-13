/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import styled from '@emotion/styled'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import Logo from '../Logo'
import CartCounter from '../CartCounter'
import Dropdown from '../Icons/Dropdown'
import {Menu as MenuIcon} from 'react-feather'
import {Mobile} from '../../constants/media-queries'

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
				<MenuItem
					hide={Mobile}
					url="/"
				>
					Shop
					<Dropdown css={{marginLeft: '6px'}} />
				</MenuItem>
				<MenuItem
					hide={Mobile}
					url="/"
				>
					About Us
					<Dropdown css={{marginLeft: '6px'}} />
				</MenuItem>
				<MenuItem
					liStyles={{
						display: 'block',
						[`@media(min-width: ${Mobile}px)`]: {
							display: 'none',
						}
					}}
					url="/"
				>
					<MenuIcon />
				</MenuItem>
			</Menu>
			<Logo styles={{flex: 1}} width="" height="" />
			<Menu align="flex-end" styles={{flex: 1}}>
				<MenuItem
					hide={Mobile}
					text="Help"
					url="/"
				/>
				<MenuItem
					hide={Mobile}
					text="Sign In"
					url="/"
				/>
				<MenuItem url="/cart">
					<span
						css={{
							display: 'none',
							[`@media(min-width: ${Mobile}px)`]: {
								display: 'inline-block',
							}
						}}
					>
						Cart
					</span>
					<CartCounter count={props.cart} />
				</MenuItem>
			</Menu>
		</HeaderWrapper>
	)
}

export default Header
