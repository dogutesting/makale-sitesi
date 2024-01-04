import { useAppContext } from '@/context/ContextProvider';
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticle from '@/components/article_types/ClassicArticle';

export default function Eniyi1000ccNakedMain() {
  const { nightMode } = useAppContext();

  const keywordsArray = ["en", "iyi", "1000cc", "motosiklet", "naked"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-iyi-10-1000-cc-naked-motosiklet";
  const baslik = "En İyi 10 1000 CC Naked Motosiklet";
  const metin = "1000cc sınıfı naked motosikletler, tecrübeli motosiklet sürücülerinin ellerinde bile agresifliğini ve yırtıcılığını bırakmayan, adrenalini zirveye taşıyan makinalardır. Bu devasa güçler, her bir gaz hareketiyle kendini gösterirken, derin ve tok egzoz notaları ile çevrenizdeki herkesin dikkatini çeker. İster şehir içinde ister açık yolda olsun, bu motosikletler sürücülerine her zaman tam kontrollü bir agresiflik sunar. Yüksek performansları, sofistike teknolojileri ve etkileyici tasarımları ile bu makinalar, sadece hız ve güç tutkunlarına hitap eder. Bu makalede, bu sınıfın en iyi temsilcilerini detaylarıyla inceliyor ve sizi bu benzersiz deneyimi keşfetmeye davet ediyoruz. Okurken heyecanlanacak ve belki de bir sonraki motosikletinizi seçerken bu listeye göz atacaksınız.";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;

  const okunmaSuresi = "5";
  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-03T18:07:00+03:00";
  const degistirilmeTarihi = "2023-11-19T01:13:00+03:00";
  const addDate = "03.10.23";

  const jsonContentArray = [
    {
      "num": "10",
      "url": "https://enonlar.com/${url}#bolum-10",
      "name": "Kawasaki Z1000",
      "image": "/images/motosiklet/kawasaki_z1000.jpg",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Kawasaki",
        "Tip": "Naked",
        "Motor Hacmi": "1043 cc",
        "Sıfır Yüz": "3.1 s",
        "Max Hız": "250 km/s",
        "Tüketim": "5.9 Litre/100 km",
        "Ağırlık": "221 kg",
        "Yakıt Kapasitesi": "17 Litre"
      },
      "paragraf": "Japonya'nın güçlü motosiklet üreticilerinden Kawasaki'nin bu agresif tasarımlı naked modeli, günlük sürüşler kadar heyecanlı sürüşler için de ideal. Z1000, sert ve atak bir yapıya sahip. 1043 cc'lik motoru ile düşük devirden itibaren güçlü tork sunuyor. Gidonunun ve gaz tepkilerinin doğru zamanlama ve hassasiyeti, sürücüsüne yüksek kontrol sağlıyor. Yol tutuşu ve viraj kabiliyeti, sportif sürüşler için oldukça tatminkar. Estetik ve aerodinamik tasarımı sayesinde, Z1000 sürücüsüne sadece performans değil, aynı zamanda stil de sunuyor. Kawasaki Z1000, güç ve estetiği bir araya getiren bir naked motosiklet örneği."
    },
    {
      "num": "9",
      "url": "https://enonlar.com/${url}#bolum-9",
      "name": "Aprilia Tuono V4 1100 RR",
      "image": "/images/motosiklet/aprilia_tuono_v4_1100_rr.png",
      "ozellikler": {
        "Ülke": "İtalya",
        "Firma": "Aprilia",
        "Tip": "Naked",
        "Motor Hacmi": "1077 cc",
        "Sıfır Yüz": "3.1 s",
        "Max Hız": "250 km/s",
        "Tüketim": "6.1 Litre/100 km",
        "Ağırlık": "209 kg",
        "Yakıt Kapasitesi": "18.5 Litre"
      },
      "paragraf": "İtalyan üretici Aprilia'nın başyapıtlarından biri olan Tuono V4 1100 RR, sıradışı bir performans ve çarpıcı bir tasarım sunuyor. Motorun V4 motor konfigürasyonu, torkun geniş bir devir aralığında dağılmasını sağlayarak sürücüsüne eşsiz bir hızlanma ve tepki veriyor. Aprilia'nın gelişmiş elektronik sürüş destek sistemleri, bu motosikleti her seviyeden sürücü için dostane ve güvenli kılıyor. Yol tutuşu ve fren performansı, markanın yarış kökenlerini yansıtacak şekilde üst düzeyde."
    },
    {
      "num": "8",
      "url": "https://enonlar.com/${url}#bolum-8",
      "name": "Ducati Monster 1200",
      "image": "/images/motosiklet/ducati_monster_1200.png",
      "ozellikler": {
        "Ülke": "İtalya",
        "Firma": "Ducati",
        "Tip": "Naked",
        "Motor Hacmi": "1198 cc",
        "Sıfır Yüz": "3.1 s",
        "Max Hız": "250 km/s",
        "Tüketim": "5.9 Litre/100 km",
        "Ağırlık": "239 kg",
        "Yakıt Kapasitesi": "17.5 Litre"
      },
      "paragraf": "İtalyan estetiği ve mühendisliği ile öne çıkan Ducati Monster 1200, hem günlük sürüşler hem de sportif kullanım için uygun bir seçenek. V-twin motoru yüksek tork ve güç sunarken, yol tutuşu ve viraj kabiliyeti de üst düzey. Gidon ve gaz tepkisi oldukça hassas, bu da sürücüye tam kontrol sağlar. Sert süspansiyon sistemi kötü yol koşullarında konforu biraz düşürse de, genel olarak Ducati Monster 1200, performans ve tasarımı bir araya getiren başarılı bir model."
    },
    {
      "num": "7",
      "url": "https://enonlar.com/${url}#bolum-7",
      "name": "Yamaha MT-10",
      "image": "/images/motosiklet/yamaha_mt_10.png",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Yamaha",
        "Tip": "Naked",
        "Motor Hacmi": "998 cc",
        "Sıfır Yüz": "3.1 s",
        "Max Hız": "250 km/s",
        "Tüketim": "5.9 Litre/100 km",
        "Ağırlık": "212 kg",
        "Yakıt Kapasitesi": "17 Litre"
      },
      "paragraf": "Japonya'nın önde gelen motosiklet üreticilerinden Yamaha'nın MT-10 modeli, agresif tasarımı ve yüksek performansı ile dikkat çekiyor. Crossplane kranklı dört silindirli motoru, güçlü tork ve hızlı hızlanma sunarken, elektronik kontrol sistemleri ve modlar sayesinde sürücüsüne esneklik ve kontrol sağlıyor. Yol tutuşu ve fren performansı, motorun bu segmentteki rakipleri arasında öne çıkmasını sağlıyor. Gidon ve gaz tepkisi hassas, bu da sürücüye mükemmel bir kontrol ve yanıt veriyor. Yamaha MT-10, her türlü yolda ve koşulda güvenli ve eğlenceli bir sürüş deneyimi sunuyor."
    },
    {
      "num": "6",
      "url": "https://enonlar.com/${url}#bolum-6",
      "name": "KTM 1290 Super Duke R",
      "image": "/images/motosiklet/ktm_1290_super_duke_r.png",
      "ozellikler": {
        "Ülke": "Avusturya",
        "Firma": "KTM",
        "Tip": "Naked",
        "Motor Hacmi": "1301 cc",
        "Sıfır Yüz": "3.1 s",
        "Max Hız": "250 km/s",
        "Tüketim": "5.9 Litre/100 km",
        "Ağırlık": "198 kg",
        "Yakıt Kapasitesi": "18 Litre"
      },
      "paragraf": "Avusturya'nın sert ve agresif motosiklet üreticisi KTM, 1290 Super Duke R ile agresifliğini sergiliyor. Büyük hacimli motoru ve devasa torku ile her türlü hızlanmayı ve manevrayı rahatlıkla gerçekleştirebilirsiniz. Motosiklet, elektronik güvenlik ve sürüş yardım sistemleri ile donatılmış, bu da sürücüye daha fazla kontrol ve güvenlik sunuyor. Yol tutuşu ve fren performansı, bu segmentin önde gelenlerinden. Gidon ve gaz tepkisi oldukça hassas, bu da dinamik sürüşleri daha eğlenceli ve kontrol edilebilir kılıyor. KTM 1290 Super Duke R, performansı ve agresif tasarımı ile tam bir adrenalin makinesi."
    },
    {
      "num": "5",
      "url": "https://enonlar.com/${url}#bolum-5",
      "name": "Honda CB1000R",
      "image": "/images/motosiklet/honda_cb1000r.png",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Honda",
        "Tip": "Naked",
        "Motor Hacmi": "998 cc",
        "Sıfır Yüz": "3.3 s",
        "Max Hız": "234 km/s",
        "Tüketim": "6.9 Litre/100 km",
        "Ağırlık": "213 kg",
        "Yakıt Kapasitesi": "16.2 Litre"
      },
      "paragraf": "Japonya'nın köklü motosiklet üreticisi Honda'nın CB1000R modeli, sofistike tasarımı ve mükemmel işçiliği ile dikkat çeker. Dört silindirli motoru, güçlü ve lineer bir güç dağılımı sağlarken, yol tutuşu ve fren performansı da sınıf standartlarının üzerinde. Gidon ve gaz tepkisi son derece dengeli, bu sayede motoru kontrol etmek oldukça kolay. Honda CB1000R, şehir içinde veya uzun yolda, hem konforlu hem de dinamik bir sürüş deneyimi sunar. Ayrıca, motosikletin LED farları ve dijital gösterge paneli gibi modern özellikleri, kullanıcısına günümüz teknolojisini sunuyor."
    },
    {
      "num": "4",
      "url": "https://enonlar.com/${url}#bolum-4",
      "name": "Suzuki GSX-S1000",
      "image": "/images/motosiklet/suzuki_gsx_s1000.png",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Suzuki",
        "Tip": "Naked",
        "Motor Hacmi": "999 cc",
        "Sıfır Yüz": "3.2 s",
        "Max Hız": "241 km/s",
        "Tüketim": "5.9 Litre/100 km",
        "Ağırlık": "214 kg",
        "Yakıt Kapasitesi": "19 Litre"
      },
      "paragraf": "Japonya'nın tecrübeli motosiklet üreticisi Suzuki'nin GSX-S1000 modeli, agresif tasarımı ve yüksek performansı ile öne çıkar. Bu model, dört silindirli motoru ile süratli bir şekilde hızlanırken, yol tutuşu ve frenleme performansı da kullanıcılarına güven veriyor. Gidon tepkisi dengeli ve gaz tepkisi hassas, bu da sürücülerin motoru daha iyi kontrol etmelerini sağlıyor. GSX-S1000, virajlarda istikrarlı bir performans sunarken, süspansiyon sistemi de hem konforlu hem de sert bir sürüş deneyimi sunuyor. Suzuki GSX-S1000, güçlü motoru ve sportif tasarımı ile naked motosiklet segmentinde kendine sağlam bir yer buluyor."
    },
    {
      "num": "3",
      "url": "https://enonlar.com/${url}#bolum-3",
      "name": "BMW S1000R",
      "image": "/images/motosiklet/bmw_s1000r.png",
      "ozellikler": {
        "Ülke": "Almanya",
        "Firma": "BMW",
        "Tip": "Naked",
        "Motor Hacmi": "999 cc",
        "Sıfır Yüz": "3.1 s",
        "Max Hız": "260 km/s",
        "Tüketim": "6.2 Litre/100 km",
        "Ağırlık": "199 kg",
        "Yakıt Kapasitesi": "16.5 Litre"
      },
      "paragraf": "Alman mühendisliğinin bir simgesi olan BMW'nin S1000R modeli, yüksek performansı ve ince tasarım detayları ile dikkat çekiyor. Motosiklet, güçlü motoru ve mükemmel yol tutuşu ile sürücülerine tam bir sürüş deneyimi sunuyor. Gaz tepkisi hassas ve motorun gücü, hızlanma esnasında sürücüye etkileyici bir tork sağlıyor. S1000R, virajlarda da oldukça başarılı ve güven veriyor. Süspansiyon sistemi, sürücünün her türlü yol koşulunda rahat ve kontrolü bir sürüş deneyimi yaşamasını sağlıyor. BMW S1000R, premium bir naked motosiklet deneyimi arayan sürücüler için ideal bir tercih."
    },
    {
      "num": "2",
      "url": "https://enonlar.com/${url}#bolum-2",
      "name": "MV Agusta Brutale 1000 RR",
      "image": "/images/motosiklet/mv_agusta_brutale_1000rr.png",
      "ozellikler": {
        "Ülke": "İtalya",
        "Firma": "MV Agusta",
        "Tip": "Naked",
        "Motor Hacmi": "998 cc",
        "Sıfır Yüz": "3.1 s",
        "Max Hız": "300 km/s",
        "Tüketim": "6.7 Litre/100 km",
        "Ağırlık": "186 kg",
        "Yakıt Kapasitesi": "16 Litre"
      },
      "paragraf": "İtalyan zarafeti ve mühendisliği, MV Agusta Brutale 1000 RR'de kendini gösteriyor. Bu motosiklet, inovatif aerodinamik tasarımı ve 208 beygir gücündeki muazzam motoru ile sınıfındaki diğer motosikletlerden ayrılıyor. Sürücüsüne sadece yüksek performans değil, aynı zamanda konfor ve kolay kullanım sunuyor. Elektronik kontrol sistemleri ve tamamen ayarlanabilir süspansiyon, her türlü yol koşulunda mükemmel bir sürüş deneyimi sağlıyor."
    },
    {
      "num": "1",
      "url": "https://enonlar.com/${url}#bolum-1",
      "name": "Ducati Streetfighter V4",
      "image": "/images/motosiklet/ducati_streetfighter_v4.png",
      "ozellikler": {
        "Ülke": "İtalya",
        "Firma": "Ducati",
        "Tip": "Naked",
        "Motor Hacmi": "1103 cc",
        "Sıfır Yüz": "3.0 s",
        "Max Hız": "290 km/s",
        "Tüketim": "6.7 Litre/100 km",
        "Ağırlık": "200 kg",
        "Yakıt Kapasitesi": "16 Litre"
      },
      "paragraf": "İtalya'nın prestijli motosiklet üreticisi Ducati'nin bu eseri, aerodinamik kanatları ve elektronik süspansiyon sistemleri ile öne çıkıyor. Streetfighter V4, sadece sokaklarda değil, pistlerde de kendini kanıtlıyor. Sürücüler, etkileyici bir güç, mükemmel yol tutuşu ve adrenalin dolu bir sürüş deneyimi elde ediyorlar. Ayrıca, Ducati'nin öncü elektronik kontrol sistemleri sayesinde, bu motosiklet sürüş güvenliğini ve kontrolünü artırıyor. Agresif tasarımı ve yüksek kaliteli bileşenleri ile Streetfighter V4, sınıfının en iyileri arasında kendine sağlam bir yer buluyor."
    }
  ];

  const ana_resim = "/images/ana_gorseller/enonlar-en-iyi-10-1000-cc-naked-motosiklet.png";
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};
  
  const jsonList = moviesAndSeriesJson(articleInfos,
  "Motosiklet", 
  metin,
  jsonContentArray
  )

  return (
    <ClassicArticle baslik={baslik} description={description} keywordsArray={keywordsArray}
        ana_resim={ana_resim} url={url} jsonList={jsonList} nightMode={nightMode} addDate={addDate}
            okunmaSuresi={okunmaSuresi ? okunmaSuresi : jsonList.readTimeSpan}
            kategori={kategori} metin={metin} jsonContentArray={jsonContentArray}>
    </ClassicArticle>
  )
}