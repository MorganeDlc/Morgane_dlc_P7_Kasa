import Banner from '../components/Banner/Banner'
import {AboutDatas} from '../assets/data/About'
import styled from 'styled-components'
import Dropdown from '../components/Dropdown'
import BannerAbout from '../assets/images/BannerAbout.png'

const DropdownDiv = styled.div`
    margin: 0 20px 60px 20px;
`
function About() {
    return (
    <div>
        <Banner image={BannerAbout} texte='' />
        <DropdownDiv> 
            {AboutDatas.map (({title, content, id}) => ( 
            <Dropdown title ={title} content={content} key={id} />
            ))}
        </DropdownDiv>
    </div>
    )
}

export default About