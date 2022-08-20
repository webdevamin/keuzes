import Image from "next/image";

const Hero = () => {
    return (
        <section className={`relative h-96 md:h-xl`}>
            <Image src={`/banner.jpg`} alt={"Actie"}
                objectFit={`cover`}
                layout={`fill`} />
            <div className={`absolute text-white uppercase 
            flex flex-col justify-center h-full`}>
                <article className={`pl-16 pr-12 py-10 bg-dark`}>
                    <h1 className={`text-white text-5xl font-bold mb-5 after:content-none`}>
                        Keuzes.be
                    </h1>
                    <p className="text-xl">
                        Top 100 van het jaar elektronica: smartphones, laptops en meer
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Hero;