import Banner from '../components/Banner'
import Card from '../components/Card'
import { LogementsData } from "../assets/data/Logements";
import Background from "../assets/images/Background.jpg"

function Home() {
    return ( 
    <div className="Home_div">
        <Banner image={Background} opacite={0.3}>Chez vous,<br /> partout et ailleurs</Banner>
        <Card data={LogementsData}/>
    </div>
    )
  }

export default Home
