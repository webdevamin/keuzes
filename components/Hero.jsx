import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { carouselItems } from "../config/data";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <section className={`relative h-64 sm:h-96 md:h-2xl shadow`}>
            {
                carouselItems.map((carouselItem, index) => {
                    const { title, text, cta, image } = carouselItem;
                    const { text: ctaText, link } = cta;

                    return (
                        <div key={index}>
                            <Image src={image} alt={title}
                                objectFit={`cover`} layout={`fill`} priority />
                            <div className={`flex w-full h-full justify-center items-center`}>
                                <Link href={link}>
                                    <a className={`text-dark text-sm lg:text-base
                        py-3 px-4 absolute bottom-10 lg:bottom-14 bg-theme uppercase 
                        font-bold transition-all ease-in-out duration-500
                        hover:bg-dark hover:text-white shadow-xl border-2 border-dark`}>
                                        {ctaText}
                                    </a>
                                </Link>
                            </div>
                        </div>
                        // <div key={index}>
                        //     <Image src={`/samsung-galaxy.webp`} alt={"Actie"}
                        //         objectFit={`cover`} layout={`fill`} priority />
                        //     <div className={`flex w-full h-full justify-center items-center`}>
                        //         <Link href={'/items/12'}>
                        //             <a className={`text-dark text-sm lg:text-base
                        //     py-3 px-4 absolute bottom-10 lg:bottom-14 bg-theme uppercase 
                        //     font-bold transition-all ease-in-out duration-500
                        //     hover:bg-dark hover:text-white shadow-xl`}>
                        //                 Bekijk product
                        //             </a>
                        //         </Link>
                        //     </div>
                        // </div>
                    )
                })
            }
        </section>
    );
};

export default Hero;