
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function AnthonyHopkinsEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "anthony-hopkins-en-iyi-10-filmi";
const baslik = "Anthony Hopkins en iyi 10 filmi";
const metin = "Anthony Hopkins, sinema dünyasında saygın bir yer edinmiş, etkileyici performanslarıyla tanınan bir aktördür. Bu yazımızda, Anthony Hopkins filmleri arasında öne çıkan ve izleyiciler üzerinde derin etkiler bırakan yapımlara yakından bakacağız. İşte Anthony Hopkins en iyi filmleri listemiz.";
const bitis_metin = "Bu yazımızda, Anthony Hopkins'in sinemada iz bırakan en iyi 10 filmini inceledik. Umarız sizler de bu etkileyici yapımları izleyip keyif alırsınız. Anthony Hopkins'in ustalığını gösterdiği bu filmler, onun neden bu kadar saygı duyulan bir oyuncu olduğunu gözler önüne seriyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["anthony","hopkins","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:47:20+03:00";
const degistirilmeTarihi = "2024-08-16T16:47:20+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt0412080",
    "url": "https://enonlar.com/anthony-hopkins-en-iyi-10-filmi#bolum-10",
    "name": "The World's Fastest Indian - Dünyanın En Hızlı Indian'ı",
    "image": "/images/movies/Anthony_Hopkins_the_world's_fastest_indian_-_dunyanin_en_hizli_indian'i.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Anthony Hopkins",
        "Iain Rea"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 7 dk.",
      "Yönetmen": "Roger Donaldson",
      "imdb": "7.8/10",
      "Değerlendirme": "59541",
      "metacritic": "68"
    },
    "paragraf": "Anthony Hopkins'in başrolde olduğu The World's Fastest Indian, gerçek bir hikayeye dayanan ilham verici bir film. Filmde, Burt Munro'nun hayallerini gerçekleştirme mücadelesini izliyoruz. Bu, Anthony Hopkins oynadığı filmler arasında farklı ve özel bir yere sahiptir ve onun yeteneğini bir kez daha gözler önüne serer."
  },
  {
    "num": "9",
    "title_id": "tt0488120",
    "url": "https://enonlar.com/anthony-hopkins-en-iyi-10-filmi#bolum-9",
    "name": "Fracture - Cinayet Gecesi",
    "image": "/images/movies/Anthony_Hopkins_fracture_-_cinayet_gecesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Anthony Hopkins",
        "Ryan Gosling"
      ],
      "Kategori": [
        "Gerilim",
        "Suç"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Gregory Hoblit",
      "imdb": "7.2/10",
      "Değerlendirme": "221155",
      "metacritic": "68"
    },
    "paragraf": "Hopkins'in zekice işlenmiş bir cinayet planının baş aktörü olarak karşımıza çıktığı Fracture, izleyicileri Anthony Hopkins filmleri arasında heyecan dolu bir yolculuğa çıkarıyor. Anthony Hopkins en iyi filmleri arasında yer alan bu yapım, onun ustalığını bir kez daha kanıtlıyor."
  },
  {
    "num": "8",
    "title_id": "tt0118607",
    "url": "https://enonlar.com/anthony-hopkins-en-iyi-10-filmi#bolum-8",
    "name": "Amistad",
    "image": "/images/movies/Anthony_Hopkins_amistad.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Anthony Hopkins",
        "Morgan Freeman",
        "Nigel Hawthorne"
      ],
      "Kategori": [
        "Dram",
        "Tarih"
      ],
      "Yıl": "1997",
      "Süre": "2 sa. 35 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "7.3/10",
      "Değerlendirme": "83527",
      "metacritic": "64"
    },
    "paragraf": "Amistad, Amerikan tarihinin karanlık bir dönemine ışık tutan etkileyici bir film. Anthony Hopkins'in mahkeme salonlarında geçen performansı, izleyicilere unutulmaz anlar yaşatıyor. Bu yapım, Anthony Hopkins imdb puanları açısından da yüksek bir yer tutmaktadır."
  },
  {
    "num": "7",
    "title_id": "tt0120746",
    "url": "https://enonlar.com/anthony-hopkins-en-iyi-10-filmi#bolum-7",
    "name": "The Mask of Zorro - Zorro Maskesi",
    "image": "/images/movies/Anthony_Hopkins_the_mask_of_zorro_-_zorro_maskesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Anthony Hopkins",
        "José María de Tavira",
        "Diego Sieres"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "1998",
      "Süre": "2 sa. 16 dk.",
      "Yönetmen": "Martin Campbell",
      "imdb": "6.8/10",
      "Değerlendirme": "199583",
      "metacritic": "62"
    },
    "paragraf": "Anthony Hopkins, bu klasik aksiyon filminde eski Zorro olarak izleyicilerin karşısına çıkıyor. The Mask of Zorro, Anthony Hopkins oynadığı filmler içinde izleyenlerin hafızasında yer edinmiş macera dolu bir yapıt ve onun usta performanslarından birini daha sergiliyor."
  },
  {
    "num": "6",
    "title_id": "tt0113987",
    "url": "https://enonlar.com/anthony-hopkins-en-iyi-10-filmi#bolum-6",
    "name": "Nixon",
    "image": "/images/movies/Anthony_Hopkins_nixon.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Anthony Hopkins",
        "Joan Allen"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "1995",
      "Süre": "3 sa. 12 dk.",
      "Yönetmen": "Oliver Stone",
      "imdb": "7.1/10",
      "Değerlendirme": "32984",
      "metacritic": "66"
    },
    "paragraf": "Anthony Hopkins bu filmde, ABD'nin tartışmalı başkanlarından Richard Nixon'ı canlandırıyor. Onun canlandırdığı Nixon, Anthony Hopkins en iyi filmi seçkileri arasında güçlü ve etkileyici bir performans olarak dikkat çekiyor."
  },
  {
    "num": "5",
    "title_id": "tt0080678",
    "url": "https://enonlar.com/anthony-hopkins-en-iyi-10-filmi#bolum-5",
    "name": "The Elephant Man - Fil Adam",
    "image": "/images/movies/Anthony_Hopkins_the_elephant_man_-_fil_adam.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Anthony Hopkins",
        "John Hurt"
      ],
      "Kategori": [
        "Dram",
        "Biyografi"
      ],
      "Yıl": "1980",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "David Lynch",
      "imdb": "8.2/10",
      "Değerlendirme": "260974",
      "metacritic": "78"
    },
    "paragraf": "Fil Adam, Anthony Hopkins'in doktor rolünü üstlendiği, duygusal derinliğiyle dikkat çeken bir film. Bu filmde, insanların dış görünüşlerine göre yargılamadan öteye gitmesi gerektiğinin etkileyici örnekleri sergileniyor. Anthony Hopkins filmleri arasında çok özel bir yere sahip bu yapıtta, Hopkins izleyicilere unutulmaz bir deneyim sunuyor."
  },
  {
    "num": "4",
    "title_id": "tt0107943",
    "url": "https://enonlar.com/anthony-hopkins-en-iyi-10-filmi#bolum-4",
    "name": "The Remains of the Day - Günden Kalanlar",
    "image": "/images/movies/Anthony_Hopkins_the_remains_of_the_day_-_gunden_kalanlar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Anthony Hopkins",
        "John Haycraft",
        "Christopher Reeve"
      ],
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Yıl": "1993",
      "Süre": "2 sa. 14 dk.",
      "Yönetmen": "James Ivory",
      "imdb": "7.8/10",
      "Değerlendirme": "85761",
      "metacritic": "86"
    },
    "paragraf": "Anthony Hopkins, 20. yüzyılın başlarındaki İngiltere'de geçen bu duygusal hikayede, profesyonel bir kahya olarak izleyicilerin karşısına çıkıyor. The Remains of the Day, Anthony Hopkins en iyi filmleri arasında duygusal yoğunluğuyla göze çarpıyor ve onun oyunculuk yeteneklerini bir kez daha sahneye koyuyor."
  },
  {
    "num": "3",
    "title_id": "tt10272386",
    "url": "https://enonlar.com/anthony-hopkins-en-iyi-10-filmi#bolum-3",
    "name": "The Father - Baba",
    "image": "/images/movies/Anthony_Hopkins_the_father_-_baba.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Anthony Hopkins",
        "Olivia Colman"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2020",
      "Süre": "1 sa. 37 dk.",
      "Yönetmen": "Florian Zeller",
      "imdb": "8.2/10",
      "Değerlendirme": "198372",
      "metacritic": "88"
    },
    "paragraf": "Anthony Hopkins, The Father filminde hafıza kaybı yaşayan bir babayı canlandırıyor ve izleyicilere derinlemesine bir performans sunuyor. Film, Anthony Hopkins imdb puanları açısından oldukça yüksek bir derecede yer alıyor ve onun kariyerindeki en başarılı yapımlardan biri olarak anılıyor."
  },
  {
    "num": "2",
    "title_id": "tt0102926",
    "url": "https://enonlar.com/anthony-hopkins-en-iyi-10-filmi#bolum-2",
    "name": "The Silence of the Lambs - Kuzuların Sessizliği",
    "image": "/images/movies/Anthony_Hopkins_the_silence_of_the_lambs_-_kuzularin_sessizligi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Anthony Hopkins",
        "Jodie Foster"
      ],
      "Kategori": [
        "Gerilim",
        "Suç"
      ],
      "Yıl": "1991",
      "Süre": "1 sa. 58 dk.",
      "Yönetmen": "Jonathan Demme",
      "imdb": "8.6/10",
      "Değerlendirme": "1569651",
      "metacritic": "86"
    },
    "paragraf": "Hopkins'in Dr. Hannibal Lecter rolü, sinema tarihine geçmiş unutulmaz bir karakterdir. The Silence of the Lambs, Anthony Hopkins en iyi filmi olarak sıklıkla anılır ve onun kariyerinin mihenk taşlarından birini temsil eder. Bu gerilim dolu film, izleyicilere Anthony Hopkins'in sıra dışı yeteneğini sergiler."
  },
  {
    "num": "1",
    "title_id": "tt8404614",
    "url": "https://enonlar.com/anthony-hopkins-en-iyi-10-filmi#bolum-1",
    "name": "The Two Popes - İki Papa",
    "image": "/images/movies/Anthony_Hopkins_the_two_popes_-_iki_papa.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Anthony Hopkins",
        "Jonathan Pryce"
      ],
      "Kategori": [
        "Dram",
        "Biyografi"
      ],
      "Yıl": "2019",
      "Süre": "2 sa. 5 dk.",
      "Yönetmen": "Fernando Meirelles",
      "imdb": "7.6/10",
      "Değerlendirme": "133968",
      "metacritic": "75"
    },
    "paragraf": "The Two Popes, Katolik Kilisesi'nin iki önde gelen isminin arasındaki içsel çatışmaları ve politik dengeleri ele alır. Anthony Hopkins, rolüyle bir kez daha izleyicileri derinden etkileyen bir performans sergiliyor. Bu film, Anthony Hopkins en iyi film seçkileri içinde modern bir başyapıt olarak gösterilir."
  }

];

const ana_resim = "/images/ana_gorseller/anthony-hopkins-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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