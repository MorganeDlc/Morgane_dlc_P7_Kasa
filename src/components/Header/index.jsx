import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/LOGO.png'
import colors from '../../utils/style/colors'
import { device } from '../Device'

const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
`
const LogoHeader = styled.img`
    width: 150px;

    @media ${device.desktop} {
        width: 210px;
    }
`
const NavHeader = styled.nav`
    display: flex;
    justify-content: space-between;
`
const NavLink = styled(Link)`
    margin-left: 20px;
    text-decoration: none;
    font-weight: lighter;
    font-size: 12px;
    color: ${colors.primary};
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    @media ${device.tablet} {
        margin-left: 40px;
        font-size: 18px;
    }
`

function Header() {
    return (
        <HeaderContainer>
            <LogoHeader src={logo} alt="logo Kasa" />
            <NavHeader>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/About'>A Propos</NavLink>
            </NavHeader>
        </HeaderContainer>
    )
}

export default Header
