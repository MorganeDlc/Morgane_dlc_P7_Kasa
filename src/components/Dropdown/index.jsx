import styled from 'styled-components';
import { useState } from "react";
import fleche from "../../assets/images/fleche.png";

const DropdownOpen = styled.div`
    width: 100%;
    margin: 0px auto;
    background-color:#F7F7F7;
    border-radius: 5px;
    color: #FF6060;
    font-weight: 400;
`

const DropdownClosed = styled.div`
    margin: 0px auto;
    width: 100%;
    margin-bottom: 30px;
`
const DropdownButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 47px;
    font-size: 24px;
    background-color: #FF6060;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding-left: 20px;
    padding-right: 30px;
`
const DropdownContent = styled.p`
    padding: 25px 18px 15px 18px;
    font-size: 24px;
    font-weight: 300;
`
const ImgOpen = styled.img`
    transform: rotate(180deg);
`

function DropdownAbout({title, content}) {
    const [isOpen , setIsOpen] = useState(false);
    return isOpen ? (
        <DropdownOpen>
            <DropdownButton onClick={() => setIsOpen(false)}>
            {title}
            <ImgOpen src={fleche} alt="flèche" />
            </DropdownButton>
            <DropdownContent>{content}</DropdownContent>
        </DropdownOpen>
    ) : (
        <DropdownClosed>
            <DropdownButton onClick={() => setIsOpen(true)}>
            {title} 
            <img src={fleche} alt="flèche" />
          </DropdownButton>
        </DropdownClosed>
    );
}

export default DropdownAbout