
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DunyaninEnIyi10RomaniMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "dunyanin-en-iyi-10-romani";
const baslik = "Dünyanın en iyi 10 romanı";
const metin = "Dünya edebiyatının en etkileyici yapıtlarını içeren bu liste, her biri kendi zamanının ve kültürünün bir yansıması olan eserleri barındırır. Her bir kitap, yazarının dilinde sanatsal bir ustalıkla kurgulanmış ve dünya genelinde okunması gereken romanlar arasında yer alıyor. İster klasik ister modern olsun, bu eserler zamanımızın en önemli hikayelerini anlatıyor.";
const bitis_metin = "Bu listede yer alan dünyanın en iyi romanları, birçok farklı temayı ve edebi tarzı kapsar ve her biri, edebiyat dünyasına önemli katkılarda bulunmuştur. Umarız bu okunması gereken en iyi romanlar listesi, kitap severler için ilham kaynağı olur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["dunyanin","en","iyi","10","romani"]; //! BAK
const kategori = "kitap"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-25T18:48:47+03:00";
const degistirilmeTarihi = "2024-04-25T18:48:47+03:00";
const addDate = "25.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/buraya-url-gelecek#bolum-10",
    "name": "Bülbülü Öldürmek - Harper Lee",
    "image": "/images/kitap/bulbulu_oldurmek_harper_lee.jpg",
    "paragraf": "Bülbülü Öldürmek kitabı, Güney Amerika'da ırk ve adalet kavramları üzerine derinlemesine bir bakış sunuyor. Harper Lee'nin bu başyapıtı, dünyanın en iyi romanları listesinde haklı bir yer ediniyor. Özellikle ırkçılık ve bireysel vicdan meselelerine değinmesiyle bilinir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/buraya-url-gelecek#bolum-9",
    "name": "Moby Dick - Herman Melville",
    "image": "/images/kitap/moby_dick_herman_melville.jpg",
    "paragraf": "Moby Dick, denizlerdeki epik bir mücadeleyi anlatan Herman Melville'in unutulmaz romanıdır. Karakter derinliği ve detaylı betimlemeleri ile en iyi 10 roman kitapları arasında yer almayı başarır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/buraya-url-gelecek#bolum-8",
    "name": "Savaş ve Barış - Tolstoy",
    "image": "/images/kitap/savas_ve_baris_tolstoy.jpg",
    "paragraf": "Tolstoy'un kaleme aldığı Savaş ve Barış, Rus toplumunun Napolyon Savaşları sırasındaki yaşantısını epik bir dille anlatır. Okunması gereken en iyi romanlar listesindeki yerini koruyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/buraya-url-gelecek#bolum-7",
    "name": "Suç ve Ceza - Dostoyevski",
    "image": "/images/kitap/suc_ve_ceza_dostoyevski.jpg",
    "paragraf": "Suç ve Ceza, bireyin içsel çatışmalarını ve toplumsal etkilerini sorgulayan derin bir psikolojik analiz sunar. Dostoyevski'nin bu eseri, okunması gereken en iyi romanlar arasında öne çıkar."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/buraya-url-gelecek#bolum-6",
    "name": "İlyada - Homeros",
    "image": "/images/kitap/i̇lyada_homeros.jpg",
    "paragraf": "İlyada, Homeros'un anlatımıyla Truva Savaşı'nı destansı bir dilde ele alır. Bu antik eser, dünyanın en iyi romanları listesine girmeyi sürdürüyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/buraya-url-gelecek#bolum-5",
    "name": "Büyük Umutlar - Charles Dickens",
    "image": "/images/kitap/buyuk_umutlar_charles_dickens.jpg",
    "paragraf": "Büyük Umutlar, Charles Dickens'ın en önemli eserlerinden biri olarak, bireysel gelişim ve sosyal eleştiri konularını ustaca işler. Bu kitap, dünya literatüründe okunması gereken romanlar arasında yer alır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/buraya-url-gelecek#bolum-4",
    "name": "Aşk ve Gurur - Jane Austen",
    "image": "/images/kitap/ask_ve_gurur_jane_austen.jpg",
    "paragraf": "Aşk ve Gurur, Jane Austen'ın keskin zekası ve toplumsal gözlemleriyle bezeli, İngiliz edebiyatının en sevilen eserlerinden biridir. Bu eser, en iyi 10 roman kitapları arasında sürekli bir yer bulur."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/buraya-url-gelecek#bolum-3",
    "name": "1984 - George Orwell",
    "image": "/images/kitap/1984_george_orwell.jpg",
    "paragraf": "1984, totalitarizmin karanlık yüzünü gösteren George Orwell'in distopik romanıdır. Bu eser, dünyanın en iyi romanları içinde önemli bir yere sahiptir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/buraya-url-gelecek#bolum-2",
    "name": "Ulysses - James Joyce",
    "image": "/images/kitap/ulysses_james_joyce.jpg",
    "paragraf": "James Joyce'un Ulysses'i, modernist yazının zirvelerinden biri olarak kabul edilir. Zorlayıcı yapısıyla bilinen bu eser, okunması gereken en iyi romanlar listesinde yer alır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/buraya-url-gelecek#bolum-1",
    "name": "Yüzüklerin Efendisi - J.R.R. Tolkien",
    "image": "/images/kitap/yuzuklerin_efendisi_j.r.r._tolkien.jpg",
    "paragraf": "J.R.R. Tolkien'in başyapıtı Yüzüklerin Efendisi, fantastik edebiyatın doruk noktası olarak görülür. Bu serüven dolu kitap, dünyanın en iyi romanları listesinin zirvesinde yer alıyor."
  }
];

const ana_resim = "/images/ana_gorseller/dunyanin_en_iyi_10_romani_kapak.jpg" //! SEN DOLDUR
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