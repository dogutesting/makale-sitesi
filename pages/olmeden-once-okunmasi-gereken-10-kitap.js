
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function OlmedenOnceOkunmasiGereken10KitapMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "olmeden-once-okunmasi-gereken-10-kitap";
const baslik = "Ölmeden önce okunması gereken 10 kitap";
const metin = "Her kitap, bir maceranın ve yeni bir dünyanın kapılarını aralar. Ancak bazı eserler vardır ki, hayatınız boyunca mutlaka okumanız gereken. İşte ölmeden okunması gereken en iyi kitaplar listesi, ölmeden önce okunması gereken kitaplar arasında gösterilen kitaplardan oluşmaktadır. Bu liste, edebiyat dünyasının bilgi birikimini ve ruhunu en derin şekilde hissetmek isteyenler için özel olarak hazırlandı.";
const bitis_metin = "Bu yazımızda ölmeden önce okunması gereken, hayatı derinden etkileyen 10 unutulmaz eseri sizlerle paylaştık. Her biri ayrı bir dünyaya açılan kapı olan bu kitaplar, edebiyatın en değerli hazinelerinden bazıları olarak kabul edilir. Listemizde yer alan her kitap, farklı bakış açıları ve derin hikayelerle zenginleştirilmiş özellikler gösterir. Umarız bu eserler, sizlere yeni perspektifler sunar ve düşünce dünyanızı genişletir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["olmeden","once","okunmasi","gereken","10","kitap"]; //! BAK
const kategori = "kitap"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-27T18:50:16+03:00";
const degistirilmeTarihi = "2024-04-27T18:50:16+03:00";
const addDate = "27.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/olmeden-once-okunmasi-gereken-10-kitap#bolum-10",
    "name": "Kozmos - Carl Sagan",
    "image": "/images/kitap/kozmos_carl_sagan.jpg",
    "paragraf": "Carl Sagan'ın 'Kozmos'u, evrenin sırlarına dair kapsamlı bir rehber sunar. Bilimin en karmaşık konularını dahi anlaşılır kılmayı başaran Sagan, bu ölmeden önce okunması gereken 10 kitap listemizin 10. sırasında yer alıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/olmeden-once-okunmasi-gereken-10-kitap#bolum-9",
    "name": "Suç ve Ceza - Dostoyevski",
    "image": "/images/kitap/suc_ve_ceza_dostoyevski.jpg",
    "paragraf": "Dostoyevski'nin psikolojik derinliği ve felsefi tartışmalarıyla öne çıkan 'Suç ve Ceza', ahlaki ikilemleri ve insan ruhunun derinliklerini sorgular. Liste içinde ölmeden okunması gereken kitaplar arasında muazzam bir eser."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/olmeden-once-okunmasi-gereken-10-kitap#bolum-8",
    "name": "Yüzüklerin Efendisi - J.R.R. Tolkien",
    "image": "/images/kitap/yuzuklerin_efendisi_j.r.r._tolkien.jpg",
    "paragraf": "Fantastik edebiyatın efsane eserlerinden 'Yüzüklerin Efendisi', Tolkien'in zengin dünya kurgusu ve başarılı karakter yapısıyla unutulmaz bir okuma tecrübesi sunar. Bu büyüleyici hikaye, ölmeden önce okunması gereken 10 kitap listesinde 8. sırayı hak ediyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/olmeden-once-okunmasi-gereken-10-kitap#bolum-7",
    "name": "Taht Oyunları - George R.R. Martin",
    "image": "/images/kitap/taht_oyunlari_-_george_r.r._martin.jpg",
    "paragraf": "George R.R. Martin’in destansı başyapıtı 'Taht Oyunları', karmaşık karakterleri ve akıcı olay örgüsü ile merak uyandırıcı. Ölmeden önce okunması gereken kitaplar listemizde önemli bir yer tutuyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/olmeden-once-okunmasi-gereken-10-kitap#bolum-6",
    "name": "Usta ile Margarita - Mihail Bulgakov",
    "image": "/images/kitap/usta_ile_margarita_-_mihail_bulgakov.jpg",
    "paragraf": "Bulgakov’un başyapıtı ‘Usta ile Margarita’, fantastik ile gerçekçi arasında sarsıcı bir yolculuk sunar. Ölmeden önce okunması gereken bir başka derin eser olarak listemizde 6. sırada."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/olmeden-once-okunmasi-gereken-10-kitap#bolum-5",
    "name": "Bilinmeyen Bir Kadının Mektubu - Stefan Zweig",
    "image": "/images/kitap/bilinmeyen_bir_kadinin_mektubu_-_stefan_zweig.jpg",
    "paragraf": "Zweig’ın etkileyici kısa hikayesi 'Bilinmeyen Bir Kadının Mektubu', unutulmaz bir aşk ve pişmanlık hikayesini işler. Bu derin eser, ölmeden önce okunması gereken en iyi kitaplar arasında yer alıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/olmeden-once-okunmasi-gereken-10-kitap#bolum-4",
    "name": "1984 - George Orwell",
    "image": "/images/kitap/1984_george_orwell.jpg",
    "paragraf": "Totalitarizm üzerine korkutucu bir distopya sunan '1984', Orwell'in gözlemleriyle geleceğe ışık tutar. Ölmeden önce okunması gereken bu kitap, düşünce ve özgürlük üzerine çarpıcı bir eleştiri sunmaktadır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/olmeden-once-okunmasi-gereken-10-kitap#bolum-3",
    "name": "Hayvan Çiftliği - George Orwell",
    "image": "/images/kitap/hayvan_ciftligi_-_george_orwell.jpg",
    "paragraf": "Orwell’in başka bir başyapıtı olan 'Hayvan Çiftliği', bir alegori olarak totaliter rejimleri ve iktidar mücadelesini eleştirir. Kitap, ölmeden ölmeden önce okunması gereken 10 kitap arasında kesinlikle okunmalı."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/olmeden-once-okunmasi-gereken-10-kitap#bolum-2",
    "name": "Savaş ve Barış - Tolstoy",
    "image": "/images/kitap/savas_ve_baris_tolstoy.jpg",
    "paragraf": "Tolstoy'un efsanevi eseri 'Savaş ve Barış', tarihi olaylar ve kişisel dramalar üzerinden insan doğasını ve toplumu inceler. Ölmeden önce okunması gereken kitaplar listesi, bu derin eseri de kapsıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/olmeden-once-okunmasi-gereken-10-kitap#bolum-1",
    "name": "Yaşamak - Yu Hua",
    "image": "/images/kitap/yasamak_-_yu_hua.jpg",
    "paragraf": "Yu Hua'nın 'Yaşamak' eseri, Çin'in geçmişiyle yüzleşirken insan ruhunun direncini ele alır. Bu dokunaklı hikaye, ölmeden önce okunması gereken 10 kitap listemizin zirvesinde yer alıyor."
  }
];

const ana_resim = "/images/ana_gorseller/olmeden_once_okunmasi_gereken_10_kitap_kapak.jpg" //! SEN DOLDUR
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