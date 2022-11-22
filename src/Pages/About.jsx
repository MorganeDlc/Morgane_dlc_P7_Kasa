import Banner from '../components/Banner/BannerAbout'
import {AboutDatas} from '../assets/data/About'
import styled from 'styled-components'
import DropdownAbout from '../components/Dropdown'

const DropdownDiv = styled.div`
    margin: 0 20px 60px 20px;
`
function About() {
    return (
    <div>
        <Banner />
        <DropdownDiv> 
            {AboutDatas.map (({title, content, id}) => ( 
            <DropdownAbout title ={title} content={content} key={id} />
            ))}
        </DropdownDiv>
    </div>
    )
}

export default About