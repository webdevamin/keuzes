import Seo from '../components/Seo'
import React from 'react';

const ServerError = () => {
    return (
        <>
            <Seo title={`Oops, server fout`}
                description={`Er ging iets mis met onze servers. 
                Probeer het later opnieuw.`} noIndex/>
            <main className='server_error'>
                <h1>Er ging iets mis met onze servers. Probeer het later opnieuw.</h1>
            </main>
        </>
    )
}

export default ServerError;