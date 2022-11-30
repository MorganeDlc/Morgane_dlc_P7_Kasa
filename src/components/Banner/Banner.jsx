import styled from 'styled-components'

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
    height: 223px;
    border-radius: 25px;
`

const TitreBanner = styled.h1`
    color: white;
    font-weight: 500;
    font-size: 40px;
    z-index: 3;
`
const BannerImg = styled.img`
    background-size: cover;
    height: 223px;
    width: 100%;
    position: absolute;
    border-radius: 25px;
`
const BannerImgDark = styled.div`
    background-color: black;
    height: 223px;
    width: 100%;
    position: absolute;
    opacity: 0.3;
    border-radius: 25px;
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