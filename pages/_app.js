import 'normalize.css'
import '@/styles/globals.css'

import { Wrapper } from '@/context/ContextProvider';
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  return (
    <Wrapper>
      <Head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:locale" content="tr_TR"/>
        <meta property="og:site_name" content="enonlar"/>
      </Head>
      <Component {...pageProps} />
    </Wrapper>
  )
}
