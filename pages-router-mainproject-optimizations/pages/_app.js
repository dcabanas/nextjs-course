import Layout from '../components/layout/layout';
import '../styles/globals.css';
import Head from 'next/head'

/*
  we can set general metadata here that will be shown across all pages
  but if a page has its specific Head/metadata, will override the general one
 */
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Head>
            <title>Next Events</title>
            <meta name="description" content="NextJS Events"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
