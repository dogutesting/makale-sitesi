import Main from '@/components/Main';
import OtherContents from '@/components/OtherContents';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';
import Details from '@/components/Details';
import json_list from '@/components/json/moviesAndSeriesJson';
import Ens_dizi from '@/components/mini_components/ens/ens_dizi';
import HeadHtml from '@/components/HeadHtml';

export default function MostSeriesMain() {
  const { nightMode } = useAppContext();

  const keywordsArray = ["en", "yuksek", "imdb", "puani", "diziler"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-yuksek-imdb-puanina-sahip-10-dizi";
  const baslik = "En Yüksek imdb Puanına Sahip 10 Dizi";
  const metin = "Televizyonun altın çağında, bazı diziler sadece ekran başında geçirilen saatleri doldurmakla kalmaz, duygusal bir bağ kurar ve bizi bölümler arasında bekleyişe sürükler. IMDb'nin en iyi dizileri listesindeki bu başyapıtlar, sadece anlatım güçleriyle değil, aynı zamanda derinlikli hikayeleri, etkileyici karakter gelişimleri ve benzersiz temalarıyla da öne çıkar. En iyi IMDb dizileri arasında zirveye yerleşen bu eserler, izleyiciye düşündürücü anlar yaşatarak, günlük hayatın ötesine geçmeye davet eder. İşte televizyon tarihinin unutulmazlarına ev sahipliği yapan, her dizi tutkununun kaçırmaması gereken en iyi 10 dizi IMDb listesi.";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;

  const okunmaSuresi = "2";
  const kategori = "dizi"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-02T15:25:00+03:00";
  const degistirilmeTarihi = "2023-10-02T15:25:00+03:00";
  const addDate = "02.10.23";

  const summaryText = <p className='summary_text'>{metin}</p>;

  const jsonContentArray = [
    {
        "eps": "13",
        "num": "10",
        "url": `https://enonlar.com/${url}#bolum-10`,
        "name": "Kozmos: Uzay Zaman Yolculuğu - Cosmos: A Spacetime Odyssey",
        "image": `/images/series/cosmos_bir_uzay_seruveni.jpg`,
        "date": "2014",
        "filmKategorisi": ["Bilim", "Belgesel"],
        "ratingValue": "9.2",
        "ratingCount": "383000",
        "metascore":"83",
        "actors": ["Neil deGrasse Tyson"],
        "director": "Neil deGrasse Tyson",
        "paragraf": <p>'Cosmos: A Spacetime Odyssey', evrenin sırlarını anlamak için bilimin penceresinden bakıyor. Neil deGrasse Tyson'ın etkileyici anlatımıyla, izleyiciyi kozmosun derinliklerine götüren bu dizi, hem bilgilendirici hem de görsel bir şölen sunuyor.</p>
    },
    {
        "eps": "94",
        "num": "9",
        "url": `https://enonlar.com/${url}#bolum-9`,
        "name": "Sopranos - The Sopranos",
        "image": "/images/series/sopranos.jpg",
        "date": "1999–2007",
        "filmKategorisi": ["Suç", "Drama"],
        "ratingValue": "9.2",
        "ratingCount": "441000",
        "metascore":"92",
        "actors": ["James Gandolfini", "Edie Falco", "Steven Van Zandt"],
        "director": "David Chase",
        "paragraf": <p>'The Sopranos', Amerikan mafya hayatının gerçekçi bir portresini sunarken, aile ve iş yaşantısının karmaşıklığını da ele alıyor. Tony Soprano'nun hem bir aile babası hem de bir mafya lideri olarak yaşadığı içsel çatışmalar, diziye derinlik katıyor.</p>
    },
    {
        "eps": "7",
        "num": "8",
        "url": `https://enonlar.com/${url}#bolum-8`,
        "name": "Mavi Gezegen II - Blue Planet II",
        "image": "/images/series/mavi_gezegen_2.jpg",
        "date": "2017",
        "filmKategorisi": ["Doğa", "Belgesel"],
        "ratingValue": "9.3",
        "ratingCount": "44000",
        "metascore":"97",
        "actors": ["David Attenborough"],
        "director": "David Attenborough",
        "paragraf": <p>'Blue Planet II', denizlerin ve okyanusların gizemli dünyasını gözler önüne seriyor. David Attenborough'nun eşsiz anlatımı ile deniz canlılarının hayatlarına tanık oluyoruz. Bu dizi, doğanın güzelliklerini ve hassasiyetlerini bizlere hatırlatıyor.</p>
    },
    {
        "eps": "62",
        "num": "7",
        "url": `https://enonlar.com/${url}#bolum-7`,
        "name": "Avatar: Son Hava Bükücü - Avatar: The Last Airbender",
        "image": "/images/series/avatar_son_hava_bukucu.jpg",
        "date": "2005–2008",
        "filmKategorisi": ["Animasyon", "Macera", "Aksiyon"],
        "ratingValue": "9.3",
        "ratingCount": "344000",
        "metascore":"90",
        "actors": ["Zach Tyler", "Mae Whitman", "Jack De Sena"],
        "director": "Michael Dante DiMartino, Bryan Konietzko",
        "paragraf": <p>'Avatar: The Last Airbender', elementleri kontrol edebilen bükücülerin dünyasında geçiyor. Genç Avatar Aang'in yolculuğunu anlatan bu dizi, dostluk, onur ve fedakarlık temasları üzerine odaklanıyor.</p>
    },
    {
        "eps": "60",
        "num": "6",
        "url": `https://enonlar.com/${url}#bolum-6`,
        "name": "Tel - The Wire",
        "image": "/images/series/tel.jpg",
        "date": "2002–2008",
        "filmKategorisi": ["Suç", "Drama"],
        "ratingValue": "9.3",
        "ratingCount": "362000",
        "metascore":"91",
        "actors": ["Dominic West", "Idris Elba", "Michael K. Williams"],
        "director": "David Simon",
        "paragraf": <p>'The Wire', Baltimore şehrinin hem sokaklarında hem de koridorlarında cereyan eden suç, politika ve medya olaylarını ele alıyor. Dizi, kentsel yaşamın ve sistemlerin karmaşıklığına derinlemesine bir bakış sunuyor.</p>
    },
    {
        "eps": "5",
        "num": "5",
        "url": `https://enonlar.com/${url}#bolum-5`,
        "name": "Çernobil - Chernobyl",
        "image": "/images/series/chernobyl.jpg",
        "date": "2019",
        "filmKategorisi": ["Drama", "Tarih"],
        "ratingValue": "9.3",
        "ratingCount": "823000",
        "metascore":"82",
        "actors": ["Jessie Buckley", "Jared Harris", "Stellan Skarsgård"],
        "director": "Johan Renck",
        "paragraf": <p>'Chernobyl', tarihin en büyük nükleer felaketlerinden birini detaylı bir şekilde ele alıyor. İnsan hatalarının ve bürokrasinin getirdiği korkunç sonuçları gözler önüne seren bu dizi, izleyiciye derinden etkileyen bir deneyim sunuyor.</p>
    },
    {
        "eps": "10",
        "num": "4",
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name": "Kardeşler Takımı - Band of Brothers",
        "image": "/images/series/kardesler_takimi.jpg",
        "date": "2001",
        "filmKategorisi": ["Drama", "Tarih", "Savaş"],
        "ratingValue": "9.4",
        "ratingCount": "498000",
        "metascore":"87",
        "actors": ["Damian Lewis", "Ron Livingston", "David Schwimmer"],
        "director": "David Frankel, Phil Alden Robinson",
        "paragraf": <p>'Band of Brothers', II. Dünya Savaşı sırasında Easy Company'nin Avrupa'da yaşadığı olayları anlatıyor. Savaşın zorlukları, askerlerin arasındaki kardeşlik bağları ve liderlik teması bu diziyi unutulmaz kılıyor.</p>
    },
    {
        "eps": "12",
        "num": "3",
        "url": `https://enonlar.com/${url}#bolum-3`,
        "name": "Yeryüzü - Planet Earth",
        "image": "/images/series/yeryuzu.jpg",
        "date": "2006–2023",
        "filmKategorisi": ["Doğa", "Belgesel"],
        "ratingValue": "9.4",
        "ratingCount": "216000",
        "metascore":"91",
        "actors": ["David Attenborough"],
        "director": "David Attenborough",
        "paragraf": <p>'Planet Earth', dünyamızın doğal güzelliklerini ve vahşi yaşamını ultra yüksek çözünürlükte gözler önüne seriyor. David Attenborough'nun rehberliğinde, doğanın eşsiz manzaralarına ve canlılarına şahit oluyoruz.</p>
    },
    {
        "eps": "6",
        "num": "2",
        "url": `https://enonlar.com/${url}#bolum-2`,
        "name": "Yeryüzü II - Planet Earth II",
        "image": "/images/series/yeryuzu_2.jpg",
        "date": "2016",
        "filmKategorisi": ["Doğa", "Belgesel"],
        "ratingValue": "9.5",
        "ratingCount": "153000",
        "metascore":"96",
        "actors": ["David Attenborough"],
        "director": "David Attenborough",
        "paragraf": <p>'Planet Earth II', doğanın harikalarını ve vahşi yaşamı daha yakından keşfetmemize olanak tanıyor. İzleyici, şehirlerdeki hayvanlardan uzak ormanlara kadar geniş bir yelpazede doğal yaşama tanık oluyor.</p>
    },
    {
        "eps": "62",  
        "num": "1",
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name": "Breaking Bad",
        "image": "/images/series/breaking_bad.jpg",
        "date": "2008–2013",
        "filmKategorisi": ["Suç", "Drama", "Gerilim"],
        "ratingValue": "9.5",
        "ratingCount": "2000000",
        "metascore":"87",
        "actors": ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        "director": "Vince Gilligan",
        "paragraf": <p>'Breaking Bad', kimya öğretmeni Walter White'ın kanser teşhisi sonrası uyuşturucu üreticisi ve satıcısına dönüşmesini anlatıyor. Ailevi sorumlulukları ve hayatta kalma mücadelesi, Walter'ın moral değerlerini sorgulamasına neden oluyor.</p>
    }
];

    const ana_resim = jsonContentArray[0].image;
    const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};

    const jsonList = json_list(articleInfos,
    "Series", 
    summaryText,
    jsonContentArray
    )

  return (
    
    <Main>
      
      <HeadHtml 
        baslik={baslik}
        description={description}
        keywords={keywordsArray.join(", ")}
        ana_resim={ana_resim}
        url={url}
        jsonListHtml={jsonList.html}
        />

        <article id='main-article'>
          
          <h1>{baslik}</h1>

          <Details nightMode={nightMode} addDate={addDate} readTimeSpan={okunmaSuresi ? okunmaSuresi : jsonList.readTimeSpan} kategori={kategori}/>
          
          <hr className={['top_split', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>

          {(summaryText)}

          <hr className='split'/>

          {<Ens_dizi jsonContentArray={jsonContentArray}/>}
        
        </article>
        
        <OtherContents />
        
        
    </Main>
  )
}