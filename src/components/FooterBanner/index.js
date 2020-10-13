/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'
import {footer as FooterMenu} from '../../constants/menus'
import {Mobile} from '../../constants/media-queries'

const FooterBannerWrapper = styled.div({
	height: 'auto',
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	backgroundColor: '#77d8c9',
	color: 'white',
	padding: '40px',
	[`@media(min-width: ${Mobile}px)`]: {
		height: '50px',
		padding: '0 40px'
	}
})

const FooterBannerMenu = styled.ul({
	listStyle: 'none',
	marginBlockStart: '0',
	paddingInlineStart: '0',
	marginBlockEnd: '0',
	display: 'flex',
	flexDirection: 'column',
	[`@media(min-width: ${Mobile}px)`]: {
		flexDirection: 'row',
	}
})

const FooterBannerMenuItem = styled.li({
	padding: '4px 0',
	fontSize: '14px',
	[`@media(min-width: ${Mobile}px)`]: {
		padding: '0 12px',
	}
})

const FooterBannerMenuLink = styled.a({
	color: '#FFF',
})

const FooterBanner = () => (
	<FooterBannerWrapper>
		<FooterBannerMenu>
			<FooterBannerMenuItem>&copy; 2020</FooterBannerMenuItem>
			{FooterMenu.banner.map((item, index) => (
				<FooterBannerMenuItem key={index}>
					<FooterBannerMenuLink href={item.link}>
						{item.name}
					</FooterBannerMenuLink>
				</FooterBannerMenuItem>
			))}
		</FooterBannerMenu>
	</FooterBannerWrapper>
)

export default FooterBanner
