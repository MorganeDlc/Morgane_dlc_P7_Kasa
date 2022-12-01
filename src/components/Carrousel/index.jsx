import styled from "styled-components"
import React, { useState } from 'react';
import FlecheGauche from "../../assets/images/FlecheGauche.png"
import FlecheDroite from "../../assets/images/FlecheDroite.png"
import { device } from '../Device'

const CarrouselContainer = styled.div`
    width: 100%;
    position: relative;
`
const CarrouselFleche = styled.div`
    display: flex;
    justify-content: center;
`

const ImgFlecheG = styled.img`
    position: absolute;
    cursor: pointer;
    top: 40%;
    left: 20px;
    width: 20px;
    z-index: 1;

    @media ${device.tablet} {
        width: 40px;
    }
`
const ImgFlecheD = styled.img`
    position: absolute;
    cursor: pointer;
    top: 40%;
    right: 20px;
    width: 20px;
    z-index: 1;

    @media ${device.tablet} {
        width: 40px;
    }
`
const CarrouselItem = styled.div`
    height: 100%;
    align-items: center;
`
const View = styled.img`
    object-fit: cover;
    width: 100%;
    height: 225px;
    border-radius: 25px;
    object-fit: cover;
    margin-top: 20px;

    @media ${device.tablet} {
        height: 450px;
    }
`
const Rate = styled.p`
    display: flex;
    position: absolute;
    color: white;
    font-size: 18px;
    bottom: 0px;
`

function Carrousel ({pictures}) {
    const [current, setCurrent] = useState(0);
    const nombreImage = pictures.length;

    const NextSlide = () => {
                setCurrent(current === nombreImage -1 ? 0 : current + 1);
            }
    const PrevSlide = () => {
                setCurrent(current === 0 ? nombreImage -1 : current - 1);
            }
    
    if (nombreImage === 1) {
        return <View src={pictures[0]} alt="présentation logement"></View>
    }
    return (
        <CarrouselContainer>
            <CarrouselFleche>
                <ImgFlecheD onClick={NextSlide} src={FlecheDroite} alt="suivante" />
                <ImgFlecheG onClick={PrevSlide} src={FlecheGauche} alt="precedente" />
                <Rate>{current +1}/{nombreImage}</Rate>
            </CarrouselFleche>
            {
                pictures.map((picture, index) => {
                    return (
                        <CarrouselItem key={index}>
                            {index === current &&
                            <View src={picture} alt="présentation logement" />}
                        </CarrouselItem>
                    )
                })
            }
        </CarrouselContainer>
    )

}
export default Carrousel

