
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DanielCraigEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "daniel-craig-en-iyi-10-filmi";
const baslik = "Daniel Craig en iyi 10 filmi";
const metin = "Daniel Craig, sinema dünyasında etkileyici bir kariyere sahip olan ve birçok başarılı projede yer almış bir aktördür. Onun en iyi performanslarını derlediğimiz bu liste, Daniel Craig filmleri arasında bir yolculuğa çıkmanıza yardımcı olacak. Oyuncunun birbirinden farklı rollerdeki güçlü sahnelerini inceleyeceğiz.";
const bitis_metin = "Bu yazıda, Daniel Craig'in kariyerindeki en önemli filmleri derledik. Daniel Craig en iyi filmleri listesini incelerken oyunculuğunun çeşitliliğini ve yeteneğini bir kez daha görmek mümkün. Umarız, bu liste sizin için bir keşif yolculuğu olmuştur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["daniel","craig","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:04:26+03:00";
const degistirilmeTarihi = "2024-08-16T17:04:26+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt0427392",
    "url": "https://enonlar.com/daniel-craig-en-iyi-10-filmi#bolum-10",
    "name": "The Invasion - İstila",
    "image": "/images/movies/Daniel_Craig_the_invasion_-_istila.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Daniel Craig",
        "Nicole Kidman"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 39 dk.",
      "Yönetmen": "Oliver Hirschbiegel",
      "imdb": "5.9/10",
      "Değerlendirme": "83262",
      "metacritic": "45"
    },
    "paragraf": "The Invasion - İstila, ünlü yazar Jack Finney'in romanına dayanan bir bilim kurgu gerilim filmidir. Daniel Craig oynadığı filmler içinde farklı bir konumda olan bu yapımda, mücadeleci bir doktoru canlandırıyor. Yönetmenliği Oliver Hirschbiegel tarafından yapılan filmde Craig'in performansını izlemek oldukça etkileyici."
  },
  {
    "num": "9",
    "title_id": "tt1568346",
    "url": "https://enonlar.com/daniel-craig-en-iyi-10-filmi#bolum-9",
    "name": "The Girl with the Dragon Tattoo - Ejderha Dövmeli Kız",
    "image": "/images/movies/Daniel_Craig_the_girl_with_the_dragon_tattoo_-_ejderha_dovmeli_kiz.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Daniel Craig",
        "Rooney Mara"
      ],
      "Kategori": [
        "Suç",
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2011",
      "Süre": "2 sa. 38 dk.",
      "Yönetmen": "David Fincher",
      "imdb": "7.8/10",
      "Değerlendirme": "500099",
      "metacritic": "71"
    },
    "paragraf": "David Fincher'ın yönettiği bu filmde, Daniel Craig Mikael Blomkvist isimli araştırmacı gazeteciyi canlandırıyor. Ejderha Dövmeli Kız, Daniel Craig en iyi filmi arayanlar için mükemmel bir seçim. Polisiye ve gerilim unsurlarını bünyesinde barındıran bu filmde Craig, adalet arayışında sürükleyici bir performans sergiliyor."
  },
  {
    "num": "8",
    "title_id": "tt0385752",
    "url": "https://enonlar.com/daniel-craig-en-iyi-10-filmi#bolum-8",
    "name": "The Golden Compass - Altın Pusula",
    "image": "/images/movies/Daniel_Craig_the_golden_compass_-_altin_pusula.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Daniel Craig",
        "Nicole Kidman"
      ],
      "Kategori": [
        "Macera",
        "Aile",
        "Fantastik"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Chris Weitz",
      "imdb": "6.1/10",
      "Değerlendirme": "197788",
      "metacritic": "51"
    },
    "paragraf": "Philip Pullman'ın ünlü fantastik roman serisinin ilk kitabından uyarlanan Altın Pusula, Daniel Craig filmleri arasında farklı bir yere sahiptir. Craig burada Lord Asriel karakterini canlandırıyor. Film, etkileyici görsel efektleri ve macera dolu sahneleriyle dikkat çekiyor. Daniel Craig en iyi filmleri listesinde bu yapımın ayrı bir yeri var."
  },
  {
    "num": "7",
    "title_id": "tt1462041",
    "url": "https://enonlar.com/daniel-craig-en-iyi-10-filmi#bolum-7",
    "name": "Dream House - Korku Evi",
    "image": "/images/movies/Daniel_Craig_dream_house_-_korku_evi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Daniel Craig",
        "Rachel Weisz",
        "Naomi Watts"
      ],
      "Kategori": [
        "Dram",
        "Korku",
        "Gizem"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 32 dk.",
      "Yönetmen": "Jim Sheridan",
      "imdb": "6/10",
      "Değerlendirme": "69637",
      "metacritic": "35"
    },
    "paragraf": "Korku ve gerilim türündeki bu filmde Daniel Craig, ailesiyle birlikte yeni bir eve taşınan ve burada geçmişten gelen karanlık sırlarla yüzleşen bir yazarı canlandırmaktadır. Korku Evi, Daniel Craig en iyi filmleri arasında yerini alırken, karakterinin derinliğini ve dramatik performansını sergileme fırsatı sunuyor."
  },
  {
    "num": "6",
    "title_id": "tt0409847",
    "url": "https://enonlar.com/daniel-craig-en-iyi-10-filmi#bolum-6",
    "name": "Cowboys & Aliens - Kovboylar ve Uzaylılar",
    "image": "/images/movies/Daniel_Craig_cowboys_&_aliens_-_kovboylar_ve_uzaylilar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Daniel Craig",
        "Harrison Ford",
        "Abigail Spencer"
      ],
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu",
        "Vahşi Batı"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "Jon Favreau",
      "imdb": "6/10",
      "Değerlendirme": "234031",
      "metacritic": "50"
    },
    "paragraf": "Cowboys & Aliens, batı ve bilim kurgu türlerini başarılı bir şekilde birleştiren bir yapım. Daniel Craig'in başrolünde oynadığı bu film, Daniel Craig oynadığı filmler arasında aksiyonu bol bir seçim olarak öne çıkıyor. Craig'in performansı, filmdeki gizemi ve aksiyonu oldukça destekliyor."
  },
  {
    "num": "5",
    "title_id": "tt1034303",
    "url": "https://enonlar.com/daniel-craig-en-iyi-10-filmi#bolum-5",
    "name": "Defiance - Direniş",
    "image": "/images/movies/Daniel_Craig_defiance_-_direnis.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Daniel Craig",
        "Liev Schreiber"
      ],
      "Kategori": [
        "Savaş",
        "Dram",
        "Tarih"
      ],
      "Yıl": "2008",
      "Süre": "2 sa. 17 dk.",
      "Yönetmen": "Edward Zwick",
      "imdb": "7.1/10",
      "Değerlendirme": "156520",
      "metacritic": "58"
    },
    "paragraf": "İkinci Dünya Savaşı'nın etkileyici bir hikayesini anlatan Direniş filmi, Daniel Craig en iyi filmi arayışında olanlar için harika bir tercih olabilir. Craig, bu dönemde hayatta kalmaya çalışan bir grubun lideri olarak izleyicilere güçlü ve duygusal bir performans sunuyor."
  },
  {
    "num": "4",
    "title_id": "tt8946378",
    "url": "https://enonlar.com/daniel-craig-en-iyi-10-filmi#bolum-4",
    "name": "Knives Out - Bıçaklar Çekildi",
    "image": "/images/movies/Daniel_Craig_knives_out_-_bicaklar_cekildi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Daniel Craig",
        "Chris Evans"
      ],
      "Kategori": [
        "Suç",
        "Dram",
        "Komedi"
      ],
      "Yıl": "2019",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Rian Johnson",
      "imdb": "7.9/10",
      "Değerlendirme": "785557",
      "metacritic": "82"
    },
    "paragraf": "Knives Out, Agatha Christie tarzında bir cinayet soruşturmasını işlerken, Daniel Craig için farklı bir rol sunuyor. Benoit Blanc karakteriyle Craig, zeki bir dedektifi canlandırıyor. Film, Daniel Craig imdb geçmişinde parlak bir yer kaplıyor ve keyifli bir seyir sunduğu kesinlikle söylenebilir."
  },
  {
    "num": "3",
    "title_id": "tt0408306",
    "url": "https://enonlar.com/daniel-craig-en-iyi-10-filmi#bolum-3",
    "name": "Münich - Münih",
    "image": "/images/movies/Daniel_Craig_munich_-_munih.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Daniel Craig",
        "Eric Bana"
      ],
      "Kategori": [
        "Dram",
        "Gerilim",
        "Tarih"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 44 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "7.5/10",
      "Değerlendirme": "240778",
      "metacritic": "74"
    },
    "paragraf": "Steven Spielberg tarafından yönetilen Münih, tarihi olaylara dayanan dramatik bir gerilim filmi. Daniel Craig, Mossad ajanı olarak karşınıza çıkıyor. Bu film, Craig'in rol yeteneğini sergilediği ve Daniel Craig oynadığı filmler arasındaki en etkili yapımlardan biridir."
  },
  {
    "num": "2",
    "title_id": "tt1074638",
    "url": "https://enonlar.com/daniel-craig-en-iyi-10-filmi#bolum-2",
    "name": "Skyfall",
    "image": "/images/movies/Daniel_Craig_skyfall.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Daniel Craig",
        "Javier Bardem",
        "Judi Dench"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Gerilim"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 23 dk.",
      "Yönetmen": "Sam Mendes",
      "imdb": "7.8/10",
      "Değerlendirme": "736269",
      "metacritic": "81"
    },
    "paragraf": "Skyfall, efsanevi James Bond serisinin bir parçası olarak unutulmaz sahnelerle dolu. Daniel Craig en iyi filmleri arasında yer alan bu yapım, Craig'in Bond karakterine kattığı modern dokunuşla dikkat çekiyor. Filmin aksiyon, gerilim ve duygusal sahneleriyle izleyiciyi ekrana kilitlediği bir gerçek."
  },
  {
    "num": "1",
    "title_id": "tt0381061",
    "url": "https://enonlar.com/daniel-craig-en-iyi-10-filmi#bolum-1",
    "name": "Casino Royale - Kraliyet Kumarhanesi",
    "image": "/images/movies/Daniel_Craig_casino_royale_-_kraliyet_kumarhanesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Daniel Craig",
        "Eva Green"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Gerilim"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 24 dk.",
      "Yönetmen": "Martin Campbell",
      "imdb": "8/10",
      "Değerlendirme": "700410",
      "metacritic": "80"
    },
    "paragraf": "Daniel Craig'in bir Bond olarak kariyerine başladığı Casino Royale, modern bir başyapıt olarak kabul ediliyor. Daniel Craig filmleri arasında ikonik statüye sahip bu film, Craig'in Bond'u en iyi şekilde yorumladığını gösteriyor. Kesinlikle Daniel Craig en iyi filmi arayanların kaçırmaması gereken bir yapım."
  }

];

const ana_resim = "/images/ana_gorseller/daniel-craig-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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