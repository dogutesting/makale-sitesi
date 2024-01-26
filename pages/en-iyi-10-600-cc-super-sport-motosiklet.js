import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

export default function Eniyi600ccSuperMain({topCPO}) {
  //#region SAYFA TEXT TANIMLAMALARI
  const url = "en-iyi-10-600-cc-super-sport-motosiklet";
  const baslik = "En İyi 10 600 CC Super Sport Motosiklet";
  const metin = "600cc super sport motosikletler, hız tutkunlarının ve pist aslanlarının gözdesidir. Aerodinamik tasarımları sayesinde rüzgarı delebilir ve saniyeler içinde yüksek hızlara ulaşabilirler. Bu makinalar, sadece deneyimli sürücüler için tasarlanmıştır; çünkü bu güçlü makinelerin kontrolü, tam bir beceri ister. Özellikle pist günlerinde ya da açık yollarda, 600cc'nin altındaki süper sport motosikletler, sürücüsüne adeta kanatlandırır gibi hissettirir. Bu makalede, piyasadaki en popüler 600cc super sport motosikletleri inceliyor ve her birinin eşsiz özelliklerini detaylıca ele alıyoruz. Makalemize göz atmaya hazır mısınız? Heyecanlandırıcı bir sürüş deneyimi sizi bekliyor!";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  const keywordsArray = ["en", "iyi", "600cc", "motosiklet", "supersport"]; //burada türkçe karakter olacak mı bir fikrim yok
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
      "name": "Aprilia RS 660",
      "image": "/images/motosiklet/aprilia_rs_660.png",
      "ozellikler": {
        "Ülke": "İtalya",
        "Firma": "Aprilia",
        "Tip": "Super Sport",
        "Motor Hacmi": "659 cc",
        "Sıfır Yüz": "3.9 saniye",
        "Maksimum Hız": "210 km/saat",
        "Tüketim": "4.9 litre/100 km",
        "Ağırlık": "183 kg",
        "Yakıt Kapasitesi": "15 litre"
      },
      "paragraf": "İtalyan asaletinin bir yansıması olan Aprilia RS 660, hafifliği ve kompakt yapısıyla piste adım attığınız an farkını ortaya koyar. Dinamik yapısı ve 659cc'lik motoru ile sizi adeta uçururken, sele konforu ve yol tutuşu da sizi hiç yalnız bırakmaz. Hızlanma ve fren performansı, Aprilia'nın yarış genlerini her anlamda hissettirir. Ancak, yakıt göstergesinin doğruluğu bazen sizi zor durumda bırakabilir. Fakat bu, RS 660'ın size sunduğu adrenalini ve kontrolü asla gölgeleyemez."
    },
    {
      "num": "9",
      "url": "https://enonlar.com/${url}#bolum-10",
      "name": "Triumph Daytona 675",
      "image": "/images/motosiklet/triumph_daytona_675.png",
      "ozellikler": {
        "Ülke": "İngiltere",
        "Firma": "Triumph",
        "Tip": "Super Sport",
        "Motor Hacmi": "675 cc",
        "Sıfır Yüz": "3.9 saniye",
        "Maksimum Hız": "248 km/saat",
        "Tüketim": "5.2 litre/100 km",
        "Ağırlık": "185 kg",
        "Yakıt Kapasitesi": "17.4 litre"
      },
      "paragraf": "İngiltere'nin köklü motosiklet üreticisi Triumph, Daytona 675 ile süpersport segmentine sofistike bir dokunuş katıyor. 675cc'lik üç silindirli motoru, motosiklete sert ve hızlı bir tepki sağlayarak rakiplerinden ayrılıyor. Daytona 675'in aerodinamik tasarımı ve hafif yapısı, sürücülere virajlarda ve düzlüklerde üst düzey bir kontrol ve esneklik sağlıyor. Özellikle fren performansı ve yol tutuşu, bu motosikletin süpersport kategorisindeki rakiplerine göre daha dengeli ve güvenilir olmasını sağlıyor. Günlük kullanım için belki biraz sert olabilir ama pist günlerinde ve hafta sonu turlarında Daytona 675, sürücülerine adrenalin dolu anlar yaşatıyor."
    },
    {
      "num": "8",
      "url": "https://enonlar.com/${url}#bolum-11",
      "name": "Honda CBR500R",
      "image": "/images/motosiklet/honda_cbr_500r.png",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Honda",
        "Tip": "Supersport",
        "Motor Hacmi": "471 cc",
        "Sıfır Yüz": "5.7 saniye",
        "Maksimum Hız": "188 km/saat",
        "Tüketim": "4.1 litre/100 km",
        "Ağırlık": "192 kg",
        "Yakıt Kapasitesi": "17.1 litre"
      },
      "paragraf": "Japonya'nın köklü motosiklet üreticilerinden Honda'nın orta sınıf spor modeli CBR500R, yeni başlayanlar ve orta seviye sürücüler için ideal bir seçenektir. 471cc'lik motor hacmi ile hem şehir içi hem de uzun yolculuklarda yeterli performansı sunar. Motorun düşük ve orta devirlerde sunduğu tork, sürücüsüne güven verirken, yüksek devirlerde de tatminkar bir performans sağlar. Honda'nın bu modeli, sürücüsüne sportif bir deneyim sunmayı amaçlarken, aynı zamanda günlük kullanım için de uygun bir yapıya sahiptir. CBR500R'nin fren performansı ve yol tutuşu da oldukça başarılıdır. Ayrıca, ergonomik tasarımı sayesinde uzun süreli sürüşlerde bile konfor sağlar. Yalnızca 192 kg ağırlığındaki bu model, hafifliği sayesinde manevra kabiliyeti yüksek ve sürücüsüne keyifli bir sürüş deneyimi vaat eder."
    },
    {
      "num": "7",
      "url": "https://enonlar.com/${url}#bolum-7",
      "name": "Yamaha YZF-R7",
      "image": "/images/motosiklet/yamaha_yzf_r7.jpg",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Yamaha",
        "Tip": "Super Sport",
        "Motor Hacmi": "689 cc",
        "Sıfır Yüz": "3.8 saniye",
        "Maksimum Hız": "230 km/saat",
        "Tüketim": "4.9 litre/100 km",
        "Ağırlık": "188 kg",
        "Yakıt Kapasitesi": "13 litre"
      },
      "paragraf": "Japon mühendisliğinin bir başka başarılı örneği olan Yamaha YZF-R7, 689cc'lik motoru ile dikkat çeker. İki silindirli bu motor, düşük ve orta devirlerde güçlü tork sağlar, bu da şehir içinde ve kısa mesafeli sürüşlerde etkileyici bir performans sunar. YZF-R7'nin şasisi ve süspansiyon sistemi, virajlarda mükemmel bir kontrol ve stabilite sağlar. Frenlerin güçlü ve duyarlı olması, sürücülere zorlu sürüş koşullarında bile güven verir. Aerodinamik tasarımı sayesinde yüksek hızlarda bile rüzgar direncini en aza indirir ve yakıt verimliliği sağlar. Yamaha YZF-R7, sportif estetiği ve güçlü performansı ile sürücülerine heyecan dolu bir sürüş deneyimi sunar."
    },
    {
      "num": "6",
      "url": "https://enonlar.com/${url}#bolum-6",
      "name": "MV Agusta F3 675",
      "image": "/images/motosiklet/mv_agusta_f3_675.png",
      "ozellikler": {
        "Ülke": "İtalya",
        "Firma": "MV Agusta",
        "Tip": "Super Sport",
        "Motor Hacmi": "675 cc",
        "Sıfır Yüz": "3.7 saniye",
        "Maksimum Hız": "245 km/saat",
        "Tüketim": "5.8 litre/100 km",
        "Ağırlık": "173 kg",
        "Yakıt Kapasitesi": "16.5 litre"
      },
      "paragraf": "İtalyan estetiği ve performansının harika bir birleşimi olan MV Agusta F3 675, zarif tasarımı ve güçlü motoru ile dikkat çeker. Yol tutuşu ve manevra kabiliyeti üst düzey, sürüş pozisyonu ise sportiftir. Fren performansı iyi, ancak yakıt tüketimi biraz yüksek. Sele konforu uzun sürüşler için ideal olmayabilir, fakat MV Agusta F3 675, her gaz açışında sizi heyecanlandıracak bir motor sesine sahip."
    },
    {
      "num": "5",
      "url": "https://enonlar.com/${url}#bolum-5",
      "name": "Triumph Daytona 675R",
      "image": "/images/motosiklet/triumph_daytona_675r.png",
      "ozellikler": {
        "Ülke": "İngiltere",
        "Firma": "Triumph",
        "Tip": "Super Sport",
        "Motor Hacmi": "675 cc",
        "Sıfır Yüz": "3.6 saniye",
        "Maksimum Hız": "248 km/saat",
        "Tüketim": "5.5 litre/100 km",
        "Ağırlık": "185 kg",
        "Yakıt Kapasitesi": "17.4 litre"
      },
      "paragraf": "İngiliz soyluluğunun bir simgesi olan Triumph Daytona 675R, estetik ve performansı mükemmel bir şekilde harmanlar. 675cc motoru, hem güçlü hem de pürüzsüz bir performans sunar. Gidon tepkisi mükemmel, frenler ise sizi asla yarı yolda bırakmaz. Yakıt tüketimi makul, ve sele rahatlığı uzun sürüşler için bile ideal. Ancak, bazı sürücüler dijital gösterge panelinin daha iyileştirilebileceğini belirtiyor. Daytona 675R'nin benzersiz motor sesi ve çarpıcı tasarımı, bu motosikleti her zaman bir adım öne çıkarır."
    },
    {
      "num": "4",
      "url": "https://enonlar.com/${url}#bolum-4",
      "name": "Suzuki GSX-R600",
      "image": "/images/motosiklet/suzuki_gsx_r600.png",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Suzuki",
        "Tip": "Super Sport",
        "Motor Hacmi": "599 cc",
        "Sıfır Yüz": "3.3 saniye",
        "Maksimum Hız": "250 km/saat",
        "Tüketim": "5.3 litre/100 km",
        "Ağırlık": "187 kg",
        "Yakıt Kapasitesi": "17 litre"
      },
      "paragraf": "Suzuki'nin bu efsanevi modeli, GSX-R600, pürüzsüz motoru ve mükemmel yol tutuşu ile dikkat çeker. Yüksek hızlarda bile sürüş stabilitesi sunar, frenler güçlü ve hassas. Yakıt tüketimi ortalama, ama konforlu sele yapısı ile uzun mesafelerde bile rahat bir sürüş deneyimi sunar. Ancak, bazı sürücüler, gösterge panelinin modernize edilmesi gerektiğini belirtiyor. GSX-R600, sportif performansı ve güvenilirliği ile supersport sınıfında kendine sağlam bir yer buluyor."
    },
    {
      "num": "3",
      "url": "https://enonlar.com/${url}#bolum-3",
      "name": "Kawasaki Ninja ZX-6R",
      "image": "/images/motosiklet/kawasaki_ninja_zx_6r.jpg",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Kawasaki",
        "Tip": "Super Sport",
        "Motor Hacmi": "636 cc",
        "Sıfır Yüz": "3.2 saniye",
        "Maksimum Hız": "262 km/saat",
        "Tüketim": "5.7 litre/100 km",
        "Ağırlık": "196 kg",
        "Yakıt Kapasitesi": "17 litre"
      },
      "paragraf": "Kawasaki'nin bu canavarı, Ninja ZX-6R, nefes kesen hızı ve keskin manevra kabiliyeti ile piste hakim olmanızı sağlar. Yol tutuşu ve fren performansı üst düzey, motor sesi ise adeta bir melodiyi andırır. Yakıt tüketimi ortalama, fakat konforlu sele ve ergonomik gidon pozisyonu, uzun sürüşler için ideal. Ancak, dijital gösterge panelinin biraz daha modernize edilebileceği belirtiliyor. Ninja ZX-6R, hem günlük sürüşler hem de pist günleri için mükemmel bir seçenek."
    },
    {
      "num": "2",
      "url": "https://enonlar.com/${url}#bolum-2",
      "name": "Honda CBR600RR",
      "image": "/images/motosiklet/honda_cbr_600rr.png",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Honda",
        "Tip": "Super Sport",
        "Motor Hacmi": "599 cc",
        "Sıfır Yüz": "3.1 saniye",
        "Maksimum Hız": "255 km/saat",
        "Tüketim": "5.0 litre/100 km",
        "Ağırlık": "186 kg",
        "Yakıt Kapasitesi": "18 litre"
      },
      "paragraf": "Honda'nın süper spor simgesi CBR600RR, hem günlük sürüşler hem de pist için kusursuz bir seçenek. Yüksek devirde bile pürüzsüz performans ve mükemmel yol tutuşu sunar. Frenler güçlü ve hassas, yakıt tüketimi ise ortalamanın biraz altında. Konforlu sele ve aerodinamik tasarım, sürücüsüne uzun sürüşlerde bile rahat bir deneyim sunar. Ancak, bazı sürücüler için gösterge panelinin modernize edilmesi gerekebilir. CBR600RR, sportif performansı ve Honda'nın güvenilirliği ile kesinlikle kalbinizi çalacak."
    },
    {
      "num": "1",
      "url": "https://enonlar.com/${url}#bolum-1",
      "name": "Yamaha YZF-R6",
      "image": "/images/motosiklet/yamaha_yzf_r6.png",
      "ozellikler": {
        "Ülke": "Japonya",
        "Firma": "Yamaha",
        "Tip": "Super Sport",
        "Motor Hacmi": "599 cc",
        "Sıfır Yüz": "3.0 saniye",
        "Maksimum Hız": "257 km/saat",
        "Tüketim": "6.6 litre/100 km",
        "Ağırlık": "190 kg",
        "Yakıt Kapasitesi": "17 litre"
      },
      "paragraf": "Yamaha'nın süper spor klasmanındaki efsanesi YZF-R6, nefes kesen performansı ve keskin hatları ile ön plana çıkar. Yol tutuşu ve fren performansı sınıfının en iyileri arasında, motorun gücü ve hızlanma kabiliyeti ise sizi adeta kanatlandırır. Yakıt tüketimi biraz yüksek, ancak bu, R6'nın sunduğu eşsiz sürüş deneyimini gölgeleyemez. Sele rahatlığı ve aerodinamik yapısı, uzun sürüşlerde bile konfor sunar. YZF-R6, her açıdan mükemmel bir süper spor motosiklet deneyimi vaat eder."
    }
  ];

  const ana_resim = "/images/ana_gorseller/enonlar-en-iyi-10-600-cc-super-sport-motosiklet.png";
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