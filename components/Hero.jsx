import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className={`relative h-96 md:h-xl`}>
            <Image src={`/samsung-galaxy.webp`} alt={"Actie"}
                objectFit={`cover`} objectPosition={'center'}
                layout={`fill`} />
            <div className={`flex w-full h-full justify-center items-center`}>
                <Link href={'/items/12'}>
                    <a className={`text-dark 
                    py-3 px-4 absolute bottom-14 bg-theme uppercase 
                    font-bold transition-all ease-in-out duration-500
                    hover:bg-dark hover:text-white`}>
                        Bekijk product
                    </a>
                </Link>
            </div>
            {/* <div className={`absolute text-white uppercase 
            flex flex-col justify-center h-full`}>
                <article className={`pl-16 pr-12 py-10 bg-dark`}>
                    <h1 className={`text-white text-5xl font-bold mb-5 after:content-none`}>
                        Keuzes.be
                    </h1>
                    <p className="text-xl">
                        Top 100 van het jaar elektronica: smartphones, laptops en meer
                    </p>
                </article>
            </div> */}
        </section>
    );
};

export default Hero;