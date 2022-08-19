import useSWR from 'swr';
import Card from '../components/Card';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Seo from '../components/Seo'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Home = () => {
  const { data, error } = useSWR('https://fakestoreapi.com/products/category/electronics', fetcher);

  console.log(data);

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
      <main className='pt-16'>
        <section>
          <h1>Top producten</h1>
          <div className={`grid grid-cols-1 sm:grid-cols-2 
          lg:grid-cols-3 xl:grid-cols-4
          border-t-2 border-l-2 border-opacity-5`}>
            <Items />
            <Items />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;