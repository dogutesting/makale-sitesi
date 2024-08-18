
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ChristianSlaterEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "christian-slater-en-iyi-10-filmi";
const baslik = "Christian Slater en iyi 10 filmi";
const metin = "Christian Slater, sinema dünyasında kendine özel bir yer edinmiş yetenekli bir aktördür. Christian Slater filmleri, izleyicileri derin hikayeleri ve etkileyici performansları ile büyüler. Bu yazıda, Slater'ın kariyerindeki en dikkat çeken yapımları inceledik.";
const bitis_metin = "Bu yazıda, Christian Slater'ın en dikkat çeken yapımlarını derledik. Christian Slater en iyi filmleri ve dizileri arasında bir yolculuğa çıktık. Umarız izlerken en az yazarken keyif aldığımız kadar keyif alırsınız.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["christian","slater","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:13:15+03:00";
const degistirilmeTarihi = "2024-08-16T17:13:15+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt0124198",
    "url": "https://enonlar.com/christian-slater-en-iyi-10-filmibolum-10",
    "name": "Very Bad Things - Çok Kötü Şeyler",
    "image": "/images/movies/Christian_Slater_very_bad_things_-_cok_kotu_seyler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christian Slater",
        "Lee Van Cleef",
        "Jon Favreau",
        "Leland Orser"
      ],
      "Kategori": [
        "Kara Komedi"
      ],
      "Yıl": "1998",
      "Süre": "1 sa. 40 dk.",
      "Yönetmen": "Peter Berg",
      "imdb": "6.3/10",
      "Değerlendirme": "49250",
      "metacritic": "33"
    },
    "paragraf": "Christian Slater'ın başrolde olduğu 'Very Bad Things', kara komedi türünün en iyi örneklerinden biri olarak izleyici karşısına çıkıyor. Christian Slater oynadığı filmler arasında dikkat çeken bu yapım, bir bekarlığa veda partisinin beklenmedik olayları nasıl tetiklediğini anlatıyor."
  },
  {
    "num": "9",
    "title_id": "tt0102798",
    "url": "https://enonlar.com/christian-slater-en-iyi-10-filmibolum-9",
    "name": "Robin Hood: Prince of Thieves - Robin Hood: Hırsızlar Prensi",
    "image": "/images/movies/Christian_Slater_robin_hood__prince_of_thieves_-_robin_hood__hirsizlar_prensi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christian Slater",
        "Kevin Costner",
        "Morgan Freeman"
      ],
      "Kategori": [
        "Macera"
      ],
      "Yıl": "1991",
      "Süre": "2 sa. 23 dk.",
      "Yönetmen": "Kevin Reynolds",
      "imdb": "6.9/10",
      "Değerlendirme": "210557",
      "metacritic": "51"
    },
    "paragraf": "'Robin Hood: Hırsızlar Prensi', Christian Slater'ın rol aldığı unutulmaz filmler arasında yer alıyor. Film, izleyicilere aksiyon dolu sahneler sunarken, Slater'ın performansı Christian Slater en iyi filmleri listesinde önemli bir yer tutuyor."
  },
  {
    "num": "8",
    "title_id": "tt0110148",
    "url": "https://enonlar.com/christian-slater-en-iyi-10-filmibolum-8",
    "name": "Interview with the Vampire - Vampirle Görüşme",
    "image": "/images/movies/Christian_Slater_interview_with_the_vampire_-_vampirle_gorusme.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christian Slater",
        "Tom Cruise",
        "Jacob Anderson",
        "Sam Reid"
      ],
      "Kategori": [
        "Korku"
      ],
      "Yıl": "1994",
      "Süre": "",
      "Yönetmen": "Levan Akin",
      "imdb": "7.3/10",
      "Değerlendirme": "27334"
    },
    "paragraf": "'Vampirle Görüşme', izleyicilerine fantastik bir vampir hikayesi sunarken, Christian Slater'ın performansıyla dikkat çekiyor. Christian Slater imdb puanlaması açısından sağlam bir yerde duran bu film, etkileyici oyuncu kadrosu ve hikayesiyle öne çıkıyor."
  },
  {
    "num": "7",
    "title_id": "tt0115759",
    "url": "https://enonlar.com/christian-slater-en-iyi-10-filmibolum-7",
    "name": "Broken Arrow - Kırık Ok",
    "image": "/images/movies/Christian_Slater_broken_arrow_-_kirik_ok.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christian Slater",
        "John Travolta"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "1996",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "John Woo",
      "imdb": "6.1/10",
      "Değerlendirme": "106109",
      "metacritic": "61"
    },
    "paragraf": "Christian Slater filmleri arasında aksiyonu yüksek olan 'Kırık Ok', Slater ve Travolta'nın çatışmalarını merkezine alıyor. Filmde, çalınan nükleer silahların peşindeki iki pilotun mücadelesi anlatılıyor. Christian Slater en iyi filmi arayışında olanlar için mükemmel bir seçenek."
  },
  {
    "num": "6",
    "title_id": "tt0091605",
    "url": "https://enonlar.com/christian-slater-en-iyi-10-filmibolum-6",
    "name": "The Name of the Rose - Gülün Adı",
    "image": "/images/movies/Christian_Slater_the_name_of_the_rose_-_gulun_adi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christian Slater",
        "Sean Connery",
        "John Turturro",
        "Rupert Everett"
      ],
      "Kategori": [
        "Gizem"
      ],
      "Yıl": "1986",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Jean-Jacques Annaud",
      "imdb": "7.7/10",
      "Değerlendirme": "119000",
      "metascore": "54"
    },
    "paragraf": "Gülün Adı, Umberto Eco'nun romanından uyarlanan ve gizem dolu bir yapıttır. Christian Slater en iyi filmleri listesinde yer alan film, bir Orta Çağ manastırındaki esrarengiz ölümleri çözmeye çalışan bir rahip ve yardımcısının hikayesini anlatıyor."
  },
  {
    "num": "5",
    "title_id": "tt0097493",
    "url": "https://enonlar.com/christian-slater-en-iyi-10-filmibolum-5",
    "name": "Heathers - Gençler",
    "image": "/images/movies/Christian_Slater_heathers_-_gencler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christian Slater",
        "Winona Ryder"
      ],
      "Kategori": [
        "Komedi-drama"
      ],
      "Yıl": "1988",
      "Süre": "1 sa. 43 dk.",
      "Yönetmen": "Michael Lehmann",
      "imdb": "7.2/10",
      "Değerlendirme": "118191",
      "metacritic": "72"
    },
    "paragraf": "Heathers, gençlik filmleri arasında kült bir klasik olarak kabul ediliyor. Christian Slater'ın karanlık ve çekici performansı, bu yapımı Christian Slater oynadığı filmler arasında unutulmaz kılıyor. Lisede geçen hikaye, izleyiciyi kendine çekmeyi başarıyor."
  },
  {
    "num": "4",
    "title_id": "tt1937390",
    "url": "https://enonlar.com/christian-slater-en-iyi-10-filmibolum-4",
    "name": "Nymphomaniac: Vol. I - İtiraf: Bölüm I",
    "image": "/images/movies/Christian_Slater_nymphomaniac__vol._i_-_itiraf__bolum_i.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christian Slater",
        "Charlotte Gainsbourg",
        "Stellan Skarsgård"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Lars von Trier",
      "imdb": "6.9/10",
      "Değerlendirme": "132546",
      "metacritic": "64"
    },
    "paragraf": "'İtiraf: Bölüm I', Lars von Trier'in tartışmalı yapıtlarından biri olarak öne çıkıyor. Christian Slater'ın bu filmdeki performansı, karakterinin derinliğini hissettirmekte oldukça başarılı oluyor. Christian Slater imdb puanlarına önemli bir katkı sağlayan filmlerden biri."
  },
  {
    "num": "3",
    "title_id": "tt4158110",
    "url": "https://enonlar.com/christian-slater-en-iyi-10-filmibolum-3",
    "name": "Mr. Robot - Bay Robot",
    "image": "/images/movies/Christian_Slater_mr._robot_-_bay_robot.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christian Slater",
        "Rami Malek"
      ],
      "Kategori": [
        "Drama"
      ],
      "Yıl": "2015",
      "Süre": "45 dk.",
      "Yönetmen": "Sam Esmail",
      "imdb": "8.5/10",
      "Değerlendirme": "424138"
    },
    "paragraf": "'Bay Robot', televizyon dünyasında bir efsane haline gelmiş bir dizi. Christian Slater'ın sahne aldığı ve Emmy ödülü kazandığı bu dizi, onun en iyi performanslarından biri olarak kabul ediliyor. Christian Slater en iyi filmleri kadar dizileriyle de adını duyuruyor."
  },
  {
    "num": "2",
    "title_id": "tt0100436",
    "url": "https://enonlar.com/christian-slater-en-iyi-10-filmibolum-2",
    "name": "Pump Up the Volume - Gürültüyü Artır",
    "image": "/images/movies/Christian_Slater_pump_up_the_volume_-_gurultuyu_artir.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christian Slater",
        "Samantha Mathis",
        "Anthony Luke Lucero",
        "Andy Romano"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1990",
      "Süre": "1 sa. 42 dk.",
      "Yönetmen": "Allan Moyle",
      "imdb": "7.2/10",
      "Değerlendirme": "31488",
      "metacritic": "77"
    },
    "paragraf": "'Gürültüyü Artır', gençlerin sesi olan bir lise öğrencisinin hikayesini anlatıyor. Christian Slater imdb puanlamalarında olumlu dönüşler alan bu filmde, bir radyo DJ'ini canlandırıyor. Film, Christian Slater en iyi filmi arayışında olan izleyiciler için önemli bir durak."
  },
  {
    "num": "1",
    "title_id": "tt0108399",
    "url": "https://enonlar.com/christian-slater-en-iyi-10-filmibolum-1",
    "name": "True Romance - Çılgın Romantik",
    "image": "/images/movies/Christian_Slater_true_romance_-_cilgin_romantik.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Christian Slater",
        "Patricia Arquette"
      ],
      "Kategori": [
        "Suç"
      ],
      "Yıl": "1993",
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "Tony Scott",
      "imdb": "7.9/10",
      "Değerlendirme": "244822",
      "metacritic": "59"
    },
    "paragraf": "'Çılgın Romantik', Quentin Tarantino'nun senaryosunu yazdığı etkileyici bir yapım. Christian Slater filmleri arasında ön plana çıkan bu film, suç dünyasının ortasında kendini bulan bir çiftin hikayesini izleyiciyle buluşturuyor. Slater'ın performansı, filmi unutulmaz kılıyor."
  }

];

const ana_resim = "/images/ana_gorseller/christian-slater-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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