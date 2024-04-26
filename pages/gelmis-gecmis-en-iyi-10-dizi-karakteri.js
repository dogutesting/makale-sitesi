
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function GelmisGecmisEnİyi10DiziKarakteriMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "gelmis-gecmis-en-iyi-10-dizi-karakteri";
const baslik = "Gelmiş Geçmiş En İyi 10 Dizi Karakteri";
const metin = "Dizi dünyası, hafızamızda yer eden unutulmaz karakterlerle doludur. Bu listede, televizyon tarihinin en iyi 10 dizi karakterini seçerek, hakkında çok konuşulan ve en iyi dizi karakterleri adaylarını sizlerle paylaşıyoruz. Bu karakterler, derinlikleri ve karmaşık kişilikleri ile en iyi 10 dizi karakteri listemizin zirvesinde yer almayı başardılar.";
const bitis_metin = "Bu yazımızda, televizyon tarihinin unutulmaz anlarını şekillendiren, duygusal derinliği ve çarpıcı karakter özellikleriyle en iyi 10 dizi karakterini inceledik. Her biri, kendine has özellikleriyle ekranlara damga vurmuş ve hayran kitlesi kazanmıştır. Umarım bu en iyi dizi karakterleri listesi, sizleri de bu olağanüstü karakterlerin hikâyelerini tekrar gözden geçirmeye teşvik eder.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["gelmis","gecmis","en","i̇yi","10","dizi","karakteri"]; //! BAK
const kategori = "dizi"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-26T18:55:12+03:00";
const degistirilmeTarihi = "2024-04-26T18:55:12+03:00";
const addDate = "26.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-dizi-karakteri#bolum-10",
    "name": "Jon Snow (Game of Thrones)",
    "image": "/images/series/jon_snow_(game_of_thrones).jpg",
    "paragraf": "Jon Snow, Game of Thrones dizisindeki soğuk kışlar ve sert mücadelelerle şekillenen derin karakter yapısı ile listemizin onuncu sırasında. Bu karakter, liderlik yetenekleri ve adalet anlayışıyla hafızalarda yer etmeyi başardı."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-dizi-karakteri#bolum-9",
    "name": "Tony Soprano (The Sopranos)",
    "image": "/images/series/tony_soprano_(the_sopranos).jpg",
    "paragraf": "Tony Soprano, mafya dünyasının karmaşık insan ilişkileri içinde bir baba ve koca olarak sürdürdüğü hayatıyla dokuzuncu sırada. Bu karizmatik karakter, The Sopranos dizisinde hem sevilir hem de korkulur bir figür."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-dizi-karakteri#bolum-8",
    "name": "Dexter Morgan (Dexter)",
    "image": "/images/series/dexter_morgan_(dexter).jpg",
    "paragraf": "Dexter Morgan, gündüzleri adli tıp uzmanı, geceleri ise bir seri katil olarak Dexter dizisinde seyirciyi etkisi altına almayı başardı. Olay örgüsü ve bu çift yönlü yaşamı, onu sekizinci sıraya taşıdı."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-dizi-karakteri#bolum-7",
    "name": "Jax Teller (Sons of Anarchy)",
    "image": "/images/series/jax_teller_(sons_of_anarchy).jpg",
    "paragraf": "Jax Teller, çetin bir motosiklet çetesinin başındaki karmaşık dönüşümlerle dolu yaşamıyla, Sons of Anarchy'de izleyiciyi derinden etkilemiştir. Karakterin bu zor dönemleri, onu yedinci sıraya yerleştiriyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-dizi-karakteri#bolum-6",
    "name": "Don Draper (Mad Men)",
    "image": "/images/series/don_draper_(mad_men).jpg",
    "paragraf": "Don Draper, reklamcılık dünyasının zirvesinde, kişisel sır perdesini koruyarak ilerleyen Mad Men'in baş karakteridir. Bu ilgi çekici profil, onu altıncı sıraya taşıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-dizi-karakteri#bolum-5",
    "name": "Sherlock Holmes (Sherlock)",
    "image": "/images/series/sherlock_holmes_(sherlock).jpg",
    "paragraf": "Sherlock Holmes, keskin zekası ve muazzam gözlem yeteneğiyle Sherlock dizisinde seyirciyi adeta büyüler. Bu ikonik detektif, beşinci sıradaki yerini kesinlikle hak ediyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-dizi-karakteri#bolum-4",
    "name": "Rick Grimes (The Walking Dead)",
    "image": "/images/series/rick_grimes_(the_walking_dead).png",
    "paragraf": "Rick Grimes, zombi kıyametinde hayatta kalmayı başarırken The Walking Dead'de gösterdiği liderlik ve kararlılık ile dördüncü sırada."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-dizi-karakteri#bolum-3",
    "name": "Walter White (Breaking Bad)",
    "image": "/images/series/walter_white_(breaking_bad).jpg",
    "paragraf": "Walter White, Breaking Bad'de yaşadığı dönüşümle hem korkulan hem de merhametle yaklaşılan bir karakter. Bu çarpıcı değişim, onu üçüncü sıradaki yerine oturtuyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-dizi-karakteri#bolum-2",
    "name": "Tyrion Lannister (Game of Thrones)",
    "image": "/images/series/tyrion_lannister_(game_of_thrones).jpg",
    "paragraf": "Tyrion Lannister, zekası ve mizah anlayışıyla Game of Thrones'da her zaman ön planda. İzleyicilerin sevgilisi olan Tyrion, ikinci sıraya yerleşiyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/gelmis-gecmis-en-iyi-10-dizi-karakteri#bolum-1",
    "name": "Jesse Pinkman (Breaking Bad)",
    "image": "/images/series/jesse_pinkman_(breaking_bad).jpg",
    "paragraf": "Jesse Pinkman, Breaking Bad'deki duygusal derinliği ve karmaşık kişilik dönüşümüyle listenin zirvesinde. Bu karakter, dizinin hikayesi boyunca en büyük evrimi yaşayarak birinci sırayı hak ediyor."
  }
];

const ana_resim = "/images/ana_gorseller/gelmis_gecmis_en_iyi_10_dizi_karakteri_kapak.jpg" //! SEN DOLDUR
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