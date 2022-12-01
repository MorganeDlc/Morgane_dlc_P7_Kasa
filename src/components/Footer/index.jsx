import styled from 'styled-components'
import LogoFooter from '../../assets/images/LogoFooter.png'
import { device } from '../Device'


const DivFooter = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 209px;
    margin-top: 40px;

    @media ${device.desktop} {
        max-width: 1440px;
    }
`
const TextFooter = styled.p`
    color: white;
    font-size: 12px;

    @media ${device.desktop} {
        font-size: 24px;
    }
`
const FooterLogo = styled.img`
    height: 30px;

    @media ${device.desktop} {
        height: 40px;
    }
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