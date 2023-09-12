import 'normalize.css'
import '@/styles/globals.css'

import { Wrapper } from '@/context/ContextProvider';
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  return (
    <Wrapper>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Wrapper>
  )
}
