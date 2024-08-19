
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function RobinWilliamsEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "robin-williams-en-iyi-10-filmi";
const baslik = "Robin Williams en iyi 10 filmi";
const metin = "Robin Williams, eşsiz yeteneği ve geniş film yelpazesiyle sinema dünyasında iz bırakmış bir aktördür. Bu yazımızda Robin Williams filmleri arasında öne çıkan 10 yapımı sizler için derledik. Robin Williams oynadığı filmler ile her dönemde izleyicilerin gönlünde yer edinmiştir. Gelin, Robin Williams en iyi filmleri inceleyelim.";
const bitis_metin = "Bu yazımızda Robin Williams'ın sinema kariyerindeki en iyi yapımları inceledik. Robin Williams en iyi filmi ve diğer favorilerinizi yorumlarda paylaşmayı unutmayın. İzlediğiniz filmler arasından hangileri sizin için unutulmazdı? Yorumlarınızı bekliyoruz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["robin","williams","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:58:46+03:00";
const degistirilmeTarihi = "2024-08-16T16:58:46+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/robin-williams-en-iyi-10-filmi#bolum-10",
    "name": "Jack",
    "image": "/images/movies/Robin_Williams_jack.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robin Williams",
        "Diane Lane"
      ],
      "Kategori": [
        "Dram",
        "Komedi"
      ],
      "Yıl": "1996",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Francis Ford Coppola",
      "imdb": "5.8/10",
      "Değerlendirme": "64420",
      "metacritic": "31"
    },
    "paragraf": "Jack, Robin Williams'ın benzersiz yeteneğini sergilediği ilgi çekici bir filmdir. Filmde, genetik bir rahatsızlık nedeniyle vücudu hızla yaşlanan genç bir çocuğun hikayesi anlatılmaktadır. Dramatik ve komedi unsurlarını ustalıkla harmanlayan bu yapım, Robin Williams en iyi filmleri arasında gösterilir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/robin-williams-en-iyi-10-filmi#bolum-9",
    "name": "The Birdcage - Kuş Kafesi",
    "image": "/images/movies/Robin_Williams_the_birdcage_-_kus_kafesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robin Williams",
        "Nathan Lane",
        "Gene Hackman"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "1996",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Mike Nichols",
      "imdb": "7.2/10",
      "Değerlendirme": "102599",
      "metacritic": "71"
    },
    "paragraf": "Robin Williams filmleri arasında yer alan Kuş Kafesi, mizah dolu hikayesiyle öne çıkar. Williams, eşcinsel bir gece kulübü sahibini canlandırırken, mizahi yeteneğini bir kez daha gözler önüne serer. Film, toplumun ön yargılarına karşı neşeli bir bakış açısı sunmaktadır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/robin-williams-en-iyi-10-filmi#bolum-8",
    "name": "Dead Poets Society - Ölü Ozanlar Derneği",
    "image": "/images/movies/Robin_Williams_dead_poets_society_-_olu_ozanlar_dernegi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robin Williams",
        "Robert Sean Leonard"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1989",
      "Süre": "2 sa. 8 dk.",
      "Yönetmen": "Peter Weir",
      "imdb": "8.1/10",
      "Değerlendirme": "556445",
      "metacritic": "79"
    },
    "paragraf": "Ölü Ozanlar Derneği, Robin Williams en iyi filmlerinden biri olarak kabul edilir. Filmde, özgür düşünceyi ve bireyselliği teşvik eden bir öğretmeni canlandıran Williams, unutulmaz bir performans sergiler. Drama dolu hikayesi ve edebi dokusuyla izleyicilerini derinden etkiler."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/robin-williams-en-iyi-10-filmi#bolum-7",
    "name": "Hook - Kanca",
    "image": "/images/movies/Robin_Williams_hook_-_kanca.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robin Williams",
        "Dustin Hoffman"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Yıl": "1991",
      "Süre": "2 sa. 22 dk.",
      "Yönetmen": "Steven Spielberg",
      "imdb": "6.8/10",
      "Değerlendirme": "275475",
      "metacritic": "52"
    },
    "paragraf": "Robin Williams oynadığı filmler arasında özel bir yere sahip olan Hook, çocukların hayal gücünü ele alır. Filmde, yetişkin Peter Pan karakterine can veren ve Neverland'e dönen Williams, maceranın kapılarını aralar. Bu fantastik hikaye, seyircilere unutulmaz anlar yaşatır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/robin-williams-en-iyi-10-filmi#bolum-6",
    "name": "Good Morning, Vietnam",
    "image": "/images/movies/Robin_Williams_good_morning,_vietnam.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robin Williams",
        "Forest Whitaker"
      ],
      "Kategori": [
        "Dram",
        "Komedi"
      ],
      "Yıl": "1987",
      "Süre": "2 sa. 1 dk.",
      "Yönetmen": "Barry Levinson",
      "imdb": "7.3/10",
      "Değerlendirme": "155797",
      "metacritic": "67"
    },
    "paragraf": "Good Morning, Vietnam, Robin Williams imdb sıralamalarında yüksek yerlere sahip bir film. Vietnam Savaşı sırasında radyo programcılığı yapan Williams, enerjisi ve mizahi anlatımıyla izleyicilerine eğlenceli dakikalar sunar. Savaşın acımasızlığına komediyle yaklaşması, filmi benzersiz kılar."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/robin-williams-en-iyi-10-filmi#bolum-5",
    "name": "The Fisher King",
    "image": "/images/movies/Robin_Williams_the_fisher_king.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robin Williams",
        "Jeff Bridges",
        "Adam Bryant"
      ],
      "Kategori": [
        "Fantastik",
        "Dram"
      ],
      "Yıl": "1991",
      "Süre": "2 sa. 17 dk.",
      "Yönetmen": "Terry Gilliam",
      "imdb": "7.5/10",
      "Değerlendirme": "91808",
      "metacritic": "67"
    },
    "paragraf": "The Fisher King, trajik ve fantastik öğelerin iç içe geçtiği benzersiz bir filmdir. Robin Williams, dünyanın acılarını anlama ve affetme yolculuğunda başrolü oynar. Williamsın bu derin performansı, filmi unutulmaz kılar ve onu Robin Williams en iyi filmi listesinde üst sıralara taşır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/robin-williams-en-iyi-10-filmi#bolum-4",
    "name": "Mrs. Doubtfire - Müthiş Dadı",
    "image": "/images/movies/Robin_Williams_mrs._doubtfire_-_muthis_dadi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robin Williams",
        "Sally Field"
      ],
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "1993",
      "Süre": "2 sa. 5 dk.",
      "Yönetmen": "Chris Columbus",
      "imdb": "7.1/10",
      "Değerlendirme": "295130",
      "metacritic": "54"
    },
    "paragraf": "Müthiş Dadı, Robin Williams filmleri arasında popüler bir komedi yapımıdır. Sevgi dolu bir baba, çocuklarına yakın olabilmek için yaşlı bir dadının kılığına girer. Williams, mizahi dehasını sergilerken aile bağlarının önemine vurgu yapar. Bu film, izleyicilere büyük bir keyif sunar."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/robin-williams-en-iyi-10-filmi#bolum-3",
    "name": "Insomnia - Uykusuz",
    "image": "/images/movies/Robin_Williams_insomnia_-_uykusuz.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robin Williams",
        "Al Pacino",
        "Martin Donovan"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "2002",
      "Süre": "1 sa. 58 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "7.2/10",
      "Değerlendirme": "322059",
      "metacritic": "78"
    },
    "paragraf": "Uykusuz, Robin Williams'ın karanlık bir rolde parladığı bir gerilim filmi. Filmde, cinayetle suçlanan bir yazarı canlandıran Williams, alışılmadık bir performans sergiler. Insomnia, oyuncunun çok yönlülüğünü gözler önüne sererek Robin Williams imdb sıralamasında dikkat çeker."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/robin-williams-en-iyi-10-filmi#bolum-2",
    "name": "Good Will Hunting - Can Dostum",
    "image": "/images/movies/Robin_Williams_good_will_hunting_-_can_dostum.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robin Williams",
        "Matt Damon",
        "Ben Affleck"
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
    "paragraf": "Can Dostum, Robin Williams'a Oscar kazandıran etkileyici bir dram filmi. Filmde, genç bir dahiyi destekleyen terapisti canlandıran Williams, duygusal derinliği ve etkileyici performansıyla hafızalara kazınır. Bu yapım, Robin Williams en iyi filmi olarak anılmaktadır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/robin-williams-en-iyi-10-filmi#bolum-1",
    "name": "Aladdin",
    "image": "/images/movies/Robin_Williams_aladdin.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Robin Williams",
        "Scott Weinger"
      ],
      "Kategori": [
        "Animasyon",
        "Macera"
      ],
      "Yıl": "1992",
      "Süre": "1 sa. 30 dk.",
      "Yönetmen": "Ron Clements",
      "imdb": "8/10",
      "Değerlendirme": "474301",
      "metacritic": "86"
    },
    "paragraf": "Alaaddin, Robin Williams'ın sesiyle hayat bulan bir animasyon klasiktir. Williams, cin karakterine sesiyle benzersiz bir renk katarken, izleyicilerin kalbini fetheder. Çocuklardan yetişkinlere her yaştan izleyiciye hitap eden bu animasyon, Robin Williams en iyi filmleri arasında öne çıkar."
  }

];

const ana_resim = "/images/ana_gorseller/robin-williams-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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