
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function AnselElgortEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "ansel-elgort-en-iyi-10-filmi";
const baslik = "Ansel Elgort en iyi 10 filmi";
const metin = "Ansel Elgort, genç yaşına rağmen beyaz perdede iz bırakan performanslar sergilemiş bir aktör. Zengin filmografisiyle izleyicileri büyülemeyi başarıyor. Onun en iyi filmlerini sizler için derledik. İşte karşınızda, Ansel Elgort en iyi filmleri arasında yer alan en başarılı yapımlar.";
const bitis_metin = "Bu yazımızda Ansel Elgort'un kariyerine damga vuran en iyi 10 filmi inceledik. İzleyicilerini oldukça farklı diyarlara götüren bu yapımlar, onun eşsiz yeteneğinin bir göstergesi. Siz de bu filmleri izleyerek Ansel Elgort'un dünyasını keşfedebilirsiniz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["ansel","elgort","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:46:04+03:00";
const degistirilmeTarihi = "2024-08-16T16:46:04+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt3266284",
    "url": "https://enonlar.com/ansel-elgort-en-iyi-10-filmibolum-10",
    "name": "November Criminals - Kasım Suçluları",
    "image": "/images/movies/Ansel_Elgort_november_criminals_-_kasim_suclulari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ansel Elgort",
        "Lee Van Cleef",
        "Chloë Grace Moretz"
      ],
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 26 dk.",
      "Yönetmen": "Sacha Gervasi",
      "imdb": "5.3/10",
      "Değerlendirme": "11004",
      "metacritic": "31"
    },
    "paragraf": "Ansel Elgort'un başrolünü üstlendiği 'November Criminals', lise öğrencisi Addison'ın, arkadaşının ölümünü sorgulayan bir hikayesini anlatıyor. Ansel Elgort oynadığı filmler arasında suç ve drama türündeki bu yapım, onun farklı rollerdeki başarısını bir kez daha gözler önüne seriyor."
  },
  {
    "num": "9",
    "title_id": "tt3410834",
    "url": "https://enonlar.com/ansel-elgort-en-iyi-10-filmibolum-9",
    "name": "Allegiant - Kuralsız",
    "image": "/images/movies/Ansel_Elgort_allegiant_-_kuralsiz.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ansel Elgort",
        "Lee Van Cleef",
        "Shailene Woodley",
        "Theo James"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Yıl": "2016",
      "Süre": "2 sa.",
      "Yönetmen": "Robert Schwentke",
      "imdb": "5.7/10",
      "Değerlendirme": "136243",
      "metacritic": "33"
    },
    "paragraf": "The Divergent serisinin üçüncü bölümü olan 'Allegiant', distopik bir geleceği ele alıyor. Ansel Elgort, bu popüler seride Caleb rolüyle karşımıza çıkıyor. Ansel Elgort filmleri, izleyicileri her defasında farklı bir dünyaya davet ediyor."
  },
  {
    "num": "8",
    "title_id": "tt5639446",
    "url": "https://enonlar.com/ansel-elgort-en-iyi-10-filmibolum-8",
    "name": "Jonathan",
    "image": "/images/movies/Ansel_Elgort_jonathan.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ansel Elgort",
        "Lee Van Cleef",
        "Suki Waterhouse"
      ],
      "Kategori": [
        "Dram",
        "Bilim Kurgu"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 40 dk.",
      "Yönetmen": "Bill Oliver",
      "imdb": "5.9/10",
      "Değerlendirme": "6670",
      "metacritic": "62"
    },
    "paragraf": "'Jonathan', çift kişilik sahibi olan genç bir adamın hikayesini anlatıyor. Ansel Elgort'un iki karakteri aynı anda canlandırdığı bu film, onun oyunculuk yeteneğinin bir göstergesi. Ansel Elgort imdb skorları da bu filmle öne çıkıyor."
  },
  {
    "num": "7",
    "title_id": "tt2908446",
    "url": "https://enonlar.com/ansel-elgort-en-iyi-10-filmibolum-7",
    "name": "Insurgent - Kuralsız",
    "image": "/images/movies/Ansel_Elgort_insurgent_-_kuralsiz.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ansel Elgort",
        "Lee Van Cleef",
        "Kate Winslet",
        "Jai Courtney"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "Robert Schwentke",
      "imdb": "6.2/10",
      "Değerlendirme": "257885",
      "metacritic": "42"
    },
    "paragraf": "Uyumsuz serisinin ikinci filmi olan 'Insurgent', Ansel Elgort'un Caleb olarak sergilediği performansla dikkat çekiyor. Ansel Elgort en iyi filmi arasında yer almayan ancak yine de izlenmeye değer bir aksiyon sunuyor. Ansel Elgort oynadığı filmler içinde aksiyon sahneleri ile beğeni topluyor."
  },
  {
    "num": "6",
    "title_id": "tt5179598",
    "url": "https://enonlar.com/ansel-elgort-en-iyi-10-filmibolum-7",
    "name": "Billionaire Boys Club",
    "image": "/images/movies/Ansel_Elgort_billionaire_boys_club.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ansel Elgort",
        "Taron Egerton",
        "Kevin Spacey"
      ],
      "Kategori": [
        "Dram",
        "Suç"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "James Cox",
      "imdb": "5.6/10",
      "Değerlendirme": "14926",
      "metacritic": "30"
    },
    "paragraf": "Billionaire Boys Club Ansel Elgort en iyi filmleri arasında 6. sırada. 1980'lerin Los Angeles'ında geçen ve bir grup genç yatırımcının zengin olma hırsıyla başladığı ancak tehlikeli sonuçlara yol açan gerçek bir hikayeyi anlatıyor. Ansel Elgort ve Taron Egerton'un başrolleri paylaştığı bu film, Elgort'un dramatik yeteneklerini sergileyen yapımlardan biri olarak öne çıkıyor."
  },
  {
    "num": "5",
    "title_id": "tt3864056",
    "url": "https://enonlar.com/ansel-elgort-en-iyi-10-filmibolum-5",
    "name": "The Goldfinch - Saka Kuşu",
    "image": "/images/movies/Ansel_Elgort_the_goldfinch_-_saka_kusu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ansel Elgort",
        "Lee Van Cleef",
        "Oakes Fegley"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2019",
      "Süre": "2 sa. 29 dk.",
      "Yönetmen": "John Crowley",
      "imdb": "6.4/10",
      "Değerlendirme": "27438",
      "metacritic": "40"
    },
    "paragraf": "Bir sanat eserinin çalınmasıyla hayatı değişen bir genç adamın hikayesini işleyen 'The Goldfinch', Ansel Elgort'un derin bir karakter analizi sunduğu film olarak öne çıkıyor. Bu yapım, Ansel Elgort imdb listelerinde dikkat çeken çalışmalardan biri."
  },
  {
    "num": "4",
    "title_id": "tt3581652",
    "url": "https://enonlar.com/ansel-elgort-en-iyi-10-filmibolum-4",
    "name": "West Side Story - Batı Yakasının Hikayesi",
    "image": "/images/movies/Ansel_Elgort_west_side_story_-_bati_yakasinin_hikayesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ansel Elgort",
        "Lee Van Cleef",
        "Rachel Zegler"
      ],
      "Kategori": [
        "Müzikal",
        "Dram"
      ],
      "Yıl": "2021",
      "Süre": "2 sa. 36 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "7.1/10",
      "Değerlendirme": "96975",
      "metacritic": "85"
    },
    "paragraf": "Steven Spielberg'ün yönettiği 'West Side Story', klasik bir hikayenin yeniden yorumlanışı. Ansel Elgort'un bu müzikaldeki rolü, onun oyunculuk kariyerine farklı bir boyut kazandırıyor. Ansel Elgort filmleri arasında bir klasik olarak yerini almıştır."
  },
  {
    "num": "3",
    "title_id": "tt3179568",
    "url": "https://enonlar.com/ansel-elgort-en-iyi-10-filmibolum-3",
    "name": "Men, Women & Children - Erkekler, Kadınlar ve Çocuklar",
    "image": "/images/movies/Ansel_Elgort_men,_women_&_children_-_erkekler,_kadinlar_ve_cocuklar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ansel Elgort",
        "Lee Van Cleef",
        "Adam Sandler",
        "Jennifer Garner"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "Jason Reitman",
      "imdb": "6.6/10",
      "Değerlendirme": "33920",
      "metacritic": "38"
    },
    "paragraf": "İletişim çağındaki bireylerin yaşamlarını mizahi bir dille anlatan 'Men, Women & Children', Ansel Elgort'un yetkin performans sergilediği bir yapım. Ansel Elgort en iyi filmi listesinde olmamakla beraber, kaliteli bir drama deneyimi sunuyor."
  },
  {
    "num": "2",
    "title_id": "tt3890160",
    "url": "https://enonlar.com/ansel-elgort-en-iyi-10-filmibolum-2",
    "name": "Baby Driver - Tam Gaz",
    "image": "/images/movies/Ansel_Elgort_baby_driver_-_tam_gaz.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ansel Elgort",
        "Lee Van Cleef",
        "Jon Bernthal"
      ],
      "Kategori": [
        "Aksiyon",
        "Suç"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Edgar Wright",
      "imdb": "7.5/10",
      "Değerlendirme": "622922",
      "metacritic": "86"
    },
    "paragraf": "'Baby Driver', muhteşem müzikleri ve soluk kesen aksiyon sahneleriyle izleyicileri etkileyen bir film. Ansel Elgort'un olağanüstü bir sürücü olarak karşımıza çıktığı bu yapım, kesinlikle Ansel Elgort en iyi filmleri listesinde zirveye oynuyor."
  },
  {
    "num": "1",
    "title_id": "tt2582846",
    "url": "https://enonlar.com/ansel-elgort-en-iyi-10-filmibolum-1",
    "name": "The Fault in Our Stars - Aynı Yıldızın Altında",
    "image": "/images/movies/Ansel_Elgort_the_fault_in_our_stars_-_ayni_yildizin_altinda.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ansel Elgort",
        "Lee Van Cleef",
        "Shailene Woodley"
      ],
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 6 dk.",
      "Yönetmen": "Josh Boone",
      "imdb": "7.7/10",
      "Değerlendirme": "405324",
      "metacritic": "69"
    },
    "paragraf": "Teenage aşk hikayesi 'The Fault in Our Stars', Ansel Elgort'un en dokunaklı performanslarından birini sunduğu film olarak biliniyor. Kanser hastası gençlerin hayat mücadelesini konu alan bu yapım, Ansel Elgort imdb sıralamalarında en iyiler arasında yer alıyor."
  }

];

const ana_resim = "/images/ana_gorseller/ansel-elgort-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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