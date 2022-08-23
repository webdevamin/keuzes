import Seo from '../components/Seo'
import Header from "../components/Header";
import Link from 'next/link';

const About = () => {
    return (
        <>
            <Seo title={"Over Keuzes.be"} description={`Over Keuzes.be`} />
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
        </>
    )
}

export default About;