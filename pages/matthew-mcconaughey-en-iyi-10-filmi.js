
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MatthewMcconaugheyEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "matthew-mcconaughey-en-iyi-10-filmi";
const baslik = "Matthew McConaughey en iyi 10 filmi";
const metin = "Matthew McConaughey, yeteneği ve karizmasıyla tanınan bir aktör olarak birçok etkileyici projeye imza atmıştır. Bu yazımızda, Matthew McConaughey filmleri arasından en beğenilenleri, yani Matthew McConaughey en iyi filmleri listesini sizler için derledik. Her biri ayrı bir hikaye ve performans sergileyen bu filmler, izleyenler üzerinde unutulmaz etkiler bırakmayı başardı.";
const bitis_metin = "Bu yazıda Matthew McConaughey'in en iyi 10 filmi arasında gezindik. Oyuncunun kariyeri boyunca sergilediği etkileyici performanslar izleyiciler için birer sanat eseri niteliğinde. Matthew McConaughey filmleri arasında favorinizi seçmek zor olabilir, ama eminiz bu liste size bir rehber sunmuştur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["matthew","mcconaughey","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:37:07+03:00";
const degistirilmeTarihi = "2024-08-16T16:37:07+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/matthew-mcconaughey-en-iyi-10-filmi#bolum-10",
    "name": "Reign of Fire - Ateş Krallığı",
    "image": "/images/movies/Matthew_McConaughey_reign_of_fire_-_ates_kralligi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Matthew McConaughey",
        "Lee Van Cleef",
        "Christian Bale"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Yıl": "2002",
      "Süre": "1 sa. 41 dk.",
      "Yönetmen": "Rob Bowman",
      "imdb": "6.2/10",
      "Değerlendirme": "146648",
      "metacritic": "39"
    },
    "paragraf": "Reign of Fire - Ateş Krallığı, McConaughey'in aksiyon dolu performansını sergilediği bir yapım. Ejderhaların dünyayı ele geçirmesi ve insanoğlunun bu yaratıklarla girdiği mücadele, filmi oldukça sürükleyici bir hale getiriyor. Matthew McConaughey filmleri içinde yer alan bu yapım, onun aksiyon yeteneğini gözler önüne seriyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/matthew-mcconaughey-en-iyi-10-filmi#bolum-9",
    "name": "A Time to Kill - Öldürme Zamanı",
    "image": "/images/movies/Matthew_McConaughey_a_time_to_kill_-_oldurme_zamani.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Matthew McConaughey",
        "Lee Van Cleef",
        "Sandra Bullock"
      ],
      "Kategori": [
        "Dram",
        "Suç"
      ],
      "Yıl": "1996",
      "Süre": "2 sa. 29 dk.",
      "Yönetmen": "Joel Schumacher",
      "imdb": "7.5/10",
      "Değerlendirme": "184284",
      "metacritic": "53"
    },
    "paragraf": "A Time to Kill - Öldürme Zamanı, Matthew McConaughey oynadığı filmler arasında belki de en dramatik olanlardan biri. Irkçılık ve adalet konularını cesurca ele alan filmde, McConaughey'in etkileyici bir performans sergilediğini görüyoruz. Onun kariyerindeki önemli dönüm noktalarından biri olarak kabul ediliyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/matthew-mcconaughey-en-iyi-10-filmi#bolum-8",
    "name": "Mud - Kasaba",
    "image": "/images/movies/Matthew_McConaughey_mud_-_kasaba.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Matthew McConaughey",
        "Lee Van Cleef",
        "Reese Witherspoon"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Jeff Nichols",
      "imdb": "7.4/10",
      "Değerlendirme": "190487",
      "metacritic": "76"
    },
    "paragraf": "Mud - Kasaba, McConaughey'in güçlü ve derinlemesine işlenmiş bir karakterle karşımıza çıktığı, etkileyici bir hikaye sunuyor. McConaughey, Mississippi Nehri yakınlarında saklanan bir kaçak rolüyle, Matthew McConaughey imdb puanlarını yükselten bir performans sergiliyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/matthew-mcconaughey-en-iyi-10-filmi#bolum-7",
    "name": "The Lincoln Lawyer - Gecenin Rengi",
    "image": "/images/movies/Matthew_McConaughey_the_lincoln_lawyer_-_gecenin_rengi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Matthew McConaughey",
        "Lee Van Cleef",
        "Marisa Tomei"
      ],
      "Kategori": [
        "Gerilim",
        "Suç"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 58 dk.",
      "Yönetmen": "Brad Furman",
      "imdb": "7.3/10",
      "Değerlendirme": "255991",
      "metacritic": "63"
    },
    "paragraf": "The Lincoln Lawyer - Gecenin Rengi filmi, avukatlık dünyasının kirli yüzünü gösteren etkileyici bir yapım. McConaughey, aracını ofisi olarak kullanan kurnaz bir avukatı canlandırıyor. Matthew McConaughey en iyi filmi hangisi diye sorarsanız, bu film birçok kişi için o listeye girebilir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/matthew-mcconaughey-en-iyi-10-filmi#bolum-6",
    "name": "Amistad",
    "image": "/images/movies/Matthew_McConaughey_amistad.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Matthew McConaughey",
        "Lee Van Cleef",
        "Morgan Freeman",
        "Nigel Hawthorne"
      ],
      "Kategori": [
        "Dram",
        "Tarih"
      ],
      "Yıl": "1997",
      "Süre": "2 sa. 35 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "7.3/10",
      "Değerlendirme": "83527",
      "metacritic": "64"
    },
    "paragraf": "Amistad, tarihsel bir dram olan bu filmde McConaughey, yasaların karmaşık dünyasında adaletin peşinden koşan bir avukatı canlandırıyor. McConaughey, özellikle tarihsel filmlerdeki başarısıyla dikkat çekiyor. Matthew McConaughey en iyi filmleri arasında sayabileceğimiz bu yapım, duygusal derinliğiyle öne çıkıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/matthew-mcconaughey-en-iyi-10-filmi#bolum-5",
    "name": "Magic Mike",
    "image": "/images/movies/Matthew_McConaughey_magic_mike.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Matthew McConaughey",
        "Lee Van Cleef",
        "Channing Tatum"
      ],
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Steven Soderbergh",
      "imdb": "6.1/10",
      "Değerlendirme": "148030",
      "metacritic": "72"
    },
    "paragraf": "Magic Mike, eğlenceli ve ilginç bir konuya sahip. Matthew McConaughey, bir striptiz kulübünün karizmatik sahibi olarak karşımıza çıkıyor. Film, hem eğlendiriyor hem de düşündürüyor. McConaughey'in enerjik performansı, Matthew McConaughey imdb notları arasında belirgin bir yere sahip."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/matthew-mcconaughey-en-iyi-10-filmi#bolum-4",
    "name": "The Wolf of Wall Street - Para Avcısı",
    "image": "/images/movies/Matthew_McConaughey_the_wolf_of_wall_street_-_para_avcisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Matthew McConaughey",
        "Lee Van Cleef",
        "Leonardo DiCaprio",
        "Jonah Hill"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2013",
      "Süre": "3 sa.",
      "Yönetmen": "Martin Scorsese",
      "imdb": "8.2/10",
      "Değerlendirme": "1610364",
      "metacritic": "75"
    },
    "paragraf": "The Wolf of Wall Street - Para Avcısı, Martin Scorsese'nin yönetmenliğini yaptığı bu filmde McConaughey, karakteristik bir Wall Street brokerını canlandırıyor. McConaughey, filmde kısmi bir rol üstlenmiş olsa da, performansı unutulmaz iz bırakıyor. Matthew McConaughey oynadığı filmler arasındaki bu rolü, onun çok yönlü yeteneğini kanıtlıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/matthew-mcconaughey-en-iyi-10-filmi#bolum-3",
    "name": "Dallas Buyers Club - Sınırsızlar Kulübü",
    "image": "/images/movies/Matthew_McConaughey_dallas_buyers_club_-_sinirsizlar_kulubu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Matthew McConaughey",
        "Lee Van Cleef",
        "Jennifer Garner"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Jean-Marc Vallée",
      "imdb": "7.9/10",
      "Değerlendirme": "523749",
      "metacritic": "77"
    },
    "paragraf": "Dallas Buyers Club - Sınırsızlar Kulübü'nde McConaughey, AIDS teşhisi konmuş Ron Woodroof'u canlandırıyor. Bu rolle Oscar da kazanan McConaughey, karaktere hayat verirken izleyicileri derinden etkiliyor. McConaughey en iyi filmleri arasında belki de zirveye konulabilir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/matthew-mcconaughey-en-iyi-10-filmi#bolum-2",
    "name": "True Detective (Dizi) - Gerçek Dedektif",
    "image": "/images/movies/Matthew_McConaughey_true_detective_(dizi)_-_gercek_dedektif.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Matthew McConaughey",
        "Lee Van Cleef",
        "Colin Farrell"
      ],
      "Kategori": [
        "Dizi",
        "Dram"
      ],
      "Yıl": "2014",
      "Süre": "1 sa.",
      "Yönetmen": "Cary Joji Fukunaga",
      "imdb": "8.9/10",
      "Değerlendirme": "667291"
    },
    "paragraf": "True Detective, bir dizi olmasına rağmen, McConaughey'in sergilediği performans unutulmaz. Rust Cohle karakteriyle, McConaughey sadece bir film veya dizide değil, tüm kariyerinde özel bir yer elde etti. McConaughey en iyi filmi veya dizisi denildiğinde akla ilk gelen yapımlardan biri."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/matthew-mcconaughey-en-iyi-10-filmi#bolum-1",
    "name": "Interstellar - Yıldızlararası",
    "image": "/images/movies/Matthew_McConaughey_interstellar_-_yildizlararasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Matthew McConaughey",
        "Lee Van Cleef",
        "Ellen Burstyn"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Dram"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 49 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "8.7/10",
      "Değerlendirme": "2144507",
      "metacritic": "74"
    },
    "paragraf": "Interstellar - Yıldızlararası, Matthew McConaughey'in başrolde olduğu, bilim kurgu türünde çığır açan bir film. Çekim kalitesi, hikaye örgüsü ve McConaughey'in performansı olağanüstü. Matthew McConaughey oynadığı filmler arasındaki bu yapım, onun kariyerinde en önemli yeri alıyor ve sinemaseverler için unutulmaz bir deneyim sunuyor."
  }

];

const ana_resim = "/images/ana_gorseller/matthew-mcconaughey-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};

const jsonList = moviesAndSeriesJson(articleInfos,
kategori, 
metin,
jsonContentArray,
bitis_metin
)
//#endregion

const articleConstructor = {
    baslik, description, keywordsArray, ana_resim, url, jsonList, addDate, okunmaSuresi: jsonList.readTimeSpan, kategori, metin, jsonContentArray, bitis_metin
}

return (
    <ClassicArticleTop topCPO={topCPO} articleConstructor={articleConstructor}/>
)
}