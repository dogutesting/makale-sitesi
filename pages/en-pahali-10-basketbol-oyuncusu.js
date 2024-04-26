
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EnPahali10BasketbolOyuncusuMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "en-pahali-10-basketbol-oyuncusu";
const baslik = "En Pahalı 10 Basketbol Oyuncusu";
const metin = "Basketbol dünyasının zirvesindeki oyuncular, aynı zamanda maddi kazançları ile de dikkat çekerler. Bu makalede, dünyanın en pahalı basketbolcusu olarak bilinen isimlerden, dünyanın en pahalı basketbolcu sıralamasını takip ederek top 10 listesine yer verdik.";
const bitis_metin = "Bu yazımızda dünyanın en pahalı basketbolcu sıralamasını gözden geçirdik. Umarım bu ayrıcalıklı listenin her bir sırası sizin için bilgilendirici olmuştur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["en","pahali","10","basketbol","oyuncusu"]; //! BAK
const kategori = "basketbol"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-26T18:47:15+03:00";
const degistirilmeTarihi = "2024-04-26T18:47:15+03:00";
const addDate = "26.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/en-pahali-10-basketbol-oyuncusu#bolum-10",
    "name": "Russell Westbrook",
    "image": "/images/basketbol/russell_westbrook.png",
    "ozellikler": {
      "Doğum Tarihi": "1988",
      "Boyu": "1.91 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Dünyanın en pahalı basketbolcuları arasında yer alan Russell Westbrook, müthiş hızı ve enerjisiyle bilinir. Liste bu dinamik oyuncu ile başlıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/en-pahali-10-basketbol-oyuncusu#bolum-9",
    "name": "Kevin Durant",
    "image": "/images/basketbol/kevin_durant.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1988",
      "Boyu": "2.08 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Kevin Durant, üstün skor yeteneği ile tanınan ve ligdeki en değerli oyunculardan biri olarak kabul edilir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/en-pahali-10-basketbol-oyuncusu#bolum-8",
    "name": "Damien Lillard",
    "image": "/images/basketbol/damien_lillard.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1990",
      "Boyu": "1.88 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Damien Lillard, sahadaki liderliği ve oyun sonu performansıyla öne çıkıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/en-pahali-10-basketbol-oyuncusu#bolum-7",
    "name": "Stephen Curry",
    "image": "/images/basketbol/stephen_curry.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1988",
      "Boyu": "1.88 m",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Stephen Curry, şut yetenekleri ve oyun görüşü ile adından söz ettiriyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/en-pahali-10-basketbol-oyuncusu#bolum-6",
    "name": "James Harden",
    "image": "/images/basketbol/james_harden.png",
    "ozellikler": {
      "Doğum Tarihi": "1989",
      "Boyu": "1.96 m",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "James Harden, oyun kurma ve skorlama kabiliyeti ile ligdeki en değerli oyunculardan."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/en-pahali-10-basketbol-oyuncusu#bolum-5",
    "name": "Giannis Antetokounmpo",
    "image": "/images/basketbol/giannis_antetokounmpo.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1994",
      "Boyu": "2.11 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Giannis Antetokounmpo, defans ve hücumdaki üstün yetenekleriyle tanınıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/en-pahali-10-basketbol-oyuncusu#bolum-4",
    "name": "Lebron James",
    "image": "/images/basketbol/lebron_james.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1984",
      "Boyu": "2.06 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Lebron James, basketbol tarihinin en etkileyici figürlerinden biri olarak sıkça anılır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/en-pahali-10-basketbol-oyuncusu#bolum-3",
    "name": "Kobe Bryant",
    "image": "/images/basketbol/kobe_bryant.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1978",
      "Boyu": "1.98 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Kobe Bryant, efsanevi skor yeteneği ve liderlik özellikleriyle tanınan bir basketbol oyuncusudur. Kariyeri boyunca birçok başarı elde etmiş ve NBA tarihinde önemli bir yere sahiptir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/en-pahali-10-basketbol-oyuncusu#bolum-2",
    "name": "Kawhi Leonard",
    "image": "/images/basketbol/kawhi_leonard.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1991",
      "Boyu": "2.01 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Kawhi Leonard, savunmadaki üstün yetenekleri ve kritik anlardaki performansıyla öne çıkıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/en-pahali-10-basketbol-oyuncusu#bolum-1",
    "name": "Michael Jordan",
    "image": "/images/basketbol/michael_jordan.png",
    "ozellikler": {
      "Doğum Tarihi": "1963",
      "Boyu": "1.98 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Michael Jordan, basketbolun gelmiş geçmiş en büyük ismi olarak, bu listeye zirvede yer alıyor."
  }
];

const ana_resim = "/images/ana_gorseller/en_pahali_10_basketbol_oyuncusu.jpg" //! SEN DOLDUR
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