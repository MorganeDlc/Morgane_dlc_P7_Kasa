import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Logements } from "../../assets/data/logements";


const CardContainer = styled.div`
    background-color: #F6F6F6;
    border-radius: 25px;
    margin: 30px 70px;
`
const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px;
`
const CardAspect = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 10px;
    position: relative;
    margin: 25px;
`
const CardTitle = styled.h2`
    color: white;
    font-weight: 500;
    font-size: 18px;
    text-decoration; none;
    position: absolute;
    left: 8px;
    bottom: 2px;
    width: 230px;
    text-shadow: 1px 1px 2px #717171;
`
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    border: 3px solid ${colors.primary};
`

function card() {
    return (
        <CardContainer>
            <CardDiv>
                {Logements.map (({title, id, cover}) => (
                    <CardAspect key={id}>
                        <Link to ={`/Logement/${id}`}>
                        <CardTitle>{title}</CardTitle>
                        <CardImg src={cover} alt={title} />
                        </Link>
                    </CardAspect>
                ))}
            </CardDiv>
        </CardContainer>
    )
}

export default card