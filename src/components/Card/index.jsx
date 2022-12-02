import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../Device'
import colors from '../../utils/style/colors'


const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;

    @media ${device.tablet} {
        background-color: #F6F6F6;
        border-radius: 25px;
        padding: 50px;
        // justify-content: space-between;
    }
`
const CardLink = styled(Link)`
    width: 100%;
    height: 255px;
    position: relative;
    border-radius: 10px;

    @media ${device.desktop} {
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
    width: 100%;
`
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    border: 2px solid ${colors.primary};
`

function card ({data, id}) {
    return (
        <CardContainer>
            {
                data.map((card) => (
                    <CardLink key={card.id} to={`/Logements/${card.id}`}>
                            <CardImg src={card.cover} alt={card.title} />
                            <CardTitle>{card.title}</CardTitle>
                    </CardLink>
                ))
            }
        </CardContainer>
    )
}
export default card