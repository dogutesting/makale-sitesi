import colors, { random } from 'colors';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS, { mode } from "crypto-js";


import { connectToDatabase } from '@/lib/mysql';

import rateLimitMiddleware from '@/lib/rate-limit-gpt';
import { LRUCache } from 'lru-cache';
import CONSTS from '@/consts.json'


//#region //* rate-limit
/* const MAX_TIMEOUT = 4 * 60 * 60 * 1000; //* 4 saat olarak ayarlandı */
 
const ipLimits = new LRUCache(CONSTS.LRU_OBJECT);
//#endregion

/* const DEFAULT_TABLE = "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler"; */

function showWithColor(color, text) {
    console.log(colors[color]("¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯"));
    console.log(colors[color](text));
    console.log(colors[color]("_________________________________________________"));    
}

let currentUrl = "";
let numberOfContents = 4;

//#region //* TOP 4
let top4 = [];
const getMostTop4 = async () => {
    let connection = null;
    try {
        connection = await connectToDatabase();
        const [rows] = await connection.execute(`
        SELECT m.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
        COUNT(DISTINCT c.clicked_user_uuid) AS clickCount
        FROM makaleler m 
        LEFT JOIN clicks c ON c.url = m.url 
        GROUP BY m.url 
        ORDER BY clickCount DESC LIMIT ?`, [numberOfContents]);
        const withoutClickCount = rows.map(item => {
            const newItem = { ...item };
            delete newItem["clickCount"];
            return newItem;
        });
        top4 = withoutClickCount;
    }
    catch(err) {
        top4 = [
            {
                url: 'en-yuksek-imdb-puanina-sahip-10-dizi',
                baslik: 'En Yüksek imdb Puanına Sahip 10 Dizi',
                resimYolu: '/images/ana_gorseller/enonlar-en-yuksek-imdb-puanina-sahip-10-dizi.png',
                paragraf: 'Televizyonun altın çağında, bazı diziler sadece ekran başında geçirilen saatleri doldurmakla kalmaz'
            },
            {
              url: 'en-yuksek-imdb-puanina-sahip-10-film',
              baslik: 'En Yüksek imdb Puanına Sahip 10 Film',
              resimYolu: '/images/ana_gorseller/enonlar-en-yuksek-imdb-puanina-sahip-10-film.png',
              paragraf: 'Sinemanın büyülü dünyasında, bazı filmler sadece eğlendirmekten öteye geçer, ruhumuza dokunur ve biz'
            },
            {
              url: 'en-iyi-10-1000-cc-naked-motosiklet',
              baslik: 'En İyi 10 1000 CC Naked Motosiklet',
              resimYolu: '/images/ana_gorseller/enonlar-en-iyi-10-1000-cc-naked-motosiklet.png',
              paragraf: '1000cc sınıfı naked motosikletler, tecrübeli motosiklet sürücülerinin ellerinde bile agresifliğini v'
            },
            {
                url: 'en-iyi-10-1000-cc-super-sport-motosiklet',
                baslik: 'En İyi 10 1000 CC Super Sport Motosiklet',
                resimYolu: '/images/ana_gorseller/enonlar-en-iyi-10-1000-cc-super-sport-motosiklet.png',
                paragraf: 'Süper spor motosikletler, mühendislik ve tasarımın zirvesini temsil eder. Bu hız canavarları'
            }
          ];
    }
    finally {
        connection && connection.end();
    }
}
const setIntervalWithFunc = () => {
    getMostTop4();
    setInterval(getMostTop4, 1000 * 60 * 60 * 24);
} 

setIntervalWithFunc();

//#endregion

