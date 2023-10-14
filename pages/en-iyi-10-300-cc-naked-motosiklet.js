import Main from '@/components/Main';
import OtherContents from '@/components/OtherContents';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';
import Details from '@/components/Details';
import json_list from '@/components/json/moviesAndSeriesJson';
import Ens_motosiklet from '@/components/mini_components/ens/ens_motosiklet';
import HeadHtml from '@/components/HeadHtml';

export default function Eniyi300ccNakedMain() {
  const { nightMode } = useAppContext();

  const keywordsArray = ["en", "iyi", "300cc", "motosiklet", "naked"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-iyi-10-300-cc-naked-motosiklet";
  const baslik = "En İyi 10 300 CC Naked Motosiklet";
  const metin = "300cc motor hacmi, genellikle başlangıç ve orta seviye sürücüler için idealdir, çünkü hem şehir içi hem de uzun mesafeli sürüşler için yeterli güç sunar. Naked motosikletlerin minimalist tasarımı, daha düşük ağırlık ve rahat sürüş pozisyonu, bu tarz motosikletleri hem günlük kullanım hem de maceralı sürüşler için cazip kılar. Listemizdeki zarif tasarımlı ve performans odaklı motosikletler, bu segmentin ne kadar çekici ve heyecan verici olduğunu gösteriyor. Hadi listeyi inceleyelim!";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;

  const okunmaSuresi = "5";
  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-03T02:32:00+03:00";
  const degistirilmeTarihi = "2023-10-03T02:32:00+03:00";
  const addDate = "03.10.23";

  
  const summaryText = <p className='summary_text'>{metin}</p>;

  const jsonContentArray = [
    {
        "num": "10",
        "url": `https://enonlar.com/${url}#bolum-10`,
        "name": "CFMoto 300NK",
        "image": `/images/motosiklet/cfmoto_300nk.png`,
        "firma": "CFMoto",
        "tip": "Naked",
        "motorHacmi": "300",
        "sifirYuz": "3.2",
        "max": "150",
        "tuketim": "3.8",
        "agirlik": "151",
        "ulke": "Çin",
        "yakitKapasitesi": "12.5",
        "paragraf": <p>Çinli üretici CFMoto'nun 300NK modeli, uygun fiyatlı ve stil sahibi bir naked motosiklet arayanlar için ideal bir seçenek. Sade ve modern bir tasarım anlayışını benimsemiş. Dik sürüş pozisyonu ve hafif yapısı sayesinde, şehir içinde rahat bir sürüş deneyimi sunuyor. 300NK, performans ve konfor arasında iyi bir denge kurarak, yeni başlayanlar için güvenilir ve ulaşılabilir bir tercih oluşturuyor.</p>
    },        
    {
        "num": "9",
        "url": `https://enonlar.com/${url}#bolum-9`,
        "name": "Husqvarna Vitpilen 401",
        "image": `/images/motosiklet/husqvarna_vitpilen_401.png`,
        "firma": "Husqvarna",
        "tip": "Naked",
        "motorHacmi": "373",
        "sifirYuz": "5.6",
        "max": "145",
        "tuketim": "3.5",
        "agirlik": "157",
        "ulke": "İsveç",
        "yakitKapasitesi": "9.5",
        "paragraf": <p>İsveç kökenli Husqvarna'nın Vitpilen 401 modeli, minimalist ve modern tasarımı ile dikkat çeker. Hafif ve kompakt yapıda olan bu motosiklet, şehir içi kullanım için ideal. Güçlü motoru ve dikkat çekici hızlanması, sürüş deneyimini eğlenceli hale getiriyor. Gidon ve gaz tepkileri, sürücüyü tatmin edecek düzeyde. Sürüş pozisyonu sportif ve yol tutuşu güven verici. Fren performansı ve süspansiyon sistemi, sınıfının beklentilerini karşılıyor. Genel olarak, Vitpilen 401, şık görünümü ve performansı ile naked sınıfında farklı bir seçenek sunuyor.</p>
    },
    {
        "num": "8",
        "url": `https://enonlar.com/${url}#bolum-8`,
        "name": "TVS Apache RTR 310",
        "image": `/images/motosiklet/tvs_apache_rtr_310.png`,
        "firma": "TVS",
        "tip": "Naked",
        "motorHacmi": "313",
        "sifirYuz": "6.9",
        "max": "145",
        "tuketim": "3.3",
        "agirlik": "169.5",
        "ulke": "Hindistan",
        "yakitKapasitesi": "11",
        "paragraf": <p>Hindistan'ın önde gelen motosiklet üreticilerinden TVS'nin Apache RTR 310 modeli, spor tarzı ve ergonomik tasarımı ile genç sürücülerin ilgisini çekiyor. Güçlü motoru ve dengeli ağırlık dağılımı sayesinde, şehir içinde ve şehir dışında rahat bir sürüş deneyimi sunuyor. Motorun düşük ve yüksek devir performansı tatmin edici. Fren sistemi ve süspansiyon, beklenen düzeyde konfor ve kontrol sunuyor. Gidonun rahat ergonomisi ve gaz tepkileri, sürüş deneyimini daha da keyifli hale getiriyor. TVS Apache RTR 310, uygun fiyatlı ve performans odaklı bir naked motosiklet arayanlar için cazip bir seçenek olabilir.</p>
    },   
    {
        "num": "7",
        "url": `https://enonlar.com/${url}#bolum-7`,
        "name": "Kawasaki Z400",
        "image": `/images/motosiklet/kawasaki_z400.jpg`,
        "firma": "Kawasaki",
        "tip": "Naked",
        "motorHacmi": "399",
        "sifirYuz": "4.7",
        "max": "175",
        "tuketim": "4.1",
        "agirlik": "166",
        "ulke": "Japonya",
        "yakitKapasitesi": "14",
        "paragraf": <p>Japonya'nın prestijli motosiklet üreticilerinden Kawasaki'nin Z400 modeli, hafiflik ve kompakt yapıyı performansla birleştiriyor. Düşük ağırlık merkezi ve kompakt motor tasarımı, motorun hızlı ve tepkisel olmasını sağlıyor. Z400, özellikle düşük ve orta devirlerde güçlü bir tork sunuyor. Sert süspansiyon sistemi, motorun yol tutuşunu ve sürüş dinamiklerini iyileştiriyor. Gidon ve gaz tepkileri son derece hassas, bu da motoru hızlı ve çevik kılıyor. Kullanıcı dostu ergonomisi ve konforlu sürüş pozisyonu, Kawasaki Z400'ü uzun sürüşler için uygun hale getiriyor. Fren performansı ve ABS sistemi, güvenli bir sürüş deneyimi sağlıyor.</p>
    }, 
    {
        "num": "6",
        "url": `https://enonlar.com/${url}#bolum-6`,
        "name": "Benelli TNT 300",
        "image": `/images/motosiklet/benelli-tnt-300.png`,
        "firma": "Benelli",
        "tip": "Naked",
        "motorHacmi": "300",
        "sifirYuz": "8.4",
        "max": "154",
        "tuketim": "4.5",
        "agirlik": "185",
        "ulke": "İtalyan",
        "yakitKapasitesi": "16",
        "paragraf": <p>İtalyan tasarımı ve Çin mühendisliği ile harmanlanmış Benelli TNT 300, estetik ve performansı uygun fiyatla sunuyor. 300cc hacmindeki motor, düşük ve orta devirlerde tatminkar tork sağlıyor. Ergonomik yapısı ve geniş koltuğu, konforlu bir sürüş deneyimi sunarken, hassas süspansiyon sistemi sayesinde yol tutuşu ve sürüş dinamikleri de oldukça başarılı. Gidon tepkisi ve gaz kontrolü, sürücüye tam kontrol hissi veriyor. Sade ve zarif tasarımı, TNT 300'ü şehir içi sürüşler için ideal kılıyor. Fren performansı ve ABS sistemi, sürücüye güvenli bir sürüş deneyimi sunuyor.</p>
    },   
    {
        "num": "5",
        "url": `https://enonlar.com/${url}#bolum-5`,
        "name": "Honda CB300R",
        "image": `/images/motosiklet/honda_cb300r.png`,
        "firma": "Honda",
        "tip": "Naked",
        "motorHacmi": "300",
        "sifirYuz": "7.8",
        "max": "145",
        "tuketim": "3.3",
        "agirlik": "143",
        "ulke": "Japonya",
        "yakitKapasitesi": "10",
        "paragraf": <p>Japon mühendisliği ile üretilen Honda CB300R, sofistike tasarımı ve mükemmel işçiliği ile dikkat çeker. Yalın ve modern tasarımı, genç ve enerjik sürücülerin beklentilerini karşılar. Motor performansı, düşük ve orta devirlerde güçlü, yüksek devirlerde ise canlıdır. Konforlu sürüş pozisyonu, şehir içi ve uzun yol sürüşlerinde sürücüyü yormaz. Yol tutuşu ve süspansiyon sistemi, Honda'nın kalitesini gösteriyor. Gaz tepkisi ve fren performansı, sürücüye tam kontrol sağlıyor. CB300R, dayanıklılığı ve düşük yakıt tüketimi ile de uzun vadede ekonomik bir seçenek sunar.</p>
    },   
    {
        "num": "4",
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name": "BMW G 310 R",
        "image": `/images/motosiklet/bmw_g310r.png`,
        "firma": "BMW",
        "tip": "Naked",
        "motorHacmi": "313",
        "sifirYuz": "7.6",
        "max": "143",
        "tuketim": "3.3",
        "agirlik": "158.5",
        "ulke": "Almanya",
        "yakitKapasitesi": "11",
        "paragraf": <p>Alman mühendisliği ile hazırlanan BMW G 310 R, minimalist ve şık tasarımı ile dikkat çeker. BMW'nin kalite standartlarını yansıtan bu model, günlük kullanımdan uzun yol sürüşlerine kadar geniş bir kullanım yelpazesi sunar. Motoru, düşük devirlerde dahi tatminkar bir tork sunar. Süspansiyon sistemi, rahat bir sürüş deneyimi sağlarken, frenler oldukça güçlü ve hassastır. Gidon ve gaz tepkisi, sürücüye mükemmel bir kontrol imkanı sunar. BMW G 310 R, uzun ömürlü ve dayanıklı bir yapıya sahiptir, bu da onu uzun vadede güvenilir ve ekonomik bir seçenek haline getirir.</p>
    },   
    {
        "num": "3",
        "url": `https://enonlar.com/${url}#bolum-3`,
        "name": "KTM Duke 390",
        "image": `/images/motosiklet/ktm_duke_390.png`,
        "firma": "KTM",
        "tip": "Naked",
        "motorHacmi": "373",
        "sifirYuz": "5.6",
        "max": "167",
        "tuketim": "3.5",
        "agirlik": "149",
        "ulke": "Avusturya",
        "yakitKapasitesi": "13.4",
        "paragraf": <p>Avusturyalı motosiklet üreticisi KTM'nin başyapıtı Duke 390, radikal tasarımı ve sıra dışı performansı ile pazardaki diğer naked'lardan ayrılıyor. 390cc motor hacmi, sürücüye her gaz açışında etkileyici bir güç ve tork sunar. Sert süspansiyonlar, mükemmel yol tutuşu sağlar ama bir o kadar da konforlu bir sürüş deneyimi sunar. Gaz tepkimesi ve fren performansı sınıfının en iyilerinden. Sürücü pozisyonu, hem şehir içi hem de otoyol sürüşlerinde ergonomik ve rahat. KTM Duke 390, genç ve enerjik sürücüler için mükemmel bir seçimdir.</p>
    },  
    {
      "num": "2",
      "url": "https://enonlar.com/Kawasaki-Z300#bolum-11",
      "name": "Kawasaki Z300",
      "image": "/images/motosiklet/kawasaki_z300.png",
      "firma": "Kawasaki",
      "tip": "Naked",
      "motorHacmi": "300",
      "sifirYuz": "7.5",
      "max": "170",
      "tuketim": "3.5",
      "agirlik": "168",
      "ulke": "Japonya",
      "yakitKapasitesi": "17",
      "paragraf": <p>Japonya'nın köklü motosiklet üreticilerinden Kawasaki'nin Z serisinin bir üyesi olan Z300, hafifliği ve çevikliği ile dikkat çeker. Günlük sürüşler ve şehir içi kullanım için oldukça uygun olan Z300, sürücüsüne konforlu bir sürüş deneyimi sunar. Motorun çevikliği ve rahat kullanımı, yeni başlayanlar için bile dostane bir seçenek haline getirir. Ayrıca, 17 litrelik yakıt kapasitesi sayesinde uzun yolculuklar için de oldukça uygundur. Yol tutuşu ve fren performansı, Kawasaki'nin bu modelinde de oldukça tatminkardır.</p>
    },
    {
        "num": "1",
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name": "Yamaha MT-03",
        "image": `/images/motosiklet/yamaha_mt_03.png`,
        "firma": "Yamaha",
        "tip": "Naked",
        "motorHacmi": "321",
        "sifirYuz": "5.3",
        "max": "180",
        "tuketim": "3.4",
        "agirlik": "168",
        "ulke": "Japonya",
        "yakitKapasitesi": "15",
        "paragraf": <p>Japon üretici Yamaha'nın MT-03 modeli, sportif ve agresif tasarımı ile dikkat çeker. 321cc motor hacmi, tatmin edici bir performans ve dinamik bir sürüş deneyimi sunar. Yol tutuşu ve süspansiyon sistemi, sportif sürüşleri destekler ve konforu korur. Gaz tepkimesi hızlı, frenler güçlü ve hassas. MT-03, hem estetik hem de performans açısından, bu segmentteki sürücüler için etkileyici bir seçenektir.</p>
    }   
  ];

  const ana_resim = jsonContentArray[0].image;
  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};
  
  const jsonList = json_list(articleInfos,
  "Motosiklet", 
  summaryText,
  jsonContentArray
  )

  return (
    
    <Main>
      
      <HeadHtml 
        baslik={baslik}
        description={description}
        keywords={keywordsArray.join(", ")}
        ana_resim={ana_resim}
        url={url}
        jsonListHtml={jsonList.html}
        />

        <article id='main-article'>
          
          <h1>{baslik}</h1>

          <Details nightMode={nightMode} addDate={addDate} readTimeSpan={okunmaSuresi ? okunmaSuresi : jsonList.readTimeSpan}/>
          
          <hr className={['top_split', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>

          {(summaryText)}

          <hr className='split'/>

          {<Ens_motosiklet jsonContentArray={jsonContentArray}/>}
        
        </article>
        
        <OtherContents />
        
        
    </Main>
  )
}