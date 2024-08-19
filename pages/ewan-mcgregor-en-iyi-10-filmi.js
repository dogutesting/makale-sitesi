
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EwanMcgregorEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "ewan-mcgregor-en-iyi-10-filmi";
const baslik = "Ewan McGregor en iyi 10 filmi";
const metin = "Ewan McGregor, çok yönlü performansları ve etkileyici oyunculuğuyla sinema dünyasında iz bırakmış bir isimdir. İşte onun en iyi filmlerini sizler için derledik. Ewan McGregor filmleri, hem eleştirmenlerden hem de izleyicilerden büyük beğeni toplamış yapımlardır.";
const bitis_metin = "Bu yazımızda Ewan McGregor'un en dikkat çekici ve başarılı 10 filmini sizlerle paylaştık. Onun filmografisi zengin ve etkileyici yapımlarla dolu. Ewan McGregor'un benzersiz performanslarını izlemek her zaman bir keyif olacaktır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["ewan","mcgregor","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:03:55+03:00";
const degistirilmeTarihi = "2024-08-16T17:03:55+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/ewan-mcgregor-en-iyi-10-filmi#bolum-10",
    "name": "Star Wars: Episode I - The Phantom Menace - Yıldız Savaşları: Bölüm I - Gizli Tehlike",
    "image": "/images/movies/Ewan_McGregor_star_wars__episode_i_-_the_phantom_menace_-_yildiz_savaslari__bolum_i_-_gizli_tehlike.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ewan McGregor",
        "Liam Neeson"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "1999",
      "Süre": "2 sa. 16 dk.",
      "Yönetmen": "George Lucas",
      "imdb": "6.5/10",
      "Değerlendirme": "868688",
      "metacritic": "51"
    },
    "paragraf": "Ewan McGregor en iyi filmleri arasında yer alan bu yapım, Yıldız Savaşları efsanesinin başlangıcını anlatıyor. Obi-Wan Kenobi rolündeki McGregor, muhteşem performansıyla hayranlarının gönlünde taht kurmuş durumda. Ewan McGregor imdb değerlendirmelerinde de bu performansı ile oldukça beğeni topladı."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/ewan-mcgregor-en-iyi-10-filmi#bolum-9",
    "name": "Moulin Rouge! - Kırmızı Değirmen",
    "image": "/images/movies/Ewan_McGregor_moulin_rouge!_-_kirmizi_degirmen.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ewan McGregor",
        "Nicole Kidman"
      ],
      "Kategori": [
        "Müzikal"
      ],
      "Yıl": "2001",
      "Süre": "2 sa. 7 dk.",
      "Yönetmen": "Baz Luhrmann",
      "imdb": "7.6/10",
      "Değerlendirme": "301540",
      "metacritic": "66"
    },
    "paragraf": "Moulin Rouge!, Ewan McGregor en iyi filmi listelerinde yer edinmeyi başarmış bir müzikal. Nicole Kidman ile başrolü paylaştığı yapım, büyüleyici görselliği ve duygusal hikayesi ile hafızalardaki yerini aldı. Ewan McGregor oynadığı filmler arasında bu film, kendine has bir şekilde öne çıkıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/ewan-mcgregor-en-iyi-10-filmi#bolum-8",
    "name": "Trainspotting - Trainspotting",
    "image": "/images/movies/Ewan_McGregor_trainspotting_-_trainspotting.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ewan McGregor",
        "Ewen Bremner"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1996",
      "Süre": "1 sa. 33 dk.",
      "Yönetmen": "Danny Boyle",
      "imdb": "8.1/10",
      "Değerlendirme": "732179",
      "metacritic": "83"
    },
    "paragraf": "Ewan McGregor filmleri arasında kült statüsüne ulaşmış Trainspotting, bağımlıklara ve topluma eleştirel bir bakış sunuyor. McGregor'un canlandırdığı Renton karakteri ile bir neslin sesi olmayı başarıyor. İzleyicileri etkilemeyi başarmış bu film, McGregor'un kariyerinde önemli bir yere sahip."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/ewan-mcgregor-en-iyi-10-filmi#bolum-7",
    "name": "Big Fish - Büyük Balık",
    "image": "/images/movies/Ewan_McGregor_big_fish_-_buyuk_balik.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ewan McGregor",
        "Albert Finney"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2003",
      "Süre": "2 sa. 5 dk.",
      "Yönetmen": "Tim Burton",
      "imdb": "8/10",
      "Değerlendirme": "461701",
      "metacritic": "58"
    },
    "paragraf": "Big Fish, Ewan McGregor en iyi filmleri arasında farklı bir yere sahiptir. Tim Burton'ın yönetmenliğindeki film, fantastik ve duygusal öğeleri harmanlayarak etkileyici bir hikaye sunuyor. McGregor, genç Edward Bloom rolüyle etkileyici bir performans sergiliyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/ewan-mcgregor-en-iyi-10-filmi#bolum-6",
    "name": "Star Wars: Episode III - Revenge of the Sith - Yıldız Savaşları: Bölüm III - Sith'in İntikamı",
    "image": "/images/movies/Ewan_McGregor_star_wars__episode_iii_-_revenge_of_the_sith_-_yildiz_savaslari__bolum_iii_-_sith'in_intikami.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ewan McGregor",
        "Natalie Portman"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 20 dk.",
      "Yönetmen": "George Lucas",
      "imdb": "7.6/10",
      "Değerlendirme": "855872",
      "metacritic": "68"
    },
    "paragraf": "Ewan McGregor oynadığı filmler arasında en ikonik rollerinden biri olan Obi-Wan Kenobi ile yer aldığı bu film, Star Wars hayranları için ayrı bir önem taşıyor. Sith'in İntikamı, macera ve görsel şölenin bir araya geldiği bir yapım."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/ewan-mcgregor-en-iyi-10-filmi#bolum-5",
    "name": "The Ghost Writer - Hayalet Yazar",
    "image": "/images/movies/Ewan_McGregor_the_ghost_writer_-_hayalet_yazar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ewan McGregor",
        "Jon Bernthal"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2010",
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "Roman Polanski",
      "imdb": "7.2/10",
      "Değerlendirme": "171672",
      "metacritic": "77"
    },
    "paragraf": "Roman Polanski'nin yönettiği The Ghost Writer, Ewan McGregor'un başrolde yer aldığı etkileyici bir gerilim filmi. Eski bir başbakanın hayatını kaleme alan bir yazarı canlandırdığı bu film, gerilim dolu hikayesi ve usta oyunculuklarıyla dikkat çekiyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/ewan-mcgregor-en-iyi-10-filmi#bolum-4",
    "name": "Doctor Sleep - Doktor Uyku",
    "image": "/images/movies/Ewan_McGregor_doctor_sleep_-_doktor_uyku.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ewan McGregor",
        "Rebecca Ferguson"
      ],
      "Kategori": [
        "Korku"
      ],
      "Yıl": "2019",
      "Süre": "2 sa. 32 dk.",
      "Yönetmen": "Mike Flanagan",
      "imdb": "7.3/10",
      "Değerlendirme": "221769",
      "metacritic": "59"
    },
    "paragraf": "Stephen King'in klasik eseri The Shining'in devamı olan Doctor Sleep, Ewan McGregor en iyi filmleri arasında yer alıyor. Filmde Danny Torrance karakterine hayat veren McGregor, izleyicileri bir kez daha büyüledi. Korku severler için kaçırılmaması gereken bir yapım."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/ewan-mcgregor-en-iyi-10-filmi#bolum-3",
    "name": "Black Hawk Down - Kara Şahin Düştü",
    "image": "/images/movies/Ewan_McGregor_black_hawk_down_-_kara_sahin_dustu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ewan McGregor",
        "Josh Hartnett"
      ],
      "Kategori": [
        "Savaş"
      ],
      "Yıl": "2001",
      "Süre": "2 sa. 24 dk.",
      "Yönetmen": "Ridley Scott",
      "imdb": "7.7/10",
      "Değerlendirme": "428048",
      "metacritic": "74"
    },
    "paragraf": "Black Hawk Down, 1993 yılında Somali'de geçen gerçek bir hikayeye dayanan güçlü bir savaş filmi. Ewan McGregor'un usta oyunculuğuyla dikkat çeken film, eleştirmenlerden tam not almış yapımlardan biri. Bu film, Ewan McGregor imdb değerlendirmelerinde de öne çıkıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/ewan-mcgregor-en-iyi-10-filmi#bolum-2",
    "name": "Star Wars: Episode II - Attack of the Clones - Yıldız Savaşları: Bölüm II - Klonların Saldırısı",
    "image": "/images/movies/Ewan_McGregor_star_wars__episode_ii_-_attack_of_the_clones_-_yildiz_savaslari__bolum_ii_-_klonlarin_saldirisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ewan McGregor",
        "Natalie Portman"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2002",
      "Süre": "2 sa. 22 dk.",
      "Yönetmen": "George Lucas",
      "imdb": "6.6/10",
      "Değerlendirme": "768462",
      "metacritic": "54"
    },
    "paragraf": "Ewan McGregor filmleri arasında Star Wars serisinin bu unutulmaz yapımı, Klon Savaşlarının nasıl başladığını gözler önüne seriyor. Obi-Wan Kenobi karakteri ile bir kez daha izleyicilerini etkileyen McGregor, bilim kurgu severlerin kalbini kazanmayı başarıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/ewan-mcgregor-en-iyi-10-filmi#bolum-1",
    "name": "Christopher Robin - Christopher Robin",
    "image": "/images/movies/Ewan_McGregor_christopher_robin_-_christopher_robin.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ewan McGregor",
        "Hayley Atwell"
      ],
      "Kategori": [
        "Aile"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Marc Forster",
      "imdb": "7.2/10",
      "Değerlendirme": "85674",
      "metacritic": "60"
    },
    "paragraf": "Christopher Robin, Ewan McGregor en iyi filmi olarak listemizin zirvesinde yer alıyor. Film, Winnie the Pooh'un büyülü dünyasını yeniden canlandırırken, McGregor'un samimi ve sıcak performansıyla izleyicilere unutulmaz anlar yaşatıyor. Aile filmleri arasında özel bir yere sahip."
  }

];

const ana_resim = "/images/ana_gorseller/ewan-mcgregor-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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