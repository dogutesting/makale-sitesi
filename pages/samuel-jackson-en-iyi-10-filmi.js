
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function SamuelJacksonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "samuel-jackson-en-iyi-10-filmi";
const baslik = "Samuel Jackson en iyi 10 filmi";
const metin = "Bu yazımızda, dünyaca ünlü aktör Samuel Jackson'ın rol aldığı en unutulmaz filmleri sizler için derledik. İster aksiyon, ister bilim kurgu olsun, Samuel Jackson en iyi filmi seçmek zor olabilir. Ancak bu liste, Jackson'ın yeteneklerini öne çıkaran ve Samuel Jackson filmleri içinde en çok iz bırakanları içermekte.";
const bitis_metin = "Yukarıdaki Samuel Jackson filmleri listesi, bu deneyimli aktörün çeşitli rollerini ve onun film endüstrisindeki geniş yelpazesini yansıtmaktadır. Umuyoruz ki Samuel Jackson izlenmesi gereken filmleri listemiz, onun olağanüstü yeteneğinin farklı yönlerini keşfetmenizi sağlamıştır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["samuel","jackson","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-05-25T18:29:41+03:00";
const degistirilmeTarihi = "2024-05-25T18:29:41+03:00";
const addDate = "25.05.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/samuel-jackson-en-iyi-10-filmi#bolum-10",
    "name": "Jackie Brown",
    "image": "/images/movies/samuel_jackson_jackie_brown.jpg",
    "ozellikler": {
      "Yönetmen": "Quentin Tarantino",
      "Oyuncular": [
        "Samuel L. Jackson",
        "Pam Grier",
        "Robert Forster"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "2 sa. 34 dk.",
      "Yıl": "1997",
      "imdb": "7.5/10",
      "Değerlendirme": "376000",
      "metascore": "62"
    },
    "paragraf": "Jackie Brown filmi, Samuel Jackson en iyi filmleri arasında özel bir yere sahiptir. Quentin Tarantino'nun yönetmenliğindeki bu suç draması, Jackson'ın performansıyla öne çıkar."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/samuel-jackson-en-iyi-10-filmi#bolum-9",
    "name": "Pulp Fiction - Ucuz Roman",
    "image": "/images/movies/samuel_jackson_pulp_fiction_-_ucuz_roman.jpg",
    "ozellikler": {
      "Yönetmen": "Quentin Tarantino",
      "Oyuncular": [
        "Samuel L. Jackson",
        "John Travolta",
        "Uma Thurman"
      ],
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Süre": "2 sa. 34 dk.",
      "Yıl": "1994",
      "imdb": "8.9/10",
      "Değerlendirme": "2200000",
      "metascore": "95"
    },
    "paragraf": "Pulp Fiction, sinema tarihinin en ikonik filmlerinden biri olup, Samuel Jackson'ın unutulmaz diyalogları ile doludur. Bu yapım, Samuel Jackson izlenmesi gereken filmleri listesinin zirvesine yakışır."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/samuel-jackson-en-iyi-10-filmi#bolum-8",
    "name": "The Avengers - Yenilmezler",
    "image": "/images/movies/samuel_jackson_the_avengers_-_yenilmezler.jpg",
    "ozellikler": {
      "Yönetmen": "Joss Whedon",
      "Oyuncular": [
        "Samuel L. Jackson",
        "Robert Downey Jr.",
        "Scarlett Johansson"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 23 dk.",
      "Yıl": "2012",
      "imdb": "8.0/10",
      "Değerlendirme": "1500000",
      "metascore": "69"
    },
    "paragraf": "The Avengers serisinin ilk filmi, Marvel sinematik evreninin kilometre taşlarından biri olarak kabul edilir. Samuel Jackson filmleri arasında öne çıkan bu film, aksiyon severler için kaçırılmamalı."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/samuel-jackson-en-iyi-10-filmi#bolum-7",
    "name": "A Time to Kill - Öldürme Zamanı",
    "image": "/images/movies/samuel_jackson_a_time_to_kill_-_oldurme_zamani.jpg",
    "ozellikler": {
      "Yönetmen": "Joel Schumacher",
      "Oyuncular": [
        "Samuel L. Jackson",
        "Matthew McConaughey",
        "Sandra Bullock"
      ],
      "Kategori": [
        "Drama",
        "Suç"
      ],
      "Süre": "2 sa. 29 dk.",
      "Yıl": "1996",
      "imdb": "7.5/10",
      "Değerlendirme": "182000",
      "metascore": "53"
    },
    "paragraf": "A Time to Kill, ırkçılık ve adalet temaları üzerine derinlemesine bir bakış sunuyor. Samuel Jackson en iyi filmi arayanlar için bu dram filmi, güçlü performansları ile dikkat çeker."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/samuel-jackson-en-iyi-10-filmi#bolum-6",
    "name": "Star Wars: Episode III - Revenge of the Sith - Yıldız Savaşları: Bölüm III - Sith'in İntikamı",
    "image": "/images/movies/samuel_jackson_star_wars_episode_iii_-_revenge_of_the_sith_-_yildiz_savaslari_bolum_iii_-_sith_in_i̇ntikami.jpg",
    "ozellikler": {
      "Yönetmen": "George Lucas",
      "Oyuncular": [
        "Ewan McGregor",
        "Natalie Portman",
        "Samuel L. Jackson"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Bilim Kurgu"
      ],
      "Süre": "2 sa. 20 dk.",
      "Yıl": "2005",
      "imdb": "7.6/10",
      "Değerlendirme": "848000",
      "metascore": "68"
    },
    "paragraf": "Yıldız Savaşları serisinin bu bölümünde Samuel L. Jackson, Jedi Ustası Mace Windu olarak karşımıza çıkıyor. Bu film, Samuel Jackson filmleri listesi içinde bilim kurgu sevenler için özel bir yere sahiptir."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/samuel-jackson-en-iyi-10-filmi#bolum-5",
    "name": "Django Unchained - Zincirsiz",
    "image": "/images/movies/samuel_jackson_django_unchained_-_zincirsiz.jpg",
    "ozellikler": {
      "Yönetmen": "Quentin Tarantino",
      "Oyuncular": [
        "Jamie Foxx",
        "Christoph Waltz",
        "Samuel L. Jackson"
      ],
      "Kategori": [
        "Vahşi Batı",
        "Drama"
      ],
      "Süre": "2 sa. 45 dk.",
      "Yıl": "2012",
      "imdb": "8.5/10",
      "Değerlendirme": "1700000",
      "metascore": "81"
    },
    "paragraf": "Zincirsiz filmi, kölelik dönemine ışık tutan sert sahneleri ile bilinir. Samuel Jackson en iyi filmi listesinde bu dramatik ve etkileyici yapım, onun çarpıcı oyunculuğunu sergiler."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/samuel-jackson-en-iyi-10-filmi#bolum-4",
    "name": "The Hateful Eight - Nefret Sekizlisi",
    "image": "/images/movies/samuel_jackson_the_hateful_eight_-_nefret_sekizlisi.jpg",
    "ozellikler": {
      "Yönetmen": "Quentin Tarantino",
      "Oyuncular": [
        "Samuel L. Jackson",
        "Kurt Russell",
        "Jennifer Jason Leigh"
      ],
      "Kategori": [
        "Vahşi Batı",
        "Gizem",
        "Drama"
      ],
      "Süre": "3 sa. 7 dk.",
      "Yıl": "2015",
      "imdb": "7.8/10",
      "Değerlendirme": "662000",
      "metascore": "68"
    },
    "paragraf": "Nefret Sekizlisi, karanlık ve kasvetli atmosferi ile dikkat çeken bir Tarantino filmidir. Samuel Jackson, bu filmdeki ayrıntılı karakter çalışmasıyla izleyiciyi etkiler ve Samuel Jackson en iyi filmleri arasında yer alır."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/samuel-jackson-en-iyi-10-filmi#bolum-3",
    "name": "Die Hard: With a Vengeance - Zor Ölüm: Yansımalar",
    "image": "/images/movies/samuel_jackson_die_hard_with_a_vengeance_-_zor_olum_yansimalar.jpg",
    "ozellikler": {
      "Yönetmen": "John McTiernan",
      "Oyuncular": [
        "Bruce Willis",
        "Samuel L. Jackson",
        "Jeremy Irons"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa. 8 dk.",
      "Yıl": "1995",
      "imdb": "7.6/10",
      "Değerlendirme": "409000",
      "metascore": "58"
    },
    "paragraf": "Zor Ölüm: Yansımalar, yüksek tempo aksiyon sahneleri ve Bruce Willis ile Samuel L. Jackson'ın uyumlu performansları ile dikkati çekiyor. Bu film, Samuel Jackson filmleri içinde aksiyon severler için vazgeçilmezdir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/samuel-jackson-en-iyi-10-filmi#bolum-2",
    "name": "Unbreakable - Cam",
    "image": "/images/movies/samuel_jackson_unbreakable_-_cam.jpg",
    "ozellikler": {
      "Yönetmen": "M. Night Shyamalan",
      "Oyuncular": [
        "Bruce Willis",
        "Samuel L. Jackson",
        "Robin Wright"
      ],
      "Kategori": [
        "Drama",
        "Gizem",
        "Bilim Kurgu"
      ],
      "Süre": "1 sa. 46 dk.",
      "Yıl": "2000",
      "imdb": "7.3/10",
      "Değerlendirme": "443000",
      "metascore": "62"
    },
    "paragraf": "Cam, Samuel L. Jackson'ın karmaşık bir karakteri canlandırdığı, gizem ve psikolojik derinliği olan bir film. Bu eser, Samuel Jackson izlenmesi gereken filmleri arasında özgün bir seçenek sunar."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/samuel-jackson-en-iyi-10-filmi#bolum-1",
    "name": "Kingsman: The Secret Service - Kingsman: Gizli Servis",
    "image": "/images/movies/samuel_jackson_kingsman_the_secret_service_-_kingsman_gizli_servis.jpg",
    "ozellikler": {
      "Yönetmen": "Matthew Vaughn",
      "Oyuncular": [
        "Colin Firth",
        "Samuel L. Jackson",
        "Taron Egerton"
      ],
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Komedi"
      ],
      "Süre": "2 sa. 9 dk.",
      "Yıl": "2014",
      "imdb": "7.7/10",
      "Değerlendirme": "718000",
      "metascore": "60"
    },
    "paragraf": "Kingsman: Gizli Servis, Samuel L. Jackson'ın şahane bir kötü adam olarak izleyici karşısına çıktığı, alışılmadık bir casus filmi. Samuel Jackson en iyi filmi olarak da nitelendirilen bu yapım, hem eğlenceli hem de heyecan doludur."
  }

];

const ana_resim = "/images/ana_gorseller/samuel_jackson_en_iyi_10_filmi_kapak.jpg" //! SEN DOLDUR
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