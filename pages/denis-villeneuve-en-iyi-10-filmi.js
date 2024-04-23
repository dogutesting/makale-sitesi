
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function DenisVilleneuveEnIyi10FilmiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "denis-villeneuve-en-iyi-10-filmi";
const baslik = "Denis Villeneuve'nin en iyi 10 filmi";
const metin = "Kanadalı yönetmen Denis Villeneuve, sinema dünyasında özgün anlatımı ve etkileyici görsel stilinin yanı sıra güçlü hikaye anlatıcılığı ile tanınır. Bu yazımızda, Denis Villeneuve kaç yılında doğdu diye merak edenler için, yönetmenin doğum yılı olan 1967'den itibaren ürettiği en etkileyici eserleri listeliyoruz. Denis Villeneuve filmleri içinde en iyi olarak nitelendirilen Denis Villeneuve en iyi filmleri listemizdeki yapımlar, onun sanatsal vizyonunun ve sinematik becerisinin bir kanıtı. İşte Denis Villeneuve en iyi filmi olarak gösterilen eserlerden bazıları.";
const bitis_metin = "Bu yazıda, Denis Villeneuve'nin sinema dünyasına katkılarını en iyi yansıtan filmleri ele aldık. Denis Villeneuve filmleri, onun görsel ve anlatımsal ustalığını ve sinematografiye olan tutkusunu ortaya koyuyor. Umarız bu liste, Denis Villeneuve'nin filmografisini daha yakından tanımanıza yardımcı olur.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["denis","villeneuve'nin","en","iyi","10","filmi"]; //! BAK
const kategori = "film"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-23T17:38:18+03:00";
const degistirilmeTarihi = "2024-04-23T17:38:18+03:00";
const addDate = "23.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/denis-villeneuve-en-iyi-10-filmi#bolum-10",
    "name": "August 32nd on Earth",
    "image": "/images/movies/denis_villeneuve_august.jpg",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Pascale Bussières",
        "Alexis Martin"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "1 sa. 28 dk.",
      "Yıl": "1998",
      "imdb": "6.5/10",
      "metascore": "61",
      "Değerlendirme": "3500"
    },
    "paragraf": "Denis Villeneuve filmleri arasında yer alan ve yönetmenlik kariyerinin başlangıcını simgeleyen 'August 32nd on Earth', minimalizmin ve hikaye anlatımının güçlü bir karışımını sunar. Film, bir trafik kazasından sonra yaşamın anlamını sorgulayan bir kadının hikayesini anlatır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/denis-villeneuve-en-iyi-10-filmi#bolum-9",
    "name": "Maelström",
    "image": "/images/movies/denis_villeneuve_maelstrom.jpg",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Marie-Josée Croze",
        "Jean-Nicolas Verreault"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "1 sa. 28 dk.",
      "Yıl": "2000",
      "imdb": "7.1/10",
      "metascore": "66",
      "Değerlendirme": "7300"
    },
    "paragraf": "Maelström, Denis Villeneuve en iyi filmleri listesinde öne çıkan bir başka yapım ve genç bir kadının yaşadığı dönüşümü ele alıyor. Filmdeki karmaşık ve dramatik hikaye örgüsü, Villeneuve'nin anlatım gücünün erken örneklerinden birini sergiliyor."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/denis-villeneuve-en-iyi-10-filmi#bolum-8",
    "name": "Next Floor",
    "image": "/images/movies/denis_villeneuve_next_floor.jpg",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Simone-Élise Girard",
        "Luc-Martial Dagenais"
      ],
      "Kategori": [
        "Kısa Film"
      ],
      "Süre": "11 dk.",
      "Yıl": "2008",
      "imdb": "7.9/10",
      "Değerlendirme": "6600"
    },
    "paragraf": "Villeneuve'nin kısa filmi 'Next Floor', keskin görsel stili ve simgeleşmiş sinematik diliyle izleyiciye hitap ediyor. Absürd ve etkileyici bir yemek sahnesi üzerinden tüketim kültürüne eleştirel bir bakış atar."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/denis-villeneuve-en-iyi-10-filmi#bolum-7",
    "name": "Polytechnique",
    "image": "/images/movies/denis_villeneuve_polytechnique.jpg",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Maxim Gaudette",
        "Karine Vanasse"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "1 sa. 17 dk.",
      "Yıl": "2009",
      "imdb": "7.3/10",
      "metascore": "63",
      "Değerlendirme": "19000"
    },
    "paragraf": "Polytechnique, bir üniversite katliamını konu edinerek toplumsal ve insanî sorunlara derinlemesine dalan bir film. Villeneuve'nin anlattığı trajik hikaye, gerçek olaylardan esinlenerek, kurbanların ve etkilenenlerin perspektifinden işleniyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/denis-villeneuve-en-iyi-10-filmi#bolum-6",
    "name": "Enemy",
    "image": "/images/movies/denis_villeneuve_enemy.jpg",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Jake Gyllenhaal",
        "Mélanie Laurent",
        "Sarah Gadon"
      ],
      "Kategori": [
        "Gerilim"
      ],
      "Süre": "1 sa. 31 dk.",
      "Yıl": "2013",
      "imdb": "6.9/10",
      "metascore": "61",
      "Değerlendirme": "215000"
    },
    "paragraf": "Enemy, psikolojik gerilim türünde kişilik çatışmalarını ve varoluşsal krizleri ele alarak izleyiciyi derinden etkiliyor. Denis Villeneuve filmleri en iyi listesinde, stilize edilmiş yönetmenlik ve özgün senaryosu ile dikkat çeker."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/denis-villeneuve-en-iyi-10-filmi#bolum-5",
    "name": "Incendies",
    "image": "/images/movies/denis_villeneuve_incendies.jpg",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Lubna Azabal",
        "Mélissa Désormeaux-Poulin"
      ],
      "Kategori": [
        "Drama"
      ],
      "Süre": "2 sa. 11 dk.",
      "Yıl": "2010",
      "imdb": "8.3/10",
      "metascore": "80",
      "Değerlendirme": "200000"
    },
    "paragraf": "Incendies, bir aile dramı ve savaşın insan hayatındaki derin yaralarını mercek altına alır. Bu yapıt, uluslararası alanda büyük beğeni toplayarak Denis Villeneuve en iyi filmi adayları arasında kendine sağlam bir yer edindi."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/denis-villeneuve-en-iyi-10-filmi#bolum-4",
    "name": "Sicario",
    "image": "/images/movies/denis_villeneuve_sicario.jpg",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Emily Blunt",
        "Benicio Del Toro",
        "Josh Brolin"
      ],
      "Kategori": [
        "Aksiyon, Gerilim"
      ],
      "Süre": "2 sa. 1 dk.",
      "Yıl": "2015",
      "imdb": "7.6/10",
      "metascore": "82",
      "Değerlendirme": "476000"
    },
    "paragraf": "Sicario, ABD-Meksika sınırındaki uyuşturucu savaşlarını konu alan, yoğun tempolu ve karanlık bir gerilim filmi. Villeneuve'nin yönetmenlik becerilerinin üst düzeyde sergilendiği ve sinematik açıdan övgü alan bir yapım."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/denis-villeneuve-en-iyi-10-filmi#bolum-3",
    "name": "Arrival",
    "image": "/images/movies/denis_villeneuve_arrival.jpg",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Amy Adams",
        "Jeremy Renner",
        "Forest Whitaker"
      ],
      "Kategori": [
        "Bilim Kurgu, Drama"
      ],
      "Süre": "1 sa. 56 dk.",
      "Yıl": "2016",
      "imdb": "7.9/10",
      "metascore": "81",
      "Değerlendirme": "770000"
    },
    "paragraf": "Arrival, bilim kurgu ve dramın mükemmel bir karışımını sunan, dil ve iletişim üzerine derinlemesine bir bakış atar. Film, eleştirmenlerden yüksek notlar alarak, Denis Villeneuve filmleri en iyi listesinde üst sıralarda yer almayı başardı."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/denis-villeneuve-en-iyi-10-filmi#bolum-2",
    "name": "Prisoners",
    "image": "/images/movies/denis_villeneuve_prisoners.jpg",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Hugh Jackman",
        "Jake Gyllenhaal"
      ],
      "Kategori": [
        "Suç, Drama"
      ],
      "Süre": "2 sa. 33 dk.",
      "Yıl": "2013",
      "imdb": "8.1/10",
      "metascore": "74",
      "Değerlendirme": "809000"
    },
    "paragraf": "Prisoners, etkileyici oyunculukları ve sürükleyici Öyküsüyle, bir baba'nın kaybolan kızını bulma çabasını gerçekçi ve yoğun bir şekilde işler. Bu film, Villeneuve'nin anlatım yeteneğinin güçlü bir yansıması."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/denis-villeneuve-en-iyi-10-filmi#bolum-1",
    "name": "Blade Runner 2049",
    "image": "/images/movies/denis_villeneuve_blade_runner_2049.jpg",
    "ozellikler": {
      "Yönetmen": "Denis Villeneuve",
      "Oyuncular": [
        "Ryan Gosling",
        "Harrison Ford"
      ],
      "Kategori": [
        "Bilim Kurgu, Drama"
      ],
      "Süre": "2 sa. 44 dk.",
      "Yıl": "2017",
      "imdb": "8.0/10",
      "metascore": "81",
      "Değerlendirme": "664000"
    },
    "paragraf": "Blade Runner 2049, Denis Villeneuve'nin yönetmenlik kariyerindeki zirve eserlerinden biri olarak kabul edilir. Görsel olarak büyüleyici bu devam filmi, hem eleştirmenlerden yüksek puanlar aldı hem de izleyiciler tarafından yoğun ilgi gördü."
  }
];

const ana_resim = "/images/ana_gorseller/denis_villeneuve_en_iyi_10_film_kapak.jpg" //! SEN DOLDUR
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