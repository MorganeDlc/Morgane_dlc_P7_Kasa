import { Navigate, useParams } from "react-router"
import styled from "styled-components"
import { LogementsData } from "../assets/data/Logements"
import colors from "../utils/style/colors"
import Carrousel from "../components/Carrousel"
// import DropdownAbout from "../components/Dropdown"

const PageLogements = styled.div`
    margin: 0 20px;
`
const LogementInfo = styled.div`
    margin 0 auto;
`
const InfoPrio = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 24px;
    color: ${colors.primary};
`
const TitreLogement = styled.div`
    display: flex;
    flex-direction: column;
`
const DivTags = styled.div`
    display: flex;
    flex-wrap: wrap;
`
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
        <Carrousel />
        <LogementInfo>
            <InfoPrio>
                <TitreLogement>
                    <h1>{LogementFind.title}</h1>
                    <h3>{LogementFind.location}</h3>
                    <DivTags>
                        {LogementFind.tags.map ((tag, index) => {
                            return (
                                <Tag key={index+id}>{tag}</Tag>
                            )
                        })}
                    </DivTags>
                </TitreLogement>
                {/* <HostRaiting> */}
                    {/* <Host>
                        <p>{LogementFind.host.name}</p>
                        <img src={LogementFind.host.picture} alt="Propriétaire" />
                    </Host>

                    {LogementFilter.map(({index, rating}) => {
                        return (
                            <RatingDiv key={index+id} />
                            <Rating rateValue={Number(rating)} />
                        )
                    })} */}
                {/* </HostRaiting> */}
            </InfoPrio>
            {/* <DropdownLogement>
                <DropdownAbout title="Description" content={indexLogement.description}/>
                <DropdownAbout title="Équipements" content={indexLogement.equipments.map ((equipement, index) => {
                    return (
                        <li className="LogementEquipement" key={index/id}>
                            {equipement}
                        </li>  
                    )
                })
            </DropdownLogement> */}
        </LogementInfo>
    </PageLogements>
    )
}

export default Logement