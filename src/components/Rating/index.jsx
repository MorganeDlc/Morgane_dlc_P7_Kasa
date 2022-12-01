import GreyStar from "../../assets/images/GreyStar.png"
import RedStar from "../../assets/images/RedStar.png"
import styled from 'styled-components';
import { device } from '../Device'


const DivRating = styled.div`
    display: flex;
    align-items: center;
`
const ImgRating = styled.img`
    width: 15px;
    height: 15px;
    padding-left: 10px;

    @media ${device.tablet} {
        width: 28px;
        height: 28px;
    }
`

function Rating (rateValue) {
    const array = [1,2,3,4,5]

    return (
        <DivRating>
            {
                array.map((arrayElement, key) =>
                arrayElement <= rateValue.rateValue ? (
                    <ImgRating src={RedStar} alt="Etoile Rouge" key={key} />
                ) : (
                    <ImgRating src={GreyStar} alt="Etoile Grise" key={key} />
                ))
            }
        </DivRating>
    )
}
export default Rating