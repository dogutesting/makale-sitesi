
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function KadinlarinİzlemesiGereken10DiziMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "kadinlarin-izlemesi-gereken-10-dizi";
const baslik = "Kadınların İzlemesi Gereken 10 Dizi";
const metin = "Kadinlara özel yapımlar, güçlü karakterler ve etkileyici hikayelerle dolu. İşte kadınların izlemesi gereken diziler listemiz, göz atmanız için hazır.";
const bitis_metin = "Kadınların izlemesi gereken diziler üzerine derlediğimiz bu listede birbirinden etkileyici ve duygusal hikayeleri barındıran yapımları bulabilirsiniz. Umarız her bir bölümünde bulacağınız güçlü karakterler ve sürükleyici hikaye anlatımları ile keyifli zamanlar geçirirsiniz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["kadinlarin","i̇zlemesi","gereken","10","dizi"]; //! BAK
const kategori = "dizi"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-27T18:12:45+03:00";
const degistirilmeTarihi = "2024-04-27T18:12:45+03:00";
const addDate = "27.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-dizi#bolum-10",
    "name": "Bridgerton",
    "image": "/images/series/bridgerton.jpg",
    "ozellikler": {
      "Yönetmen": "Chris Van Dusen",
      "Oyuncular": [
        "Phoebe Dynevor",
        "Regé-Jean Page"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Süre": "1 sezon",
      "Yıl": "2020",
      "imdb": "7.4/10",
      "Değerlendirme": "168000"
    },
    "paragraf": "Bridgerton, muazzam kostümleri ve romantik gerilimler ile 2020'de ekranlara gelen bir hit oldu. Aristokratik dedikodular ve yasak aşklar ile dolu bu yapım, kadınların izlemesi gereken diziler listemizde 10 numara."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-dizi#bolum-9",
    "name": "The Crown",
    "image": "/images/series/the_crown.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Morgan",
      "Oyuncular": [
        "Claire Foy",
        "Olivia Colman"
      ],
      "Kategori": [
        "Tarihi",
        "Drama"
      ],
      "Süre": "4 sezon",
      "Yıl": "2016",
      "imdb": "8.6/10",
      "Değerlendirme": "257000"
    },
    "paragraf": "Tarihi olayları zarif bir şekilde ekranlara taşıyan 'The Crown', İngiliz Kraliyet Ailesi'nin zorluklarla dolu yaşamını gözler önüne seriyor. Özellikle kadın hükümdarların hayatlarını detaylı bir biçimde anlatan bu dizi, kadınlar için ilham verici."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-dizi#bolum-8",
    "name": "Big Little Lies",
    "image": "/images/series/big_little_lies.jpg",
    "ozellikler": {
      "Yönetmen": "Jean-Marc Vallée",
      "Oyuncular": [
        "Reese Witherspoon",
        "Nicole Kidman",
        "Shailene Woodley"
      ],
      "Kategori": [
        "Drama",
        "Gizem"
      ],
      "Süre": "2 sezon",
      "Yıl": "2017",
      "imdb": "8.4/10",
      "Değerlendirme": "224000"
    },
    "paragraf": "Güçlü kadın karakterlerin ve sırların ön planda olduğu 'Big Little Lies', derin karakter analizleri ve sürükleyici hikayesi ile dikkat çekiyor. Kadın dayanışması ve hayatta kalma mücadeleleri, bu diziyi kaçırmamanız gerekenler arasına koyuyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-dizi#bolum-7",
    "name": "Desperate Housewives",
    "image": "/images/series/desperate_housewives.jpg",
    "ozellikler": {
      "Yönetmen": "Marc Cherry",
      "Oyuncular": [
        "Eva Longoria",
        "Teri Hatcher",
        "Marcia Cross"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Süre": "8 sezon",
      "Yıl": "2004",
      "imdb": "7.5/10",
      "Değerlendirme": "140000"
    },
    "paragraf": "Banliyöde yaşayan dört kadın arkadaşın, günlük hayatları ve karmaşık ilişkileri üzerine kurulu bu dizi, mizah ve dramı mükemmel bir şekilde harmanlıyor. Hem güldürüyor hem düşündürüyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-dizi#bolum-6",
    "name": "Sex and The City",
    "image": "/images/series/sex_and_the_city.jpg",
    "ozellikler": {
      "Yönetmen": "Darren Star",
      "Oyuncular": [
        "Sarah Jessica Parker",
        "Kim Cattrall",
        "Kristin Davis"
      ],
      "Kategori": [
        "Komedi",
        "Romantik"
      ],
      "Süre": "6 sezon",
      "Yıl": "1998",
      "imdb": "7.3/10",
      "Değerlendirme": "143000"
    },
    "paragraf": "New York'ta yaşayan dört kadın arkadaşın aşk ve kariyer hedeflerini konu alan bu dizi, modern kadının portresini çiziyor. Bu dizi, kadınların izlemesi gereken diziler arasında ikonik bir yere sahip."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-dizi#bolum-5",
    "name": "The Handmaid's Tale",
    "image": "/images/series/the_handmaids_tale.jpg",
    "ozellikler": {
      "Yönetmen": "Bruce Miller",
      "Oyuncular": [
        "Elisabeth Moss",
        "Yvonne Strahovski",
        "Joseph Fiennes"
      ],
      "Kategori": [
        "Distopik",
        "Drama"
      ],
      "Süre": "4 sezon",
      "Yıl": "2017",
      "imdb": "8.4/10",
      "Değerlendirme": "258000"
    },
    "paragraf": "Distopyan bir gelecek sunan ve kadın haklarını merkezine alan 'The Handmaid's Tale', görkemli yapısıyla izleyiciyi etkiliyor. Bu diziyi izlerken hem duygusal hem de zihinsel bir yolculuğa çıkıyorsunuz."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-dizi#bolum-4",
    "name": "Killing Eve",
    "image": "/images/series/killing_eve.jpg",
    "ozellikler": {
      "Yönetmen": "Phoebe Waller-Bridge",
      "Oyuncular": [
        "Sandra Oh",
        "Jodie Comer"
      ],
      "Kategori": [
        "Gerilim",
        "Drama"
      ],
      "Süre": "3 sezon",
      "Yıl": "2018",
      "imdb": "8.1/10",
      "Değerlendirme": "135000"
    },
    "paragraf": "Bir MI5 ajanıyla psikopat bir katilinin kedi-fare oyununu konu alan 'Killing Eve', olağanüstü oyunculukları ve akıcı senaryosuyla büyüleyici."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-dizi#bolum-3",
    "name": "Fleabag",
    "image": "/images/series/fleabag.jpg",
    "ozellikler": {
      "Yönetmen": "Phoebe Waller-Bridge",
      "Oyuncular": [
        "Phoebe Waller-Bridge"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Süre": "2 sezon",
      "Yıl": "2016",
      "imdb": "8.7/10",
      "Değerlendirme": "201000"
    },
    "paragraf": "Karmaşık ilişkileri ve hayatın anlam arayışını komik bir dille işleyen 'Fleabag', izleyiciyi derinden etkileyen bir yapıt."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-dizi#bolum-2",
    "name": "Gilmore Girls",
    "image": "/images/series/gilmore_girls.jpg",
    "ozellikler": {
      "Yönetmen": "Amy Sherman-Palladino",
      "Oyuncular": [
        "Lauren Graham",
        "Alexis Bledel"
      ],
      "Kategori": [
        "Drama",
        "Komedi"
      ],
      "Süre": "7 sezon",
      "Yıl": "2000",
      "imdb": "8.2/10",
      "Değerlendirme": "148000"
    },
    "paragraf": "Anne-kız ilişkisini samimi ve esprili bir dille ele alan 'Gilmore Girls', sıcak hikayeleri ve sevimli karakterleri ile unutulmaz."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/kadinlarin-izlemesi-gereken-10-dizi#bolum-1",
    "name": "Grey's Anatomy",
    "image": "/images/series/greys_anatomy.jpg",
    "ozellikler": {
      "Yönetmen": "Shonda Rhimes",
      "Oyuncular": [
        "Ellen Pompeo",
        "Sandra Oh"
      ],
      "Kategori": [
        "Tıbbi Drama"
      ],
      "Süre": "17 sezon",
      "Yıl": "2005",
      "imdb": "7.6/10",
      "Değerlendirme": "342000"
    },
    "paragraf": "Tıp dünyasını ve doktorların kişisel yaşamlarını dramatik ve etkileyici bir biçimde işleyen 'Grey's Anatomy', duygusal derinliği ve sağlam kurgusu ile dikkat çekerken, izleyiciyi adeta bir montagne russe'ye davet ediyor."
  }
];

const ana_resim = "/images/ana_gorseller/kadinlarin_izlemesi_gereken_10_dizi_kapak.jpg" //! SEN DOLDUR
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