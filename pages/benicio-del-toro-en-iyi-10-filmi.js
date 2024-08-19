
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function BenicioDelToroEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "benicio-del-toro-en-iyi-10-filmi";
const baslik = "Benicio Del Toro en iyi 10 filmi";
const metin = "Benicio Del Toro'nun benzersiz performansları ve karakter yapısıyla sinema dünyasında oluşturduğu etkiyi keşfetmeye ne dersiniz? Benicio Del toro filmleri denildiğinde akla gelen en iyi yapımları sizin için sıraladık. İşte Benicio Del toro en iyi filmleri arasında yer alan ve Benicio Del oynadığı filmler arasından seçilen şaheserler.";
const bitis_metin = "Bu yazımızda, Benicio Del toro en iyi filmleri arasından seçtiğimiz 10 yapımı inceledik. Benicio Del toro oynadığı filmler ile sinemaya kattığı derinlik ve çeşitlilikle hafızalarda yer edinmeye devam ediyor. Sinemaseverler için mutlaka izlenmesi gereken bu filmleri kaçırmayın.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["benicio","del","toro","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:13:45+03:00";
const degistirilmeTarihi = "2024-08-16T16:13:45+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt0116277",
    "url": "https://enonlar.com/benicio-del-toro-en-iyi-10-filmi#bolum-10",
    "name": "The Fan - Takip",
    "image": "/images/movies/Benicio_Del_Toro_the_fan_-_takip.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benicio Del Toro",
        "Robert De Niro",
        "Wesley Snipes"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "1996",
      "Süre": "1 sa. 56 dk.",
      "Yönetmen": "Tony Scott",
      "imdb": "5.9/10",
      "Değerlendirme": "51761",
      "metacritic": "32"
    },
    "paragraf": "The Fan, Benicio Del Toro'nun oyunculuğunun öne çıktığı bir gerilim filmidir. Robert De Niro gibi usta bir isimle birlikte çalışan Del Toro, hikayenin gerilim dolu atmosferine mükemmel uyum sağlıyor. Film, futbol tutkunlarının sınırını geçmesini dramatik bir dille anlatıyor."
  },
  {
    "num": "9",
    "title_id": "tt0119086",
    "url": "https://enonlar.com/benicio-del-toro-en-iyi-10-filmi#bolum-9",
    "name": "Excess Baggage - Fazla Mesai",
    "image": "/images/movies/Benicio_Del_Toro_excess_baggage_-_fazla_mesai.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benicio Del Toro",
        "Alicia Silverstone"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "1997",
      "Süre": "1 sa. 41 dk.",
      "Yönetmen": "Marco Brambilla",
      "imdb": "5.4/10",
      "Değerlendirme": "14362",
      "metacritic": "34"
    },
    "paragraf": "Excess Baggage, Benicio Del Toro ve Alicia Silverstone'un başrolleri paylaştığı eğlenceli bir komedi filmidir. Del Toro, benzersiz karizmasını sergileyerek filme renk katıyor. Film, genç bir kadının sahte bir kaçırılma komplosu esnasında beklenmedik aşkı bulmasını işliyor."
  },
  {
    "num": "8",
    "title_id": "tt0315733",
    "url": "https://enonlar.com/benicio-del-toro-en-iyi-10-filmi#bolum-8",
    "name": "21 Grams - 21 Gram",
    "image": "/images/movies/Benicio_Del_Toro_21_grams_-_21_gram.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benicio Del Toro",
        "Sean Penn",
        "Naomi Watts"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2003",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Alejandro G. Iñárritu",
      "imdb": "7.6/10",
      "Değerlendirme": "247018",
      "metacritic": "70"
    },
    "paragraf": "21 Grams, Benicio Del Toro'nun performansıyla dikkat çeken güçlü bir dram yapımıdır. Film, birkaç yabancının kesişen hayatlarının derin trajedilerini anlatıyor. Del Toro, karakterinin karmaşıklığını ustaca yansıtarak, filmdeki duygusal yoğunluğa katkıda bulunuyor."
  },
  {
    "num": "7",
    "title_id": "tt0269347",
    "url": "https://enonlar.com/benicio-del-toro-en-iyi-10-filmi#bolum-7",
    "name": "The Hunted - Av",
    "image": "/images/movies/Benicio_Del_Toro_the_hunted_-_av.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benicio Del Toro",
        "Tommy Lee Jones"
      ],
      "Kategori": [
        "Macera"
      ],
      "Yıl": "2003",
      "Süre": "1 sa. 34 dk.",
      "Yönetmen": "William Friedkin",
      "imdb": "6.1/10",
      "Değerlendirme": "51928",
      "metacritic": "40"
    },
    "paragraf": "The Hunted, macera ve gerilim türünde Benicio Del Toro'nun yeteneklerini sergilediği bir başka yapımdır. Tommy Lee Jones ile karşı karşıya gelen Del Toro, izleyicilere nabzı yüksek bir hikaye sunuyor. Film, avcının av haline gelmesini konu edinen sürükleyici bir senaryoya sahip."
  },
  {
    "num": "6",
    "title_id": "tt5052474",
    "url": "https://enonlar.com/benicio-del-toro-en-iyi-10-filmi#bolum-6",
    "name": "Sicario: Day of the Soldado - Sicario: Askerin Günü",
    "image": "/images/movies/Benicio_Del_Toro_sicario__day_of_the_soldado_-_sicario__askerin_gunu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benicio Del Toro",
        "Josh Brolin"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Stefano Sollima",
      "imdb": "7.1/10",
      "Değerlendirme": "170154",
      "metacritic": "61"
    },
    "paragraf": "Sicario: Day of the Soldado, Benicio Del Toro'nun profesyonel suikastçı rolünü bir kez daha üstlendiği aksiyon dolu bir devam filmidir. Josh Brolin ile birlikte tehlikeli görevleri yerine getiren Del Toro, sinema severlere soluksuz izlenecek bir aksiyon sunuyor."
  },
  {
    "num": "5",
    "title_id": "tt0181865",
    "url": "https://enonlar.com/benicio-del-toro-en-iyi-10-filmi#bolum-5",
    "name": "Traffic - Trafik",
    "image": "/images/movies/Benicio_Del_Toro_traffic_-_trafik.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benicio Del Toro",
        "Michael Douglas",
        "Jacob Vargas"
      ],
      "Kategori": [
        "Suç"
      ],
      "Yıl": "2000",
      "Süre": "2 sa. 27 dk.",
      "Yönetmen": "Steven Soderbergh",
      "imdb": "7.6/10",
      "Değerlendirme": "221361",
      "metacritic": "86"
    },
    "paragraf": "Traffic, Benicio Del Toro'nun Oscar kazandığı çarpıcı bir suç dramıdır. Uyuşturucu ticareti üzerine kurulmuş bu epik filmde, Del Toro güzel bir performans sergiliyor. Filmde, uyuşturucu dağıtım ağının her düzeydeki etkisini gerçekçi bir bakış açısıyla izliyoruz."
  },
  {
    "num": "4",
    "title_id": "tt0374569",
    "url": "https://enonlar.com/benicio-del-toro-en-iyi-10-filmi#bolum-4",
    "name": "Che: Part Two - Che: İkinci Bölüm",
    "image": "/images/movies/Benicio_Del_Toro_che__part_two_-_che__ikinci_bolum.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benicio Del Toro",
        "Demián Bichir",
        "Rodrigo Santoro"
      ],
      "Kategori": [
        "Biyografi"
      ],
      "Yıl": "2008",
      "Süre": "2 sa. 15 dk.",
      "Yönetmen": "Steven Soderbergh",
      "imdb": "6.8/10",
      "Değerlendirme": "35219",
      "metacritic": "64"
    },
    "paragraf": "Che: Part Two, Benicio Del Toro'nun efsanevi lider Che Guevara'yı canlandırdığı etkileyici bir biyografi filmdir. Del Toro, rolüne derinlik ve gerçekçilik katarken, Che'nin hayatının son dönemini etkileyici bir şekilde aktarıyor. Film, tarih meraklıları için kaçırılmaması gereken bir yapımdır."
  },
  {
    "num": "3",
    "title_id": "tt3397884",
    "url": "https://enonlar.com/benicio-del-toro-en-iyi-10-filmi#bolum-3",
    "name": "Sicario",
    "image": "/images/movies/Benicio_Del_Toro_sicario.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benicio Del Toro",
        "Emily Blunt"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 1 dk.",
      "Yönetmen": "Denis Villeneuve",
      "imdb": "7.7/10",
      "Değerlendirme": "484886",
      "metacritic": "82"
    },
    "paragraf": "Sicario, Benicio Del Toro'nun olağanüstü performans sergilediği bir gerilim filmidir. Emily Blunt ile birlikte yer aldığı bu yapımda, Del Toro'nun karakterinin intikam ve adalet arayışı izleyicileri derinden etkiliyor. Film, gerilim dozu yüksek bir polisiye hikaye anlatıyor."
  },
  {
    "num": "2",
    "title_id": "tt0208092",
    "url": "https://enonlar.com/benicio-del-toro-en-iyi-10-filmi#bolum-2",
    "name": "Snatch - Kapışma",
    "image": "/images/movies/Benicio_Del_Toro_snatch_-_kapisma.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benicio Del Toro",
        "Brad Pitt",
        "Ade",
        "William Beck"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "2000",
      "Süre": "1 sa. 42 dk.",
      "Yönetmen": "Guy Ritchie",
      "imdb": "8.2/10",
      "Değerlendirme": "919762",
      "metacritic": "55"
    },
    "paragraf": "Snatch, karmaşık bir komedi suç filmi olarak Benicio Del Toro'nun yeteneklerini sergilediği bir başka başarılı projedir. Brad Pitt gibi isimlerle aynı kadroda yer alarak, filme eğlenceli bir dinamizm katıyor. Del Toro, bu yapımın mizahi anlatımını destekleyen önemli bir role sahip."
  },
  {
    "num": "1",
    "title_id": "tt0114814",
    "url": "https://enonlar.com/benicio-del-toro-en-iyi-10-filmi#bolum-1",
    "name": "The Usual Suspects - Olağan Şüpheliler",
    "image": "/images/movies/Benicio_Del_Toro_the_usual_suspects_-_olagan_supheliler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Benicio Del Toro",
        "Kevin Spacey",
        "Stephen Baldwin",
        "Gabriel Byrne"
      ],
      "Kategori": [
        "Suç"
      ],
      "Yıl": "1995",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Bryan Singer",
      "imdb": "8.5/10",
      "Değerlendirme": "1156212",
      "metacritic": "76"
    },
    "paragraf": "The Usual Suspects, Benicio Del Toro'nun ikonik performansıyla dikkat çeken klasik bir suç gerilimidir. Kevin Spacey'nin de yer aldığı film, izleyiciyi derinlemesine düşündüren bir hikaye sunuyor. Del Toro, canlandırdığı karakterle filme eşsiz bir lezzet katıyor."
  }

];

const ana_resim = "/images/ana_gorseller/benicio-del-toro-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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