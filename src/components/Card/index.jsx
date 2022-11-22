import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LogementsData } from "../../assets/data/Logements";


const CardContainer = styled.div`
    background-color: #F6F6F6;
    border-radius: 25px;
`
const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px;
    gap: 50px 60px;
`
const CardAspect = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 10px;
    position: relative;
`
const CardColor = styled.div`
    background: linear-gradient(#FF5F60, #813232);
    position: absolute;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    padding: 3px;
`
const CardTitle = styled.h2`
    color: white;
    font-weight: 500;
    font-size: 18px;
    text-decoration; none;
    position: absolute;
    left: 20px;
    bottom: 0px;
    width: 230px;
    text-shadow: 1px 1px 2px #717171;
`
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`

function card() {
    return (
        <CardContainer>
            <CardDiv>
                {LogementsData.map (({title, id, cover}) => (
                    <CardAspect key={id}>
                        <Link to ={`/Logements/${id}`}>
                            <CardColor>
                                <CardTitle>{title}</CardTitle>
                                <CardImg src={cover} alt={title} />
                            </CardColor>
                        </Link>
                    </CardAspect>
                ))}
            </CardDiv>
        </CardContainer>
    )
}

export default card