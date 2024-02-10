import LRUCache from 'lru-cache';

// Önceden belirlenmiş bir zaman aşımı (ms cinsinden)
const DEFAULT_TIMEOUT = 60000; // 1 dakika
const MAX_TIMEOUT = 24 * 60 * 60 * 1000; // 1 gün

// IP tabanlı kota sınırları için bir LRU Cache oluştur
const ipLimits = new LRUCache({
  max: 1000, // Maximum öğe sayısı
  maxAge: MAX_TIMEOUT, // Öğelerin maksimum yaşam süresi
});

let limitedCount = 1;

// Rate limiting işlevi
export default async function rateLimit(req, res, next, minuteLimit=10, dailyLimit=100) {
    console.log("rate limite geldi", minuteLimit, dailyLimit);
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // İp adresine göre kota bilgilerini al
    let limits = ipLimits.get(ipAddress);
    if (!limits) {
      // Limits yoksa, yeni bir limits oluştur ve önbelleğe ekle
      limits = new function() {
        this.limitedCount = 1,
        this.timeout = DEFAULT_TIMEOUT * this.limitedCount,

        this.remainingInMinute = minuteLimit,
        this.remainingInDaily = dailyLimit,

        this.resetStart = Date.now(),
        this.resetTime = this.resetStart + this.timeout,

        //* functions
        this.remainingDecrease = () => {
            limits.remainingInMinute--;
            limits.remainingInDaily--;
        },
        this.resetMinuteLimit = () => {
            limits.remaining = 10;
            limits.resetStart = Date.now();
        },
        this.checkDailyLimit = () => {
            return limits.dailyLimit <= 0 ? res.status(429).send("Günlük limit aşıldı.") : true;
        }
      };
      ipLimits.set(ipAddress, limits);
    }
    else {
        limits.checkDailyLimit();
        console.log("check edildi");

        if((Date.now() - resetTime) > 0) {
            limits.resetMinuteLimit();
            limits.remainingDecrease();
        }
        else {
            if(limits.remaining > 0) {
                limits.remainingDecrease();
            }
            else {
                limits.limitedCount++;
                return res.status(429).send("Çok fazla istek yapıldı. Zaman cezası verildi: " + limits.timeout);
            }
        }
    }
    next();
}