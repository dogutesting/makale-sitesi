
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JackieChanEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "jackie-chan-en-iyi-10-filmi";
const baslik = "Jackie Chan en iyi 10 filmi";
const metin = "Jackie Chan, aksiyon ve komedi türünü ustaca harmanlayarak sinema tarihinde eşsiz bir yere sahip. Onun eşsiz yetenekleri ve eğlenceli dövüş sahneleriyle dolu kariyerinde öne çıkan bazı filmleri derledik. İşte, jackie chan filmleri imdb, jackie chan en iyi filmleri ve jackie chan en güzel filmleri arasında yer alan en iyi eserlerini sizin için sıraladık.";
const bitis_metin = "Bu yazıda Jackie Chan'in en iyi yapımlarını inceledik. Her biri, eşsiz aksiyon sahneleri ve mizahıyla sinema dünyasında unutulmaz izler bırakan işlerdir. Jackie Chan filmleri, heyecan verici deneyimler sunmaya devam ediyor.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["jackie","chan","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:15:28+03:00";
const degistirilmeTarihi = "2024-08-09T17:15:28+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt2238032",
    "url": "https://enonlar.com/jackie-chan-en-iyi-10-filmi#bolum-10",
    "name": "Skiptrace - Çin Falı 3",
    "image": "/images/movies/Jackie_Chan_skiptrace_-_cin_fali_3.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Süre": "1 sa. 47 dk.",
      "Kategori": [
        "Aksiyon",
        "Komedi",
        "Macera"
      ],
      "Oyuncular": [
        "Jackie Chan",
        "Johnny Knoxville"
      ],
      "Yönetmen": "Renny Harlin",
      "imdb": "5.6/10",
      "Değerlendirme": "22600",
      "metacritic": "50"
    },
    "paragraf": "Skiptrace, Jackie Chan'in macera dolu dünyasına bir giriş niteliğinde. Çin Falı 3, izleyicilere eğlenceli ve aksiyon dolu anlar sunarken, Chan'in komik dövüş sahneleri ve Johnny Knoxville'in enerjik performansı filmi izlenebilir kılıyor. jackie chan filmleri listesi içinde keyifli bir seyir sunuyor."
  },
  {
    "num": "9",
    "title_id": "tt0093015",
    "url": "https://enonlar.com/jackie-chan-en-iyi-10-filmi#bolum-9",
    "name": "Dragons Forever - Ejder Kardeşliği",
    "image": "/images/movies/Jackie_Chan_dragons_forever_-_ejder_kardesligi.jpg",
    "ozellikler": {
      "Yıl": "1988",
      "Süre": "1 sa. 34 dk.",
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Oyuncular": [
        "Jackie Chan",
        "Sammo Hung",
        "Yuen Biao"
      ],
      "Yönetmen": "Sammo Hung, Corey Yuen",
      "imdb": "7.1/10",
      "Değerlendirme": "9482"
    },
    "paragraf": "Dragons Forever, Hong Kong sinemasının gözde üçlüsü Jackie Chan, Sammo Hung ve Yuen Biao'yu yeniden bir araya getiriyor. Filmde, komedi ve aksiyon sahneleri ustaca harmanlanırken, jackie chan en iyi filmi arayanlar için harika bir seçenek sunuluyor."
  },
  {
    "num": "8",
    "title_id": "tt0105399",
    "url": "https://enonlar.com/jackie-chan-en-iyi-10-filmi#bolum-8",
    "name": "Twin Dragons - İkizler Operasyonu",
    "image": "/images/movies/Jackie_Chan_twin_dragons_-_ikizler_operasyonu.jpg",
    "ozellikler": {
      "Yıl": "1992",
      "Süre": "1 sa. 44 dk.",
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Oyuncular": [
        "Jackie Chan",
        "Maggie Cheung"
      ],
      "Yönetmen": "Ringo Lam, Tsui Hark",
      "imdb": "6.4/10",
      "Değerlendirme": "12906",
      "metacritic": "54"
    },
    "paragraf": "İkizler Operasyonu, Jackie Chan'in karışık kimlikleri ve yanlış anlamaları ele aldığı eğlenceli bir macera. Hem iki farklı karaktere hayat vermesi, hem de bitmek bilmeyen komedi sahneleri ile jackie chan en iyi filmleri arasında yer alıyor."
  },
  {
    "num": "7",
    "title_id": "tt0113326",
    "url": "https://enonlar.com/jackie-chan-en-iyi-10-filmi#bolum-7",
    "name": "Rumble in the Bronx - Bronx'da Patırtı",
    "image": "/images/movies/Jackie_Chan_rumble_in_the_bronx_-_bronx'da_patirti.jpg",
    "ozellikler": {
      "Yıl": "1995",
      "Süre": "1 sa. 44 dk.",
      "Kategori": [
        "Aksiyon",
        "Komedi",
        "Suç"
      ],
      "Oyuncular": [
        "Jackie Chan",
        "Anita Mui"
      ],
      "Yönetmen": "Stanley Tong",
      "imdb": "6.7/10",
      "Değerlendirme": "46507",
      "metacritic": "61"
    },
    "paragraf": "Bronx'da Patırtı, Jackie Chan'in Amerika'da tanınmasını sağlayan önemli bir yapım. Aksiyon ve komedi unsurlarını başarıyla bir araya getiren film, jackie chan en güzel filmleri arasında yer alırken enerjik dövüş sahneleriyle dikkat çekiyor."
  },
  {
    "num": "6",
    "title_id": "tt0089374",
    "url": "https://enonlar.com/jackie-chan-en-iyi-10-filmi#bolum-6",
    "name": "The Police Story - Polis Hikayesi",
    "image": "/images/movies/Jackie_Chan_the_police_story_-_polis_hikayesi.jpg",
    "ozellikler": {
      "Yıl": "1985",
      "Süre": "1 sa. 41 dk.",
      "Kategori": [
        "Aksiyon",
        "Suç",
        "Gerilim"
      ],
      "Oyuncular": [
        "Jackie Chan",
        "Brigitte Lin"
      ],
      "Yönetmen": "Jackie Chan",
      "imdb": "7.5/10",
      "Değerlendirme": "42634",
      "metacritic": "78"
    },
    "paragraf": "Polis Hikayesi, Jackie Chan'in en iyi performanslarından birine ev sahipliği yapıyor. Kendi yönettiği bu aksiyon-macera filminde yer alan tehlikeli sahneler ve güçlü kurgusu, izleyenleri ekran başına kilitlemeyi başarıyor. Jackie chan filmleri imdb sıralamalarında önde gelen bir yapım."
  },
  {
    "num": "5",
    "title_id": "tt0085127",
    "url": "https://enonlar.com/jackie-chan-en-iyi-10-filmi#bolum-5",
    "name": "Project A - A Projesi",
    "image": "/images/movies/Jackie_Chan_project_a_-_a_projesi.jpg",
    "ozellikler": {
      "Yıl": "1983",
      "Süre": "1 sa. 45 dk.",
      "Kategori": [
        "Aksiyon",
        "Komedi",
        "Macera"
      ],
      "Oyuncular": [
        "Jackie Chan",
        "Sammo Hung"
      ],
      "Yönetmen": "Jackie Chan, Sammo Hung",
      "imdb": "7.2/10",
      "Değerlendirme": "18788"
    },
    "paragraf": "A Projesi, deniz korsanlarına karşı verilen mücadeleyi konu alıyor. Jackie Chan'in kendine has mizahı ve aksiyon sahneleriyle izleyicileri eğlendiriyor. Jackie chan en iyi filmi arayanlar için büyük bir klasik olarak karşımıza çıkıyor."
  },
  {
    "num": "4",
    "title_id": "tt0080179",
    "url": "https://enonlar.com/jackie-chan-en-iyi-10-filmi#bolum-4",
    "name": "Drunken Master - Sarhoş Usta",
    "image": "/images/movies/Jackie_Chan_drunken_master_-_sarhos_usta.jpg",
    "ozellikler": {
      "Yıl": "1978",
      "Süre": "1 sa. 51 dk.",
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Oyuncular": [
        "Jackie Chan",
        "Siu Tin Yuen"
      ],
      "Yönetmen": "Woo-Ping Yuen",
      "imdb": "7.4/10",
      "Değerlendirme": "44447",
      "metacritic": "68"
    },
    "paragraf": "Sarhoş Usta, Jackie Chan'in yeteneklerinin tam anlamıyla parladığı bir film olarak dikkat çekiyor. Mizahi öğelerle dolu bu dövüş filmi, chan en iyi filmleri arasında tartışmasız bir yere sahip. Dövüş sanatları ve komedinin mükemmel bir karışımı."
  },
  {
    "num": "3",
    "title_id": "tt0111512",
    "url": "https://enonlar.com/jackie-chan-en-iyi-10-filmi#bolum-3",
    "name": "The Legend of Drunken Master - Usta'nın Dönüşü",
    "image": "/images/movies/Jackie_Chan_the_legend_of_drunken_master_-_usta'nin_donusu.jpg",
    "ozellikler": {
      "Yıl": "1994",
      "Süre": "1 sa. 42 dk.",
      "Kategori": [
        "Aksiyon",
        "Komedi"
      ],
      "Oyuncular": [
        "Jackie Chan",
        "Ho-Sung Pak"
      ],
      "Yönetmen": "Chia-Liang Liu",
      "imdb": "7.5/10",
      "Değerlendirme": "49313",
      "metacritic": "74"
    },
    "paragraf": "Usta'nın Dönüşü, Jackie Chan'in hazinesine eklenen en iyi devam filmlerinden biri. Sarhoş usta tarzıyla dövüşlerini göstererek, jackie chan en iyi filmleri arasında tutkulu dövüş sahneleri ile tanınıyor. Hayranları için hiç bitmeyen bir aksiyon ziyafeti."
  },
  {
    "num": "2",
    "title_id": "tt0104558",
    "url": "https://enonlar.com/jackie-chan-en-iyi-10-filmi#bolum-2",
    "name": "Police Story 3: Super Cop - Süper Polis",
    "image": "/images/movies/Jackie_Chan_police_story_3__super_cop_-_super_polis.jpg",
    "ozellikler": {
      "Yıl": "1992",
      "Süre": "1 sa. 35 dk.",
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Oyuncular": [
        "Jackie Chan",
        "Michelle Yeoh"
      ],
      "Yönetmen": "Stanley Tong",
      "imdb": "6.9/10",
      "Değerlendirme": "24609"
    },
    "paragraf": "Süper Polis, Jackie Chan'in başarılı Police Story serisinin üçüncü filmidir. Michelle Yeoh'un güçlü performansıyla daha da güçlenen film, jackie chan en iyi filmi olduğu düşünülmektedir. Aksiyon dolu olay örgüsü ve izleyiciyi etkileyen dövüş kareografileriyle dikkat çekiyor."
  },
  {
    "num": "1",
    "title_id": "tt0120812",
    "url": "https://enonlar.com/jackie-chan-en-iyi-10-filmi#bolum-1",
    "name": "Rush Hour - Bitirim İkili",
    "image": "/images/movies/Jackie_Chan_rush_hour_-_bitirim_ikili.jpg",
    "ozellikler": {
      "Yıl": "1998",
      "Süre": "1 sa. 38 dk.",
      "Kategori": [
        "Aksiyon",
        "Komedi",
        "Suç"
      ],
      "Oyuncular": [
        "Jackie Chan",
        "Chris Tucker"
      ],
      "Yönetmen": "Brett Ratner",
      "imdb": "7/10",
      "Değerlendirme": "299296",
      "metacritic": "61"
    },
    "paragraf": "Bitirim İkili, Jackie Chan ve Chris Tucker'ın uyumuyla devleşen bir film. Aksiyon ve komedi türünde izleyicilere unutulmaz anlar sunan bu film, tüm dünyada büyük başarı elde etti. Jackie chan en iyi filmleri listesinde zirvede olması şaşırtıcı değil."
  }

];

const ana_resim = "/images/ana_gorseller/jackie-chan-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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