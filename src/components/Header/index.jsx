// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/LOGO.png'
import colors from '../../utils/style/colors'

const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
`
const LogoHeader = styled.img`
    width: 210px;
`
const NavHeader = styled.nav`
    display: flex;
    justify-content: space-between;
`
const NavLink = styled.p`
    margin-left: 40px;
    text-decoration: none;
    font-weight: lighter;
    font-size: 18px;
    color: ${colors.primary};
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

function Header() {
    return (
        <HeaderContainer>
            <LogoHeader src={logo} alt="logo Kasa" />
            <NavHeader>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/">A Propos</NavLink>
            </NavHeader>
        </HeaderContainer>
    )
}

export default Header
