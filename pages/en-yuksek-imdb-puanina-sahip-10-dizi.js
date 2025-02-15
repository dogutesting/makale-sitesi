import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

export default function MostSeriesMain({topCPO}) {

  //#region SAYFA TEXT TANIMLAMALARI
  const url = "en-yuksek-imdb-puanina-sahip-10-dizi";
  const baslik = "En Yüksek imdb Puanına Sahip 10 Dizi";
  const metin = "Televizyonun altın çağında, bazı diziler sadece ekran başında geçirilen saatleri doldurmakla kalmaz, duygusal bir bağ kurar ve bizi bölümler arasında bekleyişe sürükler. İşte bunlar en yüksek imdb puanlı diziler listesindeki başyapıtlardır. Sadece anlatım güçlerinden değil, aynı zamanda derinlikli hikayeleri, etkileyici karakter gelişimleri ve benzersiz temalarıyla da öne çıkan imdb puanı yüksek dizileri sizler için derledik. Bu liste binlerce diziden imdb puanı en yüksek 10 diziyi içermektedir. Zirveye yerleşen bu eserler, izleyiciye düşündürücü anlar yaşatarak, günlük hayatın ötesine geçmeye davet eder. Gerçek dünyanın ötesine geçirmeyi başaranlar imdb tarafından imdb ilk 10 dizisi olarak listelenmiştir, en yüksek imdb puanlı yabancı dizileri spoiler vermeden sizler için basitçe anlatmaya çalıştık. İşte televizyon tarihinin unutulmazlarına ev sahipliği yapan, her dizi tutkununun kaçırmaması gereken imdb top 10 yabancı dizi.";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  const keywordsArray = ["en", "yuksek", "imdb", "puani", "diziler"]; //burada türkçe karakter olacak mı bir fikrim yok
  const kategori = "dizi"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-02T15:25:00+03:00";
  const degistirilmeTarihi = "2023-11-19T01:13:00+03:00";
  const addDate = "02.10.23";

  const jsonContentArray = [
    {
        "eps": "13",
        "num": "10",
        "url": `https://enonlar.com/${url}#bolum-10`,
        "name": "Kozmos: Uzay Zaman Yolculuğu - Cosmos: A Spacetime Odyssey",
        "image": `/images/series/cosmos_bir_uzay_seruveni.jpg`,
        "ozellikler": {
          "Yıl": "2014",
          "Kategori": ["Bilim", "Belgesel"],
          "imdb": "9.2",
          "metascore":"83",
          "Oyuncular": ["Neil deGrasse Tyson"],
          "Yönetmen": "Neil deGrasse Tyson",
          "Değerlendirme": "128000"
        },
        "paragraf": "Cosmos: A Spacetime Odyssey, evrenin sırlarını anlamak için bilimin penceresinden bakıyor. Neil deGrasse Tyson'ın etkileyici anlatımıyla, izleyiciyi kozmosun derinliklerine götüren bu dizi, hem bilgilendirici hem de görsel bir şölen sunuyor."
    },
    {
        "eps": "94",
        "num": "9",
        "url": `https://enonlar.com/${url}#bolum-9`,
        "name": "Sopranos - The Sopranos",
        "image": "/images/series/sopranos.jpg",
        "ozellikler": {
          "Yıl": "1999–2007",
          "Kategori": ["Suç", "Drama"],
          "imdb": "9.2",
          "metascore":"92",
          "Oyuncular": ["James Gandolfini", "Edie Falco", "Steven Van Zandt"],
          "Yönetmen": "David Chase",
          "Değerlendirme": "470000"
        },
        "paragraf": "The Sopranos, Amerikan mafya hayatının gerçekçi bir portresini sunarken, aile ve iş yaşantısının karmaşıklığını da ele alıyor. Tony Soprano'nun hem bir aile babası hem de bir mafya lideri olarak yaşadığı içsel çatışmalar, diziye derinlik katıyor."
    },
    {
        "eps": "7",
        "num": "8",
        "url": `https://enonlar.com/${url}#bolum-8`,
        "name": "Mavi Gezegen II - Blue Planet II",
        "image": "/images/series/mavi_gezegen_2.jpg",
        "ozellikler": {
          "Yıl": "2017",
          "Kategori": ["Doğa", "Belgesel"],
          "imdb": "9.3",
          "metascore":"97",
          "Oyuncular": ["David Attenborough"],
          "Yönetmen": "David Attenborough",
          "Değerlendirme": "46000"
        },
        "paragraf": "Blue Planet II, denizlerin ve okyanusların gizemli dünyasını gözler önüne seriyor. David Attenborough'nun eşsiz anlatımı ile deniz canlılarının hayatlarına tanık oluyoruz. Bu dizi, doğanın güzelliklerini ve hassasiyetlerini bizlere hatırlatıyor."
    },
    {
        "eps": "62",
        "num": "7",
        "url": `https://enonlar.com/${url}#bolum-7`,
        "name": "Avatar: Son Hava Bükücü - Avatar: The Last Airbender",
        "image": "/images/series/avatar_son_hava_bukucu.jpg",
        "ozellikler": {
          "Yıl": "2005–2008",
          "Kategori": ["Animasyon", "Macera", "Aksiyon"],
          "imdb": "9.3",
          "metascore":"90",
          "Oyuncular": ["Zach Tyler", "Mae Whitman", "Jack De Sena"],
          "Yönetmen": "Michael Dante DiMartino, Bryan Konietzko",
          "Değerlendirme": "372000"
        },
        "paragraf": "Avatar: The Last Airbender, elementleri kontrol edebilen bükücülerin dünyasında geçiyor. Genç Avatar Aang'in yolculuğunu anlatan bu dizi, dostluk, onur ve fedakarlık temasları üzerine odaklanıyor."
    },
    {
        "eps": "60",
        "num": "6",
        "url": `https://enonlar.com/${url}#bolum-6`,
        "name": "Tel - The Wire",
        "image": "/images/series/tel.jpg",
        "ozellikler": {
          "Yıl": "2002–2008",
          "Kategori": ["Suç", "Drama"],
          "imdb": "9.3",
          "metascore":"91",
          "Oyuncular": ["Dominic West", "Idris Elba", "Michael K. Williams"],
          "Yönetmen": "David Simon",
          "Değerlendirme": "377000"
        },
        "paragraf": "The Wire, Baltimore şehrinin hem sokaklarında hem de koridorlarında cereyan eden suç, politika ve medya olaylarını ele alıyor. Dizi, kentsel yaşamın ve sistemlerin karmaşıklığına derinlemesine bir bakış sunuyor."
    },
    {
        "eps": "5",
        "num": "5",
        "url": `https://enonlar.com/${url}#bolum-5`,
        "name": "Çernobil - Chernobyl",
        "image": "/images/series/chernobyl.jpg",
        "ozellikler": {
          "Yıl": "2019",
          "Kategori": ["Drama", "Tarih"],
          "imdb": "9.3",
          "metascore":"82",
          "Oyuncular": ["Jessie Buckley", "Jared Harris", "Stellan Skarsgård"],
          "Yönetmen": "Johan Renck",
          "Değerlendirme": "863000"
        },
        "paragraf": "Chernobyl, tarihin en büyük nükleer felaketlerinden birini detaylı bir şekilde ele alıyor. İnsan hatalarının ve bürokrasinin getirdiği korkunç sonuçları gözler önüne seren bu dizi, izleyiciye derinden etkileyen bir deneyim sunuyor."
    },
    {
        "eps": "10",
        "num": "4",
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name": "Kardeşler Takımı - Band of Brothers",
        "image": "/images/series/kardesler_takimi.jpg",
        "ozellikler": {
          "Yıl": "2001",
          "Kategori": ["Drama", "Tarih", "Savaş"],
          "imdb": "9.4",
          "metascore":"87",
          "Oyuncular": ["Damian Lewis", "Ron Livingston", "David Schwimmer"],
          "Yönetmen": "David Frankel, Phil Alden Robinson",
          "Değerlendirme": "526000"
        },
        "paragraf": "Band of Brothers, II. Dünya Savaşı sırasında Easy Company'nin Avrupa'da yaşadığı olayları anlatıyor. Savaşın zorlukları, askerlerin arasındaki kardeşlik bağları ve liderlik teması bu diziyi unutulmaz kılıyor."
    },
    {
        "eps": "12",
        "num": "3",
        "url": `https://enonlar.com/${url}#bolum-3`,
        "name": "Yeryüzü - Planet Earth",
        "image": "/images/series/yeryuzu.jpg",
        "ozellikler": {
          "Yıl": "2006–2023",
          "Kategori": ["Doğa", "Belgesel"],
          "imdb": "9.4",
          "metascore":"91",
          "Oyuncular": ["David Attenborough"],
          "Yönetmen": "David Attenborough",
          "Değerlendirme": "220000"
        },
        "paragraf": "Planet Earth, dünyamızın doğal güzelliklerini ve vahşi yaşamını ultra yüksek çözünürlükte gözler önüne seriyor. David Attenborough'nun rehberliğinde, doğanın eşsiz manzaralarına ve canlılarına şahit oluyoruz."
    },
    {
        "eps": "6",
        "num": "2",
        "url": `https://enonlar.com/${url}#bolum-2`,
        "name": "Yeryüzü II - Planet Earth II",
        "image": "/images/series/yeryuzu_2.jpg",
        "ozellikler": {
          "Yıl": "2016",
          "Kategori": ["Doğa", "Belgesel"],
          "imdb": "9.5",
          "metascore":"96",
          "Oyuncular": ["David Attenborough"],
          "Yönetmen": "David Attenborough",
          "Değerlendirme": "158000"
        },
        "paragraf": "Planet Earth II, doğanın harikalarını ve vahşi yaşamı daha yakından keşfetmemize olanak tanıyor. İzleyici, şehirlerdeki hayvanlardan uzak ormanlara kadar geniş bir yelpazede doğal yaşama tanık oluyor."
    },
    {
        "eps": "62",  
        "num": "1",
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name": "Breaking Bad",
        "image": "/images/series/breaking_bad.jpg",
        "ozellikler": {
          "Yıl": "2008–2013",
          "Kategori": ["Suç", "Drama", "Gerilim"],
          "imdb": "9.5",
          "metascore":"87",
          "Oyuncular": ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
          "Yönetmen": "Vince Gilligan",
          "Değerlendirme": "2100000"
        },
        "paragraf": "Breaking Bad, kimya öğretmeni Walter White'ın kanser teşhisi sonrası uyuşturucu üreticisi ve satıcısına dönüşmesini anlatıyor. Ailevi sorumlulukları ve hayatta kalma mücadelesi, Walter'ın moral değerlerini sorgulamasına neden oluyor."
    }
  ];

  const ana_resim = "/images/ana_gorseller/enonlar-en-yuksek-imdb-puanina-sahip-10-dizi.png";
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};

  const jsonList = moviesAndSeriesJson(articleInfos,
  "Series", 
  metin,
  jsonContentArray
  )
  //#endregion

  const articleConstructor = {
    baslik, description, keywordsArray, ana_resim, url, jsonList, addDate, okunmaSuresi: jsonList.readTimeSpan, kategori, metin, jsonContentArray
  }

  return (
    <ClassicArticleTop topCPO={topCPO} articleConstructor={articleConstructor}/>
  )
}