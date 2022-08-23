import Seo from '../components/Seo'
import React from 'react';
import Link from 'next/link';

const ServerError = () => {
    return (
        <>
            <Seo title={`Server fout 500`}
                description={`Er ging iets mis met de servers. 
                Probeer het later opnieuw.`} noIndex />
            <main className='text-center border-none mt-10'>
                <section>
                    <h1 className={`after:mx-auto mb-6`}>
                        Server fout
                    </h1>
                    <p>
                        Er ging iets mis met de servers.
                        Probeer het later opnieuw.
                    </p>
                </section>
                <Link href={'/'}>
                    <a className={`button mt-8`}>
                        Naar homepagina
                    </a>
                </Link>
            </main>
        </>
    )
}

export default ServerError;