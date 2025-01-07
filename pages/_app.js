import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      <meta charset='utf-8'/>
      <title>Next.js - Event App</title>
      <meta name="description" content="A simple event app built with Next.js" />
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
