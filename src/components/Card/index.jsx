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
        padding: 50px 0;
    }
`
const CardLink = styled(Link)`
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: center;
    // flex-direction: column;
    // align-items: center;
    // gap: 40px;
    // width: 100%;
    // height: 100%;
    width: 340px;
    height: 340px;

    @media ${device.tablet} {
        // flex-direction: row;
        // justify-content: center;
    }
`
const CardColor = styled.div`
    background: linear-gradient(#FF5F60, #813232);
    position: absolute;
    border-radius: 10px;
    width: 340px;
    height: 340px;
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

function card ({data, id}) {
    return (
        <CardContainer>
            {
                data.map((card) => (
                    <CardLink key={card.id} to={`/Logements/${id}`}>
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