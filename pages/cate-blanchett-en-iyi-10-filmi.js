
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function CateBlanchettEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "cate-blanchett-en-iyi-10-filmi";
const baslik = "Cate Blanchett en iyi 10 filmi";
const metin = "Oscar ödüllü oyuncu Cate Blanchett, sinema dünyasına unutulmaz filmler kazandırmıştır. İşte Cate Blanchett filmleri arasından seçtiğimiz Cate Blanchett en iyi filmleri listesiyle karşınızdayız. Cate Blanchett izlenmesi gereken filmleri arasından en iyi yapımları sizler için bir araya getirdik.";
const bitis_metin = "Bu makalemizde, Cate Blanchett'in en iyi filmi olarak tanımlayabileceğimiz eserlerden bahsettik. Umarız izleme listenize yeni ve değerli eklemeler yapmanıza yardımcı olmuştur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["cate","blanchett","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T19:23:19+03:00";
const degistirilmeTarihi = "2024-05-25T19:23:19+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/cate-blanchett-en-iyi-10-filmi#bolum-10",
    "name": "Lord of the Rings: The Return of the King - Yüzüklerin Efendisi: Kralın Dönüşü",
    "image": "/images/movies/cate_blanchett_lord_of_the_rings_the_return_of_the_king_-_yuzuklerin_efendisi_kralin_donusu.png",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Elijah Wood",
        "Viggo Mortensen",
        "Ian McKellen",
        "Cate Blanchett"
      ],
      "Kategori": [
        "Fantastik",
        "Macera",
        "Drama"
      ],
      "Süre": "3 sa. 21 dk.",
      "Yıl": "2003",
      "imdb": "9.0/10",
      "Değerlendirme": "2000000"
    },
    "paragraf": "Cate Blanchett en iyi filmi listemizin zirvesinde, yıldızlarla dolu, epik bir serinin büyüleyici finali yer alıyor. 'Kralın Dönüşü', muazzam bir görsel şölen sunarak, Blanchett'in performansıyla unutulmaz bir deneyime dönüşüyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/cate-blanchett-en-iyi-10-filmi#bolum-9",
    "name": "Lord of the Rings: The Fellowship of the Ring - Yüzüklerin Efendisi: Yüzük Kardeşliği",
    "image": "/images/movies/cate_blanchett_lord_of_the_rings_the_fellowship_of_the_ring_-_yuzuklerin_efendisi_yuzuk_kardesligi.png",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Elijah Wood",
        "Ian McKellen",
        "Viggo Mortensen",
        "Cate Blanchett"
      ],
      "Kategori": [
        "Fantastik",
        "Macera",
        "Drama"
      ],
      "Süre": "2 sa. 58 dk.",
      "Yıl": "2001",
      "imdb": "8.9/10",
      "Değerlendirme": "2000000"
    },
    "paragraf": "Bu listedeki bir diğer Cate Blanchett filmi, serinin ilk filmi olan 'Yüzük Kardeşliği'. Film, Blanchett'in etkileyici performansını ve yaratıcı sinematografiyi bir araya getiriyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/cate-blanchett-en-iyi-10-filmi#bolum-8",
    "name": "Blue Jasmine - Mavi Yasemin",
    "image": "/images/movies/cate_blanchett_blue_jasmine_-_mavi_yasemin.jpg",
    "ozellikler": {
      "Yönetmen": "Woody Allen",
      "Oyuncular": [
        "Cate Blanchett",
        "Alec Baldwin",
        "Sally Hawkins"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "1 sa. 38 dk.",
      "Yıl": "2013",
      "imdb": "7.3/10",
      "Değerlendirme": "213000"
    },
    "paragraf": "Blanchett'in Oscar'ı kazandığı performansı ile göz doldurduğu 'Mavi Yasemin', karmaşık karakter tasvirleri ve güçlü hikayesi ile ön plana çıkıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/cate-blanchett-en-iyi-10-filmi#bolum-7",
    "name": "The Aviator - Havacı",
    "image": "/images/movies/cate_blanchett_the_aviator_-_havaci.jpg",
    "ozellikler": {
      "Yönetmen": "Martin Scorsese",
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Cate Blanchett",
        "Kate Beckinsale"
      ],
      "Kategori": [
        "Biyografi",
        "Drama"
      ],
      "Süre": "2 sa. 50 dk.",
      "Yıl": "2004",
      "imdb": "7.5/10",
      "Değerlendirme": "385000"
    },
    "paragraf": "Cate Blanchett filmleri arasında önemli bir yere sahip olan 'Havacı', Blanchett'in Katharine Hepburn olarak sergilediği performansıyla dikkat çekiyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/cate-blanchett-en-iyi-10-filmi#bolum-6",
    "name": "Elizabeth: The Golden Age - Elizabeth: Altın Çağ",
    "image": "/images/movies/cate_blanchett_elizabeth_the_golden_age_-_elizabeth_altin_cag.jpg",
    "ozellikler": {
      "Yönetmen": "Shekhar Kapur",
      "Oyuncular": [
        "Cate Blanchett",
        "Clive Owen",
        "Geoffrey Rush"
      ],
      "Kategori": [
        "Biyografi",
        "Drama",
        "Tarih"
      ],
      "Süre": "1 sa. 54 dk.",
      "Yıl": "2007",
      "imdb": "6.8/10",
      "Değerlendirme": "75000"
    },
    "paragraf": "Cate Blanchett, Kraliçe Elizabeth I olarak ikinci kez karşımıza çıktığı bu filmde, tarihi bir figürün derinliklerine iniyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/cate-blanchett-en-iyi-10-filmi#bolum-5",
    "name": "Carol",
    "image": "/images/movies/cate_blanchett_carol.jpg",
    "ozellikler": {
      "Yönetmen": "Todd Haynes",
      "Oyuncular": [
        "Cate Blanchett",
        "Rooney Mara"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Süre": "1 sa. 58 dk.",
      "Yıl": "2015",
      "imdb": "7.2/10",
      "Değerlendirme": "143000"
    },
    "paragraf": "Aşk hikayesi 'Carol' ile Blanchett, zengin ve karmaşık bir karakter portresi çiziyor ve izleyiciyi derinden etkiliyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/cate-blanchett-en-iyi-10-filmi#bolum-4",
    "name": "I'm Not There - Orada Değilim",
    "image": "/images/movies/cate_blanchett_i_m_not_there_-_orada_degilim.jpg",
    "ozellikler": {
      "Yönetmen": "Todd Haynes",
      "Oyuncular": [
        "Cate Blanchett",
        "Heath Ledger",
        "Christian Bale"
      ],
      "Kategori": [
        "Drama",
        "Müzik",
        "Biyografi"
      ],
      "Süre": "2 sa. 15 dk.",
      "Yıl": "2007",
      "imdb": "6.8/10",
      "Değerlendirme": "61000"
    },
    "paragraf": "Bob Dylan'ı canlandırdığı 'Orada Değilim'de Blanchett, cinsiyetler arası geçişte sınırları zorlayan bir performans sergiliyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/cate-blanchett-en-iyi-10-filmi#bolum-3",
    "name": "The Curious Case of Benjamin Button - Benjamin Button'ın Tuhaf Hikayesi",
    "image": "/images/movies/cate_blanchett_the_curious_case_of_benjamin_button_-_benjamin_button_in_tuhaf_hikayesi.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Brad Pitt",
        "Cate Blanchett",
        "Tilda Swinton"
      ],
      "Kategori": [
        "Drama",
        "Fantastik",
        "Romantik"
      ],
      "Süre": "2 sa. 46 dk.",
      "Yıl": "2008",
      "imdb": "7.8/10",
      "Değerlendirme": "697000"
    },
    "paragraf": "Blanchett bu filmde zamanı tersine yaşayan bir adamın sevgilisi rolünde, duygusal derinlik sağlayarak hikayeye büyü katıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/cate-blanchett-en-iyi-10-filmi#bolum-2",
    "name": "Hanna",
    "image": "/images/movies/cate_blanchett_hanna.jpg",
    "ozellikler": {
      "Yönetmen": "Joe Wright",
      "Oyuncular": [
        "Saoirse Ronan",
        "Cate Blanchett",
        "Eric Bana"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim",
        "Macera"
      ],
      "Süre": "1 sa. 51 dk.",
      "Yıl": "2011",
      "imdb": "6.7/10",
      "Değerlendirme": "207000"
    },
    "paragraf": "Yoğun aksiyon ve gerilim dolu 'Hanna'da Blanchett, kararlı bir hedefi olan bir antagonist olarak parlıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/cate-blanchett-en-iyi-10-filmi#bolum-1",
    "name": "The Shipping News - Gemi Haberleri",
    "image": "/images/movies/cate_blanchett_the_shipping_news_-_gemi_haberleri.jpg",
    "ozellikler": {
      "Yönetmen": "Lasse Hallström",
      "Oyuncular": [
        "Kevin Spacey",
        "Julianne Moore",
        "Judi Dench",
        "Cate Blanchett"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "1 sa. 51 dk.",
      "Yıl": "2001",
      "imdb": "6.7/10",
      "Değerlendirme": "34000"
    },
    "paragraf": "Listemizin başında, Blanchett'in iz bırakan bir yan karakteri canlandırdığı, derinlemesine karakter çalışması sunan 'Gemi Haberleri' bulunuyor."
  }

];

const ana_resim = "/images/ana_gorseller/cate_blanchett_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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