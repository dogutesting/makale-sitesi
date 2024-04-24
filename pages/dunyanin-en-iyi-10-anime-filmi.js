
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DunyaninEnIyi10AnimeFilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "dunyanin-en-iyi-10-anime-filmi";
const baslik = "Dünyanın en iyi 10 anime filmi";
const metin = "Animasyon dünyası, sadece çocuklar için değil, aynı zamanda büyükler için de büyüleyici eserler sunuyor. Bu makalede, en iyi 10 anime filmi özenle seçilmiş ve listelenmiştir. Her biri, karakter derinliği, kurgusal zenginlik ve görsel şölen sunan bu filmler, dünyanın en iyi anime filmleri arasında yer alıyor. İşte sizlere anime severlerin olmazsa olmaz dediği bu muhteşem eserler sunuluyor.";
const bitis_metin = "Bu makalede, anime dünyasındaki en parlak yıldızlar arasından seçilen dünyanın en iyi 10 anime filmi sunuldu. Her biri kendine has özellikleri ve unutulmaz hikayeleri ile bu filmler, anime severlerin kalplerinde özel bir yer tutmaya devam edecek.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["dunyanin","en","iyi","10","anime","filmi"]; //! BAK
const kategori = "anime"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-24T18:57:19+03:00";
const degistirilmeTarihi = "2024-04-24T18:57:19+03:00";
const addDate = "24.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-filmi#bolum-10",
    "name": "Princess Mononoke",
    "image": "/images/anime/princess_mononoke.jpg",
    "ozellikler": {
      "Yönetmen": "Hayao Miyazaki",
      "Oyuncular": [
        "Yōji Matsuda",
        "Yuriko Ishida",
        "Yūko Tanaka"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Süre": "134 dakika",
      "Yıl": "1997",
      "imdb": "8.4/10",
      "metascore": "76",
      "Değerlendirme": "433000"
    },
    "paragraf": "Princess Mononoke, Hayao Miyazaki'nin yönetmenliğini üstlendiği ve 1997 yılında vizyona giren bu eşsiz anime, fantastik ve macera kategorilerinde öne çıkıyor. Film, insanlar ve doğa arasındaki çatışmayı epik bir şekilde konu alır ve en iyi 10 anime filmi listemizin başlangıcını yapar."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-filmi#bolum-9",
    "name": "Spirited Away",
    "image": "/images/anime/spirited_away.jpg",
    "ozellikler": {
      "Yönetmen": "Hayao Miyazaki",
      "Oyuncular": [
        "Rumi Hiiragi",
        "Miyu Irino",
        "Mari Natsuki"
      ],
      "Kategori": [
        "Fantastik"
      ],
      "Süre": "125 dakika",
      "Yıl": "2001",
      "imdb": "8.6/10",
      "metascore": "96",
      "Değerlendirme": "850000"
    },
    "paragraf": "2001 yapımı Spirited Away, Hayao Miyazaki tarafından hayata geçirilen ve fantastik unsurları barındıran bir başyapıt. Bu film, atmosferi ve derin hikayesi ile dünyanın en iyi anime filmleri listesinde haklı bir yere sahiptir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-filmi#bolum-8",
    "name": "My Neighbor Totoro",
    "image": "/images/anime/my_neighbor_totoro.jpg",
    "ozellikler": {
      "Yönetmen": "Hayao Miyazaki",
      "Oyuncular": [
        "Chika Sakamoto",
        "Noriko Hidaka"
      ],
      "Kategori": [
        "Aile",
        "Fantastik"
      ],
      "Süre": "86 dakika",
      "Yıl": "1988",
      "imdb": "8.2/10",
      "metascore": "86",
      "Değerlendirme": "380000"
    },
    "paragraf": "My Neighbor Totoro, aile ve fantastik öğeleri birleştiren bu zarif animasyon, 1988 yılında Hayao Miyazaki tarafından yaratıldı. Totoro karakteri ile kültürel bir ikon haline gelen film, en iyi 10 anime filmi arasında yerini alıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-filmi#bolum-7",
    "name": "Grave of the Fireflies",
    "image": "/images/anime/grave_of_the_fireflies.jpg",
    "ozellikler": {
      "Yönetmen": "Isao Takahata",
      "Oyuncular": [
        "Tsutomu Tatsumi",
        "Ayano Shiraishi"
      ],
      "Kategori": [
        "Savaş",
        "Drama"
      ],
      "Süre": "89 dakika",
      "Yıl": "1988",
      "imdb": "8.5/10",
      "metascore": "94",
      "Değerlendirme": "310000"
    },
    "paragraf": "Grave of the Fireflies, Isao Takahata'nın yönetmenliğinde 1988 yılında vizyona giren ve savaşın acımasız yüzünü dramatik bir biçimde ele alan bu film, hafızalardan çıkmayan bir anime olarak listemizde yer alıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-filmi#bolum-6",
    "name": "Your Name",
    "image": "/images/anime/your_name.jpg",
    "ozellikler": {
      "Yönetmen": "Makoto Shinkai",
      "Oyuncular": [
        "Ryunosuke Kamiki",
        "Mone Kamishiraishi"
      ],
      "Kategori": [
        "Romantik",
        "Fantastik"
      ],
      "Süre": "106 dakika",
      "Yıl": "2016",
      "imdb": "8.4/10",
      "metascore": "79",
      "Değerlendirme": "320000"
    },
    "paragraf": "Your Name, Makoto Shinkai'nin yönetmenliğini üstlendiği ve romantik ile fantastik öğeleri harmanlayan 2016 yapımı bir anime. Bu duygusal ve etkileyici eser, en iyi 10 anime filmi listesinde önemli bir sıraya sahiptir."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-filmi#bolum-5",
    "name": "Akira",
    "image": "/images/anime/akira.jpg",
    "ozellikler": {
      "Yönetmen": "Katsuhiro Otomo",
      "Oyuncular": [
        "Mitsuo Iwata",
        "Nozomu Sasaki"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Süre": "124 dakika",
      "Yıl": "1988",
      "imdb": "8.0/10",
      "metascore": "68",
      "Değerlendirme": "205000"
    },
    "paragraf": "Akira, 1988 yılında Katsuhiro Otomo tarafından yönetilen ve bilim kurgu ile aksiyon türlerini başarıyla birleştiren bir başyapıt. Bu kült film, dünyanın en iyi anime filmleri listesinde hak ettiği bir yerde duruyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-filmi#bolum-4",
    "name": "Castle in the Sky",
    "image": "/images/anime/castle_in_the_sky.jpg",
    "ozellikler": {
      "Yönetmen": "Hayao Miyazaki",
      "Oyuncular": [
        "Keiko Yokozawa",
        "Mayumi Tanaka"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Süre": "125 dakika",
      "Yıl": "1986",
      "imdb": "8.0/10",
      "metascore": "78",
      "Değerlendirme": "182000"
    },
    "paragraf": "Hayao Miyazaki'nin 1986 yılında yarattığı Castle in the Sky, macera ve fantastik öğeleri ile büyüleyici bir anime serüveni sunar. Bu film, en iyi 10 anime filmi listesindeki yerini uzun yıllar koruyacak."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-filmi#bolum-3",
    "name": "Howl's Moving Castle",
    "image": "/images/anime/howls_moving_castle.jpg",
    "ozellikler": {
      "Yönetmen": "Hayao Miyazaki",
      "Oyuncular": [
        "Chieko Baisho",
        "Takuya Kimura"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Süre": "119 dakika",
      "Yıl": "2004",
      "imdb": "8.2/10",
      "metascore": "82",
      "Değerlendirme": "450000"
    },
    "paragraf": "Howl's Moving Castle, Hayao Miyazaki'nin 2004 yılında sinema dünyasına kazandırdığı ve fantastik öğelerle dolu bir başka muazzam yapıt. Film, sınırları zorlayan animasyonu ve hikayesi ile en iyi 10 anime filmi listesinde üst sıralarda."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-filmi#bolum-2",
    "name": "Nausicaä of the Valley of the Wind",
    "image": "/images/anime/nausicaa_of_the_valley_of_the_wind.jpg",
    "ozellikler": {
      "Yönetmen": "Hayao Miyazaki",
      "Oyuncular": [
        "Sumi Shimamoto",
        "Goro Naya"
      ],
      "Kategori": [
        "Macera",
        "Fantastik"
      ],
      "Süre": "117 dakika",
      "Yıl": "1984",
      "imdb": "8.1/10",
      "metascore": "86",
      "Değerlendirme": "182000"
    },
    "paragraf": "Nausicaä of the Valley of the Wind, Hayao Miyazaki'nin 1984 yılında yarattığı ve post-apokaliptik bir dünyayı ele alan bu anime, macera ve fantastik öğeleri ile izleyicisini büyülüyor. Film, dünyanın en iyi anime filmleri listesinde hak ettiği ikinci sırada."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/dunyanin-en-iyi-10-anime-filmi#bolum-1",
    "name": "Ghost in the Shell",
    "image": "/images/anime/ghost_in_the_shell.jpg",
    "ozellikler": {
      "Yönetmen": "Mamoru Oshii",
      "Oyuncular": [
        "Atsuko Tanaka",
        "Akio Otsuka"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Aksiyon"
      ],
      "Süre": "82 dakika",
      "Yıl": "1995",
      "imdb": "8.0/10",
      "metascore": "76",
      "Değerlendirme": "157000"
    },
    "paragraf": "Ghost in the Shell, 1995 yılında Mamoru Oshii tarafından yönetilen ve bilim kurgu ile aksiyon türlerini mükemmel bir şekilde harmanlayan bu film, anime dünyasında devrim yaratmıştır. Bu başyapıt, en iyi 10 anime filmi listemizin zirvesinde yer alıyor ve anime severler tarafından büyük bir beğeni topluyor."
  }
];

const ana_resim = "/images/ana_gorseller/dunyanin_en_iyi_10_anime_filmi_kapak.jpg" //! SEN DOLDUR
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