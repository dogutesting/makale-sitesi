
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function TommyLeeJonesEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "tommy-lee-jones-en-iyi-10-filmi";
const baslik = "Tommy Lee Jones en iyi 10 filmi";
const metin = "Tommy Lee Jones'un benzersiz performanslarıyla sinema tarihinde iz bırakan rolleri sizler için derledik. Aksiyon, dram ve komedi alanlarında oynadığı karakterlerle anılan Tommy Lee Jones filmleri arasında hangi yapıtların öne çıktığını merak ediyor musunuz? İşte en iyi Tommy Lee Jones filmleri listemiz.";
const bitis_metin = "Bu listeyle, Tommy Lee Jones'un kariyerinde iz bırakan en iyi yapımlarından birkaçını sizlerle paylaştık. Umarız bu filmler, sinema keyfinizi artırır ve Jones'un yeteneğine bir kez daha hayran bırakır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["tommy","lee","jones","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:12:09+03:00";
const degistirilmeTarihi = "2024-08-16T16:12:09+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/tommy-lee-jones-en-iyi-10-filmibolum-10",
    "name": "Double Jeopardy - Çifte Tehlike",
    "image": "/images/movies/Tommy_Lee_Jones_double_jeopardy_-_cifte_tehlike.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tommy Lee Jones",
        "Ashley Judd"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "1999",
      "Süre": "1 sa. 45 dk.",
      "Yönetmen": "Bruce Beresford",
      "imdb": "6.5/10",
      "Değerlendirme": "97147",
      "metacritic": "41"
    },
    "paragraf": "Çifte Tehlike, Tommy Lee Jones'un başrolünde olduğu gerilim dolu bir yapım. Filmde, bir kadının haksız yere suçlandığı eşinin cinayetinden beraat etme mücadelesi anlatılır. Jones'un etkileyici performansı, bu filmi Tommy Lee Jones en iyi filmleri arasında üst sıralara taşır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/tommy-lee-jones-en-iyi-10-filmibolum-9",
    "name": "The Client - Müvekkil",
    "image": "/images/movies/Tommy_Lee_Jones_the_client_-_muvekkil.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tommy Lee Jones",
        "Susan Sarandon"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "1994",
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "Joel Schumacher",
      "imdb": "6.7/10",
      "Değerlendirme": "74478",
      "metacritic": "65"
    },
    "paragraf": "Müvekkil, Tommy Lee Jones'un unutulmaz performanslar sergilediği güçlü bir mahkeme gerilimi. Jones, yargı sisteminin karmaşık denizinde müvekkilini savunan bir avukat rolünü üstleniyor. Tommy Lee Jones oynadığı filmler arasında dikkat çeken uyarlamalardan biri olan bu yapıt, izleyiciyi ekrana kilitliyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/tommy-lee-jones-en-iyi-10-filmibolum-8",
    "name": "Space Cowboys - İhtiyar Delikanlılar",
    "image": "/images/movies/Tommy_Lee_Jones_space_cowboys_-_ihtiyar_delikanlilar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tommy Lee Jones",
        "Clint Eastwood"
      ],
      "Kategori": [
        "Macera",
        "Bilim Kurgu"
      ],
      "Yıl": "2000",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Clint Eastwood",
      "imdb": "6.5/10",
      "Değerlendirme": "87068",
      "metacritic": "73"
    },
    "paragraf": "İhtiyar Delikanlılar, uzay ve macera temasını ustalıkla işleyen bir yapıt. Tommy Lee Jones, uzay görevine çıkan tecrübeli bir astronotu canlandırıyor. Jones'un Clint Eastwood ile birlikte yaptığı bu film, mizah ve macera dolu sahneleriyle izleyenleri eğlendirirken, Tommy Lee Jones kovboy filmleri arasında farklı bir yere sahip."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/tommy-lee-jones-en-iyi-10-filmibolum-7",
    "name": "In the Valley of Elah - Elah Vadisi",
    "image": "/images/movies/Tommy_Lee_Jones_in_the_valley_of_elah_-_elah_vadisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tommy Lee Jones",
        "Charlize Theron"
      ],
      "Kategori": [
        "Dram",
        "Suç"
      ],
      "Yıl": "2007",
      "Süre": "2 sa. 1 dk.",
      "Yönetmen": "Paul Haggis",
      "imdb": "7.2/10",
      "Değerlendirme": "75409",
      "metacritic": "65"
    },
    "paragraf": "Elah Vadisi, oğlunun ordudayken kaybolmasının ardından gerçekleri araştıran bir babanın dramını konu alıyor. Tommy Lee Jones'un etkileyici bir performans sunduğu bu filmde, insanın adalet arayışındaki mücadelesi derinlemesine işleniyor. Tommy Lee Jones western filmleri arasında dramatik yapısıyla öne çıkıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/tommy-lee-jones-en-iyi-10-filmibolum-6",
    "name": "Lincoln",
    "image": "/images/movies/Tommy_Lee_Jones_lincoln.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tommy Lee Jones",
        "Daniel Day-Lewis",
        "Sally Field"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 30 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "7.3/10",
      "Değerlendirme": "274370",
      "metacritic": "87"
    },
    "paragraf": "Lincoln, Amerikan tarihinin en önemli figürlerinden birinin hayatını anlatan bu yapımda Tommy Lee Jones, güçlü bir politikacı olarak karşımıza çıkıyor. Film, Abraham Lincoln'un köleliği kaldırma mücadelesine odaklanıyor ve Tommy Lee Jones'un performansı bu biyografiyi unutulmaz kılıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/tommy-lee-jones-en-iyi-10-filmibolum-5",
    "name": "The Homesman - Yolcu",
    "image": "/images/movies/Tommy_Lee_Jones_the_homesman_-_yolcu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tommy Lee Jones",
        "Hilary Swank"
      ],
      "Kategori": [
        "Dram",
        "Vahşi Batı"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Tommy Lee Jones",
      "imdb": "6.6/10",
      "Değerlendirme": "36194",
      "metacritic": "68"
    },
    "paragraf": "Yolcu, vahşi batı atmosferinde güçlü bir kadın karakterin ve bir suçlunun zorlu yolculuğunu konu alıyor. Tommy Lee Jones'un hem yönetmenliğini yaptığı hem de başrolde yer aldığı bu film, Tommy Lee Jones western filmleri arasında otantik atmosferi ile dikkat çekiyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/tommy-lee-jones-en-iyi-10-filmibolum-4",
    "name": "No Country for Old Men - İhtiyarlara Yer Yok",
    "image": "/images/movies/Tommy_Lee_Jones_no_country_for_old_men_-_ihtiyarlara_yer_yok.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tommy Lee Jones",
        "Javier Bardem"
      ],
      "Kategori": [
        "Gerilim",
        "Suç"
      ],
      "Yıl": "2007",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Ethan Coen",
      "imdb": "8.2/10",
      "Değerlendirme": "1076407",
      "metacritic": "92"
    },
    "paragraf": "İhtiyarlara Yer Yok, modern klasikler arasında kabul edilen bu filmde Tommy Lee Jones, yaşlanan bir şerifi canlandırıyor. Coen Kardeşlerin yönetmenliğini yaptığı bu yapım, suç dünyasının karanlık yüzünü ve adaletsizliğin sürdüğü bir toplumu başarıyla yansıtıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/tommy-lee-jones-en-iyi-10-filmibolum-3",
    "name": "JFK",
    "image": "/images/movies/Tommy_Lee_Jones_jfk.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tommy Lee Jones",
        "Kevin Costner",
        "Sally Kirkland",
        "Anthony Ramirez"
      ],
      "Kategori": [
        "Dram",
        "Tarih"
      ],
      "Yıl": "1991",
      "Süre": "3 sa. 9 dk.",
      "Yönetmen": "Oliver Stone",
      "imdb": "8/10",
      "Değerlendirme": "171848",
      "metacritic": "72"
    },
    "paragraf": "JFK, Amerikan tarihine damgasını vuran bir suikastin perde arkasını araştıran bir avukatın hikayesini işliyor. Tommy Lee Jones, filmdeki güçlü performansıyla adaleti arayan tutkulu bir karakteri canlandırıyor. Tarihi olayların dramatik bir yorumunu sunan bu yapım, dikkat çekici."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/tommy-lee-jones-en-iyi-10-filmibolum-2",
    "name": "Men in Black - Siyah Giyen Adamlar",
    "image": "/images/movies/Tommy_Lee_Jones_men_in_black_-_siyah_giyen_adamlar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tommy Lee Jones",
        "Will Smith"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Komedi"
      ],
      "Yıl": "1997",
      "Süre": "1 sa. 38 dk.",
      "Yönetmen": "Barry Sonnenfeld",
      "imdb": "7.3/10",
      "Değerlendirme": "620720",
      "metacritic": "72"
    },
    "paragraf": "Siyah Giyen Adamlar, uzaylılarla dolu bir dünyada gizemli bir ajanı canlandıran Tommy Lee Jones ile ikonik bir yapım. Will Smith ile olan uyumlu performansı, izleyicilere eğlenceli dakikalar sunuyor. Aksiyon ve komedinin başarılı bir birleşimi olan film, Tommy Lee Jones en iyi filmleri arasında vazgeçilmez."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/tommy-lee-jones-en-iyi-10-filmibolum-1",
    "name": "The Fugitive - Kaçak",
    "image": "/images/movies/Tommy_Lee_Jones_the_fugitive_-_kacak.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tommy Lee Jones",
        "Harrison Ford"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "1993",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Andrew Davis",
      "imdb": "7.8/10",
      "Değerlendirme": "322908",
      "metacritic": "87"
    },
    "paragraf": "Kaçak, masumiyetini kanıtlamaya çalışan kaçak bir doktorun hikayesini işliyor. Tommy Lee Jones, izleyiciye soluksuz bir kovalamaca sunarken sergilediği oyunculukla Oscar ödülüne layık görülmüştür. Bu yapım, Tommy Lee Jones oynadığı filmler arasında en iyilerden biri olarak anılmaktadır."
  }

];

const ana_resim = "/images/ana_gorseller/tommy-lee-jones-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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