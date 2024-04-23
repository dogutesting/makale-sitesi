
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function AnaDeArmasEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "ana-de-armas-en-iyi-10-filmi";
const baslik = "Ana de Armas'ın en iyi 10 filmi";
const metin = "Küba kökenli başarılı oyuncu Ana de Armas, kısa sürede Hollywood'da adından söz ettirmeyi başardı. Performansıyla göz dolduran Ana de Armas'ın kariyerindeki dikkat çekici filmleri Ana de Armas filmleri listesiyle sunuyoruz. Bu yazımızda, Ana de Armas en iyi filmleri arasından seçtiğimiz en çarpıcı 10 yapımı ele alacağız.";
const bitis_metin = "Ana de Armas'ın sinema yolculuğundaki bu 10 filmi, genç oyuncunun özellikle drama ve aksiyon türünde nasıl bir çeşitlilik gösterebileceğini sergiliyor. Umuyoruz ki Ana de Armas'ın bu etkileyici filmleri listemizi keyifle okuduğunuzu düşünüyoruz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["ana","de","armas","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-22T17:09:58+03:00";
const degistirilmeTarihi = "2024-04-22T17:09:58+03:00";
const addDate = "22.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": `https://enonlar.com/${url}#bolum-10`,
    "name": "War Dogs",
    "image": "/images/movies/ana_de_armas_war_dogs.jpg",
    "ozellikler": {
      "Yönetmen": "Todd Phillips",
      "Oyuncular": [
        "Ana de Armas",
        "Miles Teller",
        "Jonah Hill"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Süre": "1 sa. 54 dk.",
      "Yıl": "2016",
      "imdb": "7.1/10",
      "Değerlendirme": "254000"
    },
    "paragraf": "Ana de Armas filmleri içinde, oldukça etkileyici bir performans sergilediği 2016 yapımı ‘War Dogs’ listemizin 10. sırasında yer alıyor. Bu filmin genç silah tüccarlarının gerçek hikayesine dayanması ve Ana de Armas'ın rolleriyle yenilikçi yüzünü ortaya koyması, filmin ana de armas en iyi filmi olmasına neden olabilir."
  },
  {
    "num": "9",
    "url": `https://enonlar.com/${url}#bolum-9`,
    "name": "Hands of Stone",
    "image": "/images/movies/ana_de_armas_hands_of_stone.jpg",
    "ozellikler": {
      "Yönetmen": "Jonathan Jakubowicz",
      "Oyuncular": [
        "Ana de Armas",
        "Edgar Ramírez",
        "Robert De Niro"
      ],
      "Kategori": [
        "Biografik",
        "Spor"
      ],
      "Süre": "1 sa. 51 dk.",
      "Yıl": "2016",
      "imdb": "6.6/10",
      "Değerlendirme": "18000"
    },
    "paragraf": "2016 yılında çıkan ‘Hands of Stone’ filmi, Ana de Armas'ın kariyerinde önemli bir yer tutmaktadır. Bu biyografik spor dramada gösterdiği üstün performansıyla, Ana de Armas'ın yeteneğinin güzel bir örneğini sunarak Ana de Armas en iyi filmleri listemizde 9. sıraya oturdu."
  },
  {
    "num": "8",
    "url": `https://enonlar.com/${url}#bolum-8`,
    "name": "Overdrive",
    "image": "/images/movies/ana_de_armas_overdrive.jpg",
    "ozellikler": {
      "Yönetmen": "Antonio Negret",
      "Oyuncular": [
        "Ana de Armas",
        "Scott Eastwood"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "1 sa. 36 dk.",
      "Yıl": "2017",
      "imdb": "5.4/10",
      "Değerlendirme": "16000"
    },
    "paragraf": "‘Overdrive’ filmi, heyecanlı sahneleri ve Ana de Armas'ın performansıyla biliniyor. Aksiyon severler için vazgeçilmez bir film olarak, Ana de Armas'ın filmleri en iyi listemizde sekizinci sırada."
  },
  {
    "num": "7",
    "url": `https://enonlar.com/${url}#bolum-7`,
    "name": "The Informer",
    "image": "/images/movies/ana_de_armas_the_informer.jpg",
    "ozellikler": {
      "Yönetmen": "Andrea Di Stefano",
      "Oyuncular": [
        "Ana de Armas",
        "Joel Kinnaman",
        "Rosamund Pike"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "1 sa. 53 dk.",
      "Yıl": "2019",
      "imdb": "6.6/10",
      "Değerlendirme": "42000"
    },
    "paragraf": "2019 yapımı ‘The Informer’, listemizde yedinci sırayı aldı. Ana de Armas, bu suç drama filmindeki rolüyle büyüleyici bir performans sergileyerek, filmi unutulmaz kılan detayların başında gelmektedir."
  },
  {
    "num": "6",
    "url": `https://enonlar.com/${url}#bolum-6`,
    "name": "Yesterday",
    "image": "/images/movies/ana_de_armas_yesterday.png",
    "ozellikler": {
      "Yönetmen": "Danny Boyle",
      "Oyuncular": [
        "Ana de Armas",
        "Himesh Patel",
        "Lily James"
      ],
      "Kategori": [
        "Müzik",
        "Komedi"
      ],
      "Süre": "1 sa. 56 dk.",
      "Yıl": "2019",
      "imdb": "6.8/10",
      "Değerlendirme": "168000"
    },
    "paragraf": "2019'da vizyona giren ve Beatles müziğinin ön planda olduğu ‘Yesterday’ filmi, Ana de Armas'ın canlandırdığı karakter ile film severlere neşeli dakikalar sunuyor. Ana de Armas kaç yılında doğdu sorusunun cevabı 30 Nisan 1988. Oyunculuğu ile zamanı aşan bir yeteneğe sahip olduğunu bu filmde bir kez daha kanıtlıyor."
  },
  {
    "num": "5",
    "url": `https://enonlar.com/${url}#bolum-5`,
    "name": "Sergio",
    "image": "/images/movies/ana_de_armas_sergio.jpg",
    "ozellikler": {
      "Yönetmen": "Greg Barker",
      "Oyuncular": [
        "Ana de Armas",
        "Wagner Moura"
      ],
      "Kategori": [
        "Biografik",
        "Drama"
      ],
      "Süre": "1 sa. 58 dk.",
      "Yıl": "2020",
      "imdb": "6.2/10",
      "Değerlendirme": "11000"
    },
    "paragraf": "‘Sergio’ filmi, 2020 yılında Ana de Armas'ın etkileyici oyunculuğunu sergilediği bir diğer başyapıttır. Biyografik dram türündeki bu yapımda, Armas'ın duygusal derinliği, filmin Ana de Armas en iyi filmi olmasını sağlayan en önemli unsurlardan biri haline gelmiştir."
  },
  {
    "num": "4",
    "url": `https://enonlar.com/${url}#bolum-4`,
    "name": "No Time To Die",
    "image": "/images/movies/ana_de_armas_no_time_to_die.jpg",
    "ozellikler": {
      "Yönetmen": "Cary Joji Fukunaga",
      "Oyuncular": [
        "Ana de Armas",
        "Daniel Craig",
        "Rami Malek"
      ],
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Süre": "2 sa. 43 dk.",
      "Yıl": "2021",
      "imdb": "7.3/10",
      "Değerlendirme": "444000"
    },
    "paragraf": "James Bond serisinin 25. filmi olan ‘No Time To Die’da, Ana de Armas'ın aksiyon dolu sahneleri ve çarpıcı performansı, onu film dünyasında ayrı bir yere taşımıştır. Armas, bu filmle Ana de Armas filmleri en iyi listesinde haklı bir yer edinmiştir."
  },
  {
    "num": "3",
    "url": `https://enonlar.com/${url}#bolum-3`,
    "name": "Knives Out",
    "image": "/images/movies/ana_de_armas_knives_out.jpg",
    "ozellikler": {
      "Yönetmen": "Rian Johnson",
      "Oyuncular": [
        "Ana de Armas",
        "Daniel Craig",
        "Chris Evans"
      ],
      "Kategori": [
        "Gizem",
        "Drama"
      ],
      "Süre": "2 sa. 10 dk.",
      "Yıl": "2019",
      "imdb": "7.9/10",
      "Değerlendirme": "773000"
    },
    "paragraf": "‘Knives Out’, Ana de Armas'ın yıldızının parladığı filmlerden biri. Gizem ve entrika dolu bu yapımda sergilediği oyunculuk becerisiyle, Ana de Armas'ı sinema dünyasında önemli bir isim yapmıştır."
  },
  {
    "num": "2",
    "url": `https://enonlar.com/${url}#bolum-2`,
    "name": "The Night Clerk",
    "image": "/images/movies/ana_de_armas_the_night_clerk.jpg",
    "ozellikler": {
      "Yönetmen": "Michael Cristofer",
      "Oyuncular": [
        "Ana de Armas",
        "Tye Sheridan",
        "Helen Hunt"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "1 sa. 30 dk.",
      "Yıl": "2020",
      "imdb": "5.5/10",
      "Değerlendirme": "19000"
    },
    "paragraf": "2020 yapımı ‘The Night Clerk’ filmi, Ana de Armas'ın kariyerinde öne çıkan dejavu dolu bir drama. Bu yapımdaki sıra dışı performansı, onu Ana de Armas en iyi filmi olarak listemizin ikinci sırasına taşıdı."
  },
  {
    "num": "1",
    "url": `https://enonlar.com/${url}#bolum-1`,
    "name": "Blade Runner 2049",
    "image": "/images/movies/ana_de_armas_blade_runner_2049.jpg",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Ana de Armas",
        "Ryan Gosling",
        "Harrison Ford"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Drama"
      ],
      "Süre": "2 sa. 44 dk.",
      "Yıl": "2017",
      "imdb": "8.0/10",
      "Değerlendirme": "664000"
    },
    "paragraf": "‘Blade Runner 2049’, Ana de Armas'ın filmografisindeki en önemli filmlerden biridir. Bu bilim kurgu dramında sergilediği üstün oyunculuk performansı ile, Ana de Armas filmleri en iyi listesinde birinci sıraya yerleşmiştir."
  },
];

const ana_resim = "/images/ana_gorseller/ana_de_armas_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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