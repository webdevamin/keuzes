import useSWR from 'swr';
import Card from '../components/Card';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Seo from '../components/Seo'

import styles from "../styles/pages/Home.module.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Home = () => {
  const { data, error } = useSWR('https://fakestoreapi.com/products/category/electronics?limit=12', fetcher);

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
      <main className='pt-16 lg:pt-20'>
        <section>
          <h1 className={`capitalize`}>
            Trending producten
          </h1>
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
            <div className={`grid grid-cols-1 md:grid-cols-2 border-gray-100
          lg:grid-cols-2 xl:grid-cols-3 border-t-2 border-l-2 shadow-lg`}>
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