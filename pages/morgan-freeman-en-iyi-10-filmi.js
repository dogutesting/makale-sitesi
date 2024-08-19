
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MorganFreemanEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "morgan-freeman-en-iyi-10-filmi";
const baslik = "Morgan Freeman en iyi 10 filmi";
const metin = "Morgan Freeman, eşsiz yetenekleri ve unutulmaz performanslarıyla tanınan bir aktördür. Onun Morgan Freeman filmleri arasında birçok başyapıt bulunuyor. Bu listede Morgan Freeman en iyi filmleri yer almakta ve her biri izleyicilere unutulmaz anlar sunuyor. İşte Morgan Freeman'ın en iyi 10 filmi.";
const bitis_metin = "Bu yazımızda Morgan Freeman en iyi filmleri arasında yer alan 10 filmi inceledik. Her biri farklı türlerde ye alan bu filmler, Freeman'ın oyunculuk yelpazesinin ne kadar geniş olduğunu gözler önüne seriyor. Umarız siz de bu filmleri izleyerek keyif alırsınız.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["morgan","freeman","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:23:21+03:00";
const degistirilmeTarihi = "2024-08-16T16:23:21+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/morgan-freeman-en-iyi-10-filmi#bolum-10",
    "name": "Unforgiven - Affedilmeyen",
    "image": "/images/movies/Morgan_Freeman_unforgiven_-_affedilmeyen.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Morgan Freeman",
        "Clint Eastwood",
        "Gene Hackman"
      ],
      "Kategori": [
        "Vahşi Batı"
      ],
      "Yıl": "1992",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Clint Eastwood",
      "imdb": "8.2/10",
      "Değerlendirme": "440466",
      "metacritic": "85"
    },
    "paragraf": "Unforgiven, yönetmen Clint Eastwood'un başını çektiği, Morgan Freeman'ın da yer aldığı bir vahşi batı filmidir. Film, Western türünün Morgan Freeman filmleri içerisindeki en iyi örneklerinden biridir. Morgan Freeman oynadığı filmler arasında önemli bir yere sahip olan Unforgiven, hem ödüllerle taçlandırıldı hem de izleyici takdirini kazandı."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/morgan-freeman-en-iyi-10-filmi#bolum-9",
    "name": "The Bucket List - Şimdi Ya Da Asla",
    "image": "/images/movies/Morgan_Freeman_the_bucket_list_-_simdi_ya_da_asla.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Morgan Freeman",
        "Jack Nicholson"
      ],
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 37 dk.",
      "Yönetmen": "Rob Reiner",
      "imdb": "7.4/10",
      "Değerlendirme": "261892",
      "metacritic": "42"
    },
    "paragraf": "Morgan Freeman ve Jack Nicholson'ın birlikte rol aldığı The Bucket List, iki yaşlı adamın yaşamı anlamlandırma çabalarını konu alır. Hem duygusal hem de komik olan bu film, Morgan Freeman en iyi filmleri arasında özel bir konuma sahiptir. Hem gülümseten hem de düşündüren yapısıyla izleyicilere keyifli anlar yaşatır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/morgan-freeman-en-iyi-10-filmi#bolum-8",
    "name": "Driving Miss Daisy - Bayan Daisy'nin Şoförü",
    "image": "/images/movies/Morgan_Freeman_driving_miss_daisy_-_bayan_daisy'nin_soforu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Morgan Freeman",
        "Jessica Tandy"
      ],
      "Kategori": [
        "Dram",
        "Komedi"
      ],
      "Yıl": "1989",
      "Süre": "1 sa. 39 dk.",
      "Yönetmen": "Bruce Beresford",
      "imdb": "7.3/10",
      "Değerlendirme": "118497",
      "metacritic": "81"
    },
    "paragraf": "Driving Miss Daisy, Morgan Freeman'ın kariyerinde oldukça önemli bir yere sahiptir. Oynadığı rol ile seyircilerin büyük beğenisini kazanan Freeman, bu filmde derin bir dostluk hikayesi anlatıyor. Morgan Freeman imdb listesinde yüksek puanlar alan bu film, zarif ve sıcak bir anlatıma sahiptir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/morgan-freeman-en-iyi-10-filmi#bolum-7",
    "name": "Se7en - Yedi",
    "image": "/images/movies/Morgan_Freeman_se7en_-_yedi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Morgan Freeman",
        "Brad Pitt",
        "Andrew Kevin Walker"
      ],
      "Kategori": [
        "Gerilim",
        "Suç"
      ],
      "Yıl": "1995",
      "Süre": "2 sa. 7 dk.",
      "Yönetmen": "David Fincher",
      "imdb": "8.6/10",
      "Değerlendirme": "1825148",
      "metacritic": "65"
    },
    "paragraf": "David Fincher'ın yönettiği Se7en, sinema tarihinin en unutulmaz gerilim filmlerinden biri olmuştur. Morgan Freeman ve Brad Pitt'in başrollerini paylaştığı filmde, yedi ölümcül günahı işleyen bir seri katili yakalamaya çalışan iki dedektifin hikayesi anlatılır. Freeman, filmde ustalık dolu bir performans sergileyerek, Morgan Freeman en iyi filmi hangisi diye soranlara bu filmin cevabını verir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/morgan-freeman-en-iyi-10-filmi#bolum-6",
    "name": "The Shawshank Redemption - Esaretin Bedeli",
    "image": "/images/movies/Morgan_Freeman_the_shawshank_redemption_-_esaretin_bedeli.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Morgan Freeman",
        "Tim Robbins"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1994",
      "Süre": "2 sa. 22 dk.",
      "Yönetmen": "Frank Darabont",
      "imdb": "9.3/10",
      "Değerlendirme": "2928619",
      "metacritic": "82"
    },
    "paragraf": "The Shawshank Redemption, Morgan Freeman imdb puanı en yüksek filmlerinden biri olarak bilinir. Haksız yere ömür boyu hapis cezasına çarptırılan Andy Dufresne ve onun en iyi arkadaşı Red çevresinde gelişen bu film, umut, dostluk ve özgürlüğün simgesi haline gelmiştir. Morgan Freeman, performansıyla hafızalardan silinmeyecek bir iz bırakmıştır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/morgan-freeman-en-iyi-10-filmi#bolum-5",
    "name": "The Dark Knight - Kara Şövalye",
    "image": "/images/movies/Morgan_Freeman_the_dark_knight_-_kara_sovalye.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Morgan Freeman",
        "Christian Bale",
        "Heath Ledger"
      ],
      "Kategori": [
        "Aksiyon",
        "Dram"
      ],
      "Yıl": "2008",
      "Süre": "2 sa. 32 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "9/10",
      "Değerlendirme": "2909162",
      "metacritic": "84"
    },
    "paragraf": "The Dark Knight, Morgan Freeman oynadığı filmler arasında aksiyon dolu bir yapımdır. Christopher Nolan'ın imzasını taşıyan bu filmde, Freeman, Bruce Wayne'in güvenilir teknisyeni Lucius Fox'u canlandırıyor. Film, yüksek tempolu aksiyon sahneleri ve etkileyici hikayesiyle Morgan Freeman en iyi filmleri arasında güçlü bir konumda bulunuyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/morgan-freeman-en-iyi-10-filmi#bolum-4",
    "name": "Million Dollar Baby - Milyon Dolarlık Bebek",
    "image": "/images/movies/Morgan_Freeman_million_dollar_baby_-_milyon_dolarlik_bebek.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Morgan Freeman",
        "Hilary Swank",
        "Clint Eastwood"
      ],
      "Kategori": [
        "Dram",
        "Spor"
      ],
      "Yıl": "2004",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "Clint Eastwood",
      "imdb": "8.1/10",
      "Değerlendirme": "727754",
      "metacritic": "86"
    },
    "paragraf": "Clint Eastwood'un yönettiği ve başrolünü üstlendiği Million Dollar Baby, Morgan Freeman'ın muhteşem anlatımıyla daha da etkileyici hale geliyor. Bir boks stratejistinin ve öğrencisinin öyküsünü ele alan film, Morgan Freeman en iyi filmi hangisi sorusuna cevap olarak verilebilecek kadar etkileyici. Oyunculuğu, filmdeki dramatik unsurlara derinlik kazandırıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/morgan-freeman-en-iyi-10-filmi#bolum-3",
    "name": "Invictus",
    "image": "/images/movies/Morgan_Freeman_invictus.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Morgan Freeman",
        "Matt Damon"
      ],
      "Kategori": [
        "Dram",
        "Biyografi"
      ],
      "Yıl": "2009",
      "Süre": "2 sa. 14 dk.",
      "Yönetmen": "Clint Eastwood",
      "imdb": "7.3/10",
      "Değerlendirme": "168722",
      "metacritic": "74"
    },
    "paragraf": "Invictus, Nelson Mandela'nın liderliğinde Güney Afrika'nın birliğini ve Rugby Dünya Kupası'nı kazanmasını anlatan gerçek bir hikayedir. Morgan Freeman, Mandela rolündeki ustalığıyla bir kez daha seyircilere unutulmaz bir performans sunuyor. Morgan Freeman filmleri arasında biyografi türündeki bu yapım, hem tarihsel hem de duygusal derinliğiyle dikkat çekiyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/morgan-freeman-en-iyi-10-filmi#bolum-2",
    "name": "Bruce Almighty - Aman Tanrım!",
    "image": "/images/movies/Morgan_Freeman_bruce_almighty_-_aman_tanrim!.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Morgan Freeman",
        "Jim Carrey"
      ],
      "Kategori": [
        "Komedi",
        "Fantastik"
      ],
      "Yıl": "2003",
      "Süre": "1 sa. 41 dk.",
      "Yönetmen": "Tom Shadyac",
      "imdb": "6.8/10",
      "Değerlendirme": "438482",
      "metacritic": "46"
    },
    "paragraf": "Bruce Almighty, Morgan Freeman'ın ilahi bir rol üstlendiği ve Jim Carrey'nin başrolde olduğu eğlenceli bir film. Freeman, bu filmde Tanrı'yı canlandırıyor ve kendine has bir bilgelikle izleyicileri etkiliyor. Morgan Freeman oynadığı filmler arasında oldukça popüler olan bu yapım, izleyenlere bol bol kahkaha vadediyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/morgan-freeman-en-iyi-10-filmi#bolum-1",
    "name": "The Dark Knight Rises - Kara Şövalye Yükseliyor",
    "image": "/images/movies/Morgan_Freeman_the_dark_knight_rises_-_kara_sovalye_yukseliyor.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Morgan Freeman",
        "Christian Bale",
        "Gary Oldman"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 44 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "8.4/10",
      "Değerlendirme": "1849242",
      "metacritic": "78"
    },
    "paragraf": "The Dark Knight Rises, Morgan Freeman en iyi filmleri arasında öne çıkan bir diğer Christopher Nolan yapımıdır. Freeman, bu filmde de Lucius Fox karakteriyle izleyici karşısına çıkıyor. Hem karakter derinliği hem de etkileyici aksiyon sahneleriyle, bu film Morgan Freeman filmleri arasında en çok sevilenlerden biridir."
  }

];

const ana_resim = "/images/ana_gorseller/morgan-freeman-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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