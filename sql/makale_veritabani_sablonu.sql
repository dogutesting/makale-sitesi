-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 16 Oca 2024, 11:07:33
-- Sunucu sürümü: 10.4.28-MariaDB
-- PHP Sürümü: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `makale_veritabani`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `clicks`
--

CREATE TABLE `clicks` (
  `id` int(10) UNSIGNED NOT NULL,
  `url` varchar(200) NOT NULL,
  `time` varchar(16) NOT NULL,
  `kategori` varchar(20) NOT NULL,
  `type` int(1) NOT NULL,
  `city` varchar(50) NOT NULL,
  `clicked_user_uuid` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `clicks`
--

INSERT INTO `clicks` (`id`, `url`, `time`, `kategori`, `type`, `city`, `clicked_user_uuid`) VALUES
(767, 'en-yuksek-imdb-puanina-sahip-10-film', '20:26-03.01.2024', 'film', 0, 'Adana', '495ef931-2414'),
(768, 'en-iyi-10-125-cc-naked-motosiklet', '20:27-03.01.2024', 'motosiklet', 0, 'Adana', '495ef931-2414'),
(769, 'en-iyi-10-1000-cc-naked-motosiklet', '13:23-06.01.2024', 'motosiklet', 0, 'Adana', '7bb32417-c76c'),
(770, 'en-iyi-10-1000-cc-naked-motosiklet', '13:25-06.01.2024', 'motosiklet', 0, 'Adana', '7bb32417-c76c'),
(771, 'en-iyi-10-1000-cc-naked-motosiklet', '13:25-06.01.2024', 'motosiklet', 0, 'Adana', '7bb32417-c76c'),
(772, 'en-iyi-10-1000-cc-naked-motosiklet', '13:25-06.01.2024', 'motosiklet', 0, 'Adana', '7bb32417-c76c'),
(773, 'en-iyi-10-1000-cc-naked-motosiklet', '13:25-06.01.2024', 'motosiklet', 0, 'Adana', '7bb32417-c76c'),
(774, 'en-iyi-10-1000-cc-naked-motosiklet', '13:46-06.01.2024', 'motosiklet', 0, 'Adana', '7bb32417-c76c');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `hatalar`
--

CREATE TABLE `hatalar` (
  `id` int(10) UNSIGNED NOT NULL,
  `location` varchar(20) NOT NULL,
  `hata` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `hatalar`
--



-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `makaleler`
--

CREATE TABLE `makaleler` (
  `id` int(10) UNSIGNED NOT NULL,
  `url` varchar(200) NOT NULL,
  `baslik` varchar(200) NOT NULL,
  `resimYolu` varchar(200) NOT NULL,
  `eklenmeTarihi` varchar(8) NOT NULL,
  `okunmaSuresi` varchar(2) NOT NULL,
  `kategori` varchar(20) NOT NULL,
  `paragraf` text NOT NULL,
  `anahtarlar` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `makaleler`
--

INSERT INTO `makaleler` (`id`, `url`, `baslik`, `resimYolu`, `eklenmeTarihi`, `okunmaSuresi`, `kategori`, `paragraf`, `anahtarlar`) VALUES
(31, 'en-iyi-10-1000-cc-naked-motosiklet', 'En İyi 10 1000 CC Naked Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-1000-cc-naked-motosiklet.png', '03.10.23', '5', 'motosiklet', '1000cc sınıfı naked motosikletler, tecrübeli motosiklet sürücülerinin ellerinde bile agresifliğini ve yırtıcılığını bırakmayan, adrenalini zirveye taşıyan makinalardır. Bu devasa güçler, her bir gaz hareketiyle kendini gösterirken, derin ve tok egzoz notaları ile çevrenizdeki herkesin dikkatini çeker. İster şehir içinde ister açık yolda olsun, bu motosikletler sürücülerine her zaman tam kontrollü bir agresiflik sunar. Yüksek performansları, sofistike teknolojileri ve etkileyici tasarımları ile bu makinalar, sadece hız ve güç tutkunlarına hitap eder. Bu makalede, bu sınıfın en iyi temsilcilerini detaylarıyla inceliyor ve sizi bu benzersiz deneyimi keşfetmeye davet ediyoruz. Okurken heyecanlanacak ve belki de bir sonraki motosikletinizi seçerken bu listeye göz atacaksınız.', 'en,iyi,1000cc,motosiklet,naked'),
(32, 'en-iyi-10-1000-cc-super-sport-motosiklet', 'En İyi 10 1000 CC Super Sport Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-1000-cc-super-sport-motosiklet.png', '03.10.23', '4', 'motosiklet', 'Süper spor motosikletler, mühendislik ve tasarımın zirvesini temsil eder. Bu hız canavarları, sadece dikkatli ve tecrübeli sürücüler için tasarlanmıştır. Her bir detay, sürücüsüne unutulmaz bir deneyim yaşatmak amacıyla özenle düşünülmüştür. İster pistte ister açık yolda olsun, bu motosikletler adrenalinin en saf halini sunar. Bu makalede, piyasadaki en iyi 10 süper spor motosikleti detaylı bir şekilde inceliyoruz. Hangi canavarın sizi en çok heyecanlandıracağını görmek için okumaya devam edin!', 'en,iyi,1000cc,motosiklet,supersport'),
(33, 'en-iyi-10-125-cc-naked-motosiklet', 'En İyi 10 125 CC Naked Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-125-cc-naked-motosiklet.png', '05.10.23', '5', 'motosiklet', '125cc\'lik motosikletler, özellikle yeni sürücüler ve gençler için cazip bir seçenek sunar. Hem ekonomik hem de çevik olan bu motosikletler, sürücülerine trafikte kolay manevra kabiliyeti ve sürüş esnekliği sunar. Naked tasarımı, bu kategoriyi daha da çekici kılar; minimal karoseri ve sade tasarım, motosikletin hafifliğini ve atikliğini vurgular. Naked 125cc motosikletler, şehir içi trafikte mükemmel performans sergilerken, aynı zamanda sürücülerine rüzgarla bütünleşme ve doğal bir sürüş deneyimi sunar. Bu motosikletler, genç sürücülerin yanı sıra kısıtlı bir bütçesi olan yetişkinler için de idealdir. Bu makalede, bu kategorideki en popüler 10 modeli derinlemesine inceleyeceğiz. Hangi modelin sizin için en uygun olduğunu belirlemek ve 125cc naked motosikletlerin sunduğu benzersiz deneyimi daha iyi anlamak için okumaya devam edin!', 'en,iyi,125cc,motosiklet,naked'),
(34, 'en-iyi-10-125-cc-scooter-motosiklet', 'En İyi 10 125 CC Scooter Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-125-cc-scooter-motosiklet.png', '10.10.23', '5', 'motosiklet', 'Scooter motosikletler, şehir içi ulaşımda rahatlık ve konfor arayanlar için ideal bir seçenektir. Küçük boyutları, agil yapıları ve geniş bagaj alanları sayesinde, scooterlar, yoğun trafikte rahat hareket edebilme ve park sorununu minimalize edebilme avantajları sunar. 100cc ve 125cc motor hacmine sahip scooter modelleri ise, hem yeni başlayanlar hem de deneyimli sürücüler için uygun bir seçim olabilir. Bu motor hacimleri, günlük şehir içi kullanım için yeterli performansı, ekonomik yakıt tüketimini ve düşük bakım maliyetlerini bir araya getirir. 100cc ve 125cc scooterlar, genelde LED farlar, dijital gösterge panelleri, geniş depolama alanları ve modern güvenlik özellikleri gibi konfor ve fonksiyonellik özellikleri sunar. Ayrıca, bu hacimdeki scooterlar genellikle uygun fiyatlı seçenekler sunar, bu da onları gençler, öğrenciler ve bütçesini düşünen sürücüler için cazip kılar. İşte karşınızda, Türkiye\'deki en popüler 10 adet 125cc ve 100cc scooter modeli. Listemize başlayalım!', 'en,iyi,125cc,motosiklet,scooter'),
(35, 'en-iyi-10-125-cc-super-sport-motosiklet', 'En İyi 10 125 CC Super Sport Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-125-cc-super-sport-motosiklet.png', '05.10.23', '6', 'motosiklet', '125cc\'lik supersport motosikletler, motosiklet dünyasının heyecan verici bir bölümünü temsil eder. Hem yeni başlayanlar hem de genç sürücüler için tasarlanmış bu makineler, sürücülerine yarışçı ruhunu, hızı ve esnekliği ilk elden deneyimleme fırsatı sunar. Estetik tasarımları, aerodinamik yapıları ve sportif karakterleri, sürücülerini sıkı bir yol tutuşu ve duyarlı manevra kabiliyeti ile buluşturur. Özellikle genç ve enerjik sürücüler için tasarlanmış bu motosikletler, onlara sürüş becerilerini geliştirme ve motor sporlarına olan ilgilerini derinleştirme fırsatı verir. Ayrıca, bu segmentteki motosikletler genellikle ekonomik yakıt tüketimi ve uygun fiyatlı bakım maliyetleri sunarak, bütçe dostu bir sürüş deneyimi sağlar. 125cc\'lik supersport motosikletlerin sunduğu bu eşsiz deneyimi yaşamak ve bu sınıfın en iyi modellerini keşfetmek adına, makalemizi okuyarak bu küçük canavarlar hakkında detaylı bilgi edinin.', 'en,iyi,125cc,motosiklet,super,sport'),
(36, 'en-iyi-10-250-cc-naked-motosiklet', 'En İyi 10 250 CC Naked Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-250-cc-naked-motosiklet.png', '03.10.23', '5', 'motosiklet', '250cc naked motosikletler, hafiflikleri, atik yapıları ve şehir içi kullanım kolaylıkları ile bilinirler. İster yeni başlayan bir sürücü olun, ister deneyimli bir motor tutkunu, bu segmentteki motosikletler, sade ve fonksiyonel tasarımları ile geniş bir kitleye hitap ediyor. Aşağıda, birbirinden estetik ve performanslı en iyi 10 250cc naked motosikleti detaylı özellikleri ve teknik analizler ışığında sıralayarak sizler için bir araya getiriyoruz. Her bir motosikletin tasarımından, motor performansına, kullanım kolaylığına kadar birçok detayı bulacaksınız. İyi okumalar!', 'en,iyi,250cc,motosiklet,naked'),
(37, 'en-iyi-10-250-cc-scooter-motosiklet', 'En İyi 10 250 CC Scooter Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-250-cc-scooter-motosiklet.png', '18.11.23', '5', 'motosiklet', 'Şehir hayatının yoğun temposunda hız, konfor ve stil arayanlar için 250cc scooter motosikletler mükemmel bir tercih sunar. Bu motor hacmi, şehir içinde hızlı ve çevik hareket etme imkanı sağlarken, şehirler arası yolculuklarda da yeterli performansı ve rahatlığı sunar. 250cc scooterlar, genellikle güçlü motorları, geniş oturma alanları ve yüksek depolama kapasiteleri ile öne çıkarlar. Bu segmentteki modeller, hem deneyimli sürücüler için hem de performanstan ödün vermek istemeyen yeni başlayanlar için idealdir. Modern teknolojik donanımlar, gelişmiş güvenlik özellikleri ve aerodinamik tasarımlar, 250cc scooterların günlük kullanımda pratikliğini ve sürüş keyfini artırır. Uzun yolculuklar ve şehir içi trafikte eşsiz bir sürüş deneyimi sunan bu modeller, hem tasarım hem de işlevsellik açısından beklentileri karşılar. İşte Türkiye\'deki en popüler ve sevilen 10 adet 250cc scooter modeli, bu dinamik ve heyecan verici scooterları incelemeye başlayalım.', 'en,iyi,250cc,motosiklet,scooter'),
(38, 'en-iyi-10-250-cc-super-sport-motosiklet', 'En İyi 10 250 CC Super Sport Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-250-cc-super-sport-motosiklet.png', '02.10.23', '5', 'motosiklet', '250cc\'lik supersport motosikletler, hem performansları hem de estetik tasarımları ile genç ve enerjik sürücülerin ilgisini çekiyor. Estetik ve atik yapılarıyla, her bir virajda sizi motosiklet tutkunuzun yeni boyutlarına taşıyor. Bu makalemizde, piyasada bulabileceğiniz en iyi 10 250cc\'lik supersport motosikleti derledik. İster şehir içinde hızlı manevralar, ister uzun yolda rüzgarla dans etmek olsun, bu motosikletler ile eğlenceyi hissedeceksiniz. Hangi modelin sizi en çok heyecanlandırdığını keşfedin!', 'en,iyi,250cc,motosiklet,super,sport'),
(39, 'en-iyi-10-300-cc-naked-motosiklet', 'En İyi 10 300 CC Naked Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-300-cc-naked-motosiklet.png', '03.10.23', '5', 'motosiklet', '300cc motor hacmi, genellikle başlangıç ve orta seviye sürücüler için idealdir, çünkü hem şehir içi hem de uzun mesafeli sürüşler için yeterli güç sunar. Naked motosikletlerin minimalist tasarımı, daha düşük ağırlık ve rahat sürüş pozisyonu, bu tarz motosikletleri hem günlük kullanım hem de maceralı sürüşler için cazip kılar. Listemizdeki zarif tasarımlı ve performans odaklı motosikletler, bu segmentin ne kadar çekici ve heyecan verici olduğunu gösteriyor. Hadi listeyi inceleyelim!', 'en,iyi,300cc,motosiklet,naked'),
(40, 'en-iyi-10-300-cc-super-sport-motosiklet', 'En İyi 10 300 CC Super Sport Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-300-cc-super-sport-motosiklet.png', '02.10.23', '5', 'motosiklet', 'Supersport motosikletler, genellikle onları sürmenin kendine has bir stil ve tecrübe gerektirdiği bir araç kategorisidir. 300cc\'lik motorlar, genellikle orta seviye sürücüler için idealdir ve yeni başlayanlar için bile uygun olabilir. Tasarım, performans, kullanılabilirlik ve fiyat gibi kritik faktörleri değerlendirerek, bu segmentteki en iyi seçenekleri belirledik. Motosiklet dünyasının estetik ve performans harmanını sunan supersport kategorisi, motor sporlarına olan tutkunuzu kesinlikle alevlendirecek. Makalemizin devamında, her bir motosikletin detaylı incelemesini ve benzersiz özelliklerini bulabilirsiniz. Sizleri, 300cc süpersport motosikletlerin hızlı, estetik ve heyecan verici dünyasına davet ediyoruz.', 'en,iyi,300cc,motosiklet,super,sport'),
(41, 'en-iyi-10-50-cc-scooter-motosiklet', 'En İyi 10 50 CC Scooter Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-50-cc-scooter-motosiklet.png', '10.10.23', '5', 'motosiklet', '50cc scooter\'lar, hem şehir içinde hem de kısa mesafeli taşımacılıkta ideal bir seçenektir. Küçük motor hacimleri sayesinde düşük yakıt tüketimi ve düşük işletme maliyetleri sunarlar. Ayrıca, kompakt boyutları ve hafiflikleri sayesinde trafikte kolay manevra yapabilir ve park problemlerini asgariye indirebilirler. 50cc scooter\'lar genellikle yeni sürücüler, öğrenciler veya düşük bütçeli bireyler için mükemmel bir tercihtir. Yine de, bu tür scooter\'ların tasarımı ve özellikleri markadan markaya değişkenlik gösterebilir. Bu makalede, Türkiye\'de satılan ve popüler olan 10 farklı 50cc scooter modelini inceledik ve onları bir dizi kritere göre sıraladık. Her modelin detaylı incelemesini ve sıralamasını aşağıda bulabilirsiniz. Vespa Primavera 50\'den başlayarak, RKS Azure 50\'ye kadar olan scooter modelleri, genel kalite, performans, konfor ve benzersiz özellikler açısından değerlendirdik. Hadi başlayalım!', 'en,iyi,50cc,motosiklet,scooter'),
(42, 'en-iyi-10-600-cc-naked-motosiklet', 'En İyi 10 600 CC Naked Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-600-cc-naked-motosiklet.png', '03.10.23', '5', 'motosiklet', '600cc\'lik motorlar, genel olarak orta ve tecrübeli motor sürücülerine hitap eder. Naked sınıfının özgürlüğünü ve 600cc veya 700cc naked motosiklet gücünün atılganlığını birleştirerek, esnek ve enerjik bir sürüş deneyimi sunar. Bu liste, her biri kendi sınıfında öne çıkan 10 farklı modeli içermekte. Siz de 600cc\'lik naked motosikletlerin sunduğu bu benzersiz deneyimi keşfetmek için yazımızı okumaya devam edin ve heyecanınızı kesfedin!', 'en,iyi,600cc,motosiklet,naked'),
(43, 'en-iyi-10-600-cc-super-sport-motosiklet', 'En İyi 10 600 CC Super Sport Motosiklet', '/images/ana_gorseller/enonlar-en-iyi-10-600-cc-super-sport-motosiklet.png', '03.10.23', '5', 'motosiklet', '600cc super sport motosikletler, hız tutkunlarının ve pist aslanlarının gözdesidir. Aerodinamik tasarımları sayesinde rüzgarı delebilir ve saniyeler içinde yüksek hızlara ulaşabilirler. Bu makinalar, sadece deneyimli sürücüler için tasarlanmıştır; çünkü bu güçlü makinelerin kontrolü, tam bir beceri ister. Özellikle pist günlerinde ya da açık yollarda, 600cc\'nin altındaki süper sport motosikletler, sürücüsüne adeta kanatlandırır gibi hissettirir. Bu makalede, piyasadaki en popüler 600cc super sport motosikletleri inceliyor ve her birinin eşsiz özelliklerini detaylıca ele alıyoruz. Makalemize göz atmaya hazır mısınız? Heyecanlandırıcı bir sürüş deneyimi sizi bekliyor!', 'en,iyi,600cc,motosiklet,supersport'),
(44, 'en-yuksek-imdb-puanina-sahip-10-dizi', 'En Yüksek imdb Puanına Sahip 10 Dizi', '/images/ana_gorseller/enonlar-en-yuksek-imdb-puanina-sahip-10-dizi.png', '02.10.23', '2', 'dizi', 'Televizyonun altın çağında, bazı diziler sadece ekran başında geçirilen saatleri doldurmakla kalmaz, duygusal bir bağ kurar ve bizi bölümler arasında bekleyişe sürükler. IMDb\'nin en iyi dizileri listesindeki bu başyapıtlar, sadece anlatım güçleriyle değil, aynı zamanda derinlikli hikayeleri, etkileyici karakter gelişimleri ve benzersiz temalarıyla da öne çıkar. En iyi IMDb dizileri arasında zirveye yerleşen bu eserler, izleyiciye düşündürücü anlar yaşatarak, günlük hayatın ötesine geçmeye davet eder. İşte televizyon tarihinin unutulmazlarına ev sahipliği yapan, her dizi tutkununun kaçırmaması gereken en iyi 10 dizi IMDb listesi.', 'en,yuksek,imdb,puani,diziler'),
(45, 'en-yuksek-imdb-puanina-sahip-10-film', 'En Yüksek imdb Puanına Sahip 10 Film', '/images/ana_gorseller/enonlar-en-yuksek-imdb-puanina-sahip-10-film.png', '02.10.23', '3', 'film', 'Sinemanın büyülü dünyasında, bazı filmler sadece eğlendirmekten öteye geçer, ruhumuza dokunur ve bizi derinden etkiler. IMDb\'nin en iyi filmler listesinde yer alan bu yapıtlar, sadece teknik başarısıyla değil, aynı zamanda evrensel temaları, duygusal derinlikleri ve etkileyici karakterleriyle de ön plana çıkar. IMDb\'nin en yüksek puanlı filmi olan ve listeye damgasını vuran bu eserler, izleyiciye hayatın farklı yönlerini, insan doğasını ve toplumsal değerleri sorgulama fırsatı sunar. İşte sinemanın zirvesine ulaşmış, her sinemaseverin hayatında en az bir kez izlemesi gereken IMDb en iyi 10 film listesi.', 'en,yuksek,imdb,puani,filmler'),
(46, 'erkeklerin-izlemesi-gereken-en-iyi-10-film', 'Erkeklerin İzlemesi Gereken En İyi 10 Film', '/images/ana_gorseller/enonlar-erkeklerin-izlemesi-gereken-en-iyi-10-film.png', '12.09.23', '5', 'film', '2023 yılında erkeklerin izlemesi gereken 10 filmi sizler için derledik. Gerçek bir erkeğe dönüşmekte size yardımcı olacak bu filmlere göz atın. Eğer karşılaştığınız zorluklar ve duygusal fırtınalar karşısında sarsılmaz bir karakter oluşturma hedefiniz varsa, doğru yerdesiniz. Erkekliğin ve karakterin derinliklerine dalmak isteyenler için özenle seçilmiş bu filmler, size ilham verecektir. İşte erkeklerin mutlaka izlemesi gereken, karakter oluşturma yolculuğunda rehber olabilecek 10 film.', 'erkek,erkekler,filmi,filmler,2023,adam');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `notfound`
--

CREATE TABLE `notfound` (
  `id` int(10) UNSIGNED NOT NULL,
  `location` varchar(200) NOT NULL,
  `date` varchar(20) NOT NULL,
  `uuid` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `notfound`
--

INSERT INTO `notfound` (`id`, `location`, `date`, `uuid`) VALUES
(13, '/test-most-12', '14:38-06.01.2024', '7bb32417-c76c'),
(14, '/parent', '15:02-12.01.2024', '7bb32417-c76c'),
(15, '/Parent', '15:33-12.01.2024', '7bb32417-c76c'),
(16, '/Parent', '15:33-12.01.2024', '7bb32417-c76c'),
(17, '/erkekr', '20:03-13.01.2024', '7bb32417-c76c'),
(18, '/erkeklerin-izlemesi-gereken-en-iyi-10-film/bolum-9', '20:07-13.01.2024', '7bb32417-c76c'),
(19, '/erkeklerin-izlemesi-gereken-en-iyi-10-film/bolum-9', '20:07-13.01.2024', '7bb32417-c76c');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_uuid` text NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `region` varchar(50) NOT NULL,
  `lat` varchar(16) NOT NULL,
  `lon` varchar(16) NOT NULL,
  `date` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`id`, `user_uuid`, `city`, `country`, `region`, `lat`, `lon`, `date`) VALUES
(136, '1c2c1988-45d0', 'Adana', 'Türkiye', 'Adana', '34.215', '32.181', '16:12-14.12.2023'),
(137, '035fa55a-228f', 'Adana', 'Türkiye', 'Adana', '34.215', '32.181', '16:21-16.12.2023'),
(138, '8cac703a-5360', 'Adana', 'Türkiye', 'Adana', '34.215', '32.181', '16:21-16.12.2023'),
(139, '7bb32417-c76c', 'Adana', 'Türkiye', 'Adana', '34.215', '32.181', '13:27-27.12.2023'),
(140, '43beb32b-4725', 'Adana', 'Türkiye', 'Adana', '34.215', '32.181', '15:47-09.01.2024'),
(141, '3844d840-e29b', 'Adana', 'Türkiye', 'Adana', '34.215', '32.181', '15:48-09.01.2024'),
(142, '3124a243-ec64', 'Adana', 'Türkiye', 'Adana', '34.215', '32.181', '16:39-10.01.2024'),
(143, 'b8b9b102-d194', 'Adana', 'Türkiye', 'Adana', '34.215', '32.181', '16:52-10.01.2024'),
(144, '5c240444-bcbb', 'Adana', 'Türkiye', 'Adana', '34.215', '32.181', '17:07-10.01.2024'),
(145, '4e44b635-e824', 'Adana', 'Türkiye', 'Adana', '34.215', '32.181', '11:38-14.01.2024');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `clicks`
--
ALTER TABLE `clicks`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `hatalar`
--
ALTER TABLE `hatalar`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `makaleler`
--
ALTER TABLE `makaleler`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `notfound`
--
ALTER TABLE `notfound`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `clicks`
--
ALTER TABLE `clicks`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=778;

--
-- Tablo için AUTO_INCREMENT değeri `hatalar`
--
ALTER TABLE `hatalar`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

--
-- Tablo için AUTO_INCREMENT değeri `makaleler`
--
ALTER TABLE `makaleler`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- Tablo için AUTO_INCREMENT değeri `notfound`
--
ALTER TABLE `notfound`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
