
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EvaGreenEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "eva-green-en-iyi-10-filmi";
const baslik = "Eva Green en iyi 10 filmi";
const metin = "Eva Green, yeteneği ve güzelliğiyle dikkat çeken Fransız bir oyuncudur. Kariyerine pek çok unutulmaz performans sığdırmayı başaran Green'in, hem dramatik hem de aksiyon türlerindeki yetenekleri oldukça dikkat çekicidir. Biz de sizler için Eva Green filmleri arasında en iyi 10 tanesini derledik.";
const bitis_metin = "Bu yazıda Eva Green'in etkileyici ve çeşitli türlerdeki en iyi performans gösterdiği yapımları inceledik. Geniş yelpazedeki filmografisi, onu en yetenekli oyuncular arasına katıyor. Umarız bu rehber, Eva Green’in filmi keşfetmeniz için size ilham verir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["eva","green","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:15:34+03:00";
const degistirilmeTarihi = "2024-08-16T16:15:34+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/eva-green-en-iyi-10-filmi#bolum-10",
    "name": "300: Rise of an Empire",
    "image": "/images/movies/Eva_Green_300__rise_of_an_empire.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Eva Green",
        "Sullivan Stapleton"
      ],
      "Kategori": [
        "Aksiyon",
        "Savaş"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 42 dk.",
      "Yönetmen": "Noam Murro",
      "imdb": "6.2/10",
      "Değerlendirme": "318399",
      "metacritic": "48"
    },
    "paragraf": "Eva Green filmleri arasında önemli bir yer tutan 300: Rise of an Empire, aksiyon ve savaş sahneleriyle dikkat çekiyor. Eva Green'in oynadığı filmler içerisinde en iyi performanslarından birini sergilediği bu yapımda, muhteşem savaş sahneleri izleyiciyi büyülüyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/eva-green-en-iyi-10-filmi#bolum-9",
    "name": "White Bird in a Blizzard - Karda Bir Beyaz Kuş",
    "image": "/images/movies/Eva_Green_white_bird_in_a_blizzard_-_karda_bir_beyaz_kus.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Eva Green",
        "Shailene Woodley"
      ],
      "Kategori": [
        "Dram",
        "Gizem"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 31 dk.",
      "Yönetmen": "Gregg Araki",
      "imdb": "6.4/10",
      "Değerlendirme": "30171",
      "metacritic": "51"
    },
    "paragraf": "Eva Green'in etkileyici bir performans sergilediği Karda Bir Beyaz Kuş, dram ve gizem dolu hikayesiyle izleyiciyi derinlemesine etkiliyor. Eva Green en iyi filmleri arasında düşündüğümüzde, Green'in karmaşık karakteri canlandırdığı bu film mutlaka izlenmeli."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/eva-green-en-iyi-10-filmi#bolum-8",
    "name": "The Golden Compass - Altın Pusula",
    "image": "/images/movies/Eva_Green_the_golden_compass_-_altin_pusula.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Eva Green",
        "Nicole Kidman",
        "Daniel Craig"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Chris Weitz",
      "imdb": "6.1/10",
      "Değerlendirme": "197788",
      "metacritic": "51"
    },
    "paragraf": "Eva Green oynadığı filmler arasında fantastik bir yapım olan Altın Pusula, izleyicileri büyülü bir dünyaya davet ediyor. Hikaye, paralel bir evrende geçiyor ve Green'in performansı, bu dünyayı gerçek kılmada büyük rol oynuyor. Altın Pusula, Eva Green imdb oylarıyla hak ettiği ilgiyi görüyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/eva-green-en-iyi-10-filmi#bolum-7",
    "name": "The Dreamers - Düşler, Tutkular ve Suçlar",
    "image": "/images/movies/Eva_Green_the_dreamers_-_dusler,_tutkular_ve_suclar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Eva Green",
        "Michael Pitt"
      ],
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Yıl": "2003",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Bernardo Bertolucci",
      "imdb": "7.1/10",
      "Değerlendirme": "133455",
      "metacritic": "63"
    },
    "paragraf": "Green'in cesur performansıyla öne çıktığı Düşler, Tutkular ve Suçlar, 1968'in politik kargaşasının ortasında Paris'te geçen cesur bir film. Eva Green'in en iyi filmleri arasında yer alan bu yapım, izleyicileri duygusal derinliklere çekiyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/eva-green-en-iyi-10-filmi#bolum-6",
    "name": "Perfect Sense - Kusursuz Duygu",
    "image": "/images/movies/Eva_Green_perfect_sense_-_kusursuz_duygu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Eva Green",
        "Ewan McGregor",
        "Lauren Tempany"
      ],
      "Kategori": [
        "Dram",
        "Romantik",
        "Bilim Kurgu"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 32 dk.",
      "Yönetmen": "David Mackenzie",
      "imdb": "7/10",
      "Değerlendirme": "64416",
      "metacritic": "55"
    },
    "paragraf": "Bir aşk hikayesini, insanlık için kıyamet senaryosu altında işleyen Kusursuz Duygu, Eva Green'in etkileyici performansıyla hafızalarda yer ediyor. Eva Green imdb puanlarına bakıldığında, bu filmin etkileyici hikayesi ve Green'in performansı dikkat çekiyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/eva-green-en-iyi-10-filmi#bolum-5",
    "name": "Dumbo",
    "image": "/images/movies/Eva_Green_dumbo.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Eva Green",
        "Colin Farrell",
        "Michael Keaton"
      ],
      "Kategori": [
        "Aile",
        "Fantastik"
      ],
      "Yıl": "2019",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "Tim Burton",
      "imdb": "6.3/10",
      "Değerlendirme": "83306",
      "metacritic": "51"
    },
    "paragraf": "Tim Burton’ın yönetmenliğinde çekilen Dumbo, Eva Green’in başrolde yer aldığı büyülü bir masal. Fantastik dünyası ve etkileyici görsel efektleriyle Eva Green, bu filmde de başarılı bir performans sergiliyor. Kendisinden beklenen kalitede bir oyun."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/eva-green-en-iyi-10-filmi#bolum-4",
    "name": "Proxima",
    "image": "/images/movies/Eva_Green_proxima.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Eva Green",
        "Matt Dillon",
        "Zélie Boulant"
      ],
      "Kategori": [
        "Dram",
        "Bilim Kurgu"
      ],
      "Yıl": "2019",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Alice Winocour",
      "imdb": "6.3/10",
      "Değerlendirme": "9129",
      "metacritic": "71"
    },
    "paragraf": "Bir kadın astronotun hikayesini anlatan Proxima, Eva Green’in etkileyici performansıyla göz dolduruyor. Green, bu filmde hayatının en önemli yolculuğu öncesinde annelik ve profesyonel kimliği arasında kalmış bir kadını canlandırıyor. Eva Green en iyi filmi arasında gösterilebilir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/eva-green-en-iyi-10-filmi#bolum-3",
    "name": "Miss Peregrine's Home for Peculiar Children - Bayan Peregrine'in Tuhaf Çocukları",
    "image": "/images/movies/Eva_Green_miss_peregrine's_home_for_peculiar_children_-_bayan_peregrine'in_tuhaf_cocuklari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Eva Green",
        "Asa Butterfield"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 7 dk.",
      "Yönetmen": "Tim Burton",
      "imdb": "6.7/10",
      "Değerlendirme": "190941",
      "metacritic": "57"
    },
    "paragraf": "Tim Burton’ın fantastik dünyasıyla buluşan bu filmde, Eva Green etkileyici bir karakteri canlandırıyor. Fantastik olayların merkezinde yer alan Bayan Peregrine, Eva Green oynadığı filmler arasında unutulmaz bir deneyim sunuyor. Bu filmde de Green'in büyüleyici performansını izliyoruz."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/eva-green-en-iyi-10-filmi#bolum-2",
    "name": "Casino Royale",
    "image": "/images/movies/Eva_Green_casino_royale.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Eva Green",
        "Daniel Craig"
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
    "paragraf": "Eva Green’in Bond kızı Vesper Lynd olarak karşımıza çıktığı Casino Royale, aksiyon ve gerilim dolu bir yapım. Eva Green en iyi filmleri arasında sıkça anılan bu film, James Bond serisinin unutulmazları arasına girdi. Eva Green imdb puanıyla da dikkat çekiyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/eva-green-en-iyi-10-filmi#bolum-1",
    "name": "Penny Dreadful",
    "image": "/images/movies/Eva_Green_penny_dreadful.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Eva Green",
        "Josh Hartnett",
        "Reeve Carney",
        "Timothy Dalton"
      ],
      "Kategori": [
        "Korku",
        "Dram"
      ],
      "Yıl": "2014",
      "Süre": "1 sa.",
      "Yönetmen": "Damon Thomas",
      "imdb": "8.2/10",
      "Değerlendirme": "132423"
    },
    "paragraf": "Penny Dreadful, Eva Green’in kariyerinde önemli bir yer tutan korku ve dram türündeki yapımlarından. Green, bu dizide olağanüstü performansıyla dikkat çekiyor. Eva Green filmleri içinde olması gereken bir yapım ve onun oyunculuk kariyerinin zirvelerinden birine ulaşmasını sağladı."
  }

];

const ana_resim = "/images/ana_gorseller/eva-green-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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