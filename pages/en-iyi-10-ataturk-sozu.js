
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function Enİyi10AtaturkSozuMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "en-iyi-10-ataturk-sozu";
const baslik = "En İyi 10 Atatürk Sözü";
const metin = "Atatürk, Türk tarihinde derin izler bırakmış bir liderdir ve onun sözleri, rehber olarak pek çok kesime ilham kaynağı olmuştur. Bu makalemizde, atatürk sözleri arasından seçtiğimiz en etkileyici ve anlamlı olanları sizler için sıraladık. Her bir söz, atatürk en iyi sözleri ve atatürk'ün sözlerinin anlamları hakkında derin bir fikir veriyor. İşte, atatürk en güzel sözleri olan bu listedeki, atatürk sözleri kısa ve öz biçiminde sizlerle.";
const bitis_metin = "Bu yazımızda Atatürk'ün ölümsüz sözlerini ele aldık. Her biri, derin anlamlar içeren ve zamanın ötesinde mesajlar veren bu sözler, günümüzde bile rehber olmaya devam ediyor. Umuyoruz ki bu atatürk sözleri, sizler için de ilham verici olmuştur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["en","i̇yi","10","ataturk","sozu"]; //! BAK
const kategori = "söz"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-26T18:14:14+03:00";
const degistirilmeTarihi = "2024-04-26T18:14:14+03:00";
const addDate = "26.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/en-iyi-10-ataturk-sozu#bolum-10",
    "name": "Hayatta en hakiki mürşit ilimdir",
    "image": "/images/soz/ataturk_1.png",
    "paragraf": "Bu söz, Atatürk'ün bilime ve eğitim üzerine olan vurgusunu gösterir. 'Hayatta en hakiki mürşit ilimdir' ifadesi ile Atatürk, ilmin ve bilginin öğretici gücüne olan inancını ifade etmiştir."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/en-iyi-10-ataturk-sozu#bolum-9",
    "name": "Hürriyet olmayan bir yerde ölüm vardır",
    "image": "/images/soz/ataturk_2.jpg",
    "paragraf": "Özgürlüğün ve bağımsızlığın vazgeçilmezliğini vurgulayan bu söz, Atatürk'ün özgürlüğe verdiği değeri yansıtır. Her insanın özgür olması gerektiğini savunan bu ifade, derin bir özgürlük mesajı içermektedir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/en-iyi-10-ataturk-sozu#bolum-8",
    "name": "Egemenlik kayıtsız şartsız milletindir",
    "image": "/images/soz/ataturk_3.jpg",
    "paragraf": "Türkiye Cumhuriyeti'nin temelinde yatan bu önemli söz, milli iradenin üstünlüğünü ve demokrasinin önemini vurgular. Atatürk bu sözü ile egemenliğin millete ait olduğunu belirtmiştir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/en-iyi-10-ataturk-sozu#bolum-7",
    "name": "Yurtta sulh, cihanda sulh",
    "image": "/images/soz/ataturk_4.jpg",
    "paragraf": "Atatürk'ün dış politika anlayışını özetleyen bu söz, hem iç barışa hem de uluslararası barışa verdiği değeri gösterir. Bu ifade, Türkiye'nin barışçıl bir ulus olarak varlığını sürdürme arzusunu dile getirir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/en-iyi-10-ataturk-sozu#bolum-6",
    "name": "Biz cahil dediğimiz zaman, mektepli ve diplomalı olanları kastedmiyoruz.",
    "image": "/images/soz/ataturk_5.png",
    "paragraf": "Atatürk, bu sözüyle eğitimin sadece akademik başarıyla sınırlı olmadığını, gerçek bilginin yaşamın her alanında uygulanabilir olması gerektiğini vurgulamaktadır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/en-iyi-10-ataturk-sozu#bolum-5",
    "name": "Bilim ve fen nerede ise oradan alacağız ve her ulusun yapmakla haklı olduğu gibi, yüksek uygarlığa, doğruca ve pervasızca yürüyeceğiz.",
    "image": "/images/soz/ataturk_6.png",
    "paragraf": "Bu ifadeyle Atatürk, bilimin ve fen bilimlerinin uluslararası karakterini ve herhangi bir ulusun ilerlemesi için bunları benimsemesi gerektiğini vurgulamaktadır."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/en-iyi-10-ataturk-sozu#bolum-4",
    "name": "Kuvvet bir hakdır",
    "image": "/images/soz/ataturk_7.png",
    "paragraf": "Gücün ve kuvvetin bir hak olduğunu belirten bu söz, Atatürk'ün güçlü bir devlet yapısının ve milletin önemini vurgulamaktadır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/en-iyi-10-ataturk-sozu#bolum-3",
    "name": "Bir ulus sanattan ve sanatçıdan yoksunsa, tam bir hayata sahip olamaz",
    "image": "/images/soz/ataturk_8.png",
    "paragraf": "Sanatın ve sanatçının topluma katkısının önemini ifade eden bu söz, kültürel zenginliğin ve sanatsal faaliyetlerin bir ulusun tamamlayıcı unsurları olduğunu belirtir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/en-iyi-10-ataturk-sozu#bolum-2",
    "name": "Beni görmek demek mutlaka yüzümü görmek demek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu yeterlidir.",
    "image": "/images/soz/ataturk_9.jpg",
    "paragraf": "Atatürk bu sözüyle, fiziksel varlığının ötesinde, ideallerinin ve düşüncelerinin anlaşılmasının daha önemli olduğunu vurgular."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/en-iyi-10-ataturk-sozu#bolum-1",
    "name": "Ne mutlu Türk'üm diyene",
    "image": "/images/soz/ataturk_10.png",
    "paragraf": "Türk milletine ait olmanın gururunu ve önemini vurgulayan bu meşhur söz, milli kimlik ve birlik duygusunun güçlendirilmesine katkı sağlar."
  }
];

const ana_resim = "/images/ana_gorseller/ataturk_kapak.jpg" //! SEN DOLDUR
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