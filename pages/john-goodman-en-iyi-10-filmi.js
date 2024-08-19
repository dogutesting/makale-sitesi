
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JohnGoodmanEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "john-goodman-en-iyi-10-filmi";
const baslik = "John Goodman en iyi 10 filmi";
const metin = "John Goodman, sinema dünyasında unutulmaz rollere imza atmış başarılı bir aktördür. Onun oynadığı en iyi filmleri derledik. İşte John Goodman filmleri arasında seçtiğimiz bu liste, birçok sinemaseverin beğenisini kazanan yapımlardan oluşuyor. John Goodman en iyi filmleri ile ilgili yaptığınız aramalar için doğru yerdesiniz.";
const bitis_metin = "Bu listede John Goodman'ın kariyerinin topladığı en dikkat çekici filmleri sizler için derledik. John Goodman en iyi filmleri arasındaki bu yapımlar, izleyicilere eşsiz deneyimler sunuyor. Bu harika filmleri izleyerek Goodman'ın eşsiz yeteneğini yeniden keşfedin.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["john","goodman","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:15:02+03:00";
const degistirilmeTarihi = "2024-08-16T16:15:02+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/john-goodman-en-iyi-10-filmi#bolum-10",
    "name": "Kong: Skull Island - Kong: Kafatası Adası",
    "image": "/images/movies/John_Goodman_kong__skull_island_-_kong__kafatasi_adasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Goodman",
        "Tom Hiddleston",
        "Samuel L. Jackson"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 58 dk.",
      "Yönetmen": "Jordan Vogt-Roberts",
      "imdb": "6.7/10",
      "Değerlendirme": "354161",
      "metacritic": "62"
    },
    "paragraf": "Kong: Kafatası Adası'nda John Goodman, sıradışı bir keşif ekibinin üyesi olarak karşımıza çıkıyor. Filmde, macera ve fantastik unsurlar mükemmel bir şekilde harmanlanıyor. Bu film, John Goodman filmleri arasında aksiyon severler için ön plana çıkıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/john-goodman-en-iyi-10-filmi#bolum-9",
    "name": "The Big Easy - Şenlik Ateşi",
    "image": "/images/movies/John_Goodman_the_big_easy_-_senlik_atesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Goodman",
        "Dennis Quaid",
        "Ellen Barkin"
      ],
      "Kategori": [
        "Suç",
        "Gerilim"
      ],
      "Yıl": "1987",
      "Süre": "1 sa. 42 dk.",
      "Yönetmen": "Jim McBride",
      "imdb": "6.5/10",
      "Değerlendirme": "14177",
      "metacritic": "77"
    },
    "paragraf": "John Goodman'ın unutulmaz performanslarından biri olan The Big Easy, suç ve gerilim dolu bir hikaye sunuyor. Goodman, karakterine kattığı derinlikle göz dolduruyor. John Goodman oynadığı filmler arasında bu yapım, farklı çarpıcılığıyla anılıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/john-goodman-en-iyi-10-filmi#bolum-8",
    "name": "Monsters, Inc. - Sevimli Canavarlar",
    "image": "/images/movies/John_Goodman_monsters,_inc._-_sevimli_canavarlar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Goodman",
        "Billy Crystal"
      ],
      "Kategori": [
        "Animasyon",
        "Komedi"
      ],
      "Yıl": "2001",
      "Süre": "1 sa. 32 dk.",
      "Yönetmen": "Pete Docter",
      "imdb": "8.1/10",
      "Değerlendirme": "992013",
      "metacritic": "79"
    },
    "paragraf": "Sevimli Canavarlar, çocuklar ve aileler tarafından sevilen bir animasyon filmi. John Goodman, Sulley karakterine ses vererek animasyona hayat katıyor. John Goodman imdb puanları arasında bu filme yüksek not veriliyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/john-goodman-en-iyi-10-filmi#bolum-7",
    "name": "10 Cloverfield Lane - Cloverfield Yolu No: 10",
    "image": "/images/movies/John_Goodman_10_cloverfield_lane_-_cloverfield_yolu_no__10.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Goodman",
        "Mary Elizabeth Winstead"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Korku"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 43 dk.",
      "Yönetmen": "Dan Trachtenberg",
      "imdb": "7.2/10",
      "Değerlendirme": "359578",
      "metacritic": "76"
    },
    "paragraf": "10 Cloverfield Lane, gerilimin ve korkunun doruklarda olduğu bir bilim kurgu yapımıdır. John Goodman’ın karakteri üzerinde kurduğu gergin atmosfer, filmi unutulmaz kılıyor. John Goodman en iyi filmi arasında bu yapımı göz ardı etmemeliyiz."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/john-goodman-en-iyi-10-filmi#bolum-6",
    "name": "O Brother, Where Art Thou? - Nerdesin Be Birader?",
    "image": "/images/movies/John_Goodman_o_brother,_where_art_thou__-_nerdesin_be_birader_.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Goodman",
        "George Clooney",
        "John Turturro"
      ],
      "Kategori": [
        "Komedi",
        "Macera"
      ],
      "Yıl": "2000",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Joel Coen",
      "imdb": "7.7/10",
      "Değerlendirme": "333972",
      "metacritic": "69"
    },
    "paragraf": "Nerdesin Be Birader?, komedi ve macerayı bir araya getirerek izleyicilere keyifli dakikalar sunuyor. John Goodman’ın kıvrak zekası ve usta oyunculuğu ile film, büyük bir beğeni topluyor. John Goodman filmleri arasında yeri dolmaz bir yapıttır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/john-goodman-en-iyi-10-filmi#bolum-5",
    "name": "The Babe - Beyzbol Yıldızı",
    "image": "/images/movies/John_Goodman_the_babe_-_beyzbol_yildizi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Goodman",
        "Kelly McGillis"
      ],
      "Kategori": [
        "Biyografi",
        "Spor"
      ],
      "Yıl": "1992",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Arthur Hiller",
      "imdb": "5.9/10",
      "Değerlendirme": "11622"
    },
    "paragraf": "Beyzbol Yıldızı, spor dünyasının efsanelerinden biri olan Babe Ruth’un hayatını anlatıyor. John Goodman, bu efsanevi beyzbol oyuncusunu canlandırarak izleyenlere gerçek bir karakter sunuyor. John Goodman filmleri listesinde biyografi türü severler için vazgeçilmezdir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/john-goodman-en-iyi-10-filmi#bolum-4",
    "name": "Barton Fink",
    "image": "/images/movies/John_Goodman_barton_fink.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Goodman",
        "John Turturro"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "1991",
      "Süre": "1 sa. 56 dk.",
      "Yönetmen": "Joel Coen",
      "imdb": "7.6/10",
      "Değerlendirme": "129837",
      "metacritic": "69"
    },
    "paragraf": "Barton Fink, Hollywood’un karmaşık dünyasını ele alırken, John Goodman’ın karakteri gerilimi artırıyor. Filmin şaşırtıcı olay örgüsü izleyiciyi içine çekiyor. John Goodman filmleri arasında bu yapım, özellikle dram türü severler için unutulmaz."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/john-goodman-en-iyi-10-filmi#bolum-3",
    "name": "Argo",
    "image": "/images/movies/John_Goodman_argo.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Goodman",
        "Ben Affleck",
        "Bryan Cranston"
      ],
      "Kategori": [
        "Gerilim",
        "Tarih"
      ],
      "Yıl": "2012",
      "Süre": "2 sa.",
      "Yönetmen": "Ben Affleck",
      "imdb": "7.7/10",
      "Değerlendirme": "642830",
      "metacritic": "86"
    },
    "paragraf": "Argo filmi, gerçek bir hikayeye dayalı olarak gerilim dolu bir serüven sunuyor. John Goodman’ın mükemmel performansı bu filmde de ön plana çıkıyor. John Goodman imdb puanları açısından da bu film, oyuncunun en iyi işlerinden biri olarak kabul ediliyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/john-goodman-en-iyi-10-filmi#bolum-2",
    "name": "The Big Lebowski - Büyük Lebowski",
    "image": "/images/movies/John_Goodman_the_big_lebowski_-_buyuk_lebowski.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Goodman",
        "Jeff Bridges"
      ],
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Yıl": "1998",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Joel Coen",
      "imdb": "8.1/10",
      "Değerlendirme": "868328",
      "metacritic": "71"
    },
    "paragraf": "Büyük Lebowski, kült film statüsünü kazanmış benzersiz bir yapım. John Goodman’ın canlandırdığı Walter Sobchak karakteri, unutulmaz replikleri ve performansı ile izleyicilerde derin iz bırakıyor. John Goodman oynadığı filmler arasında öne çıkan bir yapım."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/john-goodman-en-iyi-10-filmi#bolum-1",
    "name": "Inside Llewyn Davis - Sen Şarkılarını Söyle",
    "image": "/images/movies/John_Goodman_inside_llewyn_davis_-_sen_sarkilarini_soyle.jpg",
    "ozellikler": {
      "Oyuncular": [
        "John Goodman",
        "Oscar Isaac",
        "Carey Mulligan"
      ],
      "Kategori": [
        "Dram",
        "Müzik"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Ethan Coen",
      "imdb": "7.4/10",
      "Değerlendirme": "164761",
      "metacritic": "93"
    },
    "paragraf": "Inside Llewyn Davis, müzik dolu ve duygu yüklü bir yolculuk hikayesidir. John Goodman’ın sıra dışı performansı ile film, izleyicilere unutulmaz bir deneyim yaşatıyor. John Goodman en iyi filmi olarak kabul edilen bu yapım, oyunculuk kalitesini bir kez daha ispatlıyor."
  }

];

const ana_resim = "/images/ana_gorseller/john-goodman-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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