import Main from '@/components/Main';
import OtherContents from '@/components/OtherContents';
import Head from 'next/head';
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProvider';
import Details from '@/components/Details';
import json_list from '@/components/json/moviesAndSeriesJson';
import Ens_motosiklet from '@/components/mini_components/ens/ens_motosiklet';

export default function Eniyi250ccNakedMain() {
  const { nightMode } = useAppContext();

  const keywordsArray = ["en", "iyi", "250cc", "motosiklet", "naked"]; //burada türkçe karakter olacak mı bir fikrim yok
  const url = "en-iyi-10-250-cc-naked-motosiklet";
  const baslik = "En İyi 10 250 CC Naked Motosiklet";
  const metin = "250cc naked motosikletler, hafiflikleri, atik yapıları ve şehir içi kullanım kolaylıkları ile bilinirler. İster yeni başlayan bir sürücü olun, ister deneyimli bir motor tutkunu, bu segmentteki motosikletler, sade ve fonksiyonel tasarımları ile geniş bir kitleye hitap ediyor. Aşağıda, birbirinden estetik ve performanslı en iyi 10 250cc naked motosikleti detaylı özellikleri ve teknik analizler ışığında sıralayarak sizler için bir araya getiriyoruz. Her bir motosikletin tasarımından, motor performansına, kullanım kolaylığına kadar birçok detayı bulacaksınız. İyi okumalar!";
  const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
  
  const logo = "logo_url";

  const kategori = "motosiklet"; //türkce karakter olmasin
  const minAge = "18";
  const yazar = "I Will";
  const eklenmeTarihi = "2023-10-03T01:36:00+03:00";
  const degistirilmeTarihi = "2023-10-03T01:36:00+03:00";
  const addDate = "03.10.23";

  
  const summaryText = <p className='summary_text'>{metin}</p>;

  const ana_resim = "/images/motosiklet/husqvarna_svartpilen_250.jpg";

  const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, logo, eklenmeTarihi, degistirilmeTarihi};
  const jsonContentArray = [
    {
        "num": "10",
        "url": `https://enonlar.com/${url}#bolum-10`,
        "name": "Husqvarna Svartpilen 250",
        "image": `/images/motosiklet/husqvarna_svartpilen_250.png`,
        "firma": "Husqvarna",
        "tip": "Naked",
        "motorHacmi": "250",
        "sifirYuz": "9.0",
        "max": "130",
        "tuketim": "3.0",
        "agirlik": "154",
        "ulke": "İsveç",
        "yakitKapatisesi": "9.5",
        "paragraf": <p>İsveçli motosiklet üreticisi Husqvarna Svartpilen 250, modern ve minimalist bir tasarıma sahiptir. Sade hatları ve endüstriyel görünümü ile dikkat çeker. 250cc motoru, şehir içinde hızlı manevralar ve rahat bir sürüş deneyimi sunar. Hafif yapısı sayesinde, bu motosiklet yeni sürücüler için ideal bir seçenektir. Svartpilen, konforlu bir sürüş pozisyonu ve hassas yol tutuşu ile günlük sürüşler için uygun bir tercihtir.</p>
    },    
    {
        "num": "9",
        "url": `https://enonlar.com/${url}#bolum-9`,
        "name": "Bajaj Dominar 250",
        "image": `/images/motosiklet/bajaj_dominar_250d.png`,
        "firma": "Bajaj",
        "tip": "Naked",
        "motorHacmi": "250",
        "sifirYuz": "8.5",
        "max": "132",
        "tuketim": "3.5",
        "agirlik": "180",
        "ulke": "Hindistan",
        "yakitKapatisesi": "13",
        "paragraf": <p>Hindistan'ın önde gelen motosiklet üreticilerinden biri olan Bajaj Dominar 250D, uygun fiyatlı bir giriş seviyesi naked motosiklet arayanlar için mükemmel bir seçimdir. Güçlü ve verimli motoru, şehir içi trafikte hızlı manevralar yapmayı kolaylaştırır. Dominar'ın geniş lastikleri ve konforlu koltuk yapısı, günlük sürüşlerde ve hafta sonu gezilerinde hoş bir deneyim sunar. Tasarımı, modern ve agresif çizgileriyle genç sürücülerin beğenisini kazanır. Performans ve fiyat arasındaki dengesi ile Bajaj Dominar 250D, bütçe dostu bir naked motosiklet arayanlar için ideal bir tercihtir.</p>
    },
    {
        "num": "8",
        "url": `https://enonlar.com/${url}#bolum-8`,
        "name": "CFMoto 250NK",
        "image": `/images/motosiklet/cfmoto_250nk.png`,
        "firma": "CFMoto",
        "tip": "Naked",
        "motorHacmi": "250",
        "sifirYuz": "8.0",
        "max": "128",
        "tuketim": "2.8",
        "agirlik": "151",
        "ulke": "Çin",
        "yakitKapatisesi": "12.5",
        "paragraf": <p>Çin menşeli CFMoto 250NK, modern ve aerodinamik tasarımı ile dikkat çeker. 250cc motoru, tatminkar bir performans ve ekonomik yakıt tüketimi sunar. Hafif ve kompakt yapısı, şehir içi trafiğinde kolay manevra imkanı sağlar. Geniş ve konforlu koltuk yapısı, uzun süreli sürüşlerde bile rahatlığı korur. Teknolojik özellikleri ve dijital gösterge paneli, sürücülere kullanışlı bilgiler sunar. CFMoto 250NK, uygun fiyatlı ve güvenilir bir naked motosiklet arayanlar için ideal bir seçenektir.</p>
    },    
    {
        "num": "7",
        "url": `https://enonlar.com/${url}#bolum-7`,
        "name": "Kawasaki Z250",
        "image": `/images/motosiklet/kawasaki_z250.png`,
        "firma": "Kawasaki",
        "tip": "Naked",
        "motorHacmi": "250",
        "sifirYuz": "7.0",
        "max": "153",
        "tuketim": "3.5",
        "agirlik": "168",
        "ulke": "Japonya",
        "yakitKapatisesi": "17",
        "paragraf": <p>Japon yapımı Kawasaki Z250, keskin hatları ve agresif tasarımı ile karakteristik bir naked motosiklet estetiği sunar. 250cc'lik motoru, hızlı hızlanma ve tatmin edici bir üst hız sunar. Yol tutuşu ve fren performansı, sürücülere güven verir. Konforlu sürüş pozisyonu ve geniş koltuğu, şehir içi ve şehirlerarası seyahatler için uygundur. Yüksek kaliteli süspansiyon sistemi, hem konforu hem de sportif sürüş dinamiklerini dengeleyen bir performans sunar. Kawasaki Z250, hem yeni başlayanlar hem de deneyimli sürücüler için uygun, estetik ve performansı bir arada sunan bir motosiklettir.</p>
    },    
    {
        "num": "6",
        "url": `https://enonlar.com/${url}#bolum-6`,
        "name": "Suzuki Gixxer 250",
        "image": `/images/motosiklet/suzuki_gixxer_250.jpg`,
        "firma": "Suzuki",
        "tip": "Naked",
        "motorHacmi": "250",
        "sifirYuz": "8.5",
        "max": "154",
        "tuketim": "3.3",
        "agirlik": "156",
        "ulke": "Japonya",
        "yakitKapatisesi": "12",
        "paragraf": <p>Japon markası Suzuki'nin genç ve enerjik modeli Gixxer 250, dinamik tasarımı ve sağlam yapı kalitesi ile ön plana çıkar. 250cc motor, hızlı hızlanma ve tatmin edici bir üst hız sunar. Yol tutuşu ve fren performansı beklentileri karşılar, şehir içi ve şehirlerarası seyahatler için uygundur. Konforlu sürüş pozisyonu ve rahat koltuk, uzun süreli sürüşlerde bile rahatlığı korur. Dijital gösterge paneli, sürücülere gerekli tüm bilgileri temiz ve açık bir şekilde sunar. Suzuki Gixxer 250, hem estetik hem de performansı uygun bir fiyat aralığında sunarak, bu segmentteki rekabette iddialı bir konumda bulunuyor.</p>
    },    
    {
        "num": "5",
        "url": `https://enonlar.com/${url}#bolum-5`,
        "name": "Benelli TNT 25",
        "image": `/images/motosiklet/benelli_tnt_25.png`,
        "firma": "Benelli",
        "tip": "Naked",
        "motorHacmi": "250",
        "sifirYuz": "8.0",
        "max": "145",
        "tuketim": "2.8",
        "agirlik": "159",
        "ulke": "İtalya",
        "yakitKapatisesi": "17",
        "paragraf": <p>İtalyan kökenli bir marka olan Benelli'nin kompakt modeli TNT 25, minimalist ve zarif tasarımı ile dikkat çeker. Motorun hızlanma performansı ve üst hızı, segmenti için tatmin edici. Yol tutuşu ve fren performansı, sürücülere güven verir. Konforlu sürüş pozisyonu ve rahat koltuk, günlük kullanım için uygundur. Süspansiyon sistemi, konfor ve performansı dengeleyerek, hem şehir içi hem de şehirlerarası seyahatler için uygun bir sürüş deneyimi sunar. Benelli TNT 25, estetik tasarımı ve günlük kullanıma uygun özellikleri ile bu segmentte dikkate değer bir seçenektir.</p>
    },    
    {
        "num": "4",
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name": "KTM 250 Duke",
        "image": `/images/motosiklet/ktm_250_duke.jpg`,
        "firma": "KTM",
        "tip": "Naked",
        "motorHacmi": "250",
        "sifirYuz": "8.0",
        "max": "145",
        "tuketim": "3.1",
        "agirlik": "161",
        "ulke": "Avusturya",
        "yakitKapatisesi": "15",
        "paragraf": <p>Avusturyalı motosiklet üreticisi KTM'nin agresif tasarımı ve yüksek performansı ile tanınan 250 Duke modeli, sürücülerin adrenalin dolu anlar yaşamasını sağlıyor. Sert ve sportif süspansiyon sistemi, keskin virajlarda bile mükemmel bir yol tutuşu sunuyor. Motor performansı, hızlanma ve üst hız bakımından segmentinin üstünde. Konfor, bu modelde biraz daha arka planda kalmış, fakat bu durum, sportif sürüş tutkunları için bir engel teşkil etmiyor. KTM 250 Duke, genç ve enerjik sürücüler için mükemmel bir seçenek olabilir.</p>
    },    
    {
        "num": "3",
        "url": `https://enonlar.com/${url}#bolum-3`,
        "name": "BMW G 310 R",
        "image": `/images/motosiklet/bmw_g310r.png`,
        "firma": "BMW",
        "tip": "Naked",
        "motorHacmi": "310",
        "sifirYuz": "7.9",
        "max": "143",
        "tuketim": "3.3",
        "agirlik": "158.5",
        "ulke": "Almanya",
        "yakitKapatisesi": "11",
        "paragraf": <p>Alman mühendisliği ve kalitesiyle üretilen BMW G 310 R, sade ve sofistike tasarımıyla dikkat çeker. Bu model, BMW'nin entry-level motosiklet segmentine girişini temsil eder ve markanın mühendislik mirasını bu segmente taşır. Motor performansı ve yol tutuşu, bu sınıf için oldukça iyi. Sürücüler, düşük ve orta devirlerde iyi bir tork hissiyatı alırken, yüksek devirlerde de tatminkar bir hızlanma elde ederler. Sürüş pozisyonu, günlük kullanıma uygun, rahat ve dik. BMW G 310 R, kalite ve performansı uygun fiyatla buluşturarak, yeni sürücüler için mükemmel bir seçenek sunuyor.</p>
    },    
    {
        "num": "2",
        "url": `https://enonlar.com/${url}#bolum-2`,
        "name": "Honda CB300R",
        "image": `/images/motosiklet/honda_cb300r.png`,
        "firma": "Honda",
        "tip": "Naked",
        "motorHacmi": "286",
        "sifirYuz": "6.2",
        "max": "145",
        "tuketim": "3.3",
        "agirlik": "143",
        "ulke": "Japonya",
        "yakitKapatisesi": "9.7",
        "paragraf": <p>Japon üretici Honda'nın neo-sport kavramını temsil eden CB300R modeli, retro görünümü modern performans ile birleştiriyor. Yol tutuşu ve fren performansı, sınıf standartlarını karşılıyor. Motor, düşük ve orta devirlerde iyi bir tork sunuyor ve şehir içi kullanım için oldukça uygundur. Geniş ve rahat sele, uzun süreli sürüşlerde bile konfor sağlıyor. Honda CB300R, günlük kullanım ve hafta sonu kaçamakları için ideal bir motosiklet olabilir. Japon mühendisliği ve kalitesi, bu motosikletin fiyat/performans oranını oldukça cazip kılıyor.</p>
    },    
    {
        "num": "1",
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name": "Yamaha MT-25",
        "image": `/images/motosiklet/yamaha_mt25.png`,
        "firma": "Yamaha",
        "tip": "Naked",
        "motorHacmi": "249",
        "sifirYuz": "8",
        "max": "170",
        "tuketim": "2.4",
        "agirlik": "165",
        "ulke": "Japonya",
        "yakitKapatisesi": "14",
        "paragraf": <p>Japon tasarımının ve mühendisliğinin bir harikası olan Yamaha MT-25, dinamik çizgileri ve agresif tasarımı ile dikkat çeker. MT-25, sürücüsüne şehir içi trafiğinde bile esneklik ve manevra kabiliyeti sunar. Yüksek devirlerde bile pürüzsüz ve dengeli bir performans sunan motoru, bu motosikleti hem yeni başlayanlar hem de deneyimli sürücüler için cazip kılar. Konforlu sürüş pozisyonu ve düşük yakıt tüketimi, MT-25'i günlük kullanım için ideal bir seçenek haline getirir. Genel olarak, Yamaha MT-25, fiyat/performans oranı ve sürüş deneyimi ile segmentinde lider bir konuma sahiptir.</p>
    }    
  ];
  const jsonList = json_list(articleInfos,
  "Motosiklet", 
  summaryText,
  jsonContentArray
  )

  return (
    
    <Main>
      
        <Head>
          <title>{baslik}</title>
          <meta name="description" content={description}/>
          <meta name="keywords" content={keywordsArray.join(", ")}/>

          <meta property="og:type" content="article"/>
          <meta property="og:title" content={baslik}/>
          <meta property="og:description" content={description} key="desc"/>
          <meta
          property="og:image"
          content={ana_resim}
          />
          <meta property="og:url" content={"https://enonlar.com/"+url}/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content={baslik}/>
          <meta name="twitter:description" content={description}/>
          <meta name="twitter:image" content={ana_resim}/>
          
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: jsonList.html}}
            key="article-jsonld"
          />
        </Head>

        <article id='main-article'>
          
          <h1>{baslik}</h1>

          <Details nightMode={nightMode} addDate={addDate} readTimeSpan={jsonList.readTimeSpan}/>
          
          <hr className={['top_split', nightMode ? 'top-split-night' : 'top-split-normal'].join(' ')}/>

          {(summaryText)}

          <hr className='split'/>

          {<Ens_motosiklet jsonContentArray={jsonContentArray}/>}
        
        </article>
        
        <h2 className='other-h2'>Diğer İçerikler</h2>
        <OtherContents />
        
        
    </Main>
  )
}