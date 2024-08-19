
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MarkWahlbergEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "mark-wahlberg-en-iyi-10-filmi";
const baslik = "Mark Wahlberg en iyi 10 filmi";
const metin = "Mark Wahlberg, Hollywood'un önde gelen aktörlerinden biri olarak, birçok başarılı projeye imza atmıştır. Mark Wahlberg filmleri, aksiyon, drama ve komedi gibi çeşitli türlerde izleyicilerle buluşmaktadır. İşte kariyerinin zirvelerinden örneklerle Mark Wahlberg oynadığı filmler arasından seçtiğimiz, Mark Wahlberg en iyi filmleri listesi.";
const bitis_metin = "Bu yazımızda Mark Wahlberg en iyi filmi derleyerek, oyuncunun kariyerindeki önemli yapımları inceledik. Mark Wahlberg filmleri, her türde izleyiciye hitap ediyor ve yeteneğini ortaya koyuyor. Siz de bu benzersiz filmleri izleyerek Wahlberg'in başarılı performansını kaçırmayın.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["mark","wahlberg","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:06:22+03:00";
const degistirilmeTarihi = "2024-08-16T17:06:22+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/mark-wahlberg-en-iyi-10-filmi#bolum-10",
    "name": "The Happening - Mistik Olay",
    "image": "/images/movies/Mark_Wahlberg_the_happening_-_mistik_olay.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Wahlberg",
        "Zooey Deschanel"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Yıl": "2008",
      "Süre": "1 sa. 31 dk.",
      "Yönetmen": "M. Night Shyamalan",
      "imdb": "5/10",
      "Değerlendirme": "218285",
      "metacritic": "34"
    },
    "paragraf": "Mistik Olay, doğanın esrarengiz ve ölümcül olaylar serisiyle insanlığı tehdit etmesini anlatan bir gerilim filmi. Mark Wahlberg imdb derecelendirmesinde oldukça konuşulan bir isim olarak burada başrolde. Film, doğayla insan arasındaki dengenin bozulduğu endişe verici bir dünya sunuyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/mark-wahlberg-en-iyi-10-filmi#bolum-9",
    "name": "Shooter - Tetikçi",
    "image": "/images/movies/Mark_Wahlberg_shooter_-_tetikci.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Wahlberg",
        "Michael Peña"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2007",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Antoine Fuqua",
      "imdb": "7.1/10",
      "Değerlendirme": "359261",
      "metacritic": "53"
    },
    "paragraf": "Tetikçi, Mark Wahlberg oynadığı filmler arasında aksiyon dozu yüksek bir yapımdır. Tetikçi, haksız yere suçlanan ve adını temize çıkarmak için mücadele eden keskin nişancı Bob Lee Swagger'ın hikayesini anlatıyor. Başarılı aksiyon sahneleri ve gerilim dolu anlarıyla Mark Wahlberg'in dikkat çeken performansı filmi öne çıkarıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/mark-wahlberg-en-iyi-10-filmi#bolum-8",
    "name": "Patriots Day - Şehitler Günü",
    "image": "/images/movies/Mark_Wahlberg_patriots_day_-_sehitler_gunu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Wahlberg",
        "Kevin Bacon",
        "Dicky Eklund Jr."
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 13 dk.",
      "Yönetmen": "Peter Berg",
      "imdb": "7.3/10",
      "Değerlendirme": "114231",
      "metacritic": "69"
    },
    "paragraf": "Patriots Day, gerçek bir olay olan 2013 Boston Maratonu bombalamasını ve sonrasında yaşananları merkeze alıyor. Mark Wahlberg'in Boston Polis Departmanı'nda görev alan bir dedektifi canlandırdığı bu dram yüklü film, suça karşı verilen mücadeleyi etkileyici bir şekilde işliyor. Mark Wahlberg en iyi filmleri arasında güçlü öyküsüyle dikkat çekiyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/mark-wahlberg-en-iyi-10-filmi#bolum-7",
    "name": "The Other Guys - Yedek Polisler",
    "image": "/images/movies/Mark_Wahlberg_the_other_guys_-_yedek_polisler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Wahlberg",
        "Will Ferrell",
        "Derek Jeter"
      ],
      "Kategori": [
        "Komedi",
        "Aksiyon"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Adam McKay",
      "imdb": "6.6/10",
      "Değerlendirme": "291820",
      "metacritic": "64"
    },
    "paragraf": "Yedek Polisler, Mark Wahlberg filmleri içinde komedi ve aksiyonu bir araya getiren eğlenceli bir yapım. Filmde iki uyumsuz polis dedektifinin alışılmadık maceralarını izliyoruz. Wahlberg ve Will Ferrell'ın uyumu, filme farklı bir enerji katarak izleyicileri kahkahalara boğuyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/mark-wahlberg-en-iyi-10-filmi#bolum-6",
    "name": "Deepwater Horizon - Büyük Felaket",
    "image": "/images/movies/Mark_Wahlberg_deepwater_horizon_-_buyuk_felaket.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Wahlberg",
        "Kurt Russell"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Peter Berg",
      "imdb": "7.1/10",
      "Değerlendirme": "185039",
      "metacritic": "68"
    },
    "paragraf": "Büyük Felaket, trajik bir petrol platformu felaketinin gerçek hikâyesini canlandırıyor. Mark Wahlberg oynadığı filmler arasında, Deepwater Horizon petrol platformunda çalışan bir işçinin yaşam mücadelesini etkileyici bir şekilde canlandırırken, dramın ve gerilimin dozunu artırıyor. Bu film, Wahlberg'in oyunculuk gücünü bir kez daha kanıtlıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/mark-wahlberg-en-iyi-10-filmi#bolum-5",
    "name": "Three Kings - Üç Kral",
    "image": "/images/movies/Mark_Wahlberg_three_kings_-_uc_kral.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Wahlberg",
        "George Clooney"
      ],
      "Kategori": [
        "Savaş",
        "Macera"
      ],
      "Yıl": "1999",
      "Süre": "1 sa. 54 dk.",
      "Yönetmen": "David O. Russell",
      "imdb": "7.1/10",
      "Değerlendirme": "181647",
      "metacritic": "82"
    },
    "paragraf": "Üç Kral, Körfez Savaşı sonrasında Irak'ta geçiyor ve macera dolu bir hazine avı hikayesini anlatıyor. Mark Wahlberg imdb puanı yüksek bir oyuncu olarak, filmin farklı hikaye tarzına katkıda bulunuyor. Bu filmde, savaşın sadece çatışma değil, aynı zamanda insan hikayeleriyle dolu olduğunu gösteriyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/mark-wahlberg-en-iyi-10-filmi#bolum-4",
    "name": "Lone Survivor - Son Kalan",
    "image": "/images/movies/Mark_Wahlberg_lone_survivor_-_son_kalan.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Wahlberg",
        "Taylor Kitsch"
      ],
      "Kategori": [
        "Savaş",
        "Biyografi"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 1 dk.",
      "Yönetmen": "Peter Berg",
      "imdb": "7.5/10",
      "Değerlendirme": "309565",
      "metacritic": "60"
    },
    "paragraf": "Son Kalan, Mark Wahlberg en iyi filmi olmaya aday yapımlardan biri. Film, bir grup Amerikan komandosu, Afganistan'da tehlikeli bir görevdeyken yaşam mücadelesi verir. Bu biyografik savaş filmi, Mark Wahlberg'in başrolü canlandırdığı etkileyici sahnelerle güçlenmiştir. İzleyicilere adrenalin dolu anlar yaşatıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/mark-wahlberg-en-iyi-10-filmi#bolum-3",
    "name": "The Fighter - Dövüşçü",
    "image": "/images/movies/Mark_Wahlberg_the_fighter_-_dovuscu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Wahlberg",
        "Christian Bale"
      ],
      "Kategori": [
        "Dram",
        "Spor"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 56 dk.",
      "Yönetmen": "David O. Russell",
      "imdb": "7.8/10",
      "Değerlendirme": "391673",
      "metacritic": "79"
    },
    "paragraf": "Dövüşçü, gerçek bir hikayeye dayanıyor ve profesyonel boksör Micky Ward'ın hayatını merkezine alıyor. Mark Wahlberg, Micky'nin ailesi ve kariyeri arasında denge kurarken zorlukların üstesinden gelmeye çalışan karakteri başarıyla canlandırıyor. Filmin güçlü hikayesi ve Wahlberg'in performansı, filmi Mark Wahlberg en iyi filmleri arasında üst sıralara taşıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/mark-wahlberg-en-iyi-10-filmi#bolum-2",
    "name": "The Departed - Köstebek",
    "image": "/images/movies/Mark_Wahlberg_the_departed_-_kostebek.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Wahlberg",
        "Matt Damon",
        "Leonardo DiCaprio"
      ],
      "Kategori": [
        "Suç",
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 31 dk.",
      "Yönetmen": "Martin Scorsese",
      "imdb": "8.5/10",
      "Değerlendirme": "1438631",
      "metacritic": "85"
    },
    "paragraf": "Köstebek, Martin Scorsese'nin yönetmenliğinde suç ve gerilim dolu bir hikaye sunuyor. Mark Wahlberg, filmde zekası ve karizmasıyla öne çıkan bir polis memurunu canlandırıyor. Film, Boston'un yeraltı dünyasında geçen karmaşık bir köstebek oyununu anlatıyor. Eleştirmenler tarafından beğenilen bu yapım, Mark Wahlberg en iyi filmleri arasında önemli bir yere sahiptir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/mark-wahlberg-en-iyi-10-filmi#bolum-1",
    "name": "Boogie Nights - Ateşli Geceler",
    "image": "/images/movies/Mark_Wahlberg_boogie_nights_-_atesli_geceler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mark Wahlberg",
        "Burt Reynolds",
        "Luis Guzmán"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1997",
      "Süre": "2 sa. 35 dk.",
      "Yönetmen": "Paul Thomas Anderson",
      "imdb": "7.9/10",
      "Değerlendirme": "284940",
      "metacritic": "86"
    },
    "paragraf": "Ateşli Geceler, Mark Wahlberg'in film kariyerindeki dönüm noktalarından biri olarak kabul ediliyor. Döneminin önemli yapımlarından olan bu film, 1970'ler ve 1980'lerin porno endüstrisinde geçen çalkantılı ve dramatik bir hikayeyi anlatıyor. Wahlberg, bu filmdeki performansıyla Mark Wahlberg imdb listelerinde beğeni toplamıştır. Ateşli Geceler, Wahlberg'in kariyerinin en güçlü performanslarından birini sergiliyor."
  }

];

const ana_resim = "/images/ana_gorseller/mark-wahlberg-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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