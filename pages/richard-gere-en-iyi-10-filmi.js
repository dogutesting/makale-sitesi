
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function RichardGereEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "richard-gere-en-iyi-10-filmi";
const baslik = "Richard Gere en iyi 10 filmi";
const metin = "Richard Gere, uzun kariyeri boyunca birçok etkileyici performans sergilemiştir. Onu izlediğinizde, karakterlerine kattığı derinlik ve duygusal yoğunluk hemen fark edilir. İşte Richard Gere filmleri arasında en iyileri sizler için derledik.";
const bitis_metin = "Bu makalemizde Richard Gere en iyi filmleri listesini inceledik. Richard Gere oynadığı filmler içinde birbirinden farklı ve etkileyici performanslarını görmek mümkün. Umarız, film seçiminizde size rehberlik edebilmişizdir. Keyifli seyirler!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["richard","gere","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:05:23+03:00";
const degistirilmeTarihi = "2024-08-16T17:05:23+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/richard-gere-en-iyi-10-filmi#bolum-10",
    "name": "The Jackal - Çakal",
    "image": "/images/movies/Richard_Gere_the_jackal_-_cakal.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Richard Gere",
        "Bruce Willis"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Yıl": "1997",
      "imdb": "6.4/10",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Michael Caton-Jones",
      "Değerlendirme": "125233",
      "metacritic": "36"
    },
    "paragraf": "The Jackal, Richard Gere'in aksiyon-gerilim dalında dikkat çeken filmleri arasında yer alır. Bruce Willis ve Richard Gere'in başrollerini paylaştığı bu yapım, hedefinin kim olduğunu gizleyen bir kiralık katilin peşine düşen polislerin hikayesini anlatır. Richard Gere filmleri arasında gerilim dozu yüksek olan yapımlardan biridir ve Richard Gere oynadığı filmler arasında farklı bir yere sahiptir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/richard-gere-en-iyi-10-filmi#bolum-9",
    "name": "Primal Fear - İlk Korku",
    "image": "/images/movies/Richard_Gere_primal_fear_-_ilk_korku.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Richard Gere",
        "Edward Norton",
        "Laura Linney"
      ],
      "Kategori": [
        "Drama",
        "Gerilim"
      ],
      "Yıl": "1996",
      "imdb": "7.7/10",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Gregory Hoblit",
      "Değerlendirme": "250302",
      "metacritic": "47"
    },
    "paragraf": "Primal Fear, Edward Norton'un oyunculuk yeteneğinin de ön plana çıktığı bir gerilim filmidir. Richard Gere'in usta avukat rolüyle parladığı bu film, Richard Gere en iyi filmleri arasında haklı bir yer edinir. Suç ve adalet temalarını irdeleyen bu yapıtta Richard Gere oynadığı güçlü karakterlerle izleyicileri büyülemeye devam ediyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/richard-gere-en-iyi-10-filmi#bolum-8",
    "name": "Sommersby - Yabancı",
    "image": "/images/movies/Richard_Gere_sommersby_-_yabanci.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Richard Gere",
        "Jodie Foster"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Yıl": "1993",
      "imdb": "6.3/10",
      "Süre": "1 sa. 54 dk.",
      "Yönetmen": "Jon Amiel",
      "Değerlendirme": "23416"
    },
    "paragraf": "Sommersby, Richard Gere'in farklı bir rol üstlendiği, aşk ve kimlik temalarını işleyen bir dramdır. Filmde, Jodie Foster ile birlikte güçlü bir performans sergileyen Gere, izleyicileri duygusal bir yolculuğa çıkarıyor. Richard Gere en iyi filmi diye anılabilecek yapımlardan biri olarak, duygusal derinliğiyle Richard Gere oynadığı filmler içinde göz dolduruyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/richard-gere-en-iyi-10-filmi#bolum-7",
    "name": "Pretty Woman - Özel Bir Kadın",
    "image": "/images/movies/Richard_Gere_pretty_woman_-_ozel_bir_kadin.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Richard Gere",
        "Julia Roberts"
      ],
      "Kategori": [
        "Romantik",
        "Komedi"
      ],
      "Yıl": "1990",
      "imdb": "7.1/10",
      "Süre": "1 sa. 59 dk.",
      "Yönetmen": "Garry Marshall",
      "Değerlendirme": "369852",
      "metacritic": "51"
    },
    "paragraf": "Pretty Woman, sinema tarihinin en unutulmaz romantik komedilerinden biridir. Richard Gere ve Julia Roberts'ın kimyası filmi izlenmeye değer kılıyor. Gere için Richard Gere en iyi filmleri arasında vazgeçilmez bir klasiktir ve Richard Gere imdb puanı bakımından da oldukça yüksektir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/richard-gere-en-iyi-10-filmi#bolum-6",
    "name": "An Officer and a Gentleman - Subay ve Centilmen",
    "image": "/images/movies/Richard_Gere_an_officer_and_a_gentleman_-_subay_ve_centilmen.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Richard Gere",
        "Debra Winger"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Yıl": "1982",
      "imdb": "7.1/10",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Taylor Hackford",
      "Değerlendirme": "63576",
      "metacritic": "75"
    },
    "paragraf": "An Officer and a Gentleman, Richard Gere'in kariyerinde önemli bir fırsat olarak kabul edilir. Debra Winger ile paylaştığı başrol, romantizmin ve zor yaşam koşullarının etkileyici bir harmanını sunuyor. Richard Gere en iyi filmi olarak da düşünülebilecek olan bu yapım, izleyenlerin hafızalarında yer edinmiştir."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/richard-gere-en-iyi-10-filmi#bolum-5",
    "name": "Arbitrage - Entrika",
    "image": "/images/movies/Richard_Gere_arbitrage_-_entrika.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Richard Gere",
        "Susan Sarandon"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "2012",
      "imdb": "6.6/10",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Nicholas Jarecki",
      "Değerlendirme": "55299",
      "metacritic": "73"
    },
    "paragraf": "Arbitrage, finans dünyasındaki entrikaları ve kişisel dramları ele alan önemli bir yapımdır. Richard Gere'in güçlü karakter tasviri ve Susan Sarandon ile uyumu, bu filmi özel kılar. Richard Gere en iyi filmleri listesinde her zaman üst sıralarda olmayı hak eden bu film, gerilim dolu anlarıyla dikkat çekmektedir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/richard-gere-en-iyi-10-filmi#bolum-4",
    "name": "American Gigolo - Amerikalı Jigolo",
    "image": "/images/movies/Richard_Gere_american_gigolo_-_amerikali_jigolo.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Richard Gere",
        "Lauren Hutton"
      ],
      "Kategori": [
        "Drama",
        "Gerilim"
      ],
      "Yıl": "1980",
      "imdb": "6.3/10",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Paul Schrader",
      "Değerlendirme": "29930",
      "metacritic": "57"
    },
    "paragraf": "American Gigolo, Richard Gere'in kariyerini yükselten ve onu bir yıldız yapan film olarak anılır. Lauren Hutton ile paylaştığı başrolü, dönemin ruhunu yansıtırken modern temalarla izleyiciye sunuyor. Bu, Richard Gere imdb sıralamasında dikkate değer bir eserdir ve Gere'in hayranları için vazgeçilmezdir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/richard-gere-en-iyi-10-filmi#bolum-3",
    "name": "Chicago",
    "image": "/images/movies/Richard_Gere_chicago.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Richard Gere",
        "Renée Zellweger",
        "Taye Diggs",
        "Cliff Saunders"
      ],
      "Kategori": [
        "Müzikal",
        "Komedi",
        "Suç"
      ],
      "Yıl": "2002",
      "imdb": "7.2/10",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Rob Marshall",
      "Değerlendirme": "245201",
      "metacritic": "81"
    },
    "paragraf": "Chicago, sinemanın en sevilen müzikallerinden biri olarak bilinir. Richard Gere, Renée Zellweger ve Catherine Zeta-Jones gibi dev isimlerle birlikte unutulmaz bir performans sergiler. Richard Gere filmleri arasında farklı bir tat sunan bu yapım, Richard Gere oynadığı filmler arasında ödüllere layık görülmüştür."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/richard-gere-en-iyi-10-filmi#bolum-2",
    "name": "Days of Heaven - Cennet Günleri",
    "image": "/images/movies/Richard_Gere_days_of_heaven_-_cennet_gunleri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Richard Gere",
        "Brooke Adams"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Yıl": "1978",
      "imdb": "7.7/10",
      "Süre": "1 sa. 34 dk.",
      "Yönetmen": "Terrence Malick",
      "Değerlendirme": "63542",
      "metacritic": "94"
    },
    "paragraf": "Days of Heaven, görsel bir şölen sunan, Terrence Malick'in yönetmenliğinde çekilmiş bir başyapıttır. Richard Gere ve Brooke Adams'ın performansları, filmi izlemeye değer kılan unsurlar arasında. Gere'in en etkileyici eserlerinden biri olarak kabul edilen bu yapım, Richard Gere o kadar iyi ki bu film onun en iyi senaryolardan biriydi denilebilir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/richard-gere-en-iyi-10-filmi#bolum-1",
    "name": "Hachi: A Dog's Tale - Hachi: Bir Köpeğin Hikayesi",
    "image": "/images/movies/Richard_Gere_hachi__a_dog's_tale_-_hachi__bir_kopegin_hikayesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Richard Gere",
        "Joan Allen"
      ],
      "Kategori": [
        "Drama",
        "Aile"
      ],
      "Yıl": "2009",
      "imdb": "8.1/10",
      "Süre": "1 sa. 33 dk.",
      "Yönetmen": "Lasse Hallström",
      "Değerlendirme": "315698"
    },
    "paragraf": "Hachi: A Dog's Tale, Richard Gere'in duygusal derinliğini ortaya koyan bir yapım olarak öne çıkar. Joan Allen ile birlikte rol aldığı bu film, sadakat ve sevginin öyküsünü samimiyetle anlatır. Richard Gere imdb puanı yüksek projelerinden biri olarak, izleyicilerine duygusal bir deneyim sunmaktadır. Richard Gere en iyi filmi olabilir ve birçok eleştirmen tarafından övgüyle karşılanmıştır."
  }

];

const ana_resim = "/images/ana_gorseller/richard-gere-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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