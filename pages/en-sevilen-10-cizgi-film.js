
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EnSevilen10CizgiFilmMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "en-sevilen-10-cizgi-film";
const baslik = "En sevilen 10 çizgi film";
const metin = "Çocukluktan yetişkinliğe, her yaştan insanın keyifle izlediği çizgi filmler, hem eğlenceli hem de öğretici olabiliyor. Bu makalede, dünyanın en iyi çizgi filmi olmaya aday, en sevilen çizgi filmleri sizler için sıraladık. Her biri dünyanın en iyi çizgi dizileri olarak kabul edilen ve dünyanın en iyi 10 çizgi filmi arasında gösterilen bu eserler, farklı nesillerin favorileri arasında yer alıyor. İşte, en iyi çizgi filmler listemiz!";
const bitis_metin = "Bu yazımızda, çizgi film dünyasının en etkileyici ve en çok sevilen yapıtlarını keşfettik. dünyanın en iyi çizgi filmi ve dünyanın en iyi çizgi dizileri unvanını kazanmış bu seriler, her yaştan izleyicinin keyifle takip ettiği yapımlar arasında yer alıyorlar. Umarız bu liste, sizlere çocukluğunuzun sevilen anılarına bir yolculuk yapma fırsatı sunmuştur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["en","sevilen","10","cizgi","film"]; //! BAK
const kategori = "dizi"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-26T18:33:57+03:00";
const degistirilmeTarihi = "2024-04-26T18:33:57+03:00";
const addDate = "26.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/en-sevilen-10-cizgi-film#bolum-10",
    "name": "Adventure Time",
    "image": "/images/series/adventure_time.jpg",
    "ozellikler": {
      "imdb": "8.6",
      "Değerlendirme": "112000"
    },
    "paragraf": "Zaman yolculuğuna çıkmaya hazır olun! Adventure Time, fantastik evreni ve benzersiz karakterleri ile düş gücünün sınırlarını zorlar. Bu seri, dünyanın en iyi çizgi filmi olma unvanını elde etmek için kuvvetli bir aday."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/en-sevilen-10-cizgi-film#bolum-9",
    "name": "The Powerpuff Girls",
    "image": "/images/series/the_powerpuff_girls.jpg",
    "ozellikler": {
      "imdb": "7.3",
      "Değerlendirme": "48000"
    },
    "paragraf": "The Powerpuff Girls, üç süper güçlü kız çocuğunun maceralarını anlatır. Dünyanın en iyi çizgi dizileri arasında gösterilen bu yapım, feminizmi ve güçlü kız çocuk karakterlerini ön plana çıkarıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/en-sevilen-10-cizgi-film#bolum-8",
    "name": "Batman: The Animated Series",
    "image": "/images/series/batman_the_animated_series.jpg",
    "ozellikler": {
      "imdb": "9.0",
      "Değerlendirme": "117000"
    },
    "paragraf": "Karanlık, stilize ve derin hikayeleri ile Batman: The Animated Series, çizgi film kategorisinde yeni bir sayfa açtı. Dünyanın en iyi 10 çizgi filmi listesinde yer alan bu seri, Batman evrenini geniş bir izleyici kitlesine tanıttı."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/en-sevilen-10-cizgi-film#bolum-7",
    "name": "Avatar: The Last Airbender",
    "image": "/images/series/avatar_the_last_airbender.jpg",
    "ozellikler": {
      "imdb": "9.3",
      "Değerlendirme": "373000"
    },
    "paragraf": "Avatar: The Last Airbender, derin karakterleri ve etkileyici hikaye anlatımı ile küresel çapta sevilmiş bir başyapıt. Bu seri, birçok kişi tarafından dünyanın en iyi çizgi filmi olarak görülüyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/en-sevilen-10-cizgi-film#bolum-6",
    "name": "The Simpsons",
    "image": "/images/series/the_simpsons.jpg",
    "ozellikler": {
      "imdb": "8.7",
      "Değerlendirme": "436000"
    },
    "paragraf": "The Simpsons, modern toplumu iğneleyici mizahı ile ele alır ve dünyanın en iyi çizgi dizileri arasında yer alır. Bu uzun soluklu seri, televizyon tarihinde kendine sağlam bir yer edinmiştir."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/en-sevilen-10-cizgi-film#bolum-5",
    "name": "Family Guy",
    "image": "/images/series/family_guy.jpg",
    "ozellikler": {
      "imdb": "8.1",
      "Değerlendirme": "364000"
    },
    "paragraf": "Family Guy, keskin ve sarsıcı mizahı ile ön plana çıkıyor. Tartışmalı ve eğlenceli halleriyle bilinen bu seri, dünyanın en iyi çizgi filmi adaylarından biri olarak izleyici karşısına çıkıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/en-sevilen-10-cizgi-film#bolum-4",
    "name": "South Park",
    "image": "/images/series/south_park.jpg",
    "ozellikler": {
      "imdb": "8.7",
      "Değerlendirme": "406000"
    },
    "paragraf": "South Park, sınırları zorlayan mizahı ve politik doğruculuk eleştirileri ile dünyanın en iyi 10 çizgi filmi listesine adını yazdırıyor. Bu cesur seri, her bölümde toplumsal normları sorgulatıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/en-sevilen-10-cizgi-film#bolum-3",
    "name": "Tom and Jerry",
    "image": "/images/series/tom_and_jerry.jpg",
    "ozellikler": {
      "imdb": "7.8",
      "Değerlendirme": "10000"
    },
    "paragraf": "Tom and Jerry, sahip oldukları eğlenceli kovalamaca sahneleri ile kuşaklara neşe saçan bir klasik. Bu ikilinin maceraları, onları dünyanın en iyi çizgi dizileri listesine taşıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/en-sevilen-10-cizgi-film#bolum-2",
    "name": "SpongeBob SquarePants",
    "image": "/images/series/spongebob_squarepants.jpg",
    "ozellikler": {
      "imdb": "8.2",
      "Değerlendirme": "111000"
    },
    "paragraf": "SpongeBob SquarePants, denizin altındaki renkli karakterler ve absürt hikayeleri ile tüm dünyada sevilerek izleniyor. Bu eğlenceli su altı dünyası, en iyi çizgi filmler arasında haklı bir yere sahip."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/en-sevilen-10-cizgi-film#bolum-1",
    "name": "Looney Tunes",
    "image": "/images/series/looney_tunes.jpg",
    "ozellikler": {
      "imdb": "7.7",
      "Değerlendirme": "15000"
    },
    "paragraf": "Looney Tunes, ikonik karakterleri ve zekice mizahı ile çizgi film dünyasının zirvesinde yer alıyor. Bu seri, dünyanın en iyi 10 çizgi filmi arasında sürekli yer bulmuştur ve hala geniş bir hayran kitlesi tarafından seviliyor."
  }
];

const ana_resim = "/images/ana_gorseller/en_sevilen_10_cizgi_film_kapak.jpg" //! SEN DOLDUR
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