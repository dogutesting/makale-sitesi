
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DunyaninEnYakisikli10ErkegiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "dunyanin-en-yakisikli-10-erkegi";
const baslik = "Dünyanın en yakışıklı 10 erkeği";
const metin = "Sinema dünyasından spor sahalarına kadar, dünyanı en yakışıklı erkekleri her zaman büyük bir hayran kitlesi toplamıştır. Bu liste, dünyanın en yakışıklı erkeklerini sıralıyor ki bu da gözlerinizi kamaştıracak. İşte, en yakışıklı erkek sıralamasıyla karşınızda en yakışıklı insanlar listesi.";
const bitis_metin = "İşte karşınızda, en yakışıklı erkekler listesi! Bu liste, dünya genelinde tanınan ve beğenilen erkekleri bir araya getirerek, onların başarıları ve çekicilikleri ile nasıl dikkat çektiklerini göstermektedir. Umarız bu listedeki isimler ve hikayeler, sizlere ilham vermiştir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["dunyanin","en","yakisikli","10","erkegi"]; //! BAK
const kategori = "model"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-25T18:30:58+03:00";
const degistirilmeTarihi = "2024-04-25T18:30:58+03:00";
const addDate = "25.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/dunyanin-en-yakisikli-10-erkegi#bolum-10",
    "name": "George Clooney",
    "image": "/images/model/george_clooney.jpg",
    "ozellikler": {
      "Doğum Tarihi": "6 Mayıs 1961",
      "Boyu": "180 cm",
      "Saç Rengi": "Tuz ve biber"
    },
    "paragraf": "Listemizin 10. sırasında dünyanın en yakışıklı erkeği unvanıyla tanınan George Clooney bulunuyor. Karizmatik oyunculuk tarzı ve zamansız cazibesi ile Clooney, Hollywood'un en çekici ve saygın simalarından biri olmayı sürdürüyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/dunyanin-en-yakisikli-10-erkegi#bolum-9",
    "name": "Leonardo DiCaprio",
    "image": "/images/model/leonardo_dicaprio.jpg",
    "ozellikler": {
      "Doğum Tarihi": "11 Kasım 1974",
      "Boyu": "183 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "9. sırada, Oscarlı aktör Leonardo DiCaprio yer alıyor. Farklı dönemlerin dünyanın en yakışıklı erkekleri arasında her zaman yerini koruyan DiCaprio, yeteneği ve karşı konulmaz çekiciliği ile listemizdeki yerini alıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/dunyanin-en-yakisikli-10-erkegi#bolum-8",
    "name": "Johnny Depp",
    "image": "/images/model/johnny_depp.jpg",
    "ozellikler": {
      "Doğum Tarihi": "9 Haziran 1963",
      "Boyu": "178 cm",
      "Saç Rengi": "Koyu kahverengi"
    },
    "paragraf": "Johnny Depp, dünyanın en yakışıklı adamı olarak tanınmakta ve 8. sırada yer almaktadır. Depp, özgün stilini ve derin karakter tasvirlerini dünyanın her köşesinden hayranları ile paylaşmayı sürdürüyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/dunyanin-en-yakisikli-10-erkegi#bolum-7",
    "name": "Robert Pattinson",
    "image": "/images/model/robert_pattinson.jpg",
    "ozellikler": {
      "Doğum Tarihi": "13 Mayıs 1986",
      "Boyu": "185 cm",
      "Saç Rengi": "Koyu kahverengi"
    },
    "paragraf": "7. sıradaki isim dünyanın en yakışıklı insanı arasında gösterilen Robert Pattinson. Pattinson, vampire dönüştüğü Twilight serisiyle dünya çapında üne kavuştu ve o zamandan beri yakışıklılığı ile dikkat çekiyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/dunyanin-en-yakisikli-10-erkegi#bolum-6",
    "name": "Brad Pitt",
    "image": "/images/model/brad_pitt.jpg",
    "ozellikler": {
      "Doğum Tarihi": "18 Aralık 1963",
      "Boyu": "180 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "6. sırada, Hollywood'un altın çocuğu ve dünyanın en yakışıklı erkeklerinden biri olan Brad Pitt bulunuyor. Pitt, daima zarif stili ve üstün oyunculuk becerisi ile öne çıkıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/dunyanin-en-yakisikli-10-erkegi#bolum-5",
    "name": "Zac Efron",
    "image": "/images/model/zac_efron.jpg",
    "ozellikler": {
      "Doğum Tarihi": "18 Ekim 1987",
      "Boyu": "173 cm",
      "Saç Rengi": "Koyu kahverengi"
    },
    "paragraf": "Beşinci sırada Zac Efron yer alıyor. En yakışıklı erkek listesi daima onun ismini de barındırır. Çocuk yıldız olarak başladığı kariyerinde, Efron göz kamaştıran gelişimini ve yakışıklılığını sergilemeye devam etmektedir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/dunyanin-en-yakisikli-10-erkegi#bolum-4",
    "name": "Tom Cruise",
    "image": "/images/model/tom_cruise.jpg",
    "ozellikler": {
      "Doğum Tarihi": "3 Temmuz 1962",
      "Boyu": "170 cm",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Tom Cruise, dördüncü sıradaki en yakışıklı erkek. Her zaman enerjik ve çekici olan Cruise, başarılı filmleri ve karizmatik kişiliği ile uluslararası bir ikon."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/dunyanin-en-yakisikli-10-erkegi#bolum-3",
    "name": "Ryan Gosling",
    "image": "/images/model/ryan_gosling.jpg",
    "ozellikler": {
      "Doğum Tarihi": "12 Kasım 1980",
      "Boyu": "184 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Üçüncü sırada Ryan Gosling yer alıyor. Onun doğal cazibesi ve düşündürücü oyunculuk yeteneği, dünyanın en yakışıklı erkekleri listesinde kendine sağlam bir yer edinmesini sağladı."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/dunyanin-en-yakisikli-10-erkegi#bolum-2",
    "name": "David Beckham",
    "image": "/images/model/david_beckham.jpg",
    "ozellikler": {
      "Doğum Tarihi": "2 Mayıs 1975",
      "Boyu": "180 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "İkinci sırada, eski futbol yıldızı ve stil ikonu David Beckham bulunuyor. Kardashianlar dünyasında bile Beckham, stil sahibi kişiliği ve sportif başarısı ile dikkatleri üzerine çeker."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/dunyanin-en-yakisikli-10-erkegi#bolum-1",
    "name": "Chris Hemsworth",
    "image": "/images/model/chris_hemsworth.jpg",
    "ozellikler": {
      "Doğum Tarihi": "11 Ağustos 1983",
      "Boyu": "190 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Listemizin zirvesinde, Thor rolüyle tanınan Chris Hemsworth yer alıyor. Hemsworth, olağanüstü fiziksel görünümü ve karizmatik duruşuyla dünyanın en yakışıklı erkeği olarak kabul edilmektedir."
  }
];

const ana_resim = "/images/ana_gorseller/dunyanin_en_yakisikli_10_erkegi_kapak.jpg" //! SEN DOLDUR
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