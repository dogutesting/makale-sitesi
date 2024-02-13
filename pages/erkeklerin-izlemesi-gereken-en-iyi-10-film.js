import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';
import StaticUrls from '@/lib/StaticUrls';

export async function getStaticProps() {
  //#region SAYFA TEXT DEĞERLERİ VE JSON+LD
  const url = "erkeklerin-izlemesi-gereken-en-iyi-10-film";
  const baslik = "Erkeklerin İzlemesi Gereken En İyi 10 Film";
  const metin = "2023 yılında erkeklerin izlemesi gereken 10 filmi sizler için derledik. Gerçek bir erkeğe dönüşmekte size yardımcı olacak bu filmlere göz atın. Eğer karşılaştığınız zorluklar ve duygusal fırtınalar karşısında sarsılmaz bir karakter oluşturma hedefiniz varsa, doğru yerdesiniz. Erkekliğin ve karakterin derinliklerine dalmak isteyenler için özenle seçilmiş bu filmler, size ilham verecektir. İşte erkeklerin mutlaka izlemesi gereken, karakter oluşturma yolculuğunda rehber olabilecek 10 film.";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  const keywordsArray = ["erkek", "erkekler", "filmi", "filmler", "2023", "adam"]; //burada türkçe karakter olacak mı bir fikrim yok
  const okunmaSuresi = "5";
  const kategori = "film"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-09-12T17:20:00+03:00";
  const degistirilmeTarihi = "2023-11-19T01:13:00+03:00";
  const addDate = "12.09.23";

  const jsonContentArray = [
    {
      "num": "10",
      "url": `https://enonlar.com/${url}#bolum-10`,
      "name":"Ben Efsaneyim - I Am Legend",
      "image":`/images/movies/ben_efsaneyim.jpg`,
      "ozellikler": {
        "Yıl":"2007",
        "Süre": "1 sa. 41 dk.",
        "Kategori": ["Aksiyon", "Dram", "Korku"],
        "imdb":"7.2/10",
        "metascore": "65",
        "Oyuncular":["Will Smith", "Alice Braga"],
        "Yönetmen":"Francis Lawrence"
      },
      "paragraf": "Will Smith'in başrolde olduğu bu film, virüs sebebiyle insanoğlunun neredeyse tamamen yok olduğu bir dünyada, hayatta kalan bir bilim adamının hikayesini anlatıyor. Yalnızlık, hayatta kalma ve umut temalarının işlendiği bu filmde, bir erkeğin şartlar ne olursa olsun uyum sağlaması, hayatta kalması ve problem çözmeye devam etmesine güzel bir örnek sunuyor."
    },
    {
      "num": "9",
      "url": `https://enonlar.com/${url}#bolum-9`,
      "name":"300 Spartalı - 300",
      "image":`/images/movies/300.jpg`,
      "ozellikler": {
        "Yıl":"2006",
        "Süre": "1 sa. 57 dk.",
        "Kategori": ["Aksiyon", "Dram"],
        "imdb":"7.6/10",
        "metascore": "52",
        "Oyuncular":["Gerard Butler", "Lena Headey"],
        "Yönetmen":"Zack Snyder",
      },
      "paragraf": "300 Spartalı, Antik Yunan'da Pers İmparatorluğu'na karşı mücadele eden 300 Spartalı savaşçının destansı hikayesini anlatıyor. Film, erkekliğin ve maskülenliğin sadece zaferlerle değil, aynı zamanda fedakarlık, dayanışma, onur ve cesaret gibi değerlerle de tanımlandığını gösteriyor. Spartalıların karşılaştığı zorluklar ve onların bu zorluklar karşısında sergilediği dayanıklılık, izleyicilere erkekliğin ne anlama geldiğini ve erkekliğin doğasını, feda edilebilirliğini ve onurlu bir amaç uğruna ne kadar ileri gidilebileceğini sorgulatıyor. Filmdeki savaşçıların karşılaştığı son, erkekliğin bazen kişisel bir kazanç sağlamadan da anlamlı ve değerli olabileceğine dair güçlü bir mesaj veriyor."
    },
    {
      "num": "8",
      "url": `https://enonlar.com/${url}#bolum-8`,
      "name":"Umudunu Kaybetme - The Pursuit of Happyness",
      "image":`/images/movies/umudunu_kaybetme.jpg`,
      "ozellikler": {
        "Yıl":"2006",
        "Süre": "1 sa. 57 dk.",
        "Kategori": ["Biyografi", "Dram"],
        "imdb":"8.0/10",
        "metascore": "64",
        "Oyuncular":["Will Smith", "Thandiwe Newton", "Jaden Smith"],
        "Yönetmen":"Gabriele Muccino",
      },
      "paragraf": "Gerçek bir hikayeden uyarlanan bu film, bir baba ve oğlunun hayatta kalma mücadelesini anlatıyor. Will Smith ve gerçek oğlu Jaden Smith'in başrollerde olduğu bir filmde, hayallerini gerçekleştirmenin ne kadar zorluklarla dolu bir süreç olduğunu gösteriyor. Hepimizin büyük hayalleri vardır, ancak onlara ulaşmak genellikle kolay değildir. Bu film, büyük hayallerin gerçekleşmesi için katlanılması gereken zorlukları etkileyici bir şekilde anlatıyor. Karakterlerin basketbol oynarken oğlu ile paylaştığı bu söz maskülenliğin ve filmin ana temasını güzel bir şekilde vurguluyor, 'Bir hayalin varsa onu koruman gerek. İnsanlar bir şey yapamaz ve seninde yapamayacağını söylerler. Bir şey yapmak istiyorsan gidip onu zorla al.'"
    },
    {
      "num": "7",
      "url": `https://enonlar.com/${url}#bolum-7`,
      "name":"Bıçak Sırtı: 2049 - Blade Runner 2049",
      "image":`/images/movies/blade_runner.jpg`,
      "ozellikler": {
        "Yıl":"2017",
        "Süre": "2 sa. 44 dk.",
        "Kategori": ["Aksiyon", "Dram", "Gizem"],
        "imdb":"8.0/10",
        "metascore": "81",
        "Oyuncular":["Ryan Gosling", "Ana de Armas"],
        "Yönetmen":"Denis Villeneuve",
      },
      "paragraf": "Denis Villeneuve'un yönetmenliğindeki Blade Runner 2049, siberpunk'ın kurucu filmi olan orijinal Blade Runner'ın devamı niteliğindedir. Görsel efektleri ve derin karakter analizleriyle birlikte Blade Runner 2049 çok katmanlı bir film. Ana konusu yaratıcılık, kimlik, insanlık ve yapay zeka üzerine derinlemesine bir sorgulama içeriyor. Film kesinlikle bir başyapıt ama biz filmin bu konuları yerine farklı tarafları ile ilgileneceğiz. Bizim ilgilendiğimiz taraf bir kopya erkeğin duygusal yükümlülüklerini, hayal kırıklıklarını ve içsel savaşlarını ele alıyor. K'nin yaşadığı içsel çatışmalar ve kendini bulma arayışı, birçok erkeğin hayatında karşılaştığı duygusal zorluklar ve bu zorlukların sonuçlarında kendilerini nasıl bir duygu durumu içerisinde bulduklarına güzel bir örnek. Öte yandan, sanal partner Joi'nin temsil ettiği idealize edilmiş kadın fantezisi, gerçek hayatta mükemmel bir partnerin var olmadığını kabullenmemiz için iyi bir örnek. Bu filmin, ana konusu dışında erkekliğin ve maskülenliğin modern dünyadaki karmaşıklığını başarılı bir şekilde ele aldığını düşünüyorum."
    },
    {
      "num": "6",
      "url": `https://enonlar.com/${url}#bolum-6`,
      "name":"Cesur Yürek - Braveheart",
      "image":`/images/movies/cesur_yurek.jpg`,
      "ozellikler": {
        "Yıl":"1995",
        "Süre": "2 sa. 58 dk.",
        "Kategori": ["Biyografi", "Dram", "Tarih"],
        "imdb":"8.3/10",
        "metascore": "68",
        "Oyuncular":["Mel Gibson", "Sophie Marceau"],
        "Yönetmen":"Randall Wallace",
      },
      "paragraf": "Skotyalı savaşçı William Wallace'ın gerçek yaşam hikayesini temel alan bu epik film, özgürlük, onur ve aşk uğruna verilen mücadelenin etkileyici bir portresini sunar. Mel Gibson'un hem yönetip hem başrolde oynadığı film, özgürlüğünü kaybettiği zaman bir erkeğin ne kadar ileri gidebileceğini gösteriyor. Tarihi olayları dramatik bir şekilde sunan Cesur Yürek, erkekliğin, liderliğin ve direncin ne anlama geldiğini derinlemesine anlatıyor."
    },
    {
      "num": "5",
      "url": `https://enonlar.com/${url}#bolum-5`,
      "name":"Gladyatör - Gladiator",
      "image":`/images/movies/gladyator.jpg`,
      "ozellikler": {
        "Yıl":"2000",
        "Süre": "2 sa. 35 dk.",
        "Kategori": ["Aksiyon", "Dram", "Macera"],
        "imdb":"8.5/10",
        "metascore": "67",
        "Oyuncular":["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        "Yönetmen":"Ridley Scott",
      },
      "paragraf": "Roma İmparatorluğu'nun göz kamaştıran döneminde geçen bu epik film, ailesi hain bir prens tarafından öldürülen bir generalin sadece fiziksel değil, duygusal ve manevi mücadelesini de anlatır. Gladyatör arenalarında hayatta kalmak için savaşırken, Maximus sadece bedenen değil, ruhen de bir savaşçıya dönüşür. Onun bu zorlu yolculuğu, erkekliğin derinliklerini, onurunu, sadakatini ve fedakarlığını gözler önüne seriyor."
    },
    {
      "num": "4",
      "url": `https://enonlar.com/${url}#bolum-4`,
      "name":"Geçmişin Gölgesinde - American History X",
      "image":`/images/movies/gecmisin_golgesinde.jpg`,
      "ozellikler": {
        "Yıl":"1998",
        "Süre": "1 sa. 59 dk.",
        "Kategori": ["Suç", "Dram"],
        "imdb":"8.5/10",
        "metascore": "62",
        "Oyuncular":["Edward Norton"],
        "Yönetmen":"Tony Kaye",
      },
      "paragraf": "Neo-Nazi bir grubun içinde büyüyen bir genç olan Derek'in dönüşümünü anlatan bu film, ırkçılığın, nefretin ve şiddetin yıkıcı etkilerine odaklanır. Edward Norton'un başroldeki performansıyla dikkat çeken film, toplumsal konuları cesurca ele alışıyla bilinir. Film, maskülenliğin sadece fiziksel şiddetle değil, aynı zamanda kişisel gelişim ve değişimle de ilgili olduğunu ortaya koyar. Maskülenliğin sadece yıkıcılık ve zorbalıkla sınırlı olmadığını, bununla birlikte karakterimizi şekillendirme ve çevremizdeki insanlara olumlu etkilerde bulunma potansiyelimiz olduğunu vurgular."
    },
    {
      "num": "3",
      "url": `https://enonlar.com/${url}#bolum-3`,
      "name":"Dövüş Kulübü - Fight Club",
      "image":`/images/movies/dovus_kulubu.png`,
      "ozellikler": {
        "Yıl":"1999",
        "Süre": "2 sa. 19 dk.",
        "Kategori": ["Dram"],
        "imdb":"8.8/10",
        "metascore": "67",
        "Oyuncular":["Brad Pitt", "Edward Norton"],
        "Yönetmen":"David Fincher",
      },
      "paragraf": "Fight Club, erkeklik ve maskülenlik kavramlarına dair en akılda kalıcı filmlerden biridir. David Fincher yönetmenliğindeki bu eser, Chuck Palahniuk'un aynı adlı romanından uyarlanmıştır. Tüketim toplumu, erkekliğin krizi ve bireysel özgürlük temasları üzerine keskin bir eleştiri sunar. Brad Pitt ve Edward Norton'un başrolde olduğu film, izleyiciyi derinden etkileyen bir finalle sonlanır. Modern toplumun getirdiği görünmez kısıtlamalara dikkat çekerken, erkeklerin maskülenliği geri kazanma yolunda diğer erkeklerle kurduğu bağın önemini açık bir şekilde vurgular."
    },
    {
      "num": "2",
      "url": `https://enonlar.com/${url}#bolum-2`,
      "name":"Baba - The Godfather",
      "image":`/images/movies/baba.jpg`,
      "ozellikler": {
        "Yıl":"1972",
        "Süre": "2 sa. 55 dk.",
        "Kategori": ["Suç", "Dram"],
        "imdb":"9.2/10",
        "metascore": "100",
        "Oyuncular":["Marlon Brando", "Al Pacino"],
        "Yönetmen":"Francis Ford Coppola",
      },
      "paragraf": "Francis Ford Coppola'nın yönettiği bu efsane film, mafya ailesinin iç yüzünü, aile bağlarını, iktidar mücadelesini ve onur kavramını derinlemesine ele alır. Sinema tarihindeki en ikonik filmlerden biri olarak kabul edilir. Aynı zamanda erkekliğin, baba-oğul ilişkisinin ve liderlik etiğinin karmaşıklığını, erkeklerin aileleri ve onurları uğruna neleri feda edebileceğini gözler önüne serer. Bu bağlamda, film, erkeklerin ailevi ve toplumsal beklentilere nasıl yanıt verdiğini, maskülenliğin aile ve onur üzerindeki etkilerini inceler."
    },
    {
      "num": "1",
      "url": `https://enonlar.com/${url}#bolum-1`,
      "name": "Esaretin Bedeli - The Shawshank Redemption",
      "image": `/images/movies/esaretin_bedeli.jpg`,
      "ozellikler": {
        "Yıl":"1994",
        "Süre": "2 sa. 22 dk.",
        "Kategori": ["Dram"],
        "imdb":"9.3/10",
        "metascore": "82",
        "Oyuncular":["Tim Robbins", "Morgan Freeman"],
        "Yönetmen":"Frank Darabont",
      },
      "paragraf": "<Link href='/en-iyi-10-1000-cc-naked-motosiklet'>HASHA</Link> <Link href='/stephen-king-en-iyi-10-kitap-ve-sinema-uyarlamalari' title='Stephen King'in En İyi 10 Kitabı Ve Bu Kitapların Sinema Uyarlamaları'>Stephen King</Link>'in kısa hikayesinden uyarlanan bu film, Andy Dufresne'nin suçsuz yere mahkum edildiği Shawshank hapishanesinde geçirdiği yılları ve orada kurduğu dostlukların hikayesini anlatıyor. Tim Robbins ve Morgan Freeman'ın başrollerde olduğu film, umut, özgürlük ve insani direncin gücüne dair sıcak bir mesaj veriyor. Suçsuz dahi olsan hayatın sana karşı acımasızlıkları ile başa çıkmaktan başka çarenin olmadığını anlatan bu film, ayrıca imdb 1. sıradaki film olarakta uzun süredir liderliğini koruyor ve birçok kişi tarafından tüm zamanların en iyi filmi olarak kabul ediliyor."
    }
  ];

  const ana_resim = "/images/ana_gorseller/enonlar-erkeklerin-izlemesi-gereken-en-iyi-10-film.png";
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};
  
  const jsonList = moviesAndSeriesJson(articleInfos,
  "Movies", 
  metin,
  jsonContentArray
  )
  //#endregion

  const defaultsURLs = [
    "en-yuksek-imdb-puanina-sahip-10-film",
    "en-yuksek-imdb-puanina-sahip-10-dizi",
    "en-iyi-10-1000-cc-naked-motosiklet",
    "en-iyi-10-1000-cc-super-sport-motosiklet"
    ];
const defaultRecommends = await StaticUrls(defaultsURLs);

  return {
    props: {
        articleConstructor: {
            baslik, description, keywordsArray, ana_resim, url, jsonList, addDate, okunmaSuresi: jsonList.readTimeSpan, kategori, metin, jsonContentArray, defaultRecommends
        }
    }
  }
}

export default function MansNeedWatch({topCPO, articleConstructor}) {

  return (
    <ClassicArticleTop topCPO={topCPO} articleConstructor={articleConstructor}/>
  )
}