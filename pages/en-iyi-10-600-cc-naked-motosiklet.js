import { useAppContext } from '@/context/ContextProvider';
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticle from '@/components/article_types/ClassicArticle';

export default function Eniyi600ccNakedMain() {
  const { nightMode } = useAppContext();

  const keywordsArray = ["en", "iyi", "600cc", "motosiklet", "naked"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-iyi-10-600-cc-naked-motosiklet";
  const baslik = "En İyi 10 600 CC Naked Motosiklet";
  const metin = "600cc'lik motorlar, genel olarak orta ve tecrübeli motor sürücülerine hitap eder. Naked sınıfının özgürlüğünü ve 600cc veya 700cc naked motosiklet gücünün atılganlığını birleştirerek, esnek ve enerjik bir sürüş deneyimi sunar. Bu liste, her biri kendi sınıfında öne çıkan 10 farklı modeli içermekte. Siz de 600cc'lik naked motosikletlerin sunduğu bu benzersiz deneyimi keşfetmek için yazımızı okumaya devam edin ve heyecanınızı kesfedin!";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;

  const okunmaSuresi = "5";
  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-03T02:32:00+03:00";
  const degistirilmeTarihi = "2023-11-19T01:13:00+03:00";
  const addDate = "03.10.23";

  const jsonContentArray = [
    {
      "num": "10",
      "url": `https://enonlar.com/${url}#bolum-10`,
      "name": "MV Agusta Brutale 675",
      "image": "/images/motosiklet/mv_agusta_brutale_675.png",
      "ozellikler": {
          "Ülke": "İtalya",
          "Firma": "MV Agusta",
          "Tip": "Naked",
          "Motor Hacmi": "675 cc",
          "Sıfır Yüz": "3.9 s",
          "Max": "245 km/s",
          "Tüketim": "5.6 Litre/100 km",
          "Ağırlık": "163 kg",
          "Yakıt Kapasitesi": "16.5 Litre"
      },
      "paragraf": "İtalya'nın prestijli motosiklet üreticilerinden biri olan MV Agusta'nın Brutale serisi, estetik ve performansı bir araya getiriyor. Brutale 675, hafifliği ve kompakt tasarımı sayesinde hem şehir içi hem de uzun yolculuklarda sürücüsüne eşsiz bir deneyim sunuyor. Motosikletin üç silindirli motoru, düşük ve orta devirlerde bile mükemmel bir tork sağlarken, yüksek devirlerde de etkileyici bir performans ortaya koyuyor. Yol tutuşu ve fren performansı da oldukça tatminkar. Ancak, süspansiyon sistemi biraz sert olabilir ve bu, kötü yol koşullarında konforu etkileyebilir. Brutale 675, sadece performansı ve estetiğiyle değil, aynı zamanda sürücüsüne sunduğu premium hissiyatla da dikkat çekiyor."
  },
  {
    "num": "9",
    "url": `https://enonlar.com/${url}#bolum-9`,
    "name": "Triumph Street Triple R",
    "image": "/images/motosiklet/triumph_street_triple_r.png",
    "ozellikler": {
        "Ülke": "Britanya",
        "Firma": "Triumph",
        "Tip": "Naked",
        "Motor Hacmi": "675 cc",
        "Sıfır Yüz": "3.7 s",
        "Max": "220 km/s",
        "Tüketim": "5.4 Litre/100 km",
        "Ağırlık": "168 kg",
        "Yakıt Kapasitesi": "15 Litre"
    },
    "paragraf": "Britanya'nın efsanevi motosiklet üreticisi Triumph, Street Triple modeli ile naked segmentine sofistike ve güçlü bir seçenek sunuyor. Street Triple, 675cc hacmindeki motoru ile hem günlük kullanımda hem de daha sportif sürüşlerde iddialı. Hafif ve kompakt yapısı, sürüş dinamiklerini olumlu yönde etkiliyor ve hızlı manevra kabiliyeti sunuyor. Motorun dengeli tork dağılımı ve lineer güç çıkışı sayesinde sürücüsüne güven veriyor. Yol tutuşu ve fren performansı üst düzeyde, ve sürüş pozisyonu rahat. Ancak, süspansiyon sistemi biraz daha yumuşak olabilirdi. Triumph Street Triple, kalitesi ve sürüş dinamikleri ile sınıfında ön plana çıkıyor."
  },
  {
    "num": "8",
    "url": `https://enonlar.com/${url}#bolum-8`,
    "name": "Aprilia Shiver 750",
    "image": "/images/motosiklet/aprilia_shiver_750.png",
    "ozellikler": {
        "Ülke": "İtalya",
        "Firma": "Aprilia",
        "Tip": "Naked",
        "Motor Hacmi": "750 cc",
        "Sıfır Yüz": "4.0 s",
        "Max": "210 km/s",
        "Tüketim": "5.5 Litre/100 km",
        "Ağırlık": "189 kg",
        "Yakıt Kapasitesi": "15 Litre"
    },
    "paragraf": "İtalya'nın prestijli motosiklet üreticisi Aprilia'nın, Shiver 750 modeli, estetik ve performansı bir arada sunuyor. 750cc motor hacmi ile segmentinde ciddi bir güç sunan Shiver, dinamik tasarımı ve ergonomik yapısı ile dikkat çekiyor. Motorun güç dağılımı dengeli ve tahmin edilebilir, bu da sürücüye güven veriyor. Yol tutuşu ve fren performansı tatmin edici seviyede. Konforlu sürüş pozisyonu sayesinde hem şehir içi hem de uzun yol kullanımlarında rahatlık sunuyor. Süspansiyon sistemi, zorlu yol koşullarında bile konforu koruyor. Aprilia Shiver 750, performansı ve konforu bir arada sunarak, segmentinde güçlü bir seçenek oluşturuyor."
  },
  {
    "num": "7",
    "url": `https://enonlar.com/${url}#bolum-7`,
    "name": "Benelli TNT 600",
    "image": "/images/motosiklet/benelli_tnt_600.png",
    "ozellikler": {
        "Ülke": "İtalya",
        "Firma": "Benelli",
        "Tip": "Naked",
        "Motor Hacmi": "600 cc",
        "Sıfır Yüz": "4.0 s",
        "Max": "220 km/s",
        "Tüketim": "5.6 Litre/100 km",
        "Ağırlık": "220 kg",
        "Yakıt Kapasitesi": "15 Litre"
    },
    "paragraf": "İtalyan tasarım harikası Benelli TNT 600, estetik ve performansı bir araya getirerek dikkat çekici bir super sport motosiklet deneyimi sunar. 600cc'lik motoru ile tatminkar bir hız ve ivmelenme sağlar. Motosikletin tasarımı, aerodinamik özellikleri sayesinde yüksek hızlarda bile rüzgar direncini en aza indirir ve sürücüsüne daha fazla kontrol imkanı tanır. Yol tutuşu ve fren performansı, Benelli'nin bu modelinde de oldukça başarılı. Gidon ve gaz tepkisi mükemmel, bu da sürücüye daha iyi bir manevra kabiliyeti sağlar. TNT 600, performans ve estetiğiyle birlikte konforlu bir sürüş deneyimi sunarak, super sport motosiklet severler için çekici bir seçenek haline gelir."
  },
  {
    "num": "6",
    "url": `https://enonlar.com/${url}#bolum-6`,
    "name": "KTM 690 Duke",
    "image": "/images/motosiklet/ktm_690_duke.png",
    "ozellikler": {
        "Ülke": "Avusturya",
        "Firma": "KTM",
        "Tip": "Naked",
        "Motor Hacmi": "690 cc",
        "Sıfır Yüz": "3.7 s",
        "Max": "180 km/s",
        "Tüketim": "3.5 Litre/100 km",
        "Ağırlık": "148.5 kg",
        "Yakıt Kapasitesi": "13.5 Litre"
    },
    "paragraf": "Avusturyalı motosiklet üreticisi KTM'nin 690 Duke modeli, hafifliği ve etkileyici güç çıkışı ile dikkat çeker. Sürücüsüne hem şehir içinde hem de açık yolda yüksek performans ve esneklik sunar. Yol tutuşu ve fren performansı, bu segmentteki diğer motosikletlerle rekabet edebilir seviyede. Gidon ve gaz tepkileri hassas, bu da sürücüye yüksek kontrol imkanı sunar. Süspansiyon sistemi, konforlu ve destekleyici, bu sayede uzun süreli sürüşlerde bile sürücüyü rahat ettirir. KTM 690 Duke, hem estetik hem de performans anlamında naked motosiklet severler için cazip bir seçenek olabilir."
  },
  {
    "num": "5",
    "url": `https://enonlar.com/${url}#bolum-5`,
    "name": "Suzuki SV650",
    "image": "/images/motosiklet/suzuki_sv650.png",
    "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Suzuki",
        "Tip": "Naked",
        "Motor Hacmi": "650 cc",
        "Sıfır Yüz": "3.9 s",
        "Max": "180 km/s",
        "Tüketim": "4.5 Litre/100 km",
        "Ağırlık": "198 kg",
        "Yakıt Kapasitesi": "14.5 Litre"
    },
    "paragraf": "Japon mühendisliğinin zarif bir örneği olan Suzuki SV650, hem performansı hem de tasarımı ile dikkat çekiyor. V-Twin motor yapısı sayesinde hem düşük hem de yüksek devirlerde mükemmel bir tork sağlıyor. Gidon ve gaz tepkisi oldukça tatminkar, bu sayede sürücü aracı kontrol altında tutabiliyor. Şehir içi kullanımda oldukça konforlu olan SV650, uzun yolda da sürücüsünü yormuyor. Fren performansı da oldukça başarılı. Suzuki SV650, estetik tasarımı ve güçlü performansı ile naked motosikletler arasında kendine sağlam bir yer ediniyor."
  },
  {
    "num": "4",
    "url": `https://enonlar.com/${url}#bolum-4`,
    "name": "Kawasaki Z650",
    "image": "/images/motosiklet/kawasaki_z650.png",
    "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Kawasaki",
        "Tip": "Naked",
        "Motor Hacmi": "650 cc",
        "Sıfır Yüz": "3.9 s",
        "Max": "185 km/s",
        "Tüketim": "4.7 Litre/100 km",
        "Ağırlık": "187 kg",
        "Yakıt Kapasitesi": "15 Litre"
    },
    "paragraf": "Japon üretici Kawasaki'nin başarılı naked modeli Z650, dinamik tasarımı ve güçlü motoru ile ön plana çıkıyor. Paralel-twin motor yapısı, düşük ve orta devirlerde mükemmel bir tork ve güç sunuyor. Gidonun rahat ergonomisi ve iyi ağırlık dağılımı, sürücüye tam bir kontrol hissi veriyor. Fren sistemi, etkili ve güvenilir. Şehir içi ve şehirlerarası kullanımlarda konforlu bir sürüş deneyimi sunuyor. Yol tutuşu ve sürüş dinamikleri de oldukça başarılı. Kawasaki Z650, günlük kullanım ve sportif sürüşler için ideal bir seçenek."
  },
  {
    "num": "3",
    "url": `https://enonlar.com/${url}#bolum-3`,
    "name": "Honda CB650R",
    "image": "/images/motosiklet/honda_cb650r.png",
    "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Honda",
        "Tip": "Naked",
        "Motor Hacmi": "649 cc",
        "Sıfır Yüz": "4.0 s",
        "Max": "180 km/s",
        "Tüketim": "5.3 Litre/100 km",
        "Ağırlık": "202 kg",
        "Yakıt Kapasitesi": "15.4 Litre",  
    },
    "paragraf": "Japon mühendisliği ile tasarlanan Honda CB650R, sade ve modern tasarımı ile dikkat çekiyor. Inline-4 motor konfigürasyonu, motorun lineer güç teslimatı ve tatmin edici tork çıkışı sağlıyor. Yol tutuşu ve süspansiyon sistemi, şehir içinde ve otoyol sürüşlerinde sürücüsüne güven veriyor. Geniş ve konforlu koltuk pozisyonu sayesinde, uzun mesafeli sürüşlerde bile rahat bir kullanım sunuyor. Frendeki hissiyat ve performans tatmin edici seviyede. Genel olarak, Honda CB650R hem günlük kullanım hem de sportif sürüşler için dengeli bir seçenek sunuyor."
  },
  {
    "num": "2",
    "url": `https://enonlar.com/${url}#bolum-2`,
    "name": "Ducati Monster 696",
    "image": "/images/motosiklet/ducati_monster_696.png",
    "ozellikler": {
        "Ülke": "İtalya",
        "Firma": "Ducati",
        "Tip": "Naked",
        "Motor Hacmi": "696 cc",
        "Sıfır Yüz": "4.1 s",
        "Max": "210 km/s",
        "Tüketim": "5.1 Litre/100 km",
        "Ağırlık": "161 kg",
        "Yakıt Kapasitesi": "15 Litre"
    },
    "paragraf": "İtalyan şıklığı ve mühendisliği ile Ducati Monster 696, estetik ve performansı bir arada sunuyor. V-twin motor yapısı, düşük devirlerde bile güçlü tork üretiyor. Sportif sürüş pozisyonu, sürücüyü yola daha yakın hissettiriyor. Yol tutuşu ve fren performansı, sınıfının en iyileri arasında. Hızlı ve keskin virajlarda bile güven veren bir sürüş deneyimi sunuyor. Ayrıca, Monster 696'nın özelleştirilebilir tasarımı, sürücülerin kişisel zevklerine göre modifiye edilebilmesine olanak tanıyor. Ducati Monster 696, her sürüşte adrenalini yüksek seviyede tutmayı başarıyor."
  },
  {
    "num": "1",
    "url": `https://enonlar.com/${url}#bolum-1`,
    "name": "Yamaha MT-07",
    "image": "/images/motosiklet/yamaha_mt_07.png",
    "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Yamaha",
        "Tip": "Naked",
        "Motor Hacmi": "689 cc",
        "Sıfır Yüz": "3.6 s",
        "Max": "214 km/s",
        "Tüketim": "4.3 Litre/100 km",
        "Ağırlık": "164 kg",
        "Yakıt Kapasitesi": "14 Litre"
    },
    "paragraf": "Japon mühendisliği ile tasarlanan Yamaha MT-07, sınıfının en dikkat çeken modellerinden biri. CP2 motor yapısı, lineer güç dağılımı ve yüksek torku ile biliniyor. Sürüş pozisyonu rahat, görüş açısı geniş ve kontrolleri hassas. Süspansiyonları yola iyi uyum sağlıyor ve frenleri güçlü. Minimalist tasarımı ve LED farları ile modern bir görünüm sunuyor. Hafif ve kompakt yapısı, şehir içi trafikte manevra kabiliyetini artırıyor. Yamaha MT-07, çevikliği ve günlük kullanım dostu yapısı ile naked sınıfında iddialı bir pozisyon alıyor."
  }  
   

  ];
  
  const ana_resim = "/images/ana_gorseller/enonlar-en-iyi-10-600-cc-naked-motosiklet.png";
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