
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function ChristopherNolanEnİyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "christopher-nolan-en-iyi-10-filmi";
const baslik = "Christopher Nolan En İyi 10 Filmi";
const metin = "Christopher Nolan, çağdaş sinemanın en etkileyici yönetmenlerinden biridir. Bu makalemizde, Christopher Nolan filmleri arasından seçilen en iyi 10 eseri sıralayacağız. Her bir filmi, hikaye anlatımı, görsel şölen ve derin karakter analizleri ile Christopher Nolan en iyi filmleri listemizde yer almayı hak etmiştir. Bu listede, başyapıtları arasından seçim yaparken, hemen her yapıtının kendine has özelliklerini ve izleyici üzerinde bıraktığı etkiyi dikkate aldık. İşte, Christopher Nolan filmi denildiğinde akla gelen en iyi yapıtlar...";
const bitis_metin = "Christopher Nolanın sinemadaki ustalığını sergileyen bu 10 film, modern sinemanın en önemli yapıtları arasında yer alıyor. Nolanın her bir filmi, sinematik bir başarı örneği olarak hatırlanacak ve bu filmlerin her birine olan hayranlığımızı pekiştirecek. Bu eşsiz listeyi keyifle sunduk.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["christopher","nolan","en","i̇yi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-23T17:28:15+03:00";
const degistirilmeTarihi = "2024-04-23T17:28:15+03:00";
const addDate = "23.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/christopher-nolan-en-iyi-10-filmi#bolum-10",
    "name": "Following",
    "image": "/images/movies/christopher_nolan_following.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Kategori": [
        "Gizem",
        "Suç"
      ],
      "Süre": "1 sa. 9 dk.",
      "Yıl": "1998",
      "imdb": "7.5/10",
      "Değerlendirme": "102000"
    },
    "paragraf": "Listemizin başlangıcı Christopher Nolanın ilk uzun metrajlı filmi 'Following'. Düşük bütçe ile çekilmesine rağmen, Nolanın karmaşık anlatım becerisinin ve sinematik yeteneğinin ilk işaretlerini taşıyor. Film, rastgele insanları takip etmekten hoşlanan genç bir yazarın etrafında dönüyor ve Christopher Nolan filmleri içinde belirgin bir yere sahip."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/christopher-nolan-en-iyi-10-filmi#bolum-9",
    "name": "Insomnia",
    "image": "/images/movies/christopher_nolan_insomnia.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Kategori": [
        "Suç",
        "Gizem"
      ],
      "Süre": "1 sa. 58 dk.",
      "Yıl": "2002",
      "imdb": "7.2/10",
      "Değerlendirme": "319000"
    },
    "paragraf": "Christopher Nolanın yönettiği ve Al Pacino'nun başrolde olduğu 'Insomnia', etkileyici oyunculukları ve sürükleyici hikayesiyle dikkat çekiyor. Christopher Nolan yaratıcılığı ve film yönetme kabiliyeti tartışılmaz. Film, bir cinayet soruşturması sırasında uykusuzluk çeken bir dedektifin hikayesini anlatıyor ve izleyicileri psikolojik bir gerilimin derinliklerine çekiyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/christopher-nolan-en-iyi-10-filmi#bolum-8",
    "name": "Batman Begins",
    "image": "/images/movies/christopher_nolan_batman_begins.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa. 20 dk.",
      "Yıl": "2005",
      "imdb": "8.2/10",
      "Değerlendirme": "1600000"
    },
    "paragraf": "Batman Begins ile Nolan, kahramanın kökenlerine dönerek, Batman mitini yeniden şekillendiriyor ve bu süreçte modern süper kahraman filmleri için yeni bir standart belirliyor. Filmin derinlemesine psikolojik çözümlemesi ve karanlık atmosferi ile Christopher Nolan en iyi filmi olarak adlandırılanlar arasına girmeyi başarıyor."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/christopher-nolan-en-iyi-10-filmi#bolum-7",
    "name": "The Dark Knight Rises",
    "image": "/images/movies/christopher_nolan_the_dark_knight_rises.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Kategori": [
        "Aksiyon",
        "Macera"
      ],
      "Süre": "2 sa. 44 dk.",
      "Yıl": "2012",
      "imdb": "8.4/10",
      "Değerlendirme": "1800000"
    },
    "paragraf": "The Dark Knight Rises, Batman efsanesinin bu muhteşem finalinde, Nolan, karanlık, derinlemesine işlenmiş bir hikaye ve unutulmaz karakterler sunuyor. Christopher Nolan filmleri en iyi listesinde, Bruce Wayne/Batman'in yükselişini ve düşüşlerini büyüleyici bir şekilde anlatıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/christopher-nolan-en-iyi-10-filmi#bolum-6",
    "name": "Interstellar",
    "image": "/images/movies/christopher_nolan_interstellar.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Kategori": [
        "Bilim Kurgu",
        "Macera"
      ],
      "Süre": "2 sa. 49 dk.",
      "Yıl": "2014",
      "imdb": "8.6/10",
      "Değerlendirme": "2100000"
    },
    "paragraf": "Interstellar, insanlığın yaşamını sürdürebilmesi için yeni gezegen arayışını konu alıyor. Christopher Nolanın yönetmenliğinde, görsel ve duygusal bir derinlik sunan bu film, bilim kurgu severler için bir baş yapıt. Nolanın kariyerinde önemli bir yere sahip ve en iyi filmleri arasında sıkça zikrediliyor. Nolan'ın sinematik vizyonu, bilim kurgu severler için unutulmaz bir deneyim sunar."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/christopher-nolan-en-iyi-10-filmi#bolum-5",
    "name": "The Prestige",
    "image": "/images/movies/christopher_nolan_the_prestige.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Kategori": [
        "Drama",
        "Gizem"
      ],
      "Süre": "2 sa. 10 dk.",
      "Yıl": "2006",
      "imdb": "8.5/10",
      "Değerlendirme": "1400000"
    },
    "paragraf": "The Prestige, iki rekabetçi sihirbazın öyküsünü anlatırken; intikam, takıntı ve fedakarlık temalarını ustaca işliyor. Film, Nolanın en kuvvetli yönetmenlik özelliklerini barındırırken, izleyiciyi sonuna kadar merak içinde tutuyor."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/christopher-nolan-en-iyi-10-filmi#bolum-4",
    "name": "Memento",
    "image": "/images/movies/christopher_nolan_memento.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Kategori": [
        "Gizem",
        "Gerilim"
      ],
      "Süre": "1 sa. 53 dk.",
      "Yıl": "2000",
      "imdb": "8.4/10",
      "Değerlendirme": "1300000"
    },
    "paragraf": "Memento, sürekli olarak hafızasını kaybeden bir adamın hikayesini ters kronolojiyle anlatarak, izleyicilere benzersiz bir sinema deneyimi sunuyor. Bu film, Nolanın erken dönem başarılı çalışmalarından biri olarak kabul edilir ve yenilikçi yapısıyla övgü toplar."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/christopher-nolan-en-iyi-10-filmi#bolum-3",
    "name": "Dunkirk",
    "image": "/images/movies/christopher_nolan_dunkirk.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Kategori": [
        "Savaş",
        "Drama"
      ],
      "Süre": "1 sa. 46 dk.",
      "Yıl": "2017",
      "imdb": "7.9/10",
      "Değerlendirme": "740000"
    },
    "paragraf": "Dunkirk, II. Dünya Savaşı sırasında gerçekleşen Dunkerque tahliye operasyonunu anlatıyor. Nolan, olayı üç farklı perspektiften sunarak sinema tarihindeki en gerçekçi savaş sahnelerini yaratıyor. Bu film, onun en iyi yönetmenlik çalışmalarından biri olarak tarihe geçmiştir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/christopher-nolan-en-iyi-10-filmi#bolum-2",
    "name": "Inception",
    "image": "/images/movies/christopher_nolan_inception.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Kategori": [
        "Bilim Kurgu",
        "Gerilim"
      ],
      "Süre": "2 sa. 28 dk.",
      "Yıl": "2010",
      "imdb": "8.8/10",
      "Değerlendirme": "2500000"
    },
    "paragraf": "Inception, zihinlere girip anıları çalma veya yerleştirme fikrini işleyerek, bilim kurgu ve gerilim türlerini mükemmel bir şekilde harmanlar. Bu baş döndürücü yapısı ve derinlemesine kurgusuyla Nolanın en iyi eserlerinden biri olarak gösterilir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/christopher-nolan-en-iyi-10-filmi#bolum-1",
    "name": "The Dark Knight",
    "image": "/images/movies/christopher_nolan_the_dark_knight.jpg",
    "ozellikler": {
      "Yönetmen": "Christopher Nolan",
      "Kategori": [
        "Aksiyon",
        "Suç"
      ],
      "Süre": "2 sa. 32 dk.",
      "Yıl": "2008",
      "imdb": "9.0/10",
      "Değerlendirme": "2900000"
    },
    "paragraf": "The Dark Knight, sinema tarihindeki en etkileyici süper kahraman filmi olarak geniş çapta takdir toplar. Heath Ledgerın Joker performansı, filmin unutulmaz sahneleri ve mükemmel hikaye anlatımı ile Nolanın yönetmenliği zirveye ulaşmıştır. Christopher Nolan en iyi filmi olarak birçok kişi tarafından kabul edilir."
  }
];

const ana_resim = "/images/ana_gorseller/christopher_nolan_en_iyi_10_filmi.jpg" //! SEN DOLDUR
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