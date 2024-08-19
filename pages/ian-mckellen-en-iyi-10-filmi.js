
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function IanMckellenEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "ian-mckellen-en-iyi-10-filmi";
const baslik = "Ian McKellen en iyi 10 filmi";
const metin = "İngiliz sinemasının usta oyuncusu Ian McKellen, yıllar boyunca oynadığı farklı karakterlerle geniş bir hayran kitlesine sahip olmuştur. İşte Ian McKellen filmleri arasında en dikkat çekenleri listeledik. Ian McKellen en iyi filmleri ve Ian McKellen imdb puanlarına göre oluşturduğumuz bu liste sizlerle.";
const bitis_metin = "Ian McKellen gibi usta bir oyuncunun en iyi filmlerine göz attık. Listedeki her film, onun oyunculuk yeteneklerini ve kariyerini taçlandıran yapımlar olarak öne çıkıyor. Umarız bu liste, bir Ian McKellen film maratonuna başlamanız için ilham verir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["ian","mckellen","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:27:07+03:00";
const degistirilmeTarihi = "2024-08-16T17:27:07+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/ian-mckellen-en-iyi-10-filmi#bolum-10",
    "name": "Six Degrees of Separation",
    "image": "/images/movies/Ian_McKellen_six_degrees_of_separation.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ian McKellen",
        "Stockard Channing",
        "Will Smith"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1993",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "Fred Schepisi",
      "imdb": "6.8/10",
      "Değerlendirme": "22865",
      "metacritic": "72"
    },
    "paragraf": "Six Degrees of Separation, Ian McKellen oynadığı filmler arasında anlamlı bir yer tutar. 1993 yapımı bu dram filmi, sosyal sınıf farklarını ve insan ilişkilerini ele alır. Ian McKellen imdb puanlarına göre iyi bir performans sergilediği bu film, gerilim ve dram unsurlarını başarılı bir şekilde birleştiriyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/ian-mckellen-en-iyi-10-filmi#bolum-9",
    "name": "Mr. Holmes",
    "image": "/images/movies/Ian_McKellen_mr._holmes.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ian McKellen",
        "Laura Linney"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Bill Condon",
      "imdb": "6.8/10",
      "Değerlendirme": "68444",
      "metacritic": "67"
    },
    "paragraf": "Mr. Holmes, Ian McKellen en iyi filmleri arasında yer almakta. 2015 yılında vizyona giren filmde, emekli olmuş Sherlock Holmes karakterine hayat veren McKellen, dedektiflik kariyerinden sonraki yaşamını sürdürmeye çalışan bir adamı canlandırıyor. Film, Ian McKellen imdb listelerinde yüksek puanlar almıştır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/ian-mckellen-en-iyi-10-filmi#bolum-8",
    "name": "The Da Vinci Code - Da Vinci Şifresi",
    "image": "/images/movies/Ian_McKellen_the_da_vinci_code_-_da_vinci_sifresi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ian McKellen",
        "Tom Hanks",
        "Audrey Tautou"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 29 dk.",
      "Yönetmen": "Ron Howard",
      "imdb": "6.6/10",
      "Değerlendirme": "462705",
      "metacritic": "46"
    },
    "paragraf": "Da Vinci Şifresi, Ian McKellen oynadığı filmler içinde geniş ses getiren bir yapım. Dan Brown'un aynı isimli romanından uyarlanan bu filmde, McKellen, tarihi ve gerilim dolu bir hikayede yer alıyor. Film, oldukça yoğun bir tempo sunmakta ve dünya çapında geniş bir izleyici kitlesine ulaşmıştır."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/ian-mckellen-en-iyi-10-filmi#bolum-7",
    "name": "Richard III",
    "image": "/images/movies/Ian_McKellen_richard_iii.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ian McKellen",
        "Christopher Bowen",
        "Edward Jewesbury"
      ],
      "Kategori": [
        "Tarihi"
      ],
      "Yıl": "1995",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Richard Loncraine",
      "imdb": "7.3/10",
      "Değerlendirme": "15680",
      "metacritic": "86"
    },
    "paragraf": "Richard III, klasik bir Shakespeare uyarlaması olup Ian McKellen en iyi filmi olarak öne çıkar. 1995 yapımı bu filmde, Ian McKellen imdb platformunda yüksek puanlara sahiptir. Filmde McKellen, iktidar hırsıyla yanıp tutuşan karakterine hayat vererek zengin oyunculuk yeteneklerini sergilemiştir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/ian-mckellen-en-iyi-10-filmi#bolum-6",
    "name": "Gods and Monsters - Tanrılar ve Canavarlar",
    "image": "/images/movies/Ian_McKellen_gods_and_monsters_-_tanrilar_ve_canavarlar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ian McKellen",
        "Brendan Fraser"
      ],
      "Kategori": [
        "Biyografik"
      ],
      "Yıl": "1998",
      "Süre": "1 sa. 45 dk.",
      "Yönetmen": "Bill Condon",
      "imdb": "7.3/10",
      "Değerlendirme": "32968",
      "metacritic": "74"
    },
    "paragraf": "Tanrılar ve Canavarlar, Ian McKellen filmleri içinde en duygusal ve etkileyici yapımlardan biri. Bu biyografik filmde, ünlü yönetmen James Whale'i canlandıran McKellen, muhteşem oyunculuğu sayesinde izleyicilerin kalbinde yer ediniyor. Ian McKellen imdb puanlamasında zirveye yakın bir konumda yer alıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/ian-mckellen-en-iyi-10-filmi#bolum-5",
    "name": "X-Men: Days of Future Past - X-Men: Geçmiş Günler Gelecek",
    "image": "/images/movies/Ian_McKellen_x-men__days_of_future_past_-_x-men__gecmis_gunler_gelecek.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ian McKellen",
        "Hugh Jackman",
        "James McAvoy"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "Bryan Singer",
      "imdb": "7.9/10",
      "Değerlendirme": "754520",
      "metacritic": "75"
    },
    "paragraf": "X-Men: Geçmiş Günler Gelecek, Ian McKellen en iyi filmleri arasında önemli bir bilim kurgu eseridir. Magneto karakterine hayat veren McKellen, filmde mutantların geleceğini kurtarmak için yapılan mücadelede büyük bir rol oynar. Film, hem aksiyon dolu sahneleriyle hem de başarılı hikaye anlatımıyla öne çıkıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/ian-mckellen-en-iyi-10-filmi#bolum-4",
    "name": "X-Men",
    "image": "/images/movies/Ian_McKellen_x-men.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ian McKellen",
        "Hugh Jackman",
        "Patrick Stewart"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2000",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Bryan Singer",
      "imdb": "7.3/10",
      "Değerlendirme": "657539",
      "metacritic": "64"
    },
    "paragraf": "X-Men, Ian McKellen filmleri denilince akla ilk gelenlerden biridir. 2000 yılında başlayan bu serinin ilk filminde Magneto karakterini canlandıran McKellen, mutantlar arası çatışmaları ustaca ele alır. Film, Ian McKellen imdb puanlamalarında oldukça etkilidir ve türünün öncü yapıtlarından biri olarak kabul edilir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/ian-mckellen-en-iyi-10-filmi#bolum-3",
    "name": "X2: X-Men United - X2: X-Men Birliği",
    "image": "/images/movies/Ian_McKellen_x2__x-men_united_-_x2__x-men_birligi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ian McKellen",
        "Patrick Stewart",
        "Hugh Jackman"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2003",
      "Süre": "2 sa. 14 dk.",
      "Yönetmen": "Bryan Singer",
      "imdb": "7.4/10",
      "Değerlendirme": "584410",
      "metacritic": "68"
    },
    "paragraf": "X2: X-Men Birliği, Ian McKellen en iyi filmi seçenekleri arasında farklı bir yer edinmiştir. 2003 yapımı bu film, mutantların ortaya çıkan tehditlerle başa çıkma çabalarını konu eder. Ian McKellen'in Magneto performansı, bu filmi izleyici gözünde daha da değerli kılmaktadır. Ian McKellen imdb puanları da bu başarıyı destekler niteliktedir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/ian-mckellen-en-iyi-10-filmi#bolum-2",
    "name": "The Hobbit: An Unexpected Journey - Hobbit: Beklenmedik Yolculuk",
    "image": "/images/movies/Ian_McKellen_the_hobbit__an_unexpected_journey_-_hobbit__beklenmedik_yolculuk.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ian McKellen",
        "Martin Freeman"
      ],
      "Kategori": [
        "Fantastik"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 49 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "7.8/10",
      "Değerlendirme": "881180",
      "metacritic": "58"
    },
    "paragraf": "Hobbit: Beklenmedik Yolculuk, Ian McKellen filmleri arasında mucizevi dokunuşlara sahip bir fantastik film. 2012 yapımı olan bu filmde Gandalf karakterine hayat veren McKellen, bu rolü ustalıkla yerine getiriyor. Ian McKellen imdb platformunda yüksek derecelendirmelerle yer almış, bu yapım yoğun övgü almıştır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/ian-mckellen-en-iyi-10-filmi#bolum-1",
    "name": "The Lord of the Rings: The Return of the King - Yüzüklerin Efendisi: Kralın Dönüşü",
    "image": "/images/movies/Ian_McKellen_the_lord_of_the_rings__the_return_of_the_king_-_yuzuklerin_efendisi__kralin_donusu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ian McKellen",
        "Noel Appleby",
        "Ali Astin"
      ],
      "Kategori": [
        "Fantastik"
      ],
      "Yıl": "2003",
      "Süre": "3 sa. 21 dk.",
      "Yönetmen": "Peter Jackson",
      "imdb": "9/10",
      "Değerlendirme": "2003837",
      "metacritic": "94"
    },
    "paragraf": "Yüzüklerin Efendisi: Kralın Dönüşü, Ian McKellen en iyi filmleri listesinin zirvesinde yer almaktadır. Gandalf rolündeki performansı ile ikonik hale gelen McKellen, üzerinde yıllar geçse de unutulmayacak bir oyunculuk sergilemiştir. Film, Oscar ödülleri de dâhil olmak üzere birçok ödül kazanmıştır ve Ian McKellen imdb derecelendirmelerinde dikkat çekici bir konumda."
  }

];

const ana_resim = "/images/ana_gorseller/ian-mckellen-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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