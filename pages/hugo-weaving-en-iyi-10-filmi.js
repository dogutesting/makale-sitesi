
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function HugoWeavingEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "hugo-weaving-en-iyi-10-filmi";
const baslik = "Hugo Weaving en iyi 10 filmi";
const metin = "Hugo Weaving'in en iyi filmlerini merak edenler için işte harika bir liste. Hugo Weaving filmleri, etkileyici performansları ve dikkat çeken karakterleriyle adından sıkça söz ettiriyor. İşte Hugo Weaving oynadığı filmler arasından seçtiğimiz en iyi yapımlar.";
const bitis_metin = "Bu yazımızda Hugo Weaving'in kariyerinde iz bırakan filmleri inceledik. Hugo Weaving oynadığı filmler arasında yer alan bu yapımlar, sinema dünyasında unutulmaz izler bıraktı. Hugo Weaving'in performanslarıyla dolu bu listeyi izlemek, sinemaseverler için keyifli bir yolculuk olacaktır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["hugo","weaving","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:50:27+03:00";
const degistirilmeTarihi = "2024-08-16T16:50:27+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/hugo-weaving-en-iyi-10-filmibolum-10",
    "name": "V for Vendetta - V",
    "image": "/images/movies/Hugo_Weaving_v_for_vendetta_-_v.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Hugo Weaving",
        "Natalie Portman"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "James McTeigue",
      "imdb": "8.1/10",
      "Değerlendirme": "1188633",
      "metacritic": "62"
    },
    "paragraf": "V for Vendetta, Hugo Weaving'in etkileyici bir performans sergilediği ve adeta diğer oyuncuları geride bıraktığı bir film. Hugo Weaving en iyi filmleri arasında yer alan bu yapım, distopik bir gelecekte geçen hikayesiyle dikkat çekiyor. Hugo Weaving oynadığı filmler arasında duygusal derinliği ve aksiyonu harmanlayan bir başyapıt olarak öne çıkıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/hugo-weaving-en-iyi-10-filmibolum-9",
    "name": "The Lord of the Rings: The Return of the King - Yüzüklerin Efendisi: Kralın Dönüşü",
    "image": "/images/movies/Hugo_Weaving_the_lord_of_the_rings__the_return_of_the_king_-_yuzuklerin_efendisi__kralin_donusu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Hugo Weaving",
        "Noel Appleby",
        "Ali Astin"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Yıl": "2003",
      "Süre": "3 sa. 21 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "9/10",
      "Değerlendirme": "2003837",
      "metacritic": "94"
    },
    "paragraf": "Yüzüklerin Efendisi: Kralın Dönüşü, devasa bir hikayenin muhteşem bir finalini sunuyor. Hugo Weaving filmleri arasında unutulmaz bir yere sahip olan bu film, sinema tarihine damgasını vurmuş destansı bir serüvenin parçası. Hugo Weaving en iyi filmi sıralamasında, karakterine kattığı derinlik ve asil duruşu ile öne çıkıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/hugo-weaving-en-iyi-10-filmibolum-8",
    "name": "The Lord of the Rings: The Two Towers - Yüzüklerin Efendisi: İki Kule",
    "image": "/images/movies/Hugo_Weaving_the_lord_of_the_rings__the_two_towers_-_yuzuklerin_efendisi__iki_kule.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Hugo Weaving",
        "Bruce Allpress",
        "Sean Astin"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Yıl": "2002",
      "Süre": "2 sa. 59 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "8.8/10",
      "Değerlendirme": "1806808",
      "metacritic": "87"
    },
    "paragraf": "Yüzüklerin Efendisi: İki Kule, ikonik karakterleri ve etkileyici savaş sahneleri ile Hugo Weaving oynadığı filmler arasında dikkat çekiyor. Devam filmi olarak başarısını sürdüren bu yapım, Hugo Weaving'en iyi filmleri listesinde yüksek sıralarda yer almayı hakkediyor. Hugo Weaving, zarif ve karizmatik performansıyla yine izleyicileri büyülüyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/hugo-weaving-en-iyi-10-filmibolum-7",
    "name": "The Lord of the Rings: The Fellowship of the Ring - Yüzüklerin Efendisi: Yüzük Kardeşliği",
    "image": "/images/movies/Hugo_Weaving_the_lord_of_the_rings__the_fellowship_of_the_ring_-_yuzuklerin_efendisi__yuzuk_kardesligi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Hugo Weaving",
        "Alan Howard",
        "Noel Appleby"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Yıl": "2001",
      "Süre": "2 sa. 58 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "8.9/10",
      "Değerlendirme": "2032646",
      "metacritic": "92"
    },
    "paragraf": "Yüzük Kardeşliği, Yüzüklerin Efendisi üçlemesinin ilk filmi olarak Hugo Weaving'in kariyerine damga vurmuş bir yapıt. Hugo Weaving imdb sıralamasını da etkileyen bu film, fantastik dünyanın kapılarını aralıyor. Hugo Weaving filmleri arasında önemli bir yere sahip olan yapım, derin kurgusu ve epik anlatımı ile beğeni topluyor. Hugo Weaving en iyi film performanslarından birini bu filmde sergiliyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/hugo-weaving-en-iyi-10-filmibolum-6",
    "name": "The Matrix - Matrix",
    "image": "/images/movies/Hugo_Weaving_the_matrix_-_matrix.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Hugo Weaving",
        "Keanu Reeves",
        "Laurence Fishburne"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Yıl": "1999",
      "Süre": "2 sa. 16 dk.",
      "Yönetmen": "Lana Wachowski",
      "imdb": "8.7/10",
      "Değerlendirme": "2080006",
      "metacritic": "73"
    },
    "paragraf": "Matrix, sinema dünyasında çığır açmış bir bilim kurgu klasiği. Hugo Weaving'in unutulmaz bir kötü adam olarak karşımıza çıktığı bu yapım, Hugo Weaving en iyi filmleri arasında şüphesiz bir yer buluyor. Hugo Weaving oynadığı filmler içinde karizması ve keskin zarafeti ile izleyicileri kendisine hayran bıraktırırken Hugo Weaving en iyi filmi arasında üst sırada yer alıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/hugo-weaving-en-iyi-10-filmibolum-5",
    "name": "The Matrix Reloaded - Matrix Reloaded",
    "image": "/images/movies/Hugo_Weaving_the_matrix_reloaded_-_matrix_reloaded.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Hugo Weaving",
        "Ray Anthony",
        "Christine Anu"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Yıl": "2003",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "Lana Wachowski",
      "imdb": "7.2/10",
      "Değerlendirme": "636772",
      "metacritic": "62"
    },
    "paragraf": "Matrix Reloaded, Hugo Weaving'en iyi filmler listesinde ön plana çıkan yapımlardan biridir. Hugo Weaving filmleri içindeki bu devam filmi, distopik evrenin hikayesini daha da derinleştiriyor. Yine Hugo Weaving oynadığı filmler arasında dikkatleri üzerine çekmeyi başarıyor ve seyircileri kendisine hayran bırakıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/hugo-weaving-en-iyi-10-filmibolum-4",
    "name": "The Matrix Revolutions - Matrix Revolutions",
    "image": "/images/movies/Hugo_Weaving_the_matrix_revolutions_-_matrix_revolutions.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Hugo Weaving",
        "Mary Alice",
        "Tanveer K. Atwal"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Yıl": "2003",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Lana Wachowski",
      "imdb": "6.7/10",
      "Değerlendirme": "548354",
      "metacritic": "47"
    },
    "paragraf": "Matrix Revolutions, Hugo Weaving'in karakterin doruklarında gezdiği bir diğer harika bilim kurgu filmi. Hugo Weaving oynadığı filmler arasında, karakter gelişimi ve derinliği açısından önemli bir yere sahiptir. Hugo Weaving en iyi filmi arasında yer alırken, sinemaseverler için kaçırılmaması gereken bir film olarak öne çıkıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/hugo-weaving-en-iyi-10-filmibolum-3",
    "name": "Cloud Atlas",
    "image": "/images/movies/Hugo_Weaving_cloud_atlas.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Hugo Weaving",
        "Tom Hanks",
        "Halle Berry"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Dram"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 52 dk.",
      "Yönetmen": "Tom Tykwer",
      "imdb": "7.4/10",
      "Değerlendirme": "376274",
      "metacritic": "55"
    },
    "paragraf": "Cloud Atlas, Hugo Weaving filmleri arasında özgün ve çok katmanlı hikayesiyle öne çıkıyor. Hugo Weaving en iyi filmi arasında gösterilen bu yapım, farklı zaman dilimleri arasında gidip gelen karmaşık bir anlatı sunuyor. Hugo Weaving'in çok yönlü performansı, ona yine saygı duyulacak bir yer kazandırıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/hugo-weaving-en-iyi-10-filmibolum-2",
    "name": "Hacksaw Ridge - Savaş Vadisi",
    "image": "/images/movies/Hugo_Weaving_hacksaw_ridge_-_savas_vadisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Hugo Weaving",
        "Andrew Garfield",
        "Richard Pyros"
      ],
      "Kategori": [
        "Dram",
        "Savaş"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 19 dk.",
      "Yönetmen": "Mel Gibson",
      "imdb": "8.1/10",
      "Değerlendirme": "606158",
      "metacritic": "71"
    },
    "paragraf": "Hacksaw Ridge, dramatik savaş sahneleri ve güçlü oyunculukları ile Hugo Weaving'in en iyi filmleri listesine girmeyi başarıyor. Hugo Weaving en iyi filmi arasında kendine yer bulan bu yapım, savaşın dehşetini ve insanlığın mücadelesini etkileyici bir şekilde sunuyor. Hugo Weaving filmleri içinde duygusal derinliğiyle değerli bir yapım."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/hugo-weaving-en-iyi-10-filmibolum-1",
    "name": "Priscilla, Queen of the Desert",
    "image": "/images/movies/Hugo_Weaving_priscilla,_queen_of_the_desert.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Hugo Weaving",
        "Guy Pearce"
      ],
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "1994",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Stephan Elliott",
      "imdb": "7.5/10",
      "Değerlendirme": "56217",
      "metacritic": "70"
    },
    "paragraf": "Priscilla, Queen of the Desert, Hugo Weaving'in cesur ve renkli bir performans sunduğu farklı bir yapım. Hugo Weaving filmleri arasında özgün ve eğlenceli bir hikayeye sahip olan bu film, toplumsal mesajlarıyla da dikkat çekiyor. Hugo Weaving en iyi filmi olarak bazı eleştirmenlerden tam not almış bir yapımdır."
  }

];

const ana_resim = "/images/ana_gorseller/hugo-weaving-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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