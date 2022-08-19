import Link from 'next/link';
import Seo from '../components/Seo'
import Header from "../components/Header";

const ClientError = () => {
    return (
        <>
            <Seo title={"Pagina niet gevonden"} description={`De pagina die u er naar 
            zocht bestaat niet. Keer terug naar de homepagina.`} noIndex/>
            {/* <Header /> */}
            <main className='not_found'>
                <h1>Pagina niet gevonden.</h1>
            </main>
        </>
    )
}

export default ClientError;