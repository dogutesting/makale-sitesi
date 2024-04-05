/* import colors, { random } from 'colors'; */
import { v4 as uuidv4 } from 'uuid';
/* import CryptoJS, { mode } from "crypto-js"; */


import { connectToDatabase } from '@/lib/mysql';

import rateLimitMiddleware from '@/lib/rate-limit-gpt';
import { LRUCache } from 'lru-cache';
import CONSTS from '@/consts.json'


//#region //* rate-limit
/* const MAX_TIMEOUT = 4 * 60 * 60 * 1000; //* 4 saat olarak ayarlandı */
 
const ipLimits = new LRUCache(CONSTS.LRU_OBJECT);
//#endregion

/* const DEFAULT_TABLE = "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler"; */

/* function showWithColor(color, text) {
    console.log(colors[color]("¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯"));
    console.log(colors[color](text));
    console.log(colors[color]("_________________________________________________"));    
} */

let currentUrl = "";
let numberOfContents = 4;

//#region //* TOP 4
let top4 = [];
const getMostTop4 = async () => {
    let connection = null;
    try {
        //! henüz tıklanma olmadığı için alt taraftaki kod doğru çalışmayacak.
        connection = await connectToDatabase();
        const [rows] = await connection.execute(`
        SELECT m.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
        COUNT(DISTINCT c.clicked_user_uuid) AS clickCount
        FROM makaleler m 
        INNER JOIN clicks c ON c.url = m.url 
        GROUP BY m.url 
        ORDER BY clickCount DESC LIMIT ?`, [numberOfContents]);
        const withoutClickCount = rows.map(item => {
            const newItem = { ...item };
            delete newItem["clickCount"];
            return newItem;
        });

        //top4 = withoutClickCount;
        //connection = await connectToDatabase();

        if(rows.length < numberOfContents) {
            const [rows2] = await connection.execute(`
            SELECT url, baslik, resimYolu, SUBSTRING(paragraf, 1, 100) as paragraf, 
            FROM makaleler  
            ORDER BY id DESC LIMIT ?`, [(numberOfContents - rows.length)]);
            const withoutClickCount2 = rows2.map(item => {
                const newItem = { ...item };
                delete newItem["clickCount"];
                return newItem;
            });

            top4 = withoutClickCount.push(...withoutClickCount2);
        }
        else {
            top4 = withoutClickCount;
        }
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
            
            //const IsRateLimitPassed = await rateLimitMiddleware(req, res, ipLimits);
            //if (!IsRateLimitPassed) {

            if (req.body.req !== "middleware" && await rateLimitMiddleware(req, res, ipLimits) === false) {
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
                        if(!jsonBody.data.id && top4.length !== 0) {
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
            /* console.log(colors.red("hata: ", error)); */
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
        else {
            return false;
        }

        //* 10 dakika içerisinde aynı url'ye ekleme yaptı mı?
        const [row] = await connection.execute("SELECT time FROM clicks WHERE clicked_user_uuid = ? AND url = ? ORDER BY id DESC LIMIT 1", [user.id, status.pathname]);
        if(row.length !== 0) {
            const dateString = row[0].time;
            const [saatDakika, gunAyYil] = dateString.split('-');
            const [saat, dakika] = saatDakika.split(':');
            const [gun, ay, yil] = gunAyYil.split('.');
    
            const dateObject = new Date(parseInt(yil), parseInt(ay) - 1, parseInt(gun), parseInt(saat), parseInt(dakika));
            const now = new Date();
            const differenceInMinutes = (now.getTime() - dateObject.getTime()) / (1000 * 60);
            if(differenceInMinutes <= 60) {
                return false;
            }
        }
        //* -----------------------------------------------------------------------------------------------------------------------------------
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

async function limitlessIDless() {
    const [current_url_kategori] = await connection.execute("SELECT kategori FROM makaleler WHERE url = ?", [currentUrl]);
    const max = 10;
    
    const [diger_insanlarin_tikladiklari] = await connection.execute(`
    SELECT m.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
    COUNT(DISTINCT c.clicked_user_uuid) AS clickCount
    FROM makaleler m 
    INNER JOIN clicks c ON c.url = m.url 
    WHERE m.url != ?  
    AND m.kategori = ? 
    GROUP BY m.url 
    ORDER BY clickCount DESC 
    LIMIT ?`, [currentUrl, current_url_kategori[0], max])

    
    if(diger_insanlarin_tikladiklari.length === max) {
        return diger_insanlarin_tikladiklari;
    }
    else {
        const diger_insanlarin_tikladiklari_URLs = diger_insanlarin_tikladiklari.length === 0 ? [""] : diger_insanlarin_tikladiklari.map(item => item.url);
        const placeholders_1 = diger_insanlarin_tikladiklari_URLs.map(() => '?').join(', ');

        const [kategori_ile_tamamla] = await connection.execute(`
        SELECT url, baslik, resimYolu, SUBSTRING(paragraf, 1, 100) as paragraf
        FROM makaleler 
        WHERE url NOT IN (${placeholders_1}) AND 
        url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
        AND url != ?  
        AND kategori = ?
        ORDER BY id DESC LIMIT ?`, [currentUrl, current_url_kategori, (max - diger_insanlarin_tikladiklari.length)]);
        diger_insanlarin_tikladiklari.push(...kategori_ile_tamamla);
        return diger_insanlarin_tikladiklari.filter(item => item !== "string" && item !== "" && item !== null && item !== undefined);
    }
}

/* async function getUserInfoLimitless(id, city) { */
async function getUserInfoLimitless(id) {
    //! BURASI BÜTÜN MAKALELERİ DÖNÜYOR, BURADA BİR DÜZENLEME KESİNLİKLE GEREKLİ
    //! 1000 TANE MAKALE OLSA 1000 TANE Mİ DÖNECEK? 

    if(!id) {
        return await limitlessIDless();
    }

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
        return await limitlessIDless();
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
            "WHERE clicked_user_uuid = ? " +
            "GROUP BY kategori " +
            "ORDER BY sayi DESC ",
            [id]
        );

        const enFazlaTiklananKategoriler = rows.map((row) => row.kategori);
        
        const eldekiMakaleler = [];

        if(enFazlaTiklananKategoriler.length === 0) { //eğer kullanıcı yeni ise
            /* console.log("buradayız1 ve id: " + id); */

            const gca = getClickedArticles(connection, id, numberOfContents, null);
            if(gca.length < numberOfContents) {
                const sat = await setArticleTo(connection, gca, (numberOfContents - gca.length));
                gca.push(...sat);
            }
            return gca;
        }
        else if(enFazlaTiklananKategoriler.length === 1) { // eğer kullanıcı 1 kategoride bir şeylere bakmış ise
            /* console.log("buradayız 2"); */

            const oneCat = await getClickedArticlesWithCategorie(connection, id, numberOfContents, null, enFazlaTiklananKategoriler[0]);
            eldekiMakaleler.push(...oneCat);

            if(eldekiMakaleler.length < numberOfContents) {
                const sawct = await setArticleWithCategoriTo(connection, id, eldekiMakaleler, enFazlaTiklananKategoriler[0], (numberOfContents - eldekiMakaleler.length)); 
                eldekiMakaleler.push(...sawct);

                if( eldekiMakaleler.length < numberOfContents) {
                    const gca = await getClickedArticles(connection, id, (numberOfContents - eldekiMakaleler.length), eldekiMakaleler);
                    eldekiMakaleler.push(...gca);
                    if(eldekiMakaleler.length < numberOfContents) {
                        const kesinDoldurur = await setArticleTo(connection, eldekiMakaleler, (numberOfContents - eldekiMakaleler.length));
                        eldekiMakaleler.push(...kesinDoldurur);
                    }
                }
            }
            return eldekiMakaleler;
        }
        else {
            /* console.log("buradayız 3"); */

            for(var i = 0; i < enFazlaTiklananKategoriler.length; i++) {
                if(eldekiMakaleler.length === numberOfContents) {
                    return eldekiMakaleler;
                }
                const kategori = enFazlaTiklananKategoriler[i];
                const gcawc = await getClickedArticlesWithCategorie(connection, id, numberOfContents / 2, null, kategori);
                eldekiMakaleler.push(...gcawc);
            }

            if(eldekiMakaleler.length === numberOfContents) {
                return eldekiMakaleler;
            }

            const toplam_eksik = numberOfContents - eldekiMakaleler.length;
            let eksik = toplam_eksik;
            if(toplam_eksik === 4 || toplam_eksik === 2) {
                eksik = toplam_eksik / 2;
            }

            for(var i = 0; i < enFazlaTiklananKategoriler.length; i++) {
                if(eldekiMakaleler.length === numberOfContents) {
                    return eldekiMakaleler;
                }
                const kategori = enFazlaTiklananKategoriler[i];
                const sawct = await setArticleWithCategoriTo(connection, id, eldekiMakaleler, kategori, eksik);
                eldekiMakaleler.push(...sawct);
            }

            if(eldekiMakaleler.length === numberOfContents) {
                return eldekiMakaleler;
            }

            for(var i = 0; i < enFazlaTiklananKategoriler.length; i++) {
                if(eldekiMakaleler.length === numberOfContents) {
                    return eldekiMakaleler;
                }
                const kategori = enFazlaTiklananKategoriler[i];
                const sawct = await setArticleWithCategoriTo(connection, id, eldekiMakaleler, kategori, (numberOfContents - eldekiMakaleler.length));
                eldekiMakaleler.push(...sawct);
            }

            if(eldekiMakaleler.length === numberOfContents) {
                return eldekiMakaleler;
            }

            const gca = await getClickedArticles(connection, id, (numberOfContents - eldekiMakaleler.length));
            eldekiMakaleler.push(...gca);

            if(eldekiMakaleler.length === numberOfContents) {
                return eldekiMakaleler;
            }

            const sao = setArticleTo(connection, eldekiMakaleler, (numberOfContents - eldekiMakaleler.length));
            eldekiMakaleler.push(...sao);
            return eldekiMakaleler;

        }

    } catch (error) {
        return top4;
        //throw "Get user info'da hata! : " + error;
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

//* diğer insanların tıkladığı aynı kategorideki makaleleri getir //1 V
async function getClickedArticlesWithCategorie(connection, id, num, rows, category) {
    const urls = rows == null || rows.length === 0 ? [""] : rows.map(row=>row.url);
    const placeholders = urls.map(() => '?').join(', ');

    const [randomRows] = await connection.execute(`
    SELECT m.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
    COUNT(DISTINCT c.clicked_user_uuid) AS clickCount
    FROM makaleler m 
    INNER JOIN clicks c ON c.url = m.url 
    WHERE m.url NOT IN ( 
    SELECT DISTINCT url 
    FROM clicks 
    WHERE clicked_user_uuid = ?) AND m.url NOT IN (${placeholders}) 
    AND m.url != ?  
    AND m.kategori = ? 
    GROUP BY m.url 
    ORDER BY clickCount DESC 
    LIMIT ?`, [id, ...urls, currentUrl, category, num]);

    return randomRows;
}

//* verilen sayıya KATEGORİ ile tamamla //2 V
async function setArticleWithCategoriTo(connection, id, rows, category, num) {
    const urls = rows === null || rows.length === 0 ? [""] : rows.map(row => row.url);
    const placeholders = urls.map(() => '?').join(', ');

    const [randomRows] = await connection.execute(`
    SELECT url, baslik, resimYolu, SUBSTRING(paragraf, 1, 100) as paragraf
    FROM makaleler 
    WHERE url NOT IN (${placeholders}) AND 
    url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
    AND url != ?  
    AND kategori = ?
    ORDER BY id DESC LIMIT ?`, [...urls, id, currentUrl, category, num]);
    
    return randomRows;
}

//* kullanıcının tıklamadığı ama diğer insanların tıkladığı kategorisiz makaleleri getir //3 V
async function getClickedArticles(connection, id, num, rows) {
    const urls = rows == null || rows.length === 0 ? [""] : rows.map(row=>row.url);
    const placeholders = urls.map(() => '?').join(', ');

    const [randomRows] = await connection.execute(`
    SELECT m.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
    COUNT(DISTINCT c.clicked_user_uuid) AS clickCount
    FROM makaleler m 
    INNER JOIN clicks c ON c.url = m.url 
    WHERE m.url NOT IN ( 
    SELECT DISTINCT url 
    FROM clicks 
    WHERE clicked_user_uuid = ?) AND m.url NOT IN (${placeholders}) 
    AND m.url != ?
    GROUP BY m.url 
    ORDER BY clickCount DESC 
    LIMIT ?`, [id, ...urls, currentUrl, num]);
    
    return randomRows;
}

//* Verilen sayıya KATEGORİ olmadan tamamla //4 V
async function setArticleTo(connection, rows, num) {
    const urls = rows === null || rows.length === 0 ? [""] : rows.map(row => row.url);
    const placeholders = urls.map(() => '?').join(', ');

    const [randomRows] = await connection.execute(`
    SELECT url, baslik, resimYolu, SUBSTRING(paragraf, 1, 100) as paragraf
    FROM makaleler 
    WHERE url NOT IN (${placeholders}) 
    AND url != ?
    ORDER BY id DESC LIMIT ?`, [...urls, currentUrl, num]);

    return randomRows;
}