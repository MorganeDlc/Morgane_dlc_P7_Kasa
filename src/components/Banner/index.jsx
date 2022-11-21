import Background from '../../assets/images/Background.png'
import styled from 'styled-components'

const BannerContainer = styled.div`
    //display: flex;
    //justify-content: center;
    //align-items: center;
    margin: 40px 0;
    position: relative;
    border: solid 1px red;
    height: 223px;
`
const BannerImg = styled.img`
    position: absolute;
    top: 0;
    border-radius: 25px;
    object-fit: cover;
    filter: brightness(80%);
    height: 223px;
    width: 100%;
`
const TitreBanner = styled.h1`
    color: white;
    font-weight: 300;
    font-size: 40px;
    z-index: 2;
`

function Banner() {
    return ( 
        <BannerContainer>
            <BannerImg src={Background} alt="background banner Kasa" />
            <TitreBanner>Chez vous, partout et ailleurs</TitreBanner>
        </BannerContainer>
    )
};

export default Banner //syntaxe pour ne pas utiliser les accolades au moment de l'import.