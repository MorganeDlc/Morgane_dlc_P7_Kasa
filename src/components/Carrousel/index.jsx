import styled from "styled-components"
import React, { useState } from 'react';
import FlecheGauche from "../../assets/images/FlecheGauche.png"
import FlecheDroite from "../../assets/images/FlecheDroite.png"
import { useParams } from "react-router";
import { LogementsData } from "../../assets/data/Logements"

const CarrouselContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    margin-top: 20px;
    width: 100%;
`
const ImgFlecheG = styled.img`
    position: absolute;
    cursor: pointer;
    top: 40%;
    left: 20px;
    width: 40px;
`
const ImgFlecheD = styled.img`
    position: absolute;
    cursor: pointer;
    top: 40%;
    right: 20px;
    width: 40px;
`
const DivSlider = styled.div`
    height: 415px;
    object-fit: cover;
`
const ImgDiv = styled.img`
    border-radius: 25px;
    object-fit: cover;
    height: 415px;
`
const Rate = styled.p`
    position: absolute;
    color: white;
    font-size: 18px;
    bottom: 0px;
`

function Carrousel () {
    const params = useParams();
    const id = params.id
    const LogementFind = LogementsData.find(element => element.id === id)
    const slides = LogementFind.pictures
    const [current, setCurrent] = useState(0);
    const nombreImage = slides.length

    const NextSlide = () => {
        setCurrent(current === nombreImage -1 ? 0 : current + 1);
    }
    const PrevSlide = () => {
        setCurrent(current === 0 ? nombreImage -1 : current - 1);
    }

    if (nombreImage <= 1) {
        return <CarrouselContainer>
            {slides.map ((photos, index) => {
                return (
                    <DivSlider key={index+id}>
                        {index === current && (<ImgDiv src={photos} alt="présentation logement" />)}
                    </DivSlider>
                )
            })}
        </CarrouselContainer>
    } else {
        return <CarrouselContainer>
            <ImgFlecheD onClick={NextSlide} src={FlecheDroite} alt="suivante" />
            <ImgFlecheG onClick={PrevSlide} src={FlecheGauche} alt="precedente" />
            <Rate>{current +1}/{nombreImage}</Rate>
            {slides.map ((photos, index) => {
                return (
                    <DivSlider key={index+id}>
                        {index === current && (<ImgDiv src={photos} alt="présentation logement" />)}
                    </DivSlider>
                )
            })}
        </CarrouselContainer>
    }
}
export default Carrousel;
