import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

export default function Eniyi300ccSuperMain({topCPO}) {
  //#region SAYFA TEXT TANIMLAMALARI
  const url = "en-iyi-10-300-cc-super-sport-motosiklet";
  const baslik = "En İyi 10 300 CC Super Sport Motosiklet";
  const metin = "Supersport motosikletler, genellikle onları sürmenin kendine has bir stil ve tecrübe gerektirdiği bir araç kategorisidir. 300cc'lik motorlar, genellikle orta seviye sürücüler için idealdir ve yeni başlayanlar için bile uygun olabilir. Tasarım, performans, kullanılabilirlik ve fiyat gibi kritik faktörleri değerlendirerek, bu segmentteki en iyi seçenekleri belirledik. Motosiklet dünyasının estetik ve performans harmanını sunan supersport kategorisi, motor sporlarına olan tutkunuzu kesinlikle alevlendirecek. Makalemizin devamında, her bir motosikletin detaylı incelemesini ve benzersiz özelliklerini bulabilirsiniz. Sizleri, 300cc süpersport motosikletlerin hızlı, estetik ve heyecan verici dünyasına davet ediyoruz.";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  const keywordsArray = ["en", "iyi", "300cc", "motosiklet", "super", "sport"]; //burada türkçe karakter olacak mı bir fikrim yok
  const okunmaSuresi = "5";
  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-02T18:00:00+03:00";
  const degistirilmeTarihi = "2023-11-19T01:13:00+03:00";
  const addDate = "02.10.23";

  const jsonContentArray = [
    {
      "num": "10",
      "url": `https://enonlar.com/${url}#bolum-10`,
      "name": "TVS Apache RR 310",
      "image": "/images/motosiklet/tvs_apache_rr_310.png",
      "ozellikler": {
          "Ülke": "Hindistan",
          "Firma": "TVS Motor Company",
          "Tip": "Supersport",
          "Motor Hacmi": "300 cc",
          "Sıfır Yüz": "7.0 s",
          "Max": "160 km/s",
          "Tüketim": "3.3 Litre/100 km",
          "Ağırlık": "169.7 kg",
          "Yakıt Kapasitesi": "11 Litre"
      },
      "paragraf": "TVS Apache RR 310, baş döndürücü tasarımı ve aerodinamik yapısıyla dikkat çeker. Motorun düşük ve yüksek devir performansı dengeli, gas tepkisi canlı ve tork dağılımı ise eşit. Yol tutuşu sağlam, frenler güvenilir, ve süspansiyon sistemi sert ama rahat. Gidonun pozisyonu ve hassasiyeti, virajlarda kolay manevra imkanı sağlar. Ağırlığı sayesinde stabil ve dengeli bir sürüş deneyimi sunar. Ancak, yüksek hızlarda rüzgar koruması yetersiz kalabilir. Genel olarak, TVS Apache RR 310, sportif sürüş deneyimi ve estetik tasarımı uygun fiyatla sunan başarılı bir model."
  },
  {
      "num": "9",
      "url": `https://enonlar.com/${url}#bolum-9`,
      "name": "CFMoto 300SR",
      "image": "/images/motosiklet/cfmoto_300sr.jpg",
      "ozellikler": {
          "Ülke": "Çin",
          "Firma": "CFMoto",
          "Tip": "Supersport",
          "Motor Hacmi": "300 cc",
          "Sıfır Yüz": "7.5 s",
          "Max": "150 km/s",
          "Tüketim": "3.7 Litre/100 km",
          "Ağırlık": "165 kg",
          "Yakıt Kapasitesi": "12 Litre"
      },
      "paragraf": "CFMoto 300SR, keskin hatları ve atletik duruşu ile genç sürücülerin ilgisini çeker. Motorun hızlanma performansı ve düşük devirdeki torku tatminkar. Yüksek devirlerde bile motor titreşimsiz ve sessiz çalışır. Frenler etkili, yol tutuşu dikkat çekici. Gidon hassasiyeti ve ergonomik pozisyonu, virajlarda güvenli manevralar yapmanıza olanak tanır. Ağırlığının hafifliği, motorun agresif bir şekilde yönlendirilmesini sağlar. Ancak, uzun mesafeli sürüşlerde koltuk konforu yetersiz kalabilir. CFMoto 300SR, performansı ve estetiği bir araya getiren, uygun fiyatlı bir süpersport seçeneği."
  },
  {
    "num": "8",
    "url": "https://enonlar.com/${url}#bolum-8",
    "name": "Benelli Tornado 302R",
    "image": "/images/motosiklet/benelli_302r.png",
    "ozellikler": {
        "Firma": "Benelli",
        "Tip": "Supersport",
        "Motor Hacmi": "300 cc",
        "Sıfır Yüz": "8.0 s",
        "Max": "170 km/s",
        "Tüketim": "3.7 Litre/100 km",
        "Ağırlık": "198 kg",
        "Ülke": "İtalya",
        "Yakıt Kapasitesi": "14 Litre"
    },
    "paragraf": "Benelli 302R, İtalyan tarzı zarif tasarımı ve çift silindirli motoru ile segmentinde dikkat çeker. Motor, düşük devirlerden itibaren güçlü bir tork sunar ve yüksek devirlere çıktıkça canlanır. Yol tutuşu mükemmel, frenler dozajlı ve etkili. Gidonun konumu ve hassasiyeti, virajlarda rahat manevralar yapmanıza olanak tanır. Ağırlığı diğer modellere göre biraz daha fazla, bu da stabiliteyi artırır ancak hızlanma ve manevra kabiliyetini bir miktar düşürür. Benelli 302R, estetik tasarımı, güçlü motoru ve üstün yol tutuşu ile 300cc süpersport segmentinde önemli bir yere sahip."
},
{
    "num": "7",
    "url": "https://enonlar.com/${url}#bolum-7",
    "name": "Hyosung GT300R",
    "image": "/images/motosiklet/hyosung_gt_300r.png",
    "ozellikler": {
        "Firma": "Hyosung",
        "Tip": "Supersport",
        "Motor Hacmi": "300 cc",
        "Sıfır Yüz": "7.8 s",
        "Max": "140 km/s",
        "Tüketim": "3.8 Litre/100 km",
        "Ağırlık": "178 kg",
        "Ülke": "Güney Kore",
        "Yakıt Kapasitesi": "15 Litre"
    },
    "paragraf": "Hyosung GT300R, Güney Kore'nin otomotiv endüstrisinden çıkma, sportif tasarımı ve kompakt yapısıyla dikkat çeker. Motorun düşük ve orta devir performansı tatminkar, yüksek devirlerde ise motorun canlılığı hissedilir. Yol tutuşu sağlam, fren performansı ise ortalamanın üzerinde. Gidonun pozisyonu ve hassasiyeti, virajlarda rahat manevralar yapmanıza olanak tanır. Ağırlığı, motorun stabilitesini artırır, fakat hızlanma ve manevra kabiliyetini biraz kısıtlar. Hyosung GT300R, uygun fiyatlı ve performans odaklı bir süpersport motosiklet arayanlar için cazip bir seçenek sunar."
},
{
    "num": "6",
    "url": "https://enonlar.com/${url}#bolum-6",
    "name": "Kawasaki Ninja 400",
    "image": "/images/motosiklet/kawasaki_ninja_400.png",
    "ozellikler": {
        "Firma": "Kawasaki",
        "Tip": "Supersport",
        "Motor Hacmi": "399 cc",
        "Sıfır Yüz": "4.9 s",
        "Max": "191 km/s",
        "Tüketim": "4.3 Litre/100 km",
        "Ağırlık": "168 kg",
        "Ülke": "Japonya",
        "Yakıt Kapasitesi": "14 Litre"
    },
    "paragraf": "Hyosung GT300R, Güney Kore'nin otomotiv endüstrisinden çıkma, sportif tasarımı ve kompakt yapısıyla dikkat çeker. Motorun düşük ve orta devir performansı tatminkar, yüksek devirlerde ise motorun canlılığı hissedilir. Yol tutuşu sağlam, fren performansı ise ortalamanın üzerinde. Gidonun pozisyonu ve hassasiyeti, virajlarda rahat manevralar yapmanıza olanak tanır. Ağırlığı, motorun stabilitesini artırır, fakat hızlanma ve manevra kabiliyetini biraz kısıtlar. Hyosung GT300R, uygun fiyatlı ve performans odaklı bir süpersport motosiklet arayanlar için cazip bir seçenek sunar."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/${url}#bolum-6",
    "name": "Kawasaki Ninja 300",
    "image": "/images/motosiklet/kawasaki_ninja_300.png",
    "ozellikler": {
        "Firma": "Kawasaki",
        "Tip": "Supersport",
        "Motor Hacmi": "300 cc",
        "Sıfır Yüz": "5.6 s",
        "Max": "180 km/s",
        "Tüketim": "3.6 Litre/100 km",
        "Ağırlık": "172 kg",
        "Ülke": "Japonya",
        "Yakıt Kapasitesi": "17 Litre"
    },
    "paragraf": "Kawasaki Ninja 300, Japonya'nın mühendislik mirasını yansıtan, sportif ve aerodinamik tasarımıyla göz doldurur. Motorun düşük devir performansı başarılı, yüksek devirlerde ise canlı ve atak. Yol tutuşu mükemmel, frenler etkili ve dozajlı. Gidon hassasiyeti ve ergonomik pozisyonu, virajlarda ve ani manevralarda sürücüye güven verir. Ağırlığı dengeli dağıtılmış ve bu da motorun manevra kabiliyetini artırır. Kawasaki Ninja 300, estetik tasarımı, üstün performansı ve mükemmel yol tutuşu ile 300cc süpersport segmentinde önemli bir yere sahip."
  },
  {
    "num": "4",
    "url": "https://enonlar.com/${url}#bolum-5",
    "name": "Honda CBR300R",
    "image": "/images/motosiklet/honda_cbr_300r.png",
    "ozellikler": {
        "Firma": "Honda",
        "Tip": "Supersport",
        "Motor Hacmi": "300 cc",
        "Sıfır Yüz": "7.1 s",
        "Max": "157 km/s",
        "Tüketim": "3.5 Litre/100 km",
        "Ağırlık": "164 kg",
        "Ülke": "Japonya",
        "Yakıt Kapasitesi": "13 Litre"
    },
    "paragraf": "Honda CBR300R, Japonya'nın hassas mühendislik geleneğini yansıtan, zarif ve fonksiyonel tasarımıyla dikkat çeker. Motor, düşük devirlerde dahi tatminkar bir tork sunar, yüksek devirlerde ise canlı ve enerjik. Yol tutuşu dikkat çekici, frenler ise hem etkili hem de hassas. Gidon pozisyonu ve hassasiyeti, virajlarda ve şehir içi sürüşlerde manevra kabiliyetini artırır. Motorun ağırlığı dengeli, bu da stabilite ve hızlanma performansını olumlu etkiler. Honda CBR300R, performansı ve güvenilirliği ile 300cc süpersport segmentinde rekabetçi bir seçenek."
  },
  {
    "num": "3",
    "url": "https://enonlar.com/${url}#bolum-4",
    "name": "KTM RC 390",
    "image": "/images/motosiklet/ktm_rc_390.png",
    "ozellikler": {
        "Firma": "KTM",
        "Tip": "Supersport",
        "Motor Hacmi": "373 cc",
        "Sıfır Yüz": "4.6 s",
        "Max": "179 km/s",
        "Tüketim": "3.8 Litre/100 km",
        "Ağırlık": "147 kg",
        "Ülke": "Avusturya",
        "Yakıt Kapasitesi": "13.7 Litre"
    },
    "paragraf": "KTM RC 390, Avusturya'nın mühendislik ustalığı ve sıra dışı tasarım anlayışını temsil ediyor. Agresif tasarımı, hafif şasisi ve mükemmel motor performansı ile dikkat çeker. Motor düşük devirlerden itibaren güçlü bir tork sunar, yüksek devirlerde ise canlı ve atak. Yol tutuşu mükemmel, frenler etkili ve dozajlı. Gidonun hassasiyeti, virajlarda ve hızlı manevralarda sürücüye güven verir. Hafifliği, motorun manevra kabiliyetini ve hızlanma performansını artırır. KTM RC 390, yüksek performansı, estetik ve agresif tasarımı ile 300cc süpersport segmentinin ötesine geçiyor."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/${url}#bolum-1",
    "name": "BMW G310RR",
    "image": "/images/motosiklet/bmw_g310_rr.png",
    "ozellikler": {
        "Firma": "BMW",
        "Tip": "Supersport",
        "Motor Hacmi": "313 cc",
        "Sıfır Yüz": "6.2 s",
        "Max": "143 km/s",
        "Tüketim": "3.3 Litre/100 km",
        "Ağırlık": "158 kg",
        "Ülke": "Almanya",
        "Yakıt Kapasitesi": "12 Litre"
    },
    "paragraf": "BMW G310RR, Alman mühendisliğinin ve estetiğinin bir harmanını temsil ediyor. Sade ve keskin çizgileriyle modern bir süpersport tasarımı sunan bu model, düşük devirlerde dahi tatminkar bir tork ve tepki sunuyor. Yüksek devirlerde ise motor canlı ve enerjik. Yol tutuşu ve fren performansı beklentileri karşılıyor, gidon hassasiyeti ise övgüyü hak ediyor. Ağırlığı dengeli dağıtılmış, bu da motorun manevra kabiliyetini ve stabilitesini artırır. BMW'nin geniş servis ağı ve yedek parça desteği, G310RR'yi uzun vadede güvenilir bir seçenek haline getiriyor. BMW G310RR, sade tasarımı ve güvenilir performansı ile süpersport segmentinde sağlam bir seçenek."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/${url}#bolum-2",
    "name": "Yamaha YZF-R3",
    "image": "/images/motosiklet/yamaha_yzf_r3.png",
    "ozellikler": {
        "Firma": "Yamaha",
        "Tip": "Supersport",
        "Motor Hacmi": "321 cc",
        "Sıfır Yüz": "5.1 s",
        "Max": "188 km/s",
        "Tüketim": "3.5 Litre/100 km",
        "Ağırlık": "169 kg",
        "Ülke": "Japonya",
        "Yakıt Kapasitesi": "14 Litre"
    },
    "paragraf": "Yamaha YZF-R3, Japonya'nın mühendislik ustalığı ve estetik anlayışını mükemmel bir şekilde birleştiriyor. Motorun düşük devir performansı tatminkar, yüksek devirlerde ise canlı ve atak. Yol tutuşu etkileyici, frenler dozajlı ve etkili. Gidonun hassasiyeti, virajlarda ve hızlı manevralarda sürücüye güven verir. Ağırlığı dengeli dağıtılmış, bu da motorun manevra kabiliyetini artırır. Yamaha YZF-R3, estetik tasarımı, üstün performansı ve mükemmel yol tutuşu ile 300cc süpersport segmentinde rekabetçi ve popüler bir seçenek. Genç ve deneyimli sürücüler arasında popüler bir seçenektir. Her sürüşte yanınızda olacak bir arkadaş gibi, güvenilirliği ve dayanıklılığı ile bilinir. Ek olarak, Yamaha'nın geniş servis ve yedek parça ağı, bu modeli uzun vadede de cazip kılar. Her açıdan Yamaha YZF-R3, süpersport motosiklet segmentinde kendine sağlam bir yer bulmuş durumda."
  }
  ];

  const ana_resim = "/images/ana_gorseller/enonlar-en-iyi-10-300-cc-super-sport-motosiklet.png";
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};
  
  const jsonList = moviesAndSeriesJson(articleInfos,
  "Motosiklet", 
  metin,
  jsonContentArray
  )
  //#endregion

  return (
    <ClassicArticleTop topCPO={topCPO} baslik={baslik} description={description} keywordsArray={keywordsArray}
    ana_resim={ana_resim} url={url} jsonList={jsonList} addDate={addDate}
      okunmaSuresi={okunmaSuresi ? okunmaSuresi : jsonList.readTimeSpan}
      kategori={kategori} metin={metin} jsonContentArray={jsonContentArray}/>
  )
}