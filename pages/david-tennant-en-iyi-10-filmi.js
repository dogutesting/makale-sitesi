
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DavidTennantEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "david-tennant-en-iyi-10-filmi";
const baslik = "David Tennant en iyi 10 filmi";
const metin = "David Tennant, özellikle Doctor Who gibi dizilerle dünya çapında tanınan bir aktör. Tennant'ın kariyerinde birçok unutulmaz performans bulunuyor. İşte David Tennant en iyi filmleri olan bu liste ile, David Tennant oynadığı filmler arasında öne çıkanları keşfedin.";
const bitis_metin = "Bu yazımızda, David Tennant'ın kariyerinde öne çıkan en iyi 10 filmi inceledik. Bu liste, David Tennant'ın oyunculuk yeteneğini ve geniş filmografisini gözler önüne seriyor. Umarız sizin için faydalı bir rehber olmuştur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["david","tennant","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:15:28+03:00";
const degistirilmeTarihi = "2024-08-16T17:15:28+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1869454",
    "url": "https://enonlar.com/david-tennant-en-iyi-10-filmibolum-10",
    "name": "Good Omens - Kıyamet Gösterisi (Mini Dizi)",
    "image": "/images/movies/David_Tennant_good_omens_-_kiyamet_gosterisi_(mini_dizi).jpg",
    "ozellikler": {
      "Oyuncular": [
        "David Tennant",
        "Michael Sheen"
      ],
      "Kategori": [
        "Fantastik",
        "Komedi"
      ],
      "Yıl": "2019",
      "Süre": "55 dk.",
      "Yönetmen": "Douglas Mackinnon",
      "imdb": "8/10",
      "Değerlendirme": "114579"
    },
    "paragraf": "Good Omens, Neil Gaiman ve Terry Pratchett'ın aynı adlı romanından uyarlanan bir mini dizi. David Tennant, Crowley isimli bir iblis olarak karşımıza çıkıyor. Tennant'ın performansı, mizahı ve karizması ile dikkat çekiyor. David Tennant imdb skoru açısından da iyi bir performans sergilemiştir."
  },
  {
    "num": "9",
    "title_id": "tt2328900",
    "url": "https://enonlar.com/david-tennant-en-iyi-10-filmibolum-9",
    "name": "Mary Queen of Scots - İskoç Kraliçesi Mary",
    "image": "/images/movies/David_Tennant_mary_queen_of_scots_-_iskoc_kralicesi_mary.jpg",
    "ozellikler": {
      "Oyuncular": [
        "David Tennant",
        "Saoirse Ronan",
        "Angela Bain",
        "Richard Cant"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Josie Rourke",
      "imdb": "6.3/10",
      "Değerlendirme": "55872",
      "metacritic": "60"
    },
    "paragraf": "Mary Queen of Scots, İskoçya Kraliçesi Mary'nin hayatını anlatan tarihi bir dram filmidir. David Tennant, John Knox rolüyle güçlü bir oyunculuk sergiler. Bu film, David Tennant'ın oynadığı filmler arasında dramatik unsurlarıyla öne çıkıyor."
  },
  {
    "num": "8",
    "title_id": "tt1438176",
    "url": "https://enonlar.com/david-tennant-en-iyi-10-filmibolum-8",
    "name": "Fright Night - Korku Gecesi",
    "image": "/images/movies/David_Tennant_fright_night_-_korku_gecesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "David Tennant",
        "Colin Farrell",
        "Anton Yelchin"
      ],
      "Kategori": [
        "Korku",
        "Komedi"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Craig Gillespie",
      "imdb": "6.4/10",
      "Değerlendirme": "113989",
      "metacritic": "64"
    },
    "paragraf": "Fright Night, 1985 yapımı klasik korku filminin modern bir yeniden yapımıdır. David Tennant, gösterişli ve çekici bir vampir avcısı olan Peter Vincent rolündedir. Mizah ve korku unsurlarını bir araya getiren bu filmde Tennant'ın performansı oldukça eğlencelidir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/david-tennant-en-iyi-10-filmibolum-7",
    "name": "Casanova",
    "image": "/images/movies/David_Tennant_casanova.jpg",
    "ozellikler": {
        "Oyuncular": [
            "David Tennant",
            "Rose Byrne",
            "Peter O'Toole"
        ],
        "Kategori": [
            "Dram",
            "Romantik"
        ],
        "Yıl": "2005",
        "Süre": "4 bölümlük mini dizi",
        "Yönetmen": "Lasse Hallström",
        "imdb": "7.7/10",
        "Değerlendirme": "5,685",
        "metacritic": "N/A"
    },
    "paragraf": "Casanova, ünlü İtalyan maceraperest Casanova'nın yaşamına dair bir dönemi anlatan dört bölümlük bir mini dizidir. David Tennant, Casanova'nın gençliğini canlandırırken, dizi onun cazibesi ve maceralarını gözler önüne seriyor. David Tennant'ın etkileyici performansı, bu yapımı onun en iyi işlerinden biri yapıyor."
  },
  {
    "num": "6",
    "title_id": "tt1657299",
    "url": "https://enonlar.com/david-tennant-en-iyi-10-filmibolum-6",
    "name": "The Decoy Bride - Aşk ve Gurur",
    "image": "/images/movies/David_Tennant_the_decoy_bride_-_ask_ve_gurur.jpg",
    "ozellikler": {
      "Oyuncular": [
        "David Tennant",
        "Kelly Macdonald",
        "Danny Bage",
        "Dylan Moran"
      ],
      "Kategori": [
        "Romantik Komedi"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 29 dk.",
      "Yönetmen": "Sheree Folkson",
      "imdb": "6.1/10",
      "Değerlendirme": "12691",
      "metacritic": "42"
    },
    "paragraf": "The Decoy Bride, sahte bir gelin hikayesini anlatan eğlenceli bir romantik komedi. David Tennant, ünlü bir yazar olan James Arber rolünde görülüyor. David Tennant oynadığı filmler arasında bulunan bu film, izleyenleri hem güldürüyor hem düşündürüyor."
  },
  {
    "num": "5",
    "title_id": "tt1430626",
    "url": "https://enonlar.com/david-tennant-en-iyi-10-filmibolum-5",
    "name": "The Pirates! In an Adventure with Scientists! - Korsanlar! Bilim Adamları ile Bir Macera!",
    "image": "/images/movies/David_Tennant_the_pirates!_in_an_adventure_with_scientists!_-_korsanlar!_bilim_adamlari_ile_bir_macera!.jpg",
    "ozellikler": {
      "Oyuncular": [
        "David Tennant",
        "Hugh Grant",
        "Martin Freeman"
      ],
      "Kategori": [
        "Animasyon",
        "Macera"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 28 dk.",
      "Yönetmen": "Peter Lord",
      "imdb": "6.7/10",
      "Değerlendirme": "51785",
      "metacritic": "73"
    },
    "paragraf": "The Pirates! In an Adventure with Scientists!, Tennant'ın seslendirme yeteneğini konuşturduğu eğlenceli bir animasyon. David Tennant, Charles Darwin karakterini seslendiriyor. Özellikle çocuklar ve animasyon severlerin ilgisini çeken bu film, Tennant’ın mizahi yeteneklerini gözler önüne seriyor. David Tennant filmleri arasında unutulmaz bir yere sahip."
  },
  {
    "num": "4",
    "title_id": "tt0330373",
    "url": "https://enonlar.com/david-tennant-en-iyi-10-filmibolum-4",
    "name": "Harry Potter and the Goblet of Fire - Harry Potter ve Ateş Kadehi",
    "image": "/images/movies/David_Tennant_harry_potter_and_the_goblet_of_fire_-_harry_potter_ve_ates_kadehi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "David Tennant",
        "Daniel Radcliffe",
        "Eric Sykes",
        "Timothy Spall"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 37 dk.",
      "Yönetmen": "Mike Newell",
      "imdb": "7.7/10",
      "Değerlendirme": "690140",
      "metacritic": "81"
    },
    "paragraf": "Harry Potter ve Ateş Kadehi, Harry Potter serisinin dördüncü filmi olup J.K. Rowling'in kitaplarından uyarlanmıştır. David Tennant, kötü karakter Barty Crouch Jr.'ı canlandırıyor. Tennant'ın, karakterinin karizmatik ama tehlikeli doğasını canlandırışı unutulmaz. David Tennant imdb performansı bu filmde de başarılı."
  },
  {
    "num": "3",
    "title_id": "tt2249364",
    "url": "https://enonlar.com/david-tennant-en-iyi-10-filmibolum-3",
    "name": "Broadchurch",
    "image": "/images/movies/David_Tennant_broadchurch.jpg",
    "ozellikler": {
      "Oyuncular": [
        "David Tennant",
        "Olivia Colman"
      ],
      "Kategori": [
        "Dram",
        "Suç"
      ],
      "Yıl": "2013",
      "Süre": "48 dk.",
      "Yönetmen": "James Strong",
      "imdb": "8.4/10",
      "Değerlendirme": "129454"
    },
    "paragraf": "Broadchurch, küçük bir kasabada işlenen bir cinayeti araştıran dedektiflerin hikayesini anlatan bir suç dizisidir. David Tennant, Dedektif Alec Hardy rolüyle izleyenleri derinden etkiliyor. Birçok ödül kazanan bu dizi, David Tennant'ın kariyerinde önemli bir yer tutuyor."
  },
  {
    "num": "2",
    "title_id": "tt0436992",
    "url": "https://enonlar.com/david-tennant-en-iyi-10-filmibolum-2",
    "name": "Doctor Who",
    "image": "/images/movies/David_Tennant_doctor_who.jpg",
    "ozellikler": {
      "Oyuncular": [
        "David Tennant",
        "Matt Smith",
        "Kim So-hyun",
        "Nam Joo-hyuk"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Yıl": "2005-2010",
      "Süre": "",
      "Yönetmen": "Sang-Hoon Baek",
      "imdb": "7.6/10",
      "Değerlendirme": "2770"
    },
    "paragraf": "Doctor Who, dünyanın en uzun soluklu bilim kurgu dizilerinden biridir. David Tennant, dizide Onuncu Doktor olarak hayat bulmuş ve performansıyla hayranları büyülemiştir. Tennant'ın rolü, David Tennant en iyi filmi listelerinde her zaman yer alıyor."
  },
  {
    "num": "1",
    "title_id": "tt2357547",
    "url": "https://enonlar.com/david-tennant-en-iyi-10-filmibolum-1",
    "name": "Jessica Jones",
    "image": "/images/movies/David_Tennant_jessica_jones.jpg",
    "ozellikler": {
      "Oyuncular": [
        "David Tennant",
        "Krysten Ritter",
        "Rachael Taylor"
      ],
      "Kategori": [
        "Dram",
        "Suç"
      ],
      "Yıl": "2015-2019",
      "Süre": "56 dk.",
      "Yönetmen": "Stephen Surjik",
      "imdb": "7.9/10",
      "Değerlendirme": "228684"
    },
    "paragraf": "Jessica Jones, Netflix'in popüler Marvel dizilerinden biridir. David Tennant, Kilgrave rolüyle dikkat çekici bir performans sergilemiştir. Tennant'ın canlandırdığı bu karakter, izleyenlerin aklında kalıcı bir etki bırakıyor. David Tennant filmleri arasında onun karanlık tarafını gösteriyor."
  }

];

const ana_resim = "/images/ana_gorseller/david-tennant-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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