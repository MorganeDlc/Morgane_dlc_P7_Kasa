import styled from 'styled-components'
import { device } from '../Device'

const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
    position: relative;
`
const BannerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 111px;
    border-radius: 10px;

    @media ${device.tablet} {
        height: 223px;
        border-radius: 25px;
    }
`

const TitreBanner = styled.h1`
    color: white;
    font-weight: 500;
    font-size: 24px;
    z-index: 3;
    padding: 10px;

    @media ${device.tablet} {
        font-size: 40px;
    }
`
const BannerImg = styled.img`
    background-size: cover;
    height: 111px;
    width: 100%;
    position: absolute;
    border-radius: 25px;

    @media ${device.tablet} {
        height: 223px;
    }

`
const BannerImgDark = styled.div`
    background-color: black;
    height: 111px;
    width: 100%;
    position: absolute;
    opacity: 0.3;
    border-radius: 25px;

    @media ${device.tablet} {
        height: 223px;
    }
`

function Banner({texte, image}) {
    return ( 
        <BannerContainer>
            <BannerDiv>
                <TitreBanner>{texte}</TitreBanner>
                <BannerImg src={image} />
                <BannerImgDark />
            </BannerDiv>
        </BannerContainer>
    )
};

export default Banner //syntaxe pour ne pas utiliser les accolades au moment de l'import.