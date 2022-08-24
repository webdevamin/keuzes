import Seo from '../components/Seo'
import Header from "../components/Header";
import Link from 'next/link';
import Footer from '../components/Footer';

const Guide = () => {
    return (
        <>
            <Seo title={"Hoe werkt Keuzes.be"} description={`Hoe werkt Keuzes.be`} />
            <Header />
            <main className={`text-center`}>
                <section>
                    <h1 className={`after:mx-auto mb-6`}>
                        Wordt vervolgd...
                    </h1>
                    <p>
                        Deze pagina moet nog opgebouwd worden. Keer terug naar de homepagina.
                    </p>
                </section>
                <Link href={'/'}>
                    <a className={`button mt-8`}>
                        Naar homepagina
                    </a>
                </Link>
            </main>
            <Footer />
        </>
    )
}

export default Guide;