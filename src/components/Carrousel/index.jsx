import styled from "styled-components"
import React, { useState } from 'react';
import FlecheGauche from "../../assets/images/FlecheGauche.png"
import FlecheDroite from "../../assets/images/FlecheDroite.png"
import { LogementsData } from "../../assets/data/Logements"


const CarrouselContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 415px;
    margin: 0px auto;
`
const CarrouselButton = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    height: 500px;
`
const ImgFlecheG = styled.img`
    top: 50%;
    cursor: pointer;
`
const ImgFlecheD = styled.img`
    top: 50%;
    cursor: pointer;
`
const CarrouselItemContainer = styled.div`
    width: 100%;
`
const CarrouselItem = styled.div`
    align-items: center;
`
const View = styled.img`
    height: 500px;
    object-fit: cover;
`

function Carrousel ({data}) {
    const picture = data.pictures;
    const [current, setCurrent] = useState(0);
    const length = picture.length;

    const nextPicture = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevPicture = () => {
        setCurrent(current === 0 ? length - 1 : current -1);
    };

    return (
        <CarrouselContainer>
            <CarrouselButton>
                <ImgFlecheG src={FlecheGauche} onClick={prevPicture} />
                <ImgFlecheD src={FlecheDroite} onClick={nextPicture} />
            </CarrouselButton>
            <CarrouselItemContainer>
                {picture.map((p, index) => {
                    return (
                        <CarrouselItem key={index}>
                            {index === current &&
                            <View src={p} alt='Image1'/>}
                        </CarrouselItem>
                    );
                })}
            </CarrouselItemContainer>
        </CarrouselContainer>
    )
}
export default Carrousel;