
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function QuentinTarantinoEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "quentin-tarantino-en-iyi-10-filmi";
const baslik = "Quentin Tarantino En İyi 10 Filmi";
const metin = "Quentin Tarantino, sinema dünyasını derinden etkileyen ve özgün tarzıyla tanınan bir yönetmen. Bu yazımızda, Quentin Tarantino filmleri arasından en çok beğenilen 10 filmi sizler için derledik. İzleyicileri büyüleyen ve eleştirmenlerin takdirini kazanan Quentin Tarantino en iyi filmleri karşınızda.";
const bitis_metin = "Bu yazımızda, Quentin Tarantino'nun en iyi filmlerini sıraladık ve bu ikonik yönetmenin sinema dünyasına kattıklarını inceledik. Umarız listemiz size izleyeceğiniz bir film seçerken yardımcı olmuştur. Sinema dolu günler dileriz!";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["quentin","tarantino","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:27:16+03:00";
const degistirilmeTarihi = "2024-08-09T17:27:16+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1028528",
    "url": "https://enonlar.com/quentin-tarantino-en-iyi-10-filmi#bolum-10",
    "name": "Death Proof - Ölüm Geçirmez",
    "image": "/images/movies/Kurt_Russell_death_proof_-_olum_gecirmez.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "1 sa. 53 dk.",
      "Kategori": [
        "Aksiyon",
        "Gerilim"
      ],
      "Oyuncular": [
        "Kurt Russell",
        "Zoë Bell"
      ],
      "Yönetmen": "Quentin Tarantino",
      "imdb": "7/10",
      "Değerlendirme": "316686"
    },
    "paragraf": "Quentin Tarantino filmleri arasında yer alan Death Proof - Ölüm Geçirmez, sıradışı kurgusu ve etkileyici sahneleriyle dikkat çekiyor. Filmde Kurt Russell, dublör kaza yapmaz bir şoför rolüyle seyirciyi ekrana kilitlemeyi başarıyor. Quentin Tarantino filmleri imdb puanlarına bakıldığında, bu filmde de imzasını atmış olduğu kaliteli işlerin izleri görülüyor."
  },
  {
    "num": "9",
    "title_id": "tt0119396",
    "url": "https://enonlar.com/quentin-tarantino-en-iyi-10-filmi#bolum-9",
    "name": "Jackie Brown",
    "image": "/images/movies/Pam_Grier_jackie_brown.jpg",
    "ozellikler": {
      "Yıl": "1997",
      "Süre": "2 sa. 34 dk.",
      "Kategori": [
        "Suç",
        "Gerilim"
      ],
      "Oyuncular": [
        "Pam Grier",
        "Samuel L. Jackson"
      ],
      "Yönetmen": "Quentin Tarantino",
      "imdb": "7.5/10",
      "Değerlendirme": "378955",
      "metacritic": "62"
    },
    "paragraf": "Quentin Tarantino en iyi filmleri listesinde yer alan Jackie Brown, Elmore Leonard'ın Rum Punch adlı romanından uyarlanmıştır. Film, zekice işlenmiş bir suç hikayesi sunarken, Pam Grier ve Samuel L. Jackson gibi isimlerle yıldız bir kadroya sahiptir. Quentin Tarantino filmleri imdb listesinde özgün senaryosuyla dikkat çeken yapımlardan biridir."
  },
  {
    "num": "8",
    "title_id": "tt0378194",
    "url": "https://enonlar.com/quentin-tarantino-en-iyi-10-filmi#bolum-8",
    "name": "Kill Bill: Vol. 2",
    "image": "/images/movies/Uma_Thurman_kill_bill__vol._2.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Süre": "2 sa. 17 dk.",
      "Kategori": [
        "Aksiyon",
        "Suç"
      ],
      "Oyuncular": [
        "Uma Thurman",
        "David Carradine"
      ],
      "Yönetmen": "Quentin Tarantino",
      "imdb": "8/10",
      "Değerlendirme": "815118",
      "metacritic": "83"
    },
    "paragraf": "Kill Bill: Vol. 2, Quentin Tarantino filmleri arasında öne çıkan aksiyon dolu bir devam filmi. Uma Thurman'ın unutulmaz performansı ve etkileyici dövüş sahneleriyle Quentin Tarantino en iyi filmleri arasında sayılıyor. İlk filmde başlayan intikam hikayesi tüm hızıyla Vol. 2'de devam ediyor."
  },
  {
    "num": "7",
    "title_id": "tt0266697",
    "url": "https://enonlar.com/quentin-tarantino-en-iyi-10-filmi#bolum-7",
    "name": "Kill Bill: Vol. 1",
    "image": "/images/movies/Uma_Thurman_kill_bill__vol._1.jpg",
    "ozellikler": {
      "Yıl": "2003",
      "Süre": "1 sa. 51 dk.",
      "Kategori": [
        "Aksiyon",
        "Suç"
      ],
      "Oyuncular": [
        "Uma Thurman",
        "Lucy Liu"
      ],
      "Yönetmen": "Quentin Tarantino",
      "imdb": "8.2/10",
      "Değerlendirme": "1209536",
      "metacritic": "69"
    },
    "paragraf": "Kill Bill: Vol. 1, yoğun aksiyonu ve Tarantino'ya özgü benzersiz anlatımıyla Quentin Tarantino filmleri arasında önemli bir yere sahiptir. Uma Thurman'ın canlandırdığı Gelin karakteri, intikam hırsıyla dolup taşan bir aksiyon hikayesini izleyiciye sunuyor. Filmin tarzı ve anlatımı, Quentin Tarantino filmleri imdb değerlendirmelerinde yüksek puan almıştır."
  },
  {
    "num": "6",
    "title_id": "tt0108399",
    "url": "https://enonlar.com/quentin-tarantino-en-iyi-10-filmi#bolum-6",
    "name": "True Romance - Çılgın Romantik",
    "image": "/images/movies/Christian_Slater_true_romance_-_cilgin_romantik.jpg",
    "ozellikler": {
      "Yıl": "1993",
      "Süre": "2 sa. 1 dk.",
      "Kategori": [
        "Suç",
        "Romantik"
      ],
      "Oyuncular": [
        "Christian Slater",
        "Patricia Arquette"
      ],
      "Yönetmen": "Tony Scott",
      "imdb": "7.9/10",
      "Değerlendirme": "244774",
      "metacritic": "59"
    },
    "paragraf": "Quentin Tarantino'nun senaristliğini yaptığı True Romance, muhteşem bir romantik suç hikayesi sunuyor. Tony Scott'un yönettiği film, izleyicilerden büyük beğeni topladı. Quentin Tarantino en iyi filmleri listesinde senaryosuyla dikkat çeken bu yapım, türünün örneklerinden biri olarak kabul edilmektedir."
  },
  {
    "num": "5",
    "title_id": "tt0361748",
    "url": "https://enonlar.com/quentin-tarantino-en-iyi-10-filmi#bolum-5",
    "name": "Inglourious Basterds - Soysuzlar Çetesi",
    "image": "/images/movies/Brad_Pitt_inglourious_basterds_-_soysuzlar_cetesi.jpg",
    "ozellikler": {
      "Yıl": "2009",
      "Süre": "2 sa. 33 dk.",
      "Kategori": [
        "Aksiyon",
        "Savaş"
      ],
      "Oyuncular": [
        "Brad Pitt",
        "Christoph Waltz"
      ],
      "Yönetmen": "Quentin Tarantino",
      "imdb": "8.4/10",
      "Değerlendirme": "1607329",
      "metacritic": "69"
    },
    "paragraf": "Inglourious Basterds - Soysuzlar Çetesi, Tarantino'nun İkinci Dünya Savaşı'na farklı bir perspektiften bakan filmi olarak dikkat çekiyor. Brad Pitt ve Christoph Waltz'ın etkileyici performansları ile Quentin Tarantino filmleri imdb listesinde zirveye yakın bir yer bulmuştur. Hem eğlenceli hem de düşündürücü hikayesiyle izleyicilerin favorilerindendir."
  },
  {
    "num": "4",
    "title_id": "tt1853728",
    "url": "https://enonlar.com/quentin-tarantino-en-iyi-10-filmi#bolum-4",
    "name": "Django Unchained - Zincirsiz",
    "image": "/images/movies/Jamie_Foxx_django_unchained_-_zincirsiz.jpg",
    "ozellikler": {
      "Yıl": "2012",
      "Süre": "2 sa. 45 dk.",
      "Kategori": [
        "Western",
        "Drama"
      ],
      "Oyuncular": [
        "Jamie Foxx",
        "Leonardo DiCaprio"
      ],
      "Yönetmen": "Quentin Tarantino",
      "imdb": "8.5/10",
      "Değerlendirme": "1719028",
      "metacritic": "81"
    },
    "paragraf": "Django Unchained - Zincirsiz, Quentin Tarantino filmleri arasında özel bir yere sahiptir ve çağdaş western türünün en iyi örneklerinden biri olarak kabul edilir. Film, Jamie Foxx ve Leonardo DiCaprio gibi yıldızlarla doludur. Tarantino, bu filminde Amerikan tarihine cesur bir bakış açısı getirmiştir."
  },
  {
    "num": "3",
    "title_id": "tt3460252",
    "url": "https://enonlar.com/quentin-tarantino-en-iyi-10-filmi#bolum-3",
    "name": "The Hateful Eight - Nefret Sekizlisi",
    "image": "/images/movies/Samuel_L._Jackson_the_hateful_eight_-_nefret_sekizlisi.jpg",
    "ozellikler": {
      "Yıl": "2015",
      "Süre": "3 sa. 7 dk.",
      "Kategori": [
        "Western",
        "Gerilim"
      ],
      "Oyuncular": [
        "Samuel L. Jackson",
        "Kurt Russell"
      ],
      "Yönetmen": "Quentin Tarantino",
      "imdb": "7.8/10",
      "Değerlendirme": "667933",
      "metacritic": "68"
    },
    "paragraf": "Quentin Tarantino filmleri konağında bir kapalı alan gerilimini ustalıkla işleyen The Hateful Eight - Nefret Sekizlisi, izleyicilere nefes kesici bir deneyim sunuyor. Samuel L. Jackson ve Kurt Russell'ın başrollerini üstlendiği bu film, Quentin Tarantino en iyi filmleri arasında yerini sağlamlaştırmıştır."
  },
  {
    "num": "2",
    "title_id": "tt7131622",
    "url": "https://enonlar.com/quentin-tarantino-en-iyi-10-filmi#bolum-2",
    "name": "Once Upon a Time in Hollywood - Bir Zamanlar Hollywood'da",
    "image": "/images/movies/Leonardo_DiCaprio_once_upon_a_time_in_hollywood_-_bir_zamanlar_hollywood'da.jpg",
    "ozellikler": {
      "Yıl": "2019",
      "Süre": "2 sa. 41 dk.",
      "Kategori": [
        "Komedi",
        "Drama"
      ],
      "Oyuncular": [
        "Leonardo DiCaprio",
        "Brad Pitt"
      ],
      "Yönetmen": "Quentin Tarantino",
      "imdb": "7.6/10",
      "Değerlendirme": "864669",
      "metacritic": "84"
    },
    "paragraf": "Once Upon a Time in Hollywood - Bir Zamanlar Hollywood'da, Tarantino'nun Hollywood'un altın çağına nostaljik bir bakış sunduğu filmidir. Leonardo DiCaprio ve Brad Pitt'in uyumu, izleyiciler tarafından büyük takdir topladı. Quentin Tarantino filmleri imdb yorumlarına göre çokça beğenilen bir yapım olmuştur."
  },
  {
    "num": "1",
    "title_id": "tt0110912",
    "url": "https://enonlar.com/quentin-tarantino-en-iyi-10-filmi#bolum-1",
    "name": "Pulp Fiction - Ucuz Roman",
    "image": "/images/movies/John_Travolta_pulp_fiction_-_ucuz_roman.jpg",
    "ozellikler": {
      "Yıl": "1994",
      "Süre": "2 sa. 34 dk.",
      "Kategori": [
        "Suç",
        "Drama"
      ],
      "Oyuncular": [
        "John Travolta",
        "Uma Thurman"
      ],
      "Yönetmen": "Quentin Tarantino",
      "imdb": "8.9/10",
      "Değerlendirme": "2248742",
      "metacritic": "95"
    },
    "paragraf": "Pulp Fiction - Ucuz Roman, sinema tarihinin en etkileyici suç filmlerinden biri olarak kabul edilir. Quentin Tarantino en iyi filmleri arasında zirvede yer alarak, farklı anlatımı ve güçlü oyunculuk performansları ile izleyicilerin gönlünde taht kurmuştur. Bu film aynı zamanda Quentin Tarantino filmleri imdb sıralamalarında da daima üst sıralarda bulunmaktadır."
  }

];

const ana_resim = "/images/ana_gorseller/quentin-tarantino-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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