
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function GelmisGecmisEnIyi10FutbolcuMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "gelmis-gemis-en-iyi-10-futbolcu";
const baslik = "Gelmiş geçmiş en iyi 10 futbolcu";
const metin = "Futbol tarihinde adını altın harflerle yazdırmış efsaneleri sıraladığımız bu listede, gelmiş geçmiş en iyi futbolcuları ele alıyoruz. Bu listemiz dünyanın en iyi 10 futbolcularını kapsamakta olup, futbolun büyüsünü sahaya yansıtmış bu yetenekleri gözler önüne seriyor.";
const bitis_metin = "Bu yazımızda, tüm zamanların en büyük futbol yıldızlarını sıraladık. Umarız bu efsane futbolcular hakkında daha fazla bilgi edinmişsinizdir ve onların oyunlarıyla ilham almışsınızdır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["gelmis","gecmis","en","iyi","10","futbolcu"]; //! BAK
const kategori = "futbol"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T17:34:25+03:00";
const degistirilmeTarihi = "2024-05-25T17:34:25+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/gelmis-gemis-en-iyi-10-futbolcu#bolum-10",
    "name": "Franz Beckenbauer",
    "image": "/images/futbol/franz_beckenbauer.jpg",
    "ozellikler": {
      "Doğum Tarihi": "11 Eylül 1945",
      "Boyu": "181 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Gelmiş geçmiş en iyi futbolcusu listemizin onuncu sırasında Franz Beckenbauer yer alıyor. Kendisi, sahadaki liderliği ve oyun anlayışıyla futbol tarihinde derin izler bırakmış bir efsane olarak kabul edilir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/gelmis-gemis-en-iyi-10-futbolcu#bolum-9",
    "name": "Lionel Messi",
    "image": "/images/futbol/lionel_messi.jpg",
    "ozellikler": {
      "Doğum Tarihi": "24 Haziran 1987",
      "Boyu": "170 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Lionel Messi, gelmiş geçmiş en iyi futbolcu sıralamasında dokuzuncu sırada. Sahadaki çevikliği ve gol yeteneği ile en efsane futbolcular arasında özel bir yere sahiptir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/gelmis-gemis-en-iyi-10-futbolcu#bolum-8",
    "name": "Pelé",
    "image": "/images/futbol/pele.png",
    "ozellikler": {
      "Doğum Tarihi": "23 Ekim 1940",
      "Boyu": "173 cm",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Pelé, futbol dünyasının en iyi efsane futbolcuları listesinde sekizinci sırada. Üç Dünya Kupası kazanmış olması ve attığı efsanevi gollerle, tüm zamanların en büyük futbol yıldızlarından biri olarak anılır."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/gelmis-gemis-en-iyi-10-futbolcu#bolum-7",
    "name": "Diego Maradona",
    "image": "/images/futbol/diego_maradona.png",
    "ozellikler": {
      "Doğum Tarihi": "30 Ekim 1960",
      "Boyu": "165 cm",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Diego Maradona, gelmiş geçmiş en iyi futbolcular listemizde yedinci sırada. Eşsiz yetenekleri ve unutulmaz 'Tanrının eli' golü ile futbol tarihindeki yerini sağlamlaştırmıştır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/gelmis-gemis-en-iyi-10-futbolcu#bolum-6",
    "name": "Cristiano Ronaldo",
    "image": "/images/futbol/cristiano_ronaldo.jpg",
    "ozellikler": {
      "Doğum Tarihi": "5 Şubat 1985",
      "Boyu": "187 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Cristiano Ronaldo, dünyanın en iyi 10 futbolcuları arasında altıncı sırayı alıyor. Olağanüstü gol yeteneği ve atletizmi ile günümüz futboluna damgasını vurmuş bir isim."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/gelmis-gemis-en-iyi-10-futbolcu#bolum-5",
    "name": "Johan Cruyff",
    "image": "/images/futbol/johan_cruyff.png",
    "ozellikler": {
      "Doğum Tarihi": "25 Nisan 1947",
      "Boyu": "178 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Johan Cruyff, gelmiş geçmiş en iyi futbolcular arasında beşinci sıradaki isim. Sahadaki zekası ve oyun kuruculuk yeteneği ile futbol dünyasına yeni bir bakış açısı getirmiştir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/gelmis-gemis-en-iyi-10-futbolcu#bolum-4",
    "name": "Michel Platini",
    "image": "/images/futbol/michel_platini.jpg",
    "ozellikler": {
      "Doğum Tarihi": "21 Haziran 1955",
      "Boyu": "178 cm",
      "Saç Rengi": "Karamel"
    },
    "paragraf": "Michel Platini, dördüncü sırada yer alıyor. Futbolcu olarak üstün başarıları ve liderlik özellikleriyle tanınmış, gelmiş geçmiş en iyi futbolcular listesinde haklı bir yer edinmiştir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/gelmis-gemis-en-iyi-10-futbolcu#bolum-3",
    "name": "Zinedine Zidane",
    "image": "/images/futbol/zinedine_zidane.jpg",
    "ozellikler": {
      "Doğum Tarihi": "23 Haziran 1972",
      "Boyu": "185 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Zinedine Zidane, gelmiş geçmiş en iyi futbolcu sıralamasında üçüncü sıraya yerleşiyor. Sahadaki büyüleyici teknikleri ve oyun zekası ile futbolseverlerin gönlünde taht kurmuş durumda."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/gelmis-gemis-en-iyi-10-futbolcu#bolum-2",
    "name": "Ronaldo Nazario",
    "image": "/images/futbol/ronaldo_nazario.jpg",
    "ozellikler": {
      "Doğum Tarihi": "18 Eylül 1976",
      "Boyu": "183 cm",
      "Saç Rengi": "Kestane"
    },
    "paragraf": "Ronaldo Nazario, gelmiş geçmiş en iyi futbolcular listemizde ikinci sırada. Mükemmel gol yeteneği ve hızı ile defans oyuncuları için gerçek bir tehdit oluşturmuştur."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/gelmis-gemis-en-iyi-10-futbolcu#bolum-1",
    "name": "Ronaldinho",
    "image": "/images/futbol/ronaldinho.jpg",
    "ozellikler": {
      "Doğum Tarihi": "21 Mart 1980",
      "Boyu": "182 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Ronaldinho, listemizin zirvesinde yer alıyor. Sahip olduğu eşsiz yetenekler ve sahadaki büyüleyici hareketleri ile futbol dünyasında eşsiz bir yer edinmiştir."
  }
];

const ana_resim = "/images/ana_gorseller/gelmis_gecmis_en_iyi_10_futbolcu_kapak.png" //! SEN DOLDUR
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