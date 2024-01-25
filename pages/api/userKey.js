import colors, { random } from 'colors';
import { connectToDatabase } from '@/lib/mysql';
import {v4 as uuidv4 } from 'uuid';

/* const DEFAULT_TABLE = "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler"; */
let currentUrl = "";

function showWithColor(color, text) {
    console.log(colors[color]("¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯"));
    console.log(colors[color](text));
    console.log(colors[color]("_________________________________________________"));    
  }

export default async function handler (req, res) {
    if(req.method === 'POST') {
        try {
            const jsonBody = req.body;
            if(jsonBody.req === 'auk') { //* add-user-key
                res.status(200).json({"uuid": await addUser(jsonBody.data.geo,
                                                            jsonBody.data.date)});
            }
            if(jsonBody.req === 'auc') { //* add-user-click
               await addUserClick(jsonBody.data.url,
                                  jsonBody.data.date,
                                  jsonBody.data.type,
                                  jsonBody.data.city,
                                  jsonBody.data.uuid);
                res.status(200).end();
            }
            if(jsonBody.req === 'gui') { //* get-user-info
                currentUrl = jsonBody.data.currentUrl;
                const response = await getUserInfo(jsonBody.data.id,
                                                   jsonBody.data.city);
                res.status(200).json({data: response});
            }
            if(jsonBody.req === "guil") { //* get-user-info-limitless
                currentUrl = jsonBody.data.currentUrl;
                const response = await getUserInfoLimitless(jsonBody.data.id, jsonBody.data.city);
                res.status(200).json({data: response});
            }
        } catch (error) {
            console.log(colors.red("hata: ", error));
            res.status(500).end();
        }
    } else {
        res.status(405).end();
    }
}

