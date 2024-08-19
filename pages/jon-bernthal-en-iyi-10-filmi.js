
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JonBernthalEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "jon-bernthal-en-iyi-10-filmi";
const baslik = "Jon Bernthal'ın En İyi 10 Filmi";
const metin = "Jon Bernthal, yetenekli oyunculuk performanslarıyla bilinen bir oyuncudur. İşte jon bernthal filmleri; onun en ikonik rollerinin yer aldığı, göz atmanız gereken jon bernthal en iyi filmleri listesi. Her bir film, Jon Bernthal’ın kariyerindeki kilometre taşlarını temsil eder ve Jon Bernthal kaç yılında doğdu sorusunun cevabını merak edenler için, bu filmler onun sanatını daha iyi anlamalarını sağlayacaktır. Jon Bernthal filmleri en iyi listemizde, Jon Bernthal en iyi filmi ile başlayarak sıralıyoruz.";
const bitis_metin = "Bu yazımızda Jon Bernthal'ın çeşitli rollerde gösterdiği usta işi performansları içeren en iyi filmlerini inceledik. Her bir film, onun oyunculuk yeteneğinin farklı yönlerini sergiliyor ve izleyiciye unutulmaz deneyimler sunuyor. Umarız bu liste, Jon Bernthal'ın filmografisine daha derinlemesine bir bakış atmanızı sağlar.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["jon","bernthal","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-27T16:58:48+03:00";
const degistirilmeTarihi = "2024-04-27T16:58:48+03:00";
const addDate = "27.04.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/jon-bernthal-en-iyi-10-filmi#bolum-10",
    "name": "Sweet Virginia",
    "image": "/images/movies/sweet_virginia.jpg",
    "ozellikler": {
      "Yönetmen": "Jamie M. Dagg",
      "Oyuncular": [
        "Jon Bernthal",
        "Christopher Abbott",
        "Imogen Poots"
      ],
      "Kategori": [
        "Drama",
        "Gerilim"
      ],
      "Süre": "1 sa. 33 dk.",
      "Yıl": "2017",
      "imdb": "6.2/10",
      "Değerlendirme": "12000"
    },
    "paragraf": "10 numarada Jon Bernthal başarılı bir performans sergilediği Sweet Virginia var. Film, küçük bir kasaba atmosferinde geçiyor ve Bernthal, eski bir rodeo şampiyonunu canlandırıyor. Bu drama ve gerilim dolu yapımda, Jon’un derinlemesine karakter analizi, izleyiciler tarafından çok beğenildi. "
  },
  {
    "num": "9",
    "url": "https://enonlar.com/jon-bernthal-en-iyi-10-filmi#bolum-9",
    "name": "Grudge Match",
    "image": "/images/movies/grudge_match.jpg",
    "ozellikler": {
      "Yönetmen": "Peter Segal",
      "Oyuncular": [
        "Jon Bernthal",
        "Robert De Niro",
        "Sylvester Stallone"
      ],
      "Kategori": [
        "Komedi",
        "Spor"
      ],
      "Süre": "1 sa. 53 dk.",
      "Yıl": "2013",
      "imdb": "6.4/10",
      "Değerlendirme": "63000"
    },
    "paragraf": "9 sırada, Grudge Match filmi yer alıyor. Jon Bernthal, bu filmde boks dünyasına adım atan bir oğul olarak eski boksörleri eğiten bir karakteri canlandırıyor. Eğlenceli ve hareketli bu spor komedisinde Bernthal’ın performansı, enerjisiyle ön plana çıkıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/jon-bernthal-en-iyi-10-filmi#bolum-8",
    "name": "Snitch",
    "image": "/images/movies/snitch.jpg",
    "ozellikler": {
      "Yönetmen": "Ric Roman Waugh",
      "Oyuncular": [
        "Jon Bernthal",
        "Dwayne Johnson"
      ],
      "Kategori": [
        "Drama",
        "Suç"
      ],
      "Süre": "1 sa. 52 dk.",
      "Yıl": "2013",
      "imdb": "6.4/10",
      "Değerlendirme": "93000"
    },
    "paragraf": "Listemizde 8. sırada Snitch filmi bulunuyor. Drama ve suç kategorisinde yer alan bu yapımda Jon Bernthal, bir baba ve eski suçlu olarak karşımıza çıkıyor. Filmin çarpıcı hikayesi ve gerilim dolu sahneleri, Bernthal’ın oyunculuk kabiliyetini ön plana çıkartıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/jon-bernthal-en-iyi-10-filmi#bolum-7",
    "name": "The Ghost Writer",
    "image": "/images/movies/the_ghost_writer.jpg",
    "ozellikler": {
      "Yönetmen": "Roman Polanski",
      "Oyuncular": [
        "Jon Bernthal",
        "Ewan McGregor",
        "Pierce Brosnan"
      ],
      "Kategori": [
        "Gizem",
        "Gerilim"
      ],
      "Süre": "2 sa. 8 dk.",
      "Yıl": "2010",
      "imdb": "7.2/10",
      "Değerlendirme": "171000"
    },
    "paragraf": "Yedinci sıramızda The Ghost Writer yer almakta. Bu gizem ve gerilim dolu filmde Jon Bernthal, siyasi bir gerilime dönüşen kapsamlı bir hikaye içinde ufak ancak etkili bir rolde izleyici karşısına çıkıyor. Polanski’nin yönetmenliğindeki bu film, Bernthal’ın filmografisinde öne çıkan yapımlardan biridir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/jon-bernthal-en-iyi-10-filmi#bolum-6",
    "name": "Bar Starz",
    "image": "/images/movies/bar_starz.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Pietrzak",
      "Oyuncular": [
        "Jon Bernthal",
        "Charlie Murphy",
        "Derek Waters"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Süre": "1 sa. 45 dk.",
      "Yıl": "2008",
      "imdb": "3.6/10",
      "Değerlendirme": "220"
    },
    "paragraf": "Listemizin altıncı basamağında yer alan Bar Starz, komedi severler için harika bir seçenek. Jon Bernthal, gece hayatının renkli dünyasında bir grup arkadaşla takılırken canlandırdığı karakter ile mizah duygunuzu harekete geçirecek. Eğlenceli ve enerjik bu film, Bernthal’ın farklı bir yönünü gösteriyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/jon-bernthal-en-iyi-10-filmi#bolum-5",
    "name": "The Accountant",
    "image": "/images/movies/the_accountant.jpg",
    "ozellikler": {
      "Yönetmen": "Gavin O'Connor",
      "Oyuncular": [
        "Jon Bernthal",
        "Ben Affleck",
        "Anna Kendrick"
      ],
      "Kategori": [
        "Aksiyon",
        "Drama"
      ],
      "Süre": "2 sa. 8 dk.",
      "Yıl": "2016",
      "imdb": "7.3/10",
      "Değerlendirme": "322000"
    },
    "paragraf": "Beşinci sırada The Accountant bulunuyor. Aksiyon ve drama harmanlanmış bu yapımda, Jon Bernthal ve Ben Affleck kardeş rolleriyle ekranları paylaşıyor. Filmin sürükleyici hikayesi ve aksiyon sahneleri, Bernthal’ın karizmatik ve yoğun performansıyla pekiştiriliyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/jon-bernthal-en-iyi-10-filmi#bolum-4",
    "name": "Fury",
    "image": "/images/movies/fury.jpg",
    "ozellikler": {
      "Yönetmen": "David Ayer",
      "Oyuncular": [
        "Jon Bernthal",
        "Brad Pitt",
        "Shia LaBeouf"
      ],
      "Kategori": [
        "Savaş",
        "Drama"
      ],
      "Süre": "2 sa. 14 dk.",
      "Yıl": "2014",
      "imdb": "7.6/10",
      "Değerlendirme": "547000"
    },
    "paragraf": "Jon Bernthal’ın en çarpıcı performanslarından biri olarak kabul edilen Fury, savaş ve drama unsurlarını başarıyla harmanlayan bir film. İkinci Dünya Savaşı döneminde tank mürettebatının hikayesini anlatan bu yapımda, Bernthal’ın etkileyici oyunculuğu ön planda."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/jon-bernthal-en-iyi-10-filmi#bolum-3",
    "name": "Sicario",
    "image": "/images/movies/sicario.png",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Emily Blunt",
        "Josh Brolin",
        "Benicio del Toro",
        "Jon Bernthal"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "2 sa. 1 dk.",
      "Yıl": "2015",
      "imdb": "7.7/10",
      "Değerlendirme": "477000"
    },
    "paragraf": "Üçüncü sırada Sicario yer alıyor. Suç ve drama ögelerinin iç içe geçtiği bu yapımda, Jon Bernthal, hikayenin karanlık tarafını yansıtan güçlü bir karakterle ön plana çıkıyor. Denis Villeneuve’un yönetmenliğindeki Sicario, kesinlikle izlenmesi gereken filmler arasında."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/jon-bernthal-en-iyi-10-filmi#bolum-2",
    "name": "Baby Driver",
    "image": "/images/movies/baby_driver.jpg",
    "ozellikler": {
      "Yönetmen": "Edgar Wright",
      "Oyuncular": [
        "Ansel Elgort",
        "Kevin Spacey",
        "Lily James",
        "Jon Bernthal"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim",
        "Müzikal"
      ],
      "Süre": "1 sa. 53 dk.",
      "Yıl": "2017",
      "imdb": "7.5/10",
      "Değerlendirme": "611000"
    },
    "paragraf": "İkinci sırada, müzikal ritimlerle dolu aksiyon ve gerilim filmi Baby Driver bulunuyor. Jon Bernthal bu filmde hızlı ve adrenalin dolu sahnelerde yeteneklerini sergiliyor. Edgar Wright’ın yönetmenliğindeki bu film, izleyicilere unutulmaz anlar yaşatıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/jon-bernthal-en-iyi-10-filmi#bolum-1",
    "name": "The Wolf of Wall Street",
    "image": "/images/movies/the_wolf_of_wall_street.jpg",
    "ozellikler": {
      "Yönetmen": "Martin Scorsese",
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Jonah Hill",
        "Margot Robbie",
        "Jon Bernthal"
      ],
      "Kategori": [
        "Biyografi",
        "Komedi",
        "Suç"
      ],
      "Süre": "3 sa.",
      "Yıl": "2013",
      "imdb": "8.2/10",
      "Değerlendirme": "1600000"
    },
    "paragraf": "Listemizin zirvesinde The Wolf of Wall Street yer alıyor. Jon Bernthal, bu biyografi, komedi ve suç filmi kombinasyonunda unutulmaz bir performans sergiliyor. Martin Scorsese’nin yönetmenliğindeki bu epik yapıt, finans dünyasının derinliklerine dair çarpıcı bir bakış sunuyor."
  }

];

const ana_resim = "/images/ana_gorseller/jon_bernthal_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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