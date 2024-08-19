
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EnYuksekImdbPuanli10AnimasyonFilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "en-yuksek-imdb-puanli-10-animasyon-filmi";
const baslik = "En yüksek IMDB puanlı 10 animasyon filmi";
const metin = "Animasyon filmleri, her yaş grubundan insanı büyüleyebilen nadir sanat eserleridir. IMDB puanı yüksek animasyonlar, hem görsel hem de hikaye anlamında kalitelerini ispatlamış yapıtlardır. Bu makalede, imdb puanı yüksek anime filmler arasından seçilen en yüksek imdb puanlı animeleri derledik. Her biri ayrı bir dünya olan bu eserler, izleyiciler üzerinde unutulmaz izler bırakmıştır. Şimdi sizlere IMDb puanına göre en yüksek imdb puanlı animasyon filmleri tanıtmaya başlayalım.";
const bitis_metin = "Bu yazımızda imdb puanı yüksek animeler ile imdb puanı yüksek animasyonları keşfettik. Umarız, bu efsanevi yapıtlar sinema keyfinize keyif katmıştır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["en","yuksek","imdb","puanli","10","animasyon","filmi"]; //! BAK
const kategori = "animasyon"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-26T19:06:19+03:00";
const degistirilmeTarihi = "2024-08-16T22:06:19+03:00";
const addDate = "26.04.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-animasyon-filmi#bolum-10",
    "name": "Bambi",
    "image": "/images/animasyon/bambi.jpg",
    "ozellikler": {
      "Yönetmen": "James Algar, Samuel Armstrong",
      "Oyuncular": [
        "Hardie Albright",
        "Stan Alexander",
        "Bobette Audrey"
      ],
      "Kategori": [
        "Aile",
        "Drama"
      ],
      "Süre": "1 sa. 10 dk.",
      "Yıl": "1942",
      "imdb": "7.3/10",
      "Değerlendirme": "154000"
    },
    "paragraf": "IMDB listesinin 10 numarasında Bambi, bir ormanın yavru geyiği ve hayatın zorlukları ile mücadelesini ele alır. Bu film, en yüksek imdb puanlı animeler listemize nostaljik bir başlangıç yapıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-animasyon-filmi#bolum-9",
    "name": "Lady and the Tramp",
    "image": "/images/animasyon/lady_and_the_tramp.jpg",
    "ozellikler": {
      "Yönetmen": "Clyde Geronimi, Wilfred Jackson, Hamilton Luske",
      "Oyuncular": [
        "Barbara Luddy",
        "Larry Roberts",
        "Peggy Lee"
      ],
      "Kategori": [
        "Romantik",
        "Aile"
      ],
      "Süre": "1 sa. 16 dk.",
      "Yıl": "1955",
      "metascore": "78",
      "imdb": "7.3/10",
      "Değerlendirme": "148000"
    },
    "paragraf": "9. sırada ise Lady and the Tramp var. Bir sokak köpeği ile şımarık bir ev köpeğinin aşkını konu alan bu zarif animasyon, imdb puanı yüksek animasyonlar arasında yer alıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-animasyon-filmi#bolum-8",
    "name": "Beauty and the Beast",
    "image": "/images/animasyon/beauty_and_the_beast.jpg",
    "ozellikler": {
      "Yönetmen": "Gary Trousdale, Kirk Wise",
      "Oyuncular": [
        "Paige O'Hara",
        "Robby Benson",
        "Richard White"
      ],
      "Kategori": [
        "Romantik",
        "Fantazi"
      ],
      "Süre": "1 sa. 24 dk.",
      "Yıl": "1991",
      "metascore": "95",
      "imdb": "8.0/10",
      "Değerlendirme": "480000"
    },
    "paragraf": "8. sıradaki film Beauty and the Beast, masalsı bir hikaye ile imdb puanı yüksek animasyonlar listemize romantik bir dokunuş katıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-animasyon-filmi#bolum-7",
    "name": "Toy Story 3",
    "image": "/images/animasyon/toy_story_3.jpg",
    "ozellikler": {
      "Yönetmen": "Lee Unkrich",
      "Oyuncular": [
        "Tom Hanks",
        "Tim Allen",
        "Joan Cusack"
      ],
      "Kategori": [
        "Komedi",
        "Macera"
      ],
      "Süre": "1 sa. 43 dk.",
      "Yıl": "2010",
      "metascore": "92",
      "imdb": "8.3/10",
      "Değerlendirme": "892000"
    },
    "paragraf": "Toy Story 3, serinin üçüncü filmi olarak, çocukluk oyuncaklarının maceralarını sürdürüyor ve en yüksek imdb puanlı animasyon filmler listesindeki yerini alıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-animasyon-filmi#bolum-6",
    "name": "Up",
    "image": "/images/animasyon/up.jpg",
    "ozellikler": {
      "Yönetmen": "Pete Docter, Bob Peterson",
      "Oyuncular": [
        "Edward Asner",
        "Jordan Nagai",
        "John Ratzenberger"
      ],
      "Kategori": [
        "Macera",
        "Komedi"
      ],
      "Süre": "1 sa. 36 dk.",
      "Yıl": "2009",
      "metascore": "88",
      "imdb": "8.3/10",
      "Değerlendirme": "1100000"
    },
    "paragraf": "Up, yaşlı bir adamın balonlarla uçan eviyle macerasını anlatarak, imdb puanı yüksek animeler listemizde unutulmaz bir iz bırakıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-animasyon-filmi#bolum-5",
    "name": "The Lion King",
    "image": "/images/animasyon/the_lion_king.jpg",
    "ozellikler": {
      "Yönetmen": "Roger Allers, Rob Minkoff",
      "Oyuncular": [
        "Matthew Broderick",
        "Jeremy Irons",
        "James Earl Jones"
      ],
      "Kategori": [
        "Drama",
        "Macera"
      ],
      "Süre": "1 sa. 28 dk.",
      "Yıl": "1994",
      "metascore": "88",
      "imdb": "8.5/10",
      "Değerlendirme": "1100000"
    },
    "paragraf": "The Lion King, Afrika savannasında bir aslanın hikayesini epik bir şekilde anlatmakta ve imdb puanı yüksek anime filmler arasında özel bir yere sahip."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-animasyon-filmi#bolum-4",
    "name": "Spirited Away",
    "image": "/images/animasyon/spirited_away.jpg",
    "ozellikler": {
      "Yönetmen": "Hayao Miyazaki",
      "Oyuncular": [
        "Rumi Hiiragi",
        "Miyu Irino",
        "Mari Natsuki"
      ],
      "Kategori": [
        "Fantazi",
        "Macera"
      ],
      "Süre": "2 sa. 5 dk.",
      "Yıl": "2001",
      "metascore": "96",
      "imdb": "8.6/10",
      "Değerlendirme": "849000"
    },
    "paragraf": "Spirited Away, küçük bir kızın büyülü bir dünyadaki serüvenini anlatarak en yüksek imdb puanlı animasyon filmler listemizde dikkat çekiyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-animasyon-filmi#bolum-3",
    "name": "Your Name",
    "image": "/images/animasyon/your_name.jpg",
    "ozellikler": {
      "Yönetmen": "Makoto Shinkai",
      "Oyuncular": [
        "Ryûnosuke Kamiki",
        "Mone Kamishiraishi"
      ],
      "Kategori": [
        "Drama",
        "Fantazi"
      ],
      "Süre": "1 sa. 46 dk.",
      "Yıl": "2016",
      "metascore": "79",
      "imdb": "8.4/10",
      "Değerlendirme": "320000"
    },
    "paragraf": "Your Name, iki genç arasındaki zaman ve mekanı aşan bağlantıyı ustaca işleyerek, imdb puanı yüksek animeler listemizde üst sıralarda yer alıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-animasyon-filmi#bolum-2",
    "name": "Grave of the Fireflies",
    "image": "/images/animasyon/grave_of_the_fireflies.jpg",
    "ozellikler": {
      "Yönetmen": "Isao Takahata",
      "Oyuncular": [
        "Tsutomu Tatsumi",
        "Ayano Shiraishi"
      ],
      "Kategori": [
        "Drama",
        "Savaş"
      ],
      "Süre": "1 sa. 29 dk.",
      "Yıl": "1988",
      "metascore": "94",
      "imdb": "8.5/10",
      "Değerlendirme": ""
    },
    "paragraf": "Grave of the Fireflies, II. Dünya Savaşı sırasında Japonya'da yaşanan trajediyi ele alarak, imdb puanı yüksek animasyonlar listemizde güçlü bir etki bırakır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/en-yuksek-imdb-puanli-10-animasyon-filmi#bolum-1",
    "name": "Into the Spider-Verse",
    "image": "/images/animasyon/into_the_spider-verse.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Ramsey, Rodney Rothman, Bob Persichetti",
      "Oyuncular": [
        "Shameik Moore",
        "Jake Johnson",
        "Hailee Steinfeld"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "1 sa. 57 dk.",
      "Yıl": "2018",
      "metascore": "87",
      "imdb": "8.4/10",
      "Değerlendirme": ""
    },
    "paragraf": "Into the Spider-Verse çığır açan animasyon teknikleri ve yaratıcı senaryosu ile en yüksek imdb puanlı animasyon filmler listemizin zirvesinde bulunuyor."
  }

];

const ana_resim = "/images/ana_gorseller/en_yuksek_imdb_puanli_10_animasyon_filmi_kapak.jpg" //! SEN DOLDUR
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