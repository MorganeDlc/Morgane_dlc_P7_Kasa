import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { device } from '../components/Device'

const ErrorDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 30px 80px 30px;
    color: ${colors.primary};
`
const ErrorTitle = styled.h1`
    font-weight: 700;
    margin: 100px 0 40px 0;
    font-size: 96px;

    @media ${device.tablet} {
        font-size: 180px;
    }
    @media ${device.desktop} {
        font-size: 280px;
    }
`
const ErrorMsg = styled.p`
    text-align: center;
    margin : 0 0 150px 0;
    font-weight: 500;
    font-size: 18px;
    max-width: 300px;

    @media ${device.tablet} {
        font-size: 35px;
        max-width: 1200px;
    }
`
const ErrorLink = styled(Link)`
    font-size: 14px;
    color: ${colors.primary};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }

    @media ${device.tablet} {
        font-size: 18px;
    }
`

function Error() {
    return (    
        <ErrorDiv>
            <ErrorTitle>404</ErrorTitle>
            <ErrorMsg>Oups! La page que vous demandez n'existe pas.</ErrorMsg>
            <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
        </ErrorDiv>
    )
}
 
export default Error