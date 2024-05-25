
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function OkunmasiGerekenEnİyiFelsefeKitaplari2Main({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "okunmasi-gereken-en-iyi-felsefe-kitaplari-2";
const baslik = "Okunması Gereken En İyi Felsefe Kitapları 2";
const metin = "Felsefe, düşünce dünyamızın derinliklerine dalmamızı sağlar. Bu listemizde, felsefeye dair kesinlikle okunması gereken felsefe kitapları arasından seçtiğimiz eserleri derledik. Her bir kitap, farklı bir düşünürün gözünden evreni ve insanı anlama çabasını yansıtıyor.";
const bitis_metin = "Bu yazımızda, felsefe dünyasının derinliklerine inmemizi sağlayacak kesinlikle okunması gereken felsefe kitaplarından bahsettik. Her biri, zihinsel ufuklarımızı genişletmenin yanı sıra bizi daha bilinçli bireyler haline getirmeye aday eserlerdir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["okunmasi","gereken","en","i̇yi","felsefe","kitaplari","2"]; //! BAK
const kategori = "kitap"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T17:43:26+03:00";
const degistirilmeTarihi = "2024-05-25T17:43:26+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari-2#bolum-10",
    "name": "Also Sprach Zarathustra - Friedrich Nietzsche",
    "image": "/images/kitap/also_sprach_zarathustra_-_friedrich_nietzsche.jpg",
    "paragraf": "Friedrich Nietzsche'nin başyapıtı olan Also Sprach Zarathustra, okunması gereken felsefi kitaplar listemizin onuncu sırasında yer alıyor. Nietzsche'nin felsefesini ve ütopik vizyonunu sunan bu eser, felsefe ve edebiyat dünyasında derin izler bırakmıştır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari-2#bolum-9",
    "name": "İnsanlar Arasındaki Eşitsizliğin Kaynağı - Jean-Jacques Rousseau",
    "image": "/images/kitap/insanlar_arasindaki_esitsizligin_kaynagi_-_jean-jacques_rousseau.jpg",
    "paragraf": "Jean-Jacques Rousseau'nun İnsanlar Arasındaki Eşitsizliğin Kaynağı adlı eseri, bireysel özgürlük ve toplumsal düzen arasındaki ilişkiyi sorgular. Rossueau'nun gözlem ve düşünceleri, okunması gereken felsefe kitapları arasında önemli bir yere sahiptir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari-2#bolum-8",
    "name": "Ahlak Metafiziğinin Temellendirilmesi - Immanuel Kant",
    "image": "/images/kitap/ahlak_metafiziginin_temellendirilmesi_-_immanuel_kant.jpg",
    "paragraf": "Immanuel Kant'ın Ahlak Metafiziğinin Temellendirilmesi, ahlaki yasaların rasyonel temellerini araştırır. Kant'ın katkıları, kesinlikle okunması gereken felsefe kitapları arasında büyük bir önem taşır."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari-2#bolum-7",
    "name": "Varoluşçuluk - Jean-Paul Sartre",
    "image": "/images/kitap/varolusculuk_-_jean-paul_sartre.jpg",
    "paragraf": "Varoluşçuluk, Jean-Paul Sartre'ın felsefi görüşlerini özetleyen ve bireyin özgürlüğüne odaklanan bir eserdir. Sartre'ın bu kronik eseri, okunması gereken felsefi kitaplar listesinde haklı bir yer buluyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari-2#bolum-6",
    "name": "Hegel ve Modern Toplum - Charles Taylor",
    "image": "/images/kitap/hegel_ve_modern_toplum_-_charles_taylor.jpg",
    "paragraf": "Charles Taylor'ın Hegel ve Modern Toplum isimli analitik çalışması, Hegel'in düşüncelerini modern bağlamda irdelemekte ve felsefenin toplumsal rolünü tartışmaktadır. Taylor'ın eseri, felsefe dünyasında değerli bir kaynak olarak görülmektedir."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari-2#bolum-5",
    "name": "Yeni Dinsel Tahammülsüzlük - Martha Nussbaum",
    "image": "/images/kitap/korku_cagi_-_martha_nussbaum.jpg",
    "paragraf": "Martha Nussbaum'un Yeni Dinsel Tahammülsüzlük: Kaygılı Bir Çağda Korku Siyasetinin Üstesinden Gelmek eseri, günümüzde yaşanan korku ve güvensizlik ortamını ele alır ve bu duyguların üzerimizdeki etkilerini felsefi bir açıdan irdeler. Bu eser, modern çağın zorluklarını anlamak için okunması gereken felsefe kitapları arasında."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari-2#bolum-4",
    "name": "Günlük Hayatın Psikopatolojisi - Sigmund Freud",
    "image": "/images/kitap/gunluk_hayatin_psikopatolojisi_sigmund_freud.jpg",
    "paragraf": "Sigmund Freud'un Günlük Hayatın Psikopatolojisi'ı, bireyin bilinçaltı dünyasını keşfetme yolculuğuna davet ediyor. Freud'un teorileri, felsefenin yanı sıra psikolojiye de büyük katkılarda bulunmuştur."
  },
  {
    "num": "3",
    "url": "https://www.goodreads.com/book/show/301607.The_Problems_of_Philosophy",
    "name": "The Problems of Philosophy - Bertrand Russell",
    "image": "/images/kitap/the_problems_of_philosophy_bertrand_russel.jpg",
    "paragraf": "Bertrand Russell'ın Felsefe Sorunları, felsefenin temel sorunlarını ele alan bir yapıttır. Bu kitap, felsefi düşüncenin köklerini anlamak için harika bir kaynaktır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari-2#bolum-2",
    "name": "Varlık ve Hiçlik - Jean-Paul Sartre",
    "image": "/images/kitap/varlik_ve_hiclik_-_jean-paul_sartre.png",
    "paragraf": "Jean-Paul Sartre'nin Varlık ve Hiçlik adlı eseri, varoluşçuluğun temel metinlerinden biridir. İnsan özgürlüğünü ve varoluşsal seçimlerimizi derinlemesine inceleyen bu kitap, felsefeye ilgi duyan herkes tarafından okunmalıdır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari-2#bolum-1",
    "name": "Zen ve Motosiklet Bakım Sanatı - Robert M. Pirsig",
    "image": "/images/kitap/zen_ve_motosiklet_bakim_sanati_-_robert_m._pirsig.jpg",
    "paragraf": "Listemizin zirvesinde yer alan Zen ve Motosiklet Bakım Sanatı, Robert M. Pirsig tarafından yazılan ve felsefi sorgulamalarla dolu bir başyapıttır. Bu eser, yaşamın anlamı ve kalitenin önemi üzerine derin düşünceler sunar."
  }
];

const ana_resim = "/images/ana_gorseller/okunmasi_gereken_en_iyi_felsefe_kitaplari_kapak_2.jpg" //! SEN DOLDUR
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