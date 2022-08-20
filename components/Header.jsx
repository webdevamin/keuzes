import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

import styles from "../styles/components/Header.module.scss";

const Header = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => setActive(!active);

    return (
        <header className={styles.header}>
            <div className={`flex justify-between items-center`}>
                <div>
                    <Link href={'/'}>
                        <a>
                            <Image src={'/logo.png'}
                                alt={"logo"} objectFit={"contain"}
                                width={173.428} height={58} />
                        </a>
                    </Link>
                </div>
                <div className={`hidden lg:block`}>
                    <div className="flex items-center gap-2">
                        <label htmlFor="search" className="hidden">
                            Zoeken
                        </label>
                        <FontAwesomeIcon icon={faSearch}
                            className={`h-10 w-10 p-2.5 mb-1`} />
                        <input type="text" name="search" id="search"
                            placeholder="Product zoeken"
                            className={`h-10 w-96 border-b-2 pb-1 border-dark 
                        outline-none transition-all duration-200 ease-linear
                        focus:border-theme`}
                        />
                    </div>
                </div>
                <nav className={styles.nav}>
                    <input className={styles.menu_btn} type="checkbox" id="menu-btn" onClick={handleClick} />
                    <label className={`${styles.menu_icon} ${styles.h_button}`}
                        htmlFor="menu-btn">
                        <span className={styles.navicon}></span>
                    </label>
                    <ul className="hidden lg:flex uppercase items-center gap-10">
                        <li className={`relative after:content-[''] after:block 
                    after:h-2px after:bg-theme after:absolute after:w-0 
                    after:transition-all after:duration-200 after:ease-linear
                    hover:after:w-full after:mt-2`}>
                            <Link href={'/guide'}>
                                <a className={`font-bold`}>
                                    Hoe werkt het
                                </a>
                            </Link>
                        </li>
                        <li className={`relative after:content-[''] after:block 
                    after:h-2px after:bg-theme after:absolute after:w-0 
                    after:transition-all after:duration-200 after:ease-linear
                    hover:after:w-full after:mt-2`}>
                            <Link href={'/about'}>
                                <a className={`font-bold`}>
                                    Over Keuzes.be
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={`block lg:hidden w-full`}>
                <div className="flex items-center gap-2">
                    <label htmlFor="search" className="hidden">
                        Zoeken
                    </label>
                    <FontAwesomeIcon icon={faSearch}
                        className={`h-10 w-10 p-2.5 mb-1`} />
                    <input type="text" name="search" id="search"
                        placeholder="Product zoeken"
                        className={`h-10 w-96 border-b-2 pb-1 border-dark 
                        outline-none transition-all duration-200 ease-linear
                        focus:border-theme`}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;