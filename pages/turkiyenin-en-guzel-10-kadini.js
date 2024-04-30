
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function TurkiyeninEnGuzel10KadiniMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "turkiyenin-en-guzel-10-kadini";
const baslik = "Türkiye'nin en güzel 10 kadını";
const metin = "Bu listede Türkiye'nin en güzel kadınlarını, türkiye'nin en güzel kadınları kategorisinde topladık. Özellikle vurgu yapmak istediğimiz en güzel türk kadın oyuncular, hem estetik güzellikleri hem de yetenekleri ile öne çıkıyorlar. Türkiye'nin en güzel kızı unvanına layık olan bu kadınlar aynı zamanda profesyonel başarılarıyla da göz dolduruyorlar.";
const bitis_metin = "İşte Türkiye'nin en güzel 10 kadını. Bu yazımızda türkiye'nin en güzel kadını ve en güzel türk kadın oyuncular hakkında bilgi verdik. Güzel ve yetenekli bu kadınlar, sadece görünüşleriyle değil, aynı zamanda sahip oldukları yeteneklerle de kendilerini kanıtlamış durumdalar.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["turkiye'nin","en","guzel","10","kadini"]; //! BAK
const kategori = "model"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-22T18:29:03+03:00";
const degistirilmeTarihi = "2024-04-22T18:29:03+03:00";
const addDate = "30.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/turkiyenin-en-guzel-10-kadini#bolum-10",
    "name": "Seda Bakan",
    "image": "/images/model/seda_bakan.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1985",
      "Boyu": "1.67 m",
      "Saç Rengi": "Kumral"
    },
    "paragraf": "10 numarada, türkiye'nin en güzel kadını unvanlarından birine sahip Seda Bakan yer alıyor. Komedi ve dram rollerindeki başarısıyla tanınan Bakan, doğal güzelliği ve sempatik tavırlarıyla da bilinir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/turkiyenin-en-guzel-10-kadini#bolum-9",
    "name": "Tuba Büyüküstün",
    "image": "/images/model/tuba_buyukustun.png",
    "ozellikler": {
      "Doğum Tarihi": "1982",
      "Boyu": "1.73 m",
      "Saç Rengi": "Koyu Kahverengi"
    },
    "paragraf": "9 numaralı sırada Tuba Büyüküstün, türkiye'nin en güzel kadınları listesinde boy gösteriyor. Çarpıcı güzelliği ve göz alıcı performanslarıyla, pek çok kişi tarafından en güzel türk kadınları arasında gösterilmektedir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/turkiyenin-en-guzel-10-kadini#bolum-8",
    "name": "Farah Zeynep Abdullah",
    "image": "/images/model/farah_zeynep_abdullah.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1989",
      "Boyu": "1.60 m",
      "Saç Rengi": "Kestane"
    },
    "paragraf": "Listemizin 8. sırasında Farah Zeynep Abdullah yer almakta. Yeteneği ve zarif güzelliği ile tanınan Abdullah, en güzel türk kadın oyuncular arasında daima öne çıkmayı başarıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/turkiyenin-en-guzel-10-kadini#bolum-7",
    "name": "Hande Erçel",
    "image": "/images/model/hande_ercel.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1993",
      "Boyu": "1.75 m",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "7. sırada Hande Erçel, genç yaşta elde ettiği başarılar ve göz kamaştırıcı güzelliği ile türkiye'nin en güzel kızı olarak kabul edilmektedir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/turkiyenin-en-guzel-10-kadini#bolum-6",
    "name": "Serenay Sarıkaya",
    "image": "/images/model/serenay_sarikaya.png",
    "ozellikler": {
      "Doğum Tarihi": "1991",
      "Boyu": "1.75 m",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "6 numarada Serenay Sarıkaya, estetik güzelliği ve başarılı oyunculuğu ile en güzel türk kadın oyuncular listesinde yer almaktadır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/turkiyenin-en-guzel-10-kadini#bolum-5",
    "name": "Neslihan Atagül",
    "image": "/images/model/neslihan_atagul.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1992",
      "Boyu": "1.68 m",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "5. sırada Neslihan Atagül, zarif duruşu ve başarılı çalışmalarıyla tanınmakta, en güzel türk kadın oyuncular arasında önemli bir yere sahiptir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/turkiyenin-en-guzel-10-kadini#bolum-4",
    "name": "Fahriye Evcen",
    "image": "/images/model/fahriye_evcen.png",
    "ozellikler": {
      "Doğum Tarihi": "1986",
      "Boyu": "1.70 m",
      "Saç Rengi": "Koyu Kahverengi"
    },
    "paragraf": "4. sıradaki Fahriye Evcen, hem güzelliği hem de oyunculuk yeteneği ile türkiye'nin en güzel kadınları arasında sıkça adı geçen bir isimdir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/turkiyenin-en-guzel-10-kadini#bolum-3",
    "name": "Elçin Sangu",
    "image": "/images/model/elcin_sangu.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1985",
      "Boyu": "1.69 m",
      "Saç Rengi": "Kızıl"
    },
    "paragraf": "3 numarada Elçin Sangu, türkiye'nin en güzel kadını olarak bilinen, doğal kızıl saçları ve benzersiz yeteneği ile dikkat çekiyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/turkiyenin-en-guzel-10-kadini#bolum-2",
    "name": "Hazal Kaya",
    "image": "/images/model/hazal_kaya.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1990",
      "Boyu": "1.57 m",
      "Saç Rengi": "Koyu Kahverengi"
    },
    "paragraf": "Listemizin ikinci sırasında Hazal Kaya, türkiye'nin en güzel kadını unvanıyla göz dolduruyor. Kaya, güzelliğiyle olduğu kadar oyunculuk becerisiyle de tanınmaktadır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/turkiyenin-en-guzel-10-kadini#bolum-1",
    "name": "Beren Saat",
    "image": "/images/model/beren_saat.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1984",
      "Boyu": "1.67 m",
      "Saç Rengi": "Kestane"
    },
    "paragraf": "Zirvede Beren Saat bulunuyor. Türkiye'nin en güzel kadınları listemizin başını çeken Saat, oyunculuk kariyerindeki başarısıyla da en güzel türk kadın oyuncular arasında yer alıyor."
  }
];

const ana_resim = "/images/ana_gorseller/turkiyenin_en_guzel_10_kadini_kapak.jpg" //! SEN DOLDUR
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