export default async function handler (req, res) {
    if(req.method === 'POST') {

        /* const requestBodySizeInBytes = Buffer.byteLength(JSON.stringify(req.body), 'utf8');
        const requestDataSizeInKB = requestBodySizeInBytes / (1024);
        console.log('Request size:', requestDataSizeInKB, 'KB');
        if(requestBodySizeInBytes > 1.0) {
            res.status(500).end("çok büyük boyut")
        } */

        //ID'yi rastgele kendi tanımlayarak istek atabilir

        try {
            console.log("Burası neden anasayfanın imagelerini alıyor");

            const IsRateLimitPassed = await rateLimitMiddleware(req, res, ipLimits);
            if (!IsRateLimitPassed) {
                /* console.log("çok fazla istek atıyor."); */
                if(req.body.req === "guil") {
                    res.status(200).json({penalty: true, data: [], "sanic": "https://enonlar.com/sanic.jpg"})
                }
                if(req.body.req === "gui") {
                    res.status(200).json({penalty: true, data: top4, "sanic": "https://enonlar.com/sanic.jpg"})
                }
                else {
                    res.status(200).json({penalty: true, "sanic": "https://enonlar.com/sanic.jpg"});
                }
            }
            else {

                const jsonBody = req.body;
                /* console.log("İstek yapabilir..", jsonBody); */
                
                if(jsonBody.req === 'auk') { //* add-user-key
                    /* console.log("auk isteği yapıldı"); */
                    res.status(200).json({"uuid": await addUser(jsonBody.data.date)});
                }

                //#region //* Get user info and limitles
                if(jsonBody.req === 'gui') { //* get-user-info
                    currentUrl = jsonBody.data.currentUrl;
                    numberOfContents = jsonBody.data.isItMobile ? 2 : 4;
                    
                    //* cookie id izni verildi ise çalışsın
                    const gui_id = jsonBody.data.id;
                    if(gui_id == null) {
                        res.status(200).json({data: top4});
                    }
                    else {
                        const response = await getUserInfo(jsonBody.data.id);
                                        /* ci kaldırıldı ,jsonBody.data.ci); */
                        const responseWithoutClickCount = response.map(item => {
                            const newItem = { ...item };
                            delete newItem["clickCount"];
                            return newItem;
                        });
                        res.status(200).json({data: responseWithoutClickCount});
                    }
                }
                if(jsonBody.req === "guil") { //* get-user-info-limitless
                    currentUrl = jsonBody.data.currentUrl;

                    //* cookie id izni verildi ise çalışsın
                    const guil_id = jsonBody.data.id;
                    if(guil_id) {
                        const response = await getUserInfoLimitless(guil_id, jsonBody.data.ci);
                        res.status(200).json({data: response});
                    }
                }
                //#endregion

                //#region //* ADD CLICK OLAYLARI
                if(jsonBody.req === "middleware" && jsonBody.auth === "Dm4i5dS") {
                    res.status(200).end("ok");
                    addUserClick(jsonBody.data, "middleware");
                }
                if(jsonBody.req === "waypoint") {
                    res.status(200).end("ok");

                    if(jsonBody.type === "top-waypoint") {
                        addUserClick(jsonBody.data, "top-waypoint");
                    }
                    if(jsonBody.type === "bottom-waypoint") {
                        addUserClick(jsonBody.data, "bottom-waypoint");
                    }
                }
                //! kaldırıldı: ci |
                /* if(jsonBody.req === "cry") {
                    res.status(200).json({"cry": kriptoloji(true, jsonBody.data.ci)});
                } */
                //#endregion

                res.status(403).end();
            }
        } catch (error) {
            console.log(colors.red("hata: ", error));
            res.status(500).end();
        }
    } else {
        res.status(405).end();
    }
}

