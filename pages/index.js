import Main from "@/components/Main"
import Head from 'next/head'
import ContentBox from "@/components/index/anasayfa_icerik_kutusu";
import CategoryBox from "@/components/index/CategoryBox";
import { useAppContext } from "@/context/ContextProvider";

export default function index() {
  const { nightMode } = useAppContext();

  function addArticleJsonLd() {
    return {
      __html: `
      {
        "@graph": [
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#film",
                "name": "Film",
                "url": "https://enonlar.com/film"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#dizi",
                "name": "Dizi",
                "url": "https://enonlar.com/dizi"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#spor",
                "name": "Spor",
                "url": "https://enonlar.com/spor"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Test",
                "url": "https://enonlar.com/test"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Video",
                "url": "https://enonlar.com/video"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Yemek",
                "url": "https://enonlar.com/yemek"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Yaşam",
                "url": "https://enonlar.com/yasam"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Seyahat",
                "url": "https://enonlar.com/seyahat"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Sağlık",
                "url": "https://enonlar.com/saglik"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Vitrin",
                "url": "https://enonlar.com/vitrin"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Ekonomi",
                "url": "https://enonlar.com/ekonomi"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Finans",
                "url": "https://enonlar.com/finans"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "TV",
                "url": "https://enonlar.com/tv"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Gaming",
                "url": "https://enonlar.com/gaming"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Teknoloji",
                "url": "https://enonlar.com/teknoloji"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Nasıl yapılır?",
                "url": "https://enonlar.com/nasil-yapilir"
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "#header",
                "name": "Eğitim",
                "url": "https://enonlar.com/egitim"
              },
            ]
          }
        ]
      }
      `,
    };
  }

  return (
    <>
      <Head>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://enonlar.com/"/>

        <meta property="og:image" content="/logo.png"/>
        <meta property="og:image:height" content="45"/>
        <meta property="og:image:width" content="234"/>
        <meta property="og:description" content="Enonlar, en iyi 10 içerikler, en popüler 10 filmler, en iyi 10 araba incelemeleri, en çok okunan kitap önerileri ve daha fazlasını sunan bir içerik platformudur. Sizler için seçtiğimiz en ilginç konuları keşfedin!"/>

      </Head>

      <Main>
        <CategoryBox />

        <hr className={['top-split-index', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>

        <ContentBox
        url="erkeklerin-izlemesi-gereken-en-iyi-10-film"
        baslik="Erkeklerin İzlemesi Gereken En İyi 10 Film Sizler İçin Derledik"
        resim="/images/a_0/f4_blade_runner_0.jpg"
        eklenmeTarihi="30.09.23"
        okunmaSuresi="5 dk"
        kategori="film"
        paragraf="Will Smith'in başrolde olduğu bu film, virüs sebebiyle insanoğlunun neredeyse tamamen yok olduğu bir dünyada, hayatta kalan bir bilim adamının hikayesini anlatıyor. Yalnızlık, hayatta kalma ve umut temalarının işlendiği bu filmde, bir erkeğin şartlar ne olursa olsun uyum sağlaması, hayatta kalması ve problem çözmeye devam etmesine güzel bir örnek sunuyor."/>
        
        <ContentBox
        url="en-yuksek-imdb-puanina-sahip-10-film"
        baslik="En yüksek imdb puanına sahip 10 film"
        resim="/images/a_0/f3_umudunu_kaybetme.jpg"
        eklenmeTarihi="07.05.23"
        okunmaSuresi="8 dk"
        kategori="spor"
        paragraf={`Gerçek bir hikayeden uyarlanan bu film, bir baba ve oğlunun hayatta kalma mücadelesini anlatıyor. Will Smith ve gerçek oğlu Jaden Smith'in başrollerde olduğu bir filmde, hayallerini gerçekleştirmenin ne kadar zorluklarla dolu bir süreç olduğunu gösteriyor. Hepimizin büyük hayalleri vardır, ancak onlara ulaşmak genellikle kolay değildir. Bu film, büyük hayallerin gerçekleşmesi için katlanılması gereken zorlukları etkileyici bir şekilde anlatıyor. Karakterlerin basketbol oynarken oğlu ile paylaştığı bu söz maskülenliğin ve filmin ana temasını güzel bir şekilde vurguluyor, \"Bir hayalin varsa onu koruman gerek. İnsanlar bir şey yapamaz ve seninde yapamayacağını söylerler. Bir şey yapmak istiyorsan gidip onu zorla al."`}
        />

        <ContentBox
        url="en-yuksek-imdb-puanina-sahip-10-dizi"
        baslik="En yüksek imdb puanına sahip 10 dizi"
        resim="/images/a_0/f1_imlegend.jpg"
        eklenmeTarihi="05.09.23"
        okunmaSuresi="5 dk"
        kategori="araba"
        paragraf="Will Smith'in başrolde olduğu bu film, virüs sebebiyle insanoğlunun neredeyse tamamen yok olduğu bir dünyada, hayatta kalan bir bilim adamının hikayesini anlatıyor. Yalnızlık, hayatta kalma ve umut temalarının işlendiği bu filmde, bir erkeğin şartlar ne olursa olsun uyum sağlaması, hayatta kalması ve problem çözmeye devam etmesine güzel bir örnek sunuyor."/>
        
        <ContentBox
        url="en-iyi-10-250-cc-super-sport-motosikletler"
        baslik="En iyi 10 250cc'lik süper spor motosiklet"
        resim="/images/motosiklet/benelli_tnt_25.png"
        eklenmeTarihi="30.09.23"
        okunmaSuresi="5 dk"
        kategori="film"
        paragraf="Will Smith'in başrolde olduğu bu film, virüs sebebiyle insanoğlunun neredeyse tamamen yok olduğu bir dünyada, hayatta kalan bir bilim adamının hikayesini anlatıyor. Yalnızlık, hayatta kalma ve umut temalarının işlendiği bu filmde, bir erkeğin şartlar ne olursa olsun uyum sağlaması, hayatta kalması ve problem çözmeye devam etmesine güzel bir örnek sunuyor."/>
        
        <ContentBox
        url=""
        baslik="Umudunu Kaybetme - The Pursuit of Happyness Yönetmeninden duygusal sözler"
        resim="/images/a_0/f3_umudunu_kaybetme.jpg"
        eklenmeTarihi="07.05.23"
        okunmaSuresi="8 dk"
        kategori="spor"
        paragraf={`Gerçek bir hikayeden uyarlanan bu film, bir baba ve oğlunun hayatta kalma mücadelesini anlatıyor. Will Smith ve gerçek oğlu Jaden Smith'in başrollerde olduğu bir filmde, hayallerini gerçekleştirmenin ne kadar zorluklarla dolu bir süreç olduğunu gösteriyor. Hepimizin büyük hayalleri vardır, ancak onlara ulaşmak genellikle kolay değildir. Bu film, büyük hayallerin gerçekleşmesi için katlanılması gereken zorlukları etkileyici bir şekilde anlatıyor. Karakterlerin basketbol oynarken oğlu ile paylaştığı bu söz maskülenliğin ve filmin ana temasını güzel bir şekilde vurguluyor, \"Bir hayalin varsa onu koruman gerek. İnsanlar bir şey yapamaz ve seninde yapamayacağını söylerler. Bir şey yapmak istiyorsan gidip onu zorla al."`}
        />

        <ContentBox
        url=""
        baslik="Will Smith neden tokat attı?"
        resim="/images/a_0/f1_imlegend.jpg"
        eklenmeTarihi="05.09.23"
        okunmaSuresi="5 dk"
        kategori="araba"
        paragraf="Will Smith'in başrolde olduğu bu film, virüs sebebiyle insanoğlunun neredeyse tamamen yok olduğu bir dünyada, hayatta kalan bir bilim adamının hikayesini anlatıyor. Yalnızlık, hayatta kalma ve umut temalarının işlendiği bu filmde, bir erkeğin şartlar ne olursa olsun uyum sağlaması, hayatta kalması ve problem çözmeye devam etmesine güzel bir örnek sunuyor."/>
      
      </Main>
    </>
  )
}
