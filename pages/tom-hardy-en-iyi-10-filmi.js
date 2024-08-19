
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function TomHardyEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "tom-hardy-en-iyi-10-filmi";
const baslik = "Tom Hardy En İyi 10 Filmi";
const metin = "Tom Hardy, Hollywood'un en karizmatik ve yetenekli oyuncularından biri olarak kendisini kanıtlamıştır. Tom Hardy en iyi filmleriyle izleyicileri büyülenmekte ve her rolünde bambaşka bir karaktere bürünmektedir. İşte sizler için hazırladığımız Tom Hardy filmleri listesi.";
const bitis_metin = "Bu yazıda, Tom Hardy'nin yer aldığı en iyi 10 filmi sizler için derledik. Her bir yapım, oyuncunun yeteneğini gözler önüne seriyor. Tom Hardy filmleri arasından favorilerinizi seçebilirsiniz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["tom","hardy","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:23:40+03:00";
const degistirilmeTarihi = "2024-08-09T17:23:40+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1291584",
    "url": "https://enonlar.com/tom-hardy-en-iyi-10-filmi#bolum-10",
    "name": "Warrior - Savaşçı",
    "image": "/images/movies/Tom_Hardy_warrior_-_savasci.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "2 sa. 20 dk.",
      "Kategori": [
        "Dram",
        "Spor"
      ],
      "Oyuncular": [
        "Tom Hardy",
        "Nick Nolte"
      ],
      "Yönetmen": "Gavin O'Connor",
      "imdb": "8.1/10",
      "Değerlendirme": "501908",
      "metacritic": "71"
    },
    "paragraf": "Warrior, Tom Hardy'nin etkileyici performansıyla dikkat çeken bir filmdir. Aile bağlarının ve güreş dünyasının zorluklarını anlatan bu film, hem dramatik hem de aksiyon dolu sahneleriyle izleyiciyi etkilemeyi başarıyor. Tom Hardy'nin en iyi filmleri arasında yer almasını sağlayan muhteşem bir yapım."
  },
  {
    "num": "9",
    "title_id": "tt3569230",
    "url": "https://enonlar.com/tom-hardy-en-iyi-10-filmi#bolum-9",
    "name": "Legend - Efsane",
    "image": "/images/movies/Tom_Hardy_legend_-_efsane.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Süre": "2 sa. 13 dk.",
      "Kategori": [
        "Biyografi",
        "Suç"
      ],
      "Oyuncular": [
        "Tom Hardy",
        "Emily Browning"
      ],
      "Yönetmen": "Brian Helgeland",
      "imdb": "6.9/10",
      "Değerlendirme": "205357",
      "metacritic": "55"
    },
    "paragraf": "Legend, Tom Hardy'nin ikiz gangster kardeşler olarak çift rol üstlendiği etkileyici bir biyografi filmidir. 1960'ların Londra suç dünyasına ışık tutan hikaye, oyuncunun çok yönlülüğünü gözler önüne seriyor. Hardy'nin performansı, bu filmi en iyi Tom Hardy filmleri arasında gösteriyor."
  },
  {
    "num": "8",
    "title_id": "tt1600196",
    "url": "https://enonlar.com/tom-hardy-en-iyi-10-filmi#bolum-8",
    "name": "The Drop - Kirli Para",
    "image": "/images/movies/Tom_Hardy_the_drop_-_kirli_para.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "1 sa. 46 dk.",
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Oyuncular": [
        "Tom Hardy",
        "Noomi Rapace"
      ],
      "Yönetmen": "Michaël R. Roskam",
      "imdb": "7/10",
      "Değerlendirme": "163138",
      "metacritic": "69"
    },
    "paragraf": "Tom Hardy'nin yer aldığı The Drop, sıradan bir barmenin suç dünyasıyla karşılaşmasını ele alıyor. Film, gizemli atmosferi ve zengin karakter derinliği ile dikkat çekerken Tom Hardy'nin ustalıkla canlandırdığı Bob karakteri, bu filme ayrı bir dokunuş katıyor."
  },
  {
    "num": "7",
    "title_id": "tt2692904",
    "url": "https://enonlar.com/tom-hardy-en-iyi-10-filmi#bolum-7",
    "name": "Locke - Locke",
    "image": "/images/movies/Tom_Hardy_locke_-_locke.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Süre": "1 sa. 25 dk.",
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Oyuncular": [
        "Tom Hardy"
      ],
      "Yönetmen": "Steven Knight",
      "imdb": "7.1/10",
      "Değerlendirme": "160908",
      "metacritic": "83"
    },
    "paragraf": "Locke, Tom Hardy'nin muazzam tek kişilik performansıyla hayranlık uyandırıyor. Film, bir adamın hayatının bir araba yolculuğunda nasıl değiştiğini gözler önüne seriyor. Dramatik yapısı ve Hardy'nin performansı, Tom Hardy filmleri arasında özel bir yer edinmesine neden oluyor."
  },
  {
    "num": "6",
    "title_id": "tt1172570",
    "url": "https://enonlar.com/tom-hardy-en-iyi-10-filmi#bolum-6",
    "name": "Bronson",
    "image": "/images/movies/Tom_Hardy_bronson.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "1 sa. 32 dk.",
      "Kategori": [
        "Biyografi",
        "Suç"
      ],
      "Oyuncular": [
        "Tom Hardy"
      ],
      "Yönetmen": "Nicolas Winding Refn",
      "imdb": "7/10",
      "Değerlendirme": "142041",
      "metacritic": "71"
    },
    "paragraf": "Bronson, Tom Hardy'nin olağanüstü bir performans sergilediği, gerçek bir hikayeden uyarlanan bir suç biyografisidir. Hardy'nin psikolojik derinlik kattığı ve güçlü bir performans sunduğu bu film, Tom Hardy en iyi filmleri arasında önemli bir konumda."
  },
  {
    "num": "5",
    "title_id": "tt1663202",
    "url": "https://enonlar.com/tom-hardy-en-iyi-10-filmi#bolum-5",
    "name": "The Revenant - Diriliş",
    "image": "/images/movies/Tom_Hardy_the_revenant_-_dirilis.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Süre": "2 sa. 36 dk.",
      "Kategori": [
        "Macera",
        "Dram"
      ],
      "Oyuncular": [
        "Tom Hardy",
        "Leonardo DiCaprio"
      ],
      "Yönetmen": "Alejandro González Iñárritu",
      "imdb": "8/10",
      "Değerlendirme": "884933",
      "metacritic": "76"
    },
    "paragraf": "The Revenant, Tom Hardy'nin zorlu doğa şartlarında hayatta kalma mücadelesini aktardığı güçlü bir macera filmidir. Sürükleyici anlatımı ve karakterlerin derinliği, filmi unutulmaz kılar. Hardy'nin performansı, Tom Hardy filmleri arasında bu yapımı üst sıralara taşıyor."
  },
  {
    "num": "4",
    "title_id": "tt5013056",
    "url": "https://enonlar.com/tom-hardy-en-iyi-10-filmi#bolum-4",
    "name": "Dunkirk",
    "image": "/images/movies/Tom_Hardy_dunkirk.jpg",
    "ozellikler": {
      "Yıl": "2017",
      "Süre": "1 sa. 46 dk.",
      "Kategori": [
        "Aksiyon",
        "Dram"
      ],
      "Oyuncular": [
        "Tom Hardy",
        "Fionn Whitehead"
      ],
      "Yönetmen": "Christopher Nolan",
      "imdb": "7.8/10",
      "Değerlendirme": "749495",
      "metacritic": "94"
    },
    "paragraf": "Christopher Nolan'ın yönetmenliğinde Dunkirk, II. Dünya Savaşı'nın kritik bir anını etkileyici bir şekilde anlatıyor. Tom Hardy'nin usta oyunculuğuyla hayat bulan karakteri, savaş atmosferinin ağırlığını taşıyor. Tom Hardy en iyi filmleri içinde bu savaş filmi ayrı bir yerde."
  },
  {
    "num": "3",
    "title_id": "tt1392190",
    "url": "https://enonlar.com/tom-hardy-en-iyi-10-filmi#bolum-3",
    "name": "Mad Max: Fury Road - Çılgın Max: Öfkeli Yollar",
    "image": "/images/movies/Tom_Hardy_mad_max__fury_road_-_cilgin_max__ofkeli_yollar.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Süre": "2 sa.",
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Oyuncular": [
        "Tom Hardy",
        "Charlize Theron"
      ],
      "Yönetmen": "George Miller",
      "imdb": "8.1/10",
      "Değerlendirme": "1122856",
      "metacritic": "90"
    },
    "paragraf": "Mad Max: Fury Road, post-apokaliptik bir dünyada geçen soluksuz bir aksiyon filmidir. Tom Hardy'nin canlandırdığı Max, hayatta kalma mücadelesinde başı çeker. Film, Tom Hardy'nin oyunculuk yeteneğini sergilerken, çılgın aksiyon ve etkileyici görsel efektlerle dolu bir yapım."
  },
  {
    "num": "2",
    "title_id": "tt1345836",
    "url": "https://enonlar.com/tom-hardy-en-iyi-10-filmi#bolum-2",
    "name": "The Dark Knight Rises - Kara Şövalye Yükseliyor",
    "image": "/images/movies/Tom_Hardy_the_dark_knight_rises_-_kara_sovalye_yukseliyor.jpg",
    "ozellikler": {
      "Yıl": "2012",
      "Süre": "2 sa. 44 dk.",
      "Kategori": [
        "Aksiyon",
        "Dram"
      ],
      "Oyuncular": [
        "Tom Hardy",
        "Christian Bale"
      ],
      "Yönetmen": "Christopher Nolan",
      "imdb": "8.4/10",
      "Değerlendirme": "1848644",
      "metacritic": "78"
    },
    "paragraf": "The Dark Knight Rises, Tom Hardy'nin Bane karakteriyle unutulmaz bir performans sergilediği epik bir yapım. Gotham şehri için yapılan amansız savaşta Hardy'nin etkileyici canlandırması, filmi Tom Hardy en iyi filmleri arasında özel kılıyor."
  },
  {
    "num": "1",
    "title_id": "tt1375666",
    "url": "https://enonlar.com/tom-hardy-en-iyi-10-filmi#bolum-1",
    "name": "Inception - Başlangıç",
    "image": "/images/movies/Tom_Hardy_inception_-_baslangic.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "2 sa. 28 dk.",
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Oyuncular": [
        "Tom Hardy",
        "Leonardo DiCaprio"
      ],
      "Yönetmen": "Christopher Nolan",
      "imdb": "8.8/10",
      "Değerlendirme": "2582573",
      "metacritic": "74"
    },
    "paragraf": "Inception, rüya dünyasının karmaşık yapısını etkileyici bir şekilde sunan, bilim kurgu ve aksiyonu harmanlayan bir başyapıttır. Tom Hardy'nin roldeki karizması ve enerjisi, filmi unutulmaz kılıyor ve en iyi Tom Hardy filmleri arasında zirvede yer almasını sağlıyor."
  }

];

const ana_resim = "/images/ana_gorseller/tom-hardy-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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