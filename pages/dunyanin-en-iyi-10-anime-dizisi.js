
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DunyaninEnIyi10AnimeDizisiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "dunyanin-en-iyi-10-anime-dizisi";
const baslik = "Dünyanın en iyi 10 anime dizisi";
const metin = "Anime kültürü, dünya çapında milyonlarca izleyiciyi büyülemeyi başarmış bir fenomendir. Bu liste, dünyanın en iyi anime dizileri arasında kendine yer bulmuş olan, hem eleştirmenler hem de izleyiciler tarafından yüksek puanlar almış yapımları içermektedir. En iyi 10 anime dizi seçimini yaparken, hikaye kalitesi, karakter derinliği, görsel stil ve popülerliği göz önünde bulundurduk. İşte en iyi anime diziler, birbirinden eşsiz serilerle dolu bu listemizde sizi neler bekliyor, görelim.";
const bitis_metin = "Bu yazımızda, dünyanın en iyi anime dizilerini, fantastik dünyalarından, epik maceralarına kadar detaylıca inceledik. Her biri, kendi alanında önemli bir yer tutan bu diziler, geniş hayran kitlesi ile popüler kültürde derin izler bırakmıştır. en iyi anime diziler listemizle anime severlerin kesinlikle izlemesi gereken serileri sunduk. İyi seyirler dileriz!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["dunyanin","en","iyi","10","anime","dizisi"]; //! BAK
const kategori = "anime"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-24T19:00:57+03:00";
const degistirilmeTarihi = "2024-04-24T19:00:57+03:00";
const addDate = "24.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-dizisi#bolum-10",
    "name": "My Hero Academia",
    "image": "/images/anime/my_hero_academia.jpg",
    "ozellikler": {
      "Yönetmen": "Kenji Nagasaki",
      "Oyuncular": [
        "Izuku Midoriya",
        "All Might",
        "Katsuki Bakugo"
      ],
      "Kategori": [
        "Aksiyon",
        "Superhero",
        "Shounen"
      ],
      "Süre": "Devam ediyor",
      "Yıl": "2016",
      "imdb": "8.5/10",
      "Değerlendirme": "78000"
    },
    "paragraf": "My Hero Academia, süper kahramanlar ve onların yeteneklerini geliştiren bir okulun öğrencilerini konu alır. Bu dizi, dinamik karakterler ve heyecan verici dövüş sahneleriyle doludur. Süper kahraman temasını yeni ve taze bir bakış açısıyla ele alarak, tüm dünya genelinde geniş bir hayran kitlesine ulaşmıştır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-dizisi#bolum-9",
    "name": "One Piece",
    "image": "/images/anime/one_piece.jpg",
    "ozellikler": {
      "Yönetmen": "Eiichiro Oda",
      "Oyuncular": [
        "Monkey D. Luffy",
        "Roronoa Zoro",
        "Nami"
      ],
      "Kategori": [
        "Macera",
        "Fantastik",
        "Pirat"
      ],
      "Süre": "Devam ediyor",
      "Yıl": "1999",
      "imdb": "9.0/10",
      "Değerlendirme": "234000"
    },
    "paragraf": "One Piece, Eiichiro Oda`nın yaratıcılığı ile hayat bulmuş, uzun soluklu ve dünyanın en iyi anime dizileri arasında gösterilen bir seridir. Macera ve fantastik öğeler içeren bu epik hikaye, izleyicilere denizler üzerinde unutulmaz bir yolculuk sunuyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-dizisi#bolum-8",
    "name": "Tokyo Ghoul",
    "image": "/images/anime/tokyo_ghoul.jpg",
    "ozellikler": {
      "Yönetmen": "Shuhei Morita",
      "Oyuncular": [
        "Ken Kaneki",
        "Touka Kirishima",
        "Rize Kamishiro"
      ],
      "Kategori": [
        "Korku",
        "Psikolojik",
        "Supernatural"
      ],
      "Süre": "1 sezon",
      "Yıl": "2014",
      "imdb": "7.7/10",
      "Değerlendirme": "65000"
    },
    "paragraf": "Tokyo Ghoul, urban fantasy ve karanlık hikayeler arasında ismini en iyi anime diziler listemizde 8. sıraya yazdıran bir başyapıt. Hikayesi, karakter derinliği ve görsel anlamda sınırları zorlayan bu dizi, Tokyo`da gerçeküstü bir mücadelenin kapılarını aralıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-dizisi#bolum-7",
    "name": "Demon Slayer: Kimetsu no Yaiba",
    "image": "/images/anime/demon_slayer_kimetsu_no_yaiba.jpg",
    "ozellikler": {
      "Yönetmen": "Haruo Sotozaki",
      "Oyuncular": [
        "Tanjiro Kamado",
        "Nezuko Kamado",
        "Zenitsu Agatsuma"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Dark Fantasy"
      ],
      "Süre": "1 sezon",
      "Yıl": "2019",
      "imdb": "8.7/10",
      "Değerlendirme": "148000"
    },
    "paragraf": "Demon Slayer: Kimetsu no Yaiba, oldukça yeni olmasına rağmen anında dünya çapında bir fenomene dönüşen ünlü bir seri olarak bizim listemizde 7. sırada. Aksiyon dolu sahneleri ve görsel efektleri ile tanınır, ve her bölümüyle izleyicilere unutulmaz anlar yaşatmaktadır."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-dizisi#bolum-6",
    "name": "Naruto",
    "image": "/images/anime/naruto.jpg",
    "ozellikler": {
      "Yönetmen": "Masashi Kishimoto",
      "Oyuncular": [
        "Naruto Uzumaki",
        "Sasuke Uchiha",
        "Sakura Haruno"
      ],
      "Kategori": [
        "Macera",
        "Fantastik",
        "Ninja"
      ],
      "Süre": "220 bölüm",
      "Yıl": "2002",
      "imdb": "8.4/10",
      "Değerlendirme": "127000"
    },
    "paragraf": "Naruto, ninja dünyasına adım attığımız, macera ve aksiyon dolu bir seridir. Karakter gelişimleri ve sürükleyici hikayesi ile anime severlerin gönlünde taht kurmuş durumda. Bu seri, genç bir ninja olan Naruto Uzumaki`nin, Hokage olma yolundaki mücadelesini konu alır."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-dizisi#bolum-5",
    "name": "Death Note",
    "image": "/images/anime/death_note.jpg",
    "ozellikler": {
      "Yönetmen": "Tetsuro Araki",
      "Oyuncular": [
        "Light Yagami",
        "L",
        "Misa Amane"
      ],
      "Kategori": [
        "Gizem",
        "Psikolojik",
        "Supernatural"
      ],
      "Süre": "37 bölüm",
      "Yıl": "2006",
      "imdb": "8.9/10",
      "Değerlendirme": "378000"
    },
    "paragraf": "Death Note, dünya üzerindeki suçluları yok etme gücüne sahip bir defterin etrafında dönen sıra dışı bir hikayeyi anlatır. Bu kısa süreliğine düşündürücü ve gizem dolu hikayesiyle hem eleştirmenlerden hem de izleyicilerden tam puan almış, en iyi anime diziler listemizde 5. sıraya yerleşmiştir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-dizisi#bolum-4",
    "name": "Fullmetal Alchemist: Brotherhood",
    "image": "/images/anime/fullmetal_alchemist_brotherhood.jpg",
    "ozellikler": {
      "Yönetmen": "Yasuhiro Irie",
      "Oyuncular": [
        "Edward Elric",
        "Alphonse Elric"
      ],
      "Kategori": [
        "Macera",
        "Dark Fantasy",
        "Bilim Kurgu"
      ],
      "Süre": "64 bölüm",
      "Yıl": "2009",
      "imdb": "9.1/10",
      "Değerlendirme": "197000"
    },
    "paragraf": "Fullmetal Alchemist: Brotherhood, iki kardeşin, hatalarından ders çıkartarak kaybettikleri şeyleri geri getirmeye çalıştıkları maceralarını konu alır. Bu seri, derin karakter developmenti ve karmaşık plotlarla sadece animasyon değil, tüm zamanların en iyi televizyon serileri arasında yer almayı başarmıştır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-dizisi#bolum-3",
    "name": "Neon Genesis Evangelion",
    "image": "/images/anime/neon_genesis_evangelion.jpg",
    "ozellikler": {
      "Yönetmen": "Hideaki Anno",
      "Oyuncular": [
        "Shinji Ikari",
        "Rei Ayanami",
        "Asuka Langley Soryu"
      ],
      "Kategori": [
        "Mecha",
        "Apocalyptic",
        "Psychological Drama"
      ],
      "Süre": "26 bölüm + Filmler",
      "Yıl": "1995",
      "imdb": "8.5/10",
      "Değerlendirme": "85000"
    },
    "paragraf": "Neon Genesis Evangelion, psikolojik dram ve büyüleyici hikaye anlatımı ile anime sanatını yeniden tanımlayan bir yapıttır. Bu dizi, insan psikolojisi ve varoluşsal sorgulama temaları üzerine kurulu olup, izleyicilere derinlemesine düşündürücü bir deneyim sunar. Dizi, mecha ve apocalyptik öğelerin ötesinde, karakter gelişimi ve anlatım gücüyle listemizin zirvesinde yer almaktadır."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-dizisi#bolum-2",
    "name": "Cowboy Bebop",
    "image": "/images/anime/cowboy_bebop.jpg",
    "ozellikler": {
      "Yönetmen": "Shinichiro Watanabe",
      "Oyuncular": [
        "Spike Spiegel",
        "Jet Black",
        "Faye Valentine"
      ],
      "Kategori": [
        "Neo-noir",
        "Space Western",
        "Aksiyon"
      ],
      "Süre": "26 bölüm",
      "Yıl": "1998",
      "imdb": "8.9/10",
      "Değerlendirme": "139000"
    },
    "paragraf": "Cowboy Bebop, 90`larda başlayan ve hala geniş bir hayran kitlesi tarafından sevilen, neo-noir ve space western öğelerini içeren nostaljik bir seridir. Bu dizi, karakterleri ve müzikleri ile ünlü olup, kozmik aksiyon sahneleriyle izleyicilere unutulmaz anlar yaşatmış ve listemizde sağlam bir 2. sıra almıştır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-dizisi#bolum-1",
    "name": "Attack on Titan",
    "image": "/images/anime/attack_on_titan.jpg",
    "ozellikler": {
      "Yönetmen": "Tetsuro Araki",
      "Oyuncular": [
        "Eren Yeager",
        "Mikasa Ackermann",
        "Armin Arlert"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Dark Fantasy"
      ],
      "Süre": "4 sezon",
      "Yıl": "2013",
      "imdb": "9.1/10",
      "Değerlendirme": "510000"
    },
    "paragraf": "Attack on Titan, insanlığın dev yaratıklar karşısındaki mücadelesini destansı bir şekilde anlatan bu dizi, adrenalin ve aksiyon dolu sahneleriyle bilinir. Bu epik hikaye, izleyicilere insanların hayatta kalma mücadelesini gözler önüne serer ve listemizde 1. sıraya oturur."
  }
];

const ana_resim = "/images/ana_gorseller/dunyanin_en_iyi_10_anime_dizisi_kapak.jpg" //! SEN DOLDUR
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