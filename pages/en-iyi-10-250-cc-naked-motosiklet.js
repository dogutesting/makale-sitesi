import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

export default function Eniyi250ccNakedMain({topCPO}) {
  //#region SAYFA TANIMLAMALARI
  const url = "en-iyi-10-250-cc-naked-motosiklet";
  const baslik = "En İyi 10 250 CC Naked Motosiklet";
  const metin = "250cc naked motosikletler, hafiflikleri, atik yapıları ve şehir içi kullanım kolaylıkları ile bilinirler. İster yeni başlayan bir sürücü olun, ister deneyimli bir motor tutkunu, 250 cc naked segmentindeki motosikletler, sade ve fonksiyonel tasarımları ile geniş bir kitleye hitap ediyor. Naked tasarımdan kastımız önü açık motorlar, yani bu yazıyı 250 cc önü açık motorlar olarakta algılayabilirsiniz. Aşağıda, birbirinden estetik ve performanslı en iyi 10 250cc naked motosikleti detaylı özellikleri ve teknik analizler ışığında sıralayarak sizler için bir araya getiriyoruz. 250 cc motor önerilerine geçmeden önce 250 cc motor hangi ehliyet ile kullanılır? ve 250 cc motor ehliyeti kaç yaşında alınır? sorularını cevaplayalım. 250 cc motor hacmine sahip motosikletler için yasalar A2 ehliyeti ve 18 yaşını doldurmuş olmayı şart koşmaktadır. Şimdi bu soruyu cevaplandırdığımıza göre her bir motosikletin tasarımından, motor performansına, kullanım kolaylığına kadar birçok detayı incelemeye başlayalım. İyi okumalar!";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  const keywordsArray = ["en", "iyi", "250cc", "motosiklet", "naked"]; //burada türkçe karakter olacak mı bir fikrim yok
  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-03T01:36:00+03:00";
  const degistirilmeTarihi = "2023-11-19T01:13:00+03:00";
  const addDate = "03.10.23";

  const jsonContentArray = [
      {
          "num": "10",
          "url": `https://enonlar.com/${url}#bolum-10`,
          "name": "Husqvarna Svartpilen 250",
          "image": "/images/motosiklet/husqvarna_svartpilen_250.png",
          "ozellikler": {
              "Husqvarna Svartpilen 250 özellikleri": "",
              "Firma": "Husqvarna",
              "Tip": "Naked",
              "Motor Hacmi": "250 cc",
              "Sıfır Yüz": "9.0 s",
              "Max": "130 km/s",
              "Tüketim": "3.0 Litre/100 km",
              "Ağırlık": "154 kg",
              "Ülke": "İsveç",
              "Yakıt Kapasitesi": "9.5 Litre"
          },
          "paragraf": "İsveçli motosiklet üreticisi Husqvarna Svartpilen 250, modern ve minimalist bir tasarıma sahiptir. Sade hatları ve endüstriyel görünümü ile dikkat çeker. 250cc motoru, şehir içinde hızlı manevralar ve rahat bir sürüş deneyimi sunar. Hafif yapısı sayesinde, bu motosiklet yeni sürücüler için ideal bir seçenektir. Svartpilen, konforlu bir sürüş pozisyonu ve hassas yol tutuşu ile günlük sürüşler için uygun bir tercihtir."
      },  
      {
          "num": "9",
          "url": `https://enonlar.com/${url}#bolum-9`,
          "name": "Bajaj Dominar 250",
          "image": "/images/motosiklet/bajaj_dominar_250d.png",
          "ozellikler": {
            "Bajaj Dominar 250 özellikleri": "",
              "Firma": "Bajaj",
              "Tip": "Naked",
              "Motor Hacmi": "250 cc",
              "Sıfır Yüz": "8.5 s",
              "Max": "132 km/s",
              "Tüketim": "3.5 Litre/100 km",
              "Ağırlık": "180 kg",
              "Ülke": "Hindistan",
              "Yakıt Kapasitesi": "13 Litre"
          },
          "paragraf": "Hindistan'ın önde gelen motosiklet üreticilerinden biri olan Bajaj Dominar 250D, uygun fiyatlı bir giriş seviyesi naked motosiklet arayanlar için mükemmel bir seçimdir. Güçlü ve verimli motoru, şehir içi trafikte hızlı manevralar yapmayı kolaylaştırır. Dominar'ın geniş lastikleri ve konforlu koltuk yapısı, günlük sürüşlerde ve hafta sonu gezilerinde hoş bir deneyim sunar. Tasarımı, modern ve agresif çizgileriyle genç sürücülerin beğenisini kazanır. Performans ve fiyat arasındaki dengesi ile Bajaj Dominar 250D, bütçe dostu bir naked motosiklet arayanlar için ideal bir tercihtir."
      },
      {
          "num": "8",
          "url": `https://enonlar.com/${url}#bolum-8`,
          "name": "CFMoto 250NK",
          "image": "/images/motosiklet/cfmoto_250nk.png",
          "ozellikler": {
            "CFMoto 250NK özellikleri": "",
              "Firma": "CFMoto",
              "Tip": "Naked",
              "Motor Hacmi": "250 cc",
              "Sıfır Yüz": "8.0 s",
              "Max": "128 km/s",
              "Tüketim": "2.8 Litre/100 km",
              "Ağırlık": "151 kg",
              "Ülke": "Çin",
              "Yakıt Kapasitesi": "12.5 Litre"
          },
          "paragraf": "Çin menşeli CFMoto 250NK, modern ve aerodinamik tasarımı ile dikkat çeker. 250cc motoru, tatminkar bir performans ve ekonomik yakıt tüketimi sunar. Hafif ve kompakt yapısı, şehir içi trafiğinde kolay manevra imkanı sağlar. Geniş ve konforlu koltuk yapısı, uzun süreli sürüşlerde bile rahatlığı korur. Teknolojik özellikleri ve dijital gösterge paneli, sürücülere kullanışlı bilgiler sunar. CFMoto 250NK, uygun fiyatlı ve güvenilir bir naked motosiklet arayanlar için ideal bir seçenektir."
      },  
      {
          "num": "7",
          "url": `https://enonlar.com/${url}#bolum-7`,
          "name": "Kawasaki Z250",
          "image": "/images/motosiklet/kawasaki_z250.png",
          "ozellikler": {
            "Kawasaki Z250 özellikleri": "",
              "Firma": "Kawasaki",
              "Tip": "Naked",
              "Motor Hacmi": "250 cc",
              "Sıfır Yüz": "7.0 s",
              "Max": "153 km/s",
              "Tüketim": "3.5 Litre/100 km",
              "Ağırlık": "168 kg",
              "Ülke": "Japonya",
              "Yakıt Kapasitesi": "17 Litre"
          },
          "paragraf": "Japon yapımı Kawasaki Z250, keskin hatları ve agresif tasarımı ile karakteristik bir naked motosiklet estetiği sunar. 250cc'lik motoru, hızlı hızlanma ve tatmin edici bir üst hız sunar. Yol tutuşu ve fren performansı, sürücülere güven verir. Konforlu sürüş pozisyonu ve geniş koltuğu, şehir içi ve şehirlerarası seyahatler için uygundur. Yüksek kaliteli süspansiyon sistemi, hem konforu hem de sportif sürüş dinamiklerini dengeleyen bir performans sunar. Kawasaki Z250, hem yeni başlayanlar hem de deneyimli sürücüler için uygun, estetik ve performansı bir arada sunan bir motosiklettir."
      },  
      {
          "num": "6",
          "url": `https://enonlar.com/${url}#bolum-6`,
          "name": "Suzuki Gixxer 250",
          "image": "/images/motosiklet/suzuki_gixxer_250.jpg",
          "ozellikler": {
            "Suzuki Gixxer 250 özellikleri": "",
              "Firma": "Suzuki",
              "Tip": "Naked",
              "Motor Hacmi": "250 cc",
              "Sıfır Yüz": "8.5 s",
              "Max": "154 km/s",
              "Tüketim": "3.3 Litre/100 km",
              "Ağırlık": "156 kg",
              "Ülke": "Japonya",
              "Yakıt Kapasitesi": "12 Litre"
          },
          "paragraf": "Japon markası Suzuki'nin genç ve enerjik modeli Gixxer 250, dinamik tasarımı ve sağlam yapı kalitesi ile ön plana çıkar. 250cc motor, hızlı hızlanma ve tatmin edici bir üst hız sunar. Yol tutuşu ve fren performansı beklentileri karşılar, şehir içi ve şehirlerarası seyahatler için uygundur. Konforlu sürüş pozisyonu ve rahat koltuk, uzun süreli sürüşlerde bile rahatlığı korur. Dijital gösterge paneli, sürücülere gerekli tüm bilgileri temiz ve açık bir şekilde sunar. Suzuki Gixxer 250, hem estetik hem de performansı uygun bir fiyat aralığında sunarak, bu segmentteki rekabette iddialı bir konumda bulunuyor."
      },  
      {
          "num": "5",
          "url": `https://enonlar.com/${url}#bolum-5`,
          "name": "Benelli TNT 25",
          "image": "/images/motosiklet/benelli_tnt_25.png",
          "ozellikler": {
            "Benelli TNT 25 özellikleri": "",
              "Firma": "Benelli",
              "Tip": "Naked",
              "Motor Hacmi": "250 cc",
              "Sıfır Yüz": "8.0 s",
              "Max": "145 km/s",
              "Tüketim": "2.8 Litre/100 km",
              "Ağırlık": "159 kg",
              "Ülke": "İtalya",
              "Yakıt Kapasitesi": "17 Litre"
          },
          "paragraf": "İtalyan kökenli bir marka olan Benelli'nin kompakt modeli TNT 25, minimalist ve zarif tasarımı ile dikkat çeker. Motorun hızlanma performansı ve üst hızı, segmenti için tatmin edici. Yol tutuşu ve fren performansı, sürücülere güven verir. Konforlu sürüş pozisyonu ve rahat koltuk, günlük kullanım için uygundur. Süspansiyon sistemi, konfor ve performansı dengeleyerek, hem şehir içi hem de şehirlerarası seyahatler için uygun bir sürüş deneyimi sunar. Benelli TNT 25, estetik tasarımı ve günlük kullanıma uygun özellikleri ile bu segmentte dikkate değer bir seçenektir."
      },
      {
          "num": "4",
          "url": `https://enonlar.com/${url}#bolum-4`,
          "name": "KTM 250 Duke",
          "image": "/images/motosiklet/ktm_250_duke.jpg",
          "ozellikler": {
            "KTM 250 Duke özellikleri": "",
              "Firma": "KTM",
              "Tip": "Naked",
              "Motor Hacmi": "250 cc",
              "Sıfır Yüz": "8.0 s",
              "Max": "145 km/s",
              "Tüketim": "3.1 Litre/100 km",
              "Ağırlık": "161 kg",
              "Ülke": "Avusturya",
              "Yakıt Kapasitesi": "15 Litre"
          },
          "paragraf": "Avusturyalı motosiklet üreticisi KTM'nin agresif tasarımı ve yüksek performansı ile tanınan 250 Duke modeli, sürücülerin adrenalin dolu anlar yaşamasını sağlıyor. Sert ve sportif süspansiyon sistemi, keskin virajlarda bile mükemmel bir yol tutuşu sunuyor. Motor performansı, hızlanma ve üst hız bakımından segmentinin üstünde. Konfor, bu modelde biraz daha arka planda kalmış, fakat bu durum, sportif sürüş tutkunları için bir engel teşkil etmiyor. KTM 250 Duke, genç ve enerjik sürücüler için mükemmel bir seçenek olabilir."
      },
      {
          "num": "3",
          "url": `https://enonlar.com/${url}#bolum-3`,
          "name": "BMW G 310 R",
          "image": "/images/motosiklet/bmw_g310r.png",
          "ozellikler": {
              "BMW G 310 R özellikleri": "",
              "Firma": "BMW",
              "Tip": "Naked",
              "Motor Hacmi": "310 cc",
              "Sıfır Yüz": "7.9 s",
              "Max": "143 km/s",
              "Tüketim": "3.3 Litre/100 km",
              "Ağırlık": "158.5 kg",
              "Ülke": "Almanya",
              "Yakıt Kapasitesi": "11 Litre"
          },
          "paragraf": "Alman mühendisliği ve kalitesiyle üretilen BMW G 310 R, sade ve sofistike tasarımıyla dikkat çeker. Bu model, BMW'nin entry-level motosiklet segmentine girişini temsil eder ve markanın mühendislik mirasını bu segmente taşır. Motor performansı ve yol tutuşu, bu sınıf için oldukça iyi. Sürücüler, düşük ve orta devirlerde iyi bir tork hissiyatı alırken, yüksek devirlerde de tatminkar bir hızlanma elde ederler. Sürüş pozisyonu, günlük kullanıma uygun, rahat ve dik. BMW G 310 R, kalite ve performansı uygun fiyatla buluşturarak, yeni sürücüler için mükemmel bir seçenek sunuyor."
      },
      {
          "num": "2",
          "url": `https://enonlar.com/${url}#bolum-2`,
          "name": "Honda CB300R",
          "image": "/images/motosiklet/honda_cb300r.png",
          "ozellikler": {
            "Honda CB300R özellikleri": "",
              "Firma": "Honda",
              "Tip": "Naked",
              "Motor Hacmi": "286 cc",
              "Sıfır Yüz": "6.2 s",
              "Max": "145 km/s",
              "Tüketim": "3.3 Litre/100 km",
              "Ağırlık": "143 kg",
              "Ülke": "Japonya",
              "Yakıt Kapasitesi": "9.7 Litre"
          },
          "paragraf": "Japon üretici Honda'nın neo-sport kavramını temsil eden CB300R modeli, retro görünümü modern performans ile birleştiriyor. Yol tutuşu ve fren performansı, sınıf standartlarını karşılıyor. Motor, düşük ve orta devirlerde iyi bir tork sunuyor ve şehir içi kullanım için oldukça uygundur. Geniş ve rahat sele, uzun süreli sürüşlerde bile konfor sağlıyor. Honda CB300R, günlük kullanım ve hafta sonu kaçamakları için ideal bir motosiklet olabilir. Japon mühendisliği ve kalitesi, bu motosikletin fiyat/performans oranını oldukça cazip kılıyor."
      },
      {
          "num": "1",
          "url": `https://enonlar.com/${url}#bolum-1`,
          "name": "Yamaha MT-25",
          "image": "/images/motosiklet/yamaha_mt25.png",
          "ozellikler": {
            "Yamaha MT 25 özellikleri": "",
              "Firma": "Yamaha",
              "Tip": "Naked",
              "Motor Hacmi": "249 cc",
              "Sıfır Yüz": "8.0 s",
              "Max": "170 km/s",
              "Tüketim": "2.4 Litre/100 km",
              "Ağırlık": "165 kg",
              "Ülke": "Japonya",
              "Yakıt Kapasitesi": "14 Litre"
          },
          "paragraf": "Japon tasarımının ve mühendisliğinin bir harikası olan Yamaha MT-25, dinamik çizgileri ve agresif tasarımı ile dikkat çeker. MT-25, sürücüsüne şehir içi trafiğinde bile esneklik ve manevra kabiliyeti sunar. Yüksek devirlerde bile pürüzsüz ve dengeli bir performans sunan motoru, bu motosikleti hem yeni başlayanlar hem de deneyimli sürücüler için cazip kılar. Konforlu sürüş pozisyonu ve düşük yakıt tüketimi, MT-25'i günlük kullanım için ideal bir seçenek haline getirir. Genel olarak, Yamaha MT-25, fiyat/performans oranı ve sürüş deneyimi ile segmentinde lider bir konuma sahiptir."
      }
  ];

  const ana_resim = "/images/ana_gorseller/enonlar-en-iyi-10-250-cc-naked-motosiklet.png";
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