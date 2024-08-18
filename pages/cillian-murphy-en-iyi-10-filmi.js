
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function CillianMurphyEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "cillian-murphy-en-iyi-10-filmi";
const baslik = "Cillian Murphy en iyi 10 filmi";
const metin = "Cillian Murphy filmleri, oyunculuk yetenekleri ve etkileyici performanslarıyla tanınır. Cillian Murphy oynadığı filmler arasında birçok unutulmaz yapım bulunmaktadır. İşte, Cillian Murphy en iyi filmleri ve Cillian Murphy imdb sıralaması dikkate alınarak hazırlanan listeyi sizler için derledik.";
const bitis_metin = "Bu yazımızda, Cillian Murphy en iyi filmlerini sizler için sıraladık. Cillian Murphy'nin kariyerinde iz bırakan yapımlara göz attık ve oyuncunun etkileyici performanslarını ele aldık. Umarız bu liste, Cillian Murphy meraklılarına iyi bir rehber olmuştur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["cillian","murphy","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:26:00+03:00";
const degistirilmeTarihi = "2024-08-16T17:26:00+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt0411195",
    "url": "https://enonlar.com/cillian-murphy-en-iyi-10-filmibolum-10",
    "name": "Breakfast on Pluto - Cennetimden Bakarken",
    "image": "/images/movies/Cillian_Murphy_breakfast_on_pluto_-_cennetimden_bakarken.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Cillian Murphy",
        "Lee Van Cleef",
        "Morgan Jones"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "Neil Jordan",
      "imdb": "7.2/10",
      "Değerlendirme": "24811",
      "metacritic": "59"
    },
    "paragraf": "Breakfast on Pluto - Cennetimden Bakarken, Cillian Murphy'nin etkileyici bir oyunculuk sergilediği bir film olarak dikkat çeker. Patrick 'Kitten' Braden karakterini canlandırdığı bu yapım, izleyicileri 1970'lerin İrlanda ve Londra'sına götürüyor. Cillian Murphy'nin en unutulmaz performanslarından biri olarak kabul edilmektedir."
  },
  {
    "num": "9",
    "title_id": "tt0421239",
    "url": "https://enonlar.com/cillian-murphy-en-iyi-10-filmibolum-9",
    "name": "Red Eye - Ölümcül Yolculuk",
    "image": "/images/movies/Cillian_Murphy_red_eye_-_olumcul_yolculuk.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Cillian Murphy",
        "Rachel McAdams"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2005",
      "Süre": "1 sa. 25 dk.",
      "Yönetmen": "Wes Craven",
      "imdb": "6.5/10",
      "Değerlendirme": "147073",
      "metacritic": "71"
    },
    "paragraf": "Red Eye - Ölümcül Yolculuk, Cillian Murphy'nin karşı konulamaz bir kötü karakter olarak izleyiciyi gerilim dolu bir maceraya sürüklediği bir filmdir. Oyuncunun etkileyici performansı, gerilim türüne önemli bir katkı sağlamıştır. Cillian Murphy oynadığı filmler arasında, bu yapım öne çıkar."
  },
  {
    "num": "8",
    "title_id": "tt1390411",
    "url": "https://enonlar.com/cillian-murphy-en-iyi-10-filmibolum-8",
    "name": "In the Heart of the Sea - Denizin Ortasında",
    "image": "/images/movies/Cillian_Murphy_in_the_heart_of_the_sea_-_denizin_ortasinda.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Cillian Murphy",
        "Chris Hemsworth",
        "Benjamin Walker"
      ],
      "Kategori": [
        "Macera"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Ron Howard",
      "imdb": "6.9/10",
      "Değerlendirme": "149913",
      "metacritic": "47"
    },
    "paragraf": "In the Heart of the Sea - Denizin Ortasında, Cillian Murphy'nin etkileyici performansıyla dikkat çektiği bir başka başarılı filmidir. Hikâye, Moby Dick eserine ilham veren gerçek bir olayı konu alır ve Cillian Murphy'nin bu destansı macera geriliminde önemli bir rolü bulunmaktadır."
  },
  {
    "num": "7",
    "title_id": "tt5013056",
    "url": "https://enonlar.com/cillian-murphy-en-iyi-10-filmibolum-7",
    "name": "Dunkirk",
    "image": "/images/movies/Cillian_Murphy_dunkirk.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Cillian Murphy",
        "Tom Hardy",
        "Fionn Whitehead",
        "Damien Bonnard"
      ],
      "Kategori": [
        "Savaş"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "7.8/10",
      "Değerlendirme": "749669",
      "metacritic": "94"
    },
    "paragraf": "Dunkirk, Christopher Nolan'ın yönetmenliğini yaptığı bu epik savaş filmi Cillian Murphy'nin olağanüstü performansı ile dikkat çeker. İkinci Dünya Savaşı'nda Dunkerque Tahliyesi'nin dramatik hikâyesini anlatan film, izleyicilere gerilim dolu dakika vaat eder ve Cillian Murphy en iyi filmlerinden biri olarak öne çıkar."
  },
  {
    "num": "6",
    "title_id": "tt8332922",
    "url": "https://enonlar.com/cillian-murphy-en-iyi-10-filmibolum-6",
    "name": "A Quiet Place Part II - Sessiz Bir Yer 2",
    "image": "/images/movies/Cillian_Murphy_a_quiet_place_part_ii_-_sessiz_bir_yer_2.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Cillian Murphy",
        "Emily Blunt",
        "John Krasinski"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2020",
      "Süre": "1 sa. 37 dk.",
      "Yönetmen": "John Krasinski",
      "imdb": "7.2/10",
      "Değerlendirme": "285434",
      "metacritic": "71"
    },
    "paragraf": "A Quiet Place Part II - Sessiz Bir Yer 2, Cillian Murphy'nin McGregor rolüyle kadroya katıldığı bu devam filmi, izleyicileri gerilim dolu anlara sürüklüyor. Cillian Murphy imdb'de de oldukça olumlu eleştiriler almış olan performansı, filmi daha da etkileyici hale getiriyor."
  },
  {
    "num": "5",
    "title_id": "tt0289043",
    "url": "https://enonlar.com/cillian-murphy-en-iyi-10-filmibolum-5",
    "name": "28 Days Later - 28 Gün Sonra",
    "image": "/images/movies/Cillian_Murphy_28_days_later_-_28_gun_sonra.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Cillian Murphy",
        "Naomie Harris",
        "Alex Palmer",
        "Bindu De Stoppani"
      ],
      "Kategori": [
        "Korku"
      ],
      "Yıl": "2002",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Danny Boyle",
      "imdb": "7.5/10",
      "Değerlendirme": "452284",
      "metacritic": "73"
    },
    "paragraf": "28 Days Later - 28 Gün Sonra, zombi temalı bu korku filmi, Cillian Murphy'nin kariyerinde bir dönüm noktası olmuştur. Cillian Murphy oynadığı filmler arasında en etkileyici performanslarından biri ile izleyicileri ekran başına kilitlemiştir. Film, olağanüstü gerilim ve korku unsurları ile de tanınır."
  },
  {
    "num": "4",
    "title_id": "tt0460989",
    "url": "https://enonlar.com/cillian-murphy-en-iyi-10-filmibolum-4",
    "name": "The Wind That Shakes the Barley - Özgürlük Rüzgarı",
    "image": "/images/movies/Cillian_Murphy_the_wind_that_shakes_the_barley_-_ozgurluk_ruzgari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Cillian Murphy",
        "Liam Cunningham",
        "Pádraic Delaney"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 7 dk.",
      "Yönetmen": "Ken Loach",
      "imdb": "7.5/10",
      "Değerlendirme": "55184",
      "metacritic": "82"
    },
    "paragraf": "The Wind That Shakes the Barley - Özgürlük Rüzgarı, İrlanda'nın bağımsızlık mücadelesini anlatan etkileyici bir dram filmidir. Cillian Murphy, tarihî arka planda güçlü bir rol sergileyerek izleyicilerin beğenisini kazanmıştır. Bu film, Cillian Murphy en iyi filmlerinden biri olarak gösterilebilir."
  },
  {
    "num": "3",
    "title_id": "tt0468569",
    "url": "https://enonlar.com/cillian-murphy-en-iyi-10-filmibolum-3",
    "name": "The Dark Knight - Kara Şövalye",
    "image": "/images/movies/Cillian_Murphy_the_dark_knight_-_kara_sovalye.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Cillian Murphy",
        "Christian Bale",
        "Heath Ledger"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2008",
      "Süre": "2 sa. 32 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "9/10",
      "Değerlendirme": "2909162",
      "metacritic": "84"
    },
    "paragraf": "The Dark Knight - Kara Şövalye, Cillian Murphy'nin Scarecrow rolüyle karşımıza çıktığı, Batman serisinin en sevilen filmlerinden biridir. Christopher Nolan'ın yönettiği bu yapımda, Cillian Murphy imdb'de de en iyi filmleri arasında gösterilmektedir. Film, aksiyon ve gerilimi bir araya getirir."
  },
  {
    "num": "2",
    "title_id": "tt1375666",
    "url": "https://enonlar.com/cillian-murphy-en-iyi-10-filmibolum-2",
    "name": "Inception - Başlangıç",
    "image": "/images/movies/Cillian_Murphy_inception_-_baslangic.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Cillian Murphy",
        "Leonardo DiCaprio",
        "Joseph Gordon-Levitt"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2010",
      "Süre": "2 sa. 28 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "8.8/10",
      "Değerlendirme": "2583342",
      "metacritic": "74"
    },
    "paragraf": "Inception - Başlangıç, karmaşık kurgusu ve görsel efektleriyle dikkat çeken bir bilim kurgu klasiğidir. Cillian Murphy'nin önemli bir yan rolde yer aldığı bu filmde, onun performansı da büyük beğeni toplar. Cillian Murphy en iyi filmi arasında kesinlikle kült bir yere sahiptir."
  },
  {
    "num": "1",
    "title_id": "tt15398776",
    "url": "https://enonlar.com/cillian-murphy-en-iyi-10-filmibolum-1",
    "name": "Oppenheimer",
    "image": "/images/movies/Cillian_Murphy_oppenheimer.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Cillian Murphy",
        "Robert Downey Jr.",
        "Emily Blunt"
      ],
      "Kategori": [
        "Biyografi"
      ],
      "Yıl": "2023",
      "Süre": "3 sa.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "8.3/10",
      "Değerlendirme": "782878",
      "metacritic": "90"
    },
    "paragraf": "Oppenheimer, atom bombasını geliştiren fizikçi J. Robert Oppenheimer'ın hayatını anlatan, Cillian Murphy'nin başrolde oynadığı biyografi filmidir. Cillian Murphy'nin yetkin performansı, bu filmin izleyenlerin beğenisini kazanmasına katkı sağlamıştır ve Cillian Murphy en iyi filmi arasında yer alır."
  }

];

const ana_resim = "/images/ana_gorseller/cillian-murphy-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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