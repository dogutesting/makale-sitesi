
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

//! GENEL OLARAK YANLIŞ VAR MI DİYE BAK

export default function Psikopatlarin10OzelligiMain({topCPO}) {
//#region SAYFA TEXT TANIMLAMALARI
const url = "psikopatlarin-10-ozelligi";
const baslik = "Psikopatların 10 Özelliği";
const metin = "Bu yazımızda, psikopatlık hakkında sıkça merak edilen, psikopatların genel özelliklerini derinlemesine inceliyoruz. Psikopatlık, sadece film ve dizilerde gördüğümüz bir konsept değil, gerçek hayatta da karşımıza çıkan bir durumdur. Psikopatların ortak özellikleri, psikopatların fiziksel özellikleri ve psikopatların özellikleri nelerdir gibi soruların yanıtlarını bulabileceğiniz bu listeye dikkatli bakın.";
const bitis_metin = "Bu yazımızda, psikopatların özellikleri üzerine derinlemesine bir bakış attık. Psikopatların genel özellikleri, onları anlamamız ve tanımamızda bize yardımcı olabilir. Umarız bu içerik, psikopatların dünyasına dair farkındalığınızı artırmıştır.";
const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
const keywordsArray = ["psikopatlarin","10","ozelligi"]; //! BAK
const kategori = "bilgi"; //! SEN DOLDUR
const minAge = "18";
const yazar = "I Will";
const eklenmeTarihi = "2024-04-27T18:51:40+03:00";
const degistirilmeTarihi = "2024-04-27T18:51:40+03:00";
const addDate = "27.04.24";

const jsonContentArray = [
  {
    "num": "10",
    "url": "https://enonlar.com/psikopatlarin-10-ozelligi#bolum-10",
    "name": "Duygusal Yoksunluk",
    "image": "/images/bilgi/psikopat_10.png",
    "paragraf": "Başlıyoruz psikopatlardaki en belirgin özelliklerden biri olan Duygusal Yoksunluk ile. Bu bireyler, başkalarının duygularını anlama veya empati kurma yeteneği konusunda ciddi şekilde yoksundurlar. Bu, psikopatların özellikleri arasında sık sık rastlanan bir durumdur ve çevreleriyle sağlıklı ilişkiler kurmalarını zorlaştırır."
  },
  {
    "num": "9",
    "url": "https://enonlar.com/psikopatlarin-10-ozelligi#bolum-9",
    "name": "Yüksek Stres Toleransı",
    "image": "/images/bilgi/psikopat_9.jpg",
    "paragraf": "9 numarada, psikopatların genelde yüksek stres toleransına sahip olduklarını görüyoruz. Bu, onların zor durumlarda bile duygusal olarak dengelerini koruyabilmelerine olanak tanır. Bu özellik, sıklıkla psikopatların ortak özellikleri arasında gösterilir ve bazen tehlikeli veya riskli davranışlara yol açabilir."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/psikopatlarin-10-ozelligi#bolum-8",
    "name": "Yalan Söyleme Eğilimi",
    "image": "/images/bilgi/psikopat_8.jpg",
    "paragraf": "Yalan söylemek, psikopatların sıklıkla başvurduğu bir yöntemdir. Bu, onların manipülasyon yeteneklerinin bir parçasıdır ve genellikle kişisel kazanç için kullanılır. Psikopatların özellikleri nelerdir diye sorulduğunda, yalan söyleme eğilimi mutlaka listeye dahil edilmelidir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/psikopatlarin-10-ozelligi#bolum-7",
    "name": "Kısa Süreli İlişkiler",
    "image": "/images/bilgi/psikopat_7.jpg",
    "paragraf": "Psikopatlar genellikle kısa ve yüzeyel ilişkiler kurarlar. Bu, duygusal yoksunlukları ve empati eksiklikleri nedeniyle uzun süreli bağlar kurmada zorlanmalarından kaynaklanır. Psikopatların fiziksel özellikleri kadar sosyal özellikleri de önem arz eder."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/psikopatlarin-10-ozelligi#bolum-6",
    "name": "Riskli Davranışlar",
    "image": "/images/bilgi/psikopat_6.jpg",
    "paragraf": "Risk almak, psikopatların sık rastlanan bir davranışıdır. Bu kişiler, tehlikeyi ve sonuçlarını göz ardı ederek adrenalin yüklü aktivitelerde bulunabilirler. Bu özellik, psikopatların özellikleri arasında daima dikkat çeker."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/psikopatlarin-10-ozelligi#bolum-5",
    "name": "Manipülasyon Yeteneği",
    "image": "/images/bilgi/psikopat_5.jpg",
    "paragraf": "5. sırada, psikopatların en belirgin yeteneklerinden biri olan manipülasyon kabiliyeti bulunmaktadır. Bu kişiler, başkalarını kendi çıkarları doğrultusunda yönlendirebilir ve bu beceriyi sıklıkla kişisel kazanç için kullanırlar."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/psikopatlarin-10-ozelligi#bolum-4",
    "name": "Merhametsizlik",
    "image": "/images/bilgi/psikopat_4.jpg",
    "paragraf": "Merhametsizlik, psikopatların sıkça gösterdikleri bir başka özelliktir. Bu kişiler, başkalarının acısına karşı duyarsız olabilirler ve bu durum, onların sosyal ilişkilerinde ciddi sorunlara yol açabilir."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/psikopatlarin-10-ozelligi#bolum-3",
    "name": "Cezasız Kalma Hissi",
    "image": "/images/bilgi/psikopat_3.jpg",
    "paragraf": "Psikopatlar genellikle yaptıkları eylemlerin sonuçlarına çok az önem verirler ve cezasız kalacaklarını düşünürler. Bu his, onların suç işleme eğilimini güçlendirebilir ve toplumda tehlikeli olabilir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/psikopatlarin-10-ozelligi#bolum-2",
    "name": "Egosenlik",
    "image": "/images/bilgi/psikopat_2.jpg",
    "paragraf": "İkinci sırada, psikopatların egolarının yüksek olduğunu görüyoruz. Bu bireyler, kendilerini her zaman en üstün olarak görme eğilimindedirler ve bu durum, çevreleriyle olan ilişkilerini olumsuz yönde etkileyebilir."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/psikopatlarin-10-ozelligi#bolum-1",
    "name": "Vicdansızlık",
    "image": "/images/bilgi/psikopat_1.jpg",
    "paragraf": "Listemizin en üst sırasında yer alan Vicdansızlık, psikopatların en tehlikeli özelliklerinden biridir. Bu kişiler, başkalarına zarar verme konusunda hiçbir pişmanlık hissetmeyebilirler. Bu özellik, psikopatların diğer insanlara karşı oldukça zararlı olabilecek eylemlerde bulunmalarına neden olur."
  }
];

const ana_resim = "/images/ana_gorseller/psikopatlarin_10_ozelligi_kapak.jpg" //! SEN DOLDUR
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