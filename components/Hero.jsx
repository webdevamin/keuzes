import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { carouselItems } from "../config/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [disableTimeout, setDisableTimeout] = useState(false);

    useEffect(() => {
        if (!disableTimeout) {
            setTimeout(() => {
                if (currentSlide < 2) {
                    setCurrentSlide(currentSlide + 1);
                }
                else {
                    setCurrentSlide(0);
                }
            }, 10000);
        }
    }, [currentSlide, disableTimeout]);

    const handleClick = (previous = false) => {
        setDisableTimeout(true);

        if (previous) {
            if (currentSlide === 0) setCurrentSlide(2);
            else setCurrentSlide(currentSlide - 1);
        }
        else {
            if (currentSlide === 2) setCurrentSlide(0);
            else setCurrentSlide(currentSlide + 1);
        }
    }

    return (
        <section className={`relative h-64 sm:h-96 md:h-2xl`}>
            {
                carouselItems.map((carouselItem, index) => {
                    const { title, text, cta, image } = carouselItem;
                    const { text: ctaText, link } = cta;

                    return (
                        <div key={index} data-id={index}
                            className={`absolute h-full shadow-xl w-full
                            transition-all ease-linear duration-long
                            ${index === currentSlide ? `opacity-100` : `opacity-0`}`}>
                            <Image src={image} alt={title}
                                objectFit={`cover`} layout={`fill`} priority />
                            <div className={`flex w-full h-full justify-between 
                            items-center border border-dark px-5 z-50`}>
                                <FontAwesomeIcon icon={faAngleLeft}
                                    className={`h-10 w-10 p-3
                                    lg:h-12 lg:w-12 lg:p-4 backdrop-blur-sm 
                                    bg-theme/80 text-dark rounded-full 
                                    z-40 cursor-pointer transite shadow-2xl
                                    hover:bg-dark hover:text-white`}
                                    onClick={() => handleClick(true)} />
                                <FontAwesomeIcon icon={faAngleRight}
                                    className={`h-10 w-10 p-3
                                    lg:h-12 lg:w-12 lg:p-4 backdrop-blur-sm 
                                    bg-theme/80 text-dark rounded-full 
                                    z-50 cursor-pointer transite shadow-2xl
                                    hover:bg-dark hover:text-white`}
                                    onClick={() => handleClick()} />
                            </div>
                            <div className={`flex w-full h-auto justify-center 
                            items-center`}>
                                <Link href={link}>
                                    <a className={`text-dark text-sm lg:text-base
                        py-2 px-3 lg:py-3 lg:px-4 absolute bottom-8 lg:bottom-14 bg-theme uppercase 
                        font-bold transition-all ease-in-out duration-500 z-50
                        hover:bg-dark hover:text-white shadow-xl border-2 border-dark`}>
                                        {ctaText}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default Hero;