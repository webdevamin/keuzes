import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Seo from '../../components/Seo'

const Item = ({ item }) => {
    const { category, description, image,
        price, rating, title } = item;

    const { rate, count } = rating;

    return (
        <>
            <Seo title={title} description={description} />
            <Header />
            <main className={`pt-10 lg:pt-20 px-1 border-t-2 border-gray-100`}>
                <article className={`flex flex-col lg:flex-row 
                items-center gap-1 lg:gap-28 justify-center`}>
                    <div>
                        <Image src={image} alt={title}
                            width={300} height={350} objectFit={"contain"} />
                    </div>
                    <div className={`lg:w-3xl`}>
                        <div>
                            <p className={`uppercase text-gray-400`}>
                                {category}
                            </p>
                            <h1 className={`after:content-none font-semibold
                            text-2xl lg:text-4xl 
                            mt-3 mb-6 lg:mb-8`}>
                                {title}
                            </h1>
                            <p className='text-gray-500'>
                                {description}
                            </p>
                        </div>
                        <div className='my-12 w-full'>
                            <Link href={`/`}>
                                <a className={`bg-theme p-4 pl-6
                                lg:p-5 lg:px-8 uppercase block w-full 
                                lg:inline-block lg:w-auto font-bold 
                                 shadow-xl hover_effect_bg`}>
                                    Naar homepagina
                                </a>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default Item;

export const getServerSideProps = async (context) => {
    const { id } = context.params;

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const item = await res.json();

    return {
        props: { item },
    }
}