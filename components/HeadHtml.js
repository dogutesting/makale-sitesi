import Head from "next/head"

 const HeadHtml = ({baslik, description, keywords, ana_resim, url, jsonListHtml}) => {
  return (
    <Head>
          <title>{baslik}</title>
          <link rel="canonical" href={"https://enonlar.com/"+url} />
          <meta name="robots" content="index, follow"/>
          <meta name="description" content={description}/>
          <meta name="keywords" content={keywords}/>
          <meta property="og:type" content="article"/>
          <meta property="og:title" content={baslik}/>
          <meta property="og:description" content={description} key="desc"/>
          <meta
          property="og:image"
          content={ana_resim}
          />
          <meta property="og:url" content={"https://enonlar.com/"+url}/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content={baslik}/>
          <meta name="twitter:description" content={description}/>
          <meta name="twitter:image" content={ana_resim}/>
          
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: jsonListHtml}}
            key="article-jsonld"
          />
    </Head>
  )
}

export default HeadHtml;