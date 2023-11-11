import { useAppContext } from '@/context/ContextProvider';
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import Ens_motosiklet from '@/components/mini_components/ens/ens_motosiklet';
import ClassicArticle from '@/components/article_types/ClassicArticle';

export async function getStaticProps() {
    const keywordsArray = ["en", "iyi", "125cc", "motosiklet", "naked"]; //burada türkçe karakter olacak mı bir fikrim yok
    const url = "en-iyi-10-125-cc-naked-motosiklet";
    const baslik = "En İyi 10 125 CC Naked Motosiklet";
    const metin = "125cc'lik motosikletler, özellikle yeni sürücüler ve gençler için cazip bir seçenek sunar. Hem ekonomik hem de çevik olan bu motosikletler, sürücülerine trafikte kolay manevra kabiliyeti ve sürüş esnekliği sunar. Naked tasarımı, bu kategoriyi daha da çekici kılar; minimal karoseri ve sade tasarım, motosikletin hafifliğini ve atikliğini vurgular. Naked 125cc motosikletler, şehir içi trafikte mükemmel performans sergilerken, aynı zamanda sürücülerine rüzgarla bütünleşme ve doğal bir sürüş deneyimi sunar. Bu motosikletler, genç sürücülerin yanı sıra kısıtlı bir bütçesi olan yetişkinler için de idealdir. Bu makalede, bu kategorideki en popüler 10 modeli derinlemesine inceleyeceğiz. Hangi modelin sizin için en uygun olduğunu belirlemek ve 125cc naked motosikletlerin sunduğu benzersiz deneyimi daha iyi anlamak için okumaya devam edin!";
    const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;

    const okunmaSuresi = "5";
    const kategori = "motosiklet"; //türkce karakter olmasin
    const minAge = "18";
    const yazar = "I Will";
    const eklenmeTarihi = "2023-10-05T01:13:00+03:00";
    const degistirilmeTarihi = "2023-10-05T01:13:00+03:00";
    const addDate = "05.10.23";

  const jsonContentArray = [
    {
        "num": "10",
        "url": `https://enonlar.com/${url}#bolum-10`,
        "name": "Lexmoto LXR 125 SE",
        "image": `/images/motosiklet/lexmoto_ls_n_125.png`,
        "firma": "Lexmoto",
        "tip": "Naked",
        "motorHacmi": "125",
        "sifirYuz": "13.8",
        "max": "105",
        "tuketim": "2.9",
        "agirlik": "167",
        "ulke": "Çin",
        "yakitKapasitesi": "13.5",
        "paragraf": "Çinli motosiklet üreticisi Lexmoto'nun LXR 125 SE modeli, 125cc naked sınıfına uygun fiyatlı bir giriş sağlıyor. Modern ve sportif tasarımı, LED farlar ve dijital gösterge paneli gibi özellikleri ile genç sürücülerin ilgisini çekiyor. 125cc motoru ile şehir içi kullanım için yeterli performans ve yakıt verimliliği sunuyor. Ancak, uzun yolculuklar ve yüksek hızlar için daha fazla güç ve torka ihtiyaç duyulabileceğini belirtmek gerekiyor. Fren performansı ve süspansiyon sistemi bu fiyat aralığı için tatminkar. Lexmoto LXR 125 SE, bütçesi kısıtlı olanlar için iyi bir seçenek olabilir."
    },
    {
        "num": "9",
        "url": `https://enonlar.com/${url}#bolum-9`,
        "name": "Keeway RKF 125",
        "image": `/images/motosiklet/keeway_rkf_125.jpg`,
        "firma": "Keeway",
        "tip": "Naked",
        "motorHacmi": "125",
        "sifirYuz": "13.0",
        "max": "100",
        "tuketim": "2.8",
        "agirlik": "124",
        "ulke": "Çin",
        "yakitKapasitesi": "10",
        "paragraf": "Çinli motosiklet üreticisi Keeway, RKF 125 ile genç ve enerjik sürücülerin beklentilerini karşılamayı amaçlıyor. Hafif, çevik ve stil sahibi bu motosiklet, 125cc motor hacmi ve 13.0 saniyede 0-100 km/h hızlanma kapasitesi ile şehir içinde çevik manevralar ve hızlı geçişler için uygundur. RKF 125, modern ve agresif tasarımı ile dikkat çekerken, LED aydınlatma sistemi ve dijital gösterge paneli gibi özelliklerle genç sürücüler için cazip hale gelir. Yumuşak süspansiyon sistemi ve rahat oturma pozisyonu, bu motosikleti günlük kullanım için uygun kılar. Yakıt verimliliği ve uygun fiyatı sayesinde, RKF 125 ekonomik bir seçenek olarak öne çıkar."
    },  
    {
        "num": "8",
        "url": `https://enonlar.com/${url}#bolum-8`,
        "name": "Husqvarna Svartpilen 125",
        "image": `/images/motosiklet/husqvarna_svartpilen_125.png`,
        "firma": "Husqvarna",
        "tip": "Naked",
        "motorHacmi": "125",
        "sifirYuz": "14.9",
        "max": "120",
        "tuketim": "2.5",
        "agirlik": "146",
        "ulke": "İsveç",
        "yakitKapasitesi": "9.5",
        "paragraf": "İsveçli motosiklet üreticisi Husqvarna, Svartpilen 125 ile minimalist ve modern bir tasarımı uygun fiyatlı bir pakette sunuyor. Düşük ağırlığı ve kompakt yapısı sayesinde, Svartpilen 125 şehir içi trafiğinde kolay manevra yapabilme ve park kolaylığı sunar. 125cc motoru, yeni sürücüler için yeterli güç sağlarken, yakıt verimliliği ve düşük işletme maliyetleri ile de dikkat çeker. Motosiklet, ergonomik oturma pozisyonu ve geniş gidonu sayesinde rahat bir sürüş deneyimi sunar. Husqvarna Svartpilen 125, estetik tasarımı ve günlük kullanım kolaylığı ile genç ve enerjik sürücüler için ideal bir seçenektir."
    },  
    {
        "num": "7",
        "url": `https://enonlar.com/${url}#bolum-7`,
        "name": "Kawasaki Z125",
        "image": `/images/motosiklet/kawasaki_z125.png`,
        "firma": "Kawasaki",
        "tip": "Naked",
        "motorHacmi": "125",
        "sifirYuz": "9.7",
        "max": "105",
        "tuketim": "2.2",
        "agirlik": "146",
        "ulke": "Japonya",
        "yakitKapasitesi": "11",
        "paragraf": "Japon motosiklet devi Kawasaki'nin Z serisinin en küçük üyesi olan Z125, markanın agresif tasarım dilini ve üst düzey mühendislik kabiliyetlerini taşıyor. Hafif, kompakt ve manevra kabiliyeti yüksek olan Z125, özellikle şehir içi kullanım için mükemmel bir seçenek. 125cc'lik motoru, giriş seviyesi sürücüler için yeterli güç ve hız sunarken, yakıt verimliliği sayesinde cüzdan dostu bir operasyon maliyeti sağlıyor. Z125, sert ve sportif süspansiyon sistemi ile dinamik bir sürüş deneyimi sunuyor. Genel olarak, Kawasaki Z125, şehir içi hareketliliği, sportif tasarımı ve Kawasaki kalitesini bir araya getirerek 125cc segmentinde dikkat çekici bir seçenek haline geliyor."
    },  
    {
        "num": "6",
        "url": `https://enonlar.com/${url}#bolum-6`,
        "name": "Benelli TNT 125",
        "image": `/images/motosiklet/benelli_tnt_125.png`,
        "firma": "Benelli",
        "tip": "Naked",
        "motorHacmi": "125",
        "sifirYuz": "11.5",
        "max": "110",
        "tuketim": "2.5",
        "agirlik": "137",
        "ulke": "İtalya",
        "yakitKapasitesi": "7.2",
        "paragraf": "İtalyan motosiklet üreticisi Benelli'nin TNT 125 modeli, sade ve etkileyici tasarımı ile dikkat çeker. Küçük motor hacmine rağmen, TNT 125 dinamik ve eğlenceli bir sürüş deneyimi sunar. Hafifliği ve kompakt yapısı sayesinde, şehir içindeki hareketlilik ve manevra kabiliyeti oldukça yüksektir. Özellikle genç ve giriş seviyesi sürücüler için ideal bir seçenek olan TNT 125, alçak oturma pozisyonu ve konforlu koltuk yapısı sayesinde uzun süreli sürüşlerde bile rahatlık sunar. Performans anlamında beklentileri karşılayan TNT 125, Benelli kalitesini uygun fiyat etiketi ile birleştirerek 125cc naked segmentinde güçlü bir adaydır."
    },  
    {
        "num": "5",
        "url": `https://enonlar.com/${url}#bolum-5`,
        "name": "Aprilia Tuono 125",
        "image": `/images/motosiklet/aprilia_tuono_125.png`,
        "firma": "Aprilia",
        "tip": "Naked",
        "motorHacmi": "125",
        "sifirYuz": "15.0",
        "max": "120",
        "tuketim": "2.4",
        "agirlik": "144",
        "ulke": "İtalya",
        "yakitKapasitesi": "14.5",
        "paragraf": "İtalyan üretici Aprilia'nın Tuono 125 modeli, sportif ve agresif bir tasarımı kompakt bir yapıda sunar. Motorun 125cc hacminde, sürücülerine sportif bir performans ve dinamik bir sürüş deneyimi yaşatır. Aynı zamanda, motorun fren ve süspansiyon sistemleri de oldukça başarılıdır. Aprilia Tuono 125, genç ve enerjik sürücüler için mükemmel bir seçenektir. Özellikle şehir içi kullanımlarda, hafif ve çevik yapısı sayesinde, sürücülerine büyük bir avantaj sunar. Ayrıca, motorun dijital göstergesi ve modern elektronik özellikleri, sürücülerine konforlu ve güvenli bir sürüş deneyimi sunar."
    },
    {
        "num": "4",
        "url": `https://enonlar.com/${url}#bolum-4`,
        "name": "Suzuki GSX-S125",
        "image": `/images/motosiklet/suzuki_gsx_s125.png`,
        "firma": "Suzuki",
        "tip": "Naked",
        "motorHacmi": "125",
        "sifirYuz": "13.8",
        "max": "122",
        "tuketim": "2.3",
        "agirlik": "133",
        "ulke": "Japonya",
        "yakitKapasitesi": "11",
        "paragraf": "Japonya'nın köklü motosiklet üreticilerinden Suzuki'nin GSX-S125 modeli, hafifliği ve çevikliği ile dikkat çeker. Şehir içi trafiğinde manevra kabiliyeti yüksek olan bu model, genç sürücüler için ideal bir seçenektir. Yüksek verimli ve yakıt tasarruflu motoru sayesinde uzun süreli kullanımlarda bile sürücüsüne ekonomik bir sürüş deneyimi sunar. Aynı zamanda, Suzuki'nin güvenilirliği ve dayanıklılığı GSX-S125'i uzun vadede akıllı bir yatırım haline getirir. Fren ve süspansiyon sistemleri başarılı bir performans sergilerken, kompakt boyutu ve hafifliği sayesinde şehir içinde rahat bir kullanım imkanı tanır."
    },
    {
        "num": "3",
        "url": `https://enonlar.com/${url}#bolum-3`,
        "name": "Honda CB125R",
        "image": `/images/motosiklet/honda_cb125r.png`,
        "firma": "Honda",
        "tip": "Naked",
        "motorHacmi": "125",
        "sifirYuz": "13.5",
        "max": "105",
        "tuketim": "2.1",
        "agirlik": "126",
        "ulke": "Japonya",
        "yakitKapasitesi": "10.1",
        "paragraf": "Japonya'nın prestijli motosiklet üreticilerinden Honda'nın CB125R modeli, modern tasarımı ve sağlam yapı kalitesi ile öne çıkar. Bu model, genç ve yeni sürücüler için mükemmel bir başlangıç motosikletidir. Küçük motor hacmi ve hafifliği sayesinde, CB125R şehir içinde rahat bir sürüş deneyimi sunar. Motorun düşük devirlerde bile iyi bir tork üretmesi ve yakıt verimliliği, bu motosikleti hem eğlenceli hem de ekonomik bir seçenek haline getirir. Frenleri güçlü ve süspansiyon sistemi konforludur, bu da Honda CB125R'yi genç sürücüler için güvenli ve kullanıcı dostu bir seçenek haline getirir."
    },
    {
        "num": "2",
        "url": `https://enonlar.com/${url}#bolum-2`,
        "name": "KTM 125 Duke",
        "image": `/images/motosiklet/ktm_125_duke.png`,
        "firma": "KTM",
        "tip": "Naked",
        "motorHacmi": "125",
        "sifirYuz": "13.3",
        "max": "120",
        "tuketim": "2.4",
        "agirlik": "137",
        "ulke": "Avusturya",
        "yakitKapasitesi": "13.4",
        "paragraf": "Avusturya'nın önde gelen motosiklet üreticilerinden KTM, 125 Duke ile genç ve enerjik sürücüler için ideal bir seçenek sunuyor. 125cc motor hacmiyle birlikte, bu motosiklet kusursuz bir dengede güç ve ekonomiyi bir araya getiriyor. Geniş lastikleri ve mükemmel süspansiyon sistemi sayesinde sürücüye üst düzey bir yol tutuşu sunuyor. Gaz tepkisi ve fren performansı da oldukça tatminkar. Genç sürücüler için uygun olan bu motosiklet, şehir içi kullanımda olduğu kadar uzun mesafeli yolculuklarda da sürücüsüne güvenli ve keyifli bir sürüş deneyimi vaat ediyor."
    },  
    {
        "num": "1",
        "url": `https://enonlar.com/${url}#bolum-1`,
        "name": "Yamaha MT-125",
        "image": `/images/motosiklet/yamaha_mt_125.png`,
        "firma": "Yamaha",
        "tip": "Naked",
        "motorHacmi": "125",
        "sifirYuz": "13.8",
        "max": "115",
        "tuketim": "2.1",
        "agirlik": "140",
        "ulke": "Japonya",
        "yakitKapasitesi": "11.5",
        "paragraf": "Japon motosiklet üreticisi Yamaha'nın MT serisinin 125cc'lik üyesi MT-125, genç ve enerjik sürücüler için mükemmel bir seçenektir. Zarif tasarımı ve yüksek kaliteli işçiliği ile dikkat çeker. MT-125, düşük ağırlığı ve kompakt boyutları sayesinde şehir içinde oldukça kullanışlıdır. Motorun düşük ve orta devirlerde bile sağladığı etkileyici tork ve gaz tepkisi, sürücüye güçlü bir performans sunar. MT-125, genç ve enerjik sürücülerin yanı sıra, 125cc sınıfına yeni girenler için de mükemmel bir tercihtir. İdeal boyutları, konforlu sürüş pozisyonu ve mükemmel fren performansı ile Yamaha MT-125, bu sınıftaki en iyi motosikletlerden biridir."
  }
  ];

    const ana_resim = jsonContentArray[0].image;
    const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};

    const jsonList = moviesAndSeriesJson(articleInfos,
    "Motosiklet", 
    metin,
    jsonContentArray
    )

    return {
        props: {
            baslik,
            description,
            keywordsArray,
            ana_resim,
            url,
            jsonList,
            addDate,
            okunmaSuresi,
            kategori,
            metin,
            jsonContentArray
        },
        revalidate: 60 * 60 * 24,
    }

}

export default function Eniyi125ccNakedMain({baslik, description, keywordsArray, ana_resim, url, jsonList, addDate, okunmaSuresi, kategori, metin, jsonContentArray}) {
  const { nightMode } = useAppContext();

  return (
    <ClassicArticle baslik={baslik} description={description} keywordsArray={keywordsArray}
        ana_resim={ana_resim} url={url} jsonList={jsonList} nightMode={nightMode} addDate={addDate}
            okunmaSuresi={okunmaSuresi ? okunmaSuresi : jsonList.readTimeSpan}
            kategori={kategori} metin={metin}>

        <Ens_motosiklet jsonContentArray={jsonContentArray}/>

    </ClassicArticle>
  )
}