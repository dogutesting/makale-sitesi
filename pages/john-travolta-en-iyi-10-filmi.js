
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JohnTravoltaEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "john-travolta-en-iyi-10-filmi";
const baslik = "John Travolta en iyi 10 filmi";
const metin = "John Travolta, sinema dünyasında varlığını hâlâ güçlü bir şekilde sürdüren aktörlerden biri. John Travolta filmleri arasında yıllar içinde birçok unutulmaz yapım bulunuyor. Sizler için, John Travolta'nın kariyerinin en parlayan anlarını içeren en iyi 10 filmini derledik.";
const bitis_metin = "Bu yazımızda, John Travolta'nın sinema kariyerindeki en iyi filmleri sizler için derledik. John Travolta en iyi filmleri arasında yer alan bu eserler, izleyicilere unutulmaz anlar yaşattı. Umarım, bu seçkiyi beğenmişsinizdir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["john","travolta","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:39:13+03:00";
const degistirilmeTarihi = "2024-08-16T16:39:13+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/john-travolta-en-iyi-10-filmibolum-10",
    "name": "Swordfish",
    "image": "/images/movies/John_Travolta_swordfish.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Travolta",
        "Hugh Jackman"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "2001",
      "Süre": "1 sa. 39 dk.",
      "Yönetmen": "Dominic Sena",
      "imdb": "6.5/10",
      "Değerlendirme": "197432",
      "metacritic": "32"
    },
    "paragraf": "John Travolta'nın başrolde olduğu Swordfish, aksiyon dolu sahneleri ve gerilim yüklü hikayesiyle öne çıkıyor. Travolta'nın oyunculuğu izleyenler üzerinde derin izler bırakıyor. John Travolta oynadığı filmler arasında yer alan Swordfish, aksiyonu sevenlere hitap ediyor ve John Travolta imdb sayfasında dikkat çekiyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/john-travolta-en-iyi-10-filmibolum-9",
    "name": "Hairspray",
    "image": "/images/movies/John_Travolta_hairspray.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Travolta",
        "Christopher Walken",
        "Michelle Pfeiffer"
      ],
      "Kategori": [
        "Müzikal",
        "Komedi"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Adam Shankman",
      "imdb": "6.7/10",
      "Değerlendirme": "139700",
      "metacritic": "81"
    },
    "paragraf": "Travolta'nın dâhice bir kadın karakteri canlandırdığı Hairspray, izleyenleri güldürmeyi başarıyor. Filmin neşeli atmosferi ve Travolta'nın performansı, John Travolta filmleri içinde özel bir yere sahip. Hairspray, John Travolta en iyi filmi olarak bahsedilen yapımlardan biri."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/john-travolta-en-iyi-10-filmibolum-8",
    "name": "The Fanatic",
    "image": "/images/movies/John_Travolta_the_fanatic.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Travolta",
        "Devon Sawa"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "2019",
      "Süre": "1 sa. 28 dk.",
      "Yönetmen": "Fred Durst",
      "imdb": "4.1/10",
      "Değerlendirme": "12629",
      "metacritic": "18"
    },
    "paragraf": "The Fanatic, John Travolta'nın oldukça farklı bir karaktere hayat verdiği bir film. Travolta'nın bu rolündeki performansı, hayranları tarafından beğeniyle karşılanıyor. Yapımdaki etkileyici anlatım biçimi, izleyenleri büyülüyor ve John Travolta en iyi filmleri listesinde yerini hak ediyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/john-travolta-en-iyi-10-filmibolum-7",
    "name": "Basic",
    "image": "/images/movies/John_Travolta_basic.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Travolta",
        "Connie Nielsen"
      ],
      "Kategori": [
        "Gerilim",
        "Suç"
      ],
      "Yıl": "2003",
      "Süre": "1 sa. 38 dk.",
      "Yönetmen": "John McTiernan",
      "imdb": "6.4/10",
      "Değerlendirme": "66984",
      "metacritic": "34"
    },
    "paragraf": "John Travolta'nın unutulmaz bir performans sergilediği Basic, polisiye gerilim türünde önemli bir film. İsmi kadar karmaşık bir hikaye sunan yapım, izleyicileri koltuklarına çivilemeyi başarıyor. John Travolta oynadığı filmlerden Basic, etkileyici temposu ile dikkat çekiyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/john-travolta-en-iyi-10-filmibolum-6",
    "name": "The Punisher",
    "image": "/images/movies/John_Travolta_the_punisher.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Travolta",
        "Thomas Jane",
        "A. Russell Andrews",
        "Omar Avila"
      ],
      "Kategori": [
        "Aksiyon",
        "Suç"
      ],
      "Yıl": "2004",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Jonathan Hensleigh",
      "imdb": "6.4/10",
      "Değerlendirme": "171993",
      "metacritic": "33"
    },
    "paragraf": "The Punisher ile Travolta, bir suç imparatorunu canlandırarak filme renk katıyor. Aksiyon ve suçun birleştiği bu film, izleyicilere soluk kesen anlar yaşatıyor. The Punisher, John Travolta filmleri arasında aksiyon severlerin kaçırmaması gereken bir yapım."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/john-travolta-en-iyi-10-filmibolum-5",
    "name": "A Civil Action",
    "image": "/images/movies/John_Travolta_a_civil_action.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Travolta",
        "Robert Duvall"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "1998",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Steven Zaillian",
      "imdb": "6.6/10",
      "Değerlendirme": "31316",
      "metacritic": "68"
    },
    "paragraf": "Travolta'nın avukat rolünde görüldüğü A Civil Action, etkileyici bir dram filmidir. Gerçek bir olaydan esinlenilen yapımda, Travolta'nın performansı izleyiciyi ekrana kitlemeyi başarıyor. John Travolta en iyi filmleri arasında değerlendirilebilecek bir yapıma imza atıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/john-travolta-en-iyi-10-filmibolum-4",
    "name": "Get Shorty",
    "image": "/images/movies/John_Travolta_get_shorty.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Travolta",
        "Danny DeVito",
        "Gene Hackman"
      ],
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Yıl": "1995",
      "Süre": "1 sa. 45 dk.",
      "Yönetmen": "Barry Sonnenfeld",
      "imdb": "6.9/10",
      "Değerlendirme": "90192",
      "metacritic": "81"
    },
    "paragraf": "Get Shorty'de Travolta, eğlenceli bir hikayede karşımıza çıkıyor. Suç ve komedinin bir araya geldiği bu yapımda, Travolta'nın performansı izleyenleri kendine hayran bırakıyor. John Travolta imdb puanı da bu yapımdaki başarısını yansıtıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/john-travolta-en-iyi-10-filmibolum-3",
    "name": "Blow Out",
    "image": "/images/movies/John_Travolta_blow_out.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Travolta",
        "Nancy Allen"
      ],
      "Kategori": [
        "Gizem",
        "Gerilim"
      ],
      "Yıl": "1981",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "Brian De Palma",
      "imdb": "7.4/10",
      "Değerlendirme": "65515",
      "metacritic": "86"
    },
    "paragraf": "Blow Out, gizem dolu senaryosuyla klasik haline gelen bir film. John Travolta'nın mükemmel oyunculuğu, bu yapımı unutulmaz kılıyor. John Travolta en iyi filmi olarak gösterilen bu eser, izleyicilerden tam not alıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/john-travolta-en-iyi-10-filmibolum-2",
    "name": "Grease - Grease",
    "image": "/images/movies/John_Travolta_grease_-_grease.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Travolta",
        "Olivia Newton-John"
      ],
      "Kategori": [
        "Müzikal",
        "Romantik"
      ],
      "Yıl": "1978",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Randal Kleiser",
      "imdb": "7.2/10",
      "Değerlendirme": "304599",
      "metacritic": "70"
    },
    "paragraf": "Grease, Travolta'nın kariyerine damga vuran filmlerden biri. Müzik ve dans dolu bu filmde Travolta, izleyenleri büyülüyor. John Travolta oynadığı filmler arasında önemli bir yere sahip olan Grease, eğlenceli ve romantik yapısıyla izleyenlerin favorisi."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/john-travolta-en-iyi-10-filmibolum-1",
    "name": "Pulp Fiction - Ucuz Roman",
    "image": "/images/movies/John_Travolta_pulp_fiction_-_ucuz_roman.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Travolta",
        "Samuel L. Jackson",
        "Tim Roth",
        "Amanda Plummer"
      ],
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Yıl": "1994",
      "Süre": "2 sa. 34 dk.",
      "Yönetmen": "Quentin Tarantino",
      "imdb": "8.9/10",
      "Değerlendirme": "2249311",
      "metacritic": "95"
    },
    "paragraf": "Pulp Fiction, John Travolta'nın kariyer zirvesini oluşturuyor. Kült statüsüne ulaşan bu film, Travolta'nın efsanevi performansıyla hatırlanıyor. John Travolta en iyi filmi olarak anılan Pulp Fiction, izleyicilere büyüleyici bir deneyim sunuyor ve John Travolta imdb değerlendirmesiyle de yerini sağlamlaştırıyor."
  }

];

const ana_resim = "/images/ana_gorseller/john-travolta-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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