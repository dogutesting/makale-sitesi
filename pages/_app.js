import 'normalize.css'
import '@/styles/globals.css'

import { Wrapper } from '@/context/ContextProvider';

export default function App({ Component, pageProps }) {

  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}
