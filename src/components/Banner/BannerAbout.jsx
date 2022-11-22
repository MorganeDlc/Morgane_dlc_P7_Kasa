import styled from 'styled-components'
import ImgBanner from '../../assets/images/BannerAbout.png'


const BannerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 223px;
    border-radius: 25px;
    margin: 40px 0;
    position: relative;
`

const BannerImg = styled.div`
    background: url(${ImgBanner});
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

function BannerAbout() {
    return ( 
        <BannerDiv>
            <BannerImg />
            <BannerImgDark />
        </BannerDiv>
    )
};

export default BannerAbout