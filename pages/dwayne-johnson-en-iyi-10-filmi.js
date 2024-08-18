
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DwayneJohnsonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "dwayne-johnson-en-iyi-10-filmi";
const baslik = "Dwayne Johnson en iyi 10 filmi";
const metin = "Dwayne Johnson, Hollywood'un en tanınmış yüzlerinden biri olarak aksiyon ve komedi türlerinde izleyicilerin sevgisini kazanmıştır. Bu yazımızda, Dwayne Johnson en iyi filmlerini derleyerek, onun kariyerinin en parlak anlarını ortaya koyuyoruz. İşte o filmler.";
const bitis_metin = "Bu yazımızda Dwayne Johnson oynadığı filmlerden en iyi 10 tanesini sıraladık. Her biri, farklı türlerde ve farklı hikayelerle izleyicilere eşsiz deneyimler sunuyor. Umarız izlerken en az bizim kadar keyif alırsınız.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["dwayne","johnson","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:40:33+03:00";
const degistirilmeTarihi = "2024-08-16T16:40:33+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/dwayne-johnson-en-iyi-10-filmibolum-10",
    "name": "Journey 2: The Mysterious Island - Gizemli Adaya Yolculuk 2",
    "image": "/images/movies/Dwayne_Johnson_journey_2__the_mysterious_island_-_gizemli_adaya_yolculuk_2.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Dwayne Johnson",
        "Josh Hutcherson",
        "Michael Caine"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Komedi"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 34 dk.",
      "Yönetmen": "Brad Peyton",
      "imdb": "5.7/10",
      "Değerlendirme": "113474",
      "metacritic": "41"
    },
    "paragraf": "Dwayne Johnson filmleri arasında kendine has bir yere sahip olan 'Journey 2: The Mysterious Island', macera ve aksiyonu birleştiren eğlenceli bir yapım. Dwayne Johnson oynadığı filmlerden biri olan bu yapımda, fantastik maceralara katılmaya hazırlanın."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/dwayne-johnson-en-iyi-10-filmibolum-9",
    "name": "Central Intelligence - Merkez İstihbarat",
    "image": "/images/movies/Dwayne_Johnson_central_intelligence_-_merkez_istihbarat.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Dwayne Johnson",
        "Kevin Hart"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Rawson Marshall Thurber",
      "imdb": "6.3/10",
      "Değerlendirme": "217262",
      "metacritic": "52"
    },
    "paragraf": "'Central Intelligence' filmi, Dwayne Johnson'ın en iyi filmleri arasında komedi yapısıyla dikkat çekiyor. Johnson ve Kevin Hart'ın uyumu, izleyicilere bol kahkaha sunuyor. Dwayne Johnson en iyi filmi seçilmesi, özellikle komik sahneleri ile mümkün."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/dwayne-johnson-en-iyi-10-filmibolum-8",
    "name": "Jumanji: The Next Level - Jumanji: Yeni Seviye",
    "image": "/images/movies/Dwayne_Johnson_jumanji__the_next_level_-_jumanji__yeni_seviye.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Dwayne Johnson",
        "Jack Black",
        "Kevin Hart"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Komedi"
      ],
      "Yıl": "2019",
      "Süre": "2 sa. 3 dk.",
      "Yönetmen": "Jake Kasdan",
      "imdb": "6.7/10",
      "Değerlendirme": "289514",
      "metacritic": "58"
    },
    "paragraf": "'Jumanji: The Next Level', Dwayne Johnson imdb listelerinde yükselmiş bir film olarak karşımıza çıkıyor. Devam filmi olması nedeniyle beklentileri karşılıyor ve oyuncuların performansıyla beğeni topluyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/dwayne-johnson-en-iyi-10-filmibolum-7",
    "name": "The Rundown - Büyük Tehlike",
    "image": "/images/movies/Dwayne_Johnson_the_rundown_-_buyuk_tehlike.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Dwayne Johnson",
        "Seann William Scott"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2003",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Peter Berg",
      "imdb": "6.7/10",
      "Değerlendirme": "143881",
      "metacritic": "59"
    },
    "paragraf": "'The Rundown', Johnson'un aksiyon filmlerine olan yatkınlığını bir kez daha ortaya koyuyor. Dwayne Johnson oynadığı filmler arasında iz bırakmış bir yapım olarak macera dolu sahneleriyle izleyiciyi mest ediyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/dwayne-johnson-en-iyi-10-filmibolum-6",
    "name": "Fast Five - Hızlı ve Öfkeli 5: Rio Soygunu",
    "image": "/images/movies/Dwayne_Johnson_fast_five_-_hizli_ve_ofkeli_5__rio_soygunu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Dwayne Johnson",
        "Vin Diesel",
        "Paul Walker"
      ],
      "Kategori": [
        "Aksiyon",
        "Suç",
        "Gerilim"
      ],
      "Yıl": "2011",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Justin Lin",
      "imdb": "7.3/10",
      "Değerlendirme": "410806",
      "metacritic": "66"
    },
    "paragraf": "'Fast Five', Dwayne Johnson imdb sıralamalarında yükselen bir film olmakla kalmayıp, Hızlı ve Öfkeli serisine yeni bir soluk kazandırdı. Johnson'ın katılımıyla büyük bir aksiyon serüvenine dönüştü."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/dwayne-johnson-en-iyi-10-filmibolum-5",
    "name": "Moana - Moana",
    "image": "/images/movies/Dwayne_Johnson_moana_-_moana.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Dwayne Johnson",
        "Auli'i Cravalho"
      ],
      "Kategori": [
        "Animasyon",
        "Macera",
        "Komedi"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Ron Clements",
      "imdb": "7.6/10",
      "Değerlendirme": "387441",
      "metacritic": "81"
    },
    "paragraf": "'Moana', Dwayne Johnson en iyi filmleri arasında benzersiz bir yere sahip olarak animasyon dünyasında izleyicilere ulaşıyor. Johnson'ın seslendirme performansı, filmi daha da çekici hale getiriyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/dwayne-johnson-en-iyi-10-filmibolum-4",
    "name": "Jumanji: Welcome to the Jungle - Jumanji: Vahşi Orman",
    "image": "/images/movies/Dwayne_Johnson_jumanji__welcome_to_the_jungle_-_jumanji__vahsi_orman.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Dwayne Johnson",
        "Jack Black",
        "Kevin Hart"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Komedi"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "Jake Kasdan",
      "imdb": "7/10",
      "Değerlendirme": "457123",
      "metacritic": "58"
    },
    "paragraf": "'Jumanji: Welcome to the Jungle', Dwayne Johnson en iyi filmi olarak değerlendirilmesinin yanı sıra, izleyicilere unutulmaz bir macera sunuyor. Dinamik oyuncu kadrosu ve sürükleyici hikayesiyle izlenmeye değer."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/dwayne-johnson-en-iyi-10-filmibolum-3",
    "name": "San Andreas - San Andreas Fayı",
    "image": "/images/movies/Dwayne_Johnson_san_andreas_-_san_andreas_fayi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Dwayne Johnson",
        "Carla Gugino"
      ],
      "Kategori": [
        "Aksiyon",
        "Dram"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 54 dk.",
      "Yönetmen": "Brad Peyton",
      "imdb": "6.1/10",
      "Değerlendirme": "259840",
      "metacritic": "43"
    },
    "paragraf": "'San Andreas', aksiyon ve dram unsurlarıyla Dwayne Johnson filmleri listesinde önemli bir yer tutuyor. Johnson, afet sahneleri ve doğaüstü mücadelelerdeki başarısıyla izleyicileri ekrana kitlemeyi başarıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/dwayne-johnson-en-iyi-10-filmibolum-2",
    "name": "Furious 7 - Hızlı ve Öfkeli 7",
    "image": "/images/movies/Dwayne_Johnson_furious_7_-_hizli_ve_ofkeli_7.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Dwayne Johnson",
        "Paul Walker",
        "Vin Diesel"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 17 dk.",
      "Yönetmen": "James Wan",
      "imdb": "7.1/10",
      "Değerlendirme": "418156",
      "metacritic": "67"
    },
    "paragraf": "'Furious 7', Dwayne Johnson filmleri arasında tam bir aksiyon bombası. Johnson'un performansı ve heyecan verici araba kovalamacaları, izleyiciler için unutulmaz anlar sunuyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/dwayne-johnson-en-iyi-10-filmibolum-1",
    "name": "Fast & Furious Presents: Hobbs & Shaw - Hızlı ve Öfkeli: Hobbs ve Shaw",
    "image": "/images/movies/Dwayne_Johnson_fast_&_furious_presents__hobbs_&_shaw_-_hizli_ve_ofkeli__hobbs_ve_shaw.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Dwayne Johnson",
        "Jason Statham"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Yıl": "2019",
      "Süre": "2 sa. 17 dk.",
      "Yönetmen": "David Leitch",
      "imdb": "6.5/10",
      "Değerlendirme": "239479",
      "metacritic": "60"
    },
    "paragraf": "'Fast & Furious Presents: Hobbs & Shaw', Dwayne Johnson en iyi filmi olarak aksiyon ve komediyi harmanlıyor. Dwayne Johnson oynamış olduğu bu yapım, izleyiciye keyifli dakikalar yaşatıyor ve büyük beğeni topluyor."
  }

];

const ana_resim = "/images/ana_gorseller/dwayne-johnson-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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