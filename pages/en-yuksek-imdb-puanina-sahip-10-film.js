import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

export default function MostMoviesMain({topCPO}) {
  
  //#region SAYFA İÇİ TEXT TANIMLAMALARI
  const url = "en-yuksek-imdb-puanina-sahip-10-film";
  const baslik = "En Yüksek imdb Puanına Sahip 10 Film";
  const metin = `Sinemanın büyülü dünyasında, bazı filmler sadece eğlendirmekten öteye geçer, 
  ruhumuza dokunur ve bizi derinden etkiler. Onların bizdeki değeri farklıdır. İnsanların çoğunluğunu etkileyen imdb puanı yüksek filmleri sizleri de etkilemesi için derledik.  
  sadece teknik başarısıyla değil, aynı zamanda evrensel temaları, duygusal derinlikleri ve etkileyici karakterleriyle de ön plana çıkar. 
  En yüksek imdb puanlı filmler olan ve listelerin en sevilen bu şaheserlere kısa bir dalış yapacağız.  
  Bu imdb top 10 filmi izleyiciye hayatın farklı yönlerini, insan doğasını ve toplumsal değerleri sorgulama fırsatı sunar. Bu filmler diğerlerinden ayrı sınıflandırılır çünkü bu kadar yüksek imdb puanınlı filmler çok az 
  çekilir. Aynı zamanda bu filmleri imdb puanı yüksek yabancı filmler olarakta algılayabiliriz çünkü içerisinde henüz bir Türk yapımı film yok.
  İşte sinemanın zirvesine ulaşmış imdb puanı yüksek yabancı filmler, her sinemaseverin hayatında en az bir kez izlemesi gereken imdb ilk 10 filmini sizlere sunuyoruz.`;
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  const keywordsArray = ["en", "yuksek", "imdb", "puani", "filmler"]; //burada türkçe karakter olacak mı bir fikrim yok
  const kategori = "film"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-02T14:18:00+03:00";
  const degistirilmeTarihi = "2023-11-19T01:13:00+03:00";
  const addDate = "02.10.23";

  const jsonContentArray = [
      {
        "num": "10",
        "url": `https://enonlar.com/${url}#bolum-10`,
        "name":"İyi, Kötü ve Çirkin - The Good, the Bad and the Ugly",
        "image":`/images/movies/iyi_kotu_cirkin.jpg`,
        "ozellikler": {
          "Yıl":"1966",
          "Süre": "2 sa. 41 dk.",
          "Kategori": ["Vahşi Batı"],
          "imdb":"8.8/10",
          "metascore": "90",
          "Oyuncular":["Clint Eastwood", "Lee Van Cleef", "Eli Wallach"],
          "Yönetmen":"Sergio Leone"
        },
        "paragraf": "'Il buono, il brutto, il cattivo', Sergio Leone'nin yönettiği, Ennio Morricone'nin unutulmaz müziğiyle süslenmiş bir Vahşi Batı klasiğidir. Clint Eastwood, Lee Van Cleef ve Eli Wallach'ın başrollerini paylaştığı film, Amerikan İç Savaşı sırasında üç silahşörün, gizli bir defineyi bulma yarışındaki maceralarını anlatıyor. Filmdeki karakterler arasındaki ilişkiler, dinamikler ve etkileyici sahneler, onu tüm zamanların en iyi Vahşi Batı filmlerinden biri yapar. Film aynı zamanda hayatta kalma, hırs, ihanet ve onur temalarını derinlemesine işler."
      },
      {
        "num": "9",
        "url": `https://enonlar.com/${url}#bolum-9`,
        "name":"Yüzüklerin Efendisi: Yüzük Kardeşliği - The Lord of the Rings: The Fellowship of the Ring",
        "image":`/images/movies/yuzuklerin_efendisi_yuzuk_kardesligi.jpg`,
        "ozellikler": {
          "Yıl":"2001",
          "Süre": "2 sa. 58 dk.",
          "Kategori": ["Fantastik", "Macera", "Dram"],
          "imdb":"8.8/10",
          "metascore": "92",
          "Oyuncular":["Liv Tyler", "Sean Astin", "Sean Bean"],
          "Yönetmen":"Peter Jackson"
        },
        "paragraf": "Orta Dünya'nın kaderini belirleyecek olan Yüzük'ü yok etme görevini üstlenen Frodo ve arkadaşlarının epik yolculuğunu anlatan bu film, fantastik edebiyatın en ünlü eserlerinden birinin sinemaya uyarlamasıdır. Görsel efektleri, müzikleri ve hikayesiyle büyüleyici bir deneyim sunar."
    },
    {
        "num": "8",
        "url": `https://enonlar.com/${url}#bolum-8`,
        "name":"Ucuz Roman - Pulp Fiction",
        "image":`/images/movies/ucuz_roman.jpg`,
        "ozellikler": {
          "Yıl":"1994",
          "Süre": "2 sa. 34 dk.",
          "Kategori": ["Suç", "Dram"],
          "imdb":"8.9/10",
          "metascore": "95",
          "Oyuncular":["Uma Thurman", "John Travolta", "Samuel L. Jackson"],
          "Yönetmen":"Quentin Tarantino"
        },
        "paragraf": "Quentin Tarantino'nun özgün anlatım tarzıyla hazırladığı bu film, farklı hikayeleri bir araya getirerek izleyiciye sıradışı bir deneyim sunar. Film, suç dünyasının karanlık yüzünü, mizahi bir dille gösteriyor. Tarantino'nun eşsiz diyalogları ve karakter derinliği, filmin unutulmaz olmasını sağlıyor."
    },
    {
        "num": "7",
        "url": `https://enonlar.com/${url}#bolum-7`,
        "name":"Yüzüklerin Efendisi: Kralın Dönüşü - The Lord of the Rings: The Return of the King",
        "image":`/images/movies/yuzuklerin_efendisi_kralin_donusu.jpg`,
        "ozellikler": {
          "Yıl":"2003",
          "Süre": "3 sa. 21 dk.",
          "Kategori": ["Fantastik", "Macera", "Dram"],
          "imdb":"9.0/10",
          "metascore": "94",
          "Oyuncular":["Liv Tyler", "Sean Astin", "Elijah Wood"],
          "Yönetmen":"Peter Jackson"
        },
        "paragraf": "Orta Dünya'nın kaderini belirleyecek olan son savaşın anlatıldığı bu film, Frodo ve Sam'in Yüzük'ü yok etme görevini tamamlamaya çalışmalarını, Aragorn'un kral olarak taç giymesini ve diğer karakterlerin kendi yollarını bulmalarını anlatır. Epik savaş sahneleri, duygusal anlar ve muhteşem görsel efektlerle dolu bu film, serinin muazzam bir finali olarak karşımıza çıkıyor."
    },
    {
        "num": "6",
        "url": `https://enonlar.com/${url}#bolum-6`,
        "name":"Schindler'in Listesi - Schindler's List",
        "image":`/images/movies/schindler_in_listesi.jpg`,
        "ozellikler": {
          "Yıl":"1993",
          "Süre": "3 sa. 15 dk.",
          "Kategori": ["Dram", "Tarih", "Biyografi"],
          "imdb":"9.0/10",
          "metascore": "95",
          "Oyuncular":["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
          "Yönetmen":"Steven Spielberg"
        },
        "paragraf": "Steven Spielberg'in yönettiği bu film, gerçek bir hikayeye dayanmaktadır. İkinci Dünya Savaşı sırasında Nazi işgali altındaki Polonya'da, işadamı Oskar Schindler'in Yahudi işçileri kurtarma çabalarını anlatır. Film, insanlık, fedakarlık ve umut temalarını işleyerek, izleyenler üzerinde derin bir etki bırakır."
    },
    {
        "num": "5",
        "url": `https://enonlar.com/${url}#bolum-5`,
        "name":"12 Öfkeli Adam - 12 Angry Men",
        "image":`/images/movies/12_ofkeli_adam.jpg`,
        "ozellikler": {
          "Yıl":"1957",
          "Süre": "1 sa. 36 dk.",
          "Kategori": ["Dram"],
          "imdb":"9.0/10",
          "metascore": "97",
          "Oyuncular":["Henry Fonda", "Martin Balsam", "Lee J. Cobb"],
          "Yönetmen":"Sidney Lumet"
        },
        "paragraf": "12 Angry Men, bir jüri odasında geçen ve bir cinayet davasını tartışan 12 jüri üyesinin hikayesini anlatan sade ama etkili bir filmdir. Film, önyargıların, bireysel deneyimlerin ve adaletin doğasının derinlemesine incelenmesiyle dikkat çeker. Her bir jüri üyesinin kendi inançları ve değerleriyle nasıl mücadele ettiğini göstererek, izleyiciye adaletin ne anlama geldiğini sorgulatır."
    },
    {
        "num": "4",
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name":"Baba II - The Godfather Part II",
        "image":`/images/movies/baba_2.jpg`,
        "ozellikler": {
          "Yıl":"1974",
          "Süre": "3 sa. 22 dk.",
          "Kategori": ["Suç", "Dram"],
          "imdb":"9.0/10",
          "metascore": "90",
          "Oyuncular":["Al Pacino", "Robert De Niro", "Robert Duvall"],
          "Yönetmen":"Francis Ford Coppola",
        },
        "paragraf": "Baba serisinin ikinci filmi olan 'The Godfather Part II', Corleone ailesinin hikayesini devam ettiriyor ve aynı zamanda Vito Corleone'nin gençliğini ve nasıl bir suç lordu haline geldiğini anlatıyor. Film, aile bağlarını, iktidar mücadelesini ve onur kavramını derinlemesine ele alırken, aynı zamanda Amerikan rüyasının karanlık yüzünü de gözler önüne serer."
    },
    {
        "num": "3",
        "url": `https://enonlar.com/${url}#bolum-3`,
        "name":"Kara Şövalye - The Dark Knight",
        "image":`/images/movies/batman_kara_sovalye.jpg`,
        "ozellikler": {
          "Yıl":"2008",
          "Süre": "2 sa. 32 dk.",
          "Kategori": ["Aksiyon", "Dram", "Suç"],
          "imdb":"9.0/10",
          "metascore": "84",
          "Oyuncular":["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
          "Yönetmen":"Christopher Nolan"
        },
        "paragraf": "Christopher Nolan'ın yönetmenliğindeki bu film, Batman'in Joker ile olan mücadelesini anlatıyor. Heath Ledger'ın unutulmaz performansıyla Joker karakterini hayata geçirdiği film, iyi ve kötü arasındaki sınırın ne kadar belirsiz olabileceğini gösteriyor. Aynı zamanda, bir kahramanın toplum üzerindeki etkisini ve bir suçlunun bir şehri nasıl kaosa sürükleyebileceğini de ele alıyor."
    },
    {
        "num": "2",
        "url": `https://enonlar.com/${url}#bolum-2`,
        "name":"Baba - The Godfather",
        "image":`/images/movies/baba.jpg`,
        "ozellikler": {
          "Yıl":"1972",
          "Süre": "2 sa. 55 dk.",
          "Kategori": ["Suç", "Dram"],
          "imdb":"9.2/10",
          "metascore": "100",
          "Oyuncular":["Marlon Brando", "Al Pacino", "James Caan"],
          "Yönetmen":"Francis Ford Coppola"
        },
        "paragraf": "Corleone ailesinin hikayesini anlatan bu epik film, mafya dünyasının iç yüzünü, aile bağlarını, iktidar mücadelesini ve onur kavramını derinlemesine ele alır. Film, aynı zamanda Amerikan rüyasına, ailenin toplumdaki yerine ve suçun cazibesine dair sorgulamalar yapar."
    },
    {
        "num": "1",
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name":"Esaretin Bedeli - The Shawshank Redemption",
        "image":`/images/movies/esaretin_bedeli.jpg`,
        "ozellikler": {
          "Yıl":"1994",
          "Süre": "2 sa. 22 dk.",
          "Kategori": ["Dram"],
          "imdb":"9.3/10",
          "metascore": "82",
          "Oyuncular":["Tim Robbins", "Morgan Freeman"],
          "Yönetmen":"Frank Darabont"
        },
        "paragraf": "Stephen King'in kısa hikayesinden uyarlanan bu film, Andy Dufresne'nin suçsuz yere mahkum edildiği Shawshank hapishanesinde geçirdiği yılları ve orada kurduğu dostlukların hikayesini anlatır. Film, umut, özgürlük ve insani direncin gücüne dair sıcak bir mesaj verir."
    }  
  ];

  const ana_resim = "/images/ana_gorseller/enonlar-en-yuksek-imdb-puanina-sahip-10-film.png";
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};
  
  const jsonList = moviesAndSeriesJson(articleInfos,
  "Movies", 
  metin,
  jsonContentArray
  )
  //#endregion

  const articleConstructor = {
    baslik, description, keywordsArray, ana_resim, url, jsonList, addDate, okunmaSuresi: jsonList.readTimeSpan, kategori, metin, jsonContentArray
  }

  return (
    <ClassicArticleTop topCPO={topCPO} articleConstructor={articleConstructor}/>
  )
}