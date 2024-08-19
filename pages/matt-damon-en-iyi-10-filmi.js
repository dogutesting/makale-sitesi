
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function MattDamonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "matt-damon-en-iyi-10-filmi";
const baslik = "Matt Damon en iyi 10 filmi";
const metin = "Matt Damon, Hollywood'un en sevilen ve çok yönlü aktörlerinden biridir. Onun film repertuarı her zaman eleştirmenlerce beğenilmiş ve sinemaseverler tarafından takdir edilmiştir. Bu makalede, Matt Damon'ın filmografisinden seçtiğimiz en iyi 10 eseri ele alacağız.";
const bitis_metin = "Bu yazımızda, Matt Damon'un en iyi 10 filmini inceledik. Her bir film, onun benzersiz yeteneklerini ve oyunculuk becerisini göstermekte olup sinema dünyasında unutulmaz işler bırakmıştır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["matt","damon","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:42:46+03:00";
const degistirilmeTarihi = "2024-05-25T18:42:46+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/matt-damon-en-iyi-10-filmi#bolum-10",
    "name": "We Bought a Zoo - Hayvanat Bahçesi",
    "image": "/images/movies/matt_damon_we_bought_a_zoo_-_hayvanat_bahcesi.jpg",
    "ozellikler": {
      "Yönetmen": "Cameron Crowe",
      "Oyuncular": [
        "Matt Damon",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Drama",
        "Komedi"
      ],
      "Süre": "2 sa. 4 dk.",
      "Yıl": "2011",
      "imdb": "7.0/10",
      "Değerlendirme": "152000",
      "metascore": "58"
    },
    "paragraf": "Matt Damon filmleri arasında 'We Bought a Zoo' – 'Hayvanat Bahçesi', hayatın getirdiği zorluklarla başa çıkma temasıyla dikkat çeker. Matt Damon'un performansı, filmin duygusal derinliğini artırır ve izleyiciyi hikayenin içine çeker."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/matt-damon-en-iyi-10-filmi#bolum-9",
    "name": "The Adjustment Bureau - Kader Ajanları",
    "image": "/images/movies/matt_damon_the_adjustment_bureau_-_kader_ajanlari.jpg",
    "ozellikler": {
      "Yönetmen": "George Nolfi",
      "Oyuncular": [
        "Matt Damon",
        "Emily Blunt"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Romantik"
      ],
      "Süre": "1 sa. 46 dk.",
      "Yıl": "2011",
      "imdb": "7.0/10",
      "Değerlendirme": "271000",
      "metascore": "60"
    },
    "paragraf": "Bu listedeki Matt Damon en iyi filmleri arasında, 'The Adjustment Bureau' - 'Kader Ajanları' öne çıkar. Film, bilim kurgu ve romantizmi harmanlayarak izleyicilere Matt Damon izlenmesi gereken filmleri listesine eklenmesi gereken bir eser sunuyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/matt-damon-en-iyi-10-filmi#bolum-8",
    "name": "Contagion - Salgın",
    "image": "/images/movies/matt_damon_contagion_-_salgin.jpg",
    "ozellikler": {
      "Yönetmen": "Steven Soderbergh",
      "Oyuncular": [
        "Matt Damon",
        "Kate Winslet",
        "Jude Law"
      ],
      "Kategori": [
        "Drama",
        "Gerilim"
      ],
      "Süre": "1 sa. 46 dk.",
      "Yıl": "2011",
      "imdb": "6.8/10",
      "Değerlendirme": "317000",
      "metascore": "70"
    },
    "paragraf": "Matt Damon filmleri içerisinde 'Contagion' - 'Salgın', gerçekçi bir pandemi tasviri sunarak, günümüz dünyasıyla paralellikler gösterir. Film, Damon'un olağanüstü oyunculuğu ile etkileyici bir deneyim sunar."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/matt-damon-en-iyi-10-filmi#bolum-7",
    "name": "Good Will Hunting - Can Dostum",
    "image": "/images/movies/matt_damon_good_will_hunting_-_can_dostum.jpg",
    "ozellikler": {
      "Yönetmen": "Gus Van Sant",
      "Oyuncular": [
        "Matt Damon",
        "Robin Williams",
        "Ben Affleck"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 sa. 6 dk.",
      "Yıl": "1997",
      "imdb": "8.3/10",
      "Değerlendirme": "1100000",
      "metascore": "71"
    },
    "paragraf": "'Good Will Hunting' - 'Can Dostum', Matt Damon en iyi filmi olarak geniş çapta kabul görür. Film, bir matematik dehasının dramatik hikayesini konu alır ve izleyicilere kalıcı bir izlenim bırakır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/matt-damon-en-iyi-10-filmi#bolum-6",
    "name": "The Martian - Marslı",
    "image": "/images/movies/matt_damon_the_martian_-_marsli.jpg",
    "ozellikler": {
      "Yönetmen": "Ridley Scott",
      "Oyuncular": [
        "Matt Damon"
      ],
      "Kategori": [
        "Macera",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 24 dk.",
      "Yıl": "2015",
      "imdb": "8.0/10",
      "Değerlendirme": "928000",
      "metascore": "80"
    },
    "paragraf": "Matt Damon'ın başrolünde olduğu 'The Martian' - 'Marslı', onun en etkileyici performanslarından birini sergilediği filmler arasındadır. Bu film, Damon'un yeteneklerini sergilemesi için mükemmel bir platform sunar ve izleyicileri Mars'a unutulmaz bir yolculuğa çıkarır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/matt-damon-en-iyi-10-filmi#bolum-5",
    "name": "Saving Private Ryan - Er Ryan'ı Kurtarmak",
    "image": "/images/movies/matt_damon_saving_private_ryan_-_er_ryan_i_kurtarmak.jpg",
    "ozellikler": {
      "Yönetmen": "Steven Spielberg",
      "Oyuncular": [
        "Tom Hanks",
        "Matt Damon"
      ],
      "Kategori": [
        "Savaş"
      ],
      "Süre": "2 sa. 49 dk.",
      "Yıl": "1998",
      "imdb": "8.6/10",
      "Değerlendirme": "1500000",
      "metascore": "91"
    },
    "paragraf": "'Saving Private Ryan' - 'Er Ryan'ı Kurtarmak' filmi, Matt Damon filmlerinin zirvesinde yer alarak, savaşın acımasızlığını ve insanlık hallerini gözler önüne serer. Film, sürükleyici kurgusu ve olağanüstü oyunculukları ile sinema tarihindeki yerini almıştır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/matt-damon-en-iyi-10-filmi#bolum-4",
    "name": "True Grit - İz Peşinde",
    "image": "/images/movies/matt_damon_true_grit_-_iz_pesinde.jpg",
    "ozellikler": {
      "Yönetmen": "Coen Brothers",
      "Oyuncular": [
        "Jeff Bridges",
        "Matt Damon",
        "Hailee Steinfeld"
      ],
      "Kategori": [
        "Drama",
        "Macera"
      ],
      "Süre": "1 sa. 50 dk.",
      "Yıl": "2010",
      "imdb": "7.6/10",
      "Değerlendirme": "358000",
      "metascore": "80"
    },
    "paragraf": "Matt Damon, 'True Grit' - 'İz Peşinde' filminde, karakterin karmaşık duygularını ustalıkla canlandırarak, izleyicilere unutulmaz bir performans sunar. Bu film, onun oyunculuk kariyerinde önemli bir kilometre taşı olarak görülmektedir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/matt-damon-en-iyi-10-filmi#bolum-3",
    "name": "Ford v Ferrari - Asfaltın Kralları",
    "image": "/images/movies/matt_damon_ford_v_ferrari_-_asfaltin_krallari.jpg",
    "ozellikler": {
      "Yönetmen": "James Mangold",
      "Oyuncular": [
        "Matt Damon",
        "Christian Bale"
      ],
      "Kategori": [
        "Drama",
        "Spor"
      ],
      "Süre": "2 sa. 32 dk.",
      "Yıl": "2019",
      "imdb": "8.1/10",
      "Değerlendirme": "478000",
      "metascore": "81"
    },
    "paragraf": "'Ford v Ferrari' - 'Asfaltın Kralları' filmi, otomobil yarışlarına olan tutkusuyla bilinen Matt Damon'un harika bir performans sergilediği bir başka eserdir. Bu film, otomobil yarışı temalı filmler arasında öne çıkan bir yapıttır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/matt-damon-en-iyi-10-filmi#bolum-2",
    "name": "The Departed - Köstebek",
    "image": "/images/movies/matt_damon_the_departed_-_kostebek.jpg",
    "ozellikler": {
      "Yönetmen": "Martin Scorsese",
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Matt Damon",
        "Jack Nicholson"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "2 sa. 31 dk.",
      "Yıl": "2006",
      "imdb": "8.5/10",
      "Değerlendirme": "1400000",
      "metascore": "85"
    },
    "paragraf": "'The Departed' - 'Köstebek', suç ve dram türlerindeki en güçlü filmlerden biridir ve Matt Damon'ın aktörlüğünü zirveye taşıyan rollerden biridir. Film, hem eleştirmenlerden hem de izleyicilerden tam not almıştır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/matt-damon-en-iyi-10-filmi#bolum-1",
    "name": "Oppenheimer",
    "image": "/images/movies/matt_damon_oppenheimer.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Oyuncular": [
        "Matt Damon",
        "Cillian Murphy",
        "Emily Blunt",
        "Robert Downey Jr."
      ],
      "Kategori": [
        "Biyografi",
        "Drama",
        "Tarih"
      ],
      "Süre": "3 sa.",
      "Yıl": "2023",
      "imdb": "8.3/10",
      "Değerlendirme": "743000",
      "metascore": "90"
    },
    "paragraf": "Listemizin zirvesinde, Matt Damon'ın kariyerindeki önemli filmlerden biri olan 'Oppenheimer' yer alır. Film, atom bombasının yaratılış sürecini ve Oppenheimer'ın hayatını dramatik bir şekilde anlatıyor."
  }

];

const ana_resim = "/images/ana_gorseller/matt_damon_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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