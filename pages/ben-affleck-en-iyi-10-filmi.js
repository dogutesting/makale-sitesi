
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function BenAffleckEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "ben-affleck-en-iyi-10-filmi";
const baslik = "Ben Affleck en iyi 10 filmi";
const metin = "Amerikan sinemasının tanınmış oyuncularından biri olan Ben Affleck, kariyeri boyunca pek çok başarılı yapımda yer almıştır. Bu makalede, Ben Affleck filmleri arasında en çok beğenilen ve dikkat çeken 10 eseri sizler için derledik. Ben Affleck oynadığı filmler arasında en iyi olanları keşfedin.";
const bitis_metin = "Bu yazımızda Ben Affleck en iyi filmleri listemizi sunduk. Her biri farklı türlerde ve hikayelerde olan bu yapımlar, Ben Affleck'in kariyerine katkı yapan önemli projeler. Umarız sizin de favori filminizi bu listede bulabilmişsinizdir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["ben","affleck","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:20:36+03:00";
const degistirilmeTarihi = "2024-08-16T17:20:36+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt0287978",
    "url": "https://enonlar.com/ben-affleck-en-iyi-10-filmibolum-10",
    "name": "Daredevil",
    "image": "/images/movies/Ben_Affleck_daredevil.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ben Affleck",
        "Jennifer Garner"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2003",
      "Süre": "1 sa. 43 dk.",
      "Yönetmen": "Mark Steven Johnson",
      "imdb": "5.3/10",
      "Değerlendirme": "231268",
      "metacritic": "42"
    },
    "paragraf": "Daredevil, 2003 yılında gösterime giren ve Ben Affleck'in kör avukat Matt Murdock karakterini canlandırdığı aksiyon dolu bir süper kahraman filmidir. Her ne kadar eleştirmenlerden karışık yorumlar alsa da, Ben Affleck filmi aksiyon sahneleriyle dikkat çekmektedir."
  },
  {
    "num": "9",
    "title_id": "tt0840361",
    "url": "https://enonlar.com/ben-affleck-en-iyi-10-filmibolum-9",
    "name": "The Town - Hırsızlar Şehri",
    "image": "/images/movies/Ben_Affleck_the_town_-_hirsizlar_sehri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ben Affleck",
        "Jeremy Renner",
        "Rebecca Hall"
      ],
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Yıl": "2010",
      "Süre": "2 sa. 5 dk.",
      "Yönetmen": "Ben Affleck",
      "imdb": "7.5/10",
      "Değerlendirme": "419790",
      "metacritic": "74"
    },
    "paragraf": "Hırsızlar Şehri, suç ve dram türünde olan, Ben Affleck'in hem yönetmenliğini yaptığı hem de başrolünde oynadığı bir filmdir. Bu yapım, hem seyirciyi hem de eleştirmenleri etkileyerek Ben Affleck en iyi filmleri arasında gösterilmektedir."
  },
  {
    "num": "8",
    "title_id": "tt0120591",
    "url": "https://enonlar.com/ben-affleck-en-iyi-10-filmibolum-8",
    "name": "Armageddon",
    "image": "/images/movies/Ben_Affleck_armageddon.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ben Affleck",
        "Bruce Willis",
        "Billy Bob Thornton"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Yıl": "1998",
      "Süre": "2 sa. 31 dk.",
      "Yönetmen": "Michael Bay",
      "imdb": "6.7/10",
      "Değerlendirme": "455296",
      "metacritic": "42"
    },
    "paragraf": "1998 yapımı Armageddon, dünya çapında büyük bir felaketi önlemek için mücadele veren bir ekibin hikayesini anlatır. Ben Affleck oynadığı filmler arasında en popüler olanlardan biridir ve özellikle aksiyon severler için benzersiz bir deneyim sunar."
  },
  {
    "num": "7",
    "title_id": "tt0427969",
    "url": "https://enonlar.com/ben-affleck-en-iyi-10-filmibolum-7",
    "name": "Hollywoodland",
    "image": "/images/movies/Ben_Affleck_hollywoodland.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ben Affleck",
        "Adrien Brody",
        "Diane Lane"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2006",
      "Süre": "2 sa. 6 dk.",
      "Yönetmen": "Allen Coulter",
      "imdb": "6.5/10",
      "Değerlendirme": "36151",
      "metacritic": "62"
    },
    "paragraf": "Ben Affleck, 2006 yapımı Hollywoodland filminde ünlü televizyon Superman'i George Reeves'in şüpheli ölümünü konu alan bir hikayeyle karşımıza çıkıyor. Filmdeki performansı, Ben Affleck imdb puanları arasında oldukça olumlu yansımalar almıştır."
  },
  {
    "num": "6",
    "title_id": "tt1024648",
    "url": "https://enonlar.com/ben-affleck-en-iyi-10-filmibolum-6",
    "name": "Argo",
    "image": "/images/movies/Ben_Affleck_argo.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ben Affleck",
        "Bryan Cranston"
      ],
      "Kategori": [
        "Gerilim",
        "Biyografi"
      ],
      "Yıl": "2012",
      "Süre": "2 sa.",
      "Yönetmen": "Ben Affleck",
      "imdb": "7.7/10",
      "Değerlendirme": "642830",
      "metacritic": "86"
    },
    "paragraf": "2012 yılında vizyona giren Argo, Ben Affleck'in yönetmenliğini ve başrolünü üstlendiği Oscar ödüllü bir film. Film, 1979 yılındaki İran rehine krizini anlatıyor ve Ben Affleck en iyi filmi statüsüne erişmiş yapımlardan biri."
  },
  {
    "num": "5",
    "title_id": "tt2267998",
    "url": "https://enonlar.com/ben-affleck-en-iyi-10-filmibolum-5",
    "name": "Gone Girl - Kayıp Kız",
    "image": "/images/movies/Ben_Affleck_gone_girl_-_kayip_kiz.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ben Affleck",
        "Rosamund Pike"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 29 dk.",
      "Yönetmen": "David Fincher",
      "imdb": "8.1/10",
      "Değerlendirme": "1082058",
      "metacritic": "79"
    },
    "paragraf": "Ben Affleck'in başrolünde olduğu Kayıp Kız, 2014 yılında yayımlanan ve David Fincher tarafından yönetilen bir psikolojik gerilim filmidir. Bu yapım, entrika dolu hikayesi ile Ben Affleck en iyi filmleri arasında yer alır."
  },
  {
    "num": "4",
    "title_id": "tt0119217",
    "url": "https://enonlar.com/ben-affleck-en-iyi-10-filmibolum-4",
    "name": "Good Will Hunting - Can Dostum",
    "image": "/images/movies/Ben_Affleck_good_will_hunting_-_can_dostum.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ben Affleck",
        "Matt Damon"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1997",
      "Süre": "2 sa. 6 dk.",
      "Yönetmen": "Gus Van Sant",
      "imdb": "8.3/10",
      "Değerlendirme": "1087061",
      "metacritic": "71"
    },
    "paragraf": "Can Dostum, Ben Affleck ve Matt Damon tarafından yazılan bir dram filmi olup, Ben Affleck'in kariyerindeki dönüm noktalarından biri sayılır. Filmdeki başarı, ona ve Matt Damon'a en iyi senaryo Oscar'ını getirmiştir."
  },
  {
    "num": "3",
    "title_id": "tt2975590",
    "url": "https://enonlar.com/ben-affleck-en-iyi-10-filmibolum-3",
    "name": "Batman v Superman: Dawn of Justice - Batman v Superman: Adaletin Şafağı",
    "image": "/images/movies/Ben_Affleck_batman_v_superman__dawn_of_justice_-_batman_v_superman__adaletin_safagi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ben Affleck",
        "Henry Cavill"
      ],
      "Kategori": [
        "Aksiyon",
        "Fantastik"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 31 dk.",
      "Yönetmen": "Zack Snyder",
      "imdb": "6.5/10",
      "Değerlendirme": "757445",
      "metacritic": "44"
    },
    "paragraf": "Ben Affleck'in Batman rolünde yer aldığı bu yapım, süper kahraman türüne yeni bir soluk getirdi. 2016'da vizyona giren film, Ben Affleck en iyi filmleri arasında popülerliğini korumaktadır."
  },
  {
    "num": "2",
    "title_id": "tt12361974",
    "url": "https://enonlar.com/ben-affleck-en-iyi-10-filmibolum-2",
    "name": "Zack Snyder's Justice League - Zack Snyder'ın Adalet Ligi",
    "image": "/images/movies/Ben_Affleck_zack_snyder's_justice_league_-_zack_snyder'in_adalet_ligi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ben Affleck",
        "Gal Gadot",
        "Henry Cavill"
      ],
      "Kategori": [
        "Aksiyon",
        "Fantastik"
      ],
      "Yıl": "2021",
      "Süre": "4 sa. 2 dk.",
      "Yönetmen": "Zack Snyder",
      "imdb": "7.9/10",
      "Değerlendirme": "443592",
      "metacritic": "54"
    },
    "paragraf": "Zack Snyder'ın yönetmen koltuğunda oturduğu bu genişletilmiş Adalet Ligi versiyonu, Ben Affleck'in Batman performansıyla dikkat çekiyor. Film, hayranlarının merakla beklediği bir yeniden yapım olarak görülüyor."
  },
  {
    "num": "1",
    "title_id": "tt2140479",
    "url": "https://enonlar.com/ben-affleck-en-iyi-10-filmibolum-1",
    "name": "The Accountant - Hesaplaşma",
    "image": "/images/movies/Ben_Affleck_the_accountant_-_hesaplasma.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Ben Affleck",
        "Anna Kendrick"
      ],
      "Kategori": [
        "Gerilim",
        "Aksiyon"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "Gavin O'Connor",
      "imdb": "7.3/10",
      "Değerlendirme": "327731",
      "metacritic": "51"
    },
    "paragraf": "Hesaplaşma, gerilim dolu hikayesi ve Ben Affleck'in etkileyici performansıyla izleyicileri büyüleyen bir film. 2016 yapımı bu film, Ben Affleck en iyi filmi olarak birçok sinemaseverin beğenisini kazanmıştır."
  }

];

const ana_resim = "/images/ana_gorseller/ben-affleck-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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