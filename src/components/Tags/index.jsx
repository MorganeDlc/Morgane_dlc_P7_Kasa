import colors from "../../utils/style/colors"
import styled from "styled-components"

const Tag = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.primary};
color: white;
border-radius: 10px;
height: 25px;
padding: 0 17px;
font-size: 14px;
margin-right: 10px;
margin-top: 10px;
`

function Tags ({getTag}) {
    return (
            <Tag>{getTag}</Tag>
    )
}

export default Tags