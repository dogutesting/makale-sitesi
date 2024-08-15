
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function RussellCroweEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "russell-crowe-en-iyi-10-filmi";
const baslik = "Russell Crowe en iyi 10 filmi";
const metin = "Russell Crowe, sinema dünyasında derin izler bırakmış bir oyuncudur. Onun etkileyici performansları, izleyicilerde kalıcı bir etki yaratır. İşte russell crowe filmleri imdb ve russell crowe en iyi filmleri arasından seçilmiş 10 unutulmaz yapım.";
const bitis_metin = "Bu yazıda, Russell Crowe'un kariyerinin önemli filmlerine göz attık. crowe en iyi filmleri imdb ratingleri ile de dikkat çekiyor. Bu yapımları izleyerek Crowe'un sinemadaki yerini daha iyi anlayabilirsiniz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["russell","crowe","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:28:31+03:00";
const degistirilmeTarihi = "2024-08-09T17:28:31+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1837709",
    "url": "https://enonlar.com/russell-crowe-en-iyi-10-filmibolum-10",
    "name": "Winter's Tale - Kış Masalı",
    "image": "/images/movies/Russell_Crowe_winter's_tale_-_kis_masali.jpg",
    "ozellikler": {
      "Yıl": "2014",
      "Süre": "1 sa. 58 dk.",
      "Kategori": [
        "Fantastik",
        "Dram"
      ],
      "Oyuncular": [
        "Russell Crowe",
        "Colin Farrell",
        "Jessica Brown Findlay"
      ],
      "Yönetmen": "Akiva Goldsman",
      "imdb": "6.1/10",
      "Değerlendirme": "57246",
      "metacritic": "31"
    },
    "paragraf": "Kış Masalı, Russell Crowe'un karanlık tarafını sergilediği farklı bir film. Aşk, büyü ve kaderi iç içe işleyen bu yapımda Crowe, gerek hikayesi gerek görselliği ile sıradışı bir deneyim sunuyor."
  },
  {
    "num": "9",
    "title_id": "tt0758774",
    "url": "https://enonlar.com/russell-crowe-en-iyi-10-filmibolum-9",
    "name": "Body of Lies - Yalanlar Üstüne",
    "image": "/images/movies/Russell_Crowe_body_of_lies_-_yalanlar_ustune.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "2 sa. 8 dk.",
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Oyuncular": [
        "Russell Crowe",
        "Leonardo DiCaprio",
        "Mark Strong"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "7/10",
      "Değerlendirme": "241033",
      "metacritic": "57"
    },
    "paragraf": "Ridley Scott'un yönettiği Yalanlar Üstüne, bir casusluk gerilimi. Russell Crowe, CIA ajanı Ed Hoffman rolüyle izleyici karşısına çıkarken, DiCaprio ile başarılı bir uyum sergiliyor. Film, izleyenlere gerçekçi ve aksiyon dolu sahneler sunuyor."
  },
  {
    "num": "8",
    "title_id": "tt0381849",
    "url": "https://enonlar.com/russell-crowe-en-iyi-10-filmibolum-8",
    "name": "3:10 to Yuma - 3:10 Treni",
    "image": "/images/movies/Russell_Crowe_3_10_to_yuma_-_3_10_treni.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "2 sa. 2 dk.",
      "Kategori": [
        "Vahşi Batı"
      ],
      "Oyuncular": [
        "Russell Crowe",
        "Christian Bale",
        "Ben Foster"
      ],
      "Yönetmen": "James Mangold",
      "imdb": "7.6/10",
      "Değerlendirme": "333807",
      "metacritic": "76"
    },
    "paragraf": "3:10 Treni, Vahşi Batı'nın acımasız dünyasında geçen bir aksiyon ve macera dolu bir film. Russell Crowe, Ben Wade rolüyle suç dünyasının karanlık yüzünü başarıyla yansıtırken Christian Bale ile karşılıklı muazzam bir oyunculuk sergiliyor."
  },
  {
    "num": "7",
    "title_id": "tt0473705",
    "url": "https://enonlar.com/russell-crowe-en-iyi-10-filmibolum-7",
    "name": "State of Play - Devlet Oyunları",
    "image": "/images/movies/Russell_Crowe_state_of_play_-_devlet_oyunlari.jpg",
    "ozellikler": {
      "Yıl": "2009",
      "Süre": "2 sa. 7 dk.",
      "Kategori": [
        "Gerilim",
        "Suç"
      ],
      "Oyuncular": [
        "Russell Crowe",
        "Ben Affleck",
        "Rachel McAdams"
      ],
      "Yönetmen": "Kevin Macdonald",
      "imdb": "7.1/10",
      "Değerlendirme": "161590",
      "metacritic": "64"
    },
    "paragraf": "Devlet Oyunları, politik entrikalarla dolu bir gerilim. Russell Crowe, araştırmacı gazeteci rolüyle olayların içine çekilir ve izleyicilere sürükleyici bir hikaye sunar. Anlatımı ve karakter derinliği, izleyiciyi ekrana kilitliyor."
  },
  {
    "num": "6",
    "title_id": "tt0352248",
    "url": "https://enonlar.com/russell-crowe-en-iyi-10-filmibolum-6",
    "name": "Cinderella Man - Külkedisi Adam",
    "image": "/images/movies/Russell_Crowe_cinderella_man_-_kulkedisi_adam.jpg",
    "ozellikler": {
      "Yıl": "2005",
      "Süre": "2 sa. 24 dk.",
      "Kategori": [
        "Biyografi",
        "Spor"
      ],
      "Oyuncular": [
        "Russell Crowe",
        "Renée Zellweger",
        "Paul Giamatti"
      ],
      "Yönetmen": "Ron Howard",
      "imdb": "8/10",
      "Değerlendirme": "199747",
      "metacritic": "69"
    },
    "paragraf": "Gerçek bir hayat hikayesine dayanan Külkedisi Adam, Russell Crowe'u bir boksör olan James Braddock rolünde izleme fırsatı sunar. Crowe'un ilham veren performansı ve filmdeki anlatım, seyircilere duygusal bir yolculuk yaşatıyor."
  },
  {
    "num": "5",
    "title_id": "tt1707386",
    "url": "https://enonlar.com/russell-crowe-en-iyi-10-filmibolum-5",
    "name": "Les Misérables - Sefiller",
    "image": "/images/movies/Russell_Crowe_les_misérables_-_sefiller.jpg",
    "ozellikler": {
      "Yıl": "2012",
      "Süre": "2 sa. 38 dk.",
      "Kategori": [
        "Müzikal",
        "Dram"
      ],
      "Oyuncular": [
        "Russell Crowe",
        "Hugh Jackman",
        "Anne Hathaway"
      ],
      "Yönetmen": "Tom Hooper",
      "imdb": "7.5/10",
      "Değerlendirme": "348424",
      "metacritic": "63"
    },
    "paragraf": "Victor Hugo'nun klasik romanından uyarlanan Sefiller, müzikal tarihine damga vurmuş bir yapım. Russell Crowe, katı müfettiş Javert rolüyle izleyicilerin karşısına çıkar. Müzikal performansı ve yapımın kalitesi izleyicilere büyük bir keyif sunar."
  },
  {
    "num": "4",
    "title_id": "tt0311113",
    "url": "https://enonlar.com/russell-crowe-en-iyi-10-filmibolum-4",
    "name": "Master and Commander: The Far Side of the World - Uzak Ufuklar",
    "image": "/images/movies/Russell_Crowe_master_and_commander__the_far_side_of_the_world_-_uzak_ufuklar.jpg",
    "ozellikler": {
      "Yıl": "2003",
      "Süre": "2 sa. 18 dk.",
      "Kategori": [
        "Macera",
        "Dram"
      ],
      "Oyuncular": [
        "Russell Crowe",
        "Paul Bettany",
        "Billy Boyd"
      ],
      "Yönetmen": "Peter Weir",
      "imdb": "7.5/10",
      "Değerlendirme": "240388",
      "metacritic": "81"
    },
    "paragraf": "Uzak Ufuklar, denizlerde geçen macera ve stratejinin iç içe olduğu bir yapım. Russell Crowe'un kaptan Jack Aubrey olarak performansı göz dolduruyor ve izleyicilere denizlerin büyülü atmosferini başarıyla aktarıyor."
  },
  {
    "num": "3",
    "title_id": "tt0765429",
    "url": "https://enonlar.com/russell-crowe-en-iyi-10-filmibolum-3",
    "name": "American Gangster - Amerikan Gangsteri",
    "image": "/images/movies/Russell_Crowe_american_gangster_-_amerikan_gangsteri.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "2 sa. 37 dk.",
      "Kategori": [
        "Suç",
        "Dram"
      ],
      "Oyuncular": [
        "Russell Crowe",
        "Denzel Washington",
        "Chiwetel Ejiofor"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "7.8/10",
      "Değerlendirme": "457518",
      "metacritic": "76"
    },
    "paragraf": "Amerikan Gangsteri, suç dünyasının karanlık köşelerine ışık tutan bir film. Russell Crowe, dürüst bir dedektif olan Richie Roberts'ı canlandırırken, Denzel Washington ile sahne paylaşır. Crowe'un performansı filmi belirgin kılan etmenler arasında."
  },
  {
    "num": "2",
    "title_id": "tt0268978",
    "url": "https://enonlar.com/russell-crowe-en-iyi-10-filmibolum-2",
    "name": "A Beautiful Mind - Akıl Oyunları",
    "image": "/images/movies/Russell_Crowe_a_beautiful_mind_-_akil_oyunlari.jpg",
    "ozellikler": {
      "Yıl": "2001",
      "Süre": "2 sa. 15 dk.",
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Oyuncular": [
        "Russell Crowe",
        "Ed Harris",
        "Jennifer Connelly"
      ],
      "Yönetmen": "Ron Howard",
      "imdb": "8.2/10",
      "Değerlendirme": "996202",
      "metacritic": "72"
    },
    "paragraf": "Russell Crowe'un unutulmaz performanslarından biri, John Nash karakterindedir. Akıl Oyunları, Crowe'un canlandırdığı matematik dehasını ve onun kişisel savaşını etkileyici şekilde anlatır. Film, izleyicileri Nash'in zihin dünyasına çekiyor."
  },
  {
    "num": "1",
    "title_id": "tt0172495",
    "url": "https://enonlar.com/russell-crowe-en-iyi-10-filmibolum-1",
    "name": "Gladiator - Gladyatör",
    "image": "/images/movies/Russell_Crowe_gladiator_-_gladyator.jpg",
    "ozellikler": {
      "Yıl": "2000",
      "Süre": "2 sa. 35 dk.",
      "Kategori": [
        "Aksiyon",
        "Dram"
      ],
      "Oyuncular": [
        "Russell Crowe",
        "Joaquin Phoenix",
        "Connie Nielsen"
      ],
      "Yönetmen": "Ridley Scott",
      "imdb": "8.5/10",
      "Değerlendirme": "1647570",
      "metacritic": "67"
    },
    "paragraf": "Gladyatör, sinema tarihinin en ikonik filmlerinden biridir ve Russell Crowe'u zirveye taşıyan yapım olarak bilinir. Maximus Decimus rolüyle Crowe, izleyicilere savaşçı ruhunu ve adalet arayışını muazzam bir şekilde sunar. Bu film, crowe en iyi filmleri arasında özgün bir yere sahiptir."
  }

];

const ana_resim = "/images/ana_gorseller/russell-crowe-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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