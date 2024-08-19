
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JakeGyllenhaalEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "jake-gyllenhaal-en-iyi-10-filmi";
const baslik = "Jake Gyllenhaal en iyi 10 filmi";
const metin = "Jake Gyllenhaal, kariyeri boyunca farklı türlerde pek çok başarılı performansa imza atmış bir aktördür. 'Jake Gyllenhaal filmleri' birçok sinemasever tarafından beğenilmiş ve 'Jake Gyllenhaal oynadığı filmler' arasında bazıları kült haline gelmiştir. İşte 'Jake Gyllenhaal en iyi filmleri' ve 'Jake Gyllenhaal imdb' puanlarına göre öne çıkan yapımlar.";
const bitis_metin = "Bu yazımızda, 'Jake Gyllenhaal en iyi filmleri' listesini sizler için derledik. 'Jake Gyllenhaal oynadığı filmler' arasından seçilen bu yapımlar, onun oyunculuk kabiliyetini ve film seçkilerindeki çeşitliliği ortaya koyuyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["jake","gyllenhaal","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:47:44+03:00";
const degistirilmeTarihi = "2024-08-16T16:47:44+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/jake-gyllenhaal-en-iyi-10-filmi#bolum-10",
    "name": "Prince of Persia: The Sands of Time - Pers Prensi: Zamanın Kumları",
    "image": "/images/movies/Jake_Gyllenhaal_prince_of_persia__the_sands_of_time_-_pers_prensi__zamanin_kumlari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Gemma Arterton"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 56 dk.",
      "Yönetmen": "Mike Newell",
      "imdb": "6.6/10",
      "Değerlendirme": "306378",
      "metacritic": "50"
    },
    "paragraf": "'Prince of Persia: The Sands of Time', Jake Gyllenhaal'ın aksiyon ve macera türündeki yeteneğini sergilediği filmlerden biridir. 'Jake Gyllenhaal filmleri' arasında fantastik bir dünyada geçen bu yapım, oldukça farklı bir atmosfer sunar ve 'Jake Gyllenhaal oynadığı filmler' listesinde özel bir yer tutar."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/jake-gyllenhaal-en-iyi-10-filmi#bolum-9",
    "name": "Source Code - Yaşam Şifresi",
    "image": "/images/movies/Jake_Gyllenhaal_source_code_-_yasam_sifresi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Michelle Monaghan"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 33 dk.",
      "Yönetmen": "Duncan Jones",
      "imdb": "7.5/10",
      "Değerlendirme": "555633",
      "metacritic": "74"
    },
    "paragraf": "'Source Code' filminde, Jake Gyllenhaal aksiyon dolu bir bilim kurgu hikayesi ile izleyicilerin karşısına çıkıyor. Film, 'Jake Gyllenhaal en iyi filmleri' arasında yer alıyor ve 'Jake Gyllenhaal imdb' puanına göre övgü topluyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/jake-gyllenhaal-en-iyi-10-filmi#bolum-8",
    "name": "Spider-Man: Far From Home - Örümcek-Adam: Evden Uzakta",
    "image": "/images/movies/Jake_Gyllenhaal_spider-man__far_from_home_-_orumcek-adam__evden_uzakta.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Tom Holland",
        "Samuel L. Jackson"
      ],
      "Kategori": [
        "Süper Kahraman",
        "Aksiyon"
      ],
      "Yıl": "2019",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Jon Watts",
      "imdb": "7.4/10",
      "Değerlendirme": "568362",
      "metacritic": "69"
    },
    "paragraf": "'Spider-Man: Far From Home' filminde, Jake Gyllenhaal 'Mysterio' rolüyle karşımıza çıkıyor. 'Jake Gyllenhaal oynadığı filmler' içinde özel bir yere sahip olan bu Marvel yapımı, 'Jake Gyllenhaal en iyi filmi' olarak da değerlendiriliyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/jake-gyllenhaal-en-iyi-10-filmi#bolum-7",
    "name": "Brothers - Kardeşler",
    "image": "/images/movies/Jake_Gyllenhaal_brothers_-_kardesler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Tobey Maguire"
      ],
      "Kategori": [
        "Dram",
        "Savaş"
      ],
      "Yıl": "2009",
      "Süre": "1 sa. 45 dk.",
      "Yönetmen": "Jim Sheridan",
      "imdb": "7.1/10",
      "Değerlendirme": "150421",
      "metacritic": "58"
    },
    "paragraf": "'Brothers', savaşın getirdiği travmatik etkileri ve kardeşler arasındaki zorlu ilişkileri konu alıyor. Jake Gyllenhaal bu filmdeki performansıyla, 'Jake Gyllenhaal en iyi filmleri' arasında yer almayı hak ediyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/jake-gyllenhaal-en-iyi-10-filmi#bolum-6",
    "name": "Southpaw - Son Şans",
    "image": "/images/movies/Jake_Gyllenhaal_southpaw_-_son_sans.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Rachel McAdams"
      ],
      "Kategori": [
        "Dram",
        "Spor"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Antoine Fuqua",
      "imdb": "7.3/10",
      "Değerlendirme": "261377",
      "metacritic": "57"
    },
    "paragraf": "Boks temalı 'Southpaw', Jake Gyllenhaal'un fiziksel ve duygusal sınırlarını zorladığı bir yapım. 'Jake Gyllenhaal en iyi filmleri' arasında anılan bu film, boks ve aile arasına sıkışmış bir karakteri başarıyla canlandırıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/jake-gyllenhaal-en-iyi-10-filmi#bolum-5",
    "name": "Nocturnal Animals - Gece Hayvanları",
    "image": "/images/movies/Jake_Gyllenhaal_nocturnal_animals_-_gece_hayvanlari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Amy Adams"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 56 dk.",
      "Yönetmen": "Tom Ford",
      "imdb": "7.5/10",
      "Değerlendirme": "313933",
      "metacritic": "67"
    },
    "paragraf": "'Nocturnal Animals', karmaşık bir psikolojik gerilim hikayesi sunuyor. Jake Gyllenhaal'un iki farklı karakteri canlandırdığı bu film, 'Jake Gyllenhaal en iyi filmi' listesinde öne çıkıyor ve IMDb'de yüksek bir puana sahip."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/jake-gyllenhaal-en-iyi-10-filmi#bolum-4",
    "name": "October Sky - Ekim Düşü",
    "image": "/images/movies/Jake_Gyllenhaal_october_sky_-_ekim_dusu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Chris Cooper"
      ],
      "Kategori": [
        "Dram",
        "Biyografi"
      ],
      "Yıl": "1999",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "Joe Johnston",
      "imdb": "7.8/10",
      "Değerlendirme": "99037",
      "metacritic": "71"
    },
    "paragraf": "'October Sky', bir uzay mühendisinin gerçek hayatına dayanan ilham verici bir hikaye. Jake Gyllenhaal'un etkileyici performansı ile 'Jake Gyllenhaal en iyi filmleri' arasında özel bir yere sahiptir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/jake-gyllenhaal-en-iyi-10-filmi#bolum-3",
    "name": "Prisoners - Tutsak",
    "image": "/images/movies/Jake_Gyllenhaal_prisoners_-_tutsak.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Hugh Jackman"
      ],
      "Kategori": [
        "Gerilim",
        "Suç"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 33 dk.",
      "Yönetmen": "Denis Villeneuve",
      "imdb": "8.2/10",
      "Değerlendirme": "825170",
      "metacritic": "70"
    },
    "paragraf": "'Prisoners', zorlayıcı bir suç ve gerilim hikayesi ile dikkatleri çekiyor. 'Jake Gyllenhaal filmleri' arasında özel bir yeri olan bu yapım, performansıyla 'Jake Gyllenhaal en iyi filmi' değerlendirmelerine tam anlamıyla layıktır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/jake-gyllenhaal-en-iyi-10-filmi#bolum-2",
    "name": "Nightcrawler - Gece Vurgunu",
    "image": "/images/movies/Jake_Gyllenhaal_nightcrawler_-_gece_vurgunu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Rene Russo",
        "Michael Papajohn"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Dan Gilroy",
      "imdb": "7.8/10",
      "Değerlendirme": "613092",
      "metacritic": "76"
    },
    "paragraf": "'Nightcrawler', Jake Gyllenhaal'un sinematik kariyerinin zirvesini temsil ediyor. Karanlık ve gerilim dolu atmosferi ile 'Jake Gyllenhaal imdb' listelerinde yüksek puan alan film, 'Jake Gyllenhaal oynadığı filmler' arasında bir başyapıt niteliğinde."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/jake-gyllenhaal-en-iyi-10-filmi#bolum-1",
    "name": "Donnie Darko",
    "image": "/images/movies/Jake_Gyllenhaal_donnie_darko.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Jena Malone",
        "Holmes Osborne"
      ],
      "Kategori": [
        "Dram",
        "Bilim Kurgu"
      ],
      "Yıl": "2001",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Richard Kelly",
      "imdb": "8/10",
      "Değerlendirme": "858836",
      "metacritic": "88"
    },
    "paragraf": "'Donnie Darko', Jake Gyllenhaal'un kariyerindeki en önemli dönüm noktalarından biridir. Psikolojik ve bilim kurguya dair temaları harmanlayan film, 'Jake Gyllenhaal en iyi filmleri' arasında saygı duyulan bir yapımdır."
  }

];

const ana_resim = "/images/ana_gorseller/jake-gyllenhaal-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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