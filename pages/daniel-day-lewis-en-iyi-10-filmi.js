
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DanielDaylewisEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "daniel-day-lewis-en-iyi-10-filmi";
const baslik = "Daniel Day-Lewis en iyi 10 filmi";
const metin = "Daniel Day-Lewis, sinema tarihinin en etkileyici aktörlerinden biri olarak kabul edilir. Bu makalede, Daniel Day-Lewis'in en iyi filmleri listelenmiştir. Daniel Day-Lewis en iyi filmleri arasından seçim yaparak, unutulmaz performanslarını ve karakter derinliklerini keşfedin.";
const bitis_metin = "Bu yazımızda Daniel Day-Lewis filmleri arasından en iyi 10 tanesini sizler için derledik, umarız keyifle izlersiniz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["daniel","day-lewis","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T19:29:54+03:00";
const degistirilmeTarihi = "2024-05-25T19:29:54+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/daniel-day-lewis-en-iyi-10-filmi#bolum-10",
    "name": "Lincoln",
    "image": "/images/movies/daniel_day_lewis_lincoln.jpg",
    "ozellikler": {
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Daniel Day-Lewis",
        "Sally Field",
        "David Strathairn"
      ],
      "Kategori": [
        "Tarih",
        "Drama"
      ],
      "Süre": "2 sa. 30 dk.",
      "Yıl": "2012",
      "imdb": "7.3/10",
      "Değerlendirme": "273000"
    },
    "paragraf": "Daniel Day-Lewis filmleri içinde belki de en kabul görüleni, 'Lincoln'. Bu filmde Amerika Birleşik Devletleri'nin 16. başkanı Abraham Lincoln'ün kariyerinin son dönemlerini canlandırdı. Daniel Day-Lewis bu rolüyle Oscar kazandı."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/daniel-day-lewis-en-iyi-10-filmi#bolum-9",
    "name": "There Will Be Blood - Kan Dökülecek",
    "image": "/images/movies/daniel_day_lewis_there_will_be_blood_-_kan_dokulecek.jpg",
    "ozellikler": {
      "Yönetmen": "Paul Thomas Anderson",
      "Oyuncular": [
        "Daniel Day-Lewis"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 sa. 38 dk.",
      "Yıl": "2007",
      "imdb": "8.2/10",
      "Değerlendirme": "643000"
    },
    "paragraf": "Daniel Day-Lewis en iyi filmi listemizde 'Kan Dökülecek' filmi yer alıyor. Bu destansı dram, Daniel Day-Lewis'in hayranlarının Daniel Day-Lewis izlenmesi gereken filmleri listelerine mutlaka eklemesi gereken bir başyapıttır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/daniel-day-lewis-en-iyi-10-filmi#bolum-8",
    "name": "The Last of the Mohicans - Mohikanların Sonuncusu",
    "image": "/images/movies/daniel_day_lewis_the_last_of_the_mohicans_-_mohikanlarin_sonuncusu.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Mann",
      "Oyuncular": [
        "Daniel Day-Lewis",
        "Madeleine Stowe",
        "Russell Means"
      ],
      "Kategori": [
        "Macera",
        "Drama"
      ],
      "Süre": "1 sa. 52 dk.",
      "Yıl": "1992",
      "imdb": "7.7/10",
      "Değerlendirme": "188000"
    },
    "paragraf": "Bu liste, Daniel Day-Lewis filmleri içinde 'Mohikanların Sonuncusu'nu da barındırıyor. Film, Amerikan Bağımsızlık Savaşı sırasında bir aşk ve hayatta kalma hikayesini anlatıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/daniel-day-lewis-en-iyi-10-filmi#bolum-7",
    "name": "Gangs of New York - New York Çeteleri",
    "image": "/images/movies/daniel_day_lewis_gangs_of_new_york_-_new_york_ceteleri.jpg",
    "ozellikler": {
      "Yönetmen": "Martin Scorsese",
      "Oyuncular": [
        "Daniel Day-Lewis",
        "Leonardo DiCaprio",
        "Cameron Diaz"
      ],
      "Kategori": [
        "Tarihi",
        "Drama"
      ],
      "Süre": "2 sa. 47 dk.",
      "Yıl": "2002",
      "imdb": "7.5/10",
      "Değerlendirme": "474000"
    },
    "paragraf": "Daniel Day-Lewis en iyi filmleri listemizde 'New York Çeteleri' filmi dikkat çekiyor. Filmde, 19. yüzyıl New York'unda çeteler arasındaki mücadele ve adalet arayışı konu alınıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/daniel-day-lewis-en-iyi-10-filmi#bolum-6",
    "name": "In the Name of the Father - Babam İçin",
    "image": "/images/movies/daniel_day_lewis_in_the_name_of_the_father_-_babam_i̇cin.jpg",
    "ozellikler": {
      "Yönetmen": "Jim Sheridan",
      "Oyuncular": [
        "Daniel Day-Lewis",
        "Emma Thompson",
        "Pete Postlethwaite"
      ],
      "Kategori": [
        "Biografi",
        "Drama"
      ],
      "Süre": "2 sa. 13 dk.",
      "Yıl": "1993",
      "imdb": "8.1/10",
      "Değerlendirme": "188000"
    },
    "paragraf": "Listemizde önemli bir yer tutan 'Babam İçin', gerçek bir hikayeden uyarlanmıştır. Film, yanlış bir şekilde terörizmle suçlanan bir babanın hak arayışını anlatıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/daniel-day-lewis-en-iyi-10-filmi#bolum-5",
    "name": "My Beautiful Laundrette - Güzel Çamaşırhanem",
    "image": "/images/movies/daniel_day_lewis_my_beautiful_laundrette_-_guzel_camasirhanem.jpg",
    "ozellikler": {
      "Yönetmen": "Stephen Frears",
      "Oyuncular": [
        "Daniel Day-Lewis",
        "Gordon Warnecke"
      ],
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Süre": "1 sa. 37 dk.",
      "Yıl": "1985",
      "imdb": "6.8/10",
      "Değerlendirme": "17000"
    },
    "paragraf": "Daniel Day-Lewis'in kariyerinde farklı bir yere sahip olan 'Güzel Çamaşırhanem', Londra'da bir çamaşırhanede geçen ve toplumsal sınıf farklarını ele alan bir film."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/daniel-day-lewis-en-iyi-10-filmi#bolum-4",
    "name": "The Ballad of Jack and Rose - Jack ve Rose'un Şarkısı",
    "image": "/images/movies/daniel_day_lewis_the_ballad_of_jack_and_rose_-_jack_ve_rose_un_sarkisi.jpg",
    "ozellikler": {
      "Yönetmen": "Rebecca Miller",
      "Oyuncular": [
        "Daniel Day-Lewis",
        "Camilla Belle"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "1 sa. 52 dk.",
      "Yıl": "2005",
      "imdb": "6.5/10",
      "Değerlendirme": "12000"
    },
    "paragraf": "Daniel Day-Lewis en iyi filmleri listesinde 'Jack ve Rose'un Şarkısı' duygusal bir drama sunuyor. Film, izole bir adada yaşayan baba-kızın hikayesini anlatıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/daniel-day-lewis-en-iyi-10-filmi#bolum-3",
    "name": "The Crucible - Cadı Kazanı",
    "image": "/images/movies/daniel_day_lewis_the_crucible_-_cadi_kazani.jpg",
    "ozellikler": {
      "Yönetmen": "Nicholas Hytner",
      "Oyuncular": [
        "Daniel Day-Lewis",
        "Winona Ryder"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 sa. 3 dk.",
      "Yıl": "1996",
      "imdb": "6.8/10",
      "Değerlendirme": "112000"
    },
    "paragraf": "Cadı Kazanı'nda, Daniel Day-Lewis ve Winona Ryder, 1692 Salem cadı mahkemeleri sırasında yaşanan histeriyi ve adaletsizliği muazzam bir şekilde canlandırıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/daniel-day-lewis-en-iyi-10-filmi#bolum-2",
    "name": "Nine - Dokuz",
    "image": "/images/movies/daniel_day_lewis_nine_-_dokuz.jpg",
    "ozellikler": {
      "Yönetmen": "Rob Marshall",
      "Oyuncular": [
        "Daniel Day-Lewis",
        "Marion Cotillard",
        "Penélope Cruz"
      ],
      "Kategori": [
        "Müzikal",
        "Dram"
      ],
      "Süre": "1 sa. 58 dk.",
      "Yıl": "2009",
      "imdb": "5.8/10",
      "Değerlendirme": "45000"
    },
    "paragraf": "Dokuz adlı filmde, Daniel Day-Lewis bir film yönetmeni olarak karşımıza çıkıyor ve kişisel sıkıntıları ile yaratıcı krizler arasında sıkışıp kalmış halini gösteriyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/daniel-day-lewis-en-iyi-10-filmi#bolum-1",
    "name": "The Boxer - Boksör",
    "image": "/images/movies/daniel_day_lewis_the_boxer_-_boksor.jpg",
    "ozellikler": {
      "Yönetmen": "Jim Sheridan",
      "Oyuncular": [
        "Daniel Day-Lewis",
        "Emily Watson"
      ],
      "Kategori": [
        "Drama",
        "Spor"
      ],
      "Süre": "1 sa. 53 dk.",
      "Yıl": "1997",
      "imdb": "7.1/10",
      "Değerlendirme": "36000"
    },
    "paragraf": "Listemizin zirvesinde, 'Boksör' filmi yer alıyor. Daniel Day-Lewis bu filmde, eski bir boksörün topluma yeniden kazandırılma sürecini canlandırıyor."
  }

];

const ana_resim = "/images/ana_gorseller/daniel_day_lewis_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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