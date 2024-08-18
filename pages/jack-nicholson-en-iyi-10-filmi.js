
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JackNicholsonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "jack-nicholson-en-iyi-10-filmi";
const baslik = "Jack Nicholson en iyi 10 filmi";
const metin = "Jack Nicholson, Hollywood'un en saygın ve ikonik aktörlerinden biri olmuştur. Kariyeri boyunca birçok unutulmaz performansa imza atan Nicholson, farklı türlerde rollerle izleyicinin karşısına çıkmıştır. Jack Nicholson filmleri, sinema tarihine damga vurmuş yapımlar arasında yer alıyor. İşte Jack Nicholson'un filmografisinden öne çıkan on başyapıtı sizler için derledik.";
const bitis_metin = "Bu makalede, Jack Nicholson'un en iyi filmlerini sizin için sıraladık. Her biri kendi türünde klasikleşmiş bu yapımlar, Nicholson'un eşsiz oyunculuğunu keşfetmek isteyenler için harika bir başlangıç noktası olabilir. Keyifli seyirler dileriz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["jack","nicholson","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:48:39+03:00";
const degistirilmeTarihi = "2024-08-16T16:48:39+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/jack-nicholson-en-iyi-10-filmibolum-10",
    "name": "Something's Gotta Give - Aşk Olsun",
    "image": "/images/movies/Jack_Nicholson_something's_gotta_give_-_ask_olsun.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jack Nicholson",
        "Diane Keaton"
      ],
      "Kategori": [
        "Romantik Komedi"
      ],
      "Yıl": "2003",
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "Nancy Meyers",
      "imdb": "6.7/10",
      "Değerlendirme": "130386",
      "metacritic": "66"
    },
    "paragraf": "Something's Gotta Give, Jack Nicholson'un romantik komedi türündeki yeteneklerini sergilediği en iyi projelerden biri. Filmde, yılların verdiği tecrübe ile aşkı yeniden tanımlayan bir karakteri canlandırıyor. Jack Nicholson IMDb puanları genellikle yüksek olan oyuncular arasında. Aşk Olsun filmindeki performansı izlenmeye değer."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/jack-nicholson-en-iyi-10-filmibolum-9",
    "name": "The Departed - Köstebek",
    "image": "/images/movies/Jack_Nicholson_the_departed_-_kostebek.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jack Nicholson",
        "Leonardo DiCaprio",
        "Matt Damon"
      ],
      "Kategori": [
        "Suç",
        "Gerilim"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 31 dk.",
      "Yönetmen": "Martin Scorsese",
      "imdb": "8.5/10",
      "Değerlendirme": "1438631",
      "metacritic": "85"
    },
    "paragraf": "Martin Scorsese'nin yönettiği The Departed, Jack Nicholson ile suç dünyasının derinliklerine iniyor. Jack Nicholson oynadığı filmler arasında önemli bir yere sahip olan Köstebek, Gerard Costello karakteriyle Nicholson'un kararlı ve korkusuz bir mafya patronu olarak izleri derinleştiriyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/jack-nicholson-en-iyi-10-filmibolum-8",
    "name": "Terms of Endearment - Sevgi Sözcükleri",
    "image": "/images/movies/Jack_Nicholson_terms_of_endearment_-_sevgi_sozcukleri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jack Nicholson",
        "Shirley MacLaine",
        "Debra Winger"
      ],
      "Kategori": [
        "Dram",
        "Komedi"
      ],
      "Yıl": "1983",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "James L. Brooks",
      "imdb": "7.4/10",
      "Değerlendirme": "66320",
      "metacritic": "79"
    },
    "paragraf": "Terms of Endearment, Nicholson'un Oscar ödüllü performansını içeriyor. Film, aile ilişkilerini ve sevginin çeşitli yüzlerini irdeleyen bir başyapıt. Jack Nicholson en iyi filmleri arasında sayılan bu yapımda, onun samimiyeti ve duygu dolu oyunculuğunun mükemmel bir örneğini görebilirsiniz."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/jack-nicholson-en-iyi-10-filmibolum-7",
    "name": "Chinatown - Çin Mahallesi",
    "image": "/images/movies/Jack_Nicholson_chinatown_-_cin_mahallesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jack Nicholson",
        "Faye Dunaway"
      ],
      "Kategori": [
        "Suç",
        "Gizem"
      ],
      "Yıl": "1974",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Roman Polanski",
      "imdb": "8.1/10",
      "Değerlendirme": "354214",
      "metacritic": "92"
    },
    "paragraf": "Roman Polanski'nin klasik filmi Chinatown, Jack Nicholson'un en iyi filmi olarak kabul edilen bir hikaye ile karşımıza çıkıyor. Nicholson, bu filmde J.J. Gittes adlı bir dedektifi canlandırarak izleyiciyi karmaşık bir suç arayışına sürüklüyor. Jack Nicholson IMDb puanlarına bakıldığında, bu yapım onun yeteneklerinin bir kanıtı niteliğindedir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/jack-nicholson-en-iyi-10-filmibolum-6",
    "name": "Batman - Batman",
    "image": "/images/movies/Jack_Nicholson_batman_-_batman.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jack Nicholson",
        "Michael Keaton"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "1989",
      "Süre": "2 sa. 6 dk.",
      "Yönetmen": "Tim Burton",
      "imdb": "7.5/10",
      "Değerlendirme": "408355",
      "metacritic": "69"
    },
    "paragraf": "Tim Burton'un 1989 yapımı Batman filmi, Jack Nicholson'un en iyi Joker performanslarından biriyle öne çıkıyor. Batman'i zorlayan bu karakter, Nicholson'un karizması ve oyunculuk becerisiyle filmin en dikkat çeken unsuru haline gelmiştir. Jack Nicholson filmleri listesinde Batman'in yeri bambaşkadır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/jack-nicholson-en-iyi-10-filmibolum-5",
    "name": "As Good as It Gets - Benden Bu Kadar",
    "image": "/images/movies/Jack_Nicholson_as_good_as_it_gets_-_benden_bu_kadar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jack Nicholson",
        "Helen Hunt"
      ],
      "Kategori": [
        "Romantik Komedi"
      ],
      "Yıl": "1997",
      "Süre": "2 sa. 19 dk.",
      "Yönetmen": "James L. Brooks",
      "imdb": "7.7/10",
      "Değerlendirme": "321671",
      "metacritic": "67"
    },
    "paragraf": "As Good as It Gets, Jack Nicholson'un güçlü bir performans sergilediği romantik komedi türü bir film. Nicholson, obsesif-kompulsif bir yazar olan Melvin karakterine hayat veriyor. Jack Nicholson oynadığı filmler arasında iz bırakan bu yapımda, samimi ve eğlenceli hikayesiyle izleyiciyi büyülemektedir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/jack-nicholson-en-iyi-10-filmibolum-4",
    "name": "Easy Rider - Özgürlük Yolu",
    "image": "/images/movies/Jack_Nicholson_easy_rider_-_ozgurluk_yolu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jack Nicholson",
        "Peter Fonda",
        "Dennis Hopper"
      ],
      "Kategori": [
        "Dram",
        "Macera"
      ],
      "Yıl": "1969",
      "Süre": "1 sa. 35 dk.",
      "Yönetmen": "Dennis Hopper",
      "imdb": "7.2/10",
      "Değerlendirme": "118212",
      "metacritic": "85"
    },
    "paragraf": "Easy Rider, Jack Nicholson'un kariyerinde önemli bir kilometre taşıdır. Film, dünya çapında popüler olmuş ve Nicholson'un dikkatleri üzerine çekmesine yardımcı olmuştur. Jack Nicholson en iyi filmleri arasında sayabileceğimiz bu yapım, izleyicilere özgürlüğü ve bağımsızlığı keşfetme arzusunu aktarır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/jack-nicholson-en-iyi-10-filmibolum-3",
    "name": "The Shining - Cinnet",
    "image": "/images/movies/Jack_Nicholson_the_shining_-_cinnet.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jack Nicholson",
        "Shelley Duvall"
      ],
      "Kategori": [
        "Korku",
        "Gerilim"
      ],
      "Yıl": "1980",
      "Süre": "2 sa. 26 dk.",
      "Yönetmen": "Stanley Kubrick",
      "imdb": "8.4/10",
      "Değerlendirme": "1121969",
      "metacritic": "68"
    },
    "paragraf": "Stanley Kubrick'in yönettiği The Shining, Jack Nicholson'un en ikonik rolleri arasında yer alır. Nicholson'un çılgın bir hale büründüğü Jack Torrance karakteri, Jack Nicholson IMDb sıralamalarında daima üstlerde kalan bir performans olarak dikkat çeker. Gerilim ve dehşeti seyirciye ustaca aktarır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/jack-nicholson-en-iyi-10-filmibolum-2",
    "name": "One Flew Over the Cuckoo's Nest - Guguk Kuşu",
    "image": "/images/movies/Jack_Nicholson_one_flew_over_the_cuckoo's_nest_-_guguk_kusu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jack Nicholson",
        "Louise Fletcher",
        "Michael Berryman",
        "Peter Brocco"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1975",
      "Süre": "2 sa. 13 dk.",
      "Yönetmen": "Milos Forman",
      "imdb": "8.7/10",
      "Değerlendirme": "1082841",
      "metacritic": "84"
    },
    "paragraf": "Guguk Kuşu, Jack Nicholson'un en iyi filmi olarak sıklıkla listelerde üst sıralarda yer almaktadır. Filmde, zihinsel bir hastanede geçen dramın derinliklerine inen bir karakteri canlandırır. Jack Nicholson imdb listelerinde en yüksek reytinge sahip performanslarından birini burada sergiler. Eleştirmenler ve izleyiciler tarafından övgüyle karşılanmıştır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/jack-nicholson-en-iyi-10-filmibolum-1",
    "name": "Five Easy Pieces - Beş Kolay Parça",
    "image": "/images/movies/Jack_Nicholson_five_easy_pieces_-_bes_kolay_parca.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jack Nicholson",
        "Karen Black"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1970",
      "Süre": "1 sa. 38 dk.",
      "Yönetmen": "Bob Rafelson",
      "imdb": "7.4/10",
      "Değerlendirme": "41278",
      "metacritic": "85"
    },
    "paragraf": "Five Easy Pieces, Jack Nicholson'un kariyerini şekillendiren ve ona uluslararası başarı kazandıran filmlerden biridir. Film, bireyselliği ve yaşamın zorluklarını derinlemesine işleyen bir hikayeye sahiptir. Jack Nicholson filmleri arasında unutulmazlar arasında yerini alır ve izleyicilere kendini anlatmayı başarır."
  }

];

const ana_resim = "/images/ana_gorseller/jack-nicholson-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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