import Banner from '../components/Banner/Banner'
import Card from '../components/Card'
import background from '../assets/images/Background.png'

function Home() {
    return ( 
    <div className="Home_div">
        <Banner image={background} texte='Chez vous, partout et ailleurs' />
        <Card />
    </div>
    )
  }

export default Home
