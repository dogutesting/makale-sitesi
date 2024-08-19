
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MartinFreemanEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "martin-freeman-en-iyi-10-filmi";
const baslik = "Martin Freeman en iyi 10 filmi";
const metin = "Martin Freeman, eğlenceli ve dramatik yetenekleriyle izleyicileri büyüleyen bir aktör. Kariyerine birçok farklı türde film sığdıran Freeman, Martin Freeman en iyi filmleriyle sinema severlerin kalbinde ayrı bir yer edindi. İşte Martin Freeman oynadığı filmler arasında öne çıkan Martin Freeman en iyi filmi listemiz.";
const bitis_metin = "Bu yazımızda, Martin Freeman'ın kariyerine damga vuran filmleri inceledik. Martin Freeman en iyi filmi arayışında olanlar için bu liste, izlenmesi gereken yapımları sunuyor. Umarız bu filmler, sinema keyfinize katkıda bulunur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["martin","freeman","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:14:49+03:00";
const degistirilmeTarihi = "2024-08-16T17:14:49+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/martin-freeman-en-iyi-10-filmi#bolum-10",
    "name": "Nativity! - Doğuş!",
    "image": "/images/movies/Martin_Freeman_nativity!_-_dogus!.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Martin Freeman",
        "Ashley Jensen",
        "Marc Wootton"
      ],
      "Kategori": [
        "Komedi",
        "Aile"
      ],
      "Yıl": "2009",
      "Süre": "1 sa. 45 dk.",
      "Yönetmen": "Debbie Isitt",
      "imdb": "6.4/10",
      "Değerlendirme": "12532"
    },
    "paragraf": "Martin Freeman filmleri arasında yer alan Nativity!, komedi ve aile odaklı bir yapıma sahip. Freeman, bu filmde zorlu bir görevle karşı karşıya kalan bir öğretmeni canlandırıyor. Film başarısını, eğlenceli yapısıyla taçlandırıyor ve Martin Freeman imdb listelerinde dikkat çekiyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/martin-freeman-en-iyi-10-filmi#bolum-9",
    "name": "The Good Night - İyi Geceler",
    "image": "/images/movies/Martin_Freeman_the_good_night_-_iyi_geceler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Martin Freeman",
        "Penélope Cruz",
        "Keith Allen",
        "Steffan Boje"
      ],
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 33 dk.",
      "Yönetmen": "Jake Paltrow",
      "imdb": "5.7/10",
      "Değerlendirme": "8781",
      "metacritic": "49"
    },
    "paragraf": "The Good Night, Martin Freeman en iyi filmleri arasında yer alır. Filmde yorgun ve tatminsiz bir müzisyeni canlandıran Freeman, gerçekdışı düşler aracılığıyla daha iyi bir hayat arayışına giriyor. Bu film, Freeman'ın geniş bir rol yelpazesine sahip olduğunu gösteriyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/martin-freeman-en-iyi-10-filmi#bolum-8",
    "name": "A Confession - İtiraf",
    "image": "/images/movies/Martin_Freeman_a_confession_-_itiraf.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Martin Freeman",
        "Imelda Staunton",
        "Siobhan Finneran"
      ],
      "Kategori": [
        "Dram",
        "Suç"
      ],
      "Yıl": "2019",
      "Süre": "45 dk.",
      "Yönetmen": "Paul Andrew Williams",
      "imdb": "7.6/10",
      "Değerlendirme": "10338"
    },
    "paragraf": "Martin Freeman oynadığı filmler içerisinden A Confession, suç ve gerilim yüklü bir yapıt olarak öne çıkıyor. Martin Freeman, gerçek olaylara dayanan bu dramada etkileyici bir performans sergiliyor. Performansı, Martin Freeman imdb puanını bir kez daha yükseltmeyi başarıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/martin-freeman-en-iyi-10-filmi#bolum-7",
    "name": "Black Panther",
    "image": "/images/movies/Martin_Freeman_black_panther.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Martin Freeman",
        "Chadwick Boseman",
        "Michael B. Jordan",
        "Lupita Nyong'o"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Bilim Kurgu"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 14 dk.",
      "Yönetmen": "Ryan Coogler",
      "imdb": "7.3/10",
      "Değerlendirme": "848238",
      "metacritic": "88"
    },
    "paragraf": "Black Panther, Wakanda'nın kralı olan T'Challa'nın hikayesini anlatan bir süper kahraman filmidir. Martin Freeman, filmde CIA ajanı Everett K. Ross olarak rol alıyor. Freeman'ın performansı, filmin uluslararası politikalara ve süper kahraman dinamiklerine katkı sağlıyor. Bu film, Freeman'ın aksiyon türündeki önemli katkılarından biridir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/martin-freeman-en-iyi-10-filmi#bolum-6",
    "name": "The Hitchhiker's Guide to the Galaxy - Otostopçunun Galaksi Rehberi",
    "image": "/images/movies/Martin_Freeman_the_hitchhiker's_guide_to_the_galaxy_-_otostopcunun_galaksi_rehberi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Martin Freeman",
        "Zooey Deschanel",
        "Bill Bailey",
        "Anna Chancellor"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Komedi"
      ],
      "Yıl": "2005",
      "Süre": "1 sa. 49 dk.",
      "Yönetmen": "Garth Jennings",
      "imdb": "6.7/10",
      "Değerlendirme": "209581",
      "metacritic": "63"
    },
    "paragraf": "Otostopçunun Galaksi Rehberi, Martin Freeman filmleri içinde farklı ve ikonik bir yere sahip. Douglas Adams'ın meşhur eserinden uyarlanan bu filmde Freeman, sıradan bir adamın galaksiler arası macerasını eğlenceli bir şekilde canlandırıyor. Freeman'ın rolünün derinliği, onu hayranlarının gözünde efsane bir isim haline getiriyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/martin-freeman-en-iyi-10-filmi#bolum-5",
    "name": "Ghost Stories - Hayalet Hikayeleri",
    "image": "/images/movies/Martin_Freeman_ghost_stories_-_hayalet_hikayeleri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Martin Freeman",
        "Andy Nyman",
        "Samuel Bottomley",
        "Deborah Wastell"
      ],
      "Kategori": [
        "Korku",
        "Dram"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 38 dk.",
      "Yönetmen": "Jeremy Dyson",
      "imdb": "6.4/10",
      "Değerlendirme": "37342",
      "metacritic": "68"
    },
    "paragraf": "Ghost Stories, Martin Freeman IMDb listelerinde korku ve dram türlerinde eşsiz bir yere sahiptir. Korkutucu ve etkileyici bir atmosfer sunan filmde Freeman, karakterinde izleyicilerini büyülerken, oyunculuğunun derinliğini gözler önüne seriyor. Sinema severler, Martin Freeman en iyi filmi değerlendirmelerinde bu yapımı asla es geçmemeli."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/martin-freeman-en-iyi-10-filmi#bolum-4",
    "name": "The World's End - Dünyanın Sonu",
    "image": "/images/movies/Martin_Freeman_the_world's_end_-_dunyanin_sonu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Martin Freeman",
        "Simon Pegg",
        "Thomas Law",
        "Zachary Bailess"
      ],
      "Kategori": [
        "Komedi",
        "Bilim Kurgu"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 49 dk.",
      "Yönetmen": "Edgar Wright",
      "imdb": "6.9/10",
      "Değerlendirme": "300391",
      "metacritic": "81"
    },
    "paragraf": "Dünyanın Sonu, Martin Freeman oynadığı filmler içerisinde farklı türlerin uyumunu sergiliyor. Film, Freeman ve arkadaş grubunun çıkışsız bir maceraya atılmasıyla sürükleyici ve komik bir hikaye sunuyor. Freeman, esprili performansıyla yine izleyenleri büyülemeyi başarıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/martin-freeman-en-iyi-10-filmi#bolum-3",
    "name": "The Hobbit: An Unexpected Journey - Hobbit: Beklenmedik Yolculuk",
    "image": "/images/movies/Martin_Freeman_the_hobbit__an_unexpected_journey_-_hobbit__beklenmedik_yolculuk.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Martin Freeman",
        "Ian McKellen"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 49 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "7.8/10",
      "Değerlendirme": "881180",
      "metacritic": "58"
    },
    "paragraf": "Martin Freeman filmleri içinde fantastik türün en ikonik örneklerinden biri olan Hobbit: Beklenmedik Yolculuk, izleyicileri Orta Dünya'nın büyülü dünyasına davet ediyor. Freeman, Bilbo Baggins karakteriyle, Martin Freeman en iyi filme imzasını atarak kalplerimizi kazandı."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/martin-freeman-en-iyi-10-filmi#bolum-2",
    "name": "The Hobbit: The Desolation of Smaug - Hobbit: Smaug'un Çorak Toprakları",
    "image": "/images/movies/Martin_Freeman_the_hobbit__the_desolation_of_smaug_-_hobbit__smaug'un_corak_topraklari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Martin Freeman",
        "Benedict Cumberbatch",
        "Ian McKellen"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 41 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "7.8/10",
      "Değerlendirme": "712572",
      "metacritic": "66"
    },
    "paragraf": "Devam niteliğindeki Smaug'un Çorak Toprakları, Martin Freeman en iyi filmi değerlendirmelerinde önemli bir yere sahip. Freeman, Bilbo olarak çetin bir maceraya daha atılırken, oyunculuğundaki ustalıkla izleyenleri büyülüyor. Martin Freeman IMDb puanı, bu filmle daha da güçleniyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/martin-freeman-en-iyi-10-filmi#bolum-1",
    "name": "The Hobbit: The Battle of the Five Armies - Hobbit: Beş Ordunun Savaşı",
    "image": "/images/movies/Martin_Freeman_the_hobbit__the_battle_of_the_five_armies_-_hobbit__bes_ordunun_savasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Martin Freeman",
        "Orlando Bloom",
        "Ian McKellen"
      ],
      "Kategori": [
        "Fantastik",
        "Aksiyon"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 24 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "7.4/10",
      "Değerlendirme": "578832",
      "metacritic": "59"
    },
    "paragraf": "Martin Freeman en iyi filmleri arasında zirveyi zorlayan Hobbit: Beş Ordunun Savaşı, aksiyon dolu bir finalle sona eriyor. Freeman, Bilbo'nun cesaret ve özveri dolu hikayesini eşsiz bir biçimde sergiliyor. Martin Freeman oynadığı filmler arasında bu yapım unutulmaz anlarla dolu."
  }

];

const ana_resim = "/images/ana_gorseller/martin-freeman-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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