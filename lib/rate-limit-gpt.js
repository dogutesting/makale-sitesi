const DEFAULT_TIMEOUT = 10000; //! BURASI DEĞİŞTİRİLECEK Mİ?

import CONSTS from '../consts.json'; //npm run build sırasında oluşturuluyor ve sonradan çalışıyor.

export default async function rateLimitMiddleware(req, res, ipLimits, minuteLimit = 3, dailyLimit = 3) {
    
    //* All Request Types
    //*----------------------
    //* auk
    //* gui
    //* guil
    //* middleware -> zaten server tarafında istek atılıyor
    //* top-waypoint
    //* bottom-waypoint

    const ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const request_type = req.body.req;
    const ip_and_req = ip_address + "-" + request_type;
    
    //console.log("ip kontrol >>> ", ip_and_req);

    switch (request_type) {
        case "middleware": 
            return true; //! burası bu sayfadan çıkartıyor mu acaba?
        case "auk":
            minuteLimit = 30; //* SABİT
            dailyLimit = 30; //* SABİT
            break;
        case "gui":
            minuteLimit = 10;
            dailyLimit = CONSTS.NUMBER_OF_PAGES * 5; //! *= 5
            break;
        case "guil":
            minuteLimit = 5;
            dailyLimit = CONSTS.NUMBER_OF_PAGES * 2; //! makale sayısı ile bağlantılı *=2
            break;
        case "waypoint": 
            minuteLimit = 12;
            dailyLimit = CONSTS.NUMBER_OF_PAGES * 3; //! makale sayısı ile bağlantılı *= 3
            break;
        /* case "en10": 
            minuteLimit = 100;
            dailyLimit = 1500;
            break; */
    }
    

    // İp adresine göre kota bilgilerini al
    /* let limits = ipLimits.get(ip_address); */
    let limits = ipLimits.get(ip_and_req);
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
            return this.remainingInDaily <= 0 && false;
        }
      };
      /* ipLimits.set(ip_address, limits); */
      ipLimits.set(ip_and_req, limits);
      limits.decreaseToRemaining();
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