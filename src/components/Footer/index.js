/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'
import Logo from '../Logo'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import FooterBanner from '../FooterBanner'
import {footer as FooterMenu} from '../../constants/menus'

const FooterWrapper = styled.footer({
	backgroundColor: '#62c56b',
	padding: '40px 40px 80px',
	display: 'flex',
	justifyContent: 'space-between',
})

const FooterInnerWrapper = styled.div({
	display: 'flex',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
})

const FooterHeading = styled.h4({
	textTransform: 'uppercase',
})

const FooterMenuWrapper = styled.div({
	padding: '0 40px',
})

const FooterEmailLink = styled.a({
	color: '#FFF',
	borderBottom: '1px solid',
	paddingBottom: '4px',
})

const menuItemProps = {
	fontWeight: '300',
	fontSize: '16px',
	padding: '1px',
	styles: {
		color: 'white',
		letterSpacing: '.5px',
	},
}

const Footer = (props) => {
	return (
		<div>
			<FooterWrapper>
				<FooterInnerWrapper
					css={{
						flexDirection: 'column',
					}}
				>
					<Logo
						styles={{marginBottom: '60px'}}
						colors={['#514F4E', '#FFF']}
					/>
					<FooterHeading>Email us</FooterHeading>
					<FooterEmailLink href="mailto:heretohelp@lovevery.com">
						heretohelp@lovevery.com
					</FooterEmailLink>
				</FooterInnerWrapper>
				<FooterInnerWrapper>
					<FooterMenuWrapper>
						<FooterHeading>Our Products</FooterHeading>
						<Menu direction="column" align="flex-start">
							{FooterMenu.products.map((item, index) => (
								<MenuItem
									{...menuItemProps}
									key={index}
									text={item.name}
								/>
							))}
						</Menu>
					</FooterMenuWrapper>
					<FooterMenuWrapper>
						<FooterHeading>Gifting/Registry</FooterHeading>
						<Menu direction="column" align="flex-start">
							{FooterMenu.registry.map((item, index) => (
								<MenuItem
									{...menuItemProps}
									key={index}
									text={item.name}
								/>
							))}
						</Menu>

						<FooterHeading css={{marginTop: '60px'}}>
							My New Life Podcast
						</FooterHeading>
						<Menu direction="column" align="flex-start">
							{FooterMenu.podcast.map((item, index) => (
								<MenuItem
									{...menuItemProps}
									key={index}
									text={item.name}
								/>
							))}
						</Menu>
					</FooterMenuWrapper>
					<FooterMenuWrapper>
						<FooterHeading>Learn More</FooterHeading>
						<Menu direction="column" align="flex-start">
							{FooterMenu.learn.map((item, index) => (
								<MenuItem
									{...menuItemProps}
									key={index}
									text={item.name}
								/>
							))}
						</Menu>
					</FooterMenuWrapper>
					<FooterMenuWrapper>
						<FooterHeading>Help</FooterHeading>
						<Menu direction="column" align="flex-start">
							{FooterMenu.help.map((item, index) => (
								<MenuItem
									{...menuItemProps}
									key={index}
									text={item.name}
								/>
							))}
						</Menu>
					</FooterMenuWrapper>
				</FooterInnerWrapper>
			</FooterWrapper>
			<FooterBanner />
		</div>
	)
}

export default Footer
