
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function EmmaWatsonEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "emma-watson-en-iyi-10-filmi";
const baslik = "Emma Watson en iyi 10 filmi";
const metin = "Emma Watson, büyüleyici performanslarıyla tanıdığımız bir sanatçı. Emma Watson oynadığı filmler arasında birçok başarılı yapım bulunuyor. Bu yazımızda, Emma Watson filmleri arasından en çok dikkat çeken 10 tanesini sizlerle paylaşıyoruz.";
const bitis_metin = "Bu yazımızda, Emma Watson'ın kariyerinde öne çıkan en iyi 10 filmi inceledik. Umarız bu liste, Emma Watson hayranları için yeni keşiflere yol açar.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["emma","watson","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //* ayarlandı.
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-16T16:43:56+03:00";
const degistirilmeTarihi = "2024-08-16T16:43:56+03:00";
const addDate = "16.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/emma-watson-en-iyi-10-filmibolum-10",
    "name": "The Circle - Çember",
    "image": "/images/movies/Emma_Watson_the_circle_-_cember.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Emma Watson",
        "Tom Hanks",
        "Ellar Coltrane"
      ],
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Yıl": "2017",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "James Ponsoldt",
      "imdb": "5.4/10",
      "Değerlendirme": "101240",
      "metacritic": "43"
    },
    "paragraf": "Emma Watson filmleri arasında dikkat çeken yapımlardan biri olan The Circle, teknolojinin gücü ve gizlilik üzerine düşündürücü bir film. Emma Watson, Mae Holland karakteriyle sosyal medya devinin karanlık yönlerini keşfediyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/emma-watson-en-iyi-10-filmibolum-9",
    "name": "The Perks of Being a Wallflower - Saksı Olmanın Faydaları",
    "image": "/images/movies/Emma_Watson_the_perks_of_being_a_wallflower_-_saksi_olmanin_faydalari.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Emma Watson",
        "Logan Lerman",
        "Dylan McDermott"
      ],
      "Kategori": [
        "Dram",
        "Gençlik",
        "Romantik"
      ],
      "Yıl": "2012",
      "Süre": "1 sa. 43 dk.",
      "Yönetmen": "Stephen Chbosky",
      "imdb": "7.9/10",
      "Değerlendirme": "554051",
      "metacritic": "67"
    },
    "paragraf": "Emma Watson en iyi filmleri arasında gösterilen The Perks of Being a Wallflower, ergenliğin güçlüklerini ve dostluğun gücünü işleyen etkileyici bir dram. Film, Watson'ın Sam karakteri ile kalıcı bir etki bırakıyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/emma-watson-en-iyi-10-filmibolum-8",
    "name": "Colonia - Koloni",
    "image": "/images/movies/Emma_Watson_colonia_-_koloni.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Emma Watson",
        "Daniel Brühl"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 50 dk.",
      "Yönetmen": "Florian Gallenberger",
      "imdb": "7/10",
      "Değerlendirme": "57630",
      "metacritic": "33"
    },
    "paragraf": "Emma Watson'ı farklı bir rolde gördüğümüz Colonia, Şili'deki bir tarikattan kurtulma hikayesini anlatır. Gerçek olaylara dayanan bu filmde Watson, Lena karakteriyle sevgilisini arar ve tehlikeli bir bölgeye girer."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/emma-watson-en-iyi-10-filmibolum-7",
    "name": "Regression - Bastırılmış",
    "image": "/images/movies/Emma_Watson_regression_-_bastirilmis.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Emma Watson",
        "Ethan Hawke"
      ],
      "Kategori": [
        "Gerilim",
        "Dram"
      ],
      "Yıl": "2015",
      "Süre": "1 sa. 46 dk.",
      "Yönetmen": "Alejandro Amenábar",
      "imdb": "5.6/10",
      "Değerlendirme": "42899",
      "metacritic": "32"
    },
    "paragraf": "Emma Watson'ın iddialı performans sergilediği Regression, geçmişten gelen karanlık sırların çözülmeye çalışıldığı bir gerilim filmi. Emma Watson, Angela karakteri ile hikayenin merkezinde yer alıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/emma-watson-en-iyi-10-filmibolum-6",
    "name": "The Bling Ring - Pırıltılı Hayatlar",
    "image": "/images/movies/Emma_Watson_the_bling_ring_-_piriltili_hayatlar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Emma Watson",
        "Katie Chang",
        "Israel Broussard"
      ],
      "Kategori": [
        "Suç",
        "Dram",
        "Biyografi"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 30 dk.",
      "Yönetmen": "Sofia Coppola",
      "imdb": "5.6/10",
      "Değerlendirme": "92817",
      "metacritic": "66"
    },
    "paragraf": "Emma Watson'ın farklı bir karakterle karşımıza çıktığı The Bling Ring, Hollywood ünlülerinin evini soyan gençlerin hikayesini konu alıyor. Watson, hırslı bir genç olan Nicki'yi canlandırarak dikkat çekici bir performans sergiliyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/emma-watson-en-iyi-10-filmibolum-5",
    "name": "This Is the End - Buraya Kadar",
    "image": "/images/movies/Emma_Watson_this_is_the_end_-_buraya_kadar.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Emma Watson",
        "James Franco",
        "Jonah Hill"
      ],
      "Kategori": [
        "Komedi"
      ],
      "Yıl": "2013",
      "Süre": "1 sa. 47 dk.",
      "Yönetmen": "Evan Goldberg",
      "imdb": "6.6/10",
      "Değerlendirme": "437803",
      "metacritic": "67"
    },
    "paragraf": "Emma Watson imdb üzerinde eğlenceli bir görüşe sahip olan This Is the End, ünlü oyuncuların dünyayı sona erdiren bir felaketle mücadele etmelerini anlatan komedi filmi. Kendisinin de yer aldığı bu filmde, mizahi bakış açısı dikkat çekiyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/emma-watson-en-iyi-10-filmibolum-4",
    "name": "Beauty and the Beast - Güzel ve Çirkin",
    "image": "/images/movies/Emma_Watson_beauty_and_the_beast_-_guzel_ve_cirkin.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Emma Watson",
        "Dan Stevens"
      ],
      "Kategori": [
        "Fantasy",
        "Romantik",
        "Müzikal"
      ],
      "Yıl": "2017",
      "Süre": "2 sa. 9 dk.",
      "Yönetmen": "Bill Condon",
      "imdb": "7.1/10",
      "Değerlendirme": "337751",
      "metacritic": "65"
    },
    "paragraf": "Emma Watson en iyi filmi arasında birçok kişinin favorisi olan Beauty and the Beast, klasik peri masalının büyüleyici bir yeniden uyarlaması. Watson, Belle karakteriyle zamansız bir aşk hikayesini canlandırıyor."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/emma-watson-en-iyi-10-filmibolum-3",
    "name": "The Tale of Despereaux - Despero",
    "image": "/images/movies/Emma_Watson_the_tale_of_despereaux_-_despero.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Emma Watson",
        "Matthew Broderick",
        "Dustin Hoffman"
      ],
      "Kategori": [
        "Animasyon",
        "Aile",
        "Macera"
      ],
      "Yıl": "2008",
      "Süre": "1 sa. 33 dk.",
      "Yönetmen": "Sam Fell",
      "imdb": "6.1/10",
      "Değerlendirme": "40145",
      "metacritic": "53"
    },
    "paragraf": "Animasyon dünyasında da etkileyici bir yer edinen The Tale of Despereaux, Emma Watson'ın seslendirme yeteneğini öne çıkarıyor. Bu sevimli hikayede Watson, Prenses Pea'ya ses veriyor ve film, küçük bir farenin büyük macerasını konu alıyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/emma-watson-en-iyi-10-filmibolum-2",
    "name": "Harry Potter and the Deathly Hallows: Part 1 - Harry Potter ve Ölüm Yadigarları: Bölüm 1",
    "image": "/images/movies/Emma_Watson_harry_potter_and_the_deathly_hallows__part_1_-_harry_potter_ve_olum_yadigarlari__bolum_1.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Emma Watson",
        "Daniel Radcliffe",
        "Bill Nighy"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2010",
      "Süre": "2 sa. 26 dk.",
      "Yönetmen": "David Yates",
      "imdb": "7.7/10",
      "Değerlendirme": "607114",
      "metacritic": "65"
    },
    "paragraf": "Emma Watson'ın adını duyurduğu ve kariyerine başladığı Harry Potter serisinde, Ölüm Yadigarları: Bölüm 1 en büyük dönüş anlarından birini temsil ediyor. Film, büyüleyici görselleri ve etkileyici hikayesiyle öne çıkıyor."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/emma-watson-en-iyi-10-filmibolum-1",
    "name": "Harry Potter and the Deathly Hallows: Part 2 - Harry Potter ve Ölüm Yadigarları: Bölüm 2",
    "image": "/images/movies/Emma_Watson_harry_potter_and_the_deathly_hallows__part_2_-_harry_potter_ve_olum_yadigarlari__bolum_2.jpg",
    "ozellikler": {
      "Oyuncular": [
        "Emma Watson",
        "Daniel Radcliffe",
        "Ralph Fiennes",
        "Michael Gambon"
      ],
      "Kategori": [
        "Fantastik",
        "Macera"
      ],
      "Yıl": "2011",
      "Süre": "2 sa. 10 dk.",
      "Yönetmen": "David Yates",
      "imdb": "8.1/10",
      "Değerlendirme": "960297",
      "metacritic": "85"
    },
    "paragraf": "Emma Watson en iyi filmleri arasında zirvede yer alan Harry Potter and the Deathly Hallows: Part 2, Hogwarts'taki son savaşın ve hikayenin doruk noktasının yaşandığı bir film. Watson, Hermione Granger olarak muhteşem bir performans sergiliyor."
  }

];

const ana_resim = "/images/ana_gorseller/emma-watson-en-iyi-10-filmi-kapak.jpg"; //* Eklendi
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