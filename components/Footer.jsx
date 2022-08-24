import Link from "next/link";
import { categoriesWithItems } from "../config/data";

const Footer = () => {
    return (
        <footer className={`mb-12 lg:mb-20 grid grid-cols-2 gap-5`}>
            <section className={`grid grid-cols-1 lg:grid-cols-2 gap-5`}>
                {
                    categoriesWithItems.map((categoryWithItems, index) => {
                        const { category, items } = categoryWithItems;

                        return (
                            <div key={index}>
                                <h3 className={`font-semibold capitalize mb-2`}>
                                    {category}
                                </h3>
                                <ul>
                                    {
                                        items.map((item, index) => {
                                            const { slug, name } = item;

                                            return (
                                                <li key={index}
                                                    className={`capitalize`}>
                                                    {name}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </section>
            <section className={`text-end`}>
                <h3 className={`font-semibold mb-2`}>
                    Keuzes.be
                </h3>
                <ul>
                    <li>
                        <Link href={'/about'}>
                            <a>Over Keuzes.be</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/guide'}>
                            <a>Hoe werkt het</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/guide'}>
                            <a>Hoe werkt het</a>
                        </Link>
                    </li>
                </ul>
            </section>
        </footer>
    );
};

export default Footer;