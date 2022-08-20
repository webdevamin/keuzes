import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className={`relative h-64 sm:h-96 md:h-2xl shadow-lg`}>
            <Image src={`/samsung-galaxy.webp`} alt={"Actie"}
                objectFit={`cover`} layout={`fill`} priority />
            <div className={`flex w-full h-full justify-center items-center`}>
                <Link href={'/items/12'}>
                    <a className={`text-dark 
                    py-3 px-4 absolute bottom-14 bg-theme uppercase 
                    font-bold transition-all ease-in-out duration-500
                    hover:bg-dark hover:text-white shadow-xl`}>
                        Bekijk product
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default Hero;