
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function RalphFiennesEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "ralph-fiennes-en-iyi-10-filmi";
const baslik = "Ralph Fiennes en iyi 10 filmi";
const metin = "Ralph Fiennes, olağanüstü performansları ve karakter oyunculuğuyla tanınmış bir aktördür. Kariyeri boyunca birçok unutulmaz filmde rol almıştır. Bu yazımızda, Ralph Fiennes oynadığı filmler arasından seçtiğimiz en iyi 10 yapımı sizlerle paylaşacağız.";
const bitis_metin = "Bu yazımızda Ralph Fiennes'in en iyi 10 filmi üzerinden harika bir yolculuğa çıktık. Ralph Fiennes filmleri, izleyiciyi büyüleyen ve derinlemesine etkileyen hikayeler sunuyor. Siz de bu eşsiz oyunculukları izleyerek büyülenebilirsiniz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["ralph","fiennes","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:51:52+03:00";
const degistirilmeTarihi = "2024-08-16T16:51:52+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/ralph-fiennes-en-iyi-10-filmibolum-10",
    "name": "Wrath of the Titans - Titanların Öfkesi",
    "image": "/images/movies/Ralph_Fiennes_wrath_of_the_titans_-_titanlarin_ofkesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ralph Fiennes",
        "Sam Worthington",
        "Liam Neeson"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 39 dk.",
      "Yönetmen": "Jonathan Liebesman",
      "imdb": "5.7/10",
      "Değerlendirme": "196635",
      "metacritic": "37"
    },
    "paragraf": "Ralph Fiennes'in köklü oyunculuğunu aksiyon dolu bir dünyada sergilediği Wrath of the Titans, mitolojik unsurlarla dolu etkileyici bir devam filmi. Ralph Fiennes filmleri denildiğinde belki de akla ilk gelenlerden değil, ancak bereketli kariyerinde hatırı sayılır bir yeri var."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/ralph-fiennes-en-iyi-10-filmibolum-9",
    "name": "The Invisible Woman - Görünmeyen Kadın",
    "image": "/images/movies/Ralph_Fiennes_the_invisible_woman_-_gorunmeyen_kadin.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ralph Fiennes",
        "Felicity Jones",
        "John Kavanagh"
      ],
      "Kategori": [
        "Biyografi",
        "Drama"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 51 dk.",
      "Yönetmen": "Ralph Fiennes",
      "imdb": "6.1/10",
      "Değerlendirme": "10567",
      "metacritic": "75"
    },
    "paragraf": "Ralph Fiennes, aynı zamanda yönetmen koltuğuna da oturduğu The Invisible Woman'da, Charles Dickens'ı canlandırarak dönemin inceliklerini sahneye taşıyor. Ralph Fiennes oynadığı filmler arasında özel bir yere sahip bu biyografi, izleyiciye edebi bir zaman diliminde büyüleyici bir yolculuk sunuyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/ralph-fiennes-en-iyi-10-filmibolum-8",
    "name": "Great Expectations - Büyük Umutlar",
    "image": "/images/movies/Ralph_Fiennes_great_expectations_-_buyuk_umutlar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ralph Fiennes",
        "Ethan Hawke",
        "Gwyneth Paltrow"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 51 dk.",
      "Yönetmen": "Alfonso Cuarón",
      "imdb": "6.8/10",
      "Değerlendirme": "57315",
      "metacritic": "55"
    },
    "paragraf": "Efsanevi Charles Dickens romanından uyarlanan Great Expectations, Ralph Fiennes'in yeteneğini bir kez daha gözler önüne seriyor. Miss Havisham yerine Magwitch rolüyle dikkat çeken Ralph Fiennes en iyi filmleri arasında gösterilen bu yapım, klasik bir hikayenin güçlü yorumu."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/ralph-fiennes-en-iyi-10-filmibolum-7",
    "name": "Strange Days - Sıra Dışı Günler",
    "image": "/images/movies/Ralph_Fiennes_strange_days_-_sira_disi_gunler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ralph Fiennes",
        "Angela Bassett"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Yıl": "1995",
      "Süre": "2 sa. 25 dk.",
      "Yönetmen": "Kathryn Bigelow",
      "imdb": "7.2/10",
      "Değerlendirme": "79157",
      "metacritic": "66"
    },
    "paragraf": "Strange Days, siberpunk atmosferi ve kehanet dolu hikayesiyle 90'ların dikkat çeken yapımlarından. Ralph Fiennes'in başrolde olduğu bu film, yoğun ve çarpıcı bir deneyim sunarak Ralph Fiennes imdb puanlarına katkıda bulunan önemli işlerden biri olarak öne çıkıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/ralph-fiennes-en-iyi-10-filmibolum-6",
    "name": "The Constant Gardener - Arka Bahçe",
    "image": "/images/movies/Ralph_Fiennes_the_constant_gardener_-_arka_bahce.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ralph Fiennes",
        "Rachel Weisz"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Fernando Meirelles",
      "imdb": "7.3/10",
      "Değerlendirme": "149455",
      "metacritic": "82"
    },
    "paragraf": "The Constant Gardener, Kenya'nın eşsiz manzarasında geçen bir entrika ve aşk öyküsü. Ralph Fiennes'in mahremiyet dolu performansı, filme Ralph Fiennes en iyi filmi etiketini kazandırdı. Bu sürükleyici yapım, izleyiciyi derinden etkileyen konulara değiniyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/ralph-fiennes-en-iyi-10-filmibolum-5",
    "name": "The Grand Budapest Hotel - Büyük Budapeşte Oteli",
    "image": "/images/movies/Ralph_Fiennes_the_grand_budapest_hotel_-_buyuk_budapeste_oteli.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ralph Fiennes",
        "F. Murray Abraham"
      ],
      "Kategori": [
        "Komedi",
        "Macera"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 39 dk.",
      "Yönetmen": "Wes Anderson",
      "imdb": "8.1/10",
      "Değerlendirme": "896880",
      "metacritic": "88"
    },
    "paragraf": "Wes Anderson'un stilize hikaye anlatımı tarzı, Ralph Fiennes'in muhteşem performansıyla birleşiyor. The Grand Budapest Hotel, Fiennes'in Gustave H. rolüyle unutulmaz bir komedi- macera karışımı sunuyor. Ralph Fiennes filmleri içinde belki de en renkli atmosferi barındıran film."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/ralph-fiennes-en-iyi-10-filmibolum-4",
    "name": "Skyfall - Skyfall",
    "image": "/images/movies/Ralph_Fiennes_skyfall_-_skyfall.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ralph Fiennes",
        "Daniel Craig",
        "Judi Dench"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 23 dk.",
      "Yönetmen": "Sam Mendes",
      "imdb": "7.8/10",
      "Değerlendirme": "736269",
      "metacritic": "81"
    },
    "paragraf": "Skyfall, James Bond serisinin heyecan dolu bir bölümüdür ve Ralph Fiennes'in varlığı bu filmi daha da değerli kılıyor. Fiennes'in M rolüne getirdiği derinlik, Ralph Fiennes oynadığı filmler arasında Skyfall'un özel bir yer edinmesini sağlıyor. Aksiyon ve gerilim dolu film, izleyicinin beklentilerini fazlasıyla karşılıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/ralph-fiennes-en-iyi-10-filmibolum-3",
    "name": "Harry Potter and the Deathly Hallows: Part 2 - Harry Potter ve Ölüm Yadigarları: Bölüm 2",
    "image": "/images/movies/Ralph_Fiennes_harry_potter_and_the_deathly_hallows__part_2_-_harry_potter_ve_olum_yadigarlari__bolum_2.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ralph Fiennes",
        "Michael Gambon"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2011",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "David Yates",
      "imdb": "8.1/10",
      "Değerlendirme": "960297",
      "metacritic": "85"
    },
    "paragraf": "Ralph Fiennes'in canlandırdığı Voldemort, Harry Potter serisinin unutulmaz kötü karakteridir. Serinin son filmi olan Harry Potter and the Deathly Hallows: Part 2, Fiennes'in oyunculuğuyla Ralph Fiennes en iyi filmleri arasında üst sıralarda yer alıyor. Fantastik dünyanın büyüsüne kapılmamak elde değil."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/ralph-fiennes-en-iyi-10-filmibolum-2",
    "name": "The English Patient - İngiliz Hasta",
    "image": "/images/movies/Ralph_Fiennes_the_english_patient_-_ingiliz_hasta.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ralph Fiennes",
        "Juliette Binoche"
      ],
      "Kategori": [
        "Romantik",
        "Drama"
      ],
      "Yıl": "1996",
      "Süre": "2 sa. 42 dk.",
      "Yönetmen": "Anthony Minghella",
      "imdb": "7.4/10",
      "Değerlendirme": "203624",
      "metacritic": "86"
    },
    "paragraf": "The English Patient, savaş ve aşkın trajik kesişimini anlatıyor. Ralph Fiennes'in performansı, filme birçok ödül ve övgü kazandırdı. Romantik hikayeleri sevenlerin Ralph Fiennes imdb puanını en çok artıran filmler arasında gördüğü bu başyapıt, izlenmeyi hak eden bir klasik."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/ralph-fiennes-en-iyi-10-filmibolum-1",
    "name": "Schindler's List - Schindler'in Listesi",
    "image": "/images/movies/Ralph_Fiennes_schindler's_list_-_schindler'in_listesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ralph Fiennes",
        "Liam Neeson",
        "Ben Kingsley"
      ],
      "Kategori": [
        "Dram",
        "Savaş"
      ],
      "Yıl": "1993",
      "Süre": "3 sa. 15 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "9/10",
      "Değerlendirme": "1468938",
      "metacritic": "95"
    },
    "paragraf": "Schindler's List, Ralph Fiennes'in kariyerinde müthiş bir dönüm noktasıdır. Nazi subayı Amon Goeth rolünde parlayan Fiennes, güçlü ve akılda kalıcı bir performans sergiledi. Bu destansı yapım, Ralph Fiennes en iyi filmi olarak tanınmakta ve onun yeteneklerini geniş bir kitleyle buluşturmuştur."
  }

];

const ana_resim = "/images/ana_gorseller/ralph-fiennes-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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