
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function NormanReedusEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "norman-reedus-en-iyi-10-filmi";
const baslik = "Norman Reedus en iyi 10 filmi";
const metin = "Norman Reedus, aksiyon ve dramın içine harmanladığı eşsiz performanslarıyla tanınan bir aktör. Norman Reedus oynadığı filmler arasında öne çıkan yapımları sizler için derledik. İşte Norman Reedus en iyi filmleri listesinin zirvesine giden yolculuk.";
const bitis_metin = "Norman Reedus'un başarılı kariyerinde yer alan bu filmler, onun yeteneklerini ve sinemaya kattıklarını açıkça gösteriyor. İşte Norman Reedus en iyi filmleri derlemesine göz attık. Bir sonraki listede görüşmek üzere.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["norman","reedus","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T17:12:50+03:00";
const degistirilmeTarihi = "2024-08-16T17:12:50+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/norman-reedus-en-iyi-10-filmibolum-10",
    "name": "Deuces Wild - Çılgın İkili",
    "image": "/images/movies/Norman_Reedus_deuces_wild_-_cilgin_ikili.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Norman Reedus",
        "Stephen Dorff",
        "Brad Renfro"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2002",
      "Süre": "1 sa. 36 dk.",
      "Yönetmen": "Scott Kalvert",
      "imdb": "5.6/10",
      "Değerlendirme": "7888",
      "metacritic": "16"
    },
    "paragraf": "Deuces Wild, 1950'lerin Brooklyn'inde geçen suç dolu hikayesiyle dikkat çekiyor. Norman Reedus filmleri arasında farklı bir yeri bulunan bu yapım, izleyicilere dönemin ruhunu hissettiriyor. Norman Reedus imdb puanı ile de övgü topluyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/norman-reedus-en-iyi-10-filmibolum-9",
    "name": "Vacation - Tatil",
    "image": "/images/movies/Norman_Reedus_vacation_-_tatil.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Norman Reedus",
        "Ed Helms",
        "Christina Applegate"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 39 dk.",
      "Yönetmen": "John Francis Daley",
      "imdb": "6.2/10",
      "Değerlendirme": "123108",
      "metacritic": "34"
    },
    "paragraf": "Vacation, mizah dolu bir aile yolculuğunu konu alıyor. Norman Reedus, bu eğlenceli yapımda yer alarak komedi türüne farklı bir soluk getiriyor. Norman Reedus en iyi filmi arayışında olanlar bu eğlenceli produksyonu kaçırmamalı."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/norman-reedus-en-iyi-10-filmibolum-8",
    "name": "The Notorious Bettie Page",
    "image": "/images/movies/Norman_Reedus_the_notorious_bettie_page.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Norman Reedus",
        "Gretchen Mol",
        "Chris Bauer"
      ],
      "Kategori": [
        "Biyografi"
      ],
      "Yıl": "2005",
      "Süre": "1 sa. 31 dk.",
      "Yönetmen": "Mary Harron",
      "imdb": "6.5/10",
      "Değerlendirme": "11724",
      "metacritic": "64"
    },
    "paragraf": "Bettie Page'in hayatını anlatan bu biyografik filmde Norman Reedus, etkileyici performansıyla dikkat çeker. Norman Reedus imdb değerlendirilmelerinde olumlu yorumlar aldı ve Norman Reedus oynadığı filmler arasında izleyici kitlesini büyülemeye devam ediyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/norman-reedus-en-iyi-10-filmibolum-7",
    "name": "Mimic - Taklitçi",
    "image": "/images/movies/Norman_Reedus_mimic_-_taklitci.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Norman Reedus",
        "Mira Sorvino",
        "Jeremy Northam"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "1997",
      "Süre": "1 sa. 45 dk.",
      "Yönetmen": "Guillermo del Toro",
      "imdb": "6/10",
      "Değerlendirme": "56273",
      "metacritic": "56"
    },
    "paragraf": "Mimic, genetik mühendislik hatalarının gün yüzüne çıkmasıyla oluşan korku dolu atmosferiyle dikkat çekiyor. Norman Reedus filmleri koleksiyonunda bu bilim kurgu eseri ayrı bir yere sahip ve Norman Reedus en iyi filmleri arasında öne çıkıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/norman-reedus-en-iyi-10-filmibolum-6",
    "name": "Cadillac Records - Cadillac Kayıtları",
    "image": "/images/movies/Norman_Reedus_cadillac_records_-_cadillac_kayitlari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Norman Reedus",
        "Josh Alscher",
        "Tim Bellow"
      ],
      "Kategori": [
        "Müzik"
      ],
      "Yıl": "2008",
      "Süre": "1 sa. 49 dk.",
      "Yönetmen": "Darnell Martin",
      "imdb": "7/10",
      "Değerlendirme": "23317",
      "metacritic": "65"
    },
    "paragraf": "Cadillac Records, 1950'lerin müziğini konu alarak izleyicilere nostaljik bir deneyim sunuyor. Norman Reedus, bu eğlenceli projede güçlü performansıyla dikkatleri üzerine çekiyor. Norman Reedus en iyi filmi değerlendirmelerinde bu eserle hatırlanıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/norman-reedus-en-iyi-10-filmibolum-5",
    "name": "8MM - Sekiz Milimetre",
    "image": "/images/movies/Norman_Reedus_8mm_-_sekiz_milimetre.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Norman Reedus",
        "Nicolas Cage",
        "Joaquin Phoenix"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "1999",
      "Süre": "2 sa. 3 dk.",
      "Yönetmen": "Joel Schumacher",
      "imdb": "6.6/10",
      "Değerlendirme": "144331",
      "metacritic": "21"
    },
    "paragraf": "Sekiz Milimetre, karanlık bir gerilim hikayesini merkezine alıyor. Norman Reedus, bu filmdeki çarpıcı performansıyla Norman Reedus oynadığı filmler listesinde önemli bir yer alıyor. Norman Reedus imdb puanları ile bu eser, başarılı bir şekilde hatırlanıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/norman-reedus-en-iyi-10-filmibolum-4",
    "name": "American Gangster",
    "image": "/images/movies/Norman_Reedus_american_gangster.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Norman Reedus",
        "Denzel Washington",
        "Russell Crowe"
      ],
      "Kategori": [
        "Suç Dram"
      ],
      "Yıl": "2007",
      "Süre": "2 sa. 37 dk.",
      "Yönetmen": "Ridley Scott",
      "imdb": "7.8/10",
      "Değerlendirme": "457639",
      "metacritic": "76"
    },
    "paragraf": "American Gangster, suç dünyasının karmaşık ilişkilerini derinlemesine işlerken Norman Reedus gerilim ve dram arasında bir köprü oluşturuyor. Norman Reedus imdb yorumlarıyla öne çıkan bir performans sergileyerek, bu filmde izleyenleri kendisine hayran bırakıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/norman-reedus-en-iyi-10-filmibolum-3",
    "name": "The Boondock Saints II: All Saints Day - Kasabanın Azizi II: Azizlik Günü",
    "image": "/images/movies/Norman_Reedus_the_boondock_saints_ii__all_saints_day_-_kasabanin_azizi_ii__azizlik_gunu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Norman Reedus",
        "Sean Patrick Flanery"
      ],
      "Kategori": [
        "Aksiyon-Dram"
      ],
      "Yıl": "2009",
      "Süre": "1 sa. 58 dk.",
      "Yönetmen": "Troy Duffy",
      "imdb": "6.2/10",
      "Değerlendirme": "67165",
      "metacritic": "24"
    },
    "paragraf": "Kasabanın Azizi II: Azizlik Günü, aksiyon ve dramı bir araya getiriyor. Norman Reedus bu yapımda başrolde, cesur bir performans sergiliyor. İzleyiciler Norman Reedus en iyi filmleri arasında bu filmin önemli bir yere sahip olduğunu belirtiyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/norman-reedus-en-iyi-10-filmibolum-2",
    "name": "The Boondock Saints - Kasabanın Azizi",
    "image": "/images/movies/Norman_Reedus_the_boondock_saints_-_kasabanin_azizi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Norman Reedus",
        "Willem Dafoe",
        "Sean Patrick Flanery"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "1999",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "Troy Duffy",
      "imdb": "7.6/10",
      "Değerlendirme": "252392",
      "metacritic": "44"
    },
    "paragraf": "Kasabanın Azizi, adalet kavramını benzersiz bir bakış açısıyla ele alıyor. Norman Reedus oynadığı filmler arasında bu yapıtta gösterdiği performans ile hayranlarının beğenisini kazandı. Norman Reedus en iyi filmi arasında sıkça adı geçen bir yapım."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/norman-reedus-en-iyi-10-filmibolum-1",
    "name": "Blade II",
    "image": "/images/movies/Norman_Reedus_blade_ii.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Norman Reedus",
        "Wesley Snipes",
        "Kris Kristofferson"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2002",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Guillermo del Toro",
      "imdb": "6.7/10",
      "Değerlendirme": "237526",
      "metacritic": "52"
    },
    "paragraf": "Blade II, vampirler ve insanları karşı karşıya getirirken, Norman Reedus kendi karizmatik oyunculuğuyla filme renk katıyor. Norman Reedus imdb puanları ile de dikkat çeken yapım, aksiyon severlerin kesinlikle göz atması gereken bir başyapıt olarak öne çıkıyor."
  }

];

const ana_resim = "/images/ana_gorseller/norman-reedus-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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