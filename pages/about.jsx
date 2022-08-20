import Seo from '../components/Seo'
import Header from "../components/Header";

const About = () => {
    return (
        <>
            <Seo title={"Pagina niet gevonden"} description={`De pagina die u er naar 
            zocht bestaat niet. Keer terug naar de homepagina.`} noIndex />
            {/* <Header /> */}
            <main>
                <h1>Wordt vervolgd...</h1>
            </main>
        </>
    )
}

export default About;