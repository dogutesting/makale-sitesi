
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function KateWinsletEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "kate-winslet-en-iyi-10-filmi";
const baslik = "Kate Winslet En İyi 10 Filmi";
const metin = "Kate Winslet, sinema dünyasında kendine özgü performansları ve güçlü rolleriyle tanınan bir isim. Bu yazımızda, Kate Winslet en iyi filmleri üzerine bir liste hazırladık. Onun kariyerine damga vuran, unutulmaz yapımlara birlikte göz atalım. Kate Winslet filmleri imdb sıralamalarına da değineceğiz.";
const bitis_metin = "Bu yazımızda Kate Winslet'in en iyi filmlerini derledik. Her biri farklı bir tat sunan bu yapımlar, Winslet'in yeteneğini ve oyunculuk dehasını gözler önüne seriyor. İzleyiciler için unutulmaz olan bu filmleri izlemeyi kaçırmayın!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["kate","winslet","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:26:00+03:00";
const degistirilmeTarihi = "2024-08-09T17:26:00+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt2226597",
    "url": "https://enonlar.com/kate-winslet-en-iyi-10-filmi#bolum-10",
    "name": "The Mountain Between Us - Aramızdaki Sözler",
    "image": "/images/movies/Kate_Winslet_the_mountain_between_us_-_aramizdaki_sozler.jpg",
    "ozellikler": {
      "Yıl": "2017",
      "Süre": "1 sa. 52 dk.",
      "Kategori": [
        "Macera",
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Kate Winslet",
        "Idris Elba"
      ],
      "Yönetmen": "Hany Abu-Assad",
      "imdb": "6.4/10",
      "Değerlendirme": "81430",
      "metacritic": "48"
    },
    "paragraf": "The Mountain Between Us, Kate Winslet ve Idris Elba'nın bir uçak kazasından sonra hayatta kalma mücadelelerini konu alıyor. Macera dolu, duygusal bir film olan Aramızdaki Sözler, doğanın zorlukları karşısında insan gücünü gözler önüne seriyor. Kate Winslet filmleri imdb sıralamalarında macera dolu performansı ile öne çıkıyor."
  },
  {
    "num": "9",
    "title_id": "tt0424095",
    "url": "https://enonlar.com/kate-winslet-en-iyi-10-filmi#bolum-9",
    "name": "Flushed Away - Fare Şehri",
    "image": "/images/movies/Kate_Winslet_flushed_away_-_fare_sehri.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "1 sa. 24 dk.",
      "Kategori": [
        "Animasyon",
        "Komedi",
        "Macera"
      ],
      "Oyuncular": [
        "Kate Winslet",
        "Hugh Jackman"
      ],
      "Yönetmen": "David Bowers, Sam Fell",
      "imdb": "6.6/10",
      "Değerlendirme": "140339",
      "metacritic": "74"
    },
    "paragraf": "Flushed Away, Kate Winslet'in animasyon dünyasında seslendirme yeteneğini sergilediği bir yapım. Eğlenceli ve hareketli bu film, kanalizasyona düşen fare Roddy'nin hikayesini anlatıyor. Winslet, animasyon türünde de başarısını kanıtlıyor."
  },
  {
    "num": "8",
    "title_id": "tt2910904",
    "url": "https://enonlar.com/kate-winslet-en-iyi-10-filmi#bolum-8",
    "name": "The Dressmaker - Düşlerin Terzisi",
    "image": "/images/movies/Kate_Winslet_the_dressmaker_-_duslerin_terzisi.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Süre": "1 sa. 59 dk.",
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Oyuncular": [
        "Kate Winslet",
        "Judy Davis"
      ],
      "Yönetmen": "Jocelyn Moorhouse",
      "imdb": "7/10",
      "Değerlendirme": "66465",
      "metacritic": "47"
    },
    "paragraf": "The Dressmaker, Kate Winslet'in oyunculuğuyla göz doldurduğu bir komedi-dram filmi. Kırsal bir kasabaya dönen terzi Tilly'nin intikam hikayesini anlatan bu yapım, izleyicilere dokunaklı anlar sunuyor. Kate Winslet en iyi filmleri listelerinde yaratıcı karakteriyle yer alıyor."
  },
  {
    "num": "7",
    "title_id": "tt1840309",
    "url": "https://enonlar.com/kate-winslet-en-iyi-10-filmi#bolum-7",
    "name": "Divergent - Uyumsuz",
    "image": "/images/movies/Kate_Winslet_divergent_-_uyumsuz.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "2 sa. 19 dk.",
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Bilim Kurgu"
      ],
      "Oyuncular": [
        "Kate Winslet",
        "Shailene Woodley"
      ],
      "Yönetmen": "Neil Burger",
      "imdb": "6.6/10",
      "Değerlendirme": "494110",
      "metacritic": "48"
    },
    "paragraf": "Divergent, distopik bir dünyada geçen ve Kate Winslet'in otoriter karakteri Jeanine Matthews'u canlandırdığı bir yapım. Macera dolu bu film, genç Tris'in toplumdaki sınıflara karşı mücadelesini konu alıyor. Kate Winslet filmleri imdb sıralamalarında bu rolüyle dikkat çekici bir yer edinmiştir."
  },
  {
    "num": "6",
    "title_id": "tt0404203",
    "url": "https://enonlar.com/kate-winslet-en-iyi-10-filmi#bolum-6",
    "name": "Little Children - Tutku Oyunları",
    "image": "/images/movies/Kate_Winslet_little_children_-_tutku_oyunlari.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "2 sa. 16 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Kate Winslet",
        "Patrick Wilson"
      ],
      "Yönetmen": "Todd Field",
      "imdb": "7.5/10",
      "Değerlendirme": "117622",
      "metacritic": "75"
    },
    "paragraf": "Little Children, suburbia yaşamının ardındaki gizli tutkuları ele alıyor. Kate Winslet ve Patrick Wilson, sıradan yaşamların karmaşık duygularını başarıyla canlandırıyor. Winslet, bu filmdeki performansıyla birçok övgü topladı ve en iyi kadın oyuncu kategorilerinde adaylıklar kazandı."
  },
  {
    "num": "5",
    "title_id": "tt0976051",
    "url": "https://enonlar.com/kate-winslet-en-iyi-10-filmi#bolum-5",
    "name": "The Reader - Okuyucu",
    "image": "/images/movies/Kate_Winslet_the_reader_-_okuyucu.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "2 sa. 4 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Kate Winslet",
        "Ralph Fiennes"
      ],
      "Yönetmen": "Stephen Daldry",
      "imdb": "7.6/10",
      "Değerlendirme": "262137",
      "metacritic": "58"
    },
    "paragraf": "The Reader, savaş sonrası Almanya'sında geçen duygusal bir yapım. Kate Winslet, geçmişindeki sırları yeni bir nesil üzerinden keşfeden bir kadını canlandırarak, olağanüstü bir performans sergiliyor. Bu film, Winslet'e Oscar kazandıran rolüyle kariyerine altın bir sayfa ekliyor."
  },
  {
    "num": "4",
    "title_id": "tt0959337",
    "url": "https://enonlar.com/kate-winslet-en-iyi-10-filmi#bolum-4",
    "name": "Revolutionary Road - Hayallerin Peşinde",
    "image": "/images/movies/Kate_Winslet_revolutionary_road_-_hayallerin_pesinde.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "1 sa. 59 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Kate Winslet",
        "Leonardo DiCaprio"
      ],
      "Yönetmen": "Sam Mendes",
      "imdb": "7.3/10",
      "Değerlendirme": "226508",
      "metacritic": "69"
    },
    "paragraf": "Revolutionary Road, 1950'lerde geçen ve hayallerini gerçekleştirmek için mücadele eden çift Frank ve April'i anlatıyor. Kate Winslet ve Leonardo DiCaprio, bu filmde yeniden bir araya gelerek duygusal bir anlatım sunuyorlar. Winslet'in etkileyici performansı, filmdeki duyguları derinden hissettiriyor."
  },
  {
    "num": "3",
    "title_id": "tt0338013",
    "url": "https://enonlar.com/kate-winslet-en-iyi-10-filmi#bolum-3",
    "name": "Eternal Sunshine of the Spotless Mind - Sil Baştan",
    "image": "/images/movies/Kate_Winslet_eternal_sunshine_of_the_spotless_mind_-_sil_bastan.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Süre": "1 sa. 48 dk.",
      "Kategori": [
        "Dram",
        "Romantik",
        "Bilim Kurgu"
      ],
      "Oyuncular": [
        "Kate Winslet",
        "Jim Carrey"
      ],
      "Yönetmen": "Michel Gondry",
      "imdb": "8.3/10",
      "Değerlendirme": "1090249",
      "metacritic": "89"
    },
    "paragraf": "Eternal Sunshine of the Spotless Mind, aşkın ve hafızanın karmaşık yapısını ele alan yenilikçi bir film. Kate Winslet, Jim Carrey ile başrolleri paylaşıyor ve unutulmaz bir performans sergiliyor. Bu film, Kate Winslet en iyi filmleri arasında özel bir yere sahip."
  },
  {
    "num": "2",
    "title_id": "tt0120338",
    "url": "https://enonlar.com/kate-winslet-en-iyi-10-filmi#bolum-2",
    "name": "Titanic",
    "image": "/images/movies/Kate_Winslet_titanic.jpg",
    "ozellikler": {
      "Yıl": "1997",
      "Süre": "3 sa. 14 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Kate Winslet",
        "Leonardo DiCaprio"
      ],
      "Yönetmen": "James Cameron",
      "imdb": "7.9/10",
      "Değerlendirme": "1298880",
      "metacritic": "75"
    },
    "paragraf": "Titanic, Kate Winslet'i dünya çapında üne kavuşturan ve efsanevi bir aşkı anlatan bir başyapıt. Leonardo DiCaprio ile ekran kimyası, filmi unutulmaz kılan unsurlardan biri. Titanic, sinema tarihinde iz bırakmış ve Winslet'in kariyerinin dönüm noktası olmuştur."
  },
  {
    "num": "1",
    "title_id": "tt0114388",
    "url": "https://enonlar.com/kate-winslet-en-iyi-10-filmi#bolum-1",
    "name": "Sense and Sensibility - Aşk ve Yaşam",
    "image": "/images/movies/Kate_Winslet_sense_and_sensibility_-_ask_ve_yasam.jpg",
    "ozellikler": {
      "Yıl": "1995",
      "Süre": "2 sa. 16 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Kate Winslet",
        "Emma Thompson"
      ],
      "Yönetmen": "Ang Lee",
      "imdb": "7.7/10",
      "Değerlendirme": "127307",
      "metacritic": "84"
    },
    "paragraf": "Sense and Sensibility, Jane Austen'in klasik romanından uyarlanan ve Kate Winslet'i genç yaşta Oscar adaylığına taşıyan bir film. Dönem dramalarını sevenler için mükemmel bir yapım olan bu film, Winslet'in kariyerinde önemli bir yere sahiptir."
  }

];

const ana_resim = "/images/ana_gorseller/kate-winslet-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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