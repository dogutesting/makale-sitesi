
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function JohnnyDeppEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "johnny-depp-en-iyi-10-filmi";
const baslik = "Johnny Depp en iyi 10 filmi";
const metin = "Johnny Depp, yıllar içinde çok sayıda etkileyici ve unutulmaz performansa imza atmış bir aktör. Kariyerinde johnny depp filmleri imdb listelerinde yüksek notlar almış pek çok başyapıt bulunmaktadır. İşte johhny depp en iyi filmleri arasında en çok konuşulan eserleri derledik.";
const bitis_metin = "Johnny Depp'in geniş yelpazedeki en iyi filmlerini inceledik. Onun farklı karakterlerle dolu ilginç kariyeri, sinema dünyasına birçok değerli eser kazandırmıştır. Bu filmler, johhny depp en iyi filmleri arasında, her daim seyirciler için unutulmaz olacak.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["johnny","depp","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:25:37+03:00";
const degistirilmeTarihi = "2024-08-09T17:25:37+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "title_id": "tt1077368",
    "url": "https://enonlar.com/johnny-depp-en-iyi-10-filmi#bolum-10",
    "name": "Dark Shadows - Karanlık Gölgeler",
    "image": "/images/movies/Johnny_Depp_dark_shadows_-_karanlik_golgeler.jpg",
    "ozellikler": {
      "Yıl": "2012",
      "Süre": "1 sa. 53 dk.",
      "Kategori": [
        "Komedi",
        "Korku",
        "Fantastik"
      ],
      "Oyuncular": [
        "Johnny Depp",
        "Michelle Pfeiffer",
        "Eva Green"
      ],
      "Yönetmen": "Tim Burton",
      "imdb": "6.2/10",
      "Değerlendirme": "282243",
      "metacritic": "55"
    },
    "paragraf": "Dark Shadows, Tim Burton'ın imzasını taşıyan gotik atmosferi ve kara mizahıyla dikkat çeken bir film. Johnny Depp, bu filmde 18. yüzyıldan gelen bir vampir olan Barnabas Collins karakterini canlandırıyor. Filmin karmaşık ve eğlenceli yapısı, Burton ve Depp işbirliğiyle daha da sevilen bir hal alıyor. johnny depp filmleri imdb listelerinde farklı bir yer ediniyor."
  },
  {
    "num": "9",
    "title_id": "tt0367594",
    "url": "https://enonlar.com/johnny-depp-en-iyi-10-filmi#bolum-9",
    "name": "Charlie and the Chocolate Factory - Charlie ve Çikolata Fabrikası",
    "image": "/images/movies/Johnny_Depp_charlie_and_the_chocolate_factory_-_charlie_ve_cikolata_fabrikasi.jpg",
    "ozellikler": {
      "Yıl": "2005",
      "Süre": "1 sa. 55 dk.",
      "Kategori": [
        "Aile",
        "Macera",
        "Fantastik"
      ],
      "Oyuncular": [
        "Johnny Depp",
        "Freddie Highmore",
        "David Kelly"
      ],
      "Yönetmen": "Tim Burton",
      "imdb": "6.7/10",
      "Değerlendirme": "535251",
      "metacritic": "72"
    },
    "paragraf": "Roald Dahl'ın romanından uyarlanan Charlie ve Çikolata Fabrikası, Willy Wonka'nın büyülü dünyasında geçen bir macerayı anlatıyor. Johnny Depp'in Willy Wonka karakterine kattığı tuhaf ve büyüleyici yorum, filmi benzersiz yapıyor. johnny depp en iyi filmleri listesinde çikolata dolu bu fantastik hikaye unutulmaz."
  },
  {
    "num": "8",
    "title_id": "tt0408236",
    "url": "https://enonlar.com/johnny-depp-en-iyi-10-filmi#bolum-8",
    "name": "Sweeney Todd: The Demon Barber of Fleet Street - Sweeney Todd: Fleet Sokağının Şeytan Berberi",
    "image": "/images/movies/Johnny_Depp_sweeney_todd__the_demon_barber_of_fleet_street_-_sweeney_todd__fleet_sokaginin_seytan_berberi.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "1 sa. 56 dk.",
      "Kategori": [
        "Dram",
        "Korku",
        "Müzikal"
      ],
      "Oyuncular": [
        "Johnny Depp",
        "Helena Bonham Carter",
        "Alan Rickman"
      ],
      "Yönetmen": "Tim Burton",
      "imdb": "7.3/10",
      "Değerlendirme": "389453",
      "metacritic": "83"
    },
    "paragraf": "Sweeney Todd, karanlık ve kasvetli atmosferiyle dikkat çeken bir başka Tim Burton yapımı. Johnny Depp, intikam peşindeki berber Sweeney Todd'u, güçlü bir performansla canlandırıyor. Film, müzikal bir yapım olmasına rağmen dehşet verici sahneleriyle izleyiciyi büyülüyor. johnny depp filmleri imdb listelerinde özgün bir yere sahip."
  },
  {
    "num": "7",
    "title_id": "tt1014759",
    "url": "https://enonlar.com/johnny-depp-en-iyi-10-filmi#bolum-7",
    "name": "Alice in Wonderland - Alis Harikalar Diyarında",
    "image": "/images/movies/Johnny_Depp_alice_in_wonderland_-_alis_harikalar_diyarinda.jpg",
    "ozellikler": {
      "Yıl": "2010",
      "Süre": "1 sa. 48 dk.",
      "Kategori": [
        "Macera",
        "Aile",
        "Fantastik"
      ],
      "Oyuncular": [
        "Johnny Depp",
        "Mia Wasikowska",
        "Helena Bonham Carter"
      ],
      "Yönetmen": "Tim Burton",
      "imdb": "6.4/10",
      "Değerlendirme": "444757",
      "metacritic": "53"
    },
    "paragraf": "Johnny Depp, Alice Harikalar Diyarında filminde Çılgın Şapkacı olarak karşımıza çıkıyor. Lewis Carroll'un ünlü hikayesinin Tim Burton tarafından yeniden yorumlanması olan film, Depp'in Çılgın Şapkacı rolündeki performansıyla dikkat çekiyor. Renkli ve çılgın dünyası johnny depp en iyi filmleri arasında yer edinmektedir."
  },
  {
    "num": "6",
    "title_id": "tt0099487",
    "url": "https://enonlar.com/johnny-depp-en-iyi-10-filmi#bolum-6",
    "name": "Edward Scissorhands - Makas Eller",
    "image": "/images/movies/Johnny_Depp_edward_scissorhands_-_makas_eller.jpg",
    "ozellikler": {
      "Yıl": "1990",
      "Süre": "1 sa. 45 dk.",
      "Kategori": [
        "Fantastik",
        "Dram",
        "Romantik"
      ],
      "Oyuncular": [
        "Johnny Depp",
        "Winona Ryder"
      ],
      "Yönetmen": "Tim Burton",
      "imdb": "7.9/10",
      "Değerlendirme": "529450",
      "metacritic": "74"
    },
    "paragraf": "Makas Eller, Johnny Depp ve Tim Burton iş birliğiyle ortaya çıkan en ikonik filmlerden biridir. Depp'in canlandırdığı Edward Scissorhands karakterinin elleri, kesici aletlerle donatılmıştır. Bu karakterin yalnızlığı ve sevgiyi arayışı, Depp'in yürek burkan performansıyla birleşince etkileyici bir hikaye ortaya çıkıyor. johnny depp filmleri imdb puanlarına katkı sağlamıştır."
  },
  {
    "num": "5",
    "title_id": "tt0308644",
    "url": "https://enonlar.com/johnny-depp-en-iyi-10-filmi#bolum-5",
    "name": "Finding Neverland - Düşler Ülkesi",
    "image": "/images/movies/Johnny_Depp_finding_neverland_-_dusler_ulkesi.jpg",
    "ozellikler": {
      "Yıl": "2004",
      "Süre": "1 sa. 46 dk.",
      "Kategori": [
        "Biyografi",
        "Dram",
        "Aile"
      ],
      "Oyuncular": [
        "Johnny Depp",
        "Kate Winslet",
        "Julie Christie"
      ],
      "Yönetmen": "Marc Forster",
      "imdb": "7.7/10",
      "Değerlendirme": "212764",
      "metacritic": "67"
    },
    "paragraf": "Düşler Ülkesi, Peter Pan'ın yaratıcısı J.M. Barrie'nin ilham verici hikayesine odaklanıyor. Johnny Depp, J.M. Barrie karakteriyle duygu dolu bir performans sergiliyor. Film, ailesel ilişkiler ve hayal gücünün önemine vurgu yaparak gönülleri fethediyor. johnny depp en iyi filmleri arasında yerini almayı başarmıştır."
  },
  {
    "num": "4",
    "title_id": "tt0383574",
    "url": "https://enonlar.com/johnny-depp-en-iyi-10-filmi#bolum-4",
    "name": "Pirates of the Caribbean: Dead Man's Chest - Karayip Korsanları: Ölü Adamın Sandığı",
    "image": "/images/movies/Johnny_Depp_pirates_of_the_caribbean__dead_man's_chest_-_karayip_korsanlari__olu_adamin_sandigi.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "2 sa. 31 dk.",
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Fantastik"
      ],
      "Oyuncular": [
        "Johnny Depp",
        "Orlando Bloom",
        "Keira Knightley"
      ],
      "Yönetmen": "Gore Verbinski",
      "imdb": "7.4/10",
      "Değerlendirme": "775766",
      "metacritic": "53"
    },
    "paragraf": "Karayip Korsanları serisinin ikinci filmi Ölü Adamın Sandığı, Jack Sparrow'un yeni bir macerasını konu alıyor. Johnny Depp'in hayat verdiği Jack Sparrow karakteri, mizahi ve karizmatik yapısıyla izleyicileri büyülüyor. Film, johnny depp filmleri imdb listelerinde üst sıralarda yer almak için iddialı bir yapım."
  },
  {
    "num": "3",
    "title_id": "tt1192628",
    "url": "https://enonlar.com/johnny-depp-en-iyi-10-filmi#bolum-3",
    "name": "Rango",
    "image": "/images/movies/Johnny_Depp_rango.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "1 sa. 47 dk.",
      "Kategori": [
        "Animasyon",
        "Macera",
        "Komedi"
      ],
      "Oyuncular": [
        "Johnny Depp"
      ],
      "Yönetmen": "Gore Verbinski",
      "imdb": "7.3/10",
      "Değerlendirme": "296658",
      "metacritic": "75"
    },
    "paragraf": "Rango, depp johnny'in seslendirdiği bir animasyon filmidir. Çöl kasabasında geçen bu hikaye, kahramanımızın kabadayı bir şerif olarak nasıl halkının sevgisi kazandığını anlatıyor. Mizahi yapısıyla hem çocuklara hem de yetişkinlere hitap eden Rango, ailecek izlenebilecek başarılı bir animasyon filmidir."
  },
  {
    "num": "2",
    "title_id": "tt0325980",
    "url": "https://enonlar.com/johnny-depp-en-iyi-10-filmi#bolum-2",
    "name": "Pirates of the Caribbean: The Curse of the Black Pearl - Karayip Korsanları: Siyah İnci'nin Laneti",
    "image": "/images/movies/Johnny_Depp_pirates_of_the_caribbean__the_curse_of_the_black_pearl_-_karayip_korsanlari__siyah_inci'nin_laneti.jpg",
    "ozellikler": {
      "Yıl": "2003",
      "Süre": "2 sa. 23 dk.",
      "Kategori": [
        "Aksiyon",
        "Macera",
        "Fantastik"
      ],
      "Oyuncular": [
        "Johnny Depp",
        "Geoffrey Rush",
        "Orlando Bloom",
        "Keira Knightley"
      ],
      "Yönetmen": "Gore Verbinski",
      "imdb": "8.1/10",
      "Değerlendirme": "1225285",
      "metacritic": "63"
    },
    "paragraf": "Karayip Korsanları'nın ilk filmi Siyah İnci'nin Laneti, unutulmaz kaptan Jack Sparrow'u ve onun eğlenceli maceralarını izleyicilere sunuyor. Johnny Depp'in ikonik performansı, filmi popüler kültürün ayrılmaz bir parçası yaptı. Serinin başarısındaki en büyük pay, Depp'in benzersiz oyunculuğuna aittir. johnny depp en iyi filmleri arasında kendine sağlam yer edinmiştir."
  },
  {
    "num": "1",
    "title_id": "tt0109707",
    "url": "https://enonlar.com/johnny-depp-en-iyi-10-filmi#bolum-1",
    "name": "Ed Wood",
    "image": "/images/movies/Johnny_Depp_ed_wood.jpg",
    "ozellikler": {
      "Yıl": "1994",
      "Süre": "2 sa. 7 dk.",
      "Kategori": [
        "Biyografi",
        "Komedi",
        "Dram"
      ],
      "Oyuncular": [
        "Johnny Depp",
        "Martin Landau"
      ],
      "Yönetmen": "Tim Burton",
      "imdb": "7.8/10",
      "Değerlendirme": "185073",
      "metacritic": "71"
    },
    "paragraf": "Ed Wood, 'en kötü yönetmen' olarak anılan Edward D. Wood Jr.'un yaşamını konu alıyor. Tim Burton'ın biyografik yaklaşımı, Johnny Depp'in zengin karakterizasyonuyla birleşince bir kült klasiği doğuyor. Depp'in en sevilen performanslarından biri olarak tanınan bu film, samimi ve komik yapısıyla dikkat çekiyor. johnny depp filmleri imdb listesinde önemli bir yere sahiptir."
  }

];

const ana_resim = "/images/ana_gorseller/johnny-depp-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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