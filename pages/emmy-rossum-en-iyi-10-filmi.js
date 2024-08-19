
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EmmyRossumEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "emmy-rossum-en-iyi-10-filmi";
const baslik = "Emmy Rossum en iyi 10 filmi";
const metin = "Emmy Rossum, üstün yeteneğiyle Hollywood'un en parlak yıldızlarından biri olmayı başarmış bir isimdir. Kariyerinde birçok başarılı filmle kendini kanıtlamış bu yetenekli oyuncunun en dikkat çekici 10 filmini sizler için bir araya getirdik. Bu listeyle Emmy Rossum filmleri arasında kaybolacak ve favorinizi seçmekte zorlanacaksınız.";
const bitis_metin = "Bu yazımızda Emmy Rossum'un en iyi 10 filmi üzerinde durduk. Her biri oyunculuk kariyerinde önemli adımlar olan bu yapımlar, Emmy Rossum'un yeteneğini ve çeşitliliğini net bir şekilde gözler önüne seriyor. Siz de bu yapımlarla zamanı daha keyifli hale getirebilir ve farklı dünyalara yolculuk edebilirsiniz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["emmy","rossum'un","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:14:24+03:00";
const degistirilmeTarihi = "2024-08-09T17:14:24+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/emmy-rossum-en-iyi-10-filmi#bolum-10",
    "name": "Inside - İçeri",
    "image": "/images/movies/emmy-rossum-inside_-_i̇ceri.jpg",
    "ozellikler": {
      "Yıl": "2009",
      "Süre": "1 sa. 33 dk.",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "Emmy Rossum",
        "Jason Priestley"
      ],
      "Yönetmen": "D.B. Sweeney",
      "imdb": "7.8/10"
    },
    "paragraf": "Inside dizisi. Film diye tıkladığım yazının ilk içeriği dizi diye düşünüyor olabilirsiniz. Evet haklısınız ama  Emmy Rossum'un dramatik yeteneklerini sergilediği bu diziyi eklemek içimizden geldi. Ayrıca dürüst olmak gerekirse 10 tane film bulmakta zorlandık. Dizi, izleyenlere kendileriyle yüzleşmeleri ve duygusal anlamda derinlemesine düşünmeleri için güçlü bir tema sunmaktadır. Emmy Rossum, bu dizideki performansıyla karakterinin inceliklerini ustaca yansıtmış ve izleyicileri etkileyici bir yolculuğa çıkarmıştır. Emmy Rossum imdb açısından da bu filmle olumlu eleştiriler almıştır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/emmy-rossum-en-iyi-10-filmi#bolum-9",
    "name": "Dare - Cesaret",
    "image": "/images/movies/emmy_rossum_dare_-_cesaret.jpg",
    "ozellikler": {
      "Yıl": "2009",
      "Süre": "1 sa. 31 dk.",
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Emmy Rossum",
        "Zach Gilford"
      ],
      "Yönetmen": "Adam Salky",
      "imdb": "5.8/10",
      "Değerlendirme": "4.5000",
      "metascore": "54"
    },
    "paragraf": "Dare'de, Emmy Rossum, hayatı sorgulayan ve cesur kararlar alma sürecine giren genç bir kadını canlandırıyor. Film, gençlik sancılarını, arkadaşlıklar arasındaki karmaşık sınırları ve sevgi arayışını işlerken Emmy Rossum oynadığı filmler arasında farklı bir yere sahiptir. Oyuncunun performansı, izleyiciyi filmin içine çekmekte ve karakterin duygusal derinliklerini izleyicilere etkili bir şekilde ulaştırmaktadır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/emmy-rossum-en-iyi-10-filmi#bolum-8",
    "name": "Beautiful Creatures - Muhteşem Yaratıklar",
    "image": "/images/movies/emmy-rossum-beautiful_creatures_-_muhtesem_yaratiklar.jpg",
    "ozellikler": {
      "Yıl": "2013",
      "Süre": "2 sa. 4 dk.",
      "Kategori": [
        "Fantastik",
        "Dram"
      ],
      "Oyuncular": [
        "Emmy Rossum",
        "Alden Ehrenreich"
      ],
      "Yönetmen": "Richard LaGravenese",
      "imdb": "6.1/10",
      "Değerlendirme": "91000",
      "metascore": "52"
    },
    "paragraf": "Beautiful Creatures, Emmy Rossum'un büyüleyici bir karakteri canlandırdığı fantastik unsurlarla bezeli bir hikayeye sahiptir. Bu filmde Rossum, karanlık ve cazibeli bir büyücü olan Ridley Duchannes'i canlandırarak izleyicilere farklı bir rol sunmaktadır. Emmy Rossum filmleri arasında yer alan bu yapım, izleyicilere fantastik bir dünya kapısını aralayarak büyüleyici görüntüler ve heyecan verici bir hikaye sunuyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/emmy-rossum-en-iyi-10-filmi#bolum-7",
    "name": "Poseidon - Poseidon",
    "image": "/images/movies/emmy-rossum-poseidon_-_poseidon.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "1 sa. 38 dk.",
      "Kategori": [
        "Macera",
        "Aksiyon"
      ],
      "Oyuncular": [
        "Emmy Rossum",
        "Josh Lucas"
      ],
      "Yönetmen": "Wolfgang Petersen",
      "imdb": "5.7/10",
      "Değerlendirme": "111000",
      "metascore": "50"
    },
    "paragraf": "Poseidon, aksiyon ve macera dolu bir film olarak Emmy Rossum'un önemli rollerinden birine yer vermektedir. Filmin konusu, bir yılbaşı gecesi dev dalgaların büyük bir yolcu gemisini devirmesiyle hayatta kalma mücadelesini anlatıyor. Emmy Rossum imdb'de de dikkat çeken performansıyla bu filmde, izleyicilere karakterinin çaresizliğini ve cesaretini etkili bir şekilde hissettiriyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/emmy-rossum-en-iyi-10-filmi#bolum-6",
    "name": "Comet - Kuyrukluyıldız",
    "image": "/images/movies/emmy-rossum-comet_-_kuyrukluyildiz.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "1 sa. 31 dk.",
      "Kategori": [
        "Romantik",
        "Dram"
      ],
      "Oyuncular": [
        "Emmy Rossum",
        "Justin Long"
      ],
      "Yönetmen": "Sam Esmail",
      "imdb": "6.7/10",
      "Değerlendirme": "20000",
      "metascore": "52"
    },
    "paragraf": "Comet, zamansal ve mekansal olarak farklı bir yapıya sahip romantik unsurlarla dolu bir hikaye sunuyor. Emmy Rossum, bu filmdeki duygusal performansıyla izleyicilerin kalbine dokunuyor. Film, Emmy Rossum oynadığı filmler arasında karmaşık yapısıyla dikkat çekiyor. Zamanda yolculuk eden bir aşk hikayesi, izleyenleri etkileyici bir serüvene davet ediyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/emmy-rossum-en-iyi-10-filmi#bolum-5",
    "name": "The Day After Tomorrow - Yarından Sonra",
    "image": "/images/movies/emmy-rossum-the_day_after_tomorrow_-_yarindan_sonra.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Süre": "2 sa. 4 dk.",
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Oyuncular": [
        "Emmy Rossum",
        "Jake Gyllenhaal"
      ],
      "Yönetmen": "Roland Emmerich",
      "imdb": "6.5/10",
      "Değerlendirme": "481000",
      "metascore": "47"
    },
    "paragraf": "The Day After Tomorrow, Emmy Rossum'un doğa olayları ile dünyanın çöküşünü anlatan destansı bir filmde yer aldığı önemli bir yapımdır. Emmy Rossum, filmdeki karakterinin hayatta kalma çabalarını ve duygusal gelgitlerini izleyicilere etkileyici bir şekilde aktarmaktadır. Emmy Rossum imdb üzerinde de olumlu yorumlar alan bu film, onun kariyerindeki en dikkat çekici filmlerden biridir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/emmy-rossum-en-iyi-10-filmi#bolum-4",
    "name": "Before I Disappear - Kaybolmadan Önce",
    "image": "/images/movies/emmy-rossum-before_i_disappear_-_kaybolmadan_once.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "1 sa. 33 dk.",
      "Kategori": [
        "Dram"
      ],
      "Oyuncular": [
        "Emmy Rossum",
        "Shawn Christensen"
      ],
      "Yönetmen": "Shawn Christensen",
      "imdb": "7.2/10",
      "Değerlendirme": "10000",
      "metascore": "47"
    },
    "paragraf": "Before I Disappear, Emmy Rossum'un sıcacık performanslarından biri olarak dikkat çeken bir dram filmidir. Film, bir adamın depresyonla mücadelesini ve yaşamında anlam arayışını anlatırken, Rossum'un performansı seyirciye duygusal yoğunluğu aktarmakta oldukça başarılıdır. Emmy Rossum oynadığı filmler arasında içinde derin mesajlar barındıran bu yapım, izleyenleri hem düşündürüp hem de etkileyebilir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/emmy-rossum-en-iyi-10-filmi#bolum-3",
    "name": "Mystic River - Gizemli Nehir",
    "image": "/images/movies/emmy-rossum-mystic_river_-_gizemli_nehir.jpg",
    "ozellikler": {
      "Yıl": "2003",
      "Süre": "2 sa. 18 dk.",
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Oyuncular": [
        "Sean Penn",
        "Tim Robbins"
      ],
      "Yönetmen": "Clint Eastwood",
      "imdb": "7.9/10",
      "Değerlendirme": "490000",
      "metascore": "84"
    },
    "paragraf": "Mystic River, Oscar ödüllü bir drama ve gerilim filmi olarak Emmy Rossum'un filmografisinde öne çıkan yapılardan biridir. Kendisi, filmde önemli bir role sahip olmasa da genel kadronun bir parçası olarak kariyerine değer katan bir projede yer almıştır. Güçlü oyunculuklar ve titizlikle işlenmiş hikaye sayesinde, film Emmy Rossum imdb sayfasında özel bir yere sahiptir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/emmy-rossum-en-iyi-10-filmi#bolum-2",
    "name": "Songcatcher - Şarkı Avcısı",
    "image": "/images/movies/emmy-rossum-songcatcher_-_sarki_avcisi.jpg",
    "ozellikler": {
      "Yıl": "2000",
      "Süre": "1 sa. 49 dk.",
      "Kategori": [
        "Dram",
        "Müzik"
      ],
      "Oyuncular": [
        "Janet McTeer",
        "Aidan Quinn"
      ],
      "Yönetmen": "Maggie Greenwald",
      "imdb": "7.3/10",
      "Değerlendirme": "3.7000",
      "metascore": "63"
    },
    "paragraf": "Songcatcher, Emmy Rossum'un kariyerindeki erken dönem yapımlarından biridir. Film, geçmiş dönemlerin müziğini ve kültürünü keşfeden bir hikaye üzerine kuruludur. Emmy Rossum'un rolü, film boyunca sergilediği duygusal derinlikle unutulmaz bir iz bırakmaktadır. Emmy Rossum filmleri arasında sanatsal dokusuyla özel bir yere sahip olan bu film, izleyicilere hem duygusal hem de kültürel bir yolculuk sunmaktadır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/emmy-rossum-en-iyi-10-filmi#bolum-1",
    "name": "Phantom of the Opera - Operadaki Hayalet",
    "image": "/images/movies/emmy-rossum-phantom_of_the_opera_-_operadaki_hayalet.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Süre": "2 sa. 23 dk.",
      "Kategori": [
        "Müzikal",
        "Dram"
      ],
      "Oyuncular": [
        "Gerard Butler",
        "Patrick Wilson"
      ],
      "Yönetmen": "Joel Schumacher",
      "imdb": "7.2/10",
      "Değerlendirme": "132000",
      "metascore": "40"
    },
    "paragraf": "Phantom of the Opera, Emmy Rossum'un en ikonik ve en çok öne çıkan performanslarından birini sunduğu filmdir. Rossum, bu filmdeki olağanüstü vokal yeteneği ve etkileyici performansıyla izleyenleri büyülemektedir. Emmy Rossum imdb açısından önemli bir yere sahip olan bu yapım, onun kariyerinde mihenk taşı olmuştur. Hem sanatsal yapısı hem de güçlü anlatımıyla dikkat çeken bu film, Emmy Rossum oynadığı filmler arasında zirveyi hak eden bir başyapıttır."
  }

];

const ana_resim = "/images/ana_gorseller/emmy-rossum-en-iyi-10-filmi-kapak.jpg"; //! SEN DOLDUR
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