import Main from '@/components/Main';
import En from '@/components/mini_components/en';
import Kunye from '@/components/mini_components/kunye';
import OtherContents from '@/components/OtherContents';
import Head from 'next/head';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';
import { useEffect, useRef } from 'react';
import Details from '@/components/Details';
import json_list from '@/components/json/moviesAndSeriesJson';
import addArticleJson from '@/components/json/addArticleJson';

/*! img/a_0 */
/* Article - Section - Section - Section */

export default function films() {

  const { nightMode } = useAppContext();

  //Her sayfada ayarlanması gereken değerler
  const keywords = "erkek, film, 2023, adam";
  const wordCount = "DÜZENLE";

  const url = "erkeklerin-izlemesi-gereken-en-iyi-10-film";
  const baslik = "Erkeklerin İzlemesi Gereken En İyi 10 Film";
  const metin = "2023 yılında erkeklerin izlemesi gereken 10 filmi sizler için derledik. Gerçek bir erkeğe dönüşmekte size yardımcı olacak bu filmlere göz atın.";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  const keywordsArray = ["erkekler", "için", "filmler", "2023", "adam"]; //burada türkçe karakter olacak mı bir fikrim yok
  const ana_resim = "";
  const kategori = "film"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "Doğukan Sayın";
  const logo = "logo_url";
  const eklenmeTarihi = "2023-09-12T17:20:00+03:00";
  const degistirilmeTarihi = "2023-09-12T17:20:00+03:00";

  //articleCount - articleBody, articleJson
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, logo, eklenmeTarihi, degistirilmeTarihi};
  const jsonList = json_list(articleInfos, "Movie", [
      {
        "url": `https://enonlar.com/${url}#bolum-10`,
        "name":"Ben Efsaneyim - I Am Legend",
        "image":`https://enonlar.com/${url}/images/a_0/f1_imlegend.jpg`,
        "date":"2007",
        "sure": "1 sa. 41 dk.",
        "filmKategorisi": ["Aksiyon", "Drama", "Korku"],
        "rating":"7,2/10",
        "ratingCount":"791000",
        "metascore": "65",
        "actors":["Will Smith", "Alice Braga"],
        "director":"Francis Lawrence",
        "paragraf": <p>Will Smith'in başrolde olduğu bu film, virüs sebebiyle insanoğlunun neredeyse tamamen yok olduğu bir dünyada, hayatta kalan bir bilim adamının hikayesini anlatıyor. Yalnızlık, hayatta kalma ve umut temalarının işlendiği bu filmde, bir erkeğin şartlar ne olursa olsun uyum sağlaması, hayatta kalması ve problem çözmeye devam etmesine güzel bir örnek sunuyor.</p>,
      },
      {
        "url": `https://enonlar.com/${url}#bolum-9`,
        "name":"300 Spartalı - 300",
        "image":`https://enonlar.com/${url}/images/a_0/f2_spartans_300.jpg`,
        "date":"2006",
        "sure": "1 sa. 57 dk.",
        "filmKategorisi": ["Aksiyon", "Drama"],
        "rating":"7,6/10",
        "ratingCount":"846000",
        "metascore": "52",
        "actors":["Gerard Butler", "Lena Headey"],
        "director":"Zack Snyder",
        "paragraf": <p>"300 Spartalı", Antik Yunan'da Pers İmparatorluğu'na karşı mücadele eden 300 Spartalı savaşçının destansı hikayesini anlatıyor. Film, erkekliğin ve maskülenliğin sadece zaferlerle değil, aynı zamanda fedakarlık, dayanışma, onur ve cesaret gibi değerlerle de tanımlandığını gösteriyor. Spartalıların karşılaştığı zorluklar ve onların bu zorluklar karşısında sergilediği dayanıklılık, izleyicilere erkekliğin ne anlama geldiğini ve erkekliğin doğasını, feda edilebilirliğini ve onurlu bir amaç uğruna ne kadar ileri gidilebileceğini sorgulatıyor. Filmdeki savaşçıların karşılaştığı son, erkekliğin bazen kişisel bir kazanç sağlamadan da anlamlı ve değerli olabileceğine dair güçlü bir mesaj veriyor.</p>,
      },
      {
        "url": `https://enonlar.com/${url}#bolum-8`,
        "name":"Umudunu Kaybetme - The Pursuit of Happyness",
        "image":`https://enonlar.com/${url}/images/a_0/f3_umudunu_kaybetme.jpg`,
        "date":"2006",
        "sure": "1 sa. 57 dk.",
        "filmKategorisi": ["Biyografi", "Drama"],
        "rating":"8,0/10",
        "ratingCount":"542000",
        "metascore": "64",
        "actors":["Will Smith", "Thandiwe Newton", "Jaden Smith"],
        "director":"Gabriele Muccino",
        "paragraf": <p>Gerçek bir hikayeden uyarlanan bu film, bir baba ve oğlunun hayatta kalma mücadelesini anlatıyor. Will Smith ve gerçek oğlu Jaden Smith'in başrollerde olduğu bir filmde, hayallerini gerçekleştirmenin ne kadar zorluklarla dolu bir süreç olduğunu gösteriyor. Hepimizin büyük hayalleri vardır, ancak onlara ulaşmak genellikle kolay değildir. Bu film, büyük hayallerin gerçekleşmesi için katlanılması gereken zorlukları etkileyici bir şekilde anlatıyor. Karakterlerin basketbol oynarken oğlu ile paylaştığı bu söz maskülenliğin ve filmin ana temasını güzel bir şekilde vurguluyor, "Bir hayalin varsa onu koruman gerek. İnsanlar bir şey yapamaz ve seninde yapamayacağını söylerler. Bir şey yapmak istiyorsan gidip onu zorla al."</p>,
      },
      {
        "url": `https://enonlar.com/${url}#bolum-7`,
        "name":"Bıçak Sırtı: 2049 - Blade Runner 2049",
        "image":`https://enonlar.com/${url}/images/a_0/f4_blade_runner_0.jpg`,
        "date":"2017",
        "sure": "2 sa. 44 dk.",
        "filmKategorisi": ["Aksiyon", "Drama", "Gizem"],
        "rating":"8,0/10",
        "ratingCount":"623000",
        "metascore": "81",
        "actors":["Ryan Gosling", "Ana de Armas"],
        "director":"Denis Villeneuve",
        "paragraf": <p>Denis Villeneuve'un yönetmenliğindeki "Blade Runner 2049", siberpunk'ın kurucu filmi olan orijinal "Blade Runner"ın devamı niteliğindedir. Görsel efektleri ve derin karakter analizleriyle birlikte Blade Runner 2049" çok katmanlı bir film. Ana konusu yaratıcılık, kimlik, insanlık ve yapay zeka üzerine derinlemesine bir sorgulama içeriyor. Film kesinlikle bir başyapıt ama biz filmin bu konuları yerine farklı tarafları ile ilgileneceğiz. Bizim ilgilendiğimiz taraf bir kopya erkeğin duygusal yükümlülüklerini, hayal kırıklıklarını ve içsel savaşlarını ele alıyor. K'nin yaşadığı içsel çatışmalar ve kendini bulma arayışı, birçok erkeğin hayatında karşılaştığı duygusal zorluklar ve bu zorlukların sonuçlarında kendilerini nasıl bir duygu durumu içerisinde bulduklarına güzel bir örnek. Öte yandan, sanal partner Joi'nin temsil ettiği idealize edilmiş kadın fantezisi, gerçek hayatta mükemmel bir partnerin var olmadığını kabullenmemiz için iyi bir örnek. Bu filmin, ana konusu dışında erkekliğin ve maskülenliğin modern dünyadaki karmaşıklığını başarılı bir şekilde ele aldığını düşünüyorum.</p>,
      },
      {
        "url": `https://enonlar.com/${url}#bolum-6`,
        "name":"Cesur Yürek - Braveheart",
        "image":`https://enonlar.com/${url}/images/a_0/f5_bravehearth.jpg`,
        "date":"1995",
        "sure": "2 sa. 58 dk.",
        "filmKategorisi": ["Biyografi", "Drama", "Tarih"],
        "rating":"8,3/10",
        "ratingCount":"1100000",
        "metascore": "68",
        "actors":["Mel Gibson", "Sophie Marceau"],
        "director":"Randall Wallace",
        "paragraf": <p>Skotyalı savaşçı William Wallace'ın gerçek yaşam hikayesini temel alan bu epik film, özgürlük, onur ve aşk uğruna verilen mücadelenin etkileyici bir portresini sunar. Mel Gibson'un hem yönetip hem başrolde oynadığı film, özgürlüğünü kaybettiği zaman bir erkeğin ne kadar ileri gidebileceğini gösteriyor. Tarihi olayları dramatik bir şekilde sunan Cesur Yürek, erkekliğin, liderliğin ve direncin ne anlama geldiğini derinlemesine anlatıyor.</p>,
      },
      {
        "url": `https://enonlar.com/${url}#bolum-5`,
        "name":"Gladyatör - Gladiator",
        "image":`https://enonlar.com/${url}/images/a_0/f6_gladiator.jpg`,
        "date":"2000",
        "sure": "2 sa. 35 dk.",
        "filmKategorisi": ["Aksiyon", "Drama", "Macera"],
        "rating":"8,5/10",
        "ratingCount":"1600000",
        "metascore": "67",
        "actors":["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        "director":"Ridley Scott",
        "paragraf": <p>Roma İmparatorluğu'nun göz kamaştıran döneminde geçen bu epik film, ailesi hain bir prens tarafından öldürülen bir generalin sadece fiziksel değil, duygusal ve manevi mücadelesini de anlatır. Gladyatör arenalarında hayatta kalmak için savaşırken, Maximus sadece bedenen değil, ruhen de bir savaşçıya dönüşür. Onun bu zorlu yolculuğu, erkekliğin derinliklerini, onurunu, sadakatini ve fedakarlığını gözler önüne seriyor.</p>,
      },
      {
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name":"Geçmişin Gölgesinde - American History X",
        "image":`https://enonlar.com/${url}/images/a_0/f7_american_history_x.jpg`,
        "date":"1998",
        "sure": "1 sa. 59 dk.",
        "filmKategorisi": ["Suç", "Drama"],
        "rating":"8,5/10",
        "ratingCount":"1200000",
        "metascore": "62",
        "actors":["Edward Norton"],
        "director":"Tony Kaye",
        "paragraf": <p>Neo-Nazi bir grubun içinde büyüyen bir genç olan Derek'in dönüşümünü anlatan bu film, ırkçılığın, nefretin ve şiddetin yıkıcı etkilerine odaklanır. Edward Norton'un başroldeki performansıyla dikkat çeken film, toplumsal konuları cesurca ele alışıyla bilinir. Film, maskülenliğin sadece fiziksel şiddetle değil, aynı zamanda kişisel gelişim ve değişimle de ilgili olduğunu ortaya koyar. Maskülenliğin sadece yıkıcılık ve zorbalıkla sınırlı olmadığını, bununla birlikte karakterimizi şekillendirme ve çevremizdeki insanlara olumlu etkilerde bulunma potansiyelimiz olduğunu vurgular.</p>,
      },
      {
        "url": `https://enonlar.com/${url}#bolum-3`,
        "name":"Dövüş Kulübü - Fight Club",
        "image":`https://enonlar.com/${url}/images/a_0/f8_fight_club.png`,
        "date":"1999",
        "sure": "2 sa. 19 dk.",
        "filmKategorisi": ["Drama"],
        "rating":"8,8/10",
        "ratingCount":"2200000",
        "metascore": "67",
        "actors":["Brad Pitt", "Edward Norton"],
        "director":"David Fincher",
        "paragraf": <p>Fight Club, erkeklik ve maskülenlik kavramlarına dair en akılda kalıcı filmlerden biridir.
           David Fincher yönetmenliğindeki bu eser, Chuck Palahniuk'un aynı adlı romanından uyarlanmıştır.
            Tüketim toplumu, erkekliğin krizi ve bireysel özgürlük temasları üzerine keskin bir eleştiri sunar.
             Brad Pitt ve Edward Norton'un başrolde olduğu film, izleyiciyi derinden etkileyen bir finalle sonlanır.
              Modern toplumun getirdiği görünmez kısıtlamalara dikkat çekerken, erkeklerin maskülenliği geri kazanma yolunda 
              <Link href="https://www.centilmenkulubu.com/maskulenligi-arttirmak/">diğer erkeklerle kurduğu bağın önemini</Link>
               açık bir şekilde vurgular.
               </p>,
      },
      {
        "url": `https://enonlar.com/${url}#bolum-2`,
        "name":"Baba - The Godfather",
        "image":`https://enonlar.com/${url}/images/a_0/f9_the_godfather.jpg`,
        "date":"1972",
        "sure": "2 sa. 55 dk.",
        "filmKategorisi": ["Suç", "Drama"],
        "rating":"9,2/10",
        "ratingCount":"1900000",
        "metascore": "100",
        "actors":["Marlon Brando", "Al Pacino"],
        "director":"Francis Ford Coppola",
        "paragraf": <p>Francis Ford Coppola'nın yönettiği bu efsane film, mafya ailesinin iç yüzünü, aile bağlarını, iktidar mücadelesini ve onur kavramını derinlemesine ele alır. Sinema tarihindeki en ikonik filmlerden biri olarak kabul edilir. Aynı zamanda erkekliğin, baba-oğul ilişkisinin ve liderlik etiğinin karmaşıklığını, erkeklerin aileleri ve onurları uğruna neleri feda edebileceğini gözler önüne serer. Bu bağlamda, film, erkeklerin ailevi ve toplumsal beklentilere nasıl yanıt verdiğini, maskülenliğin aile ve onur üzerindeki etkilerini inceler.</p>,
      },
      {
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name": "Esaretin Bedeli - The Shawshank Redemption",
        "image": `https://enonlar.com/${url}/images/a_0/f10_esaretin_bedeli.jpg`,
        "date":"1994",
        "sure": "2 sa. 22 dk.",
        "filmKategorisi": ["Drama"],
        "rating":"9,3/10",
        "ratingCount":"2900000",
        "metascore": "82",
        "actors":["Tim Robbins", "Morgan Freeman"],
        "director":"Frank Darabont",
        "paragraf": <p><Link href="stephen-king-ile-ilgili-yazilar">Stephen King</Link>'in kısa hikayesinden uyarlanan bu film, Andy Dufresne'nin suçsuz yere mahkum edildiği Shawshank hapishanesinde geçirdiği yılları ve orada kurduğu dostlukların hikayesini anlatıyor. Tim Robbins ve Morgan Freeman'ın başrollerde olduğu film, umut, özgürlük ve insani direncin gücüne dair sıcak bir mesaj veriyor. Suçsuz dahi olsan hayatın sana karşı acımasızlıkları ile başa çıkmaktan başka çarenin olmadığını anlatan bu film, ayrıca imdb 1. sıradaki film olarakta uzun süredir liderliğini koruyor ve birçok kişi tarafından tüm zamanların en iyi filmi olarak kabul ediliyor.</p>,
      }
    ]
  )

  return (
    
    <Main>
      
        <Head>
          <title>{baslik}</title>
          <meta name="robots" content="index"/>
          <meta name="description" content={description}/>
          <meta name="keywords" content={keywords}/>
          <meta property="og:type" content="article"/>
          <meta property="og:title" content={baslik}/>
          <meta property="og:description" content={description} key="desc"/>
          <meta
          property="og:image"
          content={ana_resim}
          />
          <meta property="og:url" content={"https://www.enonlar.com/"+url}/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content={baslik}/>
          <meta name="twitter:description" content={description}/>
          <meta name="twitter:image" content={ana_resim}/>
          
          <script
            type="application/ld+json"
            //dangerouslySetInnerHTML={addArticleJson(kategori, minAge, keywords, baslik, yazar, logo, eklenmeTarihi, degistirilmeTarihi, description, ana_resim, url, jsonList)}
            dangerouslySetInnerHTML={jsonList}
            key="article-jsonld"
          />
        </Head>

        <article>
          
        <h1>{baslik}</h1>

        { /* ana resim buraya eklenebilir priort true yapılabilir ve ana resim thumbnail boyutu*/}

        {/* geri dön */}
        <Details nightMode={nightMode} readTimeSpan={"0"}/>

        <hr></hr>

          <p className='summary_text text-content'>Eğer karşılaştığınız zorluklar ve duygusal
             fırtınalar karşısında sarsılmaz bir karakter
              oluşturma hedefiniz varsa, doğru yerdesiniz.
               Erkekliğin ve karakterin derinliklerine dalmak
                isteyenler için özenle seçilmiş bu filmler,
                 size ilham verecektir. İşte erkeklerin mutlaka
                  izlemesi gereken, karakter oluşturma yolculuğunda
                   rehber olabilecek 10 film.</p>


        
        <hr></hr>
        <h1>TEST KISMI AŞAĞIDA</h1>

        <En baslik="10 - Ben Efsaneyim - I Am Legend"
            rsm="/images/a_0/f1_imlegend.jpg"
            rsm_alt="Ben Efsaneyim - I Am Legend filminden bir fotoğraf."
            enid="bolum-10"
            pri={true}>
            <Kunye oyuncular={["Will Smith"]}
             yonetmen="Francis Lawrence"
             kategori="Bilim Kurgu/Drama"
             sure="1 saat 41 dakika"
             yil="2007"
             puan="7,2"
             />
            <p className='text-content'>
                Will Smith'in başrolde olduğu bu film, virüs sebebiyle
                 insanoğlunun neredeyse tamamen yok olduğu bir dünyada,
                  hayatta kalan bir bilim adamının hikayesini anlatıyor.
                   Yalnızlık, hayatta kalma ve umut temalarının işlendiği bu
                    filmde, bir erkeğin şartlar ne olursa olsun uyum sağlaması, hayatta kalması ve problem çözmeye devam etmesine güzel bir örnek sunuyor.
            </p>
        </En>

        <En baslik="9 - 300 Spartalı - 300"
            rsm="/images/a_0/spartans_300.jpg"
            rsm_alt="300 Spartalı - 300 filminden bir fotoğraf."
            enid="bolum-9">
            <Kunye oyuncular={["Gerard Butler"]}
             yonetmen="Zack Snyder"
             kategori="Aksiyon/Tarih/Drama"
             sure="1 saat 57 dakika"
             yil="2006"
             puan="7,6"
             />
            <p className='text-content'>
                "300 Spartalı", Antik Yunan'da Pers İmparatorluğu'na karşı mücadele eden 300 Spartalı savaşçının destansı hikayesini anlatıyor.
                 Film, erkekliğin ve maskülenliğin sadece zaferlerle değil, aynı zamanda fedakarlık, dayanışma, onur ve cesaret gibi değerlerle de tanımlandığını gösteriyor.
                  Spartalıların karşılaştığı zorluklar ve onların bu zorluklar karşısında sergilediği dayanıklılık, izleyicilere erkekliğin ne anlama geldiğini ve
                    erkekliğin doğasını, feda edilebilirliğini ve onurlu bir amaç uğruna ne kadar ileri gidilebileceğini sorgulatıyor.
                    Filmdeki savaşçıların karşılaştığı son, erkekliğin bazen kişisel bir kazanç sağlamadan da anlamlı ve değerli olabileceğine dair güçlü bir mesaj veriyor.
            </p>
        </En>
        <En baslik="8 - Umudunu Kaybetme - The Pursuit of Happyness"
            rsm="/images/a_0/f2_umudunu_kaybetme.jpg"
            rsm_alt="Umudunu Kaybetme - The Pursuit of Happyness filminden bir fotoğraf."
            enid="bolum-8">
            <Kunye oyuncular={["Will Smith", "Jaden Smith"]}
             yonetmen="Gabriele Muccino"
             kategori="Biyografi/Drama"
             sure="1 saat 57 dakika"
             yil="2006"
             puan="8,0"
             />
            <p className='text-content'>
                Gerçek bir hikayeden uyarlanan bu film, bir baba ve oğlunun hayatta kalma mücadelesini anlatıyor. Will Smith ve gerçek oğlu Jaden Smith'in başrollerde olduğu bir filmde, hayallerini gerçekleştirmenin ne kadar zorluklarla dolu bir süreç olduğunu gösteriyor. Hepimizin büyük hayalleri vardır, ancak onlara ulaşmak genellikle kolay değildir. Bu film, büyük hayallerin gerçekleşmesi için katlanılması gereken zorlukları etkileyici bir şekilde anlatıyor. Karakterlerin basketbol oynarken oğlu ile paylaştığı bu söz maskülenliğin ve filmin ana temasını güzel bir şekilde vurguluyor, "Bir hayalin varsa onu koruman gerek. İnsanlar bir şey yapamaz ve seninde yapamayacağını söylerler. Bir şey yapmak istiyorsan gidip onu zorla al."
            </p>
        </En>

        <En baslik="7 - Bıçak Sırtı: 2049 - Blade Runner 2049"
         rsm="/images/a_0/f3_blade_runner_0.jpg"
          rsm_alt="Bıçak Sırtı: 2049 - Blade Runner 2049 filminden bir fotoğraf."
          enid="bolum-7">
          <Kunye oyuncular={["Ryan Gosling", "Ana de Armas"]}
             yonetmen="Denis Villeneuve"
             kategori="Bilim Kurgu/Aksiyon"
             sure="2 saat 43 dakika"
             yil="2017"
             puan="8,0"
             />
          <p className='text-content'>

               Denis Villeneuve'un yönetmenliğindeki "Blade Runner 2049", siberpunk'ın kurucu filmi olan orijinal "Blade Runner"ın devamı niteliğindedir.
                Görsel efektleri ve derin karakter analizleriyle birlikte Blade Runner 2049" çok katmanlı bir film. Ana konusu yaratıcılık,
                 kimlik, insanlık ve yapay zeka üzerine derinlemesine bir sorgulama içeriyor. Film kesinlikle bir başyapıt ama biz filmin bu konuları yerine farklı tarafları
                 ile ilgileneceğiz. Bizim ilgilendiğimiz taraf bir kopya erkeğin duygusal yükümlülüklerini, hayal kırıklıklarını ve içsel savaşlarını ele alıyor.
                 K'nin yaşadığı içsel çatışmalar ve kendini bulma arayışı, birçok erkeğin hayatında karşılaştığı duygusal zorluklar ve bu zorlukların sonuçlarında kendilerini 
                 nasıl bir duygu durumu içerisinde bulduklarına güzel bir örnek.
                  Öte yandan, sanal partner Joi'nin temsil ettiği idealize edilmiş kadın fantezisi, gerçek hayatta mükemmel bir partnerin var olmadığını kabullenmemiz için iyi bir örnek.
                   Bu filmin, ana konusu dışında erkekliğin ve maskülenliğin modern dünyadaki karmaşıklığını başarılı bir şekilde ele aldığını düşünüyorum.
          </p>
        </En>

        <En baslik="6 - Cesur Yürek - Braveheart"
            rsm="/images/a_0/f4_bravehearth.jpg"
            rsm_alt="Cesur Yürek - Braveheart filminden bir fotoğraf."
            enid="bolum-6">
            <Kunye oyuncular={["Mel Gibson"]}
             yonetmen="Mel Gibson"
             kategori="Biyografi/Drama/Savaş"
             sure="2 saat 58 dakika"
             yil="1995"
             puan="8,3"
             />
            <p className='text-content'>
                Skotyalı savaşçı William Wallace'ın gerçek yaşam hikayesini temel alan bu epik film,
                 özgürlük, onur ve aşk uğruna verilen mücadelenin etkileyici bir portresini sunar.
                  Mel Gibson'un hem yönetip hem başrolde oynadığı film, özgürlüğünü kaybettiği zaman
                   bir erkeğin ne kadar ileri gidebileceğini gösteriyor. Tarihi olayları dramatik bir
                    şekilde sunan Cesur Yürek, erkekliğin, liderliğin ve direncin
                     ne anlama geldiğini derinlemesine anlatıyor.
            </p>
        </En>

        <En baslik="5 - Gladyatör - Gladiator"
            rsm="/images/a_0/f6_gladiator.jpg"
            rsm_alt="Gladyatör - Gladiator filminden bir fotoğraf."
            enid="bolum-5">
            <Kunye oyuncular={["Russell Crowe", "Joaquin Phoenix"]}
             yonetmen="Ridley Scott"
             kategori="Aksiyon/Drama"
             sure="2 saat 35 dakika"
             yil="2000"
             puan="8,5"
             />
            <p className='text-content'>
            Roma İmparatorluğu'nun göz kamaştıran döneminde geçen bu epik film, ailesi hain bir prens tarafından öldürülen bir generalin sadece fiziksel değil, duygusal ve manevi mücadelesini de anlatır. Gladyatör arenalarında hayatta kalmak için savaşırken, Maximus sadece bedenen değil, ruhen de bir savaşçıya dönüşür. Onun bu zorlu yolculuğu, erkekliğin derinliklerini, onurunu, sadakatini ve fedakarlığını gözler önüne seriyor.
            </p>
        </En>

        <En baslik="4 - Geçmişin Gölgesinde - American History X"
            rsm="/images/a_0/f7_american_history_x.jpg"
            rsm_alt="Geçmişin Gölgesinde - American History X filminden bir fotoğraf."
            enid="bolum-4">
            <Kunye oyuncular={["Edward Norton"]}
             yonetmen="Tony Kaye"
             kategori="Suç/Drama"
             sure="1 saat 59 dakika"
             yil="1998"
             puan="8,5"
             />
            <p className='text-content'>
            Neo-Nazi bir grubun içinde büyüyen bir genç olan Derek'in dönüşümünü anlatan bu film, ırkçılığın, nefretin ve şiddetin yıkıcı etkilerine odaklanır. Edward Norton'un başroldeki performansıyla dikkat çeken film, toplumsal konuları cesurca ele alışıyla bilinir. Film, maskülenliğin sadece fiziksel şiddetle değil, aynı zamanda kişisel gelişim ve değişimle de ilgili olduğunu ortaya koyar. Maskülenliğin sadece yıkıcılık ve zorbalıkla sınırlı olmadığını, bununla birlikte karakterimizi şekillendirme ve çevremizdeki insanlara olumlu etkilerde bulunma potansiyelimiz olduğunu vurgular.
            </p>
        </En>

        <En baslik="3 - Dövüş Kulübü - Fight Club"
         rsm="/images/a_0/f8_fight_club.png"
          rsm_alt="Dövüş Kulübü - Fight Club filminden bir fotoğraf."
          enid="bolum-3">
            <Kunye oyuncular={["Edward Norton", "Brad Pitt"]}
             yonetmen="David Fincher"
             kategori="Gerilim/Drama"
             sure="2 saat 19 dakika"
             yil="1999"
             puan="8,8"
             />
          <p className='text-content'>
          Fight Club, erkeklik ve maskülenlik kavramlarına dair en akılda kalıcı filmlerden biridir. David Fincher yönetmenliğindeki bu eser, Chuck Palahniuk'un aynı adlı romanından uyarlanmıştır. Tüketim toplumu, erkekliğin krizi ve bireysel özgürlük temasları üzerine keskin bir eleştiri sunar. Brad Pitt ve Edward Norton'un başrolde olduğu film, izleyiciyi derinden etkileyen bir finalle sonlanır. Modern toplumun getirdiği görünmez kısıtlamalara dikkat çekerken, erkeklerin maskülenliği geri kazanma yolunda <Link href="https://www.centilmenkulubu.com/maskulenligi-arttirmak/">diğer erkeklerle kurduğu bağın önemini</Link> açık bir şekilde vurgular.
          </p>
        </En>

        <En baslik="2 - Baba - The Godfather"
            rsm="/images/a_0/f9_the_godfather.jpg"
            rsm_alt="Baba - The Godfather filminden bir fotoğraf."
            enid="bolum-2">
            <Kunye oyuncular={["Marlon Brando", "Al Pacino"]}
             yonetmen="Francis Ford Coppola"
             kategori="Suç/Drama"
             sure="2 saat 55 dakika"
             yil="1972"
             puan="9,2"
             />
            <p className='text-content'>
            Francis Ford Coppola'nın yönettiği bu efsane film, mafya ailesinin iç yüzünü, aile bağlarını, iktidar mücadelesini ve onur kavramını derinlemesine ele alır. Sinema tarihindeki en ikonik filmlerden biri olarak kabul edilir. Aynı zamanda erkekliğin, baba-oğul ilişkisinin ve liderlik etiğinin karmaşıklığını, erkeklerin aileleri ve onurları uğruna neleri feda edebileceğini gözler önüne serer. Bu bağlamda, film, erkeklerin ailevi ve toplumsal beklentilere nasıl yanıt verdiğini, maskülenliğin aile ve onur üzerindeki etkilerini inceler.
            </p>
        </En>

        <En baslik="1 - Esaretin Bedeli - The Shawshank Redemption"
         rsm="/images/a_0/f10_esaretin_bedeli.jpg"
          rsm_alt="Esaretin Bedeli - The Shawshank Redemption filminden bir fotoğraf."
          enid="bolum-1">
            <Kunye oyuncular={["Morgan Freeman", "Tim Robbins"]}
             yonetmen="Frank Darabont"
             kategori="Dram/Polisiye"
             sure="2 saat 22 dakika"
             yil="1994"
             puan="9,3"
             />
          <p className='text-content'>
          <Link href="stephen-king-ile-ilgili-yazilar">Stephen King</Link>'in kısa hikayesinden uyarlanan bu film, Andy Dufresne'nin
           suçsuz yere mahkum edildiği Shawshank
           hapishanesinde geçirdiği yılları ve orada kurduğu dostlukların hikayesini
           anlatıyor.
            Tim Robbins ve Morgan Freeman'ın başrollerde olduğu film, umut,
             özgürlük ve insani direncin gücüne dair sıcak bir mesaj veriyor.
              Suçsuz dahi olsan hayatın sana karşı acımasızlıkları ile başa
               çıkmaktan başka çarenin olmadığını anlatan bu film, ayrıca
                imdb 1. sıradaki film olarakta uzun süredir liderliğini koruyor ve birçok
                 kişi tarafından tüm zamanların en iyi filmi olarak kabul ediliyor.
          </p>
        </En>
        
        </article>

        <hr></hr>

        <section>
          <h2 className='other-h2'>Diğer İçerikler</h2>
          <OtherContents userData={""} keys={[]}/>
          { /*
            -> Anahtar kelimeleri bence burada paslamamız gerek, 
            böylelikle otomatik olarak alakalı içerik üretebiliriz.
            -> Aynı zamanda kullanıcının önceden baktığı içeriklerde burada paslanmalı */ }
        </section>
    </Main>
  )
}