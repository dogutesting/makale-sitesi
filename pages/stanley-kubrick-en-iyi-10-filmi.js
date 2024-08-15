
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function StanleyKubrickEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "stanley-kubrick-en-iyi-10-filmi";
const baslik = "Stanley Kubrick en iyi 10 filmi";
const metin = "Stanley Kubrick, sinema tarihinde iz bırakmış bir yönetmendir. Onun eşsiz yönetmenlik tarzını taşıyan filmleri, sinema tutkunları tarafından büyük beğeni topluyor. İşte, stanley kubrick en iyi filmleri arasında yer alan, stanley kubrick filmleri listesi ve stanley kubrick filmleri imdb puanları ile ön plana çıkan 10 yapıt.";
const bitis_metin = "Stanley Kubrick'in sinemaya kattığı bu büyüleyici yapıtlarla, stanley kubrick filmleri imdb ve stanley kubrick filmleri listesi üzerinden bir kez daha hayranlık uyandırmayı başarıyoruz. Onun yönetmenliğindeki bu eserler, gelecekte de iz bırakmaya devam edecek.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["stanley","kubrick","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:23:02+03:00";
const degistirilmeTarihi = "2024-08-09T17:23:02+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt0093058",
    "url": "https://enonlar.com/stanley-kubrick-en-iyi-10-filmibolum-10",
    "name": "Full Metal Jacket - Full Metal Ceket",
    "image": "/images/movies/Matthew_Modine_full_metal_jacket_-_full_metal_ceket.jpg",
    "ozellikler": {
      "Yıl": "1987",
      "Süre": "1 sa. 56 dk.",
      "Kategori": [
        "Savaş",
        "Dram"
      ],
      "Oyuncular": [
        "Matthew Modine",
        "R. Lee Ermey"
      ],
      "Yönetmen": "Stanley Kubrick",
      "imdb": "8.2/10",
      "Değerlendirme": "798389",
      "metacritic": "78"
    },
    "paragraf": "Full Metal Jacket, Vietnam Savaşı'nı etkileyici bir şekilde ele alan bir Kubrick başyapıtıdır. Film, iki bölümde savaşı önce eğitim kampında, sonra ise gerçek savaş meydanında işler. Bu bakış açısı, stanley kubrick en iyi filmleri arasında önemli bir yer edinmiştir."
  },
  {
    "num": "9",
    "title_id": "tt0120663",
    "url": "https://enonlar.com/stanley-kubrick-en-iyi-10-filmibolum-9",
    "name": "Eyes Wide Shut - Gözleri Tamamen Kapalı",
    "image": "/images/movies/Tom_Cruise_eyes_wide_shut_-_gozleri_tamamen_kapali.jpg",
    "ozellikler": {
      "Yıl": "1999",
      "Süre": "2 sa. 39 dk.",
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Oyuncular": [
        "Tom Cruise",
        "Nicole Kidman"
      ],
      "Yönetmen": "Stanley Kubrick",
      "imdb": "7.5/10",
      "Değerlendirme": "380560",
      "metacritic": "69"
    },
    "paragraf": "Kubrick'in ölümünden kısa bir süre önce tamamladığı Eyes Wide Shut, izleyicilere karmaşık insan ilişkileri üzerinde derinlemesine düşünme fırsatı sunuyor. Film, gizem dolu atmosferi ve güçlü performansları ile stanley kubrick filmleri listesi içinde dikkat çekiyor."
  },
  {
    "num": "8",
    "title_id": "tt0066921",
    "url": "https://enonlar.com/stanley-kubrick-en-iyi-10-filmibolum-8",
    "name": "A Clockwork Orange - Otomatik Portakal",
    "image": "/images/movies/Malcolm_McDowell_a_clockwork_orange_-_otomatik_portakal.jpg",
    "ozellikler": {
      "Yıl": "1971",
      "Süre": "2 sa. 16 dk.",
      "Kategori": [
        "Dram",
        "Bilim Kurgu"
      ],
      "Oyuncular": [
        "Malcolm McDowell",
        "Patrick Magee"
      ],
      "Yönetmen": "Stanley Kubrick",
      "imdb": "8.3/10",
      "Değerlendirme": "889005",
      "metacritic": "77"
    },
    "paragraf": "A Clockwork Orange, distopik bir gelecekte şiddet dolu bir dünyayı gözler önüne seriyor. Bu film, sadece şok edici içeriğiyle değil, aynı zamanda Stanley Kubrick'in dehasını yansıtan görsel stiliyle stanley kubrick filmleri imdb sıralamasında üst sıraları çekiyor."
  },
  {
    "num": "7",
    "title_id": "tt0049406",
    "url": "https://enonlar.com/stanley-kubrick-en-iyi-10-filmibolum-7",
    "name": "The Killing - Son Darbe",
    "image": "/images/movies/Sterling_Hayden_the_killing_-_son_darbe.jpg",
    "ozellikler": {
      "Yıl": "1956",
      "Süre": "1 sa. 25 dk.",
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Oyuncular": [
        "Sterling Hayden",
        "Coleen Gray"
      ],
      "Yönetmen": "Stanley Kubrick",
      "imdb": "7.9/10",
      "Değerlendirme": "99134",
      "metacritic": "91"
    },
    "paragraf": "The Killing, organize bir soygun planının hikayesini anlatan nefes kesici bir suç filmi. Stanley Kubrick'in erken dönem işlerinden biri olmasına rağmen, bu film onun stilistik yaklaşımını ve yönetmenlik becerilerini gözler önüne seriyor."
  },
  {
    "num": "6",
    "title_id": "tt0050825",
    "url": "https://enonlar.com/stanley-kubrick-en-iyi-10-filmibolum-6",
    "name": "Paths of Glory - Zafer Yolları",
    "image": "/images/movies/Kirk_Douglas_paths_of_glory_-_zafer_yollari.jpg",
    "ozellikler": {
      "Yıl": "1957",
      "Süre": "1 sa. 28 dk.",
      "Kategori": [
        "Savaş",
        "Dram"
      ],
      "Oyuncular": [
        "Kirk Douglas",
        "Ralph Meeker"
      ],
      "Yönetmen": "Stanley Kubrick",
      "imdb": "8.4/10",
      "Değerlendirme": "215386",
      "metacritic": "90"
    },
    "paragraf": "Paths of Glory, I. Dünya Savaşı sırasında gerçekleşen askerî bir olayın trajik etkisini irdeleyen güçlü bir savaş filmi. Stanley Kubrick, bu eseriyle stanley kubrick filmleri listesi içerisindeki yerini sağlamlaştırmıştır ve izleyicilere unutulmaz bir sinema deneyimi sunmaktadır."
  },
  {
    "num": "5",
    "title_id": "tt0081505",
    "url": "https://enonlar.com/stanley-kubrick-en-iyi-10-filmibolum-5",
    "name": "The Shining - Cinnet",
    "image": "/images/movies/Jack_Nicholson_the_shining_-_cinnet.jpg",
    "ozellikler": {
      "Yıl": "1980",
      "Süre": "2 sa. 26 dk.",
      "Kategori": [
        "Korku",
        "Dram"
      ],
      "Oyuncular": [
        "Jack Nicholson",
        "Shelley Duvall"
      ],
      "Yönetmen": "Stanley Kubrick",
      "imdb": "8.4/10",
      "Değerlendirme": "1121648",
      "metacritic": "68"
    },
    "paragraf": "The Shining, Stephen King'in romanından uyarlanan bir psikolojik korku filmidir ve izleyenleri her daim etkisi altına almayı başarır. Bu film, Kubrick’in yönetmenlik dâhilinde oluşturduğu ikonik sahneleriyle stanley kubrick filmleri imdb sıralamasında yer etmiştir."
  },
  {
    "num": "4",
    "title_id": "tt0072684",
    "url": "https://enonlar.com/stanley-kubrick-en-iyi-10-filmibolum-4",
    "name": "Barry Lyndon",
    "image": "/images/movies/Ryan_O'Neal_barry_lyndon.jpg",
    "ozellikler": {
      "Yıl": "1975",
      "Süre": "3 sa. 5 dk.",
      "Kategori": [
        "Dram",
        "Macera"
      ],
      "Oyuncular": [
        "Ryan O'Neal",
        "Marisa Berenson"
      ],
      "Yönetmen": "Stanley Kubrick",
      "imdb": "8.1/10",
      "Değerlendirme": "185462",
      "metacritic": "89"
    },
    "paragraf": "Barry Lyndon, görsel güzelliği ve tarihi gerçekçiliğiyle baş döndüren bir Kubrick klasiğidir. Bu film, sanat yönetimi ve kostüm tasarımıyla göz doldururken, kubrick'in eşsiz vizyonunu stanley kubrick filmleri listesi içinde bir adım öne taşımıştır."
  },
  {
    "num": "3",
    "title_id": "tt0057012",
    "url": "https://enonlar.com/stanley-kubrick-en-iyi-10-filmibolum-3",
    "name": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb - Dr. Garipaşk veya: Nasıl Kaygılanmayı Bırakıp Bombayı Sevmeyi Öğrendim",
    "image": "/images/movies/Peter_Sellers_dr._strangelove_or__how_i_learned_to_stop_worrying_and_love_the_bomb_-_dr._garipask_veya__nasil_kaygilanmayi_birakip_bombayi_sevmeyi_ogrendim.jpg",
    "ozellikler": {
      "Yıl": "1964",
      "Süre": "1 sa. 35 dk.",
      "Kategori": [
        "Komedi",
        "Savaş"
      ],
      "Oyuncular": [
        "Peter Sellers",
        "George C. Scott"
      ],
      "Yönetmen": "Stanley Kubrick",
      "imdb": "8.3/10",
      "Değerlendirme": "522703",
      "metacritic": "97"
    },
    "paragraf": "Dr. Strangelove, nükleer savaşın absürtlüğünü eğlenceli bir şekilde ele alan bir kara mizah şaheseri. Bu film, Kubrick'in dehasını ve eleştirel bakış açısını bir araya getirerek stanley kubrick en iyi filmleri arasında kendine ayrıcalıklı bir yer edinmiştir."
  },
  {
    "num": "2",
    "title_id": "tt0062622",
    "url": "https://enonlar.com/stanley-kubrick-en-iyi-10-filmibolum-2",
    "name": "2001: A Space Odyssey - 2001: Bir Uzay Destanı",
    "image": "/images/movies/Keir_Dullea_2001__a_space_odyssey_-_2001__bir_uzay_destani.jpg",
    "ozellikler": {
      "Yıl": "1968",
      "Süre": "2 sa. 29 dk.",
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Oyuncular": [
        "Keir Dullea",
        "Gary Lockwood"
      ],
      "Yönetmen": "Stanley Kubrick",
      "imdb": "8.3/10",
      "Değerlendirme": "727579",
      "metacritic": "84"
    },
    "paragraf": "2001: A Space Odyssey, bilim kurgu sinemasının mihenk taşlarından biri olarak kabul edilen bir başyapıt. Bu film, hem görsel hem de anlatımsal olarak etkileyici bir uzay yolculuğunu konu alarak stanley kubrick filmleri listesi içerisinde büyük bir hayran kitlesine sahiptir."
  },
  {
    "num": "1",
    "title_id": "tt0056193",
    "url": "https://enonlar.com/stanley-kubrick-en-iyi-10-filmibolum-1",
    "name": "Lolita",
    "image": "/images/movies/James_Mason_lolita.jpg",
    "ozellikler": {
      "Yıl": "1962",
      "Süre": "2 sa. 33 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "James Mason",
        "Sue Lyon"
      ],
      "Yönetmen": "Stanley Kubrick",
      "imdb": "7.5/10",
      "Değerlendirme": "109849",
      "metacritic": "79"
    },
    "paragraf": "Lolita, Vladimir Nabokov'un tartışmalı romanından uyarlanan ve farklı yorumlanış biçimiyle dikkat çeken bir Kubrick yapımıdır. Film, cesur anlatımı ve karmaşık karakterleriyle en iyi stanley kubrick filmleri arasında sayılmaktadır."
  }

];

const ana_resim = "/images/ana_gorseller/stanley-kubrick-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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