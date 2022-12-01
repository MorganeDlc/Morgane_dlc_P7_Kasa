import Banner from '../components/Banner/Banner'
import Card from '../components/Card'
import background from '../assets/images/Background.png'
import { LogementsData } from "../assets/data/Logements";

function Home() {
    return ( 
    <div className="Home_div">
        <Banner image={background} texte='Chez vous, partout et ailleurs' />
        <Card data={LogementsData}/>
    </div>
    )
  }

export default Home