async function addUser(geo, date) {
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
                                                    city,
                                                    country,
                                                    region,
                                                    lat,
                                                    lon,
                                                    date) 
                                                    VALUES (?, ?, ?, ?, ?, ?, ?)`,
                                                    [uuid,
                                                    geo.city,
                                                    geo.country,
                                                    geo.region,
                                                    geo.lat,
                                                    geo.lon,
                                                    date]
                                );
        return uuid;
   } catch (error) {
    /* throw error */
   } finally {
    connection && connection.end();
   }
}

async function addUserClick(url, time, type, city, uuid) {
    let connection;
     try {
        connection = await connectToDatabase();
        let kategori;
        if(url !== '') {
            const [rows] = await connection.execute("SELECT kategori FROM makaleler WHERE url = ?", [url]);
            if(rows && rows.length > 0) {
                kategori = rows[0].kategori;
            }
            else {
                kategori = "bos";
            }
        }
        /* else {
            kategori = "/";
            url = "/";
        } */
        await connection.execute(`INSERT INTO clicks 
        (url, time, kategori, type, city, clicked_user_uuid) 
        VALUES (?, ?, ?, ?, ?, ?)`, 
        [url, time, kategori, type, city, uuid]);
    } catch (error) {
     //console.log("error: ", error);
    } finally {
     connection && connection.end();
    }
 }

async function getUserInfoLimitless(id, city) { 
    let connection;
    try {
        connection= await connectToDatabase();
        const [rows] = await connection.execute(
            "SELECT kategori, COUNT(*) AS sayi " +
            "FROM clicks " +
            "WHERE clicked_user_uuid = ? AND url != ? " +
            "GROUP BY kategori " +
            "ORDER BY sayi DESC " +
            "LIMIT 3",
            [id, "/"]
        );
        const enFazlaTiklananKategoriler = rows.map((row) => row.kategori);

        if(enFazlaTiklananKategoriler.length > 0) {
            //! IF
            const placeholders = enFazlaTiklananKategoriler.map(() => '?').join(', ');

            //kullanıcının en çok tıkladığı kategorilerde şehrin en çok tıklananları
            const [cityMost] = await connection.execute(`
            SELECT c.url, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount 
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.city = ? AND c.clicked_user_uuid != ? AND m.kategori IN (${placeholders}) 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND m.url != ?
            GROUP BY c.url 
            ORDER BY clickCount DESC`, [city, id, ...enFazlaTiklananKategoriler, id, currentUrl]);

            const cityMostUrls = cityMost.length === 0 ? [""] : cityMost.map(item => item.url);
            const placeholders_2 = cityMostUrls.map(() => '?').join(', ');

            //kategori gözetmeksizin şehrin en çok tıklananları
            const [cityMostWithoutCategory] = await connection.execute(`
            SELECT c.url, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount 
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.city = ? AND c.clicked_user_uuid != ? AND m.url NOT IN (${placeholders_2}) 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND m.url != ?
            GROUP BY c.url 
            ORDER BY clickCount DESC`, [city, id, ...cityMostUrls, id, currentUrl]);
            
            
            const cityMostAndWithoutCats = cityMostUrls.concat(cityMostWithoutCategory.map(item => item.url));
            const placeholders_3 = cityMostAndWithoutCats.map(() => '?').join(', ');

            //kategori ve şehir gözetmeksizin en çok tıklananlar
            const [top_to_bot_clicks] = await connection.execute(`
            SELECT c.url, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount 
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.clicked_user_uuid != ? AND m.url NOT IN (${placeholders_3}) 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND m.url != ?
            GROUP BY c.url 
            ORDER BY clickCount DESC`, [id, ...cityMostAndWithoutCats, id, currentUrl]);

            const before_final = cityMostAndWithoutCats.concat(top_to_bot_clicks.map(item => item.url));
            const placeholders_4 = before_final.map(() => '?').join(', ');
            
            //tıklanmamış makaleler var ise en son eklenenden ilk eklenene doğru getir
            const [top_to_bot_makales] = await connection.execute(`
            SELECT url FROM makaleler 
            WHERE url NOT IN (${placeholders_4}) 
            AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND url != ? ORDER BY id DESC`, [...before_final, id, currentUrl]);

            /* return before_final.concat(top_to_bot_makales.map(item => item.url)).filter(item => typeof item !== "string" && item !== null && item !== undefined); */
            return before_final.concat(top_to_bot_makales.map(item => item.url));
        }
        else {
            //! ELSE
            const [cityMost] = await connection.execute(`
            SELECT c.url, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount 
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.city = ? AND c.clicked_user_uuid != ? 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND m.url != ?
            GROUP BY c.url 
            ORDER BY clickCount DESC`, [city, id, id, currentUrl]);

            const cityMostUrls = cityMost.length === 0 ? [""] : cityMost.map(item => item.url);
            const placeholders = cityMostUrls.map(() => '?').join(', ');

            const [top_to_bot_clicks] = await connection.execute(`
            SELECT c.url, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount 
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.clicked_user_uuid != ? AND m.url NOT IN (${placeholders}) 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND m.url != ?
            GROUP BY c.url 
            ORDER BY clickCount DESC`, [id, ...cityMostUrls, id, currentUrl]);

            const before_final = cityMost.concat(top_to_bot_clicks.map(item => item.url));
            const placeholders_2 = before_final.map(() => '?').join(', ');

            const [top_to_bot_makales] = await connection.execute(`
            SELECT url FROM makaleler 
            WHERE url NOT IN (${placeholders_2}) 
            AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
            AND url != ? ORDER BY id DESC`, [...before_final, id, currentUrl]);

            /* return before_final.concat(top_to_bot_makales).filter(item => typeof item !== "string" && item !== null && item !== undefined); */
            return before_final.concat(top_to_bot_makales.map(item => item.url));
        }
    } catch (error) {
        /* throw error; */
        console.log("error", error);
    } finally {
        connection && connection.end();
    }
}

async function getUserInfo(id, city) {
    let connection;
    try {
        connection = await connectToDatabase();

        const [rows] = await connection.execute(
            "SELECT kategori, COUNT(*) AS sayi " +
            "FROM clicks " +
            "WHERE clicked_user_uuid = ? AND url != ? " +
            "GROUP BY kategori " +
            "ORDER BY sayi DESC " +
            "LIMIT 2",
            [id, "/"]
        );

        const enFazlaTiklananKategoriler = rows.map((row) => row.kategori);

        if(enFazlaTiklananKategoriler.length === 0) { //eğer kullanıcı yeni ise

            const cityMost = await getMostClickedFromCity(connection, null, city, id, 4);

            if(cityMost.length < 4) {
                const randomArticle = await getRandomArticle(connection, id, (4 - cityMost.length), cityMost);
                const f1 = cityMost.concat(randomArticle);
                if(f1.length < 4) {
                    return await setArticleTo4(connection, f1, (4 - f1.length));
                }
                else {
                    return f1;
                }
            }
            else {
                return cityMost;
            }
        }
        else if(enFazlaTiklananKategoriler.length === 1) { // eğer kullanıcı 1 kategoride bir şeylere bakmış ise
            const categoryAndCity = await getMostClickedFromCity(connection, enFazlaTiklananKategoriler[0], city, id, 4);
            const nullAndCity = await getMostClickedFromCity(connection, null, city, id, (4-categoryAndCity.length), categoryAndCity);    
            let moded = categoryAndCity.concat(nullAndCity);

            if(moded.length < 4) {
                const randomArticle = await getRandomArticle(connection, id, (4 - moded.length), moded);
                const f1 = moded.concat(randomArticle);
                if(f1.length < 4) {
                    return await setArticleTo4(connection, f1, (4 - f1.length));
                }
                else {
                    return f1;
                }
            }
            else {
                return moded;
            }
        }
        else {
            return await setRangeBetweenRandomArticle(connection, enFazlaTiklananKategoriler[0], enFazlaTiklananKategoriler[1], city, id)
        }

    } catch (error) {
        throw error;
    } finally {
        connection && connection.end();
    }
}

//bölgenin en çok tıklananları getir
async function getMostClickedFromCity(connection, category, city, id, num, rows=null) {
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
}

//rastgele makale getir
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

//!hata
async function setArticleTo4(connection, rows, num) {
    const urls = null || rows.length === 0 ? [""] : rows.map(row => row.url);
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

async function setRangeBetweenRandomArticle(connection, kategori1, kategori2, city, id) {

    if(kategori1.length === kategori2.length) {
        const kat1 = await getMostClickedFromCity(connection, kategori1, city, id, 2);
        const kat2 = await getMostClickedFromCity(connection, kategori2, city, id, 2);

        const kat12 = kat1.concat(kat2);
        if(kat12.length < 4) {
            const randomArticles = await getRandomArticle(connection, id, (4 - kat12.length), kat12);
            const grawc = kat12.concat(randomArticles);

            if(grawc.length === 4) {
                return grawc;
            }
            else {
                return await setArticleTo4(connection, grawc, (4 - grawc.length));
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
        /* const kat3 = await getMostClickedFromCity(connection, null, city, id, 2, kat12);
        const kat123 = kat12.concat(kat3); */

        if(kat12.length < 4) {
            const randomArticles = await getRandomArticle(connection, id, (4 - kat12.length), kat12);
            const grawc = kat12.concat(randomArticles);

            if(grawc.length === 4) {
                return grawc;
            }
            else {
                return await setArticleTo4(connection, grawc, (4 - grawc.length));
            }
        }
        else {
            return kat12;
        }
    }
}