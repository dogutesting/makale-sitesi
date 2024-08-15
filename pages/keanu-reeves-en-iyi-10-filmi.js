
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function KeanuReevesEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "keanu-reeves-en-iyi-10-filmi";
const baslik = "Keanu Reeves en iyi 10 filmi";
const metin = "Keanu Reeves, Hollywood'un en popüler ve sevilen aktörlerinden biridir. Kariyeri boyunca birçok başarılı projede yer aldı. Bu yazımızda, Keanu Reeves'in en iyi 10 filmi ile karşınızdayız. Bu filmler, izleyicilerden yüksek imdb puanları almış ve akıllarda yer edinmiştir.";
const bitis_metin = "Bu yazımızda Keanu Reeves'in kariyerinde iz bırakmış en iyi 10 filmini inceledik. Başarılı aktör, geniş kitlelere hitap eden yapımlarda ön plana çıkmıştır. Keanu Reeves'in sinema dünyasına katkıları hafızalardan silinmeyecek.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["keanu","reeves","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:20:01+03:00";
const degistirilmeTarihi = "2024-08-09T17:20:01+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt0970416",
    "url": "https://enonlar.com/keanu-reeves-en-iyi-10-filmibolum-10",
    "name": "The Day the Earth Stood Still - Dünyanın Durduğu Gün",
    "image": "/images/movies/Keanu_Reeves_the_day_the_earth_stood_still_-_dunyanin_durdugu_gun.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "1 sa. 44 dk.",
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Oyuncular": [
        "Keanu Reeves",
        "Jennifer Connelly"
      ],
      "Yönetmen": "Scott Derrickson",
      "imdb": "5.5/10",
      "Değerlendirme": "179773",
      "metacritic": "40"
    },
    "paragraf": "The Day the Earth Stood Still, Keanu Reeves'in 'Klaatu' adlı uzaylı bir varlığı canlandırdığı bilim kurgu ve gerilim dolu bir yapım. Film, insanlığın doğa üzerindeki etkilerini ve barış mesajını iletirken, keanu reeves filmleri imdb listesinde önemli bir yere sahiptir. İzleyiciler için keanu reeves en iyi 10 filmi arasında sayılabilir."
  },
  {
    "num": "9",
    "title_id": "tt0360486",
    "url": "https://enonlar.com/keanu-reeves-en-iyi-10-filmibolum-9",
    "name": "Constantine",
    "image": "/images/movies/Keanu_Reeves_constantine.jpg",
    "ozellikler": {
      "Yıl": "2005",
      "Süre": "2 sa. 1 dk.",
      "Kategori": [
        "Aksiyon",
        "Fantastik"
      ],
      "Oyuncular": [
        "Keanu Reeves",
        "Rachel Weisz"
      ],
      "Yönetmen": "Francis Lawrence",
      "imdb": "7/10",
      "Değerlendirme": "379038",
      "metacritic": "50"
    },
    "paragraf": "Constantine, doğaüstü olaylar ve karanlık güçlerle mücadele eden John Constantine karakteriyle izleyicileri büyülüyor. Keanu reeves oynadığı filmleri arasında fantastik ögelerinin yoğun olduğu bir yapım; keanu reeves en iyi filmleri listesinde nezih bir yere sahiptir."
  },
  {
    "num": "8",
    "title_id": "tt0118971",
    "url": "https://enonlar.com/keanu-reeves-en-iyi-10-filmibolum-8",
    "name": "The Devil's Advocate - Şeytanın Avukatı",
    "image": "/images/movies/Keanu_Reeves_the_devil's_advocate_-_seytanin_avukati.jpg",
    "ozellikler": {
      "Yıl": "1997",
      "Süre": "2 sa. 24 dk.",
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Oyuncular": [
        "Keanu Reeves",
        "Al Pacino"
      ],
      "Yönetmen": "Taylor Hackford",
      "imdb": "7.5/10",
      "Değerlendirme": "406959",
      "metacritic": "60"
    },
    "paragraf": "The Devil's Advocate, keanu reeves filmleri imdb verilerine göre yüksek puan alan bir drama-gerilim filmidir. Keanu Reeves ve Al Pacino'nun olağanüstü performanslarıyla dikkat çeken yapım, keanu reeves en iyi 10 filmi arasında yer alır. İnsan doğası ve ahlak üzerine düşündüren bir hikâyeye sahiptir."
  },
  {
    "num": "7",
    "title_id": "tt0111257",
    "url": "https://enonlar.com/keanu-reeves-en-iyi-10-filmibolum-7",
    "name": "Speed - Hız Tuzağı",
    "image": "/images/movies/Keanu_Reeves_speed_-_hiz_tuzagi.jpg",
    "ozellikler": {
      "Yıl": "1994",
      "Süre": "1 sa. 56 dk.",
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Oyuncular": [
        "Keanu Reeves",
        "Sandra Bullock"
      ],
      "Yönetmen": "Jan de Bont",
      "imdb": "7.3/10",
      "Değerlendirme": "396533",
      "metacritic": "78"
    },
    "paragraf": "Gerilimin doruk noktada olduğu Speed, keanu reeves oynadığı filmleri arasında aksiyon türünün en iyi örneklerinden birisidir. Keanu reeves en iyi filmleri listesinin vazgeçilmez parçası olan bu yapım, hızlı temposuyla izleyicilerini ekran başına kilitliyor."
  },
  {
    "num": "6",
    "title_id": "tt0102685",
    "url": "https://enonlar.com/keanu-reeves-en-iyi-10-filmibolum-6",
    "name": "Point Break - Kırılma Noktası",
    "image": "/images/movies/Keanu_Reeves_point_break_-_kirilma_noktasi.jpg",
    "ozellikler": {
      "Yıl": "1991",
      "Süre": "2 sa. 2 dk.",
      "Kategori": [
        "Aksiyon",
        "Suç"
      ],
      "Oyuncular": [
        "Keanu Reeves",
        "Patrick Swayze"
      ],
      "Yönetmen": "Kathryn Bigelow",
      "imdb": "7.3/10",
      "Değerlendirme": "205635",
      "metacritic": "59"
    },
    "paragraf": "Point Break, adrenalin dolu sahneleriyle keanu reeves en iyi 10 filmi arasında öne çıkan bir aksiyon filmidir. Katheryn Bigelow'un yönettiği bu yapımda, Reeves, karizmatik ve asi bir FBI ajanını canlandırmaktadır. Bu film, keanu reeves filmleri imdb listesinde unutulmaz bir yere sahiptir."
  },
  {
    "num": "5",
    "title_id": "tt6146586",
    "url": "https://enonlar.com/keanu-reeves-en-iyi-10-filmibolum-5",
    "name": "John Wick: Chapter 3 - Parabellum",
    "image": "/images/movies/Keanu_Reeves_john_wick__chapter_3_-_parabellum.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Süre": "2 sa. 11 dk.",
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Oyuncular": [
        "Keanu Reeves",
        "Halle Berry"
      ],
      "Yönetmen": "Chad Stahelski",
      "imdb": "7.4/10",
      "Değerlendirme": "433291",
      "metacritic": "73"
    },
    "paragraf": "John Wick: Chapter 3 - Parabellum, aksiyonu bol filmler arasında iddialı bir yapım olarak yer alıyor. Keanu Reeves'in güçlü performansı, onu keanu reeves en iyi filmleri arasında üst sıralara taşıyor. Film, heyecan dolu kovalamacaları ve dövüş sahneleri ile izleyiciler tarafından beğenilmiştir."
  },
  {
    "num": "4",
    "title_id": "tt2911666",
    "url": "https://enonlar.com/keanu-reeves-en-iyi-10-filmibolum-4",
    "name": "John Wick",
    "image": "/images/movies/Keanu_Reeves_john_wick.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "1 sa. 41 dk.",
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Oyuncular": [
        "Keanu Reeves",
        "Michael Nyqvist"
      ],
      "Yönetmen": "Chad Stahelski",
      "imdb": "7.4/10",
      "Değerlendirme": "749429",
      "metacritic": "68"
    },
    "paragraf": "John Wick, inişli çıkışlı bir aksiyon dünyasında intikam arayışındaki bir adamın hikayesini anlatıyor. Keanu Reeves'in unutulmaz performansıyla, keanu reeves oynadığı filmleri arasında benzersiz bir yere sahiptir. Aksiyonun doruğunda olan bu film, keanu reeves en iyi 10 filmi listemize damgasını vuruyor."
  },
  {
    "num": "3",
    "title_id": "tt4425200",
    "url": "https://enonlar.com/keanu-reeves-en-iyi-10-filmibolum-3",
    "name": "John Wick: Chapter 2",
    "image": "/images/movies/Keanu_Reeves_john_wick__chapter_2.jpg",
    "ozellikler": {
      "Yıl": "2017",
      "Süre": "2 sa. 2 dk.",
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Oyuncular": [
        "Keanu Reeves",
        "Riccardo Scamarcio"
      ],
      "Yönetmen": "Chad Stahelski",
      "imdb": "7.4/10",
      "Değerlendirme": "519572",
      "metacritic": "75"
    },
    "paragraf": "John Wick: Chapter 2, keanu reeves filmleri imdb sıralamalarında başarıyla yer bulmuş bir başka aksiyon harikası. Keanu reeves en iyi filmleri arasında yer alan bu yapım, serinin sürekleyici hikayesinin devamı niteliğinde ve izleyicileri macera dolu anlarla baş başa bırakıyor."
  },
  {
    "num": "2",
    "title_id": "tt0234215",
    "url": "https://enonlar.com/keanu-reeves-en-iyi-10-filmibolum-2",
    "name": "The Matrix Reloaded",
    "image": "/images/movies/Keanu_Reeves_the_matrix_reloaded.jpg",
    "ozellikler": {
      "Yıl": "2003",
      "Süre": "2 sa. 18 dk.",
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Oyuncular": [
        "Keanu Reeves",
        "Laurence Fishburne"
      ],
      "Yönetmen": "Lana Wachowski, Lilly Wachowski",
      "imdb": "7.2/10",
      "Değerlendirme": "636651",
      "metacritic": "62"
    },
    "paragraf": "The Matrix Reloaded, bilim kurgu dünyasında çığır açan yenilikleriyle keanu reeves en iyi 10 filmi arasında önemi bir yere sahiptir. Filmin görsel efektleri ve sıra dışı hikayesi, keanu reeves oynadığı filmleri arasında özel bir konumda yer almasını sağlamaktadır."
  },
  {
    "num": "1",
    "title_id": "tt0133093",
    "url": "https://enonlar.com/keanu-reeves-en-iyi-10-filmibolum-1",
    "name": "The Matrix",
    "image": "/images/movies/Keanu_Reeves_the_matrix.jpg",
    "ozellikler": {
      "Yıl": "1999",
      "Süre": "2 sa. 16 dk.",
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu"
      ],
      "Oyuncular": [
        "Keanu Reeves",
        "Laurence Fishburne"
      ],
      "Yönetmen": "Lana Wachowski, Lilly Wachowski",
      "imdb": "8.7/10",
      "Değerlendirme": "2079396",
      "metacritic": "73"
    },
    "paragraf": "The Matrix, kuşkusuz keanu reeves en iyi filmleri listesinin zirvesinde. Neo karakteri ile Keanu Reeves, sinema tarihinde iz bırakan bir performans sergiliyor. Bu film, yalnızca keanu reeves filmleri imdb listelerinde değil, tüm zamanların en iyi aksiyon ve bilim kurgu yapımları arasında da sürekli anılmaktadır."
  }

];

const ana_resim = "/images/ana_gorseller/keanu-reeves-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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