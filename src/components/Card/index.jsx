import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../Device'


const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;

    @media ${device.tablet} {
        background-color: #F6F6F6;
        border-radius: 25px;
        padding: 50px;
        justify-content: space-between;
    }
`
const CardLink = styled(Link)`
    width: 335px;
    height: 255px;

    @media ${device.tablet} {
        width: 340px;
        height: 340px;
    }
`
const CardColor = styled.div`
    background: linear-gradient(#FF5F60, #813232);
    position: absolute;
    border-radius: 10px;
    width: 335px;
    height: 255px;
    padding: 3px;

    @media ${device.tablet} {
        width: 340px;
        height: 340px;
    }
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

function card ({data, id}) {
    return (
        <CardContainer>
            {
                data.map((card) => (
                    <CardLink key={card.id} to={`/Logements/${card.id}`}>
                        <CardColor>
                            <CardImg src={card.cover} alt={card.title} />
                            <CardTitle>{card.title}</CardTitle>
                        </CardColor>
                    </CardLink>
                ))
            }
        </CardContainer>
    )
}
export default card