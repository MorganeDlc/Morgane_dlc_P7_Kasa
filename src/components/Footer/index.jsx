import styled from 'styled-components'
import LogoFooter from '../../assets/images/LogoFooter.png'


const DivFooter = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    height: 209px;
`
const TextFooter = styled.p`
    color: white;
`
const FooterLogo = styled.img`
    height: 40px;
`

function Footer () {
    return (
        <DivFooter>
            <FooterLogo src={LogoFooter} alt="logo Kasa" />
            <TextFooter>© 2020 Kasa. All rights reserved</TextFooter>
        </DivFooter>
    )
}

export default Footer