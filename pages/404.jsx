import Link from 'next/link';
import Seo from '../components/Seo'
import Header from "../components/Header";

const ClientError = () => {
    return (
        <>
            <Seo title={"Pagina niet gevonden"}
                description={`De pagina die u probeerde te bezoeken bestaat niet. 
                Keer terug naar de homepagina.`}
                noIndex />
            <Header />
            <main className={`text-center`}>
                <section>
                    <h1 className={`after:mx-auto mb-6`}>
                        Pagina niet gevonden
                    </h1>
                    <p>
                        De pagina die u probeerde te bezoeken bestaat niet.
                        Keer terug naar de homepagina.
                    </p>
                </section>
                <Link href={'/'}>
                    <a className={`button mt-8`}>
                        Naar homepagina
                    </a>
                </Link>
            </main>
        </>
    )
}

export default ClientError;