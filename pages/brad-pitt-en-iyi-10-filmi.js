
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function BradPittEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "brad-pitt-en-iyi-10-filmi";
const baslik = "Brad Pitt'in En İyi 10 Filmi";
const metin = "Brad Pitt'in performansıyla bizi adeta büyüleyen, Brad pitt filmleri listesi, hafızalardan silinmeyecek olayları ve karakterleri ile ön planda olan brad pitt en iyi filmleri arasından seçkiler yaptık. 1963 yılında doğan bu ünlü aktör yaşı büyük olsa da, Brad Pitt halen genç gözüküyor diye düşündürüyor. İşte, Brad Pitt'in kariyerinde dönüm noktası oluşturan ve Brad Pitt filmleri en iyi kategorisine giren yapımlar.";
const bitis_metin = "Brad Pitt'in filmografisinde bu büyük yapımlar, onun çeşitlilik ve derinliğini gösteriyor. Bu yazımızda, brad pitt filmleri arasından sizler için en iyi seçkileri sunduk. Her film, Pitt'in oyunculuk becerisini farklı şekillerde ortaya koyuyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["brad","pitt","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-23T01:38:07+03:00";
const degistirilmeTarihi = "2024-04-23T01:38:07+03:00";
const addDate = "23.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": `https://enonlar.com/${url}#bolum-10`,
    "name": "Troya",
    "image": "/images/movies/brad_pitt_troya.jpg",
    "ozellikler": {
      "Yönetmen": "Wolfgang Petersen",
      "Oyuncular": [
        "Brad Pitt",
        "Eric Bana",
        "Orlando Bloom"
      ],
      "Kategori": [
        "Epik",
        "Savaş"
      ],
      "Süre": "2 sa. 43 dk.",
      "Yıl": "2004",
      "imdb": "7.3/10",
      "metascore": "56",
      "Değerlendirme": "570000"
    },
    "paragraf": "Brad Pitt'in kariyerine damgasını vuran filmler arasında yer alan Troya, destansı bir anlatıma sahip. Hikaye, antik Yunan mitolojisi ve tarihiyle dokunmuş, baş döndüren savaş sahneleriyle unutulmaz. Brad, bu filmde muazzam bir performans sergilerken brad pitt en iyi filmleri listemizde 10. sıraya yerleşiyor. 2004 yılında izleyici ile buluşan bu yapıt, brad pitt filmleri en iyi kategorisinde önemli bir yer tutar. Brad Pitt, Troya filminde Akhilleus olarak büyük bir aksiyon sergiliyor. Epik savaş sahneleri ve Güçlü karakter uyumu ile Brad Pitt’in en kuvvetli performanslarından biri."
  },
  {
    "num": "9",
    "url": `https://enonlar.com/${url}#bolum-9`,
    "name": "Mr. & Mrs. Smith - Bay ve Bayan Smith",
    "image": "/images/movies/brad_pitt_mr_mrs_smith.jpg",
    "ozellikler": {
      "Yönetmen": "Doug Liman",
      "Oyuncular": [
        "Brad Pitt",
        "Angelina Jolie"
      ],
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Süre": "2 sa.",
      "Yıl": "2005",
      "imdb": "6.5/10",
      "metascore": "55",
      "Değerlendirme": "541000"
    },
    "paragraf": "Brad Pitt ve Angelina Jolie'nin kimyalarının zirveye ulaştığı anlar. İkilinin hem gerçek hem de perde arkası kimyalarının patladığı Mr. & Mrs. Smith, Brad pitt filmleri arasında ayrı bir yere sahiptir. Yüksek tempo, aksiyon dolu sahneler ve sürekli bir çekişme içerisinde geçen bu film, Brad Pitt'in en iyi performanslarından birini sunar. 2005 yapımı film, aksiyon ve romantizmi harmanlayarak Brad pitt en iyi filmi olmaya aday. Aksiyon ve komedi birleşimi bir film arıyorsanız listenize bu filmi ekleyebilirsiniz."
  },
  {
    "num": "8",
    "url": `https://enonlar.com/${url}#bolum-8`,
    "name": "Hayat Ağacı",
    "image": "/images/movies/brad_pitt_hayat_agaci.jpg",
    "ozellikler": {
      "Yönetmen": "Terrence Malick",
      "Oyuncular": [
        "Brad Pitt",
        "Sean Penn"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 sa. 9 dk.",
      "Yıl": "2011",
      "imdb": "6.8/10",
      "metascore": "85",
      "Değerlendirme": "184000"
    },
    "paragraf": "Brad Pitt'in en derinlemesine ve felsefi yapımlarından biri olan Aşk ve Ölüm, izleyiciye insan hayatının anlamı üzerine düşündürür. Terrence Malick'in yönetmen koltuğunda oturduğu bu film, Pitt'in yeteneklerini farklı bir platformda sergilediği bir yapıt olarak karşımıza çıkıyor. Brad Pitt filmleri en iyi listemizde 8. sıradaki yerini alıyor. Brad Pitt, bir baba rolünde olağanüstü bir derinlik sunuyor. Filmin görsel ve duygusal derinliği, izleyenleri etkisi altına alıyor."
  },
  {
    "num": "7",
    "url": `https://enonlar.com/${url}#bolum-7`,
    "name": "Savaş Makinesi",
    "image": "/images/movies/brad_pitt_savas_makinesi.jpg",
    "ozellikler": {
      "Yönetmen": "David Michôd",
      "Oyuncular": [
        "Brad Pitt",
        "Tilda Swinton"
      ],
      "Kategori": [
        "Savaş",
        "Drama"
      ],
      "Süre": "2 sa. 2 dk.",
      "Yıl": "2017",
      "imdb": "6.0/10",
      "metascore": "56",
      "Değerlendirme": "50000"
    },
    "paragraf": "Bu filmde Brad Pitt, bir NATO generali olarak karşımıza çıkıyor. Gerçek bir hikaye üzerinden ele alınan bu filmde Pitt'in mükemmel oyunculuğunu göreceksiniz."
  },
  {
    "num": "6",
    "url": `https://enonlar.com/${url}#bolum-6`,
    "name": "Kıyamet Çağrısı: World War Z",
    "image": "/images/movies/brad_pitt_world_war_z.jpg",
    "ozellikler": {
      "Yönetmen": "Marc Forster",
      "Oyuncular": [
        "Brad Pitt",
        "Mireille Enos"
      ],
      "Kategori": [
        "Kıyamet Sonrası",
        "Aksiyon"
      ],
      "Süre": "1 sa. 56 dk.",
      "Yıl": "2013",
      "imdb": "7.0/10",
      "metascore": "63",
      "Değerlendirme": "719000"
    },
    "paragraf": "Zombi kıyameti konusuyla dikkat çeken bu yapımda Brad Pitt, ailesini korumak için dünyanın dört bir yanını dolaşıyor. Sürükleyici ve heyecan dolu."
  },
  {
    "num": "5",
    "url": `https://enonlar.com/${url}#bolum-5`,
    "name": "Yıldızlara Doğru - Ad Astra",
    "image": "/images/movies/brad_pitt_yildizlara_dogru.jpg",
    "ozellikler": {
      "Yönetmen": "James Gray",
      "Oyuncular": [
        "Brad Pitt",
        "Tommy Lee Jones"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Dram"
      ],
      "Süre": "2 sa. 3 dk.",
      "Yıl": "2019",
      "imdb": "6.6/10",
      "metascore": "80",
      "Değerlendirme": "260000"
    },
    "paragraf": "Brad Pitt'in bu muazzam bilim kurgu yapımında başrolü paylaştığı Tommy Lee Jones ile birlikte uzay macerasına çıkıyor."
  },
  {
    "num": "4",
    "url": `https://enonlar.com/${url}#bolum-4`,
    "name": "12 Monkeys",
    "image": "/images/movies/brad_pitt_12_monkeys.jpg",
    "ozellikler": {
      "Yönetmen": "Terry Gilliam",
      "Oyuncular": [
        "Brad Pitt",
        "Bruce Willis"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Gizem"
      ],
      "Süre": "2 sa. 9 dk.",
      "Yıl": "1995",
      "imdb": "8.0/10",
      "metascore": "74",
      "Değerlendirme": "646000"
    },
    "paragraf": "Brad Pitt'in olağanüstü performansı Oscar adaylığı kazandırdı. Zaman yolculuğu ve akıl oyunları ile dolu bu filmdeki etkileyici performansını kaçırmayın."
  },
  {
    "num": "3",
    "url": `https://enonlar.com/${url}#bolum-3`,
    "name": "Benjamin Button'ın Tuhaf Hikayesi",
    "image": "/images/movies/brad_pitt_benjamin_button.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Brad Pitt",
        "Cate Blanchett"
      ],
      "Kategori": [
        "Dram",
        "Fantastik"
      ],
      "Süre": "2 sa. 46 dk.",
      "Yıl": "2008",
      "imdb": "7.8/10",
      "metascore": "70",
      "Değerlendirme": "695000"
    },
    "paragraf": "Bu filmde Brad Pitt, yaşlanma sürecinin tersine işlediği Benjamin Button karakteriyle olağanüstü bir performans sergiliyor."
  },
  {
    "num": "2",
    "url": `https://enonlar.com/${url}#bolum-2`,
    "name": "Yedi",
    "image": "/images/movies/brad_pitt_yedi.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Brad Pitt",
        "Morgan Freeman"
      ],
      "Kategori": [
        "Gizem",
        "Gerilim"
      ],
      "Süre": "2 sa. 7 dk.",
      "Yıl": "1995",
      "imdb": "8.6/10",
      "metascore": "65",
      "Değerlendirme": "1800000"
    },
    "paragraf": "Gizem ve gerilim dolu Yedi filmi, Brad Pitt'in kariyerinin zirvelerinden. 7 günahı konu alan bu film, onun oyunculuk yeteneğinin sınırlarını zorlayan bir başyapıt."
  },
  {
    "num": "1",
    "url": `https://enonlar.com/${url}#bolum-1`,
    "name": "Fight Club",
    "image": "/images/movies/brad_pitt_fight_club.jpg",
    "ozellikler": {
      "Yönetmen": "David Fincher",
      "Oyuncular": [
        "Brad Pitt",
        "Edward Norton"
      ],
      "Kategori": [
        "Drama",
        "Aksiyon"
      ],
      "Süre": "2 sa. 19 dk.",
      "Yıl": "1999",
      "imdb": "8.8/10",
      "metascore": "79",
      "Değerlendirme": "2300000"
    },
    "paragraf": "Bu kült yapıtta, Brad Pitt’in canlandırdığı Tyler Durden, sinema tarihinde ikonik karakterler arasında yer alıyor. Brad Pitt en iyi filmi tartışmaya yer bırakmayacak şekilde erkekliğin krizini konu alan bu filmdir."
  },
  
];

const ana_resim = "/images/ana_gorseller/brad_pitt_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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