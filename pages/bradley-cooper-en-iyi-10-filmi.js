
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function BradleyCooperEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "bradley-cooper-en-iyi-10-filmi";
const baslik = "Bradley Cooper en iyi 10 filmi";
const metin = "Bradley Cooper, son yılların en dikkat çekici ve yetenekli aktörlerinden biri. İster aksiyon ister dram olsun, Bradley Cooper filmleri her zaman izleyiciyi etkilemeyi başarıyor. Bu yazımızda, Bradley Cooper en iyi filmlerini sıraladık. İşte, farklı türlerde Bradley Cooper imzasını taşıyan en iyi yapımlar.";
const bitis_metin = "Bu yazımızda, Bradley Cooper'ın başarılarla dolu kariyerindeki en iyi filmlerine göz attık. Siz de Bradley Cooper filmleri arasından favorinizi seçmekte zorluk çektiyseniz, listedeki yapımları yeniden izlemek harika bir fikir olabilir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["bradley","cooper","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:55:59+03:00";
const degistirilmeTarihi = "2024-08-16T16:55:59+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt2503944",
    "url": "https://enonlar.com/bradley-cooper-en-iyi-10-filmibolum-10",
    "name": "Burnt - Çıkış Yok",
    "image": "/images/movies/Bradley_Cooper_burnt_-_cikis_yok.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bradley Cooper",
        "Sienna Miller"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 41 dk.",
      "Yönetmen": "John Wells",
      "imdb": "6.6/10",
      "Değerlendirme": "134431",
      "metacritic": "42"
    },
    "paragraf": "Burnt, Bradley Cooper'ın bir şef olan Adam Jones'u canlandırdığı film. İnişli çıkışlı kariyerine yeni bir başlangıç yapmak isteyen Adam, mutfak dünyasında tekrar zirveye çıkmayı hedefler. Film, Bradley Cooper imdb puanı ile de dikkat çekerken, Bradley Cooper oynadığı filmler arasında özel bir yere sahiptir."
  },
  {
    "num": "9",
    "title_id": "tt2005151",
    "url": "https://enonlar.com/bradley-cooper-en-iyi-10-filmibolum-9",
    "name": "War Dogs - Vurguncular",
    "image": "/images/movies/Bradley_Cooper_war_dogs_-_vurguncular.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bradley Cooper",
        "Miles Teller",
        "Steve Lantz"
      ],
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 54 dk.",
      "Yönetmen": "Todd Phillips",
      "imdb": "7.1/10",
      "Değerlendirme": "262246",
      "metacritic": "57"
    },
    "paragraf": "War Dogs, gerçek bir hikayeye dayanan ve iki genç girişimcinin ABD ordusunun ihalelerinde kurdukları düzen üzerine kurulu. Bradley Cooper bu filmde Efraim Diveroli'yi canlandırıyor ve rolüyle büyük beğeni topluyor. Bu film, Bradley Cooper en iyi filmleri arasında yer alıyor."
  },
  {
    "num": "8",
    "title_id": "tt7959026",
    "url": "https://enonlar.com/bradley-cooper-en-iyi-10-filmibolum-8",
    "name": "The Mule - Kaçakçı",
    "image": "/images/movies/Bradley_Cooper_the_mule_-_kacakci.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bradley Cooper",
        "Clint Eastwood",
        "Patrick L. Reyes"
      ],
      "Kategori": [
        "Dram",
        "Suç"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 56 dk.",
      "Yönetmen": "Clint Eastwood",
      "imdb": "7/10",
      "Değerlendirme": "154689",
      "metacritic": "58"
    },
    "paragraf": "The Mule, bir adamın istemeden uyuşturucu kuryesi olmasını anlatıyor. Bradley Cooper, filmde dedektif Colin Bates'i canlandırıyor. Film Bradley Cooper'ın yeteneğini bir kez daha kanıtlıyor ve Bradley Cooper oynadığı filmler arasında etkileyici bir yapım olarak öne çıkıyor."
  },
  {
    "num": "7",
    "title_id": "tt1517451",
    "url": "https://enonlar.com/bradley-cooper-en-iyi-10-filmibolum-7",
    "name": "A Star Is Born - Bir Yıldız Doğuyor",
    "image": "/images/movies/Bradley_Cooper_a_star_is_born_-_bir_yildiz_doguyor.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bradley Cooper",
        "Lady Gaga"
      ],
      "Kategori": [
        "Dram",
        "Müzik"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 16 dk.",
      "Yönetmen": "Bradley Cooper",
      "imdb": "7.6/10",
      "Değerlendirme": "424301",
      "metacritic": "88"
    },
    "paragraf": "A Star Is Born, Bradley Cooper'ın hem yönetmen koltuğuna oturup hem de başrolü üstlendiği unutulmaz bir yapım. Ally'nin müzik dünyasına adım atarken yaşadığı zorlukları ve aşkını anlatan film, Bradley Cooper en iyi filmi olarak anılıyor. Bradley Cooper imdb açısından da yüksek bir puana sahip."
  },
  {
    "num": "6",
    "title_id": "tt2179136",
    "url": "https://enonlar.com/bradley-cooper-en-iyi-10-filmibolum-6",
    "name": "American Sniper - Keskin Nişancı",
    "image": "/images/movies/Bradley_Cooper_american_sniper_-_keskin_nisanci.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bradley Cooper",
        "Kyle Gallner"
      ],
      "Kategori": [
        "Biyografi",
        "Savaş"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 13 dk.",
      "Yönetmen": "Clint Eastwood",
      "imdb": "7.3/10",
      "Değerlendirme": "535548",
      "metacritic": "73"
    },
    "paragraf": "Amerikan askeri tarihinin en tehlikeli keskin nişancısı olan Chris Kyle'ın hikayesini anlatan American Sniper'da, Bradley Cooper başrol performansı ile göz dolduruyor. Bradley Cooper en iyi filmleri arasında gösterilen bu yapım, izleyenleri derinden etkiliyor ve Bradley Cooper filmleri arasında özel bir konuma sahip."
  },
  {
    "num": "5",
    "title_id": "tt1045658",
    "url": "https://enonlar.com/bradley-cooper-en-iyi-10-filmibolum-5",
    "name": "Silver Linings Playbook - Umut Işığım",
    "image": "/images/movies/Bradley_Cooper_silver_linings_playbook_-_umut_isigim.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bradley Cooper",
        "Jennifer Lawrence"
      ],
      "Kategori": [
        "Komedi",
        "Dram"
      ],
      "Yıl": "2012",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "David O. Russell",
      "imdb": "7.7/10",
      "Değerlendirme": "747575",
      "metacritic": "81"
    },
    "paragraf": "Silver Linings Playbook, psikolojik sorunlarla başa çıkmaya çalışan iki insanın hikayesini anlatıyor. Bradley Cooper, bu filmde Pat karakterini canlandırıyor. Film, duygu dolu anlatımı ve oyunculuklarıyla Bradley Cooper en iyi filmleri arasında izleyicilerin favorisi olmayı başarıyor."
  },
  {
    "num": "4",
    "title_id": "tt2015381",
    "url": "https://enonlar.com/bradley-cooper-en-iyi-10-filmibolum-4",
    "name": "Guardians of the Galaxy - Galaksinin Koruyucuları",
    "image": "/images/movies/Bradley_Cooper_guardians_of_the_galaxy_-_galaksinin_koruyuculari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bradley Cooper",
        "Chris Pratt",
        "Zoe Saldana"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Yıl": "2014",
      "Süre": "2 sa. 1 dk.",
      "Yönetmen": "James Gunn",
      "imdb": "8/10",
      "Değerlendirme": "1285457",
      "metacritic": "76"
    },
    "paragraf": "Guardians of the Galaxy, Marvel evreninde geçen bir macera ve aksiyon dolu hikaye. Bradley Cooper, Rocket adlı konuşan rakunu seslendiriyor ve filme benzersiz bir katkı sağlıyor. Bradley Cooper oynadığı filmler arasında farklı bir duruş sergileyen bu yapım, izleyicileri eğlendiriyor."
  },
  {
    "num": "3",
    "title_id": "tt1800241",
    "url": "https://enonlar.com/bradley-cooper-en-iyi-10-filmibolum-3",
    "name": "American Hustle - Düzenbaz",
    "image": "/images/movies/Bradley_Cooper_american_hustle_-_duzenbaz.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bradley Cooper",
        "Christian Bale"
      ],
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "David O. Russell",
      "imdb": "7.2/10",
      "Değerlendirme": "503221",
      "metacritic": "90"
    },
    "paragraf": "American Hustle, iki dolandırıcının FBI tarafından zorla işbirliğine mecbur bırakılmasını anlatan enteresan bir hikaye. Bradley Cooper burada Richie DiMaso rolüyle komik ve bir o kadar da çekici bir karakter yaratıyor. Bu film, Bradley Cooper imdb değerlendirmesinde yüksek not almış ve Bradley Cooper en iyi filmleri arasında sıkça adından söz ettiriyor."
  },
  {
    "num": "2",
    "title_id": "tt1119646",
    "url": "https://enonlar.com/bradley-cooper-en-iyi-10-filmibolum-2",
    "name": "The Hangover - Felekten Bir Gece",
    "image": "/images/movies/Bradley_Cooper_the_hangover_-_felekten_bir_gece.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bradley Cooper",
        "Ed Helms"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "2009",
      "Süre": "1 sa. 40 dk.",
      "Yönetmen": "Todd Phillips",
      "imdb": "7.7/10",
      "Değerlendirme": "857192",
      "metacritic": "73"
    },
    "paragraf": "The Hangover, başından sonuna kadar kahkaha dolu bir macera sunuyor. Bradley Cooper filmde Phil Wenneck karakterini canlandırıyor ve arkadaşlarıyla yaşadığı çılgınca bir bekârlığa veda partisine götürüyor izleyicileri. Bradley Cooper oynadığı filmler arasında en komik yapımlarından biri olarak Bradley Cooper filmleri içinde unutulmaz bir yere sahip."
  },
  {
    "num": "1",
    "title_id": "tt1219289",
    "url": "https://enonlar.com/bradley-cooper-en-iyi-10-filmibolum-1",
    "name": "Limitless - Limit Yok",
    "image": "/images/movies/Bradley_Cooper_limitless_-_limit_yok.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Bradley Cooper",
        "Robert De Niro"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Yıl": "2011",
      "Süre": "1 sa. 45 dk.",
      "Yönetmen": "Neil Burger",
      "imdb": "7.4/10",
      "Değerlendirme": "617348",
      "metacritic": "59"
    },
    "paragraf": "Limitless, bir hap sayesinde beyninin tüm kapasitesini kullanan bir yazarın hikayesini anlatıyor. Bradley Cooper, Eddie Morra karakteriyle izleyiciye heyecan dolu dakikalar yaşatıyor. Bradley Cooper en iyi filmi olarak kabul edilen Limitless, gerek senaryosu gerekse oyunculuklarıyla Bradley Cooper imdb sıralamasında önemli bir yere sahiptir."
  }

];

const ana_resim = "/images/ana_gorseller/bradley-cooper-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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