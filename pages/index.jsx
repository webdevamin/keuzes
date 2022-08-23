import useSWR from 'swr';
import Card from '../components/Card';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Seo from '../components/Seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import AccordionItem from '../components/AccordionItem';
import { categoriesWithItems } from "../config/data";
import SearchBar from '../components/SearchBar';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { data: fetchedData, error } =
    useSWR('https://fakestoreapi.com/products/category/electronics?limit=12',
      fetcher);

  const handleFilterClick = () => {
    setShowMenu(true);
  }

  const closeMenu = () => {
    setShowMenu(false);
  }

  if (error) {
    return (
      <>
        <Seo />
        <Header />
        <Hero />
        <p className={`text-center lg:text-left mt-10`}>
          Er ging iets mis met het ophalen van de producten.
          Probeer het later opnieuw.
        </p>
      </>
    )
  }

  if (!fetchedData) {
    return (
      <>
        <Seo />
        <Header />
        <Hero />
        <Loader />
      </>
    )
  }

  return (
    <>
      <Seo />
      <Header />
      <Hero />
      <aside>
        <div className={`bg-black h-screen w-screen fixed transition-all 
        ease-in-out top-0 right-0 z-10 opacity-30 
        ${showMenu ? 'block' : 'hidden'}`}
          onClick={closeMenu} />
        <div className={`top-0 left-0 bg-white py-10 md:py-12 fixed 
        h-screen overflow-y-scroll z-50 block 
        transition-all ease-in-out shadow-2xl
        ${showMenu ? 'w-80 md:w-96 px-8 md:px-12' : 'px-0 w-0 md:w-0'}`}>
          <div className={`${showMenu ? 'block' : 'hidden'}`}>
            <div className={`mb-7`}>
              <label htmlFor="search"
                className={`block h2 capitalize`}>
                Zoeken
              </label>
              <SearchBar />
            </div>
            <div className={`mb-7`}>
              <label htmlFor="sort"
                className={`block h2 capitalize`}>
                Trending
              </label>
              <select id="sort">
                <option value={`price_desc`}>
                  Prijs (dalend)
                </option>
                <option value={`price_asc`}>
                  Prijs (stijgend)
                </option>
              </select>
            </div>
            <div className={`mb-7`}>
              <label htmlFor="sort"
                className={`block h2 capitalize`}>
                Sorteren top 100
              </label>
              <select id="sort">
                <option value={`populair_desc`}>
                  Populairst (dalend)
                </option>
                <option value={`populair_asc`}>
                  Populairst (stijgend)
                </option>
                <option value={`price_desc`}>
                  Prijs (dalend)
                </option>
                <option value={`price_asc`}>
                  Prijs (stijgend)
                </option>
              </select>
            </div>
            <div className={`mb-7`}>
              <h2 htmlFor="sort" className={`block h2`}>
                Filteren top 100
              </h2>
              <div className={`mt-4`}>
                {
                  categoriesWithItems.map((categoryWithItems, index) => {
                    const { category, items } = categoryWithItems;

                    return (
                      <AccordionItem key={index}
                        category={category}
                        items={items} />
                    )
                  })
                }
              </div>
            </div>
            <div className={`mb-32 lg:mb-0`}>
              <label htmlFor="store"
                className={`block h2 capitalize`}>
                Winkelketen
              </label>
              <select id="store">
                <option value="amazon">Amazon</option>
                <option value="coolblue">Coolblue</option>
                <option value="bol">Bol.com</option>
              </select>
            </div>
          </div>
        </div>
      </aside>
      <main className={`border-none`}>
        <div className={`flex justify-between`}>
          <h1 className={`capitalize`}>
            Trending elektronica
          </h1>
          <FontAwesomeIcon icon={faFilter} onClick={handleFilterClick}
            className={`h-10 w-10 p-3 block 
              lg:hidden bg-theme rounded-lg
              text-dark shadow-lg`} />
          <div className={`hidden lg:block`}>
            <SearchBar />
          </div>
        </div>
        <section className={`flex gap-10`}>
          <aside className={`border-gray-100 border flex-1 
            h-fit hidden lg:block shadow-lg`}>
            <div className={`py-12 pl-12 pr-28 bg-gray-50`}>
              <label htmlFor="sort"
                className={`block h2 after:content-[''] after:block 
                  after:h-2px after:bg-theme after:mt-1 lg:after:mt-3 
                  after:w-8 lg:after:w-12`}>
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
            <div className={`py-12 pl-12 pr-28`}>
              <label htmlFor="sort"
                className={`block h2 after:content-[''] after:block 
                  after:h-2px after:bg-theme after:mt-1 lg:after:mt-3 
                  after:w-8 lg:after:w-12`}>
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
            <div className={`py-12 pl-12 pr-28 bg-gray-50`}>
              <h2 className={`after:content-[''] after:block 
                after:h-2px after:bg-theme after:mt-1 lg:after:mt-3 
                after:w-8 lg:after:w-12`}>
                Filteren top 100
              </h2>
              <div className={`p-3 flex flex-col gap-3`}>
                {
                  categoriesWithItems.map((categoryWithItems, index) => {
                    const { category, items } = categoryWithItems;

                    return (
                      <div key={index}>
                        <h3 className={`capitalize`}>{category}</h3>
                        <div className={`flex flex-col gap-1 pl-2`}>
                          {
                            items.map((item, index) => {
                              const { slug, name } = item;

                              return (
                                <div key={index} data-slug={slug}>
                                  {name}
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className={`py-12 pl-12 pr-28`}>
              <label htmlFor="store"
                className={`block h2 after:content-[''] after:block 
                  after:h-2px after:bg-theme after:mt-1 lg:after:mt-3 
                  after:w-8 lg:after:w-12`}>
                Winkelketen
              </label>
              <select id="store w-full">
                <option value="amazon">Amazon</option>
                <option value="coolblue">Coolblue</option>
                <option value="bol">Bol.com</option>
              </select>
            </div>
          </aside>
          <div className={`grid grid-cols-1 sm:grid-cols-2 border-gray-100
          lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3
          border-t-2 border-l-2 shadow-lg`}>
            {
              fetchedData.map((item, index) => {
                return <Card key={index} item={item} />
              })
            }
            {
              fetchedData.map((item, index) => {
                return <Card key={index} item={item} />
              })
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;