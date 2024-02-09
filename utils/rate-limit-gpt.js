import LRUCache from 'lru-cache';

// Önceden belirlenmiş bir zaman aşımı (ms cinsinden)
const DEFAULT_TIMEOUT = 60000; // 1 dakika
const MAX_TIMEOUT = 24 * 60 * 60 * 1000; // 1 gün

// IP tabanlı kota sınırları için bir LRU Cache oluştur
const ipLimits = new LRUCache({
  max: 1000, // Maximum öğe sayısı
  maxAge: MAX_TIMEOUT, // Öğelerin maksimum yaşam süresi
});

// Rate limiting işlevi
export default function rateLimit(minuteLimit=10, dailyLimit=200) {
  return async (req, res, next) => {
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // İp adresine göre kota bilgilerini al
    let limits = ipLimits.get(ipAddress);
    if (!limits) {
      // Limits yoksa, yeni bir limits oluştur ve önbelleğe ekle
      limits = {
        limitedCount: 1, //kaç kere zaman sınırlaması yedi? 0 etkisiz eleman olduğu için 1
        timeout: 60000 * limitedCount, //kota sıfırlama süresi
        remaining: minuteLimit, // İzin verilen istek sayısı
        dailyLimit: dailyLimit, //günlük izin verilen limit
        resetTime: Date.now() + timeout, // Kota sıfırlama zamanı
        lastRequestTime: Date.now() // Son istek zamanı
      };
      ipLimits.set(ipAddress, limits);
    }

    else {
        
        if(Date.now() - resetTime > 0) {
            limits.remaining = 10;
        }

        //kota sıfırlama zamanı gelmiş mi?
        //1 gün içerisinde atabileceği istek sayısı 200'ü geçmiş mi?

        const kotaSifirlamaZamani = Date.now() - limits.resetTime;



        const elapsedTime = Date.now() - (limits.lastRequestTime);
        if (limits.remaining === 0 && elapsedTime < 60000) { // 60 saniyede bir 10 kotası olacak
            return res.status(429).send('Çok fazla istek yapıldı. Lütfen daha sonra tekrar deneyin.');
        }
        else {
            //remaning limiti hâlâ var ise:
            limits.remaining--;

        }



        // Kota zaman aşımına uğradıysa
        if (Date.now() > limits.resetTime) {
            limits.remaining = 10; // Yeni kota sıfırlanır
            limits.resetTime = Date.now() + DEFAULT_TIMEOUT; // Yeni kota sıfırlama zamanı atanır
        } else {
        // Kota zaman aşımı devam ediyorsa, kalan kotaları azalt
            limits.remaining--;
        }

        // Kota zaman aşımı uygulaması: Her kota zaman aşımı 2 kat artacak
        limits.resetTime *= 2;

        // Kötü niyetli kişi, zaman aşımına uğramadan her 6 saniyede 1 tane atarak bir gün içerisinde toplam 14400 istek atabilir.
        // Her ne olursa olsun, 1 gün içerisinde atabileceği maksimum istek sayısı 200 olsun
        if (limits.remaining < 0 || limits.remaining > 200) {
            return res.status(429).send('Çok fazla istek yapıldı. Lütfen daha sonra tekrar deneyin.');
        }

        // Son istek zamanını güncelle
        limits.lastRequestTime = Date.now();
    }

    next();
  };
}
