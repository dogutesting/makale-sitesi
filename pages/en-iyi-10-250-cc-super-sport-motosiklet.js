import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

export default function Eniyi250ccSuperMain({topCPO}) {
  //#region SAYFA TEXT TANIMLAMALARI
  const url = "en-iyi-10-250-cc-super-sport-motosiklet";
  const baslik = "En İyi 10 250 CC Super Sport Motosiklet";
  const metin = "250 lik supersport motosikletler, hem performansları hem de estetik tasarımları ile genç ve enerjik sürücülerin ilgisini çekiyor. Estetik ve atik yapılarıyla, her bir virajda sizi motosiklet tutkunuzun yeni boyutlarına taşıyor. Bu makalemizde, piyasada bulabileceğiniz en iyi 10 250 cc supersport motosikletleri derledik. 250 cc super sport motorlar ister şehir içinde hızlı manevralar, ister uzun yolda rüzgarla dans etmek olsun eğlenmek için birebir. 250 cc racing motorlar yapıları gereği rüzgarı delmeye daha müsaittir bu yapıları 250 cc supersport motorları sürenler için adeta bir yarış pistinde sürüyormuş havası verir. 250 cc motor önerileri sunduğumuz bu yazımızda super sport olanları sıraladık.  Hangi modelin sizi en çok heyecanlandırdığını 250 cc racing motor önerileri makalemizde karşılaştırma yaparak keşfedin. 250 cc motor önerilerine geçmeden önce 250 cc motor hangi ehliyet ile kullanılır? ve 250 cc motor ehliyeti kaç yaşında alınır? sorularını cevaplayalım. 250 cc motor hacmine sahip motosikletler için yasalar A2 ehliyeti ve 18 yaşını doldurmuş olmayı şart koşmaktadır. Bu soruları cevaplandırdığımıza göre hadi hemen yazımıza başlayalım!";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  const keywordsArray = ["en", "iyi", "250cc", "motosiklet", "super", "sport"]; //burada türkçe karakter olacak mı bir fikrim yok
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
      "name": "Daelim Roadwin 250",
      "image": "/images/motosiklet/daelim_roadwin_250.jpg",
      "ozellikler": {
          "daelim roadwin 250 özellikleri": "",
          "Ülke": "Güney Kore",
          "Firma": "Daelim",
          "Tip": "Supersport",
          "Motor Hacmi": "250 cc",
          "Sıfır Yüz": "8.1 s",
          "Max": "140 km/s",
          "Tüketim": "3.5 Litre/100 km",
          "Ağırlık": "139 kg",
          "Yakıt Kapasitesi": "15 Litre"
      },
      "paragraf": "Güney Kore üretimi olan Daelim Roadwin 250, sade ve zarif tasarımı ile ilk bakışta sizi çekebilir. Yol üzerinde, bu makinenin sakin ve kolay kontrol edilebilir doğası, özellikle yeni sürücüler için rahatlatıcıdır. Motor, düşük ve orta devirlerde yumuşak bir performans sunar, yüksek hızlarda ise biraz daha enerji bekleyebilirsiniz. Frenler ve süspansiyon, günlük sürüşler için yeterli konfor ve güvenliği sağlar. Ancak, daha sportif bir sürüş deneyimi arayanlar için biraz daha sert ve dirençli bir süspansiyon tercih edilebilir. Roadwin 250'nin en çekici yanı, uygun fiyatı ve düşük işletme maliyetidir. Ancak, daha heyecan verici bir sürüş deneyimi ve daha yüksek kaliteli malzemeler için başka seçenekleri de göz önünde bulundurmanız önerilir."
  },
  {
      "num": "9",
      "url": `https://enonlar.com/${url}#bolum-9`,
      "name": "Taro 250R",
      "image": "/images/motosiklet/taro_250r.png",
      "ozellikler": {
          "taro 250 r özellikleri": "",
          "Ülke": "Çin",
          "Firma": "Yuki Motor",
          "Tip": "Supersport",
          "Motor Hacmi": "250 cc",
          "Sıfır Yüz": "8.5 s",
          "Max": "130 km/s",
          "Tüketim": "3.8 Litre/100 km",
          "Ağırlık": "176 kg",
          "Yakıt Kapasitesi": "14 Litre"
      },
      "paragraf": "Çin üretimi Taro 250R, uygun fiyatlı bir süpersport motosiklet arayanlar için cazip bir seçenek sunuyor. İlk bakışta, bu motosikletin dinamik tasarımı ve keskin hatları, rakiplerinden ayırt edici bir estetik kazandırıyor. Yola çıktığınızda, 250R'nin hafifliği ve dengeli şasisi, manevra kabiliyetini ön plana çıkarıyor. Motoru, beklenenden daha canlı bir performans sergiliyor, fakat yüksek devirlerde biraz gürültülü çalışabiliyor. Fren performansı, bu segment için yeterli, ancak süspansiyon biraz daha konforlu olabilirdi. Genel olarak, Taro 250R, bütçe dostu bir süpersport motosiklet arayanlar için düşünülebilir bir seçenek, fakat daha konforlu bir sürüş ve daha yüksek kaliteli malzemeler arayanlar için başka modelleri incelemekte fayda var."
  },
  {
    "num": "8",
    "url": `https://enonlar.com/${url}#bolum-8`,
    "name": "Megelli Sport 250 R",
    "image": "/images/motosiklet/megelli_sport_250_r.jpg",
    "ozellikler": {
        "megelli sport 250 r özellikleri": "",
        "Ülke": "İngiltere",
        "Firma": "Megelli",
        "Tip": "Supersport",
        "Motor Hacmi": "250 cc",
        "Sıfır Yüz": "8.5 s",
        "Max": "145 km/s",
        "Tüketim": "3.5 Litre/100 km",
        "Ağırlık": "130 kg",
        "Yakıt Kapasitesi": "6.8 Litre"
    },
    "paragraf": "İngiliz üretimi Megelli Sport 250 R, sportif tasarımı ve etkileyici performansı ile dikkat çeker. Agresif hatları ve aerodinamik yapısı, dinamik bir sürüş deneyimi sunar. Motor, enerjik ve canlı, yüksek devirlerde bile güç kaybetmiyor. Yol tutuşu sağlam, frenler ise etkili ve güvenilir. Süspansiyon sistemi, sportif sürüşler için ideal sertlikte. Megelli Sport 250 R, 250cc süpersport segmentinde uygun fiyatlı ve performans odaklı bir seçenek sunar."
  },
  {
      "num": "7",
      "url": `https://enonlar.com/${url}#bolum-7`,
      "name": "Hyosung GD250R",
      "image": "/images/motosiklet/hyosung_gd250r.jpg",
      "ozellikler": {
          "hyosung gd250r özellikleri": "",
          "Ülke": "Güney Kore",
          "Firma": "Hyosung",
          "Tip": "Supersport",
          "Motor Hacmi": "250 cc",
          "Sıfır Yüz": "8.2 s",
          "Max": "140 km/s",
          "Tüketim": "3.6 Litre/100 km",
          "Ağırlık": "155 kg",
          "Yakıt Kapasitesi": "11 Litre"
      },
      "paragraf": "Güney Kore merkezli bir motosiklet üreticisinin ellerinden çıkma Hyosung GD250R, minimalist ve modern tasarımı ile göz doldurur. Düzgün ve kontrollü bir sürüş deneyimi sunar, özellikle virajlarda beklenenden daha dirençli bir yapı sergiler. Motor performansı, şehir içi ve hafta sonu gezileri için yeterli, ancak yüksek hızlarda motorun enerjisi biraz düşebilir. Fren sistemi tatminkar, süspansiyon ise rahat ve dengeli. GD250R, başlangıç ve orta seviye sürücüler için uygun fiyatlı ve estetik bir seçenek oluştururken, aynı zamanda günlük sürüşler için de uygun bir tercih."
  },
  {
    "num": "6",
    "url": `https://enonlar.com/${url}#bolum-6`,
    "name": "Suzuki GSX-250R",
    "image": "/images/motosiklet/suzuki_gsx_250r.jpg",
    "ozellikler": {
        "suzuki 250 r özellikleri": "",
        "Ülke": "Japonya",
        "Firma": "Suzuki",
        "Tip": "Supersport",
        "Motor Hacmi": "250 cc",
        "Sıfır Yüz": "8.5 s",
        "Max": "141 km/s",
        "Tüketim": "3.9 Litre/100 km",
        "Ağırlık": "181 kg",
        "Yakıt Kapasitesi": "15 Litre"
    },
    "paragraf": "Japon üretimi Suzuki GSX-250R, zarif ve estetik tasarımı ile ön plana çıkar. Motosikletin yumuşak hatları ve sportif görünümü, sürücülere etkileyici bir estetik sunar. Motor, düşük ve orta devirlerde dengeli bir performans sunarken, yüksek devirlerde biraz daha enerji arzulayabilir. Yol tutuşu dengeli ve güvenilir, frenler ise oldukça etkili ve güvenli bir duruş sunuyor. Süspansiyon sistemi, konforlu ve günlük sürüşler için ideal bir denge sunar. Suzuki GSX-250R, sportif sürüş deneyimi sunarken aynı zamanda günlük kullanım için de pratik ve konforlu bir seçenek oluşturur. Geniş bir sürücü kitlesi için uygun olan bu model, uygun fiyatı ve düşük işletme maliyeti ile de dikkat çeker."
  },
  {
    "num": "5",
    "url": `https://enonlar.com/${url}#bolum-5`,
    "name": "KTM RC 250",
    "image": "/images/motosiklet/ktm_rc_250.jpg",
    "ozellikler": {
        "ktm rc 250 özellikleri": "",
        "Ülke": "Avusturya",
        "Firma": "KTM",
        "Tip": "Supersport",
        "Motor Hacmi": "250 cc",
        "Sıfır Yüz": "8.0 s",
        "Max": "145 km/s",
        "Tüketim": "3.7 Litre/100 km",
        "Ağırlık": "147 kg",
        "Yakıt Kapasitesi": "13.4 Litre"
    },
    "paragraf": "Avusturya üretimi serseri stil KTM RC 250, agresif tasarımı ve canlı renk seçenekleri ile adeta pistlerin çağrısını yapar. Sert ve dirençli şasisi, virajlarda mükemmel bir yol tutuşu sunar. Motor, düşük ve orta devirlerde tatminkar bir performans sergilerken, yüksek devirlerde sizi daha da heyecanlandırır. Fren sistemi güvenilir ve etkili, süspansiyon ise sportif sürüşler için ideal bir sertliğe sahip. RC 250, genç ve enerjik sürücüler için dinamik ve heyecan verici bir sürüş deneyimi sunar."
  },
  {
    "num": "4",
    "url": `https://enonlar.com/${url}#bolum-4`,
    "name": "Kawasaki Ninja 250SL",
    "image": "/images/motosiklet/kawasaki_ninja_250sl.png",
    "ozellikler": {
        "kawasaki ninja 250 sl özellikleri": "",
        "Ülke": "Japonya",
        "Firma": "Kawasaki",
        "Tip": "Supersport",
        "Motor Hacmi": "250 cc",
        "Sıfır Yüz": "8.5 s",
        "Max": "153 km/s",
        "Tüketim": "3.6 Litre/100 km",
        "Ağırlık": "151 kg",
        "Yakıt Kapasitesi": "11 Litre"
    },
    "paragraf": "Japonya merkezli Kawasaki ağır sanayinin minik serçesi Ninja 250SL, hafif yapısı ve kompakt boyutları ile özellikle yeni sürücüler için mükemmel bir tercih. Aerodinamik tasarımı ve sportif görünümü ile dikkat çeker. Motor, canlı ve istekli bir performans sunar, virajlarda ise motosikletin hafifliği sayesinde çevik ve kontrol edilebilir. Fren performansı güven verirken, süspansiyon ise sert fakat konforlu. Genel olarak, Ninja 250SL, giriş seviyesi sürücüler için sportif ve heyecan verici bir sürüş deneyimi sunar."
  },
  {
    "num": "3",
    "url": `https://enonlar.com/${url}#bolum-3`,
    "name": "Kawasaki Ninja 250R",
    "image": "/images/motosiklet/kawasaki_ninja_250r.jpg",
    "ozellikler": {
        "kawasaki ninja 250 r özellikleri": "",
        "Ülke": "Japonya",
        "Firma": "Kawasaki",
        "Tip": "Supersport",
        "Motor Hacmi": "250 cc",
        "Sıfır Yüz": "5.75 s",
        "Max": "150 km/s",
        "Tüketim": "3.4 Litre/100 km",
        "Ağırlık": "170 kg",
        "Yakıt Kapasitesi": "17.8 Litre"
    },
    "paragraf": "Ninja 250R, estetik ve performansı bir araya getiren etkileyici bir motosiklet. Keskin hatları, aerodinamik yapısı ve markanın ikonik Ninja serisinin bir parçası olarak, sportif ve agresif bir karakter sunar. Motor, düşük ve orta devirlerde güvenilir ve dengeli bir performans sunarken, yüksek devirlerde beklenen enerjiyi sağlar. Yol tutuşu mükemmel, frenler ise etkili ve güvenilir. Süspansiyon, sportif sürüşler için ideal bir sertlikte. Genel olarak, Kawasaki Ninja 250R, giriş ve orta seviye sürücüler için sağlam bir performans ve güvenilirlik sunan cazip bir seçenektir."
  },
  {
    "num": "2",
    "url": `https://enonlar.com/${url}#bolum-2`,
    "name": "Honda CBR250R",
    "image": "/images/motosiklet/honda_cbr_250r.png",
    "ozellikler": {
        "honda cbr 250 özellikleri": "",
        "Firma": "Honda",
        "Tip": "Supersport",
        "Motor Hacmi": "250 cc",
        "Sıfır Yüz": "8.6 s",
        "Max": "135 km/s",
        "Tüketim": "3.5 Litre/100 km",
        "Ağırlık": "162 kg",
        "Ülke": "Japonya",
        "Yakıt Kapasitesi": "13 Litre"
    },
    "paragraf": "Honda 250 cc supersport Japonya'da kurulmuş Japon otomotiv firmasının gözde ürünlerinden Honda CBR250R, güzel tasarımı ve performansına göre dengeli yakıt tüketimini bir araya getirilmiş bir modeli. Zarif tasarımı ve sportif hatları ile göz alıcı. Motor, düşük devirlerde bile tatminkar bir tork sunuyor, yüksek devirlerde ise adrenalinin doruklarına çıkıyor. Yol tutuşu, fren performansı ve süspansiyon sistemi, sürücüye tam bir kontrol ve güven duygusu sunuyor. Honda'nın bu zarif makinesi, günlük sürüşlerde konfor ve spor sürüşlerde performans arayanlar için ideal bir tercih. Her virajda ve düzlükte, CBR250R'nin sportif ruhu ve mühendislik harikası yapısı, sürücüyü motosiklet aşkının derinliklerine çekiyor."
  },
  {
    "num": "1",
    "url": `https://enonlar.com/${url}#bolum-1`,
    "name": "Yamaha YZF-R25",
    "image": "/images/motosiklet/yamaha_yzf_r25.jpg",
    "ozellikler": {
        "yamaha r25 özellikleri": "",
        "Firma": "Yamaha",
        "Tip": "Supersport",
        "Motor Hacmi": "250 cc",
        "Sıfır Yüz": "5.5 s",
        "Max": "173 km/s",
        "Tüketim": "4.0 Litre/100 km",
        "Ağırlık": "166 kg",
        "Ülke": "Japonya",
        "Yakıt Kapasitesi": "14.3 Litre"
    },
    "paragraf": "Bir Japon tasarım harikası, motosiklet mi müzik aleti mi anlaması zor Yamaha YZF-R25 kısa adıyla R25. Herkesin en az bir kere gördüğü veya duyduğu bu spor motosiklet, 250 cc motor önerilerinin kalbinde yer alıyor.Yamaha 250 cc supersport modeli ile sadece gözleri değil, kalbi de fetheden bir motosiklet. Her bir detayı, sürücüsüyle birlikte asfaltın üzerinde adeta bir simfoni oluşturuyor. Yamaha 250 cc racing kategorisinde tartışılmaz bir konuma sahip, bu motosiklet düşük devirlerde bile canlılığını hissettiriyor, yüksek devirlerde ise gönülde tarifi olmayan bir duygu oluşturuyor. Yol tutuşu, fren performansı ve süspansiyon, sizi her anlamda destekliyor, her virajda sizinle birlikte nefes alıyor. Yamaha'nın bu başyapıtı, sadece yol tutuşu ve performansı ile değil, aynı zamanda estetik tasarımı ve mühendislik harikası yapısı ile de sürücülerin kalbinde yerini çoktan almış durumda. Bu kadar övgüden sonra şunu eklemem gerek: oturma yeri sert ve genişliğini ufak buldum ama ilginç bir şekilde oturma pozisyonu üzerine yatmayı gerektirmiyor daha rahat bir oturuş pozisyonu sunuyor. Hem gözünüze hem sürüş keyfinize etkisi çok yüksek olan bu motosiklet 1. sıradan hiç düşeceğe benzemiyor."
  }
  ];

  const ana_resim = "/images/ana_gorseller/enonlar-en-iyi-10-250-cc-super-sport-motosiklet.png";
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};
  const jsonList = moviesAndSeriesJson(articleInfos,
  "Motosiklet", 
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