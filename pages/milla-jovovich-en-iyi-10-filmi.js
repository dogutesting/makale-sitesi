
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MillaJovovichEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "milla-jovovich-en-iyi-10-filmi";
const baslik = "Milla Jovovich En İyi 10 Filmi";
const metin = "Milla Jovovich, aksiyon ve bilim kurgu türündeki unutulmaz performanslarıyla tanınan bir aktris. milla jovovich filmleri kendine has bir iz bırakmıştır ve izleyicileri adeta büyülemektedir. Sizler için milla jovovich oynadığı filmler içerisinden en iyilerini derledik.";
const bitis_metin = "Bu yazımızda Milla Jovovich'in kariyerinin en iyi 10 filmini ele aldık. milla jovovich oynadığı filmler ile sinema dünyasında iz bırakan bu oyuncu, her geçen gün başarılarına yenilerini eklemeye devam ediyor. Umarız beğenmişsinizdir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["milla","jovovich","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:15:55+03:00";
const degistirilmeTarihi = "2024-08-09T17:15:55+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt0971209",
    "url": "https://enonlar.com/milla-jovovich-en-iyi-10-filmibolum-10",
    "name": "A Perfect Getaway - Kusursuz Kaçış",
    "image": "/images/movies/Milla_Jovovich_a_perfect_getaway_-_kusursuz_kacis.jpg",
    "ozellikler": {
      "Yıl": "2009",
      "Süre": "1 sa. 38 dk.",
      "Kategori": [
        "Gerilim",
        "Macera"
      ],
      "Oyuncular": [
        "Milla Jovovich",
        "Steve Zahn"
      ],
      "Yönetmen": "David Twohy",
      "imdb": "6.5/10",
      "Değerlendirme": "76913",
      "metacritic": "63"
    },
    "paragraf": "Milla Jovovich, milla jovovich oynadığı filmler arasında gerilim dolu bir macera sunan 'A Perfect Getaway'de bir tatil kaçamağı yaparken karanlık sırlarla dolu bir çiftin hikayesine dahil olur. Gerilim ve heyecanın doruklarda olduğu bu film, izleyicilerini ekran başında tutmayı başarıyor."
  },
  {
    "num": "9",
    "title_id": "tt1509767",
    "url": "https://enonlar.com/milla-jovovich-en-iyi-10-filmibolum-9",
    "name": "The Three Musketeers - Üç Silahşor",
    "image": "/images/movies/Milla_Jovovich_the_three_musketeers_-_uc_silahsor.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "1 sa. 50 dk.",
      "Kategori": [
        "Macera",
        "Aksiyon"
      ],
      "Oyuncular": [
        "Milla Jovovich",
        "Logan Lerman"
      ],
      "Yönetmen": "Paul W.S. Anderson",
      "imdb": "5.7/10",
      "Değerlendirme": "112556",
      "metacritic": "35"
    },
    "paragraf": "Alexandre Dumas'ın klasik eserinden uyarlanan bu macera dolu filmde Milla Jovovich, zeki ve cazibeli Milady de Winter karakterine hayat veriyor. milla jovovich filmleri içinde tarihi maceralar sevenler için kaçırılmaması gereken bir yapım olarak öne çıkıyor."
  },
  {
    "num": "8",
    "title_id": "tt0370032",
    "url": "https://enonlar.com/milla-jovovich-en-iyi-10-filmibolum-8",
    "name": "Ultraviolet - Ultraviyole",
    "image": "/images/movies/Milla_Jovovich_ultraviolet_-_ultraviyole.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "1 sa. 28 dk.",
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Oyuncular": [
        "Milla Jovovich",
        "Cameron Bright"
      ],
      "Yönetmen": "Kurt Wimmer",
      "imdb": "4.3/10",
      "Değerlendirme": "84359",
      "metacritic": "18"
    },
    "paragraf": "'Ultraviolet', milla jovovich oynadığı filmler arasında distopik bir gelecekte geçen ve aksiyon dolu sahnelerle dikkat çeken bir bilim kurgu filmi. Milla Jovovich, Violet adlı virüslü bir kadını canlandırarak insanlığın kaderini değiştirmek için zorlu bir mücadeleye girişiyor."
  },
  {
    "num": "7",
    "title_id": "tt0151137",
    "url": "https://enonlar.com/milla-jovovich-en-iyi-10-filmibolum-7",
    "name": "Joan of Arc - Jeanne d'Arc",
    "image": "/images/movies/Milla_Jovovich_joan_of_arc_-_jeanne_d'arc.jpg",
    "ozellikler": {
      "Yıl": "1999",
      "Süre": "2 sa. 10 dk.",
      "Kategori": [
        "Drama",
        "Tarihi"
      ],
      "Oyuncular": [
        "Milla Jovovich",
        "John Malkovich",
        "Faye Dunaway"
      ],
      "Yönetmen": "Luc Besson",
      "imdb": "6.4/10",
      "Değerlendirme": "70128",
      "metacritic": "54"
    },
    "paragraf": "Luc Besson'un yönettiği bu tarihi dramada, Milla Jovovich Jeanne d'Arc olarak karşımıza çıkıyor. Film, Jeanne d'Arc'ın yaşamını ve Fransız Devrimi'ndeki rolünü epik bir şekilde anlatıyor. Duygusal ve görsel olarak etkileyici olan yapım, tarihi olayları dramatik bir biçimde gözler önüne seriyor."
  },
  {
    "num": "6",
    "title_id": "tt2592614",
    "url": "https://enonlar.com/milla-jovovich-en-iyi-10-filmibolum-6",
    "name": "Resident Evil: The Final Chapter - Ölümsüz Kötülük: Son Bölüm",
    "image": "/images/movies/Milla_Jovovich_resident_evil__the_final_chapter_-_olumsuz_kotuluk__son_bolum.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Süre": "1 sa. 47 dk.",
      "Kategori": [
        "Aksiyon",
        "Korku"
      ],
      "Oyuncular": [
        "Milla Jovovich",
        "Ali Larter"
      ],
      "Yönetmen": "Paul W.S. Anderson",
      "imdb": "5.5/10",
      "Değerlendirme": "102043",
      "metacritic": "49"
    },
    "paragraf": "Serinin altıncı filmi olan 'Resident Evil: The Final Chapter', milla jovovich filmleri içinde zombi kıyametine karşı verilen mücadelenin son safhasını konu alıyor. Milla Jovovich'in etkileyici performansı, serinin epik finaline damgasını vuruyor."
  },
  {
    "num": "5",
    "title_id": "tt1855325",
    "url": "https://enonlar.com/milla-jovovich-en-iyi-10-filmibolum-5",
    "name": "Resident Evil: Retribution - Ölümsüz Kötülük: İntikam",
    "image": "/images/movies/Milla_Jovovich_resident_evil__retribution_-_olumsuz_kotuluk__intikam.jpg",
    "ozellikler": {
      "Yıl": "2012",
      "Süre": "1 sa. 36 dk.",
      "Kategori": [
        "Aksiyon",
        "Korku"
      ],
      "Oyuncular": [
        "Milla Jovovich",
        "Michelle Rodriguez"
      ],
      "Yönetmen": "Paul W.S. Anderson",
      "imdb": "5.3/10",
      "Değerlendirme": "151337",
      "metacritic": "39"
    },
    "paragraf": "Alice, macerasına serinin beşinci filmi 'Resident Evil: Retribution' ile devam ediyor. Umbrella Corporation'ın amansızca avladığı Alice, zombi ordularıyla yeniden yüzleşirken, milla jovovich oynadığı filmler arasında sürekli artan bir gerilim sunuyor."
  },
  {
    "num": "4",
    "title_id": "tt1220634",
    "url": "https://enonlar.com/milla-jovovich-en-iyi-10-filmibolum-4",
    "name": "Resident Evil: Afterlife - Ölümsüz Kötülük: Ölümden Sonra",
    "image": "/images/movies/Milla_Jovovich_resident_evil__afterlife_-_olumsuz_kotuluk__olumden_sonra.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "1 sa. 36 dk.",
      "Kategori": [
        "Aksiyon",
        "Korku"
      ],
      "Oyuncular": [
        "Milla Jovovich",
        "Wentworth Miller"
      ],
      "Yönetmen": "Paul W.S. Anderson",
      "imdb": "5.8/10",
      "Değerlendirme": "180394",
      "metacritic": "37"
    },
    "paragraf": "'Resident Evil: Afterlife', milla jovovich filmleri arasında 3D teknolojisinin etkileyici kullanımıyla dikkat çeken bir yapımdır. Alice, Umbrella Corporation'dan intikam almak için Los Angeles'a giderken, izleyicilere aksiyon dolu bir deneyim sunuyor."
  },
  {
    "num": "3",
    "title_id": "tt0119116",
    "url": "https://enonlar.com/milla-jovovich-en-iyi-10-filmibolum-3",
    "name": "The Fifth Element - Beşinci Element",
    "image": "/images/movies/Milla_Jovovich_the_fifth_element_-_besinci_element.jpg",
    "ozellikler": {
      "Yıl": "1997",
      "Süre": "2 sa. 6 dk.",
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Oyuncular": [
        "Milla Jovovich",
        "Bruce Willis"
      ],
      "Yönetmen": "Luc Besson",
      "imdb": "7.6/10",
      "Değerlendirme": "512599",
      "metacritic": "52"
    },
    "paragraf": "Milla Jovovich'in unutulmaz Leeloo karakterini canlandırdığı 'The Fifth Element', hem eğlenceli hem de düşündürücü bir bilim kurgu filmidir. milla jovovich oynadığı filmler arasında en ikonik performanslarından birini sergileyen oyuncu, filmi izlenecekler listenizin başına koyuyor."
  },
  {
    "num": "2",
    "title_id": "tt0318627",
    "url": "https://enonlar.com/milla-jovovich-en-iyi-10-filmibolum-2",
    "name": "Resident Evil: Apocalypse - Ölümsüz Kötülük: Kıyamet",
    "image": "/images/movies/Milla_Jovovich_resident_evil__apocalypse_-_olumsuz_kotuluk__kiyamet.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Süre": "1 sa. 34 dk.",
      "Kategori": [
        "Aksiyon",
        "Korku"
      ],
      "Oyuncular": [
        "Milla Jovovich",
        "Sienna Guillory"
      ],
      "Yönetmen": "Alexander Witt",
      "imdb": "6.1/10",
      "Değerlendirme": "211641",
      "metacritic": "36"
    },
    "paragraf": "'Resident Evil: Apocalypse', zombi kıyameti ile mücadelede Alice'in etkileyici dönüşünü konu alıyor. Milla Jovovich'in unutulmaz performansları, milla jovovich filmleri arasındaki bu yapımı kült bir eser haline getiriyor."
  },
  {
    "num": "1",
    "title_id": "tt0432021",
    "url": "https://enonlar.com/milla-jovovich-en-iyi-10-filmibolum-1",
    "name": "Resident Evil: Extinction - Ölümsüz Kötülük: Yok Oluş",
    "image": "/images/movies/Milla_Jovovich_resident_evil__extinction_-_olumsuz_kotuluk__yok_olus.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "1 sa. 34 dk.",
      "Kategori": [
        "Aksiyon",
        "Korku"
      ],
      "Oyuncular": [
        "Milla Jovovich",
        "Ali Larter"
      ],
      "Yönetmen": "Russell Mulcahy",
      "imdb": "6.2/10",
      "Değerlendirme": "206996",
      "metacritic": "41"
    },
    "paragraf": "Serinin üçüncü filmi olan 'Resident Evil: Extinction', insanlığın yok oluşa sürüklendiği karanlık bir gelecekte Alice'in hayatta kalma mücadelesini konu alıyor. Milla Jovovich, etkileyici bir aksiyon yıldızı olarak en iyi performanslarından birini sergiliyor."
  }

];

const ana_resim = "/images/ana_gorseller/milla-jovovich-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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