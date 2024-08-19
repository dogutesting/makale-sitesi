
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function CareyMulliganEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "carey-mulligan-en-iyi-10-filmi";
const baslik = "Carey Mulligan en iyi 10 filmi";
const metin = "Carey Mulligan, son yılların en başarılı İngiliz aktrislerinden biri oldu. Kariyerinde pek çok unutulmaz performansa imza atan Mulligan, çok yönlülüğü ve üstün oyunculuk yetenekleriyle dikkat çekiyor. İşte Carey Mulligan filmleri arasında parlayan en iyi 10 yapıma yakından bakıyoruz.";
const bitis_metin = "Carey Mulligan imdb puanlarına göre en iyi filmleri ve oyunculuk performanslarıyla her zaman hayran bırakıyor. Sizlere sunduğumuz bu listede, oyuncunun kariyerindeki önemli noktaları inceledik. Mulligan'ın gelecekteki projeleri merakla bekleniyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["carey","mulligan","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:45:36+03:00";
const degistirilmeTarihi = "2024-08-16T16:45:36+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt2935476",
    "url": "https://enonlar.com/carey-mulligan-en-iyi-10-filmi#bolum-10",
    "name": "Far from the Madding Crowd - Çılgın Kalabalıktan Uzak",
    "image": "/images/movies/Carey_Mulligan_far_from_the_madding_crowd_-_cilgin_kalabaliktan_uzak.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Carey Mulligan",
        "Lee Van Cleef",
        "Matthias Schoenaerts"
      ],
      "Kategori": [
        "Dramatik Romantizm"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "Thomas Vinterberg",
      "imdb": "7.1/10",
      "Değerlendirme": "54303",
      "metacritic": "71"
    },
    "paragraf": "Carey Mulligan, 19. yüzyıl İngiltere'sinin güçlü kadın karakterlerinden biri olan Bathsheba Everdene'i canlandırarak büyük beğeni kazandı. Carey Mulligan en iyi filmleri arasında gösterilen bu yapım, oyuncunun zarafeti ve doğal oyunculuğuyla dikkat çekiyor. Carey Mulligan oynadığı filmler içerisinde farklılığı ve duygusal derinliği ile öne çıkıyor."
  },
  {
    "num": "9",
    "title_id": "tt3077214",
    "url": "https://enonlar.com/carey-mulligan-en-iyi-10-filmi#bolum-9",
    "name": "Suffragette - Diren!",
    "image": "/images/movies/Carey_Mulligan_suffragette_-_diren!.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Carey Mulligan",
        "Lee Van Cleef",
        "Anne-Marie Duff",
        "Grace Stottor"
      ],
      "Kategori": [
        "Dram",
        "Tarih"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Sarah Gavron",
      "imdb": "6.9/10",
      "Değerlendirme": "44993",
      "metacritic": "64"
    },
    "paragraf": "Suffragette, İngiltere'de kadınların oy hakkı için verdiği mücadeleyi konu alıyor. Carey Mulligan en iyi filmi arasında yer alan bu yapımda, bir çamaşırcı kadını canlandırarak toplumsal değişim arzusunu ve baskının sembolü olan bir hikayeyi bizlere aktarıyor. Carey Mulligan filmleri arasında güçlü bir etki yaratıyor."
  },
  {
    "num": "8",
    "title_id": "tt1027718",
    "url": "https://enonlar.com/carey-mulligan-en-iyi-10-filmi#bolum-8",
    "name": "Wall Street: Money Never Sleeps - Wall Street: Para Asla Uyumaz",
    "image": "/images/movies/Carey_Mulligan_wall_street__money_never_sleeps_-_wall_street__para_asla_uyumaz.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Carey Mulligan",
        "Lee Van Cleef",
        "Richard Stratton",
        "Harry Kerrigan"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2010",
      "Süre": "2 sa. 13 dk.",
      "Yönetmen": "Oliver Stone",
      "imdb": "6.2/10",
      "Değerlendirme": "107131",
      "metacritic": "59"
    },
    "paragraf": "Carey Mulligan, bu gerilim dolu filmde Shia LaBeouf ile başrolü paylaşıyor. Amerikan finans dünyasının perde arkasına dair önemli detaylara odaklanan yapım, Carey Mulligan'ın çok yönlü oyunculuğunu bir kez daha gözler önüne seriyor. Carey Mulligan imdb yorumlarında olumlu notlar alarak dikkat çekti."
  },
  {
    "num": "7",
    "title_id": "tt5929754",
    "url": "https://enonlar.com/carey-mulligan-en-iyi-10-filmi#bolum-7",
    "name": "Wildlife - Yangın Yeri",
    "image": "/images/movies/Carey_Mulligan_wildlife_-_yangin_yeri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Carey Mulligan",
        "Lee Van Cleef",
        "Ed Oxenbould",
        "Jake Gyllenhaal"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 45 dk.",
      "Yönetmen": "Paul Dano",
      "imdb": "6.8/10",
      "Değerlendirme": "31697",
      "metacritic": "80"
    },
    "paragraf": "Carey Mulligan, Paul Dano yönetmenliğinde çekilen bu dramatik yapımda, güçlü ve bağımsız bir karaktere hayat veriyor. Film, bir ailenin dağılışını ve bu süreçte yaşanan duygusal çalkantıları etkileyici bir şekilde anlatıyor. Carey Mulligan oynadığı filmlerden biri olan Wildlife, derin bir iz bırakıyor."
  },
  {
    "num": "6",
    "title_id": "tt1152836",
    "url": "https://enonlar.com/carey-mulligan-en-iyi-10-filmi#bolum-6",
    "name": "Public Enemies - Halk Düşmanları",
    "image": "/images/movies/Carey_Mulligan_public_enemies_-_halk_dusmanlari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Carey Mulligan",
        "Lee Van Cleef",
        "Christian Bale",
        "Christian Stolte"
      ],
      "Kategori": [
        "Biyografik",
        "Suç"
      ],
      "Yıl": "2009",
      "Süre": "2 sa. 20 dk.",
      "Yönetmen": "Michael Mann",
      "imdb": "6.9/10",
      "Değerlendirme": "321706",
      "metacritic": "70"
    },
    "paragraf": "Public Enemies, 1930'lu yılların Amerika'sında geçen ve ünlü gangster John Dillinger'ın hayatına odaklanan bir film. Carey Mulligan, filmde dikkat çeken ama kısa bir rolle seyirci karşısına çıkıyor. Carey Mulligan imdb notları arasında önemli bir yere sahip olan bu yapım, oyuncunun farklı karakterlerle çalışabilme yeteneğini gösteriyor."
  },
  {
    "num": "5",
    "title_id": "tt1343092",
    "url": "https://enonlar.com/carey-mulligan-en-iyi-10-filmi#bolum-5",
    "name": "The Great Gatsby - Muhteşem Gatsby",
    "image": "/images/movies/Carey_Mulligan_the_great_gatsby_-_muhtesem_gatsby.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Carey Mulligan",
        "Lee Van Cleef",
        "Lisa Adam",
        "Frank Aldridge"
      ],
      "Kategori": [
        "Romantik",
        "Dram"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 23 dk.",
      "Yönetmen": "Baz Luhrmann",
      "imdb": "7.2/10",
      "Değerlendirme": "604010",
      "metacritic": "55"
    },
    "paragraf": "Carey Mulligan, F. Scott Fitzgerald'ın unutulmaz romanından uyarlanan Muhteşem Gatsby'de Daisy Buchanan karakterini canlandırıyor. Film, lüks ve ihtişam dolu 1920'ler Amerika'sını gözler önüne seriyor. Carey Mulligan en iyi filmleri arasında incelenen bu yapım, etkileyici bir atmosfer sunuyor."
  },
  {
    "num": "4",
    "title_id": "tt1174732",
    "url": "https://enonlar.com/carey-mulligan-en-iyi-10-filmi#bolum-4",
    "name": "An Education - Aşk Dersi",
    "image": "/images/movies/Carey_Mulligan_an_education_-_ask_dersi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Carey Mulligan",
        "Lee Van Cleef",
        "Olivia Williams"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2009",
      "Süre": "1 sa. 40 dk.",
      "Yönetmen": "Lone Scherfig",
      "imdb": "7.2/10",
      "Değerlendirme": "138596",
      "metacritic": "85"
    },
    "paragraf": "Genç bir öğrencinin hayatının karmaşık bir hale gelişi ve büyüme hikayesini anlatan An Education, Carey Mulligan'ı dünya çapında ünlü eden yapıtlardan biri. Bu film ile Carey Mulligan imdb'de büyük bir takdir kazandı. Carey Mulligan en iyi filmi olarak da ele alınan bu yapım, oyunculuk gücünü gösteriyor."
  },
  {
    "num": "3",
    "title_id": "tt2396589",
    "url": "https://enonlar.com/carey-mulligan-en-iyi-10-filmi#bolum-3",
    "name": "Mudbound - Savaştan Sonra",
    "image": "/images/movies/Carey_Mulligan_mudbound_-_savastan_sonra.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Carey Mulligan",
        "Lee Van Cleef",
        "Jason Clarke"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2017",
      "Süre": "2 sa. 14 dk.",
      "Yönetmen": "Dee Rees",
      "imdb": "7.4/10",
      "Değerlendirme": "54969",
      "metacritic": "85"
    },
    "paragraf": "Mississippi’de, zorlu koşullar altında yaşayan iki ailenin hikayesini anlatan Mudbound, Carey Mulligan en iyi filmleri arasında önemli bir yer tutuyor. Toplumsal sınıf ve ırklar arası ilişkileri derinlemesine inceleyen bu yapım, Carey Mulligan filmleri arasındaki kaliteyi bir kez daha gözler önüne seriyor."
  },
  {
    "num": "2",
    "title_id": "tt0780504",
    "url": "https://enonlar.com/carey-mulligan-en-iyi-10-filmi#bolum-2",
    "name": "Drive - Sürücü",
    "image": "/images/movies/Carey_Mulligan_drive_-_surucu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Carey Mulligan",
        "Ryan Gosling"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 40 dk.",
      "Yönetmen": "Nicolas Winding Refn",
      "imdb": "7.8/10",
      "Değerlendirme": "713512",
      "metacritic": "79"
    },
    "paragraf": "Gerilim ve aksiyon dolu bir hikaye sunan Drive, Carey Mulligan ile birlikte Ryan Gosling'in başrolleri paylaştığı unutulmaz bir yapım. Bu film, Carey Mulligan oynadığı filmler arasında aksiyon sahneleriyle öne çıkıyor. Mulligan'ın sessiz ama derin performansı izleyiciyi etkiliyor."
  },
  {
    "num": "1",
    "title_id": "tt9620292",
    "url": "https://enonlar.com/carey-mulligan-en-iyi-10-filmi#bolum-1",
    "name": "Promising Young Woman - Gelecek Vaat Eden Genç Kadın",
    "image": "/images/movies/Carey_Mulligan_promising_young_woman_-_gelecek_vaat_eden_genc_kadin.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Carey Mulligan",
        "Lee Van Cleef",
        "Adam Brody",
        "Ray Nicholson"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "2020",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Emerald Fennell",
      "imdb": "7.5/10",
      "Değerlendirme": "215418",
      "metacritic": "72"
    },
    "paragraf": "Carey Mulligan en iyi filmi olarak gösterilen Promising Young Woman, sıra dışı bir intikam hikayesini sahneliyor. Carey Mulligan, bu filmdeki performansıyla eleştirmenlerden tam not aldı. Carey Mulligan imdb yorumlarına baktığınızda, oyuncunun yeteneğinin zirvesine çıktığı bir yapım olarak gözlemlenir."
  }

];

const ana_resim = "/images/ana_gorseller/carey-mulligan-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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