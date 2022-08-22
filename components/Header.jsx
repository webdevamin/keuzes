import Image from "next/image";
import Link from "next/link";
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
                <nav className={styles.nav}>
                    <input className={styles.menu_btn} type="checkbox"
                        id="menu-btn" onClick={handleClick} />
                    <label className={`${styles.menu_icon} ${styles.h_button}`}
                        htmlFor="menu-btn">
                        <span className={`bg-dark block relative h-1 
                        transition-all w-8 before:bg-dark before:content-[''] 
                        before:block before:h-full before:absolute 
                        before:w-full before:lg-hidden before:transition-all 
                        after:bg-dark after:content-[''] 
                        after:block after:h-full after:absolute 
                        after:w-full after:lg-hidden after:transition-all 
                        before:top-2 after:-top-2`} />
                    </label>
                    <ul className={`hidden lg:flex uppercase items-center 
                    gap-10`}>
                        <li className={`relative after:content-[''] after:block 
                        after:h-2px after:bg-theme after:absolute after:w-0 
                        after:transition-all after:duration-200 after:ease-linear
                        hover:after:w-full after:mt-2 tracking-tight`}>
                            <Link href={'/'}>
                                <a className={`font-semibold`}>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className={`relative after:content-[''] after:block 
                        after:h-2px after:bg-theme after:absolute after:w-0 
                        after:transition-all after:duration-200 after:ease-linear
                        hover:after:w-full after:mt-2 tracking-tight`}>
                            <Link href={'/guide'}>
                                <a className={`font-semibold`}>
                                    Hoe werkt het
                                </a>
                            </Link>
                        </li>
                        <li className={`relative after:content-[''] after:block 
                        after:h-2px after:bg-theme after:absolute after:w-0 
                        after:transition-all after:duration-200 after:ease-linear
                        hover:after:w-full after:mt-2 tracking-tight`}>
                            <Link href={'/about'}>
                                <a className={`font-semibold`}>
                                    Over Keuzes.be
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <ul className={`absolute z-50 top-20 m-0 p-0 overflow-hidden 
            mt-1 w-full flex-col clear-both max-h-0 flex items-end 
            border-dark bg-theme transition-all ease-linear duration-100 
            ${active ? 'border-2 max-h-96' : ''}`}>
                <li className={`border-b-2 border-dark w-full 
                last:border-none`}>
                    <Link href='/'>
                        <a className={`font-bold w-full block p-3 
                        tracking-tight`}>
                            Home
                        </a>
                    </Link>
                </li>
                <li className={`border-b-2 border-dark w-full 
                last:border-none`}>
                    <Link href='/guide'>
                        <a className={`font-bold w-full block p-3 
                        tracking-tight`}>
                            Hoe werkt het
                        </a>
                    </Link>
                </li>
                <li className={`border-b-2 border-dark w-full 
                last:border-none`}>
                    <Link href='/about'>
                        <a className={`font-bold w-full block p-3 
                        tracking-tight`}>
                            Over Keuzes.be
                        </a>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;