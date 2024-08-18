
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function AndrewScottEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "andrew-scott-en-iyi-10-filmi";
const baslik = "Andrew Scott en iyi 10 filmi";
const metin = "Andrew Scott, etkileyici performansları ve seçici film rolleriyle tanınan bir aktördür. Andrew Scott en iyi filmleri arasında yer alan yapımları sizler için derledik. İşte Andrew Scott'in kariyerinde önemli bir yer tutan filmler ve Andrew Scott imdb sıralamalarına göre öne çıkan yapımlar.";
const bitis_metin = "Bu listede, çeşitli türlerde başarılı performanslar sergileyen Andrew Scott'ın en etkileyici filmlerine yer verdik. Andrew Scott imdb ve eleştirmen puanlarına göre seçtiğimiz yapımlar, kariyerinde önemli izler bırakan eserlerdir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["andrew","scott","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:00:29+03:00";
const degistirilmeTarihi = "2024-08-16T17:00:29+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt4645330",
    "url": "https://enonlar.com/andrew-scott-en-iyi-10-filmibolum-10",
    "name": "Denial - İnkar",
    "image": "/images/movies/Andrew_Scott_denial_-_inkar.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Kategori": [
        "Dram",
        "Biyografi"
      ],
      "Oyuncular": [
        "Andrew Scott",
        "Rachel Weisz",
        "Tom Wilkinson"
      ],
      "Süre": "1 sa. 49 dk.",
      "Yönetmen": "Mick Jackson",
      "imdb": "6.8/10",
      "Değerlendirme": "23775",
      "metacritic": "63"
    },
    "paragraf": "Andrew Scott filmleri arasında önemli bir yere sahip olan Denial, tarihi bir hukuki süreci ele alır. Filmde, Andrew Scott'ın etkileyici performansı ve oyunculuğu göz doldurmaktadır. Andrew Scott oynadığı filmler arasında bu yapım hem düşündürücü hem de öğretici olmayı başarıyor."
  },
  {
    "num": "9",
    "title_id": "tt2573858",
    "url": "https://enonlar.com/andrew-scott-en-iyi-10-filmibolum-9",
    "name": "The Stag - Bekarlığa Veda",
    "image": "/images/movies/Andrew_Scott_the_stag_-_bekarliga_veda.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Kategori": [
        "Komedi"
      ],
      "Oyuncular": [
        "Andrew Scott",
        "Hugh O'Conor"
      ],
      "Süre": "1 sa. 34 dk.",
      "Yönetmen": "John Butler",
      "imdb": "6/10",
      "Değerlendirme": "4514",
      "metacritic": "57"
    },
    "paragraf": "Scott'ın oynadığı bu komedi filmi, bekarlığa veda partileri üzerine eğlenceli bir hikaye sunmaktadır. Andrew Scott en iyi filmleri arasında keyifle izlenebilecek bir yapım. Film, tatlı bir gülümsemeye ve samimi anlara sahip, Scott'ın esprili ve doğal oyunculuğuyla öne çıkarıyor."
  },
  {
    "num": "8",
    "title_id": "tt1976009",
    "url": "https://enonlar.com/andrew-scott-en-iyi-10-filmibolum-8",
    "name": "Victor Frankenstein",
    "image": "/images/movies/Andrew_Scott_victor_frankenstein.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Kategori": [
        "Korku",
        "Dram"
      ],
      "Oyuncular": [
        "Andrew Scott",
        "James McAvoy",
        "Daniel Radcliffe",
        "Jessica Brown Findlay"
      ],
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Paul McGuigan",
      "imdb": "5.9/10",
      "Değerlendirme": "60767",
      "metacritic": "36"
    },
    "paragraf": "Andrew Scott imdb puanları açısından merak edilen Victor Frankenstein, hem korku hem de dram ögelerini taşır. Film, klasik bir hikayeyi modern sinema ile yeniden canlandırıyor ve Andrew Scott, performansıyla bu filmde de dikkatleri çekiyor. Andrew Scott en iyi filmi arasında yer alabilecek bir yapım."
  },
  {
    "num": "7",
    "title_id": "tt2567026",
    "url": "https://enonlar.com/andrew-scott-en-iyi-10-filmibolum-7",
    "name": "Alice Through the Looking Glass",
    "image": "/images/movies/Andrew_Scott_alice_through_the_looking_glass.jpg",
    "ozellikler": {
        "Yıl": "2016",
        "Kategori": [
            "Macera",
            "Aile",
            "Fantastik"
        ],
        "Oyuncular": [
            "Andrew Scott",
            "Mia Wasikowska",
            "Johnny Depp",
            "Helena Bonham Carter"
        ],
        "Süre": "1 sa. 53 dk.",
        "Yönetmen": "James Bobin",
        "imdb": "6.2/10",
        "Değerlendirme": "124251"
    },
    "paragraf": "Andrew Scott, Alice Through the Looking Glass filminde kısa bir rolde yer alıyor. Bu fantastik macera, izleyicilere zamanda yolculuk ve büyülü bir dünyanın kapılarını aralıyor. Scott'ın filmdeki performansı, filmdeki genel atmosferi tamamlayıcı nitelikte."
  },
  {
    "num": "6",
    "title_id": "tt1778108",
    "url": "https://enonlar.com/andrew-scott-en-iyi-10-filmibolum-6",
    "name": "The Hour - Saat",
    "image": "/images/movies/Andrew_Scott_the_hour_-_saat.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Kategori": [
        "Dram",
        "Tarih"
      ],
      "Oyuncular": [
        "Andrew Scott",
        "Ben Whishaw",
        "Romola Garai"
      ],
      "Süre": "1 sa.",
      "Yönetmen": "Jamie Payne",
      "imdb": "8/10",
      "Değerlendirme": "11485"
    },
    "paragraf": "Tarihi ve dram unsurlarıyla öne çıkan The Hour, bir dönemin zorluklarını ve kişiler arası ilişkileri ele alıyor. Andrew Scott, karakterine verdiği derinlik ve güçlü oyunculuğuyla bu dizide izleyicileri büyülemeyi başarıyor."
  },
  {
    "num": "5",
    "title_id": "tt5936866",
    "url": "https://enonlar.com/andrew-scott-en-iyi-10-filmibolum-5",
    "name": "A Dark Place - Karanlık Bir Yer",
    "image": "/images/movies/Andrew_Scott_a_dark_place_-_karanlik_bir_yer.jpg",
    "ozellikler": {
      "Yıl": "2018",
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Oyuncular": [
        "Andrew Scott",
        "Bronagh Waugh"
      ],
      "Süre": "1 sa. 29 dk.",
      "Yönetmen": "Simon Fellows",
      "imdb": "6.2/10",
      "Değerlendirme": "5565",
      "metacritic": "41"
    },
    "paragraf": "Andrew Scott'ın unutulmaz performansı ile A Dark Place, gerilim dolu bir hikaye sunar. Filmde Scott'ın karakterinin çözülmemiş bir gizemi ortaya çıkarmak için verdiği mücadele dikkat çekicidir. Andrew Scott oynadığı filmler arasında bu yapım, izleyicilere etkileyici bir deneyim vaat ediyor."
  },
  {
    "num": "4",
    "title_id": "tt8219328",
    "url": "https://enonlar.com/andrew-scott-en-iyi-10-filmibolum-4",
    "name": "Hamlet",
    "image": "/images/movies/Andrew_Scott_hamlet.jpg",
    "ozellikler": {
      "Yıl": "2018",
      "Kategori": [
        "Tiyatro",
        "Drama"
      ],
      "Oyuncular": [
        "Andrew Scott",
        "Rizz Abbasi",
        "Richard Attenborough"
      ],
      "Süre": "4 sa. 2 dk.",
      "Yönetmen": "Kenneth Branagh",
      "imdb": "7.7/10",
      "Değerlendirme": "40306"
    },
    "paragraf": "Bu klasik eserde Andrew Scott, Hamlet karakterine hayat veriyor ve unutulmaz bir oyunculuk sergiliyor. Tiyatro sahnesinden ekrana taşınan bu performansı, izleyiciler tarafından büyük beğeni topluyor. Andrew Scott en iyi filmleri arasında, mükemmel oyunculuğuyla dikkat çeken bir örnek."
  },
  {
    "num": "3",
    "title_id": "tt5687612",
    "url": "https://enonlar.com/andrew-scott-en-iyi-10-filmibolum-3",
    "name": "Fleabag",
    "image": "/images/movies/Andrew_Scott_fleabag.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Oyuncular": [
        "Andrew Scott",
        "Phoebe Waller-Bridge",
        "Sian Clifford"
      ],
      "Süre": "30 dk.",
      "Yönetmen": "Harry Bradbeer",
      "imdb": "8.7/10",
      "Değerlendirme": "209049"
    },
    "paragraf": "Fleabag, Andrew Scott'ın televizyon kariyerinde önemli bir yere sahiptir. Bu dizideki Rahip karakteriyle kalpleri kazanan Scott, hem dramı hem de komediyi ustalıkla harmanlamaktadır. Andrew Scott en iyi filmi listesinde dizilerle de adından söz ettiren bir oyuncudur."
  },
  {
    "num": "2",
    "title_id": "tt2379713",
    "url": "https://enonlar.com/andrew-scott-en-iyi-10-filmibolum-2",
    "name": "Spectre",
    "image": "/images/movies/Andrew_Scott_spectre.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Oyuncular": [
        "Andrew Scott",
        "Daniel Craig",
        "Christoph Waltz"
      ],
      "Süre": "2 sa. 28 dk.",
      "Yönetmen": "Sam Mendes",
      "imdb": "6.8/10",
      "Değerlendirme": "470107",
      "metacritic": "60"
    },
    "paragraf": "James Bond serisinin bu filminde Andrew Scott, gücünü ve etkileyiciliğini bir kez daha sergiliyor. Spectre, aksiyon ve gerilim dolu anlarıyla izleyicileri büyülerken, Andrés Scott'ın karakteriyle unutulmaz bir deneyim yaşatıyor. Andrew Scott imdb puanlarıyla da dikkat çeken performanslar arasında yer alıyor."
  },
  {
    "num": "1",
    "title_id": "tt3169706",
    "url": "https://enonlar.com/andrew-scott-en-iyi-10-filmibolum-1",
    "name": "Pride - Onur",
    "image": "/images/movies/Andrew_Scott_pride_-_onur.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Oyuncular": [
        "Andrew Scott",
        "Bill Nighy",
        "Ben Schnetzer",
        "Abram Rooney"
      ],
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "Matthew Warchus",
      "imdb": "7.8/10",
      "Değerlendirme": "62410",
      "metacritic": "79"
    },
    "paragraf": "Gerçek bir hikayeden uyarlanan Pride, Andrew Scott en iyi filmleri arasında başı çekiyor. Scott, güçlü bir sosyal mesaj veren bu yapımda üstün bir performans sergiliyor. Dram ve komedi unsurlarını başarıyla birleştiren film, izleyicilerin kalbinde iz bırakıyor."
  }

];

const ana_resim = "/images/ana_gorseller/andrew-scott-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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