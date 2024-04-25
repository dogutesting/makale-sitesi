
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DunyaninEnIyi10FilmYonetmeniMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "dunyanin-en-iyi-10-film-yonetmeni";
const baslik = "Dünyanın En İyi 10 Film Yönetmeni";
const metin = "Sinema, büyüsünü büyük ölçüde yönetmenlerin vizyonuna borçludur. İşte sinema tarihine damga vurmuş, dünyanın en iyi film yönetmenlerinden bazıları. Bu liste, yaratıcılıkları, etkileri ve sinema sanatına katkıları ile en iyi film yönetmenleri arasında isim yapmış olan ustalardan oluşmaktadır.";
const bitis_metin = "Bu makalemizde, sinema tarihinde unutulmaz izler bırakan dünyanın en iyi film yönetmenleri sıralamasını gerçekleştirdik. Umarız bu büyük isimler ve onların başarıları, gelecek nesiller için de ilham kaynağı olur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["dunyanin","en","i̇yi","10","film","yonetmeni"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-25T18:40:19+03:00";
const degistirilmeTarihi = "2024-04-25T18:40:19+03:00";
const addDate = "25.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-yonetmeni#bolum-10",
    "name": "Michael Bay",
    "image": "/images/movies/michael_bay.jpg",
    "paragraf": "10 numaraya Michael Bay'i yerleştiriyoruz. Aksiyon sahneleri ve büyük bütçeli yapımları ile tanınan Bay, sinemada görsel bir şölen sunma konusunda üstün bir kabiliyete sahip. Onun filmleri dünyanın en iyi film yönetmenleri arasında kendisine özgü bir yer edinmiştir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-yonetmeni#bolum-9",
    "name": "Ridley Scott",
    "image": "/images/movies/ridley_scott.jpg",
    "paragraf": "9 numarada Ridley Scott gelmektedir. Eşsiz bilim kurgu ve epik filmleri ile tanınan Scott, kariyeri boyunca birçok unutulmaz filme imza atmıştır. Bu dünya çapında tanınmış yönetmen, sinemanın en iyi film yönetmenleri listesinde haklı bir yer buluyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-yonetmeni#bolum-8",
    "name": "Quentin Tarantino",
    "image": "/images/movies/quentin_tarantino.jpg",
    "paragraf": "8 sırada Quentin Tarantino yer alıyor. Kendine has tarzı ve diyaloglarıyla ünlü Tarantino, sinema dünyasında adeta bir ikon haline gelmiştir. 'Pulp Fiction' ve 'Django Unchained' gibi eserler, onun vizyonunun güçlü birer temsilcisidir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-yonetmeni#bolum-7",
    "name": "Christopher Nolan",
    "image": "/images/movies/christopher_nolan.jpg",
    "paragraf": "7 numaralı sıra Christopher Nolan'a aittir. Nolan, özellikle 'Inception' ve 'The Dark Knight' serisi ile bilinir. Karmaşık hikayeleri ve yenilikçi çekim teknikleri ile tanınan Nolan, sinema tarihinde önemli bir yere sahip."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-yonetmeni#bolum-6",
    "name": "David Fincher",
    "image": "/images/movies/david_fincher.jpg",
    "paragraf": "6. sırada David Fincher bulunuyor. 'Fight Club' ve 'Gone Girl' gibi filmleri ile tanınan Fincher, karanlık tonları ve sürükleyici anlatımları ile sinemada kendine özgü bir iz bırakmıştır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-yonetmeni#bolum-5",
    "name": "Peter Jackson",
    "image": "/images/movies/peter_jackson.jpg",
    "paragraf": "5 sıradaki isim Peter Jackson. 'Yüzüklerin Efendisi' serisi ile efsaneleşen Jackson, muazzam görsel efektler ve epik hikaye anlatımı ile bilinir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-yonetmeni#bolum-4",
    "name": "Steven Spielberg",
    "image": "/images/movies/steven_spielberg.jpg",
    "paragraf": "4. sırada Steven Spielberg yer almakta. Spielberg, 'Jurassic Park' ve 'Schindler’s List' gibi filmlerle geniş bir yelpazede başarı göstermiş bir yönetmendir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-yonetmeni#bolum-3",
    "name": "Alfred Hitchcock",
    "image": "/images/movies/alfred_hitchcock.jpg",
    "paragraf": "3. sırada sinemanın ustası Alfred Hitchcock bulunuyor. 'Psycho' ve 'Rear Window' gibi klasiklerle bilinen Hitchcock, gerilim türünün en iyi film yönetmenleri arasındadır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-yonetmeni#bolum-2",
    "name": "Stanley Kubrick",
    "image": "/images/movies/stanley_kubrick.jpg",
    "paragraf": "İkinci sırayı Stanley Kubrick alıyor. 'A Clockwork Orange' ve '2001: A Space Odyssey' gibi çalışmalarıyla bilinen Kubrick, sinema tarihinde derin izler bırakmıştır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-film-yonetmeni#bolum-1",
    "name": "Martin Scorsese",
    "image": "/images/movies/martin_scorsese.jpg",
    "paragraf": "Dünyanın en iyi film yönetmeni listemizin zirvesinde Martin Scorsese yer alıyor. 'Goodfellas' ve 'The Departed' gibi filmleriyle bilinen Scorsese, modern sinemanın en etkili figürlerinden biridir."
  }
];

const ana_resim = "/images/ana_gorseller/dunyanin_en_iyi_10_film_yonetmeni_kapak.jpg" //! SEN DOLDUR
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