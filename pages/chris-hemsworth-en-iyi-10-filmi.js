
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ChrisHemsworthEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "chris-hemsworth-en-iyi-10-filmi";
const baslik = "Chris Hemsworth en iyi 10 filmi";
const metin = "Chris Hemsworth, aksiyon ve bilim kurgu türlerinde pek çok başarılı projede yer almış bir aktördür. Chris Hemsworth filmleri özellikle görsel efektler ve dikkat çekici hikayeleriyle bilinir. İşte Chris Hemsworth en iyi filmleri ve en dikkat çekici performanslarını sergilediği yapımları derledik.";
const bitis_metin = "Bu yazımızda Chris Hemsworth'un en iyi performanslarını sergilediği filmleri sizler için sıraladık. Chris Hemsworth'un film kariyerine hayran olanlar, bu listeyle unutulmaz anları tekrar yaşayabilir. İzlemediyseniz, şimdi tam zamanı!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["chris","hemsworth","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:39:38+03:00";
const degistirilmeTarihi = "2024-08-16T16:39:38+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt2717822",
    "url": "https://enonlar.com/chris-hemsworth-en-iyi-10-filmi#bolum-10",
    "name": "Blackhat - Hacker",
    "image": "/images/movies/Chris_Hemsworth_blackhat_-_hacker.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Hemsworth",
        "Viola Davis",
        "Leehom Wang"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 13 dk.",
      "Yönetmen": "Michael Mann",
      "imdb": "5.5/10",
      "Değerlendirme": "64911",
      "metacritic": "52"
    },
    "paragraf": "Blackhat, Chris Hemsworth'un siber suç dünyasında yetenekli bir hackerı canlandırdığı yoğun bir gerilim filmi. Teknolojiyi aksiyona dönüştüren bu yapım, Chris Hemsworth oynadığı filmler arasında aksiyonu bol ve tempolu bir seçenek. Chris Hemsworth filmleri arasında farklı bir yere sahip."
  },
  {
    "num": "9",
    "title_id": "tt2283336",
    "url": "https://enonlar.com/chris-hemsworth-en-iyi-10-filmi#bolum-9",
    "name": "Men in Black: International - Siyah Giyen Adamlar: Global Tehdit",
    "image": "/images/movies/Chris_Hemsworth_men_in_black__international_-_siyah_giyen_adamlar__global_tehdit.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Hemsworth",
        "Tessa Thompson"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Komedi"
      ],
      "Yıl": "2019",
      "Süre": "1 sa. 54 dk.",
      "Yönetmen": "F. Gary Gray",
      "imdb": "5.6/10",
      "Değerlendirme": "149140",
      "metacritic": "38"
    },
    "paragraf": "Men in Black: International, Chris Hemsworth'un ikonik 'Siyah Giyen Adamlar' serisinin bir parçası olduğu ve uzaylılarla ilgili maceralarla dolu bir yapım. Chris Hemsworth en iyi filmi kategorisinde değerlendirilebilecek bu film, eğlenceli ve dinamik bir hikaye sunuyor."
  },
  {
    "num": "8",
    "title_id": "tt1289401",
    "url": "https://enonlar.com/chris-hemsworth-en-iyi-10-filmi#bolum-8",
    "name": "Ghostbusters - Hayalet Avcıları",
    "image": "/images/movies/Chris_Hemsworth_ghostbusters_-_hayalet_avcilari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Hemsworth",
        "Melissa McCarthy",
        "Bill Murray",
        "Dan Aykroyd"
      ],
      "Kategori": [
        "Komedi",
        "Bilim Kurgu"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 45 dk.",
      "Yönetmen": "Ivan Reitman",
      "imdb": "7.8/10",
      "Değerlendirme": "456995",
      "metacritic": "71"
    },
    "paragraf": "Ghostbusters, Chris Hemsworth'un mizahi yeteneklerini sergilediği bir yeniden yapım filmi. Filmde, hayaletlerle dolu bir dünyada geçen komik anlar yer alıyor. Chris Hemsworth imdb sıralamalarında da film, izleyenlerden takdir topluyor."
  },
  {
    "num": "7",
    "title_id": "tt1979320",
    "url": "https://enonlar.com/chris-hemsworth-en-iyi-10-filmi#bolum-7",
    "name": "Rush - Zafere Hücum",
    "image": "/images/movies/Chris_Hemsworth_rush_-_zafere_hucum.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Hemsworth",
        "Daniel Brühl"
      ],
      "Kategori": [
        "Biyografi",
        "Dram",
        "Spor"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 3 dk.",
      "Yönetmen": "Ron Howard",
      "imdb": "8.1/10",
      "Değerlendirme": "519454",
      "metacritic": "74"
    },
    "paragraf": "Rush, Chris Hemsworth'un yarış pilotu James Hunt'ı canlandırdığı bir biyografi filmi. Gerçek bir hikayeden uyarlanan dramatik anlatımı ve etkileyici performanslarıyla öne çıkıyor. Chris Hemsworth oynadığı filmler arasında etkileyici bir drama olarak bilinir."
  },
  {
    "num": "6",
    "title_id": "tt1259521",
    "url": "https://enonlar.com/chris-hemsworth-en-iyi-10-filmi#bolum-6",
    "name": "The Cabin in the Woods - Dehşet Kapanı",
    "image": "/images/movies/Chris_Hemsworth_the_cabin_in_the_woods_-_dehset_kapani.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Hemsworth",
        "Kristen Connolly"
      ],
      "Kategori": [
        "Korku",
        "Gizem"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 35 dk.",
      "Yönetmen": "Drew Goddard",
      "imdb": "7/10",
      "Değerlendirme": "456763",
      "metacritic": "72"
    },
    "paragraf": "The Cabin in the Woods, hem korku hem de gizem türlerinde sıradışı bir yapım. Chris Hemsworth filmleri arasında farklı bir deneyim sunan film, beklenmedik olaylarla dolu. Chris Hemsworth en iyi filmleri listesinde ilginç bir yere sahip."
  },
  {
    "num": "5",
    "title_id": "tt0796366",
    "url": "https://enonlar.com/chris-hemsworth-en-iyi-10-filmi#bolum-5",
    "name": "Star Trek - Uzay Yolu",
    "image": "/images/movies/Chris_Hemsworth_star_trek_-_uzay_yolu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Hemsworth",
        "Chris Pine",
        "Leonard Nimoy",
        "William Shatner"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Yıl": "2009",
      "Süre": "50 dk.",
      "Yönetmen": "Marc Daniels",
      "imdb": "8.4/10",
      "Değerlendirme": "94190"
    },
    "paragraf": "Star Trek, bilim kurgu türünün klasikleri arasında yer alan bir film ve Chris Hemsworth'un da kadrosunda yer aldığı etkileyici bir başlangıç hikayesi sunmakta. Chris Hemsworth imdb verileri de filmle oldukça ön plana çıkıyor."
  },
  {
    "num": "4",
    "title_id": "tt0800369",
    "url": "https://enonlar.com/chris-hemsworth-en-iyi-10-filmi#bolum-4",
    "name": "Thor",
    "image": "/images/movies/Chris_Hemsworth_thor.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Hemsworth",
        "Natalie Portman"
      ],
      "Kategori": [
        "Aksiyon",
        "Fantastik"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Kenneth Branagh",
      "imdb": "7/10",
      "Değerlendirme": "909501",
      "metacritic": "57"
    },
    "paragraf": "Thor, Chris Hemsworth'un belki de en çok tanındığı karaktere hayat verdiği film. Aksiyon ve fantastik unsurlar dolu Marvel Evreni'nde başarılı bir performans sergiliyor. Chris Hemsworth en iyi filmi haline gelen bu yapım, büyük beğeni topladı."
  },
  {
    "num": "3",
    "title_id": "tt0848228",
    "url": "https://enonlar.com/chris-hemsworth-en-iyi-10-filmi#bolum-3",
    "name": "The Avengers - Yenilmezler",
    "image": "/images/movies/Chris_Hemsworth_the_avengers_-_yenilmezler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Hemsworth",
        "Robert Downey Jr.",
        "Chris Evans"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 23 dk.",
      "Yönetmen": "Joss Whedon",
      "imdb": "8/10",
      "Değerlendirme": "1472748",
      "metacritic": "69"
    },
    "paragraf": "The Avengers, ikonik süper kahramanların bir araya geldiği ve Chris Hemsworth'un Thor olarak yer aldığı aksiyon dolu bir Marvel filmi. Chris Hemsworth oynadığı filmler arasında belki de en bilinenlerden biri."
  },
  {
    "num": "2",
    "title_id": "tt3501632",
    "url": "https://enonlar.com/chris-hemsworth-en-iyi-10-filmi#bolum-2",
    "name": "Thor: Ragnarok",
    "image": "/images/movies/Chris_Hemsworth_thor__ragnarok.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Hemsworth",
        "Tom Hiddleston"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Yıl": "2017",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Taika Waititi",
      "imdb": "7.9/10",
      "Değerlendirme": "827104",
      "metacritic": "74"
    },
    "paragraf": "Thor: Ragnarok, Thor'un dönüşüm geçirdiği ve mizahi unsurlarla dolu bir Marvel yapımı. Chris Hemsworth en iyi filmleri içinde en eğlenceli ve dinamik filmlerden biridir. Hem aksiyon hem de komedi sevenler için harika bir yapım."
  },
  {
    "num": "1",
    "title_id": "tt4154796",
    "url": "https://enonlar.com/chris-hemsworth-en-iyi-10-filmi#bolum-1",
    "name": "Avengers: Endgame - Avengers: Son Oyun",
    "image": "/images/movies/Chris_Hemsworth_avengers__endgame_-_avengers__son_oyun.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Chris Hemsworth",
        "Scarlett Johansson",
        "Robert Downey Jr.",
        "Chris Evans"
      ],
      "Kategori": [
        "Aksiyon",
        "Dram"
      ],
      "Yıl": "2019",
      "Süre": "3 sa. 1 dk.",
      "Yönetmen": "Anthony Russo",
      "imdb": "8.4/10",
      "Değerlendirme": "1291012",
      "metacritic": "78"
    },
    "paragraf": "Avengers: Endgame, epik bir son ve Marvel Evreni'nin önemli bir parçası olan film, Chris Hemsworth'un ikonik Thor rolüyle ön planda olduğu bir yapıma dönüşüyor. Chris Hemsworth imdb sıralamasında da önde olan bu film, duygusal ve aksiyon dolu sahneleriyle dikkat çekiyor."
  }

];

const ana_resim = "/images/ana_gorseller/chris-hemsworth-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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