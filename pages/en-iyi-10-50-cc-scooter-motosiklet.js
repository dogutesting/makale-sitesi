import moviesAndSeriesJson from '@/components/functions/moviesAndSeriesJson';
import ClassicArticleTop from '@/components/article_types/ClassicArticleTop';

export async function getStaticProps() {
    const url = "en-iyi-10-50-cc-scooter-motosiklet";
    const baslik = "En İyi 10 50 CC Scooter Motosiklet";
    const metin = "50cc scooter'lar, hem şehir içinde hem de kısa mesafeli taşımacılıkta ideal bir seçenektir. Küçük motor hacimleri sayesinde düşük yakıt tüketimi ve düşük işletme maliyetleri sunarlar. Ayrıca, kompakt boyutları ve hafiflikleri sayesinde trafikte kolay manevra yapabilir ve park problemlerini asgariye indirebilirler. 50cc scooter'lar genellikle yeni sürücüler, öğrenciler veya düşük bütçeli bireyler için mükemmel bir tercihtir. Yine de, bu tür scooter'ların tasarımı ve özellikleri markadan markaya değişkenlik gösterebilir. Bu makalede, Türkiye'de satılan ve popüler olan 10 farklı 50cc scooter modelini inceledik ve onları bir dizi kritere göre sıraladık. Her modelin detaylı incelemesini ve sıralamasını aşağıda bulabilirsiniz. Vespa Primavera 50'den başlayarak, RKS Azure 50'ye kadar olan scooter modelleri, genel kalite, performans, konfor ve benzersiz özellikler açısından değerlendirdik. Hadi başlayalım!";
    const description = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
    const keywordsArray = ["en", "iyi", "50cc", "motosiklet", "scooter"];
    /* const okunmaSuresi = "5"; */
    const kategori = "motosiklet"; //türkce karakter olmasin
    const minAge = "18";
    const yazar = "I Will";
    const eklenmeTarihi = "2023-10-10T00:22:00+03:00";
    const degistirilmeTarihi = "2023-11-19T01:13:00+03:00";
    const addDate = "10.10.23";

    const jsonContentArray = [
        {
            "num": "10",
            "url": `https://enonlar.com/${url}#bolum-10`,
            "name": "RKS Azure 50",
            "image": "/images/motosiklet/rks_azure_50.png",
            "ozellikler": {
                "Ülke": "Çin",
                "Firma": "RKS",
                "Tip": "Scooter",
                "Motor Hacmi": "50 cc",
                "Sıfır Yüz": "0",
                "Max": "45 km/s",
                "Tüketim": "2.1 Litre/100 km",
                "Ağırlık": "95 kg",
                "Yakıt Kapasitesi": "5.5 Litre"
            },
            "paragraf": "RKS'nin Azure 50 modeli, ekonomik bir seçenek olarak dikkat çeker. 50cc motor hacmi ile şehir içi ulaşım için tasarlanmış bu model, düşük yakıt tüketimi ve kolay manevra kabiliyeti ile öne çıkar. Hafifliği ve kompakt boyutları sayesinde, yeni başlayanlar ve genç sürücüler için uygun bir tercih olabilir. Azure 50, temel özellikler ve fonksiyonları ile sadelik ve işlevsellik sunar. Maksimum hızı ve performansı, diğer daha üst düzey modellerle kıyaslandığında daha düşük olabilir, ancak günlük kullanım ve kısa mesafeler için yeterlidir. RKS Azure 50, bütçe dostu bir scooter arayanlar için makul bir seçim olabilir."
        },  
        {
            "num": "9",
            "url": `https://enonlar.com/${url}#bolum-9`,
            "name": "Mondial Tab 50",
            "image": "/images/motosiklet/mondial_tab_50.jpg",
            "ozellikler": {
                "Ülke": "Türkiye",
                "Firma": "Mondial",
                "Tip": "Scooter",
                "Motor Hacmi": "50 cc",
                "Sıfır Yüz": "0",
                "Max": "45 km/s",
                "Tüketim": "2.2 Litre/100 km",
                "Ağırlık": "96 kg",
                "Yakıt Kapasitesi": "5.7 Litre"
            },
            "paragraf": "Mondial Tab 50, Türkiye merkezli bir marka olan Mondial tarafından üretilen uygun fiyatlı bir scooter modelidir. Şehiriçi trafiğinde kolaylıkla manevra yapabilen bu model, kompakt boyutları ve hafifliği ile dikkat çeker. Basit ve fonksiyonel tasarımı sayesinde, scooter'ın kullanımı oldukça kolaydır. Yakıt verimliliği ve düşük işletme maliyetleri, Mondial Tab 50'yi özellikle bütçe dostu bir seçenek haline getirir. Temel özellikler ve işlevler sayesinde, günlük ulaşım ihtiyaçları için oldukça uygun bir tercihtir. Türkiye'de üretilmesi, yerel servis ve destek imkanlarını da kolaylaştırır."
        },
        {
            "num": "8",
            "url": `https://enonlar.com/${url}#bolum-8`,
            "name": "Sym Mio 50",
            "image": "/images/motosiklet/sym_mio_50.png",
            "ozellikler": {
                "Ülke": "Tayvan",
                "Firma": "Sym",
                "Tip": "Scooter",
                "Motor Hacmi": "50 cc",
                "Sıfır Yüz": "0",
                "Max": "45 km/s",
                "Tüketim": "2.3 Litre/100 km",
                "Ağırlık": "95 kg",
                "Yakıt Kapasitesi": "5.2 Litre"
            },
            "paragraf": "Sym Mio 50, Tayvan merkezli Sym markasının şık ve kompakt bir scooter modelidir. Retro tasarımı ve modern özellikleri ile dikkat çeken bu model, genç ve genç kalpli sürücüler için cazip bir seçenek olabilir. Hafifliği ve küçük boyutları sayesinde, Sym Mio 50 şehir içinde kolay manevra yapma ve park etme imkanı sunar. 50cc motor hacmi, düşük yakıt tüketimi ve tatminkar bir performans sunar. Sym Mio 50, estetik tasarımı ve uygun fiyatı ile scooter pazarında kendine özgü bir yer bulmuştur. Genel olarak, günlük ulaşım ihtiyaçları için uygun bir seçenektir."
        },     
        {
            "num": "7",
            "url": `https://enonlar.com/${url}#bolum-7`,
            "name": "Arora AR Cappuccino",
            "image": "/images/motosiklet/arora_ar_cappuccino.png",
            "ozellikler": {
                "Ülke": "Türkiye",
                "Firma": "Arora",
                "Tip": "Scooter",
                "Motor Hacmi": "50 cc",
                "Sıfır Yüz": "0",
                "Max": "45 km/s",
                "Tüketim": "2.4 Litre/100 km",
                "Ağırlık": "97 kg",
                "Yakıt Kapasitesi": "5.8 Litre"
            },
            "paragraf": "Arora AR Cappuccino, Türkiye merkezli Arora markasının şehir içi kullanım için tasarlanmış kompakt bir scooter modelidir. Retro tasarımı ve konforlu koltuğu ile sürücüler için rahat bir sürüş deneyimi sunar. 50cc motor hacmi, düşük yakıt tüketimi ve tatminkar bir performans sağlar. Uygun fiyatı ve düşük işletme maliyetleri sayesinde, bütçe dostu bir seçenek olarak öne çıkar. Günlük ulaşım ihtiyaçları için ideal olan Arora AR Cappuccino, şehir içi trafiğinde kolay manevra kabiliyeti ve park kolaylığı sunar. Türkiye'de üretilmesi, yerel servis ve destek imkanlarını da kolaylaştırır."
        },
        {
            "num": "6",
            "url": `https://enonlar.com/${url}#bolum-6`,
            "name": "Peugeot Kisbee 50",
            "image": "/images/motosiklet/peugeot_kisbee_50.jpg",
            "ozellikler": {
                "Ülke": "Fransa",
                "Firma": "Peugeot",
                "Tip": "Scooter",
                "Motor Hacmi": "50 cc",
                "Sıfır Yüz": "0",
                "Max": "45 km/s",
                "Tüketim": "2.1 Litre/100 km",
                "Ağırlık": "95 kg",
                "Yakıt Kapasitesi": "6.8 Litre"
            },
            "paragraf": "Peugeot Kisbee 50, Fransız otomotiv devi Peugeot'nun scooter serisinden zarif ve işlevsel bir modeldir. Modern ve sade tasarımı, geniş koltuğu ve geniş depolama alanı ile dikkat çeker. Kisbee 50, düşük yakıt tüketimi ve sessiz çalışan motoru ile konforlu ve ekonomik bir sürüş deneyimi sunar. 50cc motor hacmi, şehir içi trafiğinde hızlı manevra kabiliyeti ve kolay park imkanı sağlar. Peugeot'nun otomotiv sektöründeki deneyimi, bu scooter modelinin güvenilirliği ve dayanıklılığına da yansımıştır. Günlük ulaşım ihtiyaçları için ideal bir seçenektir ve Fransa'daki kalite standartlarına uygun olarak üretilmiştir."
        },    
        {
            "num": "5",
            "url": `https://enonlar.com/${url}#bolum-5`,
            "name": "Honda Today 50",
            "image": "/images/motosiklet/honda_today_50.png",
            "ozellikler": {
                "Firma": "Honda",
                "Tip": "Scooter",
                "Motor Hacmi": "50 cc",
                "Sıfır Yüz": "0",
                "Max": "45 km/s",
                "Tüketim": "2.2 Litre/100 km",
                "Ağırlık": "96 kg",
                "Ülke": "Japonya",
                "Yakıt Kapasitesi": "5.5 Litre"
            },
            "paragraf": "Honda Today 50, Japon mühendisliği ve kalitesini temsil eden bir scooter modelidir. Kompakt boyutları ve modern tasarımı ile şehir içi ulaşım için idealdir. 50cc motor hacmi, düşük yakıt tüketimi ve Honda'nın güvenilir motor teknolojisi sayesinde, sürücülere uzun ömürlü ve sorunsuz bir performans sunar. Pratik depolama alanları ve rahat koltuğu, günlük kullanım için konfor ve işlevsellik sağlar. Honda Today 50, geniş servis ağı ve yedek parça bulunabilirliği ile de öne çıkar, bu da onu uzun vadede ekonomik ve güvenilir bir seçenek haline getirir."
        },  
        {
            "num": "4",
            "url": `https://enonlar.com/${url}#bolum-4`,
            "name": "Peugeot Speedfight 4",
            "image": "/images/motosiklet/peugeot_speedfight_4.png",
            "ozellikler": {
                "Firma": "Peugeot",
                "Tip": "Scooter",
                "Motor Hacmi": "50 cc",
                "Sıfır Yüz": "0",
                "Max": "45 km/s",
                "Tüketim": "2.3 Litre/100 km",
                "Ağırlık": "97 kg",
                "Ülke": "Fransa",
                "Yakıt Kapasitesi": "6.3 Litre"
            },
            "paragraf": "Peugeot Speedfight 4, Fransız markası Peugeot'nun sportif ve modern bir scooter modelidir. Agresif tasarımı, alüminyum gövde panelleri ve aerodinamik yapısı ile dikkat çeker. 50cc motor hacmi, Speedfight 4'ü şehir içi trafiğinde hızlı ve çevik kılar. Yüksek kaliteli fren sistemi ve süspansiyon, sürüş güvenliğini ve konforunu artırır. LED farlar, dijital gösterge paneli ve USB şarj portu gibi modern özellikler, Speedfight 4'ün genç ve teknoloji meraklısı sürücüler için cazip bir seçenek haline getirir. Peugeot'nun otomotiv sektöründeki uzun geçmişi, bu scooter modelinin güvenilirliği ve kalitesini de destekler."
        },  
        {
            "num": "3",
            "url": `https://enonlar.com/${url}#bolum-3`,
            "name": "Yamaha Neos 50",
            "image": "/images/motosiklet/yamaha_neos_50.png",
            "ozellikler": {
                "Firma": "Yamaha",
                "Tip": "Scooter",
                "Motor Hacmi": "50 cc",
                "Sıfır Yüz": "0",
                "Max": "45 km/s",
                "Tüketim": "2.2 Litre/100 km",
                "Ağırlık": "95 kg",
                "Ülke": "Japonya",
                "Yakıt Kapasitesi": "5.4 Litre"
            },
            "paragraf": "Yamaha Neos 50, Japon motor üreticisi Yamaha'nın kompakt ve şık bir scooter modelidir. Modern tasarımı, LED aydınlatma ve geniş depolama alanı ile Neos 50, şehir içi ulaşım için ideal bir tercihtir. 50cc motor hacmi ve otomatik şanzımanı, düşük yakıt tüketimi ve kolay kullanım sağlar. Yamaha'nın motosiklet sektöründeki deneyimi, Neos 50'nin motor performansı ve dayanıklılığına da yansır. Konforlu koltuk ve geniş ayak alanı, uzun süreli sürüşlerde bile rahat bir deneyim sunar. Yamaha Neos 50, günlük ulaşım ihtiyaçları için güvenilir ve konforlu bir seçenek sunar."
        },  
        {
            "num": "2",
            "url": `https://enonlar.com/${url}#bolum-2`,
            "name": "Peugeot Django 50",
            "image": "/images/motosiklet/peugeot_django_50.png",
            "ozellikler": {
                "Firma": "Peugeot",
                "Tip": "Scooter",
                "Motor Hacmi": "50 cc",
                "Sıfır Yüz": "0",
                "Max": "45 km/s",
                "Tüketim": "2.1 Litre/100 km",
                "Ağırlık": "110 kg",
                "Ülke": "Fransa",
                "Yakıt Kapasitesi": "8.5 Litre"
            },
            "paragraf": "Peugeot Django 50, Fransız markası Peugeot'nun retro tasarımı ve modern teknolojiyi bir araya getiren benzersiz bir scooter modelidir. Django 50'nin vintage tasarımı, klasik tarzı seven sürücüler için cazip bir seçenektir. 50cc motor hacmi, düşük yakıt tüketimi ve sessiz çalışma performansı ile öne çıkar. Konforlu koltuk ve geniş depolama alanı, günlük kullanım için pratiklik sunar. ABS fren sistemi ve LED aydınlatma gibi modern özellikler, Django 50'yi güvenli ve güncel bir seçenek haline getirir. Peugeot'nun otomotiv sektöründeki kalite standartları, bu scooter modelinin güvenilirliği ve dayanıklılığına da yansır."
        },  
        {
            "num": "1",
            "url": `https://enonlar.com/${url}#bolum-1`,
            "name": "Vespa Primavera 50",
            "image": "/images/motosiklet/vespa_primavera_50.png",
            "ozellikler": {
                "Firma": "Vespa",
                "Tip": "Scooter",
                "Motor Hacmi": "50 cc",
                "Sıfır Yüz": "0",
                "Max": "45 km/s",
                "Tüketim": "2.1 Litre/100 km",
                "Ağırlık": "115 kg",
                "Ülke": "İtalya",
                "Yakıt Kapasitesi": "8 Litre"
            },
            "paragraf": "Vespa Primavera 50, İtalyan markası Vespa'nın ikonik ve zarif bir scooter modelidir. Klasik Vespa tasarımı ve yüksek kaliteli malzemeler, Primavera 50'yi scooter severler için cazip bir seçenek haline getirir. 50cc motor hacmi, düşük yakıt tüketimi ve sessiz çalışma performansı ile ideal bir şehir içi ulaşım aracıdır. Deri koltuk, krom detaylar ve retro tasarım, Primavera 50'nin estetik açıdan öne çıkmasını sağlar. Vespa'nın uzun tarihli itibarı ve kalite standartları, bu scooter modelinin güvenilirliği ve dayanıklılığına da yansır. İtalyan tarzı ve mühendisliği, Vespa Primavera 50'yi scooter pazarında benzersiz bir seçenek haline getirir."
        }
    ];

    const ana_resim = "/images/ana_gorseller/enonlar-en-iyi-10-50-cc-scooter-motosiklet.png";

    const articleInfos = {url, baslik, description, keywordsArray, ana_resim, kategori, minAge, yazar, eklenmeTarihi, degistirilmeTarihi};
    //JSON+LD
    const jsonList = moviesAndSeriesJson(articleInfos,
    "Motosiklet", 
    metin,
    jsonContentArray
    )

    return {
        props: {
            articleConstructor: {
                baslik, description, keywordsArray, ana_resim, url, jsonList, addDate, okunmaSuresi: jsonList.readTimeSpan, kategori, metin, jsonContentArray
            }
        }
    }
}

export default function Eniyi50ccScooterMain({topCPO, articleConstructor}) {
  return (
    <ClassicArticleTop topCPO={topCPO} articleConstructor={articleConstructor}/>
  )
}