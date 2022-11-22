import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors'


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
    font-size: 280px;
`
const ErrorMsg = styled.p`
    text-align: center;
    margin : 0 0 150px 0;
    font-weight: 500;
    font-size: 35px;
`
const ErrorLink = styled(Link)`
    font-size: 18px;
    color: ${colors.primary};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
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