import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTot';

export default function Eniyi250ccScooterMain({topCPO}) {
  //#region SAYFA TANIMLAMALARI
  const url = "en-iyi-10-250-cc-scooter-motosiklet";
  const baslik = "En İyi 10 250 CC Scooter Motosiklet";
  const metin = "Şehir hayatının yoğun temposunda hız, konfor ve stil arayanlar için 250cc scooter motosikletler mükemmel bir tercih sunar. Bu motor hacmi, şehir içinde hızlı ve çevik hareket etme imkanı sağlarken, şehirler arası yolculuklarda da yeterli performansı ve rahatlığı sunar. 250cc scooterlar, genellikle güçlü motorları, geniş oturma alanları ve yüksek depolama kapasiteleri ile öne çıkarlar. Bu segmentteki modeller, hem deneyimli sürücüler için hem de performanstan ödün vermek istemeyen yeni başlayanlar için idealdir. Modern teknolojik donanımlar, gelişmiş güvenlik özellikleri ve aerodinamik tasarımlar, 250cc scooterların günlük kullanımda pratikliğini ve sürüş keyfini artırır. Uzun yolculuklar ve şehir içi trafikte eşsiz bir sürüş deneyimi sunan bu modeller, hem tasarım hem de işlevsellik açısından beklentileri karşılar. İşte Türkiye'deki en popüler ve sevilen 10 adet 250cc scooter modeli, bu dinamik ve heyecan verici scooterları incelemeye başlayalım.";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  const keywordsArray = ["en", "iyi", "250cc", "motosiklet", "scooter"];
  const okunmaSuresi = "5";
  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-11-18T00:22:00+03:00";
  const degistirilmeTarihi = "2023-11-19T01:13:00+03:00";
  const addDate = "18.11.23";

  const jsonContentArray = [
    {
      "num": "10",
      "url": `https://enonlar.com/${url}#bolum-10`,
      "name": "Daelim S3 Advance 250",
      "image": "/images/motosiklet/daelim_s3_advance_250.png",
      "ozellikler": {
        "Ülke": "Güney Kore",
        "Firma": "Daelim",
        "Tip": "Scooter",
        "Motor Hacmi": "250 cc",
        "Sıfır Yüz": "8.5 s",
        "Max": "130 Km/h",
        "Tüketim": "3.2 Litre/100 Km",
        "Ağırlık": "165 Kg",
        "Yakıt Kapasitesi": "12 Litre"
      },
      "paragraf": "Güney Kore'nin önde gelen üreticilerinden Daelim'in gurur kaynağı olan S3 Advance 250, şık tasarımı ve yüksek performansıyla dikkat çeker. Bu 250cc scooter, özellikle şehir içi ve şehir dışı kullanımda etkileyici hızlanma ve üst düzey sürüş konforu sunar. Yakıt enjeksiyon sistemi sayesinde yakıt verimliliği ve çevre dostu performansıyla öne çıkar. Geniş bagaj alanı ve ergonomik tasarımı, uzun yolculuklarda bile rahat bir sürüş deneyimi sağlar. S3 Advance 250, aynı zamanda gelişmiş frenleme sistemleri ve yol tutuşu ile güvenliği ön planda tutan bir modeldir."
    },
    {
      "num": "9",
      "url": `https://enonlar.com/${url}#bolum-9`,
      "name": "Kymco Xciting 250",
      "image": "/images/motosiklet/kymco_xciting_250.png",
      "ozellikler": {
        "Ülke": "Tayvan",
        "Firma": "Kymco",
        "Tip": "Scooter",
        "Motor Hacmi": "250 cc",
        "Sıfır Yüz": "8.3 s",
        "Max": "125 Km/h",
        "Tüketim": "3.5 Litre/100 Km",
        "Ağırlık": "179 Kg",
        "Yakıt Kapasitesi": "12.5 Litre"
      },
      "paragraf": "Tayvan'ın önde gelen motosiklet üreticisi Kymco'nun dinamik ve şık tasarımlı modeli Xciting 250, şehir içinde ve dışında kullanım için mükemmel bir seçenek sunar. 250cc motor hacmi, güçlü performansı ve etkileyici hızlanma yeteneği ile dikkat çeker. Geniş ve konforlu oturma alanı, günlük sürüşler ve uzun yolculuklar için idealdir. Xciting 250 ayrıca, üstün frenleme sistemi ve stabil yol tutuşu ile güvenlik açısından da öne çıkar. Şık tasarımı ve modern donanımları ile bu model, hem işlevsellik hem de estetik açıdan tatmin edici bir deneyim sunar."
    },
    {
      "num": "8",
      "url": `https://enonlar.com/${url}#bolum-8`,
      "name": "RKS Vieste 249",
      "image": "/images/motosiklet/rks_vieste_249.png",
      "ozellikler": {
        "Ülke": "Çin",
        "Firma": "RKS",
        "Tip": "Scooter",
        "Motor Hacmi": "244 cc",
        "Sıfır Yüz": "8.5 s",
        "Max": "125 Km/h",
        "Tüketim": "3.8 Litre/100 Km",
        "Ağırlık": "155 Kg",
        "Yakıt Kapasitesi": "11.5 Litre"
      },
      "paragraf": "RKS Vieste 249, şehir içi ve şehir dışı kullanım için ideal bir scooter modelidir. 249cc motor hacmi ile güçlü performans ve etkileyici bir hızlanma sunar. Kullanıcı dostu arayüzü, konforlu sürüş pozisyonu ve geniş bagaj alanı günlük ihtiyaçlar için mükemmel bir uyum sağlar. Vieste 249, özellikle LED far sistemi ve modern gösterge paneliyle teknolojik açıdan zengin bir deneyim sunar. Hafif yapısı ve etkili frenleme sistemi, şehir içinde hızlı manevralar ve güvenli sürüş imkanı tanır. Bu model, hem estetik hem de pratiklik açısından dikkat çekici bir seçimdir."
    },
    {
      "num": "7",
      "url": `https://enonlar.com/${url}#bolum-7`,
      "name": "Yuki T11 Explorer Maxi Scooter",
      "image": "/images/motosiklet/yuki_t11_explorer_maxi_scooter.png",
      "ozellikler": {
        "Ülke": "Çin",
        "Firma": "Yuki",
        "Tip": "Scooter",
        "Motor Hacmi": "250 cc",
        "Sıfır Yüz": "9.0 s",
        "Max": "120 Km/h",
        "Tüketim": "3.6 Litre/100 Km",
        "Ağırlık": "148 Kg",
        "Yakıt Kapasitesi": "13 Litre"
      },
      "paragraf": "Yuki T11 Explorer Maxi Scooter, şehir içinde ve dışında kullanım için ideal, dinamik bir scooter modelidir. 250cc motor hacmi ile güçlü performans sunar ve 120 km/s maksimum hıza ulaşabilir. Yuki T11 Explorer, modern tasarımı ve geniş bagaj alanı ile hem günlük ihtiyaçları karşılar hem de uzun yolculuklarda konfor sunar. Güçlü frenleme sistemi ve etkileyici yol tutuşu güvenliği artırırken, hafif yapısı manevra kabiliyetini iyileştirir. Bu model, özellikle fiyat-performans oranıyla dikkat çekerek, kaliteli bir sürüş deneyimi sunar."
    },
    {
      "num": "6",
      "url": `https://enonlar.com/${url}#bolum-6`,
      "name": "SYM Joymax 250i ABS",
      "image": "/images/motosiklet/sym_joymax_250i_abs.png",
      "ozellikler": {
        "Ülke": "Tayvan",
        "Firma": "SYM",
        "Tip": "Scooter",
        "Motor Hacmi": "250 cc",
        "Sıfır Yüz": "8.7 s",
        "Max": "122 Km/h",
        "Tüketim": "3.4 Litre/100 Km",
        "Ağırlık": "178 Kg",
        "Yakıt Kapasitesi": "12 Litre"
      },
      "paragraf": "Tayvan menşeli SYM, Joymax 250i ABS modeliyle scooter segmentinde önemli bir yere sahip. Bu model, 250cc motor hacmi, hızlı hızlanma ve 122 km/s maksimum hızı ile dikkat çekiyor. Joymax 250i ABS, özellikle ABS fren sistemiyle güvenliği ön plana çıkarıyor. Geniş ve konforlu koltuk yapısı, uzun yolculuklar için idealdir. Ergonomik tasarımı ve yüksek depolama kapasitesi, günlük kullanım için son derece pratik özellikler sunar. Bu scooter, şehir içi ve dışı kullanımda mükemmel manevra kabiliyeti ve yol tutuşu ile öne çıkar."
    },
      {
          "num": "5",
          "url": `https://enonlar.com/${url}#bolum-5`,
          "name": "Piaggio X Evo 250",
          "image": "/images/motosiklet/piaggio_x_evo_250.png",
          "ozellikler": {
              "Ülke": "İtalya",
              "Firma": "Piaggio",
              "Tip": "Scooter",
              "Motor Hacmi": "250 cc",
              "Sıfır Yüz": "8.2 s",
              "Max": "128 Km/h",
              "Tüketim": "3.7 Litre/100 Km",
              "Ağırlık": "161 Kg",
              "Yakıt Kapasitesi": "12.5 Litre"
          },
          "paragraf": "İtalyan motosiklet üreticisi Piaggio'nun prestijli modeli X Evo 250, şık tasarımı ve üstün performansı ile bilinir. 250cc motor hacmi ve 128 km/s maksimum hızı ile şehir içi ve dışı kullanımda etkileyici bir sürüş deneyimi sunar. X Evo 250, konforlu oturma düzeni ve geniş depolama alanı ile uzun yolculuklar için idealdir. İtalyan tasarımının zarafeti ve modern teknolojilerin birleşimi, bu scooter'ı estetik ve işlevsel açıdan dikkat çekici kılar. Özellikle güçlü motoru ve etkileyici yol tutuşu, X Evo 250'yi scooter kategorisinde öne çıkaran özellikler arasındadır."
      },
      {
          "num": "4",
          "url": `https://enonlar.com/${url}#bolum-4`,
          "name": "KYMCO X-Town CT 250",
          "image": "/images/motosiklet/kymco_x_town_ct250.png",
          "ozellikler": {
              "Ülke": "Tayvan",
              "Firma": "KYMCO",
              "Tip": "Scooter",
              "Motor Hacmi": "250 cc",
              "Sıfır Yüz": "8.4 s",
              "Max": "126 Km/h",
              "Tüketim": "3.3 Litre/100 Km",
              "Ağırlık": "177 Kg",
              "Yakıt Kapasitesi": "13 Litre"
          },
          "paragraf": "Tayvan'dan gelen KYMCO'nun bu etkileyici modeli X-Town CT 250, 250cc motor hacmi ve 126 km/s maksimum hız ile şehir içi ve dışı yolculuklarda mükemmel performans sergiler. Modern tasarımı ve geniş oturma alanı, uzun süreli sürüşlerde konfor ve rahatlık sağlar. X-Town CT 250, etkili fren sistemi ve stabil yol tutuşu ile güvenlik konusunda da öne çıkar. Bu scooter, geniş bagaj kapasitesi ve çok yönlü kullanımı ile hem işlevsellik hem de estetik açıdan tatmin edici bir deneyim sunar."
      },
      {
          "num": "3",
          "url": `https://enonlar.com/${url}#bolum-3`,
          "name": "Suzuki Burgman 250",
          "image": "/images/motosiklet/suzuki_burgman_250.jpg",
          "ozellikler": {
              "Ülke": "Japonya",
              "Firma": "Suzuki",
              "Tip": "Scooter",
              "Motor Hacmi": "250 cc",
              "Sıfır Yüz": "8.1 s",
              "Max": "130 Km/h",
              "Tüketim": "3.9 Litre/100 Km",
              "Ağırlık": "159 Kg",
              "Yakıt Kapasitesi": "13 Litre"
          },
          "paragraf": "Japon motosiklet devi Suzuki'nin Burgman 250 modeli, şık tasarımı ve üst düzey performansı ile bilinir. 250cc motor hacmi ve 130 km/s maksimum hızı ile şehir içi ve dışı kullanımda mükemmel bir sürüş deneyimi sunar. Burgman 250, geniş oturma alanı ve yüksek depolama kapasitesi ile uzun yolculuklar için idealdir. Ergonomik tasarımı ve üstün yol tutuşu, bu scooter'ı hem rahat hem de güvenli kılar. Suzuki Burgman 250, estetik ve fonksiyonelliği mükemmel bir şekilde birleştirerek sürücülere keyifli bir sürüş deneyimi sağlar."
      },
      {
          "num": "2",
          "url": `https://enonlar.com/${url}#bolum-2`,
          "name": "Honda Forza 250",
          "image": "/images/motosiklet/honda_forza_250.jpg",
          "ozellikler": {
              "Ülke": "Japonya",
              "Firma": "Honda",
              "Tip": "Scooter",
              "Motor Hacmi": "250 cc",
              "Sıfır Yüz": "8.6 s",
              "Max": "135 Km/h",
              "Tüketim": "3.5 Litre/100 Km",
              "Ağırlık": "162 Kg",
              "Yakıt Kapasitesi": "11.5 Litre"
          },
          "paragraf": "Japonya'nın önde gelen motosiklet üreticilerinden Honda'nın prestijli modeli Forza 250, şık tasarımı ve etkileyici performansı ile tanınır. 250cc motor hacmi ve 135 km/s maksimum hızı ile hem şehir içi hem de şehir dışı kullanımda mükemmel bir sürüş deneyimi sunar. Forza 250, ergonomik oturma düzeni ve geniş bagaj kapasitesi ile uzun yolculuklar için idealdir. Ayrıca, gelişmiş frenleme sistemi ve etkileyici yol tutuşu ile güvenlik konusunda da öne çıkar. Honda Forza 250, modern teknoloji ve üstün sürüş kalitesini bir araya getirerek scooter segmentindeki iddialı konumunu korur."
      },
      {
        "num": "1",
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name": "Yamaha XMAX 250",
        "image": "/images/motosiklet/yamaha_xmax_250.jpg",
        "ozellikler": {
          "Ülke": "Japonya",
          "Firma": "Yamaha",
          "Tip": "Scooter",
          "Motor Hacmi": "249 cc",
          "Sıfır Yüz": "7.9 s",
          "Max": "140 Km/h",
          "Tüketim": "3.1 Litre/100 Km",
          "Ağırlık": "179 Kg",
          "Yakıt Kapasitesi": "13.2 Litre",
        },
        "paragraf": "Yamaha'nın ünlü modeli XMAX 250, 250cc motor hacmi ve 140 km/s maksimum hızı ile özellikle şehir içi ve dışı kullanımlarda mükemmel performans sergiler. Şık ve aerodinamik tasarımı, uzun yolculuklar için konfor ve rahatlık sağlar. XMAX 250, gelişmiş frenleme sistemi ve üstün yol tutuşu özellikleri ile güvenli bir sürüş deneyimi sunar. Geniş depolama alanı ve ergonomik koltuk yapısı, günlük kullanım için idealdir. Yamaha'nın bu modeli, hem estetik hem de teknik özellikler açısından scooter segmentindeki lider konumunu korumaktadır."
        }
  ];

  const ana_resim = "/images/ana_gorseller/enonlar-en-iyi-10-250-cc-scooter-motosiklet.png";
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