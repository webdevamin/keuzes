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
                    <h1 className={`text-white text-4xl font-bold mb-3 after:content-none`}>
                        Unleash gaming aura
                    </h1>
                    <p className="text-lg">
                        Gekke acties voor gaming producten
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Hero;