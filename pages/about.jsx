import Seo from '../components/Seo'
import Header from "../components/Header";
import Link from 'next/link';
import Footer from '../components/Footer';
import { TOP } from '../config/app';

const About = () => {
    return (
        <>
            <Seo title={"Over Keuzes.be"} description={`Hier vindt u meer informatie over Keuzes.be. Waarom het bestaat, hoe je het gebruikt en affiliate programma's.`} />
            <Header />
            <main>
                <section>
                    <article>
                        <h1 className={`text-2xl lg:text-3xl`}>
                            Over Keuzes.be
                        </h1>
                        <p>
                            Iemand die een nieuwe smartphone en/of laptop wil kopen, zoekt
                            meestal naar één van de beste producten. Deze website is
                            ontwikkeld voor particulieren/bedrijven die
                            naar de <strong>beste elektronica artikelen zoeken</strong>.
                        </p>
                        <p>
                            Momenteel worden enkel top {TOP} smartphones, laptops, desktops,
                            tablets en televisie getoond. Later kunnen we het
                            assortiment uitbreiden naar andere populaire
                            categoriëen zoals headphones, smartwatches, etc.
                        </p>
                        <p>
                            Voor elk product worden <strong>prijzen en andere
                                nuttige informatie</strong> zoals voorraad uit verschillende webshops
                            getoond. Een voorbeeld: u bekijkt een artikel Samsung Galaxy S21 FE
                            op deze website. Daarop kunt u zien dat het op Coolblue €629 kost.
                            Terwijl de prijs op Amazon €619 is. Nog een handige feature buiten
                            prijsvergelijking is de <strong>productvergelijking</strong>. U kunt tot 5 dezelfde
                            type producten samen vergelijken qua prijs, specificaties en meer.
                        </p>
                        <p>
                            Ten slotte maakt deze applicatie gebruik van <strong>affiliate programma</strong>.
                            Wat betekent dat het systeem producten verzamelt uit bekende webshops
                            en ze op deze website weergeeft. Voor elke transactie dat er gebeurt,
                            vervangt de app een kleine commissie van een webshop.
                        </p>
                    </article>
                </section>
                <Link href={'/'}>
                    <a className={`button mt-10 lg:mt-12`}>
                        Naar homepagina
                    </a>
                </Link>
            </main>
            <Footer />
        </>
    )
}

export default About;