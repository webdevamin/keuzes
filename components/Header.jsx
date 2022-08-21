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
                        <a className={`block relative w-32 h-10 lg:w-44 lg:h-14`}>
                            <Image src={'/logo.png'} objectFit={'contain'}
                                alt={"logo"} layout={`fill`} />
                        </a>
                    </Link>
                </div>
                {/* <div className={`hidden lg:block`}>
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
                </div> */}
                <nav className={styles.nav}>
                    <input className={styles.menu_btn} type="checkbox" id="menu-btn"
                        onClick={handleClick} />
                    <label className={`${styles.menu_icon} ${styles.h_button}`}
                        htmlFor="menu-btn">
                        <span className={styles.navicon}></span>
                    </label>
                    <ul className={styles.nav_list}>
                        <li>
                            <Link href={'/'}>
                                <a>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/guide'}>
                                <a>
                                    Hoe werkt het
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/about'}>
                                <a>
                                    Over Keuzes.be
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <ul className={active ? `${styles.menu} ${styles.open_menu}`
                : `${styles.menu}`}>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/guide'>
                        <a>Hoe werkt het</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>Over Keuzes.be</a>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;