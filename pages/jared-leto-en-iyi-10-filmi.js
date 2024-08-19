
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JaredLetoEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "jared-leto-en-iyi-10-filmi";
const baslik = "Jared Leto en iyi 10 filmi";
const metin = "Jared Leto, hem oyunculuğuyla hem de sanat alanındaki çok yönlülüğüyle dikkat çeken bir isim. Sinemada birçok etkileyici karaktere hayat vermiş olan Leto'nun en iyi performanslarını listeledik. İşte Jared Leto'nun oynadığı filmler arasında en dikkat çekici yapımlar.";
const bitis_metin = "Bu yazımızda Jared Leto'nun sinema kariyerindeki en etkileyici filmleri listeledik. Çok yönlü yeteneğiyle farklı türlerde unutulmaz performanslar sergileyen Leto, izleyenlerin kalbinde taht kurmayı başardı.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["jared","leto","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:55:34+03:00";
const degistirilmeTarihi = "2024-08-16T16:55:34+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/jared-leto-en-iyi-10-filmi#bolum-10",
    "name": "Suicide Squad - Gerçek Kötüler",
    "image": "/images/movies/Jared_Leto_suicide_squad_-_gercek_kotuler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jared Leto",
        "Margot Robbie",
        "Will Smith",
        "Jaime FitzSimons"
      ],
      "Kategori": [
        "Aksiyon"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 3 dk.",
      "Yönetmen": "David Ayer",
      "imdb": "5.9/10",
      "Değerlendirme": "727401",
      "metacritic": "40"
    },
    "paragraf": "Jared Leto'nun Joker rolüyle unutulmaz bir performans sergilediği Suicide Squad, aksiyon türünün öne çıkan filmlerinden biridir. Leto'nun bu filmdeki karakter çalışması dikkat çekmiş olsa da film genel olarak karmaşık bir yapıya sahip. Yine de aksiyonu bol filmler arasında yer almayı başaran bu yapım, izleyenleri etkilemeye devam ediyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/jared-leto-en-iyi-10-filmi#bolum-9",
    "name": "Chapter 27",
    "image": "/images/movies/Jared_Leto_chapter_27.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jared Leto",
        "Lindsay Lohan"
      ],
      "Kategori": [
        "Drama"
      ],
      "Yıl": "2007",
      "Süre": "1 sa. 24 dk.",
      "Yönetmen": "J.P. Schaefer",
      "imdb": "5.6/10",
      "Değerlendirme": "11638",
      "metacritic": "32"
    },
    "paragraf": "Chapter 27, Jared Leto'nun Mark Chapman'ı canlandırdığı ve fiziksel dönüşümüyle dikkat çektiği dram filmlerinden biri. Leto, büyük bir kilo alarak rolüne olan bağlılığını göstermiş ve takdir toplamıştır. Jared Leto'nun en iyi filmleri arasında sayılabilecek bir yapım, özellikle başarılı performansı ile öne çıkıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/jared-leto-en-iyi-10-filmi#bolum-8",
    "name": "Lord of War - Savaş Tanrısı",
    "image": "/images/movies/Jared_Leto_lord_of_war_-_savas_tanrisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jared Leto",
        "Nicolas Cage",
        "Bridget Moynahan"
      ],
      "Kategori": [
        "Suç"
      ],
      "Yıl": "2005",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Andrew Niccol",
      "imdb": "7.6/10",
      "Değerlendirme": "340353",
      "metacritic": "62"
    },
    "paragraf": "Jared Leto ve Nicolas Cage gibi güçlü isimleri bir araya getiren Lord of War, silah ticaretinin karanlık yüzünü konu alıyor. Leto, Cage'in kardeşi olarak etkileyici bir performans sergiliyor. Jared Leto filmleri arasında başı çeken bu yapım, izleyicilere düşündürücü bir hikaye sunuyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/jared-leto-en-iyi-10-filmi#bolum-7",
    "name": "Prefontaine",
    "image": "/images/movies/Jared_Leto_prefontaine.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jared Leto",
        "R. Lee Ermey"
      ],
      "Kategori": [
        "Biyografi"
      ],
      "Yıl": "1997",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Steve James",
      "imdb": "6.8/10",
      "Değerlendirme": "7730",
      "metacritic": "55"
    },
    "paragraf": "Jared Leto oynadığı filmler arasında belki de en az bilinenlerden biri olan Prefontaine, spor dünyasının efsanevi isimlerinden Steve Prefontaine'in hayatını konu alıyor. Leto'nun üstün performansıyla dikkat çeken bu biyografik film, gerçek bir hikayeyi izleyicilere sunuyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/jared-leto-en-iyi-10-filmi#bolum-6",
    "name": "Mr. Nobody - Bay Hiçkimse",
    "image": "/images/movies/Jared_Leto_mr._nobody_-_bay_hickimse.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jared Leto",
        "Sarah Polley"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2009",
      "Süre": "2 sa. 21 dk.",
      "Yönetmen": "Jaco Van Dormael",
      "imdb": "7.7/10",
      "Değerlendirme": "247493",
      "metacritic": "63"
    },
    "paragraf": "Jared Leto'nun en iyi filmleri arasında sayılan Mr. Nobody, karmaşık yapısı ve çarpıcı görselliğiyle dikkat çeken bir bilim kurgu yapımıdır. Leto, farklı zaman dilimlerinde bambaşka hayatlar yaşayan bir karakteri canlandırıyor ve izleyenlere çok yönlü bir performans sunuyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/jared-leto-en-iyi-10-filmi#bolum-5",
    "name": "The Outsider - Yabancı",
    "image": "/images/movies/Jared_Leto_the_outsider_-_yabanci.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jared Leto",
        "Tadanobu Asano",
        "Ben Mendelsohn",
        "Bill Camp"
      ],
      "Kategori": [
        "Suç"
      ],
      "Yıl": "2018",
      "Süre": "1 sa.",
      "Yönetmen": "Andrew Bernstein",
      "imdb": "7.6/10",
      "Değerlendirme": "101014"
    },
    "paragraf": "The Outsider, Jared Leto'yu bir Amerikan askerinden Yakuza üyesine dönüşen karmaşık bir karakter olarak karşımıza çıkarıyor. Film, Leto'nun Japonya'nın yeraltı dünyasını keşfeden etkileyici performansıyla dikkat çekiyor. Jared Leto'nun en iyi filmleri arasında olan bu yapım, özgün kurgusu ve atmosferiyle iz bırakan bir yapım."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/jared-leto-en-iyi-10-filmi#bolum-4",
    "name": "Panic Room - Panik Odası",
    "image": "/images/movies/Jared_Leto_panic_room_-_panik_odasi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jared Leto",
        "Jodie Foster",
        "Kristen Stewart"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2002",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "David Fincher",
      "imdb": "6.8/10",
      "Değerlendirme": "299874",
      "metacritic": "65"
    },
    "paragraf": "David Fincher'ın yönettiği Panic Room, gerilim dolu sahneleri ve unutulmaz oyunculuk performansları ile akıllarda yer ediyor. Jared Leto, bu filmde iz bırakıcı bir role sahip. Leto'nun başarısıyla film, izleyenleri koltuklarına çivilemeye başaran bir yapım olarak hafızalara kazınıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/jared-leto-en-iyi-10-filmi#bolum-3",
    "name": "Requiem for a Dream - Bir Rüya İçin Ağıt",
    "image": "/images/movies/Jared_Leto_requiem_for_a_dream_-_bir_ruya_icin_agit.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jared Leto",
        "Jennifer Connelly",
        "Ellen Burstyn"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2000",
      "Süre": "1 sa. 42 dk.",
      "Yönetmen": "Darren Aronofsky",
      "imdb": "8.3/10",
      "Değerlendirme": "909378",
      "metacritic": "71"
    },
    "paragraf": "Jared Leto'nun unutulmaz performansı ile öne çıktığı Requiem for a Dream, dramatik ve çarpıcı bir film olarak bilinir. Leto'nun canlandırdığı karakter, izleyenleri derin bir duygu yolculuğuna çıkarıyor. Jared Leto'nun oynadığı filmler arasında etkileyici bir yapım olan bu film, izleyicileri derinden sarsıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/jared-leto-en-iyi-10-filmi#bolum-2",
    "name": "Blade Runner 2049",
    "image": "/images/movies/Jared_Leto_blade_runner_2049.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jared Leto",
        "Harrison Ford",
        "Ryan Gosling"
      ],
      "Kategori": [
        "Bilim Kurgu"
      ],
      "Yıl": "2017",
      "Süre": "2 sa. 44 dk.",
      "Yönetmen": "Denis Villeneuve",
      "imdb": "8/10",
      "Değerlendirme": "679060",
      "metacritic": "81"
    },
    "paragraf": "Jared Leto'nun bilim kurgu severlerin ilgisini çeken bir başka filmi ise Blade Runner 2049. Bu yapım, çarpıcı görselliği ve etkileyici atmosferiyle sinema dünyasında önemli bir yer ediniyor. Leto'nun bu filmdeki rolü, Jared Leto imdb notunu yükselten bir performans sunuyor ve dikkatleri üzerine çekiyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/jared-leto-en-iyi-10-filmi#bolum-1",
    "name": "Dallas Buyers Club - Sınırsızlar Kulübü",
    "image": "/images/movies/Jared_Leto_dallas_buyers_club_-_sinirsizlar_kulubu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jared Leto",
        "Matthew McConaughey",
        "Jennifer Garner"
      ],
      "Kategori": [
        "Biyografi"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Jean-Marc Vallée",
      "imdb": "7.9/10",
      "Değerlendirme": "523749",
      "metacritic": "77"
    },
    "paragraf": "Jared Leto en iyi filmi denince akla gelen Dallas Buyers Club, sadece Leto'nun değil, aynı zamanda başrol arkadaşı Matthew McConaughey'in de kariyerinde zirve noktalardan biridir. Leto'nun Oscar kazandığı bu performans, Jared Leto en iyi filmleri arasında başı çekiyor ve izleyicileri derinden etkiliyor."
  }

];

const ana_resim = "/images/ana_gorseller/jared-leto-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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