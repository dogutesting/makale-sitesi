import Main from "@/components/Main"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function index() {
  return (
    <>
      <Head>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.enonlar.com/"/>
      </Head>

      <Main>
        <Link href="/erkeklerin-izlemesi-gereken-en-iyi-10-film">Tıkla</Link>
        <h1 style={{textAlign: "center"}}>Ana sayfa henüz tasarlanmadığı için rastgele bir sayfaya yönlendir.</h1>
        <hr></hr>
      
      </Main>
    </>
  )
}
