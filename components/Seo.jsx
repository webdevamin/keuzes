import Head from "next/head";
import { APP_TITLE, APP_DESCRIPTION, APP_URL } from "../config/app";

const Seo = ({ title, description, noIndex }) => {
    const realTitle = title ? `${title} | Keuzes` : APP_TITLE;
    const realDescription = description ?? APP_DESCRIPTION;

    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{realTitle}</title>
            <meta name="description" content={realDescription} />
            <meta property="og:title" content={realTitle} />
            {/* <meta property="og:image" content={t('imagePath')} /> */}
            <meta
                property="og:url"
                content={APP_URL ?? "https://keuzes.be"}
            />
            <meta property="og:description" content={realDescription} />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {
                noIndex && <meta name="robots" content="noindex" />
            }
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default Seo;