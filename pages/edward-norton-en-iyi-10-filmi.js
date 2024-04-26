
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EdwardNortonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "edward-norton-en-iyi-10-filmi";
const baslik = "Edward Norton'un En İyi 10 Filmi";
const metin = "Edward Norton, yeteneği ve çeşitli rollerle tanınan bir aktördür. Edward Norton filmleri, sinema dünyasında kendine özgü bir yer edinmiş durumda. En duygusal rollerden, en sert karakterlere kadar geniş bir yelpazede performans sergileyen Norton'un edward norton en iyi filmleri listemizde, onun sanatsal yolculuğunu ve unutulmaz performanslarını sizler için derledik.";
const bitis_metin = "Bu yazımızda Edward Norton'un sinemadaki yıllar boyunca bıraktığı derin izlerden en önemlilerini inceledik. Edward Norton en iyi filmi ve diğer başyapıtları ile, kesinlikle modern sinemanın en etkili figürlerinden biri olarak anılmayı hak ediyor. Umuyoruz ki bu liste, olağanüstü bu aktörün filmografisine olan ilginizi artırmıştır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["edward","norton","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-25T14:58:51+03:00";
const degistirilmeTarihi = "2024-04-25T14:58:51+03:00";
const addDate = "25.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/edward-norton-en-iyi-10-filmi#bolum-10",
    "name": "The Score",
    "image": "/images/movies/the_score.jpg",
    "ozellikler": {
      "Yıl": "2001",
      "Süre": "2 sa.",
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "imdb": "6.8/10",
      "metascore": "71",
      "Oyuncular": [
        "Edward Norton",
        "Robert De Niro",
        "Marlon Brando"
      ],
      "Yönetmen": "Frank Oz"
    },
    "paragraf": "Edward Norton'un ilk büyük çıkışı olarak kabul edilen The Score, bir suç ustası olarak kariyerinin zirvesindeki bir hırsızın hikayesini anlatıyor. Edward Norton, bu filmdeki performansıyla kendini sinema dünyasına tanıttı. Daniel Danny Ocean isimli karakteri canlandıran Edward Norton, bu filmde kimse oyunun içyüzünü bilmezken, en etkileyici hırsızlık planını yapmayı ve uygulamayı başarmıştır. İzlerken özellikle Edward Norton en iyi filmleri arasında yerini aldığını hissettirecektir. İyi seyirler dileriz."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/edward-norton-en-iyi-10-filmi#bolum-9",
    "name": "Moonrise Kingdom",
    "image": "/images/movies/moonrise_kingdom.jpg",
    "ozellikler": {
      "Yıl": "2012",
      "Süre": "1 sa. 34 dk.",
      "Kategori": [
        "Macera",
        "Komedi",
        "Drama"
      ],
      "imdb": "7.8/10",
      "metascore": "84",
      "Oyuncular": [
        "Edward Norton",
        "Bruce Willis",
        "Bill Murray"
      ],
      "Yönetmen": "Wes Anderson"
    },
    "paragraf": "Moonrise Kingdom, eşsiz görsel stilı ve tatlı hikayesiyle, Edward Norton’un şaşırtıcı derecede farklı bir rolde seyirciyle buluştuğu bir film. Wes Anderson'ın rengarenk dünyasında Norton, genç izciler üzerine oldukça eğlenceli bir performans sergiledi."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/edward-norton-en-iyi-10-filmi#bolum-8",
    "name": "Rounders",
    "image": "/images/movies/rounders.jpg",
    "ozellikler": {
      "Yıl": "1998",
      "Süre": "2 sa. 1 dk.",
      "Kategori": [
        "Drama"
      ],
      "imdb": "7.3/10",
      "metascore": "54",
      "Oyuncular": [
        "Edward Norton",
        "Matt Damon"
      ],
      "Yönetmen": "John Dahl"
    },
    "paragraf": "Rounders, poker dünyasına adım atan genç bir hukuk öğrencisinin zorlu serüvenini anlatıyor. Edward Norton, bu filmdeki kumarbaz karakteri ile adından söz ettirdi."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/edward-norton-en-iyi-10-filmi#bolum-7",
    "name": "25th Hour",
    "image": "/images/movies/25th_hour.jpg",
    "ozellikler": {
      "Yıl": "2002",
      "Süre": "2 sa. 15 dk.",
      "Kategori": [
        "Drama"
      ],
      "imdb": "7.6/10",
      "metascore": "67",
      "Oyuncular": [
        "Edward Norton",
        "Rosario Dawson"
      ],
      "Yönetmen": "Spike Lee"
    },
    "paragraf": "25th Hour, Edward Norton'un en güçlü performanslarından birini sergilediği, Spike Lee'nin yönettiği bir başyapıt. Bir adamın son özgürlük gününü konu alan bu dramada Norton, içsel çatışmaları mükemmel bir şekilde yansıtıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/edward-norton-en-iyi-10-filmi#bolum-6",
    "name": "Primal Fear",
    "image": "/images/movies/primal_fear.jpg",
    "ozellikler": {
      "Yıl": "1996",
      "Süre": "2 sa. 9 dk.",
      "Kategori": [
        "Suç",
        "Drama",
        "Gizem"
      ],
      "imdb": "7.7/10",
      "metascore": "47",
      "Oyuncular": [
        "Edward Norton",
        "Richard Gere"
      ],
      "Yönetmen": "Gregory Hoblit"
    },
    "paragraf": "Primal Fear, Edward Norton'un film dünyasındaki parlak debutudur. Bu filmdeki çarpıcı ikili kişilik performansı ile Norton, eleştirmenler tarafından geniş çapta takdir topladı ve sinema dünyasında adını duyurdu."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/edward-norton-en-iyi-10-filmi#bolum-5",
    "name": "The Illusionist",
    "image": "/images/movies/the_illusionist.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "1 sa. 50 dk.",
      "Kategori": [
        "Drama",
        "Gizem",
        "Romantik"
      ],
      "imdb": "7.6/10",
      "metascore": "68",
      "Oyuncular": [
        "Edward Norton"
      ],
      "Yönetmen": "Neil Burger"
    },
    "paragraf": "The Illusionist, 19. yüzyıl Viyana'sında geçen büyüleyici bir hikaye. Edward Norton, sahte büyücü rolünde, izleyicileri hem karakterin derinlikleriyle hem de gizemli hikayesiyle etkilemeyi başardı."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/edward-norton-en-iyi-10-filmi#bolum-4",
    "name": "American History X",
    "image": "/images/movies/american_history_x.jpg",
    "ozellikler": {
      "Yıl": "1998",
      "Süre": "1 sa. 59 dk.",
      "Kategori": [
        "Drama"
      ],
      "imdb": "8.5/10",
      "metascore": "62",
      "Oyuncular": [
        "Edward Norton"
      ],
      "Yönetmen": "Tony Kaye"
    },
    "paragraf": "American History X, tarihinde derin izler bırakan bir film. Norton'un performansı, derinlemesine bir insan portresi çiziyor ve edward norton en iyi filmi olarak sıklıkla gösteriliyor. Derin sosyal mesajlarıyla, bu film hala etkisini koruyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/edward-norton-en-iyi-10-filmi#bolum-3",
    "name": "Birdman",
    "image": "/images/movies/birdman.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "1 sa. 59 dk.",
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "imdb": "7.7/10",
      "metascore": "87",
      "Oyuncular": [
        "Michael Keaton",
        "Edward Norton",
        "Emma Stone"
      ],
      "Yönetmen": "Alejandro González Iñárritu"
    },
    "paragraf": "Birdman, bir aktörün eski şöhretini yeniden kazanma arayışını ve içsel savaşlarını anlatmaktadır. Norton bu filmin gördüğü büyük başarının ardında yatan nedenlerden biri ve dövüş kulübü edward norton adı olarak anılmaya devam ediyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/edward-norton-en-iyi-10-filmi#bolum-2",
    "name": "The Grand Budapest Hotel",
    "image": "/images/movies/the_grand_budapest_hotel.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "1 sa. 40 dk.",
      "Kategori": [
        "Macera",
        "Komedi",
        "Drama"
      ],
      "imdb": "8.1/10",
      "metascore": "88",
      "Oyuncular": [
        "Ralph Fiennes",
        "Edward Norton"
      ],
      "Yönetmen": "Wes Anderson"
    },
    "paragraf": "The Grand Budapest Hotel, estetik görünüşü ve hikayesiyle dikkat çeken bir Wes Anderson filmidir. Edward Norton, filmin komedi ve dram arasındaki ince çizgiyi ustaca yansıtan bir performans sergiliyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/edward-norton-en-iyi-10-filmi#bolum-1",
    "name": "Fight Club",
    "image": "/images/movies/fight_club.jpg",
    "ozellikler": {
      "Yıl": "1999",
      "Süre": "2 sa. 19 dk.",
      "Kategori": [
        "Drama"
      ],
      "imdb": "8.8/10",
      "metascore": "67",
      "Oyuncular": [
        "Edward Norton",
        "Brad Pitt"
      ],
      "Yönetmen": "David Fincher"
    },
    "paragraf": "Fight Club, Edward Norton’un kariyerindeki en unutulmaz filmlerden biri. Film, modern toplumun eleştirisiyle sarsıcı bir hikayeyi birleştiriyor. Dövüş Kulübü, Edward Norton'un en akılda kalıcı ve sevilen filmlerinden biridir. Film sistemi, tüketim toplumunu ve insanın kendiyle olan mücadelesini ele alıyor. Gençlik enerjisini, özellikle de dövüş kulübü Edward Norton adı'yla kendini gösterir. Edward Norton'ın oyunculuk kariyerindeki dönüm noktalarından biri olmuştur ve Edward Norton en iyi filmi olarak da nitelendirilir. Norton'un canlandırdığı karakterin, hayattan beklediği idealin peşinden gitmesi ve bu süreçte yaşadığı dönüşüm sinema severlerin unutamadığı sahneler arasındadır."
  }
];

const ana_resim = "/images/ana_gorseller/edward-norton-en-iyi-10-filmi-kapak.jpg" //! SEN DOLDUR
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