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
            <main className={`pt-16 lg:pt-20 border-t-2 border-gray-100`}>
                <article className={`flex items-center gap-28 justify-center`}>
                    <div>
                        <Image src={image} alt={title}
                            width={300} height={350} objectFit={"contain"} />
                    </div>
                    <div className={`w-3xl`}>
                        <div>
                            <p className={`uppercase text-gray-400`}>
                                {category}
                            </p>
                            <h1 className={`after:content-none font-normal 
                        text-4xl mt-3 mb-3`}>
                                {title}
                            </h1>
                            <p className='font-bold mb-5'>
                                {`Rating: ${rate} (${count})`}
                            </p>
                            <p className='text-3xl font-bold mb-5'>
                                € {price}
                            </p>
                            <p className='text-gray-500'>
                                {description}
                            </p>
                        </div>
                        <div className='mt-12'>
                            <Link href={`/`}>
                                <a className={`bg-theme p-5 uppercase 
                                font-bold transition-all ease-in-out duration-500
                                hover:bg-dark hover:text-white shadow-xl`}>
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