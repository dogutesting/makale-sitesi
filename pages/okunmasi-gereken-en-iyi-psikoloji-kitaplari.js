
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function OkunmasiGerekenEnİyiPsikolojiKitaplariMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "okunmasi-gereken-en-iyi-psikoloji-kitaplari";
const baslik = "Okunması Gereken En İyi Psikoloji Kitapları";
const metin = "Psikoloji dünyasına derinlemesine bir dalış yapmak isteyenler için okunması gereken en iyi psikoloji kitapları listesini hazırladık. Bu liste, zihnimizi ve davranışlarımızı daha iyi anlamamıza yardımcı olan kapsamlı eserler sunuyor.";
const bitis_metin = "Bu makalede, psikoloji alanında okunması gereken ve alanında dönüştürücü nitelikte olan eserleri ele aldık. Her bir kitap, kendi alanında derin bilgiler sunarak farkındalığımızı ve anlayışımızı arttırıyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["okunmasi","gereken","en","i̇yi","psikoloji","kitaplari"]; //! BAK
const kategori = "kitap"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T17:45:25+03:00";
const degistirilmeTarihi = "2024-05-25T17:45:25+03:00";
const addDate = "25.05.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-psikoloji-kitaplari#bolum-10",
    "name": "The Archetypes and The Collective Unconscious - Carl Jung",
    "image": "/images/kitap/the_archetypes_and_the_collective_unconscious_-_carl_jung.jpg",
    "paragraf": "Carl Jung'un eseri, okunması gereken en iyi psikoloji kitapları listemizin son sırasında yer alıyor. Kitap, bilinçaltının ortak sembolleri üzerine derinlemesine analizler sunarak, psikoloji kitap tavsiyeleri arasında öne çıkıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-psikoloji-kitaplari#bolum-9",
    "name": "Emotional Intelligence - Daniel Goleman",
    "image": "/images/kitap/emotional_intelligence_-_daniel_goleman.jpg",
    "paragraf": "Daniel Goleman'ın 'Emotional Intelligence' kitabı, duygusal zekanın gücünü vurgulayarak, psikoloji kitapları öneri listemizde mutlaka yer almalı. Bu eser, duygusal bilinçliliğin önemini anlatıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-psikoloji-kitaplari#bolum-8",
    "name": "The Man Who Mistook His Wife for a Hat - Oliver Sacks",
    "image": "/images/kitap/the_man_who_mistook_his_wife_for_a_hat_-_oliver_sacks.jpg",
    "paragraf": "Oliver Sacks'ın bu etkileyici kitabı, nörolojik durumları anlamamıza yardımcı olur ve okunacak en iyi psikoloji kitapları arasında daima yerini korur."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-psikoloji-kitaplari#bolum-7",
    "name": "Mindsight: The New Science of Personal Transformation - Daniel J. Siegel",
    "image": "/images/kitap/mindsight_the_new_science_of_personal_transformation_-_daniel_j._siegel.jpg",
    "paragraf": "Daniel J. Siegel'in 'Mindsight' kitabı, kişisel dönüşümü ele alıyor. Bu eser, okunması gereken psikoloji kitapları üzerine önerilerde bulunan bir başucu kitabıdır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-psikoloji-kitaplari#bolum-6",
    "name": "Drive: The Surprising Truth About What Motivates Us - Daniel H. Pink",
    "image": "/images/kitap/drive_the_surprising_truth_about_what_motivates_us_-_daniel_h._pink.jpg",
    "paragraf": "Daniel H. Pink'in 'Drive' kitabı, motivasyon ve başarı üzerine çığır açan teoriler sunar ve herkesin mutlaka okunması gereken psikoloji kitapları listesinde bulunmalıdır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-psikoloji-kitaplari#bolum-5",
    "name": "Quiet: The Power of Introverts in a World That Can't Stop Talking - Susan Cain",
    "image": "/images/kitap/quiet_the_power_of_introverts_in_a_world_that_can_t_stop_talking_-_susan_cain.jpg",
    "paragraf": "Susan Cain'in 'Quiet' kitabı, içe dönük kişiliklerin gücünü anlatarak, psikoloji kitap önerileri arasında özellikle dikkat çeker."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-psikoloji-kitaplari#bolum-4",
    "name": "The Power of Habit - Charles Duhigg",
    "image": "/images/kitap/the_power_of_habit_-_charles_duhigg.jpg",
    "paragraf": "'The Power of Habit' kitabı, alışkanlıklarımızın hayatımızı nasıl şekillendirdiği üzerine ilgi çekici bilgiler sunar ve psikoloji kitap tavsiyeleri içerisinde önemli bir yere sahiptir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-psikoloji-kitaplari#bolum-3",
    "name": "Influence: The Psychology of Persuasion - Robert B. Cialdini",
    "image": "/images/kitap/influence_the_psychology_of_persuasion_-_robert_b._cialdini.jpg",
    "paragraf": "Robert B. Cialdini'nin 'Influence' kitabı, ikna psikolojisi üzerine temel bir eserdir ve okunması gereken psikoloji kitapları listesinde üst sıralarda yer alır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-psikoloji-kitaplari#bolum-2",
    "name": "Man's Search for Meaning - Viktor E. Frankl",
    "image": "/images/kitap/man_s_search_for_meaning_-_viktor_e._frankl.jpg",
    "paragraf": "Viktor E. Frankl'in 'Man's Search for Meaning' kitabı, insanın anlam arayışını inceler ve psikoloji kitapları öneri listelerinde vazgeçilmezdir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/okunmasi-gereken-en-iyi-psikoloji-kitaplari#bolum-1",
    "name": "Thinking, Fast and Slow - Daniel Kahneman",
    "image": "/images/kitap/thinking_fast_and_slow_-_daniel_kahneman.jpg",
    "paragraf": "Daniel Kahneman'ın 'Thinking, Fast and Slow' kitabı, karar verme süreçlerimizi etkileyen faktörleri detaylı bir şekilde analiz eder ve mutlaka okunması gereken psikoloji kitapları listemizin zirvesinde yer alır."
  }
];

const ana_resim = "/images/ana_gorseller/okunmasi_gereken_en_iyi_psikoloji_kitaplari_kapak.png" //! SEN DOLDUR
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