import { Navigate, useParams } from "react-router"
import styled from "styled-components"
import { LogementsData } from "../assets/data/Logements"
import colors from "../utils/style/colors"
import Tags from "../components/Tags"
import Dropdown from '../components/Dropdown'
import Rating from "../components/Rating"
import Carrousel from "../components/Carrousel"
import { device } from '../components/Device'

const PageLogements = styled.div`
    // margin: 0 20px;
`
const LogementInfo = styled.div`
    margin 0 auto;
`
const TitleTagsHostRating = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 24px;
    color: ${colors.primary};

    @media ${device.tablet} {
        justify-content: space-between;
        flex-direction: row;
    }
`
const TitleTags = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 10px;

    @media ${device.tablet} {
        font-size: 36px;
    }
`
const SousTitre = styled.h3`
    margin: 0;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 500;

    @media ${device.tablet} {
        font-size: 18px;
    }
`
const DivTag = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const HostRaiting = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    @media ${device.tablet} {
        flex-direction: column;
    }
`
const Host = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const HostName = styled.p`
    font-size: 12px;
    max-width: 120px;
    text-align: right;
    margin-right: 10px;
    width: min-content;

    @media ${device.tablet} {
        font-size: 18px;
    }
`
const HostImg = styled.img`
    border-radius: 300px;
    height: 32px;
    width: 32px;

    @media ${device.tablet} {
        height: 64px;
        width: 64px;
    }
`
const DropdownLogement = styled.div`

    @media ${device.tablet} {
        display: flex;
        justify-content: space-between;
        column-gap: 76px;
    }
`
const List = styled.li`
    list-style: none;
`

function Logement () {
    const params = useParams ()
    const id = params.id
    const LogementFind = LogementsData.find(element => element.id === id)
    const LogementFilter = LogementsData.filter(element => element.id === id)

    if (LogementFilter.length === 0) { //On vérifie si l'ID est correct
        return <Navigate to="/notfound" replace={true} />
    }
    return (
    <PageLogements>
        <Carrousel pictures={LogementFind.pictures}/>
        <LogementInfo>
            <TitleTagsHostRating>
                <TitleTags>
                    <Title>{LogementFind.title}</Title>
                    <SousTitre>{LogementFind.location}</SousTitre>
                    <DivTag>
                        {LogementFind.tags.map((tags, index) => (
                            <Tags key={index} getTag={tags}/>
                        ))}
                    </DivTag>
                </TitleTags>
                <HostRaiting>
                    <Host>
                        <HostName>{LogementFind.host.name}</HostName>
                        <HostImg src={LogementFind.host.picture} alt="Propriétaire" />
                    </Host>
                    <Rating rateValue={LogementFind.rating}/>
                </HostRaiting>
            </TitleTagsHostRating>
            <DropdownLogement>
                <Dropdown title="Description" content={LogementFind.description}/>
                <Dropdown title="Équipements" content={LogementFind.equipments.map ((equipement, index) => {
                    return (
                        <List key={index/id}>
                            {equipement}
                        </List>
                    )
                })} />
            </DropdownLogement>
        </LogementInfo>
    </PageLogements>
    )
}

export default Logement