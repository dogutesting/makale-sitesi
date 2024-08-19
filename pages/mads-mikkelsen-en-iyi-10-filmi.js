
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MadsMikkelsenEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "mads-mikkelsen-en-iyi-10-filmi";
const baslik = "Mads Mikkelsen en iyi 10 filmi";
const metin = "Danimarkalı ünlü aktör Mads Mikkelsen, kendine has oyunculuğuyla birçok unutulmaz filme imza atmış bir isimdir. Mads Mikkelsen filmleri arasında yer alan ve çeşitli türlerde başarı elde etmiş yapımları sizler için derledik. Mads Mikkelsen oynadığı filmler ile unutulmaz anlar yaşatmaya devam ediyor.";
const bitis_metin = "Bu yazımızda Mads Mikkelsen'in en iyi filmlerini inceledik. Farklı türlerdeki bu yapımlar, oyuncunun geniş yelpazedeki yeteneğiyle izleyiciler için eşsiz bir deneyim sunuyor. Umarım bu liste, film seçiminizde size yardımcı olur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["mads","mikkelsen","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:19:38+03:00";
const degistirilmeTarihi = "2024-08-16T17:19:38+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/mads-mikkelsen-en-iyi-10-filmi#bolum-10",
    "name": "The Three Musketeers - Üç Silahşörler",
    "image": "/images/movies/Mads_Mikkelsen_the_three_musketeers_-_uc_silahsorler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mads Mikkelsen",
        "Lee Van Cleef",
        "Matthew Macfadyen",
        "Milla Jovovich"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Paul W.S. Anderson",
      "imdb": "5.7/10",
      "Değerlendirme": "112573",
      "metacritic": "35"
    },
    "paragraf": "Mads Mikkelsen, The Three Musketeers filminde Rochefort karakterini canlandırarak izleyicilere aksiyon dolu bir deneyim sunuyor. Üç Silahşörler'in klasik hikayesi, Mikkelsen'in güçlü performansıyla yeniden şekilleniyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/mads-mikkelsen-en-iyi-10-filmi#bolum-9",
    "name": "Age of Uprising: The Legend of Michael Kohlhaas - Ayaklanma Çağı: Michael Kohlhaas Efsanesi",
    "image": "/images/movies/Mads_Mikkelsen_age_of_uprising__the_legend_of_michael_kohlhaas_-_ayaklanma_cagi__michael_kohlhaas_efsanesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mads Mikkelsen",
        "Mélusine Mayance"
      ],
      "Kategori": [
        "Drama"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Arnaud des Pallières",
      "imdb": "6.1/10",
      "Değerlendirme": "9283",
      "metacritic": "51"
    },
    "paragraf": "Mads Mikkelsen oynadığı filmler arasında yer alan bu yapım, Michael Kohlhaas'ın adalet arayışını konu alıyor. Mikkelsen'in etkileyici performansı, izleyenleri derinden etkiliyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/mads-mikkelsen-en-iyi-10-filmi#bolum-8",
    "name": "The Hunt - Onur Savaşı",
    "image": "/images/movies/Mads_Mikkelsen_the_hunt_-_onur_savasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mads Mikkelsen",
        "Thomas Bo Larsen"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Thomas Vinterberg",
      "imdb": "8.3/10",
      "Değerlendirme": "369984",
      "metacritic": "77"
    },
    "paragraf": "Mads Mikkelsen en iyi filmleri listesinde mutlaka bulunması gereken The Hunt, bir öğretmenin hayatının iftira nedeniyle nasıl değiştiğini anlatır. Mikkelsen'in ustalığı, hikayeye derinlik kazandırıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/mads-mikkelsen-en-iyi-10-filmi#bolum-7",
    "name": "Doctor Strange - Doktor Strange",
    "image": "/images/movies/Mads_Mikkelsen_doctor_strange_-_doktor_strange.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mads Mikkelsen",
        "Benedict Cumberbatch",
        "Chiwetel Ejiofor"
      ],
      "Kategori": [
        "Fantastik",
        "Aksiyon"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Scott Derrickson",
      "imdb": "7.5/10",
      "Değerlendirme": "816460",
      "metacritic": "72"
    },
    "paragraf": "Marvel dünyasında yer alan Doktor Strange filminde Mads Mikkelsen, Kaecilius rolüyle izleyenlere soluksuz bir harika aksiyon sunuyor. Mikkelsen'in karizmatik kötü adam rolü, filme ayrı bir hava katmaktadır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/mads-mikkelsen-en-iyi-10-filmi#bolum-6",
    "name": "Riders of Justice - Adalet Savaşçıları",
    "image": "/images/movies/Mads_Mikkelsen_riders_of_justice_-_adalet_savascilari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mads Mikkelsen",
        "Nikolaj Lie Kaas"
      ],
      "Kategori": [
        "Komedi",
        "Dram",
        "Aksiyon"
      ],
      "Yıl": "2020",
      "Süre": "1 sa. 56 dk.",
      "Yönetmen": "Anders Thomas Jensen",
      "imdb": "7.5/10",
      "Değerlendirme": "64924",
      "metacritic": "81"
    },
    "paragraf": "Riders of Justice, Mads Mikkelsen imdb sıralamalarında üst sıralarda olan bir film. İzleyicilere kahkaha ile hüzün arasında gidip gelen bir hikaye sunar. Mads Mikkelsen en iyi filmi arayışında olanlar bu yapımı kaçırmamalı."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/mads-mikkelsen-en-iyi-10-filmi#bolum-5",
    "name": "Arctic - Kutup",
    "image": "/images/movies/Mads_Mikkelsen_arctic_-_kutup.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mads Mikkelsen",
        "Maria Thelma Smáradóttir"
      ],
      "Kategori": [
        "Macera",
        "Dram"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 38 dk.",
      "Yönetmen": "Joe Penna",
      "imdb": "6.8/10",
      "Değerlendirme": "58924",
      "metacritic": "71"
    },
    "paragraf": "Kutup soğuklarında hayatta kalma mücadelesini konu alan Arctic, Mads Mikkelsen'in oyunculuk yeteneğini bir kez daha gözler önüne seriyor. Film, izleyenleri buzlu çöllerin derinliklerine sürüklüyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/mads-mikkelsen-en-iyi-10-filmi#bolum-4",
    "name": "A Royal Affair - Yasak Aşk",
    "image": "/images/movies/Mads_Mikkelsen_a_royal_affair_-_yasak_ask.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mads Mikkelsen",
        "Alicia Vikander"
      ],
      "Kategori": [
        "Tarih",
        "Romantik"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 17 dk.",
      "Yönetmen": "Nikolaj Arcel",
      "imdb": "7.5/10",
      "Değerlendirme": "51353",
      "metacritic": "73"
    },
    "paragraf": "A Royal Affair, tarihi bir dram olarak Mads Mikkelsen imdb listesinde dikkat çeker. Danimarka'nın tarihi olaylarını anlatan bu filmde Mikkelsen, güçlü bir performans sergiliyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/mads-mikkelsen-en-iyi-10-filmi#bolum-3",
    "name": "Casino Royale - Casino Royale",
    "image": "/images/movies/Mads_Mikkelsen_casino_royale_-_casino_royale.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mads Mikkelsen",
        "Daniel Craig",
        "Eva Green"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 24 dk.",
      "Yönetmen": "Martin Campbell",
      "imdb": "8/10",
      "Değerlendirme": "700410",
      "metacritic": "80"
    },
    "paragraf": "James Bond serisinin sevilen filmi Casino Royale'de, Le Chiffre karakterine hayat veren Mads Mikkelsen, gizemin ve aksiyonun en iyi şekilde sunulduğu bir performans ile karşımızda."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/mads-mikkelsen-en-iyi-10-filmi#bolum-2",
    "name": "Another Round - Körkütük",
    "image": "/images/movies/Mads_Mikkelsen_another_round_-_korkutuk.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mads Mikkelsen",
        "Thomas Bo Larsen"
      ],
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "2020",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Thomas Vinterberg",
      "imdb": "7.7/10",
      "Değerlendirme": "199609",
      "metacritic": "79"
    },
    "paragraf": "Another Round, hayatın rehavetinde kaybolmuş dört öğretmenin alkol deneyleri üzerine kuruludur. Mads Mikkelsen filmleri arasında en çok dikkat çekenlerden biri olup, eğlenceli ve düşündürücü bir yapımdır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/mads-mikkelsen-en-iyi-10-filmi#bolum-1",
    "name": "Pusher - Uyuşturucu Taciri",
    "image": "/images/movies/Mads_Mikkelsen_pusher_-_uyusturucu_taciri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Mads Mikkelsen",
        "Kim Bodnia",
        "Zlatko Buric"
      ],
      "Kategori": [
        "Kriminal",
        "Gerilim"
      ],
      "Yıl": "1996",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Nicolas Winding Refn",
      "imdb": "7.3/10",
      "Değerlendirme": "45132",
      "metacritic": "72"
    },
    "paragraf": "Mads Mikkelsen en iyi filmi olarak anılan Pusher serisi, Danimarka suç dünyasının karanlık yüzünü ortaya koymaktadır. Kariyerinde önemli bir yer tutan bu film, Mikkelsen'in yeteneğini sergiliyor."
  }

];

const ana_resim = "/images/ana_gorseller/mads-mikkelsen-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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