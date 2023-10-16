import Main from '@/components/Main';
import OtherContents from '@/components/OtherContents';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';
import Details from '@/components/Details';
import json_list from '@/components/json/moviesAndSeriesJson';
import Ens_film from '@/components/mini_components/ens/ens_film';
import HeadHtml from '@/components/HeadHtml';

export default function MostMoviesMain() {
  const { nightMode, supportWebp } = useAppContext();

  const keywordsArray = ["en", "yuksek", "imdb", "puani", "filmler"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-yuksek-imdb-puanina-sahip-10-film";
  const baslik = "En Yüksek imdb Puanına Sahip 10 Film";
  const metin = "Sinemanın büyülü dünyasında, bazı filmler sadece eğlendirmekten öteye geçer, ruhumuza dokunur ve bizi derinden etkiler. IMDb'nin en iyi filmler listesinde yer alan bu yapıtlar, sadece teknik başarısıyla değil, aynı zamanda evrensel temaları, duygusal derinlikleri ve etkileyici karakterleriyle de ön plana çıkar. IMDb'nin en yüksek puanlı filmi olan ve listeye damgasını vuran bu eserler, izleyiciye hayatın farklı yönlerini, insan doğasını ve toplumsal değerleri sorgulama fırsatı sunar. İşte sinemanın zirvesine ulaşmış, her sinemaseverin hayatında en az bir kez izlemesi gereken IMDb en iyi 10 film listesi.";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;

  const okunmaSuresi = "3";
  const kategori = "film"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-02T14:18:00+03:00";
  const degistirilmeTarihi = "2023-10-02T14:18:00+03:00";
  const addDate = "02.10.23";

  
  const summaryText = <p className='summary_text'>{metin}</p>;

  const jsonContentArray = [
      {
        "num": "10",
        "url": `https://enonlar.com/${url}#bolum-10`,
        "name":"İyi, Kötü ve Çirkin - The Good, the Bad and the Ugly",
        "image":`/images/movies/iyi_kotu_cirkin.jpg`,
        "date":"1966",
        "sure": "2 sa. 41 dk.",
        "filmKategorisi": ["Vahşi Batı"],
        "ratingValue":"8.8/10",
        "ratingCount":"791000",
        "metascore": "90",
        "actors":["Clint Eastwood", "Lee Van Cleef", "Eli Wallach"],
        "director":"Sergio Leone",
        "paragraf": <p>"Il buono, il brutto, il cattivo", Sergio Leone'nin yönettiği, Ennio Morricone'nin unutulmaz müziğiyle süslenmiş bir Vahşi Batı klasiğidir. Clint Eastwood, Lee Van Cleef ve Eli Wallach'ın başrollerini paylaştığı film, Amerikan İç Savaşı sırasında üç silahşörün, gizli bir defineyi bulma yarışındaki maceralarını anlatıyor. Filmdeki karakterler arasındaki ilişkiler, dinamikler ve etkileyici sahneler, onu tüm zamanların en iyi Vahşi Batı filmlerinden biri yapar. Film aynı zamanda hayatta kalma, hırs, ihanet ve onur temalarını derinlemesine işler.</p>
      },
      {
        "num": "9",
        "url": `https://enonlar.com/${url}#bolum-9`,
        "name":"Yüzüklerin Efendisi: Yüzük Kardeşliği - The Lord of the Rings: The Fellowship of the Ring",
        "image":`/images/movies/yuzuklerin_efendisi_yuzuk_kardesligi.jpg`,
        "date":"2001",
        "sure": "2 sa. 58 dk.",
        "filmKategorisi": ["Fantastik", "Macera", "Dram"],
        "ratingValue":"8.8/10",
        "ratingCount":"1900000",
        "metascore": "92",
        "actors":["Liv Tyler", "Sean Astin", "Sean Bean"],
        "director":"Peter Jackson",
        "paragraf": <p>Orta Dünya'nın kaderini belirleyecek olan Yüzük'ü yok etme görevini üstlenen Frodo ve arkadaşlarının epik yolculuğunu anlatan bu film, fantastik edebiyatın en ünlü eserlerinden birinin sinemaya uyarlamasıdır. Görsel efektleri, müzikleri ve hikayesiyle büyüleyici bir deneyim sunar.</p>
    },
    {
        "num": "8",
        "url": `https://enonlar.com/${url}#bolum-8`,
        "name":"Ucuz Roman - Pulp Fiction",
        "image":`/images/movies/ucuz_roman.jpg`,
        "date":"1994",
        "sure": "2 sa. 34 dk.",
        "filmKategorisi": ["Suç", "Dram"],
        "ratingValue":"8.9/10",
        "ratingCount":"2200000",
        "metascore": "95",
        "actors":["Uma Thurman", "John Travolta", "Samuel L. Jackson"],
        "director":"Quentin Tarantino",
        "paragraf": <p>Quentin Tarantino'nun özgün anlatım tarzıyla hazırladığı bu film, farklı hikayeleri bir araya getirerek izleyiciye sıradışı bir deneyim sunar. Film, suç dünyasının karanlık yüzünü, mizahi bir dille gösteriyor. Tarantino'nun eşsiz diyalogları ve karakter derinliği, filmin unutulmaz olmasını sağlıyor.</p>
    },
    {
        "num": "7",
        "url": `https://enonlar.com/${url}#bolum-7`,
        "name":"Yüzüklerin Efendisi: Kralın Dönüşü - The Lord of the Rings: The Return of the King",
        "image":`/images/movies/yuzuklerin_efendisi_kralin_donusu.jpg`,
        "date":"2003",
        "sure": "3 sa. 21 dk.",
        "filmKategorisi": ["Fantastik", "Macera", "Dram"],
        "ratingValue":"9.0/10",
        "ratingCount":"1900000",
        "metascore": "94",
        "actors":["Liv Tyler", "Sean Astin", "Elijah Wood"],
        "director":"Peter Jackson",
        "paragraf": <p>Orta Dünya'nın kaderini belirleyecek olan son savaşın anlatıldığı bu film, Frodo ve Sam'in Yüzük'ü yok etme görevini tamamlamaya çalışmalarını, Aragorn'un kral olarak taç giymesini ve diğer karakterlerin kendi yollarını bulmalarını anlatır. Epik savaş sahneleri, duygusal anlar ve muhteşem görsel efektlerle dolu bu film, serinin muazzam bir finali olarak karşımıza çıkıyor.</p>
    },
    {
        "num": "6",
        "url": `https://enonlar.com/${url}#bolum-6`,
        "name":"Schindler'in Listesi - Schindler's List",
        "image":`/images/movies/schindler_in_listesi.jpg`,
        "date":"1993",
        "sure": "3 sa. 15 dk.",
        "filmKategorisi": ["Dram", "Tarih", "Biyografi"],
        "ratingValue":"9.0/10",
        "ratingCount":"1400000",
        "metascore": "95",
        "actors":["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
        "director":"Steven Spielberg",
        "paragraf": <p>Steven Spielberg'in yönettiği bu film, gerçek bir hikayeye dayanmaktadır. İkinci Dünya Savaşı sırasında Nazi işgali altındaki Polonya'da, işadamı Oskar Schindler'in Yahudi işçileri kurtarma çabalarını anlatır. Film, insanlık, fedakarlık ve umut temalarını işleyerek, izleyenler üzerinde derin bir etki bırakır.</p>
    },
    {
        "num": "5",
        "url": `https://enonlar.com/${url}#bolum-5`,
        "name":"12 Öfkeli Adam - 12 Angry Men",
        "image":`/images/movies/12_ofkeli_adam.jpg`,
        "date":"1957",
        "sure": "1 sa. 36 dk.",
        "filmKategorisi": ["Dram"],
        "ratingValue":"9.0/10",
        "ratingCount":"834000",
        "metascore": "97",
        "actors":["Henry Fonda", "Martin Balsam", "Lee J. Cobb"],
        "director":"Sidney Lumet",
        "paragraf": <p>12 Angry Men, bir jüri odasında geçen ve bir cinayet davasını tartışan 12 jüri üyesinin hikayesini anlatan sade ama etkili bir filmdir. Film, önyargıların, bireysel deneyimlerin ve adaletin doğasının derinlemesine incelenmesiyle dikkat çeker. Her bir jüri üyesinin kendi inançları ve değerleriyle nasıl mücadele ettiğini göstererek, izleyiciye adaletin ne anlama geldiğini sorgulatır.</p>
    },
    {
        "num": "4",
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name":"Baba II - The Godfather Part II",
        "image":`/images/movies/baba_2.jpg`,
        "date":"1974",
        "sure": "3 sa. 22 dk.",
        "filmKategorisi": ["Suç", "Dram"],
        "ratingValue":"9.0/10",
        "ratingCount":"1300000",
        "metascore": "90",
        "actors":["Al Pacino", "Robert De Niro", "Robert Duvall"],
        "director":"Francis Ford Coppola",
        "paragraf": <p>"Baba" serisinin ikinci filmi olan "The Godfather Part II", Corleone ailesinin hikayesini devam ettiriyor ve aynı zamanda Vito Corleone'nin gençliğini ve nasıl bir suç lordu haline geldiğini anlatıyor. Film, aile bağlarını, iktidar mücadelesini ve onur kavramını derinlemesine ele alırken, aynı zamanda Amerikan rüyasının karanlık yüzünü de gözler önüne serer.</p>
    },
    {
        "num": "3",
        "url": `https://enonlar.com/${url}#bolum-3`,
        "name":"Kara Şövalye - The Dark Knight",
        "image":`/images/movies/kara_sovalye.jpg`,
        "date":"2008",
        "sure": "2 sa. 32 dk.",
        "filmKategorisi": ["Aksiyon", "Dram", "Suç"],
        "ratingValue":"9.0/10",
        "ratingCount":"2800000",
        "metascore": "84",
        "actors":["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "director":"Christopher Nolan",
        "paragraf": <p>Christopher Nolan'ın yönetmenliğindeki bu film, Batman'in Joker ile olan mücadelesini anlatıyor. Heath Ledger'ın unutulmaz performansıyla Joker karakterini hayata geçirdiği film, iyi ve kötü arasındaki sınırın ne kadar belirsiz olabileceğini gösteriyor. Aynı zamanda, bir kahramanın toplum üzerindeki etkisini ve bir suçlunun bir şehri nasıl kaosa sürükleyebileceğini de ele alıyor.</p>
    },
    {
        "num": "2",
        "url": `https://enonlar.com/${url}#bolum-2`,
        "name":"Baba - The Godfather",
        "image":`/images/movies/baba.jpg`,
        "date":"1972",
        "sure": "2 sa. 55 dk.",
        "filmKategorisi": ["Suç", "Dram"],
        "ratingValue":"9.2/10",
        "ratingCount":"2000000",
        "metascore": "100",
        "actors":["Marlon Brando", "Al Pacino", "James Caan"],
        "director":"Francis Ford Coppola",
        "paragraf": <p>Corleone ailesinin hikayesini anlatan bu epik film, mafya dünyasının iç yüzünü, aile bağlarını, iktidar mücadelesini ve onur kavramını derinlemesine ele alır. Film, aynı zamanda Amerikan rüyasına, ailenin toplumdaki yerine ve suçun cazibesine dair sorgulamalar yapar.</p>
    },
    {
        "num": "1",
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name":"Esaretin Bedeli - The Shawshank Redemption",
        "image":`/images/movies/esaretin_bedeli.jpg`,
        "date":"1994",
        "sure": "2 sa. 22 dk.",
        "filmKategorisi": ["Dram"],
        "ratingValue":"9.3/10",
        "ratingCount":"2800000",
        "metascore": "82",
        "actors":["Tim Robbins", "Morgan Freeman"],
        "director":"Frank Darabont",
        "paragraf": <p>Stephen King'in kısa hikayesinden uyarlanan bu film, Andy Dufresne'nin suçsuz yere mahkum edildiği Shawshank hapishanesinde geçirdiği yılları ve orada kurduğu dostlukların hikayesini anlatır. Film, umut, özgürlük ve insani direncin gücüne dair sıcak bir mesaj verir.</p>
    }  
  ];

  const ana_resim = jsonContentArray[0].image;
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};
  
  const jsonList = json_list(articleInfos,
  "Movies", 
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

          {<Ens_film jsonContentArray={jsonContentArray}/>}
        
        </article>
        
        <OtherContents />
        
        
    </Main>
  )
}