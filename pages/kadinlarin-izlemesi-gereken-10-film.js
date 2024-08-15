
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function KadinlarinIzlemesiGereken10FilmMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "kadinlarin-izlemesi-gereken-10-film";
const baslik = "Kadınların izlemesi gereken 10 film";
const metin = "Kadınlar için film önerileri arasında akılda kalıcı, motive edici ve etkileyici hikayeler taşıyan eserler bulunabilir. Kadınların izlemesi gereken filmler genellikle güçlü kadın karakterler ya da ilham veren hikayeleriyle dikkat çeker. İşte kadınlar için mutlaka izlemesi gereken filmlerr listesi sizlerle.";
const bitis_metin = "Bu listede kadınlar için film önerileri arasından, izlenmesi gereken en etkileyici yapımlara yer verdik. Kadınların mutlaka izlemesi gereken filmlerr ile dolu bu seçki, hem eğlenceli hem de ilham verici hikayeler arayanlar için mükemmel.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["kadinlarin","izlemesi","gereken","10","film"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:19:30+03:00";
const degistirilmeTarihi = "2024-08-09T17:19:30+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt0212346",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-filmbolum-10",
    "name": "Miss Congeniality - Güzel Dedektif",
    "image": "/images/movies/Sandra_Bullock_miss_congeniality_-_guzel_dedektif.jpg",
    "ozellikler": {
      "Yıl": "2000",
      "Süre": "1 sa. 49 dk.",
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Oyuncular": [
        "Sandra Bullock",
        "Michael Caine"
      ],
      "Yönetmen": "Donald Petrie",
      "imdb": "6.3/10",
      "Değerlendirme": "233171",
      "metacritic": "43"
    },
    "paragraf": "Kadınların izlemesi gereken filmler arasında yer alan Miss Congeniality, bir FBI ajanının güzellik yarışmasına gizlice katılmasıyla yaşanan komik ve heyecan dolu olayları anlatıyor. Kadınlar için motivasyon filmleri arıyorsanız, bu film sizi hem güldürecek hem de meraklandıracak."
  },
  {
    "num": "9",
    "title_id": "tt0879870",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-filmbolum-9",
    "name": "Eat Pray Love - Ye Dua Et Sev",
    "image": "/images/movies/Julia_Roberts_eat_pray_love_-_ye_dua_et_sev.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "2 sa. 13 dk.",
      "Kategori": [
        "Biyografi",
        "Drama"
      ],
      "Oyuncular": [
        "Julia Roberts",
        "Javier Bardem"
      ],
      "Yönetmen": "Ryan Murphy",
      "imdb": "5.8/10",
      "Değerlendirme": "107157",
      "metacritic": "50"
    },
    "paragraf": "Kadınların mutlaka izlemesi gereken filmlerr arasında yer alan Ye Dua Et Sev, bir kadının kendini yeniden keşfetmesini konu alıyor. Farklı kültürler ve yemekler eşliğinde içsel bir yolculuğa çıkmak isteyenler için harika bir seçenek sunuyor. Julia Roberts'ın etkileyici performansı filmi unutulmaz kılıyor."
  },
  {
    "num": "8",
    "title_id": "tt0250494",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-filmbolum-8",
    "name": "Legally Blonde - Bu Nasıl Sarışın",
    "image": "/images/movies/Reese_Witherspoon_legally_blonde_-_bu_nasil_sarisin.jpg",
    "ozellikler": {
      "Yıl": "2001",
      "Süre": "1 sa. 36 dk.",
      "Kategori": [
        "Komedi",
        "Romantik"
      ],
      "Oyuncular": [
        "Reese Witherspoon",
        "Luke Wilson"
      ],
      "Yönetmen": "Robert Luketic",
      "imdb": "6.5/10",
      "Değerlendirme": "253312",
      "metacritic": "59"
    },
    "paragraf": "Moda, hukuk ve komedi dünyasını bir araya getiren Bu Nasıl Sarışın, Reese Witherspoon'un karakteri Elle Woods'un hukuk okulundaki maceralarını anlatıyor. Kadınlar için film önerileri arasında yer alan bu esprili yapım, azim ve kendine inancı temsil ediyor."
  },
  {
    "num": "7",
    "title_id": "tt0458352",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-filmbolum-7",
    "name": "The Devil Wears Prada - Şeytan Marka Giyer",
    "image": "/images/movies/Meryl_Streep_the_devil_wears_prada_-_seytan_marka_giyer.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "1 sa. 49 dk.",
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Oyuncular": [
        "Meryl Streep",
        "Anne Hathaway"
      ],
      "Yönetmen": "David Frankel",
      "imdb": "6.9/10",
      "Değerlendirme": "478648",
      "metacritic": "62"
    },
    "paragraf": "Moda dünyasında azime ve mücadeleye dair etkileyici bir hikaye sunan Şeytan Marka Giyer, Meryl Streep ve Anne Hathaway'in müthiş performanslarıyla göz dolduruyor. Kadınlar için film önerileri arasında, güçlü ve bağımsız kadın figürleriyle ön plana çıkan bir yapım olarak yer alıyor."
  },
  {
    "num": "6",
    "title_id": "tt4846340",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-filmbolum-6",
    "name": "Hidden Figures - Gizli Sayılar",
    "image": "/images/movies/Taraji_P._Henson_hidden_figures_-_gizli_sayilar.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Süre": "2 sa. 7 dk.",
      "Kategori": [
        "Biyografi",
        "Drama"
      ],
      "Oyuncular": [
        "Taraji P. Henson",
        "Octavia Spencer"
      ],
      "Yönetmen": "Theodore Melfi",
      "imdb": "7.8/10",
      "Değerlendirme": "259878",
      "metacritic": "74"
    },
    "paragraf": "Kadınlar için motivasyon filmleri arasında öne çıkan Gizli Sayılar, NASA'da çalışan kadın matematikçilerin gerçek hikayelerini anlatıyor. Kadınların başarıları ve karşılaştıkları engelleri aşarak nasıl fark yarattıkları bu etkileyici filmde gözler önüne seriliyor."
  },
  {
    "num": "5",
    "title_id": "tt2305051",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-filmbolum-5",
    "name": "Wild - Yaban",
    "image": "/images/movies/Reese_Witherspoon_wild_-_yaban.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "1 sa. 55 dk.",
      "Kategori": [
        "Biyografi",
        "Drama"
      ],
      "Oyuncular": [
        "Reese Witherspoon",
        "Laura Dern"
      ],
      "Yönetmen": "Jean-Marc Vallée",
      "imdb": "7.1/10",
      "Değerlendirme": "140352",
      "metacritic": "74"
    },
    "paragraf": "Kadınlar için motivasyon filmleri arasında yer alan Yaban, bir kadının zorlu bir yürüyüş yoluyla kendi içsel huzurunu bulma çabasını ele alıyor. Bu biyografik film, kendi gücünü keşfetmek isteyen kadınlar için ilham dolu bir hikaye sunuyor."
  },
  {
    "num": "4",
    "title_id": "tt0195685",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-filmbolum-4",
    "name": "Erin Brockovich",
    "image": "/images/movies/Julia_Roberts_erin_brockovich.jpg",
    "ozellikler": {
      "Yıl": "2000",
      "Süre": "2 sa. 11 dk.",
      "Kategori": [
        "Biyografi",
        "Drama"
      ],
      "Oyuncular": [
        "Julia Roberts",
        "Albert Finney"
      ],
      "Yönetmen": "Steven Soderbergh",
      "imdb": "7.4/10",
      "Değerlendirme": "224479",
      "metacritic": "73"
    },
    "paragraf": "Julia Roberts'ın Oscar ödüllü performansı Erin Brockovich, güçlü kadın figürleri arasında dikkat çekiyor. Gerçek bir hikayeden uyarlanan bu film, adaletin peşinde koşan bir kadının olağanüstü mücadelesini işliyor. Kadınların izlemesi gereken filmler arasında önemli bir yere sahip."
  },
  {
    "num": "3",
    "title_id": "tt3281548",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-filmbolum-3",
    "name": "Little Women - Küçük Kadınlar",
    "image": "/images/movies/Saoirse_Ronan_little_women_-_kucuk_kadinlar.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Süre": "2 sa. 15 dk.",
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Oyuncular": [
        "Saoirse Ronan",
        "Emma Watson"
      ],
      "Yönetmen": "Greta Gerwig",
      "imdb": "7.8/10",
      "Değerlendirme": "251497",
      "metacritic": "91"
    },
    "paragraf": "Çeşitliliği ve duygusallığı ile bilinen Küçük Kadınlar, dört kız kardeşin hayatını anlatıyor. Kadınların mutlaka izlemesi gereken filmlerr listesinde yerini alıyor. Greta Gerwig'in modern adaptasyonu, yenilikçi bakış açısıyla izleyiciyi etkiliyor."
  },
  {
    "num": "2",
    "title_id": "tt6155172",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-filmbolum-2",
    "name": "Roma",
    "image": "/images/movies/Yalitza_Aparicio_roma.jpg",
    "ozellikler": {
      "Yıl": "2018",
      "Süre": "2 sa. 15 dk.",
      "Kategori": [
        "Drama"
      ],
      "Oyuncular": [
        "Yalitza Aparicio",
        "Marina de Tavira"
      ],
      "Yönetmen": "Alfonso Cuarón",
      "imdb": "7.7/10",
      "Değerlendirme": "170995",
      "metacritic": "96"
    },
    "paragraf": "Roma, Meksiko'daki bir evde hizmetçi olarak çalışan Cleo'nun hikayesini anlatıyor. Alfonso Cuarón'un gözünden kadın dayanışmasının ve gücünün önemini vurgulayan bir başyapıt. Kadınlar için film önerileri içerisinde, güçlü hikayesiyle öne çıkıyor."
  },
  {
    "num": "1",
    "title_id": "tt0104694",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-filmbolum-1",
    "name": "A League of Their Own - Kızlar Sahada",
    "image": "/images/movies/Tom_Hanks_a_league_of_their_own_-_kizlar_sahada.jpg",
    "ozellikler": {
      "Yıl": "1992",
      "Süre": "2 sa. 8 dk.",
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Oyuncular": [
        "Tom Hanks",
        "Geena Davis"
      ],
      "Yönetmen": "Penny Marshall",
      "imdb": "7.3/10",
      "Değerlendirme": "122627",
      "metacritic": "69"
    },
    "paragraf": "Kızlar Sahada, bir kadın beyzbol ligi kurmak için bir araya gelen bir grup güçlü ve kararlı kadını anlatıyor. Kadınlar için motivasyon filmleri arasında yer alan film, dostluk, dayanışma ve hayatta kalma mücadelesi üzerine odaklanıyor. Eğlenceli ve aynı zamanda güçlendirici bir hikaye sunuyor."
  }

];

const ana_resim = "/images/ana_gorseller/kadinlarin-izlemesi-gereken-10-film-kapak.jpg"; //* Eklendi
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