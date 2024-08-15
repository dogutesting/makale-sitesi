
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function GerardButlerEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "gerard-butler-en-iyi-10-filmi";
const baslik = "Gerard Butler En İyi 10 Filmi";
const metin = "Gerard Butler, karizmatik oyunculuğu ile pek çok unutulmaz filme imza attı. Bu yazıda, onun en iyi performanslarını sergilediği, heyecan verici ve etkileyici filmleri sizler için derledik. İşte Gerard Butler filmleri arasında iz bırakmış, gerard butler en iyi filmleri listesi.";
const bitis_metin = "Gerard Butler'ın film kariyerindeki en etkileyici yapımları listeledik. Her biri farklı türde ama aynı derecede etkileyici olan bu filmler, onun çok yönlü oyunculuğunu gösteriyor. İzlemekten keyif alacağınız bu yapımlar, sinema zevkinize hitap edecektir.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["gerard","butler","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:25:12+03:00";
const degistirilmeTarihi = "2024-08-09T17:25:12+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt3300542",
    "url": "https://enonlar.com/gerard-butler-en-iyi-10-filmibolum-10",
    "name": "London Has Fallen - London Has Fallen",
    "image": "/images/movies/Gerard_Butler_london_has_fallen_-_london_has_fallen.jpg",
    "ozellikler": {
      "Yıl": "2016",
      "Süre": "1 sa. 39 dk.",
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Oyuncular": [
        "Gerard Butler",
        "Aaron Eckhart"
      ],
      "Yönetmen": "Babak Najafi",
      "imdb": "5.9/10",
      "Değerlendirme": "171276",
      "metacritic": "28"
    },
    "paragraf": "gerard butler filmleri arasında aksiyon dolu sahneleriyle dikkat çeken London Has Fallen, dünya liderlerine düzenlenen terör saldırısını engellemeye çalışan bir ajanın öyküsünü anlatıyor. Adrenalin dolu bu film, gerard butler en iyi filmleri arasında sayılabilecek bir yapım."
  },
  {
    "num": "9",
    "title_id": "tt1259528",
    "url": "https://enonlar.com/gerard-butler-en-iyi-10-filmibolum-9",
    "name": "Den of Thieves - Suçlular Şehri",
    "image": "/images/movies/Gerard_Butler_den_of_thieves_-_suclular_sehri.jpg",
    "ozellikler": {
      "Yıl": "2018",
      "Süre": "2 sa. 28 dk.",
      "Kategori": [
        "Suç",
        "Gerilim"
      ],
      "Oyuncular": [
        "Gerard Butler",
        "Pablo Schreiber"
      ],
      "Yönetmen": "Christian Gudegast",
      "imdb": "7/10",
      "Değerlendirme": "125293",
      "metacritic": "49"
    },
    "paragraf": "Suçlular Şehri, gerard butler en iyi filmleri arasında yer alabilecek bir soygun hikayesi. Butler, karizmatik ve kurnaz bir dedektif olarak bu aksiyon dolu suç filminde heyecan verici bir performans sergiliyor. Özellikle gerilim ve aksiyon sevenler için ideal."
  },
  {
    "num": "8",
    "title_id": "tt1197624",
    "url": "https://enonlar.com/gerard-butler-en-iyi-10-filmibolum-8",
    "name": "Law Abiding Citizen - Adalet Peşinde",
    "image": "/images/movies/Gerard_Butler_law_abiding_citizen_-_adalet_pesinde.jpg",
    "ozellikler": {
      "Yıl": "2009",
      "Süre": "1 sa. 49 dk.",
      "Kategori": [
        "Suç",
        "Dram",
        "Gerilim"
      ],
      "Oyuncular": [
        "Gerard Butler",
        "Jamie Foxx"
      ],
      "Yönetmen": "F. Gary Gray",
      "imdb": "7.4/10",
      "Değerlendirme": "323728",
      "metacritic": "34"
    },
    "paragraf": "Adalet sisteminin zayıflıklarını vurgulayan bu gerilim dolu film, Gerard Butler'ın etkileyici bir şekilde intikam arayışındaki karakteri canlandırmasıyla unutulmaz. gerard butler filmleri etkileyici senaryosu ve güçlü performanslarıyla izleyiciyi ekran başına kilitliyor."
  },
  {
    "num": "7",
    "title_id": "tt0416449",
    "url": "https://enonlar.com/gerard-butler-en-iyi-10-filmibolum-7",
    "name": "300 - 300 Spartalı",
    "image": "/images/movies/Gerard_Butler_300_-_300_spartali.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "1 sa. 57 dk.",
      "Kategori": [
        "Aksiyon",
        "Dram"
      ],
      "Oyuncular": [
        "Gerard Butler",
        "Lena Headey"
      ],
      "Yönetmen": "Zack Snyder",
      "imdb": "7.6/10",
      "Değerlendirme": "871846",
      "metacritic": "52"
    },
    "paragraf": "gerard butler en iyi filmleri denince akla ilk gelen yapımlardan biri olan 300 Spartalı, epik savaş sahneleri ve Butler'ın efsanevi Kral Leonidas performansı ile unutulmaz bir savaş destanı. Film, sinema tarihine adını altın harflerle yazdırdı."
  },
  {
    "num": "6",
    "title_id": "tt0293508",
    "url": "https://enonlar.com/gerard-butler-en-iyi-10-filmibolum-6",
    "name": "The Phantom of the Opera - Operadaki Hayalet",
    "image": "/images/movies/Gerard_Butler_the_phantom_of_the_opera_-_operadaki_hayalet.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Süre": "2 sa. 23 dk.",
      "Kategori": [
        "Dram",
        "Müzikal",
        "Romantik"
      ],
      "Oyuncular": [
        "Gerard Butler",
        "Emmy Rossum"
      ],
      "Yönetmen": "Joel Schumacher",
      "imdb": "7.2/10",
      "Değerlendirme": "131598",
      "metacritic": "40"
    },
    "paragraf": "Gerard Butler'ın müzikal yeteneklerini sergilediği The Phantom of the Opera, unutulmaz melodiler ve görsel zenginliği ile haneye katkıda bulunuyor. gerard butler filmleri arasında özel bir yere sahip olan bu eser, dramatik yoğunluğuyla izleyiciyi kendine çekiyor."
  },
  {
    "num": "5",
    "title_id": "tt7737786",
    "url": "https://enonlar.com/gerard-butler-en-iyi-10-filmibolum-5",
    "name": "Greenland - Son Sığınak",
    "image": "/images/movies/Gerard_Butler_greenland_-_son_siginak.jpg",
    "ozellikler": {
      "Yıl": "2020",
      "Süre": "1 sa. 59 dk.",
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Oyuncular": [
        "Gerard Butler",
        "Morena Baccarin"
      ],
      "Yönetmen": "Ric Roman Waugh",
      "imdb": "6.4/10",
      "Değerlendirme": "137900",
      "metacritic": "64"
    },
    "paragraf": "Gerard Butler'ın afet temalarının işlendiği performanslarından biri olan Greenland, izleyicilerine soluksuz bir macera sunuyor. gerard butler en iyi filmleri arasında yer edinmiş yapım, dram ve gerilim unsurlarını başarıyla harmanlayarak derin bir etki yaratıyor."
  },
  {
    "num": "4",
    "title_id": "tt6189022",
    "url": "https://enonlar.com/gerard-butler-en-iyi-10-filmibolum-4",
    "name": "Angel Has Fallen - Kod Adı: Angel",
    "image": "/images/movies/Gerard_Butler_angel_has_fallen_-_kod_adi__angel.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Süre": "2 sa.",
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Oyuncular": [
        "Gerard Butler",
        "Morgan Freeman"
      ],
      "Yönetmen": "Ric Roman Waugh",
      "imdb": "6.4/10",
      "Değerlendirme": "112289",
      "metacritic": "45"
    },
    "paragraf": "Kod Adı: Angel, aksiyon ve heyecan severler için gerard butler filmleri arasındaki özel bir seçim. Butler, aksiyon dolu ve sürükleyici sahnelerde özel ajan Mike Banning'i canlandırarak yine unutulmaz bir performans ortaya koyuyor."
  },
  {
    "num": "3",
    "title_id": "tt1032755",
    "url": "https://enonlar.com/gerard-butler-en-iyi-10-filmibolum-3",
    "name": "RocknRolla - RocknRolla",
    "image": "/images/movies/Gerard_Butler_rocknrolla_-_rocknrolla.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "1 sa. 54 dk.",
      "Kategori": [
        "Aksiyon",
        "Suç",
        "Gerilim"
      ],
      "Oyuncular": [
        "Gerard Butler",
        "Tom Wilkinson"
      ],
      "Yönetmen": "Guy Ritchie",
      "imdb": "7.2/10",
      "Değerlendirme": "266566",
      "metacritic": "53"
    },
    "paragraf": "Guy Ritchie'nin eşsiz yönetmenliğiyle RocknRolla, gerard butler en iyi filmleri arasında farklı ve eğlenceli bir noktada yer alıyor. Butler, bu filmde Londra'nın suç dolu dünyasında mücadele eden bir karaktere hayat veriyor."
  },
  {
    "num": "2",
    "title_id": "tt1586752",
    "url": "https://enonlar.com/gerard-butler-en-iyi-10-filmibolum-2",
    "name": "Machine Gun Preacher - Çatışma Alanı",
    "image": "/images/movies/Gerard_Butler_machine_gun_preacher_-_catisma_alani.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "2 sa. 9 dk.",
      "Kategori": [
        "Biyografi",
        "Aksiyon",
        "Dram"
      ],
      "Oyuncular": [
        "Gerard Butler",
        "Michelle Monaghan"
      ],
      "Yönetmen": "Marc Forster",
      "imdb": "6.7/10",
      "Değerlendirme": "69281",
      "metacritic": "43"
    },
    "paragraf": "Gerçek olaylardan ilham alan Machine Gun Preacher, Butler'ın karakter odaklı bir performans sergilediği gerard butler filmleri arasında dikkat çekiyor. Sudan'ın çatışma bölgelerinde geçen etkileyici ve duygusal bir hikaye."
  },
  {
    "num": "1",
    "title_id": "tt1981128",
    "url": "https://enonlar.com/gerard-butler-en-iyi-10-filmibolum-1",
    "name": "Geostorm - Uzaydan Gelen Fırtına",
    "image": "/images/movies/Gerard_Butler_geostorm_-_uzaydan_gelen_firtina.jpg",
    "ozellikler": {
      "Yıl": "2017",
      "Süre": "1 sa. 49 dk.",
      "Kategori": [
        "Aksiyon",
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Oyuncular": [
        "Gerard Butler",
        "Jim Sturgess"
      ],
      "Yönetmen": "Dean Devlin",
      "imdb": "5.3/10",
      "Değerlendirme": "120416",
      "metacritic": "21"
    },
    "paragraf": "Geostorm, aksiyon ve bilim kurgu öğeleriyle gerard butler filmleri arasında unutulmaz bir yere sahip. Butler, dünya çapında kaosa neden olabilecek bir hava kontrol sistemini durdurmaya çalışırken izleyicilere soluksuz bir gerilim sunuyor."
  }

];

const ana_resim = "/images/ana_gorseller/gerard-butler-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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