import React from "react";
import Styled from "styled-components";

const Div = Styled.div`
    background: url(${props => props.image}) rgba(0, 0, 0, ${props => props.opacite});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: multiply;

    height: 111px;
    font-size: 24px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    line-height: 100%;
    margin: 20px 0;

    @media (min-width: 768px) {
        height: 223px;
        font-size: 48px;
        border-radius: 25px;
        line-height: 142.6%;
        margin: 30px 0;
        padding: 5px;
        br {
            display: none;
        }    
    }
`;

const Banner2 = ({ image, opacite, children }) => {
    return (
        <Div image={image} opacite={opacite}>
            {children}
        </Div>
    );
};

export default Banner2;