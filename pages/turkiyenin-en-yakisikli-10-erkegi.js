
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function TurkiyeninEnYakisikli10ErkegiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "turkiyenin-en-yakisikli-10-erkegi";
const baslik = "Türkiye'nin En Yakışıklı 10 Erkeği";
const metin = "Bu makalede, Türkiye'nin en yakışıklı erkeklerini derledik. 'Türkiye'nin en yakışıklı erkeği' kimdir sorusuna yanıt ararken, 'en yakışıklı Türk erkek oyuncular' arasından seçim yapmak hiç de kolay olmadı. İşte 'Türkiye'nin en yakışıklı sıralaması'nda yer alan isimler.";
const bitis_metin = "Türkiye'nin en yakışıklı erkekleri listemizi tamamladık. Bu listede yer alan isimler, hem görünüş hem de yetenek bakımından ünlü ve beğenilen isimlerdir. Her biri kendi alanında başarılarını kanıtlamış, Türkiye'nin en yakışıklı erkeği olmak için birbirleriyle yarış içindeler.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["turkiye'nin","en","yakisikli","10","erkegi"]; //! BAK
const kategori = "model"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-22T18:27:27+03:00";
const degistirilmeTarihi = "2024-04-22T18:27:27+03:00";
const addDate = "30.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/turkiyenin-en-yakisikli-10-erkegi#bolum-10",
    "name": "Burak Özçivit",
    "image": "/images/model/burak_ozcivit.png",
    "ozellikler": {
      "Doğum Tarihi": "24 Aralık 1984",
      "Boyu": "1.84 m",
      "Saç Rengi": "Kumral"
    },
    "paragraf": "Listemizin 10. sırasında Burak Özçivit yer alıyor. Türkiye'nin en yakışıklı erkeği olarak gösterilen Burak, özellikle dizi ve filmleriyle tanınıyor. En yakışıklı Türk erkekler arasında kendine sağlam bir yer bulmuştur."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/turkiyenin-en-yakisikli-10-erkegi#bolum-9",
    "name": "Kenan İmirzalioğlu",
    "image": "/images/model/kenan_i̇mirzalioglu.jpg",
    "ozellikler": {
      "Doğum Tarihi": "18 Haziran 1974",
      "Boyu": "1.92 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Kenan İmirzalioğlu, Türkiye'nin en yakışıklı erkekleri listesinde 9. sırada. Uzun boyu ve karizmatik yapısıyla dikkat çeken Kenan, 'türkiye'nin en yakışıklı erkeği kim' sorusunun en güçlü adaylarından biri."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/turkiyenin-en-yakisikli-10-erkegi#bolum-8",
    "name": "Çağatay Ulusoy",
    "image": "/images/model/cagatay_ulusoy.jpg",
    "ozellikler": {
      "Doğum Tarihi": "23 Eylül 1990",
      "Boyu": "1.88 m",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Çağatay Ulusoy, 'Türkiye'nin en yakışıklı erkeği' unvanına sahip olmak için ideal bir aday. 8. sıradaki bu yakışıklı oyuncu, genç kitle üzerinde büyük bir etkiye sahip."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/turkiyenin-en-yakisikli-10-erkegi#bolum-7",
    "name": "Aras Bulut İynemli",
    "image": "/images/model/aras_bulut_i̇ynemli.jpg",
    "ozellikler": {
      "Doğum Tarihi": "25 Ağustos 1990",
      "Boyu": "1.82 m",
      "Saç Rengi": "Kumral"
    },
    "paragraf": "Aras Bulut İynemli, en yakışıklı Türk erkek oyuncular arasında yer alarak 7. sırayı kapmış durumda. Kendine has oyunculuk stili ve karizması ile dikkatleri üzerine çekiyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/turkiyenin-en-yakisikli-10-erkegi#bolum-6",
    "name": "Can Yaman",
    "image": "/images/model/can_yaman.jpg",
    "ozellikler": {
      "Doğum Tarihi": "8 Kasım 1989",
      "Boyu": "1.83 m",
      "Saç Rengi": "Koyu Kahve"
    },
    "paragraf": "Can Yaman, Türkiye'nin en yakışıklı erkekler listesine 6. sıradan giriş yapıyor. Can, hem fiziksel görünümü hem de oyunculuk yeteneği ile ön plana çıkıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/turkiyenin-en-yakisikli-10-erkegi#bolum-5",
    "name": "Mehmet Akif Alakurt",
    "image": "/images/model/mehmet_akif_alakurt.png",
    "ozellikler": {
      "Doğum Tarihi": "23 Temmuz 1979",
      "Boyu": "1.90 m",
      "Saç Rengi": "Siyah"
    },
    "paragraf": "Mehmet Akif Alakurt, Türkiye'nin en yakışıklı sıralamasında beşinci sıradaki yerini koruyor. Uzun boylu ve etkileyici yapısı ile dikkat çekmeye devam ediyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/turkiyenin-en-yakisikli-10-erkegi#bolum-4",
    "name": "Kerem Bürsin",
    "image": "/images/model/kerem_bursin.jpg",
    "ozellikler": {
      "Doğum Tarihi": "4 Haziran 1987",
      "Boyu": "1.79 m",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Kerem Bürsin, genç ve dinamik yapısıyla 4. sırada yer alıyor. Türkiye'nin en yakışıklı erkeği olma potansiyeline sahip Kerem, başarılı projeleri ile de göz dolduruyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/turkiyenin-en-yakisikli-10-erkegi#bolum-3",
    "name": "Berk Oktay",
    "image": "/images/model/berk_oktay.jpg",
    "ozellikler": {
      "Doğum Tarihi": "28 Ekim 1982",
      "Boyu": "1.85 m",
      "Saç Rengi": "Sarı"
    },
    "paragraf": "Berk Oktay, Türkiye'nin en yakışıklı erkekleri listemizde üçüncü sırada. Berk, model ve oyuncu olarak kariyerine devam ediyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/turkiyenin-en-yakisikli-10-erkegi#bolum-2",
    "name": "Barış Arduç",
    "image": "/images/model/baris_arduc.jpg",
    "ozellikler": {
      "Doğum Tarihi": "9 Ekim 1987",
      "Boyu": "1.88 m",
      "Saç Rengi": "Kahverengi"
    },
    "paragraf": "Listemizin ikinci sırasında Barış Arduç bulunuyor. Barış, yakışıklılığı ve yeteneği ile 'Türkiye'nin en yakışıklı erkeği' listesinde üst sıralara oynuyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/turkiyenin-en-yakisikli-10-erkegi#bolum-1",
    "name": "Kıvanç Tatlıtuğ",
    "image": "/images/model/kivanc_tatlitug.jpg",
    "ozellikler": {
      "Doğum Tarihi": "27 Ekim 1983",
      "Boyu": "1.87 m",
      "Saç Rengi": "Sarı"
    },
    "paragraf": "Listemizin zirvesinde Kıvanç Tatlıtuğ yer alıyor. Kıvanç, Türkiye'nin en yakışıklı erkeği unvanını uzun süredir koruyor ve bu konuda birçok kişi hemfikir."
  }
];

const ana_resim = "/images/ana_gorseller/turkiyenin_en_yakisikli_10_erkegi_kapak.jpg" //! SEN DOLDUR
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