
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JeremyIronsEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "jeremy-irons-en-iyi-10-filmi";
const baslik = "Jeremy Irons en iyi 10 filmi";
const metin = "Jeremy Irons, kariyeri boyunca sayısız unutulmaz performansa imza atmış bir aktör. Bugün onun en dikkat çeken ve iz bırakan filmlerinden oluşan bir liste ile karşınızdayız. Jeremy Irons'ın sinema dünyasındaki en iyi katkılarını ve izleyicileri etkileyen performanslarını keşfedelim.";
const bitis_metin = "Bu yazımızda Jeremy Irons'ın sinema dünyasında bıraktığı izleri ve onun en iyi performanslarını ele aldık. Özellikle izleyicilere olan etkisi ve güçlü oyunuyla, Jeremy Irons filmleri kendine özgü bir yer buluyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["jeremy","irons","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:13:15+03:00";
const degistirilmeTarihi = "2024-08-16T16:13:15+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/jeremy-irons-en-iyi-10-filmibolum-10",
    "name": "Batman v Superman: Dawn of Justice - Adaletin Şafağı",
    "image": "/images/movies/Jeremy_Irons_batman_v_superman__dawn_of_justice_-_adaletin_safagi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Irons",
        "Ben Affleck",
        "Henry Cavill"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 31 dk.",
      "Yönetmen": "Zack Snyder",
      "imdb": "6.5/10",
      "Değerlendirme": "757445",
      "metacritic": "44"
    },
    "paragraf": "Jeremy Irons filmleri arasında önemli bir yer tutan Batman v Superman: Dawn of Justice, milyonlarca izleyiciyi kendine çekti. Irons, Bruce Wayne'in sadık uşağı Alfred rolüyle bu filmde unutulmaz bir performans sergilemişti."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/jeremy-irons-en-iyi-10-filmibolum-9",
    "name": "The Man in the Iron Mask - Demir Maskeli Adam",
    "image": "/images/movies/Jeremy_Irons_the_man_in_the_iron_mask_-_demir_maskeli_adam.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Irons",
        "Leonardo DiCaprio"
      ],
      "Kategori": [
        "Dram",
        "Macera"
      ],
      "Yıl": "1998",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "Randall Wallace",
      "imdb": "6.5/10",
      "Değerlendirme": "180449",
      "metacritic": "49"
    },
    "paragraf": "Jeremy Irons en iyi filmleri arasında yer alan bu filmde, Alexandre Dumas'nın klasik eserinin sinema uyarlaması ile seyircilerin karşısına çıkıyor. Irons, yapımda olağanüstü bir kral danışmanını canlandırıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/jeremy-irons-en-iyi-10-filmibolum-8",
    "name": "Dead Ringers - Ölü İkizler",
    "image": "/images/movies/Jeremy_Irons_dead_ringers_-_olu_ikizler.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Irons",
        "Geneviève Bujold"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "1988",
      "Süre": "1 sa. 56 dk.",
      "Yönetmen": "David Cronenberg",
      "imdb": "7.2/10",
      "Değerlendirme": "54329",
      "metacritic": "86"
    },
    "paragraf": "Dead Ringers, Jeremy Irons'ın oynadığı filmler arasında psikolojik gerilim türünde önemli bir yapım. Irons, birbirlerine bağımlı iki problemli kardeşin hem büyüleyici hem de trajik hikayelerini beceriyle canlandırıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/jeremy-irons-en-iyi-10-filmibolum-7",
    "name": "Reversal of Fortune - Talihsiz Kader",
    "image": "/images/movies/Jeremy_Irons_reversal_of_fortune_-_talihsiz_kader.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Irons",
        "Glenn Close"
      ],
      "Kategori": [
        "Biyografi",
        "Dram"
      ],
      "Yıl": "1990",
      "Süre": "1 sa. 51 dk.",
      "Yönetmen": "Barbet Schroeder",
      "imdb": "7.2/10",
      "Değerlendirme": "19122",
      "metacritic": "93"
    },
    "paragraf": "Jeremy Irons'ın bir Oscar kazandığı Reversal of Fortune, zengin bir adamın karısının cinayetiyle suçlanmasını ele alıyor. Irons, bu karmaşık ve katmanlı karakteri başarıyla canlandırarak izleyicileri etkiliyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/jeremy-irons-en-iyi-10-filmibolum-6",
    "name": "The Mission - Görev",
    "image": "/images/movies/Jeremy_Irons_the_mission_-_gorev.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Irons",
        "Robert De Niro"
      ],
      "Kategori": [
        "Dram",
        "Macera"
      ],
      "Yıl": "1986",
      "Süre": "2 sa. 5 dk.",
      "Yönetmen": "Roland Joffé",
      "imdb": "7.4/10",
      "Değerlendirme": "66518",
      "metacritic": "55"
    },
    "paragraf": "Jeremy Irons filmleri listesinde, The Mission filmi, onun güçlü performansını sergilediği bir diğer yapım. Filmde, Latin Amerika'da geçen ve Hristiyan misyonerlerin hikayesini anlatan duygusal bir anlatı sunuluyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/jeremy-irons-en-iyi-10-filmibolum-5",
    "name": "The House of the Spirits - Ruhlar Evi",
    "image": "/images/movies/Jeremy_Irons_the_house_of_the_spirits_-_ruhlar_evi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Irons",
        "Meryl Streep",
        "Maria Conchita Alonso",
        "António Assunção"
      ],
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Yıl": "1993",
      "Süre": "2 sa. 25 dk.",
      "Yönetmen": "Bille August",
      "imdb": "6.9/10",
      "Değerlendirme": "25213"
    },
    "paragraf": "Ruhlar Evi, Jeremy Irons'ın güçlü bir aile dramasında yer aldığı bir başka önemli film. Isabel Allende'nin ünlü romanından uyarlanan bu yapım, zengin bir arazi sahibinin diktatörlük gölgesindeki yaşamı üzerine odaklanıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/jeremy-irons-en-iyi-10-filmibolum-4",
    "name": "Lolita",
    "image": "/images/movies/Jeremy_Irons_lolita.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Irons",
        "Dominique Swain",
        "Melanie Griffith"
      ],
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Yıl": "1997",
      "Süre": "2 sa. 17 dk.",
      "Yönetmen": "Adrian Lyne",
      "imdb": "6.8/10",
      "Değerlendirme": "67655",
      "metacritic": "46"
    },
    "paragraf": "Jeremy Irons en iyi filmleri arasında yer alan Lolita, Vladimir Nabokov'un tartışmalı romanının yeniden çekildiği versiyonu. Irons, bu filmde karmaşık bir aşka kapılan bir edebiyat profesörünü etkileyici bir şekilde canlandırıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/jeremy-irons-en-iyi-10-filmibolum-3",
    "name": "The French Lieutenant's Woman - Fransız Teğmenin Kadını",
    "image": "/images/movies/Jeremy_Irons_the_french_lieutenant's_woman_-_fransiz_tegmenin_kadini.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Irons",
        "Meryl Streep"
      ],
      "Kategori": [
        "Dram",
        "Romantik"
      ],
      "Yıl": "1981",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Karel Reisz",
      "imdb": "6.9/10",
      "Değerlendirme": "15303",
      "metacritic": "64"
    },
    "paragraf": "The French Lieutenant's Woman, Jeremy Irons'ın oynadığı filmler arasında duygusal derinliği olan bir başka dram filmi. Film, karmaşık bir aşk hikayesini geçmiş ve günümüz arasında gidip gelen bir anlatımla sunuyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/jeremy-irons-en-iyi-10-filmibolum-2",
    "name": "Damage - Zarar",
    "image": "/images/movies/Jeremy_Irons_damage_-_zarar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Irons",
        "Juliette Binoche"
      ],
      "Kategori": [
        "Dram",
        "Gerilim"
      ],
      "Yıl": "1992",
      "Süre": "1 sa. 51 dk.",
      "Yönetmen": "Louis Malle",
      "imdb": "6.7/10",
      "Değerlendirme": "20795",
      "metacritic": "71"
    },
    "paragraf": "Zarar, Jeremy Irons filmleri listesinde öne çıkan bir psikolojik gerilim. Irons'ın güçlü performansı, bir politikacının yasak bir aşk ilişkisine sürüklenmesiyle hayatının raydan çıkışını etkileyici bir şekilde anlatıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/jeremy-irons-en-iyi-10-filmibolum-1",
    "name": "The Lion King - Aslan Kral",
    "image": "/images/movies/Jeremy_Irons_the_lion_king_-_aslan_kral.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Jeremy Irons",
        "Rowan Atkinson",
        "Matthew Broderick"
      ],
      "Kategori": [
        "Animasyon",
        "Dram"
      ],
      "Yıl": "1994",
      "Süre": "1 sa. 28 dk.",
      "Yönetmen": "Roger Allers",
      "imdb": "8.5/10",
      "Değerlendirme": "1157376",
      "metacritic": "88"
    },
    "paragraf": "Jeremy Irons filmleri arasında belki de en ikonik olanı Aslan Kral'dır. Irons, Scar karakterine sesiyle hayat vererek milyonlarca izleyiciye unutulmaz bir animasyon klasiğinde rol aldı ve hayranlarının alkışını topladı."
  }

];

const ana_resim = "/images/ana_gorseller/jeremy-irons-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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