import useSWR from 'swr';
import Card from '../components/Card';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Seo from '../components/Seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faXmark, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

import styles from "../styles/pages/Home.module.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { data, error } = useSWR('https://fakestoreapi.com/products/category/electronics?limit=12', fetcher);

  const handleFilterClick = () => {
    setShowMenu(true);
  }

  const closeMenu = () => {
    setShowMenu(false);
  }

  const Items = () => {
    if (error) {
      return (
        <p className='mt-10'>
          Er ging iets mis met het ophalen van de producten.
          Probeer het later opnieuw.
        </p>
      )
    }

    if (!data) return <Loader />

    return (
      data.map((item, index) => {
        return <Card key={index} item={item} />
      })
    )
  }

  return (
    <>
      <Seo />
      <Header />
      <Hero />
      <aside className={styles.aside_sm}>
        <div className={`bg-black h-screen w-screen fixed transition-all 
            ease-in-out top-0 right-0 z-10 opacity-30 block
            ${showMenu ? '' : 'hidden'}`} onClick={closeMenu} />
        <div className={`top-0 left-0 bg-white py-10 md:py-12 fixed h-full 
            z-50 block transition-all ease-in-out rounded-r-3xl shadow-2xl 
            ${showMenu ? 'w-80 md:w-96 px-8 md:px-12' : 'px-0 w-0 md:w-0'}`}>
          <div className={`${showMenu ? 'block' : 'hidden'}`}>
            <div className='wrapper'>
              <div className={styles.accordion}>
                <div className='item' onClick={() => handleClick(index)}>
                  <div className={styles.item}>
                    <span className={styles.icon}>
                      +
                      {/* {selected === index && faqs.length >= 1 ? '-' : '+'} */}
                    </span>
                    <h4>Item title</h4>
                  </div>
                  {/* <div className={selected === index && faqs.length >= 1 ?
                    'content show' : 'content'}
                    dangerouslySetInnerHTML={{ __html: answer.html }} /> */}
                  <div className={styles.content}>
                    Item detail
                  </div>
                </div>
              </div>
            </div>
            {/* <div className={`w-4 h-4 bg-theme p-4 shadow rounded-full`}
              onClick={closeMenu}>
              <FontAwesomeIcon icon={faXmark}
                className={`alert_icon text-white-all`} />
            </div>
            <ul className={`mt-12`}>
              <li className={`pb-2.5 mb-2.5`}>
                <div className={`flex items-center gap-5 transition-all 
                            ease-in-out`}>
                  <div className="bg-transparent shadow-lg
                                text-theme transition-all ease-in-out 
                                hover:opacity-75 w-10 h-10 flex items-center 
                                justify-center rounded-xl">
                  </div>
                  <span className={`font-semibold opacity-75`}>
                    Dashboard
                  </span>
                </div>
              </li>
            </ul> */}
          </div>
        </div>
      </aside>
      <main className='pt-16 lg:pt-20'>
        <section>
          <div className={`flex justify-between`}>
            <h1 className={`capitalize`}>
              Trending elektronica
            </h1>
            <FontAwesomeIcon icon={faFilter} onClick={handleFilterClick}
              className={`h-10 w-10 p-2.5 mb-1 block lg:hidden`} />
          </div>
          <div className={`flex gap-10`}>
            <aside className={styles.aside}>
              <div className={styles.menu_odd}>
                <label htmlFor="sort"
                  className={`block h2`}>
                  Trending
                </label>
                <select id="sort">
                  <option value="price_desc">
                    Prijs (dalend)
                  </option>
                  <option value="price_asc">
                    Prijs (stijgend)
                  </option>
                </select>
              </div>
              <div className={styles.menu}>
                <label htmlFor="sort"
                  className={`block h2`}>
                  Sorteren top 100
                </label>
                <select id="sort">
                  <option value="populair_desc">
                    Populairst (dalend)
                  </option>
                  <option value="populair_asc">
                    Populairst (stijgend)
                  </option>
                  <option value="price_desc">
                    Prijs (dalend)
                  </option>
                  <option value="price_asc">
                    Prijs (stijgend)
                  </option>
                </select>
              </div>
              <div className={styles.menu_odd}>
                <h2>
                  Filteren top 100
                </h2>
                <div className={`p-3 flex flex-col gap-3`}>
                  <div>
                    <h3>Smartphones</h3>
                    <div className={styles.list}>
                      <div data-id={`phones_all`}>
                        Alle
                      </div>
                      <div data-id={`phones_android`}>
                        Android
                      </div>
                      <div data-id={`phones_iphone`}>
                        Apple iPhone
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>Laptops</h3>
                    <div className={styles.list}>
                      <div data-id={`laptops_all`}>
                        Alle
                      </div>
                      <div data-id={`laptops_windows`}>
                        Windows
                      </div>
                      <div data-id={`laptops_macbook`}>
                        Apple Macbook
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>Desktops</h3>
                    <div className={styles.list}>
                      <div data-id={`desktops_all`}>
                        Alle
                      </div>
                      <div data-id={`desktops_windows`}>
                        Windows
                      </div>
                      <div data-id={`desktops_macs`}>
                        iMac & Mac Mini
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>Tablets</h3>
                    <div className={styles.list}>
                      <div data-id={`tablets_all`}>
                        Alle
                      </div>
                      <div data-id={`tablets_windows`}>
                        Android
                      </div>
                      <div data-id={`tablets_macbook`}>
                        Apple iPad
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>Televisie</h3>
                    <div className={styles.list}>
                      <div data-id={`televisions_all`}>
                        Alle
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.menu}>
                <label htmlFor="sort"
                  className={`block h2`}>
                  Winkelketen
                </label>
                <select id="sort">
                  <option value="amazon">Amazon</option>
                  <option value="coolblue">Coolblue</option>
                  <option value="bol">Bol.com</option>
                </select>
              </div>
            </aside>
            <div className={`grid grid-cols-1 sm:grid-cols-2 border-gray-100
          lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3
          border-t-2 border-l-2 shadow-lg`}>
              <Items />
              <Items />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;