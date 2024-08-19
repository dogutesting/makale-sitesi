
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function GuyPearceEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "guy-pearce-en-iyi-10-filmi";
const baslik = "Guy Pearce en iyi 10 filmi";
const metin = "Guy Pearce, sinema dünyasında birçok ikonik karaktere hayat vermiş bir aktördür. Kariyerinde iz bırakan pek çok yapım vardır. Bu listede, Guy Pearce filmleri arasındaki en dikkat çekici yapımları derledik. İşte Guy Pearce oynadığı filmler arasından öne çıkan 10 muhteşem film sizlerle.";
const bitis_metin = "Bu yazımızda, Guy Pearce en iyi filmleri listesini sizler için derledik. Kariyerinde birçok unutulmaz esere imza atan aktör, izleyicilere çeşitli türlerde zengin deneyimler sunuyor. Umarız bu filmler, sinema keyfinizi artırır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["guy","pearce","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:59:15+03:00";
const degistirilmeTarihi = "2024-08-16T16:59:15+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/guy-pearce-en-iyi-10-filmi#bolum-10",
    "name": "Christmas Carol - Bir Noel Şarkısı",
    "image": "/images/movies/Guy_Pearce_christmas_carol_-_bir_noel_sarkisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Guy Pearce",
        "Lee Van Cleef",
        "Andy Serkis"
      ],
      "Kategori": [
        "Animasyon",
        "Dram"
      ],
      "Yıl": "2019",
      "Süre": "43 dk.",
      "Yönetmen": "Nick Murphy",
      "imdb": "7.3/10",
      "Değerlendirme": "12601"
    },
    "paragraf": "Christmas Carol - Bir Noel Şarkısı, klasik hikayenin modern bir uyarlaması olarak karşımıza çıkıyor. Guy Pearce, Ebenezer Scrooge rolünde, izleyicilere hem dramatik hem de duygusal anlar sunuyor. Bu filmde Guy Pearce en iyi filmleri arasında farklı bir deneyim sunarak izleyicileri etkiliyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/guy-pearce-en-iyi-10-filmi#bolum-9",
    "name": "The Rover",
    "image": "/images/movies/Guy_Pearce_the_rover.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Guy Pearce",
        "Lee Van Cleef",
        "Chan Kien"
      ],
      "Kategori": [
        "Aksiyon",
        "Dram"
      ],
      "Yıl": "2014",
      "Süre": "1 sa. 43 dk.",
      "Yönetmen": "David Michôd",
      "imdb": "6.4/10",
      "Değerlendirme": "51852",
      "metacritic": "64"
    },
    "paragraf": "The Rover filmi, Guy Pearce'ın en etkileyici performanslarından birini sergilediği post-apokaliptik bir yapımdır. Guy Pearce filmleri içinde sertliği ve oyunculuğuyla dikkat çeken eser, oyuncunun sınırlarını zorladığı projelerden biri olarak öne çıkıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/guy-pearce-en-iyi-10-filmi#bolum-8",
    "name": "Lockout - İsyan",
    "image": "/images/movies/Guy_Pearce_lockout_-_isyan.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Guy Pearce",
        "Lee Van Cleef",
        "Maggie Grace"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 35 dk.",
      "Yönetmen": "James Mather",
      "imdb": "6/10",
      "Değerlendirme": "101281",
      "metacritic": "48"
    },
    "paragraf": "Lockout, uzayda geçen bir hapishane isyanını konu alır ve Guy Pearce'ın cesur karakteriyle dikkat çeker. Guy Pearce oynadığı filmler içinde aksiyon dolu hikayesi ve eğlenceli sahneleriyle izleyicilere seyir zevki sunar."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/guy-pearce-en-iyi-10-filmi#bolum-7",
    "name": "Animal Kingdom - Hayvan Krallığı",
    "image": "/images/movies/Guy_Pearce_animal_kingdom_-_hayvan_kralligi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Guy Pearce",
        "Lee Van Cleef",
        "James Frecheville",
        "Bryce Lindemann"
      ],
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "David Michôd",
      "imdb": "7.2/10",
      "Değerlendirme": "60975",
      "metacritic": "83"
    },
    "paragraf": "Animal Kingdom, Avustralya'nın suç dolu dünyasında geçen bir hikayeyi anlatır. Guy Pearce, dedektif karakteriyle yüksek gerilimli sahnelerde yeteneğini gözler önüne serer ve bu film, Guy Pearce imdb puanına bakıldığında da oldukça takdir edilmiştir."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/guy-pearce-en-iyi-10-filmi#bolum-6",
    "name": "Genius",
    "image": "/images/movies/Guy_Pearce_genius.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Guy Pearce",
        "Lee Van Cleef",
        "Colin Firth",
        "Jude Law"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "2016",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Michael Grandage",
      "imdb": "6.5/10",
      "Değerlendirme": "21571",
      "metacritic": "56"
    },
    "paragraf": "Genius filmi, edebiyat dünyasının önemli figürlerini gözler önüne seren bir biyografi filmidir. Guy Pearce, başarılı performansıyla bu filmin parlayan yıldızlarından biri olarak öne çıkıyor. Guy Pearce en iyi filmi arasında yer alacak bir yapım."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/guy-pearce-en-iyi-10-filmi#bolum-5",
    "name": "Memento - Akıl Defteri",
    "image": "/images/movies/Guy_Pearce_memento_-_akil_defteri.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Guy Pearce",
        "Lee Van Cleef",
        "Carrie-Anne Moss"
      ],
      "Kategori": [
        "Gizem",
        "Gerilim"
      ],
      "Yıl": "2000",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Christopher Nolan",
      "imdb": "8.4/10",
      "Değerlendirme": "1337156",
      "metacritic": "83"
    },
    "paragraf": "Memento, Guy Pearce'ın hafızasını kaybeden bir adamı canlandırdığı, sinema dünyasında önemli bir yere sahip olan filmdir. Guy Pearce en iyi filmleri arasında yer alan bu yapım, izleyiciyi düşündüren ve sürükleyen bir hikayeye sahiptir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/guy-pearce-en-iyi-10-filmi#bolum-4",
    "name": "LA Confidential - Los Angeles Sırları",
    "image": "/images/movies/Guy_Pearce_la_confidential_-_los_angeles_sirlari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Guy Pearce",
        "Lee Van Cleef",
        "Kevin Spacey",
        "Russell Crowe"
      ],
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Yıl": "1997",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "Curtis Hanson",
      "imdb": "8.2/10",
      "Değerlendirme": "623572",
      "metacritic": "91"
    },
    "paragraf": "LA Confidential, 1950'lerin Los Angeles'ında geçen suç dolu olayları anlatan bir filmdir. Guy Pearce bu filmde, ince işlenmiş bir dedektif karakterine hayat veriyor. Guy Pearce imdb puanının yüksekliği ile dikkat çeken bu film, onun kariyerinde önemli bir yer ediyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/guy-pearce-en-iyi-10-filmi#bolum-3",
    "name": "Iron Man 3 - Demir Adam 3",
    "image": "/images/movies/Guy_Pearce_iron_man_3_-_demir_adam_3.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Guy Pearce",
        "Lee Van Cleef",
        "Robert Downey Jr.",
        "Gwyneth Paltrow"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2013",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "Shane Black",
      "imdb": "7.1/10",
      "Değerlendirme": "908560",
      "metacritic": "62"
    },
    "paragraf": "Iron Man 3, bir Marvel filmi olarak Guy Pearce'ın kötü adam karakteri Aldrich Killian'a hayat verdiği bir yapım. Guy Pearce oynadığı filmler arasında farklı bir janrda yer alan bu film, aksiyon ve macera dolu sahneleriyle unutulmaz."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/guy-pearce-en-iyi-10-filmi#bolum-2",
    "name": "The Proposition - Teklif",
    "image": "/images/movies/Guy_Pearce_the_proposition_-_teklif.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Guy Pearce",
        "Lee Van Cleef",
        "Richard Wilson",
        "Noah Taylor"
      ],
      "Kategori": [
        "Vahşi Batı",
        "Dram"
      ],
      "Yıl": "2005",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "John Hillcoat",
      "imdb": "7.3/10",
      "Değerlendirme": "55405",
      "metacritic": "73"
    },
    "paragraf": "The Proposition, Vahşi Batı'nın acımasızlıklarını ve bir adamın hayatta kalma mücadelesini konu edinen bir film. Guy Pearce bu dramatik hikayede başrolü üstleniyor ve izleyicilere güçlü bir performans sunuyor. Guy Pearce en iyi filmleri arasında özel bir yeri olan bu film, iz bırakan yapımlardan biri."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/guy-pearce-en-iyi-10-filmi#bolum-1",
    "name": "The King's Speech - Zoraki Kral",
    "image": "/images/movies/Guy_Pearce_the_king's_speech_-_zoraki_kral.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Guy Pearce",
        "Lee Van Cleef",
        "Colin Firth",
        "Helena Bonham Carter"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2010",
      "Süre": "1 sa. 58 dk.",
      "Yönetmen": "Tom Hooper",
      "imdb": "8/10",
      "Değerlendirme": "711738",
      "metacritic": "88"
    },
    "paragraf": "The King's Speech, nüfuzlu bir liderin konuşma zorluklarını yenme sürecini anlatan ve birçok ödül kazanmış bir başyapıttır. Guy Pearce, bu filmde Kral VI. George'un hikayesini etkileyici bir şekilde canlandırıyor. Guy Pearce imdb değerlendirmeleri arasında yüksek notlar almış bu film, onun en iyi performanslarından biri."
  }

];

const ana_resim = "/images/ana_gorseller/guy-pearce-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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