//#region //* ADD CLICK FUNCTIONS
async function addUserClick(body, type) {
    const {user, status} = body;
    
    let connection = null;
    try {
        connection = await connectToDatabase();

        //* kullanıcı var mı?
        if(!user.id || !status.pathname || !status.date) {
            return false;
        }
        else {
            const [kullanici_var_mi] = await connection.execute("SELECT user_uuid FROM users WHERE user_uuid = ?", 
            [user.id]);
            if(kullanici_var_mi.length !== 1) {
                return false;
            }
        }

        //* pathname
        let kategori;
        const [rows] = await connection.execute("SELECT kategori FROM makaleler WHERE url = ?", [status.pathname]);
        if(rows.length > 0) {
            kategori = rows[0].kategori;
        }
        /* else {
            kategori = "bos";
        } */

        await connection.execute(`INSERT INTO clicks 
        (url, time, kategori, type, clicked_user_uuid) 
        VALUES (?, ?, ?, ?, ?)`, 
        [status.pathname, status.date, kategori, type, user.id]);
       
    } catch (error) {
        console.log("hata sebebi: ", error);
    } finally {
        connection && connection.end();
    }
}
//#endregion

//#region //* handler fonksiyonları
async function addUser(date) {
    let connection;
    try {
        connection = await connectToDatabase();
        let uuid;
        do {
            uuid = uuidv4().slice(0, 13); //! iki kere üst üste aynı sayı gelme olasılığı neredeyse sıfırmış, olsun işi şansa bırakmayalım :)
            const [rows] = await connection.execute('SELECT COUNT(*) AS count FROM users WHERE user_uuid = ?', [uuid]);
            if (rows[0].count > 0) {
            uuid = null;
            }
        } while (!uuid);
        
        await connection.execute(`INSERT INTO users (user_uuid,
                                                    date) 
                                                    VALUES (?, ?)`,
                                                    [uuid,
                                                    date]
                                );
        return uuid;
   } catch (error) {
    //throw error
   } finally {
    connection && connection.end();
   }
}

/* async function getUserInfoLimitless(id, city) { */
async function getUserInfoLimitless(id) {
    //! BURASI BÜTÜN MAKALELERİ DÖNÜYOR, BURADA BİR DÜZENLEME KESİNLİKLE GEREKLİ
    //! 1000 TANE MAKALE OLSA 1000 TANE Mİ DÖNECEK? 
    let connection;
    try {
        connection = await connectToDatabase();
        const [rows] = await connection.execute(
            "SELECT kategori, COUNT(*) AS sayi " +
            "FROM clicks " +
            "WHERE clicked_user_uuid = ? AND url != '/' " +
            "GROUP BY kategori " +
            "ORDER BY sayi DESC " +
            "LIMIT 3",
            [id]
        );
        const enFazlaTiklananKategoriler = rows.map((row) => row.kategori);

        if(enFazlaTiklananKategoriler.length > 0) {
            //! IF
            const placeholders = enFazlaTiklananKategoriler.map(() => '?').join(', ');

            //kullanıcının en çok tıkladığı kategoriler
            const [mostCats] = await connection.execute(`
            SELECT c.url, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount 
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.clicked_user_uuid != ? AND m.kategori IN (${placeholders}) 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND m.url != ?
            GROUP BY c.url 
            ORDER BY clickCount DESC`, [id, ...enFazlaTiklananKategoriler, id, currentUrl]);
            
            
            const mostCatsURLs = mostCats.length === 0 ? [""] : mostCats.map(item => item.url);
            const placeholders_1 = mostCatsURLs.map(() => '?').join(', ');

            //kategori ve şehir gözetmeksizin en çok tıklananlar
            const [top_to_bot_clicks] = await connection.execute(`
            SELECT c.url, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount 
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.clicked_user_uuid != ? AND m.url NOT IN (${placeholders_1}) 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND m.url != ?
            GROUP BY c.url 
            ORDER BY clickCount DESC`, [id, ...mostCatsURLs, id, currentUrl]);

            const before_final = mostCatsURLs.concat(top_to_bot_clicks.map(item => item.url));
            const placeholders_2 = before_final.map(() => '?').join(', ');
            
            //tıklanmamış makaleler var ise en son eklenenden ilk eklenene doğru getir
            const [top_to_bot_makales] = await connection.execute(`
            SELECT url FROM makaleler 
            WHERE url NOT IN (${placeholders_2}) 
            AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND url != ? ORDER BY id DESC`, [...before_final, id, currentUrl]);

            return before_final.concat(top_to_bot_makales.map(item => item.url)).filter(item => item !== "string" && item !== "" && item !== null && item !== undefined);
        }
        else {
            //! ELSE

            const [top_to_bot_clicks] = await connection.execute(`
            SELECT c.url, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount 
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.clicked_user_uuid != ?
            AND m.url != ?
            GROUP BY c.url 
            ORDER BY clickCount DESC`, [id, currentUrl]);

            const top_to_bot_clicks_URLs = top_to_bot_clicks.length === 0 ? [""] : top_to_bot_clicks.map(item => item.url);
            const placeholders_1 = top_to_bot_clicks_URLs.map(() => '?').join(', ');

            const [top_to_bot_makales] = await connection.execute(`
            SELECT url FROM makaleler 
            WHERE url NOT IN (${placeholders_1}) 
            AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND url != ? ORDER BY id DESC`, [...top_to_bot_clicks_URLs, id, currentUrl]);
            
            return top_to_bot_clicks_URLs.concat(top_to_bot_makales.map(item => item.url)).filter(item => item !== "string" && item !== "" && item !== null && item !== undefined);
        }
    } catch (error) {
        /* throw error; */
        showWithColor("red", "!!!!!!!!!!HATA!!!!!!!!!!")
        console.log(error);
    } finally {
        connection && connection.end();
    }
}

async function getUserInfo(id) {
    let connection;
    try {
        connection = await connectToDatabase();

        const [rows] = await connection.execute(
            "SELECT kategori, COUNT(*) AS sayi " +
            "FROM clicks " +
            "WHERE clicked_user_uuid = ? AND url != ? AND kategori != 'bos' " +
            "GROUP BY kategori " +
            "ORDER BY sayi DESC " +
            "LIMIT 2",
            [id, "/"]
        );

        const enFazlaTiklananKategoriler = rows.map((row) => row.kategori);

        if(enFazlaTiklananKategoriler.length === 0) { //eğer kullanıcı yeni ise
            //console.log("buradayız1 ve id: " + id);
            return await setArticleTo(connection, null, numberOfContents);

            //! kaldırıldı: city |
            /* const cityMost = await getMostClickedFromCity(connection, null, city, id, numberOfContents);

            if(cityMost.length < numberOfContents) {
                const randomArticle = await getRandomArticle(connection, id, (numberOfContents - cityMost.length), cityMost);
                const f1 = cityMost.concat(randomArticle);
                if(f1.length < numberOfContents) {
                    return await setArticleTo(connection, f1, (numberOfContents - f1.length));
                }
                else {
                    return f1;
                }
            }
            else {
                return cityMost;
            } */

        }
        else if(enFazlaTiklananKategoriler.length === 1) { // eğer kullanıcı 1 kategoride bir şeylere bakmış ise
            //console.log("buradayız2");
            //! kaldırıldı: city |
            /* const categoryAndCity = await getMostClickedFromCity(connection, enFazlaTiklananKategoriler[0], city, id, numberOfContents);
            const nullAndCity = await getMostClickedFromCity(connection, null, city, id, (numberOfContents-categoryAndCity.length), categoryAndCity);    
            let moded = categoryAndCity.concat(nullAndCity);

            if(moded.length < numberOfContents) {
                const randomArticle = await getRandomArticle(connection, id, (numberOfContents - moded.length), moded);
                const f1 = moded.concat(randomArticle);
                if(f1.length < numberOfContents) {
                    return await setArticleTo(connection, f1, (numberOfContents - f1.length));
                }
                else {
                    return f1;
                }
            }
            else {
                return moded;
            } */
            //!---------------

            //! geri dön
            const [oneCat] = await connection.execute(`
            SELECT c.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount, m.kategori
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.clicked_user_uuid != ? AND m.kategori = ? 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND m.url != "${currentUrl}"
            GROUP BY c.url 
            ORDER BY clickCount DESC 
            LIMIT ?`, [id, enFazlaTiklananKategoriler[0], id, numberOfContents]);

            //* yukarıda sadece makaleler ile tıklananları url'lerden birleştiriyor.
            //*  eğer kullanıcının tıklamadığı veya insanların tıklamadığı aynı kategoride makaleler var ise bunları çekemiyor
            //*   bundan dolayı alt tarafa ekstra bir kod daha ekleyeceğim.

            if(oneCat.length < numberOfContents) {
                const oneCat_URLs = oneCat.length === 0 ? [""] : oneCat.map(item => item.url);
                const oneCat_placeholders = oneCat_URLs.map(() => '?').join(', ');
                const eksik = numberOfContents - oneCat.length;
                const [otherCats] = await connection.execute(`
                SELECT url, baslik, resimYolu, SUBSTRING(paragraf, 1, 100) as paragraf, kategori 
                FROM makaleler 
                WHERE kategori = ? AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?) 
                AND url != "${currentUrl}" 
                AND url NOT IN (${oneCat_placeholders})
                GROUP BY url 
                ORDER BY id DESC 
                LIMIT ?`, [enFazlaTiklananKategoriler[0], id, ...oneCat_URLs, eksik]);

                oneCat.push(...otherCats);
            }

            if(oneCat.length < numberOfContents) {
                const eksik = numberOfContents - oneCat.length;
                const gRA = await getRandomArticle(connection, id, eksik, oneCat);
                const moded = oneCat.concat(gRA);

                if(moded.length === numberOfContents) {
                    return moded;
                }
                else {
                    return await setArticleTo(connection, moded, numberOfContents);
                }
            }
            else {
                return oneCat;
            }
        }
        else {

            //! İLGİNÇ bir durum şu clickCount her kullanıcıdan her bir url için birer olarak mı sayılacak yoksa
                //! bir kullanıcı 300-cc-supersport linkine 100 kere tıkladı diğer 5 kullanıcıda birer defa tıkladı 105 olarak mı dönecek?
            //! alt taraftaki sql kodu sıfır sonuç dönüyor

            console.log(enFazlaTiklananKategoriler[0] + " - " + enFazlaTiklananKategoriler[1]);

            const [oneCat] = await connection.execute(`
            SELECT c.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount, m.kategori
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.clicked_user_uuid != ? AND m.kategori = ? 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND m.url != "${currentUrl}"
            GROUP BY c.url 
            ORDER BY clickCount DESC 
            LIMIT ?`, [id, "dizi", id, 4]);

                console.log(oneCat);

            return oneCat;


            /* SELECT c.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount, m.kategori
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.clicked_user_uuid != "ce35c224-2bb9" AND m.kategori = "motosiklet" 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = "ce35c224-2bb9")
            AND m.url != "en-iyi-10-1000-cc-naked-motosiklet"
            GROUP BY c.url 
            ORDER BY clickCount DESC 
            LIMIT 6 */

            /* AND m.kategori = "motosiklet" AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = "ce35c224-2bb9")
            AND m.url != "en-iyi-10-1000-cc-naked-motosiklet"
            GROUP BY c.url 
            ORDER BY clickCount DESC */

            console.log("kategoriler: " + enFazlaTiklananKategoriler);

            const take_n_article = numberOfContents === 2 ? 1 : 2;
            let stepNumber = 0;
            let eldekiMakaleler = [];

            while(eldekiMakaleler.length !== numberOfContents) {

                //console.log("Kategori n: " + enFazlaTiklananKategoriler[stepNumber]);

                if(stepNumber > enFazlaTiklananKategoriler.length - 1) {
                    //console.log("stepnumber: " + stepNumber + " | " + (enFazlaTiklananKategoriler.length - 1));
                    //console.log("eldeki makaleler: " + eldekiMakaleler);

                    const eksik = numberOfContents - eldekiMakaleler.length;
                    const gRA = getRandomArticle(connection, id, eksik, eldekiMakaleler);
                    const moded = eldekiMakaleler.concat(gRA);

                    if(moded.length === numberOfContents) {
                        return moded;
                    }
                    else {
                        return await setArticleTo(connection, moded, numberOfContents);
                    }
                }

                
                
                console.log("oneCat: " + oneCat);

                eldekiMakaleler.concat(oneCat);
                stepNumber++;
            }

            return eldekiMakaleler;
            
            /* const [firstCat] = await connection.execute(`
            SELECT c.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount, m.kategori
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.clicked_user_uuid != ? AND m.kategori = ? 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND m.url != "${currentUrl}"
            GROUP BY c.url 
            ORDER BY clickCount DESC 
            LIMIT ?`, [id, enFazlaTiklananKategoriler[0], id, numberOfContents / 2]);

            const firstCat_URLs = firstCat.length === 0 ? [""] : firstCat.map(item => item.url);
            const firstCat_placeholders = firstCat_URLs.map(() => '?').join(', ');
            const eksik = numberOfContents - firstCat.length;
            
            const [secondCats] = await connection.execute(`
            SELECT url, baslik, resimYolu, SUBSTRING(paragraf, 1, 100) as paragraf, kategori 
            FROM makaleler 
            WHERE kategori = ? AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?) 
            AND url != "${currentUrl}" 
            AND url NOT IN (${firstCat_placeholders})
            GROUP BY url 
            ORDER BY id DESC 
            LIMIT ?`, [enFazlaTiklananKategoriler[1], id, ...firstCat_URLs, eksik]);
            firstCat.concat(secondCats);

            if(firstCat.length < numberOfContents) {
                const firstCat_URLs = firstCat.length === 0 ? [""] : firstCat.map(item => item.url);
                const firstCat_placeholders = firstCat_URLs.map(() => '?').join(', ');
                const eksik = numberOfContents - firstCat.length;
                
                const [firstCatAgain] = await connection.execute(`
                SELECT url, baslik, resimYolu, SUBSTRING(paragraf, 1, 100) as paragraf, kategori 
                FROM makaleler 
                WHERE kategori = ? AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?) 
                AND url != "${currentUrl}" 
                AND url NOT IN (${firstCat_placeholders})
                GROUP BY url 
                ORDER BY id DESC 
                LIMIT ?`, [enFazlaTiklananKategoriler[0], id, ...firstCat_URLs, eksik]);

            }


            if(firstCat.length < numberOfContents) {
                const kalan = numberOfContents - firstCat.length;
                const gRA = await getRandomArticle(connection, id, kalan, firstCat);
                firstCat.concat(gRA);

                if(firstCat.length === numberOfContents) {
                    return firstCat;
                }
                else {
                    return await setArticleTo(connection, firstCat, numberOfContents);
                }
            }
            else {
                return firstCat;
            } */
        }

    } catch (error) {
        throw "Get user info'da hata! : " + error;
    } finally {
        connection && connection.end();
    }
}

//! kaldırıldı: city |
//bölgenin en çok tıklananları getir
/* async function getMostClickedFromCity(connection, category, city, id, num, rows=null) {
    const urls = rows == null || rows.length === 0 ? [""] : rows.map(row=>row.url);
    const placeholders = urls.map(() => '?').join(', ');

    if(category == null) {
        const [cityMost] = await connection.execute(`
            SELECT c.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount, m.kategori 
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.city = ? AND c.clicked_user_uuid != ? AND c.url NOT IN (${placeholders}) 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?) 
            AND m.url != "${currentUrl}"
            GROUP BY c.url, m.kategori  
            ORDER BY clickCount DESC 
            LIMIT ?`, [city, id, ...urls, id, num]);
        return cityMost;
    }
    else {
        const [cityMost] = await connection.execute(`
        SELECT c.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
        COUNT(DISTINCT c.clicked_user_uuid) AS clickCount, m.kategori
        FROM clicks c 
        JOIN makaleler m ON c.url = m.url 
        WHERE c.city = ? AND c.clicked_user_uuid != ? AND m.kategori = ? 
        AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
        AND m.url NOT IN (${placeholders}) 
        AND m.url != "${currentUrl}"
        GROUP BY c.url 
        ORDER BY clickCount DESC 
        LIMIT ?`, [city, id, category, id, ...urls, num]);
        return cityMost;
    }
} */

//* kullanıcının tıklamadığı rastgele makaleler getir
async function getRandomArticle(connection, id, num, rows=null) {
    const urls = rows == null || rows.length === 0 ? [""] : rows.map(row=>row.url);
    const placeholders = urls.map(() => '?').join(', ');

    const [randomRows] = await connection.execute(`
    SELECT m.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
    COUNT(DISTINCT c.clicked_user_uuid) AS clickCount
    FROM makaleler m 
    LEFT JOIN clicks c ON c.url = m.url 
    WHERE m.url NOT IN ( 
    SELECT DISTINCT url 
    FROM clicks 
    WHERE clicked_user_uuid = ?) AND m.url NOT IN (${placeholders}) 
    AND m.url != "${currentUrl}"
    GROUP BY m.url 
    ORDER BY clickCount DESC 
    LIMIT ?`, [id, ...urls, num]);
    return randomRows;
}

//* Verilen sayıya tamamla
async function setArticleTo(connection, rows, num) {
    const urls = rows === null || rows.length === 0 ? [""] : rows.map(row => row.url);
    const placeholders = urls.map(() => '?').join(', ');

    const [randomRows] = await connection.execute(`
    SELECT m.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
    COUNT(DISTINCT c.clicked_user_uuid) AS clickCount
    FROM makaleler m 
    LEFT JOIN clicks c ON c.url = m.url 
    WHERE m.url NOT IN (${placeholders}) 
    AND m.url != "${currentUrl}"
    GROUP BY m.url 
    ORDER BY clickCount DESC LIMIT ?`, [...urls, num]);
    return rows.concat(randomRows);
}

//! kaldırıldı: city | 
/* async function setRangeBetweenRandomArticle(connection, kategori1, kategori2, id, bitir) {

    if(kategori1.length === kategori2.length) {
        const kat1 = await getMostClickedFromCity(connection, kategori1, city, id, 2);
        const kat2 = await getMostClickedFromCity(connection, kategori2, city, id, 2);
        const kat12 = kat1.concat(kat2);
        
        if(kat12.length < numberOfContents) {
            const randomArticles = await getRandomArticle(connection, id, (numberOfContents - kat12.length), kat12);
            const grawc = kat12.concat(randomArticles);

            if(grawc.length === numberOfContents) {
                return grawc;
            }
            else {
                return await setArticleTo(connection, grawc, (numberOfContents - grawc.length));
            }
        }
        else {
            return kat12;
        }
    }
    else {
        const kat1 = await getMostClickedFromCity(connection, kategori1, city, id, 3);
        const kat2 = await getMostClickedFromCity(connection, kategori2, city, id, 1);
        const kat12 = kat1.concat(kat2);

        if(kat12.length < numberOfContents) {
            const randomArticles = await getRandomArticle(connection, id, (numberOfContents - kat12.length), kat12);
            const grawc = kat12.concat(randomArticles);

            if(grawc.length === numberOfContents) {
                return grawc;
            }
            else {
                return await setArticleTo(connection, grawc, (numberOfContents - grawc.length));
            }
        }
        else {
            return kat12;
        }
    }
} */
//#endregion