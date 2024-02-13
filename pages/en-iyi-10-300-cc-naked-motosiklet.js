import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';
import StaticUrls from '@/lib/StaticUrls';

export async function getStaticProps() {
  //#region SAYFA TEXT TANIMLAMALARI
  const url = "en-iyi-10-300-cc-naked-motosiklet";
  const baslik = "En İyi 10 300 CC Naked Motosiklet";
  const metin = "300cc motor hacmi, genellikle başlangıç ve orta seviye sürücüler için idealdir, çünkü hem şehir içi hem de uzun mesafeli sürüşler için yeterli güç sunar. Naked motosikletlerin minimalist tasarımı, daha düşük ağırlık ve rahat sürüş pozisyonu, bu tarz motosikletleri hem günlük kullanım hem de maceralı sürüşler için cazip kılar. Listemizdeki zarif tasarımlı ve performans odaklı motosikletler, bu segmentin ne kadar çekici ve heyecan verici olduğunu gösteriyor. Hadi listeyi inceleyelim!";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  const keywordsArray = ["en", "iyi", "300cc", "motosiklet", "naked"]; //burada türkçe karakter olacak mı bir fikrim yok
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
      "url": "https://enonlar.com/${url}#bolum-10",
      "name": "CFMoto 300NK",
      "image": "/images/motosiklet/cfmoto_300nk.png",
      "ozellikler": {
          "Ülke": "Çin",
          "Firma": "CFMoto",
          "Tip": "Naked",
          "Motor Hacmi": "292 cc",
          "Sıfır Yüz": "6.5 s",
          "Max": "128 km/s",
          "Tüketim": "4.2 Litre/100 km",
          "Ağırlık": "151 kg",
          "Yakıt Kapasitesi": "12.5 Litre"
      },
      "paragraf": "Çinli üretici CFMoto'nun 300NK modeli, uygun fiyatlı ve stil sahibi bir naked motosiklet arayanlar için ideal bir seçenek. Sade ve modern bir tasarım anlayışını benimsemiş. Dik sürüş pozisyonu ve hafif yapısı sayesinde, şehir içinde rahat bir sürüş deneyimi sunuyor. 300NK, performans ve konfor arasında iyi bir denge kurarak, yeni başlayanlar için güvenilir ve ulaşılabilir bir tercih oluşturuyor."
  },
  {
      "num": "9",
      "url": "https://enonlar.com/${url}#bolum-9",
      "name": "Husqvarna Vitpilen 401",
      "image": "/images/motosiklet/husqvarna_vitpilen_401.png",
      "ozellikler": {
          "Ülke": "İsveç",
          "Firma": "Husqvarna",
          "Tip": "Naked",
          "Motor Hacmi": "373 cc",
          "Sıfır Yüz": "5.6 s",
          "Max": "145 km/s",
          "Tüketim": "3.5 Litre/100 km",
          "Ağırlık": "157 kg",
          "Yakıt Kapasitesi": "9.5 Litre"
      },
      "paragraf": "İsveç kökenli Husqvarna'nın Vitpilen 401 modeli, minimalist ve modern tasarımı ile dikkat çeker. Hafif ve kompakt yapıda olan bu motosiklet, şehir içi kullanım için ideal. Güçlü motoru ve dikkat çekici hızlanması, sürüş deneyimini eğlenceli hale getiriyor. Gidon ve gaz tepkileri, sürücüyü tatmin edecek düzeyde. Sürüş pozisyonu sportif ve yol tutuşu güven verici. Fren performansı ve süspansiyon sistemi, sınıfının beklentilerini karşılıyor. Genel olarak, Vitpilen 401, şık görünümü ve performansı ile naked sınıfında farklı bir seçenek sunuyor."
  }, 
  {
    "num": "8",
    "url": "https://enonlar.com/${url}#bolum-8",
    "name": "TVS Apache RTR 310",
    "image": "/images/motosiklet/tvs_apache_rtr_310.png",
    "ozellikler": {
        "Firma": "TVS",
        "Tip": "Naked",
        "Motor Hacmi": "313 cc",
        "Sıfır Yüz": "6.9 s",
        "Max": "145 km/s",
        "Tüketim": "3.3 Litre/100 km",
        "Ağırlık": "169.5 kg",
        "Ülke": "Hindistan",
        "Yakıt Kapasitesi": "11 Litre"
    },
    "paragraf": "Hindistan'ın önde gelen motosiklet üreticilerinden TVS'nin Apache RTR 310 modeli, spor tarzı ve ergonomik tasarımı ile genç sürücülerin ilgisini çekiyor. Güçlü motoru ve dengeli ağırlık dağılımı sayesinde, şehir içinde ve şehir dışında rahat bir sürüş deneyimi sunuyor. Motorun düşük ve yüksek devir performansı tatmin edici. Fren sistemi ve süspansiyon, beklenen düzeyde konfor ve kontrol sunuyor. Gidonun rahat ergonomisi ve gaz tepkileri, sürüş deneyimini daha da keyifli hale getiriyor. TVS Apache RTR 310, uygun fiyatlı ve performans odaklı bir naked motosiklet arayanlar için cazip bir seçenek olabilir."
  },
  {
    "num": "7",
    "url": "https://enonlar.com/${url}#bolum-7",
    "name": "Kawasaki Z400",
    "image": "/images/motosiklet/kawasaki_z400.jpg",
    "ozellikler": {
        "Firma": "Kawasaki",
        "Tip": "Naked",
        "Motor Hacmi": "399 cc",
        "Sıfır Yüz": "4.7 s",
        "Max": "175 km/s",
        "Tüketim": "4.1 Litre/100 km",
        "Ağırlık": "166 kg",
        "Ülke": "Japonya",
        "Yakıt Kapasitesi": "14 Litre"
    },
    "paragraf": "Japonya'nın prestijli motosiklet üreticilerinden Kawasaki'nin Z400 modeli, hafiflik ve kompakt yapıyı performansla birleştiriyor. Düşük ağırlık merkezi ve kompakt motor tasarımı, motorun hızlı ve tepkisel olmasını sağlıyor. Z400, özellikle düşük ve orta devirlerde güçlü bir tork sunuyor. Sert süspansiyon sistemi, motorun yol tutuşunu ve sürüş dinamiklerini iyileştiriyor. Gidon ve gaz tepkileri son derece hassas, bu da motoru hızlı ve çevik kılıyor. Kullanıcı dostu ergonomisi ve konforlu sürüş pozisyonu, Kawasaki Z400'ü uzun sürüşler için uygun hale getiriyor. Fren performansı ve ABS sistemi, güvenli bir sürüş deneyimi sağlıyor."
  },
  {
    "num": "6",
    "url": "https://enonlar.com/${url}#bolum-6",
    "name": "Benelli TNT 300",
    "image": "/images/motosiklet/benelli-tnt-300.png",
    "ozellikler": {
        "Firma": "Benelli",
        "Tip": "Naked",
        "Motor Hacmi": "300 cc",
        "Sıfır Yüz": "8.4 s",
        "Max": "154 km/s",
        "Tüketim": "4.5 Litre/100 km",
        "Ağırlık": "185 kg",
        "Ülke": "İtalya",
        "Yakıt Kapasitesi": "16 Litre"
    },
    "paragraf": "İtalyan tasarımı ve Çin mühendisliği ile harmanlanmış Benelli TNT 300, estetik ve performansı uygun fiyatla sunuyor. 300cc hacmindeki motor, düşük ve orta devirlerde tatminkar tork sağlıyor. Ergonomik yapısı ve geniş koltuğu, konforlu bir sürüş deneyimi sunarken, hassas süspansiyon sistemi sayesinde yol tutuşu ve sürüş dinamikleri de oldukça başarılı. Gidon tepkisi ve gaz kontrolü, sürücüye tam kontrol hissi veriyor. Sade ve zarif tasarımı, TNT 300'ü şehir içi sürüşler için ideal kılıyor. Fren performansı ve ABS sistemi, sürücüye güvenli bir sürüş deneyimi sunuyor."
  },
  {
    "num": "5",
    "url": "https://enonlar.com/${url}#bolum-5",
    "name": "Honda CB300R",
    "image": "/images/motosiklet/honda_cb300r.png",
    "ozellikler": {
        "Firma": "Honda",
        "Tip": "Naked",
        "Motor Hacmi": "300 cc",
        "Sıfır Yüz": "7.8 s",
        "Max": "145 km/s",
        "Tüketim": "3.3 Litre/100 km",
        "Ağırlık": "143 kg",
        "Ülke": "Japonya",
        "Yakıt Kapasitesi": "10 Litre"
    },
    "paragraf": "Japon mühendisliği ile üretilen Honda CB300R, sofistike tasarımı ve mükemmel işçiliği ile dikkat çeker. Yalın ve modern tasarımı, genç ve enerjik sürücülerin beklentilerini karşılar. Motor performansı, düşük ve orta devirlerde güçlü, yüksek devirlerde ise canlıdır. Konforlu sürüş pozisyonu, şehir içi ve uzun yol sürüşlerinde sürücüyü yormaz. Yol tutuşu ve süspansiyon sistemi, Honda'nın kalitesini gösteriyor. Gaz tepkisi ve fren performansı, sürücüye tam kontrol sağlıyor. CB300R, dayanıklılığı ve düşük yakıt tüketimi ile de uzun vadede ekonomik bir seçenek sunar."
  },
  {
      "num": "4",
      "url": "https://enonlar.com/${url}#bolum-4",
      "name": "BMW G 310 R",
      "image": "/images/motosiklet/bmw_g310r.png",
      "ozellikler": {
          "Firma": "BMW",
          "Tip": "Naked",
          "Motor Hacmi": "313 cc",
          "Sıfır Yüz": "7.6 s",
          "Max": "143 km/s",
          "Tüketim": "3.3 Litre/100 km",
          "Ağırlık": "158.5 kg",
          "Ülke": "Almanya",
          "Yakıt Kapasitesi": "11 Litre"
      },
      "paragraf": "Alman mühendisliği ile hazırlanan BMW G 310 R, minimalist ve şık tasarımı ile dikkat çeker. BMW'nin kalite standartlarını yansıtan bu model, günlük kullanımdan uzun yol sürüşlerine kadar geniş bir kullanım yelpazesi sunar. Motoru, düşük devirlerde dahi tatminkar bir tork sunar. Süspansiyon sistemi, rahat bir sürüş deneyimi sağlarken, frenler oldukça güçlü ve hassastır. Gidon ve gaz tepkisi, sürücüye mükemmel bir kontrol imkanı sunar. BMW G 310 R, uzun ömürlü ve dayanıklı bir yapıya sahiptir, bu da onu uzun vadede güvenilir ve ekonomik bir seçenek haline getirir."
  },
  {
      "num": "3",
      "url": "https://enonlar.com/${url}#bolum-3",
      "name": "KTM Duke 390",
      "image": "/images/motosiklet/ktm_duke_390.png",
      "ozellikler": {
          "Firma": "KTM",
          "Tip": "Naked",
          "Motor Hacmi": "373 cc",
          "Sıfır Yüz": "5.6 s",
          "Max": "167 km/s",
          "Tüketim": "3.5 Litre/100 km",
          "Ağırlık": "149 kg",
          "Ülke": "Avusturya",
          "Yakıt Kapasitesi": "13.4 Litre"
      },
      "paragraf": "Avusturyalı motosiklet üreticisi KTM'nin başyapıtı Duke 390, radikal tasarımı ve sıra dışı performansı ile pazardaki diğer naked'lardan ayrılıyor. 390cc motor hacmi, sürücüye her gaz açışında etkileyici bir güç ve tork sunar. Sert süspansiyonlar, mükemmel yol tutuşu sağlar ama bir o kadar da konforlu bir sürüş deneyimi sunar. Gaz tepkimesi ve fren performansı sınıfının en iyilerinden. Sürücü pozisyonu, hem şehir içi hem de otoyol sürüşlerinde ergonomik ve rahat. KTM Duke 390, genç ve enerjik sürücüler için mükemmel bir seçimdir."
  },
  {
    "num": "2",
    "url": "https://enonlar.com/Kawasaki-Z300#bolum-11",
    "name": "Kawasaki Z300",
    "image": "/images/motosiklet/kawasaki_z300.png",
    "ozellikler": {
        "Firma": "Kawasaki",
        "Tip": "Naked",
        "Motor Hacmi": "300 cc",
        "Sıfır Yüz": "7.5 s",
        "Max": "170 km/s",
        "Tüketim": "3.5 Litre/100 km",
        "Ağırlık": "168 kg",
        "Ülke": "Japonya",
        "Yakıt Kapasitesi": "17 Litre"
    },
    "paragraf": "Japonya'nın köklü motosiklet üreticilerinden Kawasaki'nin Z serisinin bir üyesi olan Z300, hafifliği ve çevikliği ile dikkat çeker. Günlük sürüşler ve şehir içi kullanım için oldukça uygun olan Z300, sürücüsüne konforlu bir sürüş deneyimi sunar. Motorun çevikliği ve rahat kullanımı, yeni başlayanlar için bile dostane bir seçenek haline getirir. Ayrıca, 17 litrelik yakıt kapasitesi sayesinde uzun yolculuklar için de oldukça uygundur. Yol tutuşu ve fren performansı, Kawasaki'nin bu modelinde de oldukça tatminkardır."
  },
  {
    "num": "1",
    "url": "https://enonlar.com/${url}#bolum-1",
    "name": "Yamaha MT-03",
    "image": "/images/motosiklet/yamaha_mt_03.png",
    "ozellikler": {
        "Firma": "Yamaha",
        "Tip": "Naked",
        "Motor Hacmi": "321 cc",
        "Sıfır Yüz": "5.3 s",
        "Max": "180 km/s",
        "Tüketim": "3.4 Litre/100 km",
        "Ağırlık": "168 kg",
        "Ülke": "Japonya",
        "Yakıt Kapasitesi": "15 Litre"
    },
    "paragraf": "Japon üretici Yamaha'nın MT-03 modeli, sportif ve agresif tasarımı ile dikkat çeker. 321cc motor hacmi, tatmin edici bir performans ve dinamik bir sürüş deneyimi sunar. Yol tutuşu ve süspansiyon sistemi, sportif sürüşleri destekler ve konforu korur. Gaz tepkimesi hızlı, frenler güçlü ve hassas. MT-03, hem estetik hem de performans açısından, bu segmentteki sürücüler için etkileyici bir seçenektir."
  }
  ];
  
  const ana_resim = "/images/ana_gorseller/enonlar-en-iyi-10-300-cc-naked-motosiklet.png";
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};
  
  const jsonList = moviesAndSeriesJson(articleInfos,
  "Motosiklet", 
  metin,
  jsonContentArray
  )
  //#endregion

  const defaultsURLs = [
    "en-iyi-10-600-cc-naked-motosiklet",
    "en-iyi-10-1000-cc-naked-motosiklet",
    "en-iyi-10-125-cc-naked-motosiklet",
    "en-iyi-10-300-cc-super-sport-motosiklet"
  ];
  const defaultRecommends = await StaticUrls(defaultsURLs);

  return {
    props: {
        articleConstructor: {
            baslik, description, keywordsArray, ana_resim, url, jsonList, addDate, okunmaSuresi: jsonList.readTimeSpan, kategori, metin, jsonContentArray, defaultRecommends
        }
    }
  }
}

export default function Eniyi300ccNakedMain({topCPO, articleConstructor}) {
  

  return (
    <ClassicArticleTop topCPO={topCPO} articleConstructor={articleConstructor}/>
  )
}