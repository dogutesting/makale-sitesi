
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function TimRobbinsEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "tim-robbins-en-iyi-10-filmi";
const baslik = "Tim Robbins en iyi 10 filmi";
const metin = "Tim Robbins, Hollywood'un en sevilen aktörlerinden biridir. Kariyerine birçok başarılı film sığdıran Tim Robbins'in filmleri, genellikle izleyicilere derin hikayeler ve etkileyici performanslar sunar. Bu listede, Tim Robbins filmleri arasından en iyi 10 tanesini sizler için derledik.";
const bitis_metin = "Bu yazıda, Tim Robbins'in kariyerinin en önemli filmlerini inceledik. Tim Robbins filmleri, derin hikayeleri ve etkileyici performanslarıyla izleyicilerin gönlünde taht kurmayı başarmıştır. İzlemediyseniz, bu filmleri keşfetmenizi öneririz.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["tim","robbins","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:16:01+03:00";
const degistirilmeTarihi = "2024-08-16T16:16:01+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/tim-robbins-en-iyi-10-filmi#bolum-10",
    "name": "Arlington Road - Komplo Teorisi",
    "image": "/images/movies/Tim_Robbins_arlington_road_-_komplo_teorisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tim Robbins",
        "Jeff Bridges"
      ],
      "Kategori": [
        "Gerilim",
        "Suç"
      ],
      "Yıl": "1999",
      "Süre": "1 sa. 57 dk.",
      "Yönetmen": "Mark Pellington",
      "imdb": "7.2/10",
      "Değerlendirme": "92635",
      "metacritic": "65"
    },
    "paragraf": "Arlington Road, Tim Robbins oynadığı filmler arasında gerilim dolu bir yapıya sahip. Filmde Jeff Bridges ile birlikte başrolde yer alan Robbins, komşuluk ilişkilerinin karmaşıklığını ve güvensizliği etkileyici bir şekilde yansıtıyor. Tim Robbins en iyi filmleri arasında yer alan bu yapım, izleyicileri adeta koltuklarına mıhlıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/tim-robbins-en-iyi-10-filmi#bolum-9",
    "name": "The Hudsucker Proxy - Şirket",
    "image": "/images/movies/Tim_Robbins_the_hudsucker_proxy_-_sirket.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tim Robbins",
        "Jennifer Jason Leigh"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Yıl": "1994",
      "Süre": "1 sa. 51 dk.",
      "Yönetmen": "Joel Coen",
      "imdb": "7.2/10",
      "Değerlendirme": "85872",
      "metacritic": "53"
    },
    "paragraf": "The Hudsucker Proxy, Tim Robbins'in Coen Kardeşler ile çalıştığı bir komedi-drama filmidir. Bu Tim Robbins filmi, kapitalizmin ve kurumsal hiyerarşinin mizahi bir eleştirisini sunuyor. Tim Robbins imdb sıralamalarında da yer alan film, Robbins'in esprili performansıyla dikkat çekiyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/tim-robbins-en-iyi-10-filmi#bolum-8",
    "name": "Jacob's Ladder - Dehşetin Nefesi",
    "image": "/images/movies/Tim_Robbins_jacob's_ladder_-_dehsetin_nefesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tim Robbins",
        "Elizabeth Peña"
      ],
      "Kategori": [
        "Korku",
        "Drama"
      ],
      "Yıl": "1990",
      "Süre": "1 sa. 53 dk.",
      "Yönetmen": "Adrian Lyne",
      "imdb": "7.4/10",
      "Değerlendirme": "119387",
      "metacritic": "62"
    },
    "paragraf": "Jacob's Ladder, Tim Robbins en iyi filmleri arasında unutulmaz bir yere sahiptir. Robbins, Vietnam Savaşı gazisi olarak psikolojik gerilim içinde mücadele eden bir karakteri canlandırıyor. Tim Robbins imdb değerlendirmelerinde de olumlu notlar alan bu film, izleyicilere tüyler ürpertici bir deneyim sunuyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/tim-robbins-en-iyi-10-filmi#bolum-7",
    "name": "Mystic River - Gizemli Nehir",
    "image": "/images/movies/Tim_Robbins_mystic_river_-_gizemli_nehir.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tim Robbins",
        "Sean Penn"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Yıl": "2003",
      "Süre": "2 sa. 18 dk.",
      "Yönetmen": "Clint Eastwood",
      "imdb": "7.9/10",
      "Değerlendirme": "490453",
      "metacritic": "84"
    },
    "paragraf": "Mystic River, Clint Eastwood yönetmenliğinde karanlık bir suç dramasıdır. Tim Robbins, ödüllü performansıyla bir çete liderini canlandırıyor. Tim Robbins en iyi filmi olarak gösterilen bu yapım, izleyicilere trajedi ve suç dolu bir hikaye sunuyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/tim-robbins-en-iyi-10-filmi#bolum-6",
    "name": "Bull Durham - Aşkın Efsanesi",
    "image": "/images/movies/Tim_Robbins_bull_durham_-_askin_efsanesi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tim Robbins",
        "Kevin Costner",
        "Susan Sarandon"
      ],
      "Kategori": [
        "Romantik",
        "Komedi"
      ],
      "Yıl": "1988",
      "Süre": "1 sa. 48 dk.",
      "Yönetmen": "Ron Shelton",
      "imdb": "7/10",
      "Değerlendirme": "60247",
      "metacritic": "73"
    },
    "paragraf": "Bull Durham, Tim Robbins'in bir beyzbol oyuncusunu canlandırdığı romantik-komedi türünde bir yapımdır. Kevin Costner ve Susan Sarandon ile birlikte rol aldığı bu film, bugün en iyi Tim Robbins filmleri arasında anılmaktadır. Tim Robbins imdb listelerinde de sevilen bu filmde, romantizm ve eğlence dolu bir hikaye anlatılıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/tim-robbins-en-iyi-10-filmi#bolum-5",
    "name": "The Player - Oyuncu",
    "image": "/images/movies/Tim_Robbins_the_player_-_oyuncu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tim Robbins",
        "Greta Scacchi"
      ],
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Yıl": "1992",
      "Süre": "2 sa. 4 dk.",
      "Yönetmen": "Robert Altman",
      "imdb": "7.5/10",
      "Değerlendirme": "66595",
      "metacritic": "86"
    },
    "paragraf": "The Player filmi, Hollywood'un iç yüzünü mizahi bir şekilde ele alıyor. Tim Robbins, bir stüdyo yöneticisini canlandırarak filmde önemli bir rol üstleniyor. Tim Robbins oynadığı filmler arasında dikkat çeken bu yapım, sinema dünyasını etkileyici bir şekilde ortaya koyuyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/tim-robbins-en-iyi-10-filmi#bolum-4",
    "name": "Cadillac Man - Araba Satıcısı",
    "image": "/images/movies/Tim_Robbins_cadillac_man_-_araba_saticisi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tim Robbins",
        "Robin Williams"
      ],
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Yıl": "1990",
      "Süre": "1 sa. 37 dk.",
      "Yönetmen": "Roger Donaldson",
      "imdb": "5.7/10",
      "Değerlendirme": "15895",
      "metacritic": "50"
    },
    "paragraf": "Cadillac Man, Tim Robbins'in Robin Williams ile birlikte çalıştığı bir komedi filmidir. Arabaların dünyasında geçen bu eğlenceli yolculuk, Tim Robbins imdb sıralamalarında da önemli bir yere sahiptir. Tim Robbins en iyi filmi kategorisinde değerlendirilen bu yapım, eğlenceli ve düşündürücü bir hikaye sunuyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/tim-robbins-en-iyi-10-filmi#bolum-3",
    "name": "The Secret Life of Words - Kelimelerin Gizli Yaşamı",
    "image": "/images/movies/Tim_Robbins_the_secret_life_of_words_-_kelimelerin_gizli_yasami.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tim Robbins",
        "Sarah Polley"
      ],
      "Kategori": [
        "Drama",
        "Romantik"
      ],
      "Yıl": "2005",
      "Süre": "1 sa. 55 dk.",
      "Yönetmen": "Isabel Coixet",
      "imdb": "7.4/10",
      "Değerlendirme": "13219",
      "metacritic": "68"
    },
    "paragraf": "The Secret Life of Words, Tim Robbins'in performansıyla dikkat çeken etkileyici bir dramadır. Robbins, sır dolu bir kadının hayatına dokunan yaralı bir işçiyi oynayarak izleyicilere duygusal bir hikaye sunuyor. Tim Robbins en iyi filmleri arasında sayılan bu film, derin ve düşündürücü bir anlatım sunuyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/tim-robbins-en-iyi-10-filmi#bolum-2",
    "name": "The Shawshank Redemption - Esaretin Bedeli",
    "image": "/images/movies/Tim_Robbins_the_shawshank_redemption_-_esaretin_bedeli.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Tim Robbins",
        "Morgan Freeman"
      ],
      "Kategori": [
        "Drama"
      ],
      "Yıl": "1994",
      "Süre": "2 sa. 22 dk.",
      "Yönetmen": "Frank Darabont",
      "imdb": "9.3/10",
      "Değerlendirme": "2928619",
      "metacritic": "82"
    },
    "paragraf": "The Shawshank Redemption, adalet ve dostluk temalarını işleyen unutulmaz bir başyapıttır. Tim Robbins, haksız yere mahkum edilmiş bir karakteri canlandırarak izleyicilere hayatın zorluklarına rağmen umut dolu bir hikaye sunuyor. Tim Robbins imdb zirvesine ulaşan bu film, birçok izleyicinin favorisi."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/tim-robbins-en-iyi-10-filmi#bolum-1",
    "name": "Dead Man Walking - Ölü Adam",
    "image": "/images/movies/Tim_Robbins_dead_man_walking_-_olu_adam.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Susan Sarandon",
        "Sean Penn"
      ],
      "Kategori": [
        "Drama",
        "Suç"
      ],
      "Yıl": "1995",
      "Süre": "2 sa. 2 dk.",
      "Yönetmen": "Tim Robbins",
      "imdb": "7.5/10",
      "Değerlendirme": "102528",
      "metacritic": "80"
    },
    "paragraf": "Dead Man Walking, Tim Robbins en iyi filmi olarak anılan bir yapıttır. Robbins'in yönettiği bu film, ölüm cezasının etik boyutlarını sorgulayan güçlü bir anlatı sunuyor. Tim Robbins oynadığı filmler arasında derin ve düşündürücü bir iz bırakıyor."
  }

];

const ana_resim = "/images/ana_gorseller/tim-robbins-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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