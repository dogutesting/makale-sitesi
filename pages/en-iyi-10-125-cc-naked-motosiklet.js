import { useAppContext } from '@/context/ContextProvider';
import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticle from '@/components/article_types/ClassicArticle';

export default function Eniyi125ccNakedMain() {
    const { nightMode } = useAppContext();

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
    const degistirilmeTarihi = "2023-11-19T01:13:00+03:00";
    const addDate = "05.10.23";

    const jsonContentArray = [
        {
            "num": "10",
            "url": `https://enonlar.com/${url}#bolum-10`,
            "name": "Lexmoto LXR 125 SE",
            "image": "/images/motosiklet/lexmoto_ls_n_125.png",
            "ozellikler": {
                "Ülke": "Çin",
                "Firma": "Lexmoto",
                "Tip": "Naked",
                "Motor Hacmi": "125 cc",
                "Sıfır Yüz": "13.8 s",
                "Max": "105 km/s",
                "Tüketim": "2.9 Litre/100 km",
                "Ağırlık": "167 kg",
                "Yakıt Kapasitesi": "13.5 Litre"
            },
            "paragraf": "Çinli motosiklet üreticisi Lexmoto'nun LXR 125 SE modeli, 125cc naked sınıfına uygun fiyatlı bir giriş sağlıyor. Modern ve sportif tasarımı, LED farlar ve dijital gösterge paneli gibi özellikleri ile genç sürücülerin ilgisini çekiyor. 125cc motoru ile şehir içi kullanım için yeterli performans ve yakıt verimliliği sunuyor. Ancak, uzun yolculuklar ve yüksek hızlar için daha fazla güç ve torka ihtiyaç duyulabileceğini belirtmek gerekiyor. Fren performansı ve süspansiyon sistemi bu fiyat aralığı için tatminkar. Lexmoto LXR 125 SE, bütçesi kısıtlı olanlar için iyi bir seçenek olabilir."
        },
        {
            "num": "9",
            "url": `https://enonlar.com/${url}#bolum-9`,
            "name": "Keeway RKF 125",
            "image": "/images/motosiklet/keeway_rkf_125.jpg",
            "ozellikler": {
                "Ülke": "Çin",
                "Firma": "Keeway",
                "Tip": "Naked",
                "Motor Hacmi": "125 cc",
                "Sıfır Yüz": "13.0 s",
                "Max": "100 km/s",
                "Tüketim": "2.8 Litre/100 km",
                "Ağırlık": "124 kg",
                "Yakıt Kapasitesi": "10 Litre"
            },
            "paragraf": "Çinli motosiklet üreticisi Keeway, RKF 125 ile genç ve enerjik sürücülerin beklentilerini karşılamayı amaçlıyor. Hafif, çevik ve stil sahibi bu motosiklet, 125cc motor hacmi ve 13.0 saniyede 0-100 km/h hızlanma kapasitesi ile şehir içinde çevik manevralar ve hızlı geçişler için uygundur. RKF 125, modern ve agresif tasarımı ile dikkat çekerken, LED aydınlatma sistemi ve dijital gösterge paneli gibi özelliklerle genç sürücüler için cazip hale gelir. Yumuşak süspansiyon sistemi ve rahat oturma pozisyonu, bu motosikleti günlük kullanım için uygun kılar. Yakıt verimliliği ve uygun fiyatı sayesinde, RKF 125 ekonomik bir seçenek olarak öne çıkar."
        },
        {
            "num": "8",
            "url": "https://enonlar.com/${url}#bolum-8",
            "name": "Husqvarna Svartpilen 125",
            "image": "/images/motosiklet/husqvarna_svartpilen_125.png",
            "ozellikler": {
                "Ülke": "İsveç",
                "Firma": "Husqvarna",
                "Tip": "Naked",
                "Motor Hacmi": "125 cc",
                "Sıfır Yüz": "14.9 s",
                "Max": "120 km/s",
                "Tüketim": "2.5 Litre/100 km",
                "Ağırlık": "146 kg",
                "Yakıt Kapasitesi": "9.5 Litre"
            },
            "paragraf": "İsveçli motosiklet üreticisi Husqvarna, Svartpilen 125 ile minimalist ve modern bir tasarımı uygun fiyatlı bir pakette sunuyor. Düşük ağırlığı ve kompakt yapısı sayesinde, Svartpilen 125 şehir içi trafiğinde kolay manevra yapabilme ve park kolaylığı sunar. 125cc motoru, yeni sürücüler için yeterli güç sağlarken, yakıt verimliliği ve düşük işletme maliyetleri ile de dikkat çeker. Motosiklet, ergonomik oturma pozisyonu ve geniş gidonu sayesinde rahat bir sürüş deneyimi sunar. Husqvarna Svartpilen 125, estetik tasarımı ve günlük kullanım kolaylığı ile genç ve enerjik sürücüler için ideal bir seçenektir."
        },
        {
            "num": "7",
            "url": "https://enonlar.com/${url}#bolum-7",
            "name": "Kawasaki Z125",
            "image": "/images/motosiklet/kawasaki_z125.png",
            "ozellikler": {
                "Ülke": "Japonya",
                "Firma": "Kawasaki",
                "Tip": "Naked",
                "Motor Hacmi": "125 cc",
                "Sıfır Yüz": "9.7 s",
                "Max": "105 km/s",
                "Tüketim": "2.2 Litre/100 km",
                "Ağırlık": "146 kg",
                "Yakıt Kapasitesi": "11 Litre"
            },
            "paragraf": "Japon motosiklet devi Kawasaki'nin Z serisinin en küçük üyesi olan Z125, markanın agresif tasarım dilini ve üst düzey mühendislik kabiliyetlerini taşıyor. Hafif, kompakt ve manevra kabiliyeti yüksek olan Z125, özellikle şehir içi kullanım için mükemmel bir seçenek. 125cc'lik motoru, giriş seviyesi sürücüler için yeterli güç ve hız sunarken, yakıt verimliliği sayesinde cüzdan dostu bir operasyon maliyeti sağlıyor. Z125, sert ve sportif süspansiyon sistemi ile dinamik bir sürüş deneyimi sunuyor. Genel olarak, Kawasaki Z125, şehir içi hareketliliği, sportif tasarımı ve Kawasaki kalitesini bir araya getirerek 125cc segmentinde dikkat çekici bir seçenek haline geliyor."
        },
        {//! düzelt
            "num": "6",
            "url": "https://enonlar.com/${url}#bolum-6",
            "name": "Benelli TNT 125",
            "image": "/images/motosiklet/benelli_tnt_125.png",
            "ozellikler": {
                "Ülke": "İtalya",
                "Firma": "Benelli",
                "Tip": "Naked",
                "Motor Hacmi": "125 cc",
                "Sıfır Yüz": "11.5 s",
                "Max": "110 km/s",
                "Tüketim": "2.5 Litre/100 km",
                "Ağırlık": "137 kg",
                "Yakıt Kapasitesi": "7.2 Litre"
            },
            "paragraf": "İtalyan motosiklet üreticisi Benelli'nin TNT 125 modeli, sade ve etkileyici tasarımı ile dikkat çeker. Küçük motor hacmine rağmen, TNT 125 dinamik ve eğlenceli bir sürüş deneyimi sunar. Hafifliği ve kompakt yapısı sayesinde, şehir içindeki hareketlilik ve manevra kabiliyeti oldukça yüksektir. Özellikle genç ve giriş seviyesi sürücüler için ideal bir seçenek olan TNT 125, alçak oturma pozisyonu ve konforlu koltuk yapısı sayesinde uzun süreli sürüşlerde bile rahatlık sunar. Performans anlamında beklentileri karşılayan TNT 125, Benelli kalitesini uygun fiyat etiketi ile birleştirerek 125cc naked segmentinde güçlü bir adaydır."
        },
        {
            "num": "5",
            "url": "https://enonlar.com/${url}#bolum-5",
            "name": "Aprilia Tuono 125",
            "image": "/images/motosiklet/aprilia_tuono_125.png",
            "ozellikler": {
                "Ülke": "İtalya",
                "Firma": "Aprilia",
                "Tip": "Naked",
                "Motor Hacmi": "125 cc",
                "Sıfır Yüz": "15.0 s",
                "Max": "120 km/s",
                "Tüketim": "2.4 Litre/100 km",
                "Ağırlık": "144 kg",
                "Yakıt Kapasitesi": "14.5 Litre"
            },
            "paragraf": "İtalyan üretici Aprilia'nın Tuono 125 modeli, sportif ve agresif bir tasarımı kompakt bir yapıda sunar. Motorun 125cc hacminde, sürücülerine sportif bir performans ve dinamik bir sürüş deneyimi yaşatır. Aynı zamanda, motorun fren ve süspansiyon sistemleri de oldukça başarılıdır. Aprilia Tuono 125, genç ve enerjik sürücüler için mükemmel bir seçenektir. Özellikle şehir içi kullanımlarda, hafif ve çevik yapısı sayesinde, sürücülerine büyük bir avantaj sunar. Ayrıca, motorun dijital göstergesi ve modern elektronik özellikleri, sürücülerine konforlu ve güvenli bir sürüş deneyimi sunar."
        },
        {
            "num": "4",
            "url": "https://enonlar.com/${url}#bolum-4",
            "name": "Suzuki GSX-S125",
            "image": "/images/motosiklet/suzuki_gsx_s125.png",
            "ozellikler": {
                "Ülke": "Japonya",
                "Firma": "Suzuki",
                "Tip": "Naked",
                "Motor Hacmi": "125 cc",
                "Sıfır Yüz": "13.8 s",
                "Max": "122 km/s",
                "Tüketim": "2.3 Litre/100 km",
                "Ağırlık": "133 kg",
                "Yakıt Kapasitesi": "11 Litre"
            },
            "paragraf": "Japonya'nın köklü motosiklet üreticilerinden Suzuki'nin GSX-S125 modeli, hafifliği ve çevikliği ile dikkat çeker. Şehir içi trafiğinde manevra kabiliyeti yüksek olan bu model, genç sürücüler için ideal bir seçenektir. Yüksek verimli ve yakıt tasarruflu motoru sayesinde uzun süreli kullanımlarda bile sürücüsüne ekonomik bir sürüş deneyimi sunar. Aynı zamanda, Suzuki'nin güvenilirliği ve dayanıklılığı GSX-S125'i uzun vadede akıllı bir yatırım haline getirir. Fren ve süspansiyon sistemleri başarılı bir performans sergilerken, kompakt boyutu ve hafifliği sayesinde şehir içinde rahat bir kullanım imkanı tanır."
        },
        {
            "num": "3",
            "url": "https://enonlar.com/${url}#bolum-3",
            "name": "Honda CB125R",
            "image": "/images/motosiklet/honda_cb125r.png",
            "ozellikler": {
                "Ülke": "Japonya",
                "Firma": "Honda",
                "Tip": "Naked",
                "Motor Hacmi": "125 cc",
                "Sıfır Yüz": "13.5 s",
                "Max": "105 km/s",
                "Tüketim": "2.1 Litre/100 km",
                "Ağırlık": "126 kg",
                "Yakıt Kapasitesi": "10.1 Litre"
            },
            "paragraf": "Japonya'nın prestijli motosiklet üreticilerinden Honda'nın CB125R modeli, modern tasarımı ve sağlam yapı kalitesi ile öne çıkar. Bu model, genç ve yeni sürücüler için mükemmel bir başlangıç motosikletidir. Küçük motor hacmi ve hafifliği sayesinde, CB125R şehir içinde rahat bir sürüş deneyimi sunar. Motorun düşük devirlerde bile iyi bir tork üretmesi ve yakıt verimliliği, bu motosikleti hem eğlenceli hem de ekonomik bir seçenek haline getirir. Frenleri güçlü ve süspansiyon sistemi konforludur, bu da Honda CB125R'yi genç sürücüler için güvenli ve kullanıcı dostu bir seçenek haline getirir."
        },
        {
            "num": "2",
            "url": "https://enonlar.com/${url}#bolum-2",
            "name": "KTM 125 Duke",
            "image": "/images/motosiklet/ktm_125_duke.png",
            "ozellikler": {
                "Ülke": "Avusturya",
                "Firma": "KTM",
                "Tip": "Naked",
                "Motor Hacmi": "125 cc",
                "Sıfır Yüz": "13.3 s",
                "Max": "120 km/s",
                "Tüketim": "2.4 Litre/100 km",
                "Ağırlık": "137 kg",
                "Yakıt Kapasitesi": "13.4 Litre"
            },
            "paragraf": "Avusturya'nın önde gelen motosiklet üreticilerinden KTM, 125 Duke ile genç ve enerjik sürücüler için ideal bir seçenek sunuyor. 125cc motor hacmiyle birlikte, bu motosiklet kusursuz bir dengede güç ve ekonomiyi bir araya getiriyor. Geniş lastikleri ve mükemmel süspansiyon sistemi sayesinde sürücüye üst düzey bir yol tutuşu sunuyor. Gaz tepkisi ve fren performansı da oldukça tatminkar. Genç sürücüler için uygun olan bu motosiklet, şehir içi kullanımda olduğu kadar uzun mesafeli yolculuklarda da sürücüsüne güvenli ve keyifli bir sürüş deneyimi vaat ediyor."
        },
        {
            "num": "1",
            "url": "https://enonlar.com/${url}#bolum-1",
            "name": "Yamaha MT-125",
            "image": "/images/motosiklet/yamaha_mt_125.png",
            "ozellikler": {
                "Ülke": "Japonya",
                "Firma": "Yamaha",
                "Tip": "Naked",
                "Motor Hacmi": "125 cc",
                "Sıfır Yüz": "13.8 s",
                "Max": "115 km/s",
                "Tüketim": "2.1 Litre/100 km",
                "Ağırlık": "140 kg",
                "Yakıt Kapasitesi": "11.5 Litre"
            },
            "paragraf": "Japon motosiklet üreticisi Yamaha'nın MT serisinin 125cc'lik üyesi MT-125, genç ve enerjik sürücüler için mükemmel bir seçenektir. Zarif tasarımı ve yüksek kaliteli işçiliği ile dikkat çeker. MT-125, düşük ağırlığı ve kompakt boyutları sayesinde şehir içinde oldukça kullanışlıdır. Motorun düşük ve orta devirlerde bile sağladığı etkileyici tork ve gaz tepkisi, sürücüye güçlü bir performans sunar. MT-125, genç ve enerjik sürücülerin yanı sıra, 125cc sınıfına yeni girenler için de mükemmel bir tercihtir. İdeal boyutları, konforlu sürüş pozisyonu ve mükemmel fren performansı ile Yamaha MT-125, bu sınıftaki en iyi motosikletlerden biridir."
        }
    ];

    const ana_resim = "/images/ana_gorseller/enonlar-en-iyi-10-125-cc-naked-motosiklet.png";
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