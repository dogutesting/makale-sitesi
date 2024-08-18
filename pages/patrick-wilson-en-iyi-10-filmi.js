
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function PatrickWilsonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "patrick-wilson-en-iyi-10-filmi";
const baslik = "Patrick Wilson en iyi 10 filmi";
const metin = "Patrick Wilson, kariyerinde farklı türlerde birçok başarılı projeye imza atmıştır. Bu listede, Patrick Wilson filmleri arasında en çok öne çıkan ve izleyiciler tarafından beğenilenleri sıralayacağız. Patrick Wilson en iyi filmleri listesini oluştururken, Patrick Wilson imdb puanlarına da dikkat ettik.";
const bitis_metin = "Patrick Wilson'ın filmografisi çok yönlülüğü ve başarıları ile dolu. Bu listede Patrick Wilson en iyi filmlerini sıraladık. Umarız bu liste, Patrick Wilson oynadığı filmler hakkında daha fazla bilgi edinmenizi sağlamıştır. İyi seyirler dileriz!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["patrick","wilson","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:44:18+03:00";
const degistirilmeTarihi = "2024-08-16T16:44:18+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/patrick-wilson-en-iyi-10-filmibolum-10",
    "name": "The Commuter - Yolcu",
    "image": "/images/movies/Patrick_Wilson_the_commuter_-_yolcu.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Patrick Wilson",
        "Lee Van Cleef",
        "Liam Neeson",
        "Vera Farmiga"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Yıl": "2018",
      "Süre": "1 sa. 44 dk.",
      "Yönetmen": "Jaume Collet-Serra",
      "imdb": "6.3/10",
      "Değerlendirme": "126652",
      "metacritic": "56"
    },
    "paragraf": "The Commuter, Patrick Wilson'ın gerilim dolu filmlerinden biridir. İyi bir tempo ve sürükleyici hikayesi sayesinde izleyicileri ekrana kilitleyen yapım, Wilson'ın başarılı oyunculuğuyla daha da etkileyici hale gelir. Patrick Wilson en iyi filmi denildiğinde akıllara gelebilecek yapımlardandır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/patrick-wilson-en-iyi-10-filmibolum-9",
    "name": "Bone Tomahawk - Kemik Balta",
    "image": "/images/movies/Patrick_Wilson_bone_tomahawk_-_kemik_balta.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Patrick Wilson",
        "Lee Van Cleef",
        "Kurt Russell"
      ],
      "Kategori": [
        "Vahşi Batı"
      ],
      "Yıl": "2015",
      "Süre": "2 sa. 12 dk.",
      "Yönetmen": "S. Craig Zahler",
      "imdb": "7.1/10",
      "Değerlendirme": "122364",
      "metacritic": "72"
    },
    "paragraf": "Bone Tomahawk, vahşi batı temasıyla dikkat çeken ve Patrick Wilson'ın oyunculuğu ile beğenilen bir filmdir. Film, hem vahşi batı hem de korku unsurlarını harmanlayarak izleyicilere benzersiz bir deneyim sunmaktadır. Patrick Wilson imdb puanı da oldukça yüksek."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/patrick-wilson-en-iyi-10-filmibolum-8",
    "name": "Insidious: Chapter 2 - Ruhlar Bölgesi: Bölüm 2",
    "image": "/images/movies/Patrick_Wilson_insidious__chapter_2_-_ruhlar_bolgesi__bolum_2.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Patrick Wilson",
        "Lee Van Cleef",
        "Rose Byrne"
      ],
      "Kategori": [
        "Korku"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "James Wan",
      "imdb": "6.6/10",
      "Değerlendirme": "190744",
      "metacritic": "40"
    },
    "paragraf": "Insidious serisinin başarılı devam filmi, korku türünün başarısı olarak kabul ediliyor. Patrick Wilson'ın korku filmlerine olan yatkınlığı ve performansı bu filmde de izleyicileri etkiliyor. Patrick Wilson oynadığı filmler arasında sevilen bir yapım."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/patrick-wilson-en-iyi-10-filmibolum-7",
    "name": "Aquaman",
    "image": "/images/movies/Patrick_Wilson_aquaman.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Patrick Wilson",
        "Lee Van Cleef",
        "Jason Momoa",
        "Amber Heard"
      ],
      "Kategori": [
        "Süperkahraman"
      ],
      "Yıl": "2018",
      "Süre": "2 sa. 23 dk.",
      "Yönetmen": "James Wan",
      "imdb": "6.8/10",
      "Değerlendirme": "526066",
      "metacritic": "55"
    },
    "paragraf": "DC evreninin sevilen yapımlarından Aquaman, Patrick Wilson'ın performansıyla zenginleşiyor. Görsel efektleri ve aksiyon sahneleriyle dolu film, izleyicilere muhteşem bir deneyim sunuyor. Patrick Wilson en iyi filmleri arasında gösterilen bu yapım, büyük ilgi görmüştür."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/patrick-wilson-en-iyi-10-filmibolum-6",
    "name": "Watchmen",
    "image": "/images/movies/Patrick_Wilson_watchmen.jpg",
    "ozellikler": {
        "Oyuncular": [
            "Patrick Wilson",
            "Jackie Earle Haley",
            "Malin Åkerman",
            "Jeffrey Dean Morgan"
        ],
        "Kategori": [
            "Aksiyon",
            "Dram",
            "Bilim Kurgu"
        ],
        "Yıl": "2009",
        "Süre": "2 sa. 42 dk.",
        "Yönetmen": "Zack Snyder",
        "imdb": "7.6/10",
        "Değerlendirme": "531,456",
        "metacritic": "56"
    },
    "paragraf": "Watchmen, alternatif bir tarihte geçen ve süper kahramanların toplumdaki yerini sorgulayan bir film. Patrick Wilson, Nite Owl olarak bilinen Dan Dreiberg rolüyle filmde öne çıkıyor. Bu yapım, Wilson'ın aksiyon ve dram türlerindeki başarısını gözler önüne seriyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/patrick-wilson-en-iyi-10-filmibolum-5",
    "name": "The Conjuring: The Devil Made Me Do It - Korku Seansı 3: Katil Şeytan",
    "image": "/images/movies/Patrick_Wilson_the_conjuring__the_devil_made_me_do_it_-_korku_seansi_3__katil_seytan.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Patrick Wilson",
        "Lee Van Cleef",
        "Vera Farmiga"
      ],
      "Kategori": [
        "Korku"
      ],
      "Yıl": "2021",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "Michael Chaves",
      "imdb": "6.3/10",
      "Değerlendirme": "142716",
      "metacritic": "53"
    },
    "paragraf": "The Conjuring serisinin üçüncü filmi, Patrick Wilson'ın korku türündeki başarısını bir kez daha kanıtlıyor. Gerçek bir hikayeye dayanan yapım, izleyicilere tüyler ürpertici anlar yaşatıyor. Patrick Wilson imdb puanının yüksek olduğu, izleyiciler tarafından beğenilen bir filmdir."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/patrick-wilson-en-iyi-10-filmibolum-4",
    "name": "Passengers",
    "image": "/images/movies/Patrick_Wilson_passengers_2008.jpg",
    "ozellikler": {
        "Oyuncular": [
            "Patrick Wilson",
            "Anne Hathaway",
            "David Morse",
            "Andre Braugher"
        ],
        "Kategori": [
            "Gerilim",
            "Dram",
            "Gizem"
        ],
        "Yıl": "2008",
        "Süre": "1 sa. 33 dk.",
        "Yönetmen": "Rodrigo García",
        "imdb": "5.8/10",
        "Değerlendirme": "40456",
        "metacritic": "40"
    },
    "paragraf": "Passengers, bir uçak kazasından sağ kurtulanları araştıran bir terapistin yaşadığı gizemli olayları konu alan bir gerilim filmidir. Patrick Wilson ve Anne Hathaway'in güçlü performansları, filmin atmosferine katkı sağlıyor. Bu film, Wilson'ın dramatik rollerdeki yeteneğini bir kez daha ortaya koyuyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/patrick-wilson-en-iyi-10-filmibolum-3",
    "name": "The Conjuring 2 - Korku Seansı 2",
    "image": "/images/movies/Patrick_Wilson_the_conjuring_2_-_korku_seansi_2.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Patrick Wilson",
        "Lee Van Cleef",
        "Vera Farmiga"
      ],
      "Kategori": [
        "Korku"
      ],
      "Yıl": "2016",
      "Süre": "2 sa. 14 dk.",
      "Yönetmen": "James Wan",
      "imdb": "7.3/10",
      "Değerlendirme": "305772",
      "metacritic": "65"
    },
    "paragraf": "The Conjuring 2, korkunun sınırlarını zorlayan güçlü bir yapım. Patrick Wilson'ın etkileyici performansı, izleyicileri ekran başına kilitliyor. Patrick Wilson en iyi filmi olarak sıkça anılan bu yapım, korku sevenlerin favorisi haline geldi."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/patrick-wilson-en-iyi-10-filmibolum-2",
    "name": "Fargo",
    "image": "/images/movies/Patrick_Wilson_fargo.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Patrick Wilson",
        "Lee Van Cleef",
        "Allison Tolman",
        "Billy Bob Thornton"
      ],
      "Kategori": [
        "Dram"
      ],
      "Yıl": "2015",
      "Süre": "1 sa.",
      "Yönetmen": "Noah Hawley",
      "imdb": "8.9/10",
      "Değerlendirme": "427746"
    },
    "paragraf": "Fargo dizisi, dram ve gerilimi harmanlayan etkileyici bir yapımdır. Patrick Wilson'ın güçlü oyunculuğu, diziyi izleyenler üzerinde derin bir etki bırakmıştır. Patrick Wilson filmleri dışında yer aldığı bu dizi, onun yeteneğini geniş bir yelpazede sergilemesine olanak sağlamıştır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/patrick-wilson-en-iyi-10-filmibolum-1",
    "name": "The Conjuring - Korku Seansı",
    "image": "/images/movies/Patrick_Wilson_the_conjuring_-_korku_seansi.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Patrick Wilson",
        "Lee Van Cleef",
        "Vera Farmiga"
      ],
      "Kategori": [
        "Korku"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 52 dk.",
      "Yönetmen": "James Wan",
      "imdb": "7.5/10",
      "Değerlendirme": "563338",
      "metacritic": "68"
    },
    "paragraf": "The Conjuring, korku sinemasında çığır açan bir yapım olarak kabul edilir. Patrick Wilson'ın olağanüstü performansı, filmi unutulmaz kılar. Patrick Wilson imdb açısından yüksek puan alan bu film, onun en iyi yapımlarından biridir ve izleyiciler tarafından övgüyle karşılanmıştır."
  }

];

const ana_resim = "/images/ana_gorseller/patrick-wilson-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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