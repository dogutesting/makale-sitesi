const DEFAULT_TIMEOUT = 10000;

export default async function rateLimitMiddleware(req, res, ipLimits, minuteLimit=3, dailyLimit=10) {
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

        this.stunned = false,
        this.resetTime = null,

        //* functions
        this.decreaseToRemaining = function () {
            this.remainingInMinute--;
            this.remainingInDaily--;
        },
        this.resetMinuteLimit = function () {
            this.remainingInMinute = minuteLimit;
        },
        this.checkDailyLimit = function () {
            /* return this.remainingInDaily <= 0 && res.status(429).send("Günlük limit aşıldı."); */
            return this.remainingInDaily <= 0 && false;
        }
      };
      ipLimits.set(ipAddress, limits);
      limits.decreaseToRemaining();
      /* console.log("ilk kez istek atıldı"); */
      return true;
    }
    else {
        !limits.checkDailyLimit() && false;

        if(limits.remainingInMinute > 0) {
            /* console.log("stage 1"); */
            limits.decreaseToRemaining();
            return true;
        }
        else {
            if(limits.stunned) {
                if((Date.now() - limits.resetTime) > 0) {
                    /* console.log("stage 2"); */
                    limits.resetMinuteLimit();
                    limits.decreaseToRemaining();
                    limits.stunned = false;
                    return true;
                }
                else {
                    console.log("zaman aşımına kalan süre: ", (Date.now() - limits.resetTime) / 1000);
                    return false;
                }
            }
            else {
                limits.stunned = true;
                limits.resetTime = Date.now() + (limits.timeout * limits.limitedCount);
                limits.limitedCount *= 2;
                console.log("Zaman aşımı uygulandı. Kalan süre: ", (Date.now() - limits.resetTime) / 1000);
                return false;
            }
        }
        //* Dejavu 16:05-10.02.2024
    }
}