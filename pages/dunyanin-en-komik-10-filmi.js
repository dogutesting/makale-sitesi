
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DunyaninEnKomik10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "dunyanin-en-komik-10-filmi";
const baslik = "Dünyanın en komik 10 filmi";
const metin = "Kahkahalarla dolu bir film gecesi için en komik 10 film listemizle karşınızdayız. Bu listede dünyanın en komik filmleri yabancı ve izleyenleri gülmekten kırıp geçiren türden. Dünya sinemasının en komik filmleri imdb listelerinde de kendine yer bulmuş bu yapımları gelin birlikte keşfedelim.";
const bitis_metin = "Bu yazımızda en komik 10 film listesini keşfettik. En komik yabancı filmler imdb sıralamalarında yer edinmiş yapımlar ile kahkaha dolu anlar sunan bu filmler, sinemaseverlerin favorileri arasında kalmaya devam ediyor. Umarım listedeki filmler izleyiciler için ilham verici olur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["dunyanin","en","komik","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-08-09T17:17:51+03:00";
const degistirilmeTarihi = "2024-08-09T17:17:51+03:00";
const addDate = "09.08.24";

const jsonContentArray = [

  {
    "num": "10",
    "url": "https://enonlar.com/dunyanin-en-komik-10-filmi#bolum-10",
    "name": "Superbad - Çok Fena",
    "image": "/images/movies/dunyanin_en_komik_on_filmi_superbad_-_cok_fena.jpg",
    "ozellikler": {
      "Yıl": "2007",
      "Süre": "1 sa. 53 dk.",
      "Kategori": [
        "Komedi"
      ],
      "Oyuncular": [
        "Jonah Hill",
        "Michael Cera"
      ],
      "Yönetmen": "Greg Mottola",
      "imdb": "7.6/10",
      "Değerlendirme": "641000",
      "metascore": "76"
    },
    "paragraf": "Superbad, en komik yabancı filmler imdb listelerine girmeyi başarmış gençlik komedilerinden biri. Lise yıllarını sonlandırmaya hazırlanan iki gencin hayatındaki komik maceraları izlemek, gülmek isteyenler için harika bir seçenek. Filmin enerjisi ve mizah anlayışı, onu en komik 10 film arasında olmasını sağlıyor."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/dunyanin-en-komik-10-filmi#bolum-9",
    "name": "The Hangover - Felekten Bir Gece",
    "image": "/images/movies/dunyanin_en_komik_on_filmi_the_hangover_-_felekten_bir_gece.jpg",
    "ozellikler": {
      "Yıl": "2009",
      "Süre": "1 sa. 40 dk.",
      "Kategori": [
        "Komedi"
      ],
      "Oyuncular": [
        "Bradley Cooper",
        "Zach Galifianakis"
      ],
      "Yönetmen": "Todd Phillips",
      "imdb": "7.7/10",
      "Değerlendirme": "856000",
      "metascore": "73"
    },
    "paragraf": "The Hangover, Las Vegas'ta başına gelen absürt olayları konu alan bir yapım. Film, dünyanın en komik filmleri yabancı listelerinde zirveye oynuyor. Bu filmde, bekarlığa veda partisi bir kabusa dönüşür ve izleyenlere kahkaha dolu anlar yaşatır. İnanılmaz olay örgüsüyle hafızalarda yer edinir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/dunyanin-en-komik-10-filmi#bolum-8",
    "name": "Monty Python and the Holy Grail - Monty Python ve Kutsal Kase",
    "image": "/images/movies/dunyanin_en_komik_on_filmi_monty_python_and_the_holy_grail_-_monty_python_ve_kutsal_kase.jpg",
    "ozellikler": {
      "Yıl": "1975",
      "Süre": "1 sa. 31 dk.",
      "Kategori": [
        "Komedi",
        "Macera"
      ],
      "Oyuncular": [
        "Graham Chapman",
        "John Cleese"
      ],
      "Yönetmen": "Terry Gilliam, Terry Jones",
      "imdb": "8.2/10",
      "Değerlendirme": "575000",
      "metascore": "91"
    },
    "paragraf": "Monty Python ve Kutsal Kase, absürt ve zekice esprileriyle en komik filmler yabancı imdb listelerinde çokça konuşulan bir yapıt. Orta Çağ'da geçen ve Kral Arthur'un maceralarını mizahi bir üslupla ele alan film, Monty Python ekibinin benzersiz tarzını yansıtır. Film, dünya sinemasının unutulmaz komedilerinden biridir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/dunyanin-en-komik-10-filmi#bolum-7",
    "name": "Step Brothers - Üvey Kardeşler",
    "image": "/images/movies/dunyanin_en_komik_on_filmi_step_brothers_-_uvey_kardesler.jpg",
    "ozellikler": {
      "Yıl": "2008",
      "Süre": "1 sa. 38 dk.",
      "Kategori": [
        "Komedi"
      ],
      "Oyuncular": [
        "Will Ferrell",
        "John C. Reilly"
      ],
      "Yönetmen": "Adam McKay",
      "imdb": "6.9/10",
      "Değerlendirme": "322000",
      "metascore": "51"
    },
    "paragraf": "Step Brothers, en komik yabancı filmler imdb listelerinde öne çıkan bir yapım. İki yetişkin adamın üvey kardeş olduktan sonraki eğlenceli ve kaotik yaşamlarını izlediğimiz bu film, izleyicilere kahkaha dolu anlar sunuyor. Ferrell ve Reilly'nin uyumu büyüleyici ve film boyunca seyirciyi güldürmeyi başarıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/dunyanin-en-komik-10-filmi#bolum-6",
    "name": "Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan - Borat",
    "image": "/images/movies/dunyanin_en_komik_on_filmi_borat_cultural_learnings_of_america_for_make_benefit_glorious_nation_of_kazakhstan_-_borat.jpg",
    "ozellikler": {
      "Yıl": "2006",
      "Süre": "1 sa. 24 dk.",
      "Kategori": [
        "Komedi"
      ],
      "Oyuncular": [
        "Sacha Baron Cohen",
        "Ken Davitian"
      ],
      "Yönetmen": "Larry Charles",
      "imdb": "7.4/10",
      "Değerlendirme": "447000",
      "metascore": "89"
    },
    "paragraf": "Borat, dünyanın en komik filmleri imdb sıralamalarında kendine yer bulan, benzersiz bir komedidir. Sacha Baron Cohen'in canlandırdığı Borat karakteri ile Amerika'da yaptığı hiciv dolu ve entrikalı yolculuk, izleyenleri kahkahaya boğuyor. Mizah tarzının cüretkarlığı, filmi diğerlerinden ayırıyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/dunyanin-en-komik-10-filmi#bolum-5",
    "name": "Bridesmaids - Nedimeler",
    "image": "/images/movies/dunyanin_en_komik_on_filmi_bridesmaids_-_nedimeler.jpg",
    "ozellikler": {
      "Yıl": "2011",
      "Süre": "2 sa. 5 dk.",
      "Kategori": [
        "Komedi"
      ],
      "Oyuncular": [
        "Kristen Wiig",
        "Maya Rudolph"
      ],
      "Yönetmen": "Paul Feig",
      "imdb": "6.8/10",
      "Değerlendirme": "312000",
      "metascore": "75"
    },
    "paragraf": "Bridesmaids, en komik filmler yabancı imdb listelerine ambargo koymuş bir modern komedi klasiği. Düğün hazırlıkları sürecinde birbirinden ilginç olaylara imza atan nedimelerin maceralarını izlerken, kahkahalarınıza hakim olmak zor olabilir. Film, mizahı ve dokusuyla izleyenleri kendine hayran bırakıyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/dunyanin-en-komik-10-filmi#bolum-4",
    "name": "Groundhog Day - Bugün Aslında Dündü",
    "image": "/images/movies/dunyanin_en_komik_on_filmi_groundhog_day_-_bugun_aslinda_dundu.jpg",
    "ozellikler": {
      "Yıl": "1993",
      "Süre": "1 sa. 41 dk.",
      "Kategori": [
        "Komedi",
        "Fantastik"
      ],
      "Oyuncular": [
        "Bill Murray",
        "Andie MacDowell"
      ],
      "Yönetmen": "Harold Ramis",
      "imdb": "8.0/10",
      "Değerlendirme": "692000",
      "metascore": "72"
    },
    "paragraf": "Groundhog Day, sıradışı konusu ve ikonik mizahıyla en komik yabancı filmler imdb listesinde yer alır. Aynı günü tekrar tekrar yaşayan bir hava durumu spikerinin komik ve absürd hikayesine tanık oluruz. Film, zaman yolculuğu ve mizahı bir araya getirerek eşsiz bir deneyim sunar."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/dunyanin-en-komik-10-filmi#bolum-3",
    "name": "Airplane! - Uçak!",
    "image": "/images/movies/dunyanin_en_komik_on_filmi_airplane!_-_ucak!.jpg",
    "ozellikler": {
      "Yıl": "1980",
      "Süre": "1 sa. 28 dk.",
      "Kategori": [
        "Komedi"
      ],
      "Oyuncular": [
        "Robert Hays",
        "Julie Hagerty"
      ],
      "Yönetmen": "Jim Abrahams, David Zucker",
      "imdb": "7.7/10",
      "Değerlendirme": "264000",
      "metascore": "78"
    },
    "paragraf": "Airplane!, komedi türünün öncüsü sayılan bir yapım olarak en komik filmler yabancı imdb listesini süsler. Uçak kazası temasına mizahi bir şekilde yaklaşan film, zekice yazılmış esprileri ve absürd sahneleriyle izleyiciyi baştan sona güldürmeyi başarıyor. Film, mizah klasiklerinden biridir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/dunyanin-en-komik-10-filmi#bolum-2",
    "name": "The Big Lebowski - Büyük Lebowski",
    "image": "/images/movies/dunyanin_en_komik_on_filmi_the_big_lebowski_-_buyuk_lebowski.jpg",
    "ozellikler": {
      "Yıl": "1998",
      "Süre": "1 sa. 57 dk.",
      "Kategori": [
        "Komedi",
        "Suç"
      ],
      "Oyuncular": [
        "Jeff Bridges",
        "John Goodman"
      ],
      "Yönetmen": "Joel Coen, Ethan Coen",
      "imdb": "8.1/10",
      "Değerlendirme": "868000",
      "metascore": "71"
    },
    "paragraf": "The Big Lebowski, dünyaca tanınmış bir kült komedi olarak en komik filmler yabancı imdb listeleri içerisinde yer alır. The Dude'un tuhaf hikayesi ve sinematik tarzı, izleyenlere hem düşündürücü hem eğlenceli bir deneyim sunar. Cohen Kardeşler'in yönettiği bu film, kendine has bir fan kitlesine sahiptir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/dunyanin-en-komik-10-filmi#bolum-1",
    "name": "Life of Brian - Brian'ın Hayatı",
    "image": "/images/movies/dunyanin_en_komik_on_filmi_life_of_brian_-_brian'in_hayati.jpg",
    "ozellikler": {
      "Yıl": "1979",
      "Süre": "1 sa. 34 dk.",
      "Kategori": [
        "Komedi"
      ],
      "Oyuncular": [
        "Graham Chapman",
        "John Cleese"
      ],
      "Yönetmen": "Terry Jones",
      "imdb": "8.0/10",
      "Değerlendirme": "424000",
      "metascore": "77"
    },
    "paragraf": "Life of Brian, Monty Python ekibinden çıkma, en komik 10 film listesinde zirvede yer alan bir başyapıt. Brian'ın yanlışlıkla İsa sanılması üzerine gelişen olayları ironik ve komik bir dille anlatan film, mizah severlerin mutlaka izlemesi gereken bir yapım. Film, zamanın en cesur ve eğlenceli komedilerinden biri olarak kabul edilir."
  }

];

const ana_resim = "/images/ana_gorseller/dunyanin-en-komik-10-filmi-kapak.jpg" //! SEN DOLDUR
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