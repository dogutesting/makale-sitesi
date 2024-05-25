
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function OkunmasiGerekenEnİyiFelsefeKitaplariMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "okunmasi-gereken-en-iyi-felsefe-kitaplari";
const baslik = "Okunması Gereken En İyi Felsefe Kitapları";
const metin = "Zihninizde yepyeni ufuklar açacak ve düşünce yapınızı zenginleştirecek felsefi eserlerle yolculuğa çıkmaya hazır mısınız? İşte, tüm zamanların en iyi felsefe kitapları, en iyi felsefe kitapları listemizde sizleri bekliyor. Bu kesinlikle okunması gereken felsefe kitapları, her okurun kütüphanesinde bulunmalı.";
const bitis_metin = "Bu makalemizde okunması gereken, düşünce dünyanızı genişletecek en iyi felsefe kitapları listesini sunduk. Umarız bu eserler sizlere yeni perspektifler kazandırır ve düşünce yapınızı derinleştirir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["okunmasi","gereken","en","i̇yi","felsefe","kitaplari"]; //! BAK
const kategori = "kitap"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T17:39:53+03:00";
const degistirilmeTarihi = "2024-05-25T17:39:53+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari#bolum-10",
    "name": "Ludwig Wittgenstein - Tractatus Logico-Philosophicus",
    "image": "/images/kitap/ludwig_wittgenstein_-_tractatus_logico-philosophicus.jpg",
    "paragraf": "Felsefe tarihinin en çarpıcı eserlerinden biri olan ve en iyi felsefe kitabı olarak değerlendirilen Ludwig Wittgenstein’ın bu yapıtı, dil ve anlam üzerine derinlemesine bir analiz sunar. Düşünme şeklinizi değiştirecek okunması gereken felsefi kitaplardan."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari#bolum-9",
    "name": "Simone de Beauvoir - İkinci Cins",
    "image": "/images/kitap/simone_de_beauvoir_-_ikinci_cins.jpg",
    "paragraf": "Simone de Beauvoir’ın kaleminden çıkan İkinci Cins, feminizmin klasik eserleri arasında yer alır. Toplumsal cinsiyet rolleri ve kadınlığın varoluşsal analizini sunar. Felsefe okumalarınızda en iyi 10 felsefe kitabı arasında bu eseri mutlaka bulundurun."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari#bolum-8",
    "name": "Jean-Paul Sartre - Varlık ve Hiçlik",
    "image": "/images/kitap/jean-paul_sartre_-_varlik_ve_hiclik.png",
    "paragraf": "En iyi felsefe kitapları listemizin bir diğer önemli eseri olan Varlık ve Hiçlik, Sartre’ın eksistansiyalizm üzerine derinlemesine düşüncelerini sunar. İnsan varoluşunu ve özgürlük kavramını ele alır."
  },
  {
    "num": "7",
    "url": "https://www.goodreads.com/book/show/12188.The_World_as_Will_and_Representation",
    "name": "The World as Will and Representation - Arthur Schopenhauer",
    "image": "/images/kitap/the_world_as_will_and_representation_arthur_scopenhauer.jpg",
    "paragraf": "Arthur Schopenhauer'ın İrade ve Temsil Üzerine adlı etkileyici çalışması, irade kavramını ve duyusal temsilin anlamını sorguluyor. Kesinlikle okunması gereken felsefe kitapları arasında yer alıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari#bolum-6",
    "name": "Karl Marx - Kapital",
    "image": "/images/kitap/karl_marx_-_kapital.png",
    "paragraf": "Ekonomi politiğin temellerini sarsan Kapital, Marx’ın düşüncelerini ve kapitalizm eleştirisini içerir. Bu, sadece bir felsefe kitabı değil, aynı zamanda bir toplum bilimi çalışmasıdır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari#bolum-5",
    "name": "John Stuart Mill - Özgürlük Üzerine",
    "image": "/images/kitap/john_stuart_mill_-_ozgurluk_uzerine.jpg",
    "paragraf": "Özgürlük ve bireyin toplumdaki yeri üzerine yoğunlaşan bu kitap, liberal düşünceye önemli katkılarda bulunmuştur. Okunması gereken felsefi kitaplar arasında özel bir yere sahiptir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitapları#bolum-4",
    "name": "Friedrich Nietzsche - Böyle Buyurdu Zerdüşt",
    "image": "/images/kitap/friedrich_nietzsche_-_boyle_buyurdu_zerdust.jpg",
    "paragraf": "Nietzsche'nin bu provokatif eseri, ahlak, toplum ve bireysel varoluş üzerine radikal görüşler sunar. En iyi 10 felsefe kitabı listesinde olmazsa olmazlardan."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari#bolum-3",
    "name": "Immanuel Kant - Saf Aklın Eleştirisi",
    "image": "/images/kitap/immanuel_kant_-_saf_aklin_elestirisi.jpg",
    "paragraf": "Akıl ve deneyim arasındaki ilişkileri irdeleyen bu kapsamlı eser, modern felsefenin temel taşlarından biridir. En iyi felsefe kitapları arasında, Kant’ın bu eseri mutlaka okunmalı."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari#bolum-2",
    "name": "René Descartes - Yöntem Üzerine Konuşma",
    "image": "/images/kitap/rene_descartes_-_yontem_uzerine_konusma.jpg",
    "paragraf": "‘Düşünüyorum, o halde varım’ diyen Descartes, bu eserde bilimsel yöntemin temellerini atar. Felsefeyle ilgilenen herkes için en iyi felsefe kitaplarından biri."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-felsefe-kitaplari#bolum-1",
    "name": "Platon - Devlet",
    "image": "/images/kitap/platon_-_devlet.jpg",
    "paragraf": "Platon’un Devlet’i, adalet, ideal devlet yapısı ve filozof kral gibi konuları tartışır. Tüm zamanların en iyi felsefe kitabı, her felsefe meraklısının başucu kitabı olmalıdır."
  }
];

const ana_resim = "/images/ana_gorseller/okunmasi_gereken_en_iyi_felsefe_kitaplari_kapak.jpg" //! SEN DOLDUR
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