
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function OkunmasiGerekenEnİyiKisiselGelisimKitaplariMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "okunmasi-gereken-en-iyi-kisisel-gelisim-kitaplari";
const baslik = "Okunması Gereken En İyi Kişisel Gelişim Kitapları";
const metin = "Bu yazımızda, son zamanların en popüler konularından biri olan kişisel gelişime vakit ayırmak isteyenler için okunması gereken kişisel gelişim kitapları listesini derledik. kişisel gelişim kitap önerileri arasından seçim yaparken en iyi kişisel gelişim kitaplarına yer verdik.";
const bitis_metin = "Bu liste, kişisel gelişim ve kendi potansiyellerini keşfetmek isteyenler için en iyi kaynakları sunmayı amaçlamaktadır. Umarız okunacak en iyi kişisel gelişim kitapları sayesinde yeni içgörüler kazanırsınız.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["okunmasi","gereken","en","i̇yi","kisisel","gelisim","kitaplari"]; //! BAK
const kategori = "kitap"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T17:41:38+03:00";
const degistirilmeTarihi = "2024-05-25T17:41:38+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-kisisel-gelisim-kitaplari#bolum-10",
    "name": "Hayat 3.0 - Max Tegmark",
    "image": "/images/kitap/hayat_3.0_-_max_tegmark.jpg",
    "paragraf": "İşte okunabilecek en iyi kişisel gelişim kitapları içinden öne çıkan bir başlık: Max Tegmark tarafından yazılan Hayat 3.0, yapay zeka ve teknolojinin insan hayatına etkilerini ele alarak, kişisel olarak nasıl gelişebileceğimizi irdeliyor."
  },
  {
    "num": "9",
    "url": "https://www.goodreads.com/book/show/40745.Mindset",
    "name": "Mindset: The New Psychology of Success - Carol S. Dweck",
    "image": "/images/kitap/mindset_carol_dweck.jpg",
    "paragraf": "Carol S. Dweck'in Mindset: The New Psychology of Success adlı kitabı, bireylerin zihinsel süreçlerini ve özgüvenlerini nasıl şekillendirdiğini anlatıyor. Bu kitap, kişisel gelişim alanında önemli bir kaynak olarak kabul edilir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-kisisel-gelisim-kitaplari#bolum-8",
    "name": "İkna Psikolojisi - Robert Cialdini",
    "image": "/images/kitap/ikna_psikolojisi_-_robert_cialdini.jpg",
    "paragraf": "Robert Cialdini'nin İkna Psikolojisi kitabı, insanları nasıl daha iyi ikna edebileceğinizi gösteren toplumsal dinamikleri ve psikolojik yöntemleri açıklar. Bu, okunması gereken en iyi kişisel gelişim kitaplarından biridir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-kisisel-gelisim-kitaplari#bolum-7",
    "name": "Beyin: Kuralları Yeniden Yazmak - David Eagleman",
    "image": "/images/kitap/beyin_kurallari_yeniden_yazmak_-_david_eagleman.jpg",
    "paragraf": "David Eagleman'ın Beyin: Kuralları Yeniden Yazmak kitabı, beynimizin karmaşık yapısını ve bu yapının günlük hayatımız ve davranışlarımız üzerindeki etkilerini keşfetmenin anahtarlarından biridir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-kisisel-gelisim-kitaplari#bolum-6",
    "name": "Grit: Tutku ve Azim - Angela Duckworth",
    "image": "/images/kitap/grit_tutku_ve_azim_-_angela_duckworth.jpg",
    "paragraf": "Angela Duckworth'un Grit kitabı, başarının anahtarının ne zeka ne de yetenek olduğunu, ancak gerçekten tutku ve sürekli bir azim olduğunu savunur. Bu eser okunması gereken kişisel gelişim kitapları arasında önemli bir yere sahiptir."
  },
  {
    "num": "5",
    "url": "https://www.goodreads.com/book/show/30881.The_Monk_Who_Sold_His_Ferrari",
    "name": "The Monk Who Sold His Ferrari - Robin S. Sharma",
    "image": "/images/kitap/the_monk_who_sold_his_ferrari_robin_sharma.jpg",
    "paragraf": "Robin S. Sharma'nın The Monk Who Sold His Ferrari adlı kitabı, kişisel gelişim ve yaşam tarzı değişimi üzerine ilham verici bir hikaye sunar. Bu kitap, okuyucuları kendi potansiyellerini keşfetmeye teşvik eder."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-kisisel-gelisim-kitaplari#bolum-4",
    "name": "Süper İyi Hissetmek - Gabby Bernstein",
    "image": "/images/kitap/super_iyi_hissetmek_-_gabby_bernstein.jpg",
    "paragraf": "Gabby Bernstein'ın Süper İyi Hissetmek kitabı, zihinsel ve duygusal blokları aşarak yaşam kalitemizi nasıl artıracağımızı pratik önerilerle anlatır. Bu kitap, kişisel gelişim kitap önerileri içinde mutlaka okunmalıdır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-kisisel-gelisim-kitaplari#bolum-3",
    "name": "İyi Hissediyorum - David D. Burns",
    "image": "/images/kitap/iyi_hissediyorum_-_david_d._burns.png",
    "paragraf": "David D. Burns'ün İyi Hissediyorum kitabı, bireylerin zihinsel olarak kendilerini nasıl güçlendirebilecekleri üzerine pratik ve etkili yöntemler sunar. Bu, okunması gereken en önemli kişisel gelişim kitaplarından biridir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-kisisel-gelisim-kitaplari#bolum-2",
    "name": "İyi Psikopatın Başarı Rehberi - Kevin Dutton ve Andy McNab",
    "image": "/images/kitap/iyi_psikopatin_basari_rehberi_-_kevin_dutton_ve_andy_mcnab.jpg",
    "paragraf": "Kevin Dutton ve Andy McNab'ın ortak çalışması olan İyi Psikopatın Başarı Rehberi, insan davranışlarının nedenlerini ve bu davranışları nasıl yönetebileceğimizi bilimsel bir perspektifle ele alır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-kisisel-gelisim-kitaplari#bolum-1",
    "name": "Atom Alışkanlıklar - James Clear",
    "image": "/images/kitap/atom_aliskanliklar_-_james_clear.jpg",
    "paragraf": "James Clear'ın Atom Alışkanlıklar kitabı, küçük alışkanlık değişikliklerinin büyük sonuçlar doğurabileceği tezini işler. Bu, kesinlikle okunması gereken kişisel gelişim kitapları listemizin zirvesinde yer alıyor."
  }
];

const ana_resim = "/images/ana_gorseller/kisisel_gelisim_kitabi_kapak.png" //! SEN DOLDUR
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