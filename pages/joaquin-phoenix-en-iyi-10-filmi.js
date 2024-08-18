
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JoaquinPhoenixEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "joaquin-phoenix-en-iyi-10-filmi";
const baslik = "Joaquin Phoenix en iyi 10 filmi";
const metin = "Joaquin Phoenix, sinema dünyasında mükemmel performanslarıyla tanınan bir aktördür. Onun filmografisi pek çok unutulmaz yapımla dolu. Bugünkü yazımızda Joaquin Phoenix en iyi filmleri ve özellikle Joaquin Phoenix imdb sıralamalarında üst sıralarda yer alan yapımları derledik.";
const bitis_metin = "Joaquin Phoenix'in kariyeri birçok muhteşem performansla doludur. Her biri farklı tür ve konuları işleyen bu yapıtlar, onun çok yönlü bir oyuncu olduğunu göstermektedir. İşte sizler için derlediğimiz Joaquin Phoenix en iyi filmi ve performansları.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["joaquin","phoenix","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:38:50+03:00";
const degistirilmeTarihi = "2024-08-16T16:38:50+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/joaquin-phoenix-en-iyi-10-filmibolum-10",
    "name": "To Die For - Öldüren Cazibe",
    "image": "/images/movies/Joaquin_Phoenix_to_die_for_-_olduren_cazibe.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joaquin Phoenix",
        "Nicole Kidman",
        "Matt Dillon"
      ],
      "Kategori": [
        "Kara Komedi",
        "Dram"
      ],
      "Yıl": "1995",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Gus Van Sant",
      "imdb": "6.8/10",
      "Değerlendirme": "54160",
      "metacritic": "86"
    },
    "paragraf": "To Die For, Joaquin Phoenix filmleri arasında dikkat çeken bir kara komedi-dram filmidir. Nicole Kidman'la başrolü paylaştığı filmde, medyaya olan saplantısı sonucu cinayete kurban gitmiş bir adamı canlandırıyor. Joaquin Phoenix oynadığı filmler arasında erken dönem işlerinden biri."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/joaquin-phoenix-en-iyi-10-filmibolum-9",
    "name": "Gladiator - Gladyatör",
    "image": "/images/movies/Joaquin_Phoenix_gladiator_-_gladyator.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joaquin Phoenix",
        "Russell Crowe"
      ],
      "Kategori": [
        "Tarih",
        "Macera",
        "Dram"
      ],
      "Yıl": "2000",
      "Süre": "2 sa. 35 dk.",
      "Yönetmen": "Ridley Scott",
      "imdb": "8.5/10",
      "Değerlendirme": "1648240",
      "metacritic": "67"
    },
    "paragraf": "Gladiator, Phoenix'in en tanınmış rolleri arasındadır. İmparator Commodus'u canlandırarak Joaquin Phoenix en iyi filmleri listesine dahil olmuştur. Bu film, Joaquin Phoenix imdb sıralamalarında üst sıralarda yer almakta ve En İyi Yardımcı Erkek Oyuncu dalında Oscar adaylığı kazanmıştır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/joaquin-phoenix-en-iyi-10-filmibolum-8",
    "name": "Walk the Line - Sınırları Aşmak",
    "image": "/images/movies/Joaquin_Phoenix_walk_the_line_-_sinirlari_asmak.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joaquin Phoenix",
        "Reese Witherspoon"
      ],
      "Kategori": [
        "Biyografi",
        "Dram",
        "Müzik"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 16 dk.",
      "Yönetmen": "James Mangold",
      "imdb": "7.8/10",
      "Değerlendirme": "268111",
      "metacritic": "72"
    },
    "paragraf": "Joaquin Phoenix'in canlandırdığı efsanevi müzisyen Johnny Cash'in hayatını anlatan bu biyografik film, büyük beğeni toplamış ve aktöre Altın Küre ödülünü kazandırmıştır. Joaquin Phoenix oynadığı filmler arasında özel bir yere sahiptir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/joaquin-phoenix-en-iyi-10-filmibolum-7",
    "name": "The Master - Usta",
    "image": "/images/movies/Joaquin_Phoenix_the_master_-_usta.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joaquin Phoenix",
        "Philip Seymour Hoffman",
        "Price Carson"
      ],
      "Kategori": [
        "Dram",
        "Psikolojik"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "Paul Thomas Anderson",
      "imdb": "7.1/10",
      "Değerlendirme": "187779",
      "metacritic": "86"
    },
    "paragraf": "The Master, Joaquin Phoenix en iyi filmleri arasında yer alır ve aktöre yine Oscar adaylığı getirmiştir. Philip Seymour Hoffman'la başrolü paylaştığı filmde, savaş sonrası bocalayan bir denizciyi canlandırıyor. Joaquin Phoenix imdb puanları içinde üst sıralarda bulunur."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/joaquin-phoenix-en-iyi-10-filmibolum-6",
    "name": "Her - Aşk",
    "image": "/images/movies/Joaquin_Phoenix_her_-_ask.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joaquin Phoenix",
        "Scarlett Johansson (ses)",
        "Lynn Adrianna Freedman"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Romantik"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 6 dk.",
      "Yönetmen": "Spike Jonze",
      "imdb": "8/10",
      "Değerlendirme": "679245",
      "metacritic": "91"
    },
    "paragraf": "Bir yapay zeka sistemine aşık olan bir adamı canlandıran Phoenix, bu filmde etkileyici bir performans sergiliyor. Her, Joaquin Phoenix en iyi filmi olarak gösterilen yapıtlardan biridir ve onun oyunculuk yelpazesini genişlettiği bir eserdir."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/joaquin-phoenix-en-iyi-10-filmibolum-5",
    "name": "You Were Never Really Here - Hiçbir Zaman Burada Değildin",
    "image": "/images/movies/Joaquin_Phoenix_you_were_never_really_here_-_hicbir_zaman_burada_degildin.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joaquin Phoenix",
        "Dante Pereira-Olson"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 29 dk.",
      "Yönetmen": "Lynne Ramsay",
      "imdb": "6.7/10",
      "Değerlendirme": "128864",
      "metacritic": "84"
    },
    "paragraf": "Phoenix, bu filmde travmatik geçmişine rağmen insanları kurtarmaya çalışan bir adamı canlandırıyor. Cannes Film Festivali'nde En İyi Erkek Oyuncu ödülünü kazanmış olan film, Joaquin Phoenix filmleri arasında etkileyici bir yere sahiptir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/joaquin-phoenix-en-iyi-10-filmibolum-4",
    "name": "Joker",
    "image": "/images/movies/Joaquin_Phoenix_joker.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joaquin Phoenix",
        "Robert De Niro"
      ],
      "Kategori": [
        "Suç",
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2019",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Todd Phillips",
      "imdb": "8.4/10",
      "Değerlendirme": "1521566",
      "metacritic": "59"
    },
    "paragraf": "Joaquin Phoenix en iyi filmi içerisinde önemli bir yere sahip olan Joker, ona başrol Oscar ödülünü kazandırmıştır. Filmde Arthur Fleck'in karmaşık karakterini derinlemesine canlandırarak Joaquin Phoenix imdb ile büyük takdir toplamıştır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/joaquin-phoenix-en-iyi-10-filmibolum-3",
    "name": "C'mon C'mon - Seni Dinliyorum",
    "image": "/images/movies/Joaquin_Phoenix_c'mon_c'mon_-_seni_dinliyorum.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joaquin Phoenix",
        "Gaby Hoffmann"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2021",
      "Süre": "1 sa. 49 dk.",
      "Yönetmen": "Mike Mills",
      "imdb": "7.4/10",
      "Değerlendirme": "39581",
      "metacritic": "82"
    },
    "paragraf": "C'mon C'mon, Joaquin Phoenix oynadığı filmler arasında daha yeni olanlardan biri. Filmde güçlü duygusal bağlar kurarak kişisel ve içsel yolculukları işleyen Phoenix, yine başarılı bir performans sergiliyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/joaquin-phoenix-en-iyi-10-filmibolum-2",
    "name": "The Sisters Brothers - Sisters Biraderler",
    "image": "/images/movies/Joaquin_Phoenix_the_sisters_brothers_-_sisters_biraderler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joaquin Phoenix",
        "John C. Reilly"
      ],
      "Kategori": [
        "Komedi",
        "Dram",
        "Macera"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Jacques Audiard",
      "imdb": "6.9/10",
      "Değerlendirme": "71258",
      "metacritic": "78"
    },
    "paragraf": "The Sisters Brothers, Joaquin Phoenix filmleri arasında yer alan bir komedi-dram yapımıdır. Phoenix, John C. Reilly ile birlikte oynadığı filmde, Vahşi Batı'da geçen bir hikaye sunar. Film, izleyiciyi farklı bir atmosfere taşır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/joaquin-phoenix-en-iyi-10-filmibolum-1",
    "name": "Inherent Vice - Gizli Kusur",
    "image": "/images/movies/Joaquin_Phoenix_inherent_vice_-_gizli_kusur.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Joaquin Phoenix",
        "Josh Brolin",
        "Joanna Newsom",
        "Katherine Waterston"
      ],
      "Kategori": [
        "Komedi",
        "Gizem",
        "Suç"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 28 dk.",
      "Yönetmen": "Paul Thomas Anderson",
      "imdb": "6.6/10",
      "Değerlendirme": "111632",
      "metacritic": "81"
    },
    "paragraf": "Joaquin Phoenix en iyi filmleri arasında öne çıkan Inherent Vice, Paul Thomas Anderson'ın yönetmenliğinde çekilmiş bir noir filmidir. Phoenix'in rol aldığı bu film, gizem ve mizah öğelerini dengeli bir şekilde bir araya getiriyor."
  }

];

const ana_resim = "/images/ana_gorseller/joaquin-phoenix-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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