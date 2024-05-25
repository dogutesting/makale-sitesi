
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function OkunmasiGerekenEnİyiDunyaKlasikleriMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "okunmasi-gereken-en-iyi-dunya-klasikleri";
const baslik = "Okunması Gereken En İyi Dünya Klasikleri";
const metin = "Dünya üzerinde okumanız gereken en önemli eserleri sizin için bir araya getirdik. Bu liste, kültürel zenginlik ve edebi derinlik arayanlar için olmazsa olmazlardan oluşuyor. İşte okunması gereken dünya klasikleri nelerdir, okunması gereken 10 dünya klasiği.";
const bitis_metin = "Edebiyat dünyasının bu büyük yolculuğuna katılarak, okunması gereken 10 kitap listesindeki eserleri keşfettik. Her biri, kendi dönemlerinin ve kültürlerinin eşsiz yansımaları olan bu klasikler, zamansız hikayeleri ve derin karakter analizleriyle okunmayı sonuna kadar hak ediyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["okunmasi","gereken","en","i̇yi","dunya","klasikleri"]; //! BAK
const kategori = "kitap"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T17:37:17+03:00";
const degistirilmeTarihi = "2024-05-25T17:37:17+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-dunya-klasikleri#bolum-10",
    "name": "İlyada - Homeros",
    "image": "/images/kitap/i̇lyada_homeros.jpg",
    "paragraf": "Homeros'un destansı şaheseri İlyada, kadim times on the Trojan War. Çatışmanın epik anlatımı ve dillere destan kahramanları ile okunması gereken kitaplar arasında mutlaka yer almalı."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-dunya-klasikleri#bolum-9",
    "name": "Ulysses - James Joyce",
    "image": "/images/kitap/ulysses_james_joyce.jpg",
    "paragraf": "James Joyce'un bu başyapıtı, okunması gereken romanlar listesinin vazgeçilmezlerindendir. Zorlayıcı yapısı ve yoğun anlatımı ile bilinen Ulysses, modernizmin zirvelerinden biri."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-dunya-klasikleri#bolum-8",
    "name": "Moby Dick - Herman Melville",
    "image": "/images/kitap/moby_dick_herman_melville.jpg",
    "paragraf": "Moby Dick, denizlerdeki intikam yolculuğunu ve insan doğasının derinliklerini keşfeden bir başka okunması gereken dünya klasiğidir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-dunya-klasikleri#bolum-7",
    "name": "Aşk ve Gurur - Jane Austen",
    "image": "/images/kitap/ask_ve_gurur_jane_austen.jpg",
    "paragraf": "Jane Austen'ın bu zarif romanı, okunması gereken dünya klasikleri listesi için mükemmel bir tercihtir. Toplumsal sınıflar ve romantik ilişkiler üzerine keskin bir bakış atar."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-dunya-klasikleri#bolum-6",
    "name": "Jane Eyre - Charlotte Brontë",
    "image": "/images/kitap/jane_eyre_-_charlotte_bronte.jpg",
    "paragraf": "Charlotte Brontë'nin bu etkileyici eseri, okunması gereken 10 kitap listesindeki yerini koruyor. Feminist bir klasik olarak da değerlendirilen bu eser, özgür iradenin ve aşkın peşinden gitmenin hikayesi."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-dunya-klasikleri#bolum-5",
    "name": "Suç ve Ceza - Fyodor Dostoyevski",
    "image": "/images/kitap/suc_ve_ceza_dostoyevski.jpg",
    "paragraf": "Dostoyevski'nin Rusya'nın karınca yürekli sokaklarında geçen bu dramı, suçun psikolojik etkilerini ustaca işler. Kesinlikle okunması gereken klasikler arasında."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-dunya-klasikleri#bolum-4",
    "name": "Karamazov Kardeşler - Fyodor Dostoyevski",
    "image": "/images/kitap/karamazov_kardesler_-_fyodor_dostoyevski.jpg",
    "paragraf": "Dostoyevski'nin bu başyapıtı, insan ruhunun derinliklerini ve etik dilemmalarını ele alır. Filozofik derinliği ile okunması gereken dünya klasikleri nelerdir sorusunu yanıtlar."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-dunya-klasikleri#bolum-3",
    "name": "Büyük Umutlar - Charles Dickens",
    "image": "/images/kitap/buyuk_umutlar_charles_dickens.jpg",
    "paragraf": "Charles Dickens'ın bu ölümsüz eseri, saf umutları ve karanlık gerçekleri ile zengin bir yaşam panaroması sunar. Okunması gereken dünya klasikleri listesi için ideal."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-dunya-klasikleri#bolum-2",
    "name": "Savaş ve Barış - Lev Tolstoy",
    "image": "/images/kitap/savas_ve_baris_tolstoy.jpg",
    "paragraf": "Lev Tolstoy'un bu eşsiz romanı, büyük savaşın ve barışın içinde yaşanan kişisel hikayeleri anlatır. Okunması gereken romanlar arasında, tarihi ve kişisel dramı birleştiren ender eserlerdendir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-dunya-klasikleri#bolum-1",
    "name": "Cesur Yeni Dünya - Aldous Huxley",
    "image": "/images/kitap/cesur_yeni_dunya_-_aldous_huxley.jpg",
    "paragraf": "Aldous Huxley'in bu ütopyan karşıtı romanı, modern toplumdaki bireyin rolüne dair derin sorgulamalar sunar. Okunması gereken 10 dünya klasiği arasında, düşündürücü yapısıyla öne çıkar."
  }
];

const ana_resim = "/images/ana_gorseller/okunmasi_gereken_en_iyi_dunya_klasikleri_kapak.jpg" //! SEN DOLDUR
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