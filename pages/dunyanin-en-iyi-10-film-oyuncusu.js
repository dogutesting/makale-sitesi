
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DunyaninEnIyiFilmOyunculariMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "dunyanin-en-iyi-10-film-oyuncusu";
const baslik = "Dünyanın En İyi 10 Film Oyuncusu";
const metin = "Dünyanın en iyi film oyuncularını sizler için sıraladık. Bu listede, dünyanın en iyi film oyuncusu olmak için gereken sanatsal derinlik ve karizmayı gösteren yabancı aktörler yer almakta. Her biri kendi alanında büyük başarılara imza atmış ve en iyi film oyuncuları yabancı kategorisinde öne çıkan isimlerden oluşuyor. İşte en iyi film oyuncusu olarak kabul edilen, sinema dünyasının zirvesindeki isimler.";
const bitis_metin = "Bu yazımızda dünyanın en iyi film oyuncularını derledik. Her biri, kendine has özellikleriyle sinema sektöründe eşsiz birer yıldız olarak parlamakta. Bu oyuncular, izleyiciye unutulmaz anlar yaşatmış ve iz bırakmışlardır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["dunyanin","en","i̇yi","film","oyunculari"]; //! BAK
const kategori = "model"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-25T18:44:16+03:00";
const degistirilmeTarihi = "2024-04-25T18:44:16+03:00";
const addDate = "25.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-oyuncusu#bolum-10",
    "name": "Will Smith",
    "image": "/images/model/will_smith.jpg",
    "ozellikler": {
      "Doğum Tarihi": "25 Eylül 1968",
      "Boyu": "188 cm",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Will Smith, dünyanın en iyi film oyuncuları arasında yer alıyor. Karizması ve yeteneği ile bilinen Smith, birçok başarılı projeye imza atmıştır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-oyuncusu#bolum-9",
    "name": "Jennifer Lawrence",
    "image": "/images/model/jennifer_lawrence.jpg",
    "ozellikler": {
      "Doğum Tarihi": "15 Ağustos 1990",
      "Boyu": "175 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Jennifer Lawrence, genç yaşta elde ettiği büyük başarılarla dünyanın en iyi film oyuncusu unvanını kazanmıştır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-oyuncusu#bolum-8",
    "name": "Brad Pitt",
    "image": "/images/model/brad_pitt.jpg",
    "ozellikler": {
      "Doğum Tarihi": "18 Aralık 1963",
      "Boyu": "180 cm",
      "Saç Rengi": "Sarı"
    },
    "paragraf": "Brad Pitt, oynadığı çeşitli ve karizmatik roller ile en iyi film oyuncuları yabancı listesinde üst sıralarda yer almaktadır."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-oyuncusu#bolum-7",
    "name": "Meryl Streep",
    "image": "/images/model/meryl_streep.jpg",
    "ozellikler": {
      "Doğum Tarihi": "22 Haziran 1949",
      "Boyu": "172 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Meryl Streep, sinema tarihindeki en yetenekli ve başarılı oyunculardan biridir ve kesinlikle dünyanın en iyi film oyuncuları listesinde hak ettiği bir yer bulmuştur."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-oyuncusu#bolum-6",
    "name": "Tom Hanks",
    "image": "/images/model/tom_hanks.jpg",
    "ozellikler": {
      "Doğum Tarihi": "9 Temmuz 1956",
      "Boyu": "183 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Tom Hanks, farklı karakterleri büyük bir ustalıkla canlandırarak dünyanın en iyi film oyuncusu olarak birçok kez adını duyurdu."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-oyuncusu#bolum-5",
    "name": "Cate Blanchett",
    "image": "/images/model/cate_blanchett.jpg",
    "ozellikler": {
      "Doğum Tarihi": "14 Mayıs 1969",
      "Boyu": "174 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Cate Blanchett, kariyerine birbirinden farklı ve zengin karakterler ekleyerek dünyanın en iyi film oyuncuları arasındaki yerini sağlamlaştırmıştır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-oyuncusu#bolum-4",
    "name": "Leonardo DiCaprio",
    "image": "/images/model/leonardo_dicaprio.jpg",
    "ozellikler": {
      "Doğum Tarihi": "11 Kasım 1974",
      "Boyu": "183 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Leonardo DiCaprio, oyunculuk yetenekleriyle ve etkileyici filmografiyle dünyanın en iyi film oyuncusu unvanını defalarca kazanmıştır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-oyuncusu#bolum-3",
    "name": "Daniel Day-Lewis",
    "image": "/images/model/daniel_day_lewis.jpg",
    "ozellikler": {
      "Doğum Tarihi": "29 Nisan 1957",
      "Boyu": "187 cm",
      "Saç Rengi": "Koyu"
    },
    "paragraf": "Daniel Day-Lewis, rollerine gösterdiği inanılmaz bağlılıkla dünyanın en iyi film oyuncuları listesinde yer almayı sürdürüyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-oyuncusu#bolum-2",
    "name": "Denzel Washington",
    "image": "/images/model/denzel_washington.jpg",
    "ozellikler": {
      "Doğum Tarihi": "28 Aralık 1954",
      "Boyu": "185 cm",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Denzel Washington, güçlü oyunculuk performanslarıyla ve karizmatik varlığıyla, dünyanın en iyi film oyuncusu olma konusunda öne çıkıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-oyuncusu#bolum-1",
    "name": "Robert De Niro",
    "image": "/images/model/robert_de_niro.jpg",
    "ozellikler": {
      "Doğum Tarihi": "17 Ağustos 1943",
      "Boyu": "177 cm",
      "Saç Rengi": "Gri"
    },
    "paragraf": "Robert De Niro, sinema dünyasında efsanevi bir figürdür ve dünyanın en iyi film oyuncuları arasında ilk sırada yer alıyor."
  }
];

const ana_resim = "/images/ana_gorseller/dunyanin_en_iyi_10_film_oyuncusu.jpg" //! SEN DOLDUR
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