
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EnPahali10FutbolOyuncusu2024Main({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "en-pahali-10-futbol-oyuncusu-2024";
const baslik = "En pahalı 10 futbol oyuncusu 2024";
const metin = "2024 yılında dünyanın en pahalı futbolcusu kim diye merak ediyorsanız, işte cevaplar! Bu listemizde, dünyanın en pahalı futbolcu sıralamasını adım adım inceleyeceğiz ve bu özel spor yıldızlarının neden bu kadar değerli olduğunu keşfedeceğiz.";
const bitis_metin = "Bu yazımızda, 2024 yılının en pahalı 10 futbol oyuncusunu sizler için inceledik. Bu oyuncuların kariyerlerini ve etkileyici başarılarını keşfetmek, futbol dünyasındaki mali dinamikleri daha iyi anlamamıza yardımcı olur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["en","pahali","10","futbol","oyuncusu","2024"]; //! BAK
const kategori = "futbol"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-26T18:45:49+03:00";
const degistirilmeTarihi = "2024-04-26T18:45:49+03:00";
const addDate = "26.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/en-pahali-10-futbol-oyuncusu-2024#bolum-10",
    "name": "Victor Osimhen",
    "image": "/images/futbol/victor_osimhen.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1998",
      "Boyu": "185 cm",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "10. sırada Victor Osimhen bulunuyor. Genç yaşına rağmen saha içerisindeki performansı ve gol yeteneği ile futbol severlerin dikkatini çekmeyi başarmıştır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/en-pahali-10-futbol-oyuncusu-2024#bolum-9",
    "name": "Lautaro Martínez",
    "image": "/images/futbol/lautaro_martinez.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1997",
      "Boyu": "174 cm",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "9. sırada Lautaro Martínez yer alıyor. Arjantinli forvet, bitiriciliği ve hızıyla tanınıyor ve bazı büyük kulüplerin transfer listesinin en üst sıralarında."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/en-pahali-10-futbol-oyuncusu-2024#bolum-8",
    "name": "Jamal Musiala",
    "image": "/images/futbol/jamal_musiala.jpg",
    "ozellikler": {
      "Doğum Tarihi": "2003",
      "Boyu": "183 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "8. sıradaki isim Jamal Musiala, genç yaşına rağmen olağanüstü bir yetenek ve futbol zekası ile büyük kulüplerin radarına girdi."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/en-pahali-10-futbol-oyuncusu-2024#bolum-7",
    "name": "Florian Wirtz",
    "image": "/images/futbol/florian_wirtz.jpg",
    "ozellikler": {
      "Doğum Tarihi": "2003",
      "Boyu": "176 cm",
      "Saç Rengi": "Sarı"
    },
    "paragraf": "Listemizin 7. sırasında Florian Wirtz var. Alman orta saha oyuncusu, teknik yeteneği ve oyun görüşü ile kendisine büyük bir hayran kitlesi oluşturdu."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/en-pahali-10-futbol-oyuncusu-2024#bolum-6",
    "name": "Phil Foden",
    "image": "/images/futbol/phil_foden.jpg",
    "ozellikler": {
      "Doğum Tarihi": "2000",
      "Boyu": "171 cm",
      "Saç Rengi": "Sarı"
    },
    "paragraf": "6. sırada Phil Foden bulunuyor. İngiliz futbolcu, sahadaki etkileyici oyunlarıyla futbol dünyasında geniş bir tanınırlık kazandı."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/en-pahali-10-futbol-oyuncusu-2024#bolum-5",
    "name": "Bukayo Saka",
    "image": "/images/futbol/bukayo_saka.jpg",
    "ozellikler": {
      "Doğum Tarihi": "2001",
      "Boyu": "178 cm",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "5. sırada yer alan Bukayo Saka, oyunun her iki yönünde de gösterdiği performansla dikkat çekerken, aynı zamanda önemli maçlarda kritik goller atıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/en-pahali-10-futbol-oyuncusu-2024#bolum-4",
    "name": "Vinicius Junior",
    "image": "/images/futbol/vinicius_junior.jpg",
    "ozellikler": {
      "Doğum Tarihi": "2000",
      "Boyu": "176 cm",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Listede 4. sırada Vinicius Junior var. Brezilyalı oyuncunun hızı ve çevikliği, onu dünya çapında bir yıldız haline getirdi."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/en-pahali-10-futbol-oyuncusu-2024#bolum-3",
    "name": "Kylian Mbappé",
    "image": "/images/futbol/kylian_mbappe.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1998",
      "Boyu": "178 cm",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "3. sırada Kylian Mbappé yer almakta. Olağanüstü hızı ve bitiriciliği ile Mbappé, futbol dünyasında en çok konuşulan isimlerden biri."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/en-pahali-10-futbol-oyuncusu-2024#bolum-2",
    "name": "Erling Haaland",
    "image": "/images/futbol/erling_haaland.jpg",
    "ozellikler": {
      "Doğum Tarihi": "2000",
      "Boyu": "194 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Erling Haaland, 2. sırada yer alıyor. Göz kamaştırıcı gol sayıları ve sahadaki varlığı, onu dünyanın en aranan forvetlerinden biri yaptı."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/en-pahali-10-futbol-oyuncusu-2024#bolum-1",
    "name": "Jude Bellingham",
    "image": "/images/futbol/jude_bellingham.jpg",
    "ozellikler": {
      "Doğum Tarihi": "2003",
      "Boyu": "186 cm",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Listemizin zirvesinde Jude Bellingham bulunuyor. Genç yıldız, sahadaki liderliği ve teknik becerileri ile en pahalı futbolcusu olarak öne çıkıyor."
  }
];

const ana_resim = "/images/ana_gorseller/en_pahali_10_futbol_oyuncusu_2024_kapak.jpg" //! SEN DOLDUR
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