
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function PeterJacksonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "peter-jackson-en-iyi-10-filmi";
const baslik = "Peter Jackson en iyi 10 filmi";
const metin = "Peter Jackson, sinema dünyasına adını altın harflerle yazdırmış bir yönetmendir. Bu makalemizde Peter Jackson en iyi filmleri listesiyle karşınızdayız. Peter Jackson filmleri arasından seçim yaparken, özellikle Peter Jackson en iyi filmi hangisi sorusuna yanıt aradık.";
const bitis_metin = "Bu listemizde, Peter Jackson'ın en iyi 10 filmi üzerinden bir yolculuğa çıktık. Umarız keyifle izlenecek bir film keşfetmişsinizdir. En iyi Peter Jackson filmleri için enonlar.com'u ziyaret etmeyi unutmayın.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["peter","jackson","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:17:05+03:00";
const degistirilmeTarihi = "2024-05-25T18:17:05+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/peter-jackson-en-iyi-10-filmi#bolum-10",
    "name": "The Lord of the Rings: The Return of the King - Yüzüklerin Efendisi: Kralın Dönüşü",
    "image": "/images/movies/peter_jackson_the_lord_of_the_rings_the_return_of_the_king_-_yuzuklerin_efendisi_kralin_donusu.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Elijah Wood",
        "Viggo Mortensen",
        "Ian McKellen"
      ],
      "Kategori": [
        "Fantastik",
        "Macera",
        "Dram"
      ],
      "Süre": "3 sa. 21 dk.",
      "Yıl": "2003",
      "imdb": "9.0/10",
      "Değerlendirme": "2000000",
      "metascore": "94"
    },
    "paragraf": "Peter Jackson izlenmesi gereken filmleri arasında en tepede yer alan Yüzüklerin Efendisi: Kralın Dönüşü, üçleme serisini muhteşem bir finalle noktalıyor. Bu film, büyük ölçüde eleştirmenler tarafından beğenildi ve birçok ödül kazandı."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/peter-jackson-en-iyi-10-filmi#bolum-9",
    "name": "The Lord of the Rings: The Two Towers - Yüzüklerin Efendisi: İki Kule",
    "image": "/images/movies/peter_jackson_the_lord_of_the_rings_the_two_towers_-_yuzuklerin_efendisi_i̇ki_kule.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Elijah Wood",
        "Ian McKellen",
        "Viggo Mortensen"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Süre": "2 sa. 59 dk.",
      "Yıl": "2002",
      "imdb": "8.8/10",
      "Değerlendirme": "1800000",
      "metascore": "87"
    },
    "paragraf": "İki Kule, Peter Jackson en iyi filmleri arasında özel bir yere sahip. Serinin ikinci filmi, hikayenin derinliğini ve karakterlerin evrimini muazzam bir şekilde sergiliyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/peter-jackson-en-iyi-10-filmi#bolum-8",
    "name": "The Hobbit: An Unexpected Journey - Hobbit: Beklenmedik Yolculuk",
    "image": "/images/movies/peter_jackson_the_hobbit_an_unexpected_journey_-_hobbit_beklenmedik_yolculuk.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Martin Freeman",
        "Ian McKellen",
        "Richard Armitage"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Süre": "2 sa. 49 dk.",
      "Yıl": "2012",
      "imdb": "7.8/10",
      "Değerlendirme": "875000",
      "metascore": "58"
    },
    "paragraf": "Peter Jackson filmleri içinde Hobbit serisinin başlangıcı olan Beklenmedik Yolculuk, fantastik dünyanın kapılarını aralıyor ve izleyiciyi epik bir maceraya davet ediyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/peter-jackson-en-iyi-10-filmi#bolum-7",
    "name": "The Hobbit: The Desolation of Smaug - Hobbit: Smaug'un Çorak Toprakları",
    "image": "/images/movies/peter_jackson_the_hobbit_the_desolation_of_smaug_-_hobbit_smaug'un_corak_topraklari.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Martin Freeman",
        "Ian McKellen",
        "Benedict Cumberbatch"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Süre": "2 sa. 41 dk.",
      "Yıl": "2013",
      "imdb": "7.8/10",
      "Değerlendirme": "707000",
      "metascore": "66"
    },
    "paragraf": "Smaug'un Çorak Toprakları, Peter Jackson en iyi filmleri listemizde harika bir yere sahip. Hobbit Bilbo Baggins'in maceralarını sürdürdüğü bu film, görsel şölen sunuyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/peter-jackson-en-iyi-10-filmi#bolum-6",
    "name": "The Hobbit: The Battle of the Five Armies - Hobbit: Beş Ordunun Savaşı",
    "image": "/images/movies/peter_jackson_the_hobbit_the_battle_of_the_five_armies_-_hobbit_bes_ordunun_savasi.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Martin Freeman",
        "Ian McKellen",
        "Richard Armitage"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Süre": "2 sa. 24 dk.",
      "Yıl": "2014",
      "imdb": "7.4/10",
      "Değerlendirme": "573000",
      "metascore": "59"
    },
    "paragraf": "Beş Ordunun Savaşı, Peter Jackson en iyi filmi olabilir mi sorusuna yanıt arayanlar için, serinin bu final filmi, epik çatışmalar ve duygusal anlarla dolu."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/peter-jackson-en-iyi-10-filmi#bolum-5",
    "name": "Heavenly Creatures - Cennet Yaratıkları",
    "image": "/images/movies/peter_jackson_heavenly_creatures_-_cennet_yaratiklari.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Melanie Lynskey",
        "Kate Winslet"
      ],
      "Kategori": [
        "Dram",
        "Suç"
      ],
      "Süre": "1 sa. 39 dk.",
      "Yıl": "1994",
      "imdb": "7.3/10",
      "Değerlendirme": "68000",
      "metascore": "86"
    },
    "paragraf": "Cennet Yaratıkları, gerçek bir olaydan esinlenerek Peter Jackson tarafından yönetilen, dram ve suç unsurlarını içeren sıradışı bir film."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/peter-jackson-en-iyi-10-filmi#bolum-4",
    "name": "The Frighteners - Geçmişin Laneti",
    "image": "/images/movies/peter_jackson_the_frighteners_-_gecmisin_laneti.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Michael J. Fox",
        "Trini Alvarado"
      ],
      "Kategori": [
        "Korku",
        "Komedi"
      ],
      "Süre": "1 sa. 50 dk.",
      "Yıl": "1996",
      "imdb": "7.1/10",
      "Değerlendirme": "96000",
      "metascore": "52"
    },
    "paragraf": "Geçmişin Laneti, Peter Jackson izlenmesi gereken filmleri listesinde öne çıkan bir başka yapıt. Ürkütücü ve eğlenceli bu hikaye, sizi etkileyebilir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/peter-jackson-en-iyi-10-filmi#bolum-3",
    "name": "King Kong",
    "image": "/images/movies/peter_jackson_king_kong.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Naomi Watts",
        "Jack Black",
        "Adrien Brody"
      ],
      "Kategori": [
        "Macera",
        "Dram"
      ],
      "Süre": "3 sa. 7 dk.",
      "Yıl": "2005",
      "imdb": "7.2/10",
      "Değerlendirme": "448000",
      "metascore": "81"
    },
    "paragraf": "Peter Jackson filmleri içerisinde aksiyon ve macera dolu bir diğer başyapıt olan King Kong, sizi adeta o büyülü adaya taşıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/peter-jackson-en-iyi-10-filmi#bolum-2",
    "name": "The Lovely Bones - Sevgili Kemikler",
    "image": "/images/movies/peter_jackson_the_lovely_bones_-_sevgili_kemikler.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Saoirse Ronan",
        "Mark Wahlberg",
        "Rachel Weisz"
      ],
      "Kategori": [
        "Dram",
        "Fantezi"
      ],
      "Süre": "2 sa. 15 dk.",
      "Yıl": "2009",
      "imdb": "6.6/10",
      "Değerlendirme": "180000",
      "metascore": "42"
    },
    "paragraf": "Peter Jackson en iyi filmleri listemizde dikkat çeken bir diğer eser Sevgili Kemikler. Bu film, kayıp bir kızın hikayesini hem gerçeküstü hem de dokunaklı bir şekilde anlatıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/peter-jackson-en-iyi-10-filmi#bolum-1",
    "name": "They Shall Not Grow Old",
    "image": "/images/movies/peter_jackson_they_shall_not_grow-old.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Jackson",
      "Oyuncular": [
        "Thomas Adlam",
        "William Argent",
        "John Ashby"
      ],
      "Kategori": [
        "Belgesel",
        "Tarih",
        "Savaş"
      ],
      "Süre": "1 sa. 39 dk.",
      "Yıl": "2018",
      "imdb": "8.2/10",
      "Değerlendirme": "39000",
      "metascore": "91"
    },
    "paragraf": "Listemizin zirvesinde yer alan They Shall Not Grow Old, Peter Jackson'ın I. Dünya Savaşı'na dair eşsiz bir belgeselidir. Bu film, arşiv görüntülerinin renklendirilmesi ve seslendirilmesi ile tarihe yeni bir bakış açısı sunuyor."
}

];

const ana_resim = "/images/ana_gorseller/peter_jackson_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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