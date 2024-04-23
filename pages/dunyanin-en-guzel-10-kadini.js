
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DunyaninEnGuzel10KadiniMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "dunyanin-en-guzel-10-kadini";
const baslik = "Dünyanın en güzel 10 kadını";
const metin = "Bu listede, dünyanın en güzel kadınlarını, her birinin benzersiz güzelliklerini ve başarılarını vurgulayarak sunuyoruz. Güzelliklerini dünya çapında kabul edilmiş ve hayranlık uyandıran bu kadınlar, hem fiziksel hem de kişisel özellikleriyle ön plana çıkıyor. Dünyanın en güzel ilk 10 kadını listemizle, estetik ve cazibenin uluslararası yüzlerini keşfedin.";
const bitis_metin = "Bu yazımızda, dünyanın en güzel kadınları listesi ile sizleri büyüleyici bir güzellik turuna çıkardık. Umarız bu benzersiz güzellikler ve onların hikayeleri size ilham kaynağı olmuştur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["dunyanin","en","guzel","10","kadini"]; //! BAK
const kategori = "model"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-22T18:32:32+03:00";
const degistirilmeTarihi = "2024-04-22T18:32:32+03:00";
const addDate = "22.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/dunyanin-en-guzel-10-kadini#bolum-10",
    "name": "Natalie Portman",
    "image": "/images/model/natalie_portman.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1981",
      "Boyu": "160 cm",
      "Saç Rengi": "Koyu Kahverengi"
    },
    "paragraf": "Natalie Portman, dünyanın kadınları sıralaması içinde 10. sırada yer alıyor. Hem akıllı hem de güzel olması ile tanınan Portman, üniversite derecesine sahip ve birçok önemli filmde rol almıştır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/dunyanin-en-guzel-10-kadini#bolum-9",
    "name": "Penelope Cruz",
    "image": "/images/model/penelope_cruz.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1974",
      "Boyu": "168 cm",
      "Saç Rengi": "Esmer"
    },
    "paragraf": "Penelope Cruz, dünyanın en güzel kadınları listesinde 9. sırada. Akademi ödüllü İspanyol aktris, uluslararası sinema sektöründe yıllardır adından söz ettiriyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/dunyanin-en-guzel-10-kadini#bolum-8",
    "name": "Kate Upton",
    "image": "/images/model/kate_upton.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1992",
      "Boyu": "178 cm",
      "Saç Rengi": "Sarı"
    },
    "paragraf": "Kate Upton, dünyanın en güzel kadını unvanına sahip ve listemizde 8. sırada yer alıyor. Modellik kariyeriyle ün kazanan Upton, aynı zamanda canlı kişiliğiyle de bilinir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/dunyanin-en-guzel-10-kadini#bolum-7",
    "name": "Scarlett Johansson",
    "image": "/images/model/scarlett_johansson.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1984",
      "Boyu": "160 cm",
      "Saç Rengi": "Sarı"
    },
    "paragraf": "Scarlett Johansson, dünyanın en güzel kadınları sıralamasında 7. sırada. Hollywood'un en parlayan yıldızlarından biri olarak, birçok başarılı filme imza atmıştır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/dunyanin-en-guzel-10-kadini#bolum-6",
    "name": "Megan Fox",
    "image": "/images/model/megan_fox.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1986",
      "Boyu": "163 cm",
      "Saç Rengi": "Koyu Kahverengi"
    },
    "paragraf": "Megan Fox, dünyanın en güzel kadınları arasında 6. sırada yer alıyor. Başarılı aktris ve model, özellikle aksiyon filmleriyle tanınmaktadır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/dunyanin-en-guzel-10-kadini#bolum-5",
    "name": "Candice Swanepoel",
    "image": "/images/model/candice_swanepoel.png",
    "ozellikler": {
      "Doğum Tarihi": "1988",
      "Boyu": "177 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Candice Swanepoel, 5. sıramızda yer almakta. Güney Afrikalı bu model, dünyanın en güzel kızı olarak tanımlanan defileler ve kampanyalarla adını duyurmuştur."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/dunyanin-en-guzel-10-kadini#bolum-4",
    "name": "Charlize Theron",
    "image": "/images/model/charlize_theron.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1975",
      "Boyu": "177 cm",
      "Saç Rengi": "Sarı"
    },
    "paragraf": "Charlize Theron, liste baÿ_sessidlerini çevreleyen zarafet ve yetenek ile dünyanın en güzel kadınları arasında 4. sırada. Sayısız ödül kazanan Theron, aktivizmiyle de tanınır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/dunyanin-en-guzel-10-kadini#bolum-3",
    "name": "Adriana Lima",
    "image": "/images/model/adriana_lima.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1981",
      "Boyu": "178 cm",
      "Saç Rengi": "Esmer"
    },
    "paragraf": "Adriana Lima, dünyanın en güzel kadınları listesi içerisinde 3. sırada. Brezilyalı süper model, podyumların en çarpıcı isimlerinden biridir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/dunyanin-en-guzel-10-kadini#bolum-2",
    "name": "Bella Hadid",
    "image": "/images/model/bella_hadid.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1996",
      "Boyu": "175 cm",
      "Saç Rengi": "Koyu Kahverengi"
    },
    "paragraf": "Bella Hadid, dünyanın en dikkat çekici ve güzel kadınlarından biri olarak 2. sıradaki yerini alıyor. Modellik dünyasında ün kazanan Hadid, stili ve güzelliği ile öne çıkıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/dunyanin-en-guzel-10-kadini#bolum-1",
    "name": "Margot Robbie",
    "image": "/images/model/margot_robbie.jpg",
    "ozellikler": {
      "Doğum Tarihi": "1990",
      "Boyu": "168 cm",
      "Saç Rengi": "Sarışın"
    },
    "paragraf": "Margot Robbie, dünyanın en güzel kadınları listesinin zirvesinde yer alıyor. İnanılmaz yeteneği ve çarpıcı görünümüyle, Hollywood'un en beğenilen yıldızlarından biridir."
  }
];

const ana_resim = "/images/ana_gorseller/dunyanin_en_guzel_10_kadini_kapak.jpg" //! SEN DOLDUR
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