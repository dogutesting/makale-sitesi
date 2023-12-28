import colors, { random } from 'colors';
import { connectToDatabase } from '@/lib/mysql';
import {v4 as uuidv4 } from 'uuid';

const DEFAULT_TABLE = "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler";
let currentUrl = "";

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
        } catch (error) {
            console.log(colors.green("Beklenmedik hata: ", error));
            res.status(500).json({ error: 'Beklenmedik hata, kesinlikle beklemiyorduk.'});
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
                kategori = "mumkundegil!";
            }
        }
        else {
            kategori = "/";
            url = "/";
        }
        //console.log(colors.bgGreen("click: "), colors.brightGreen(url, time, kategori, type, city, uuid));
        await connection.execute(`INSERT INTO clicks 
        (url, time, kategori, type, city, clicked_user_uuid) 
        VALUES (?, ?, ?, ?, ?, ?)`, 
        [url, time, kategori, type, city, uuid]);
     //return true;
    } catch (error) {
     //console.log("error: ", error);
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

        //* geoLocation eklediğimiz için bu kısımda random yerine o bölgede en çok tıklanan
            //* içeriklerden rastgele vereceğiz.
        //! Eğer tıklanmamışsa o zaman RANDOM verilecek

        const enFazlaTiklananKategoriler = rows.map((row) => row.kategori);

        if(enFazlaTiklananKategoriler.length === 0) { //eğer kullanıcı yeni ise

            const cityMost = await getMostClickedFromCity(connection, null, city, id, 6);
            if(cityMost.length < 6) {
                const randomArticle = await getRandomArticle(connection, id, city, (6 - cityMost.length), cityMost);
                const f1 = cityMost.concat(randomArticle);
                if(f1.length < 6) {
                    return await setArticleTo6(connection, f1, (6 - f1.length));
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
            const nullAndCity = await getMostClickedFromCity(connection, null, city, id, (6-categoryAndCity.length), categoryAndCity);    
            let moded = categoryAndCity.concat(nullAndCity);

            if(moded.length < 6) {
                //return await getRandomArticle(connection, id, (6 - moded.length), moded);
                const randomArticle = await getRandomArticle(connection, id, (6 - moded.length), moded);
                const f1 = moded.concat(randomArticle);
                console.log("urls-f1: ", f1);
                if(f1.length < 6) {
                    console.log("gönderiliyor 2");
                    return await setArticleTo6(connection, f1, (6 - f1.length));
                }
                else {
                    console.log("gönderiliyor");
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


//!!const kat1 = await getMostClickedFromCity(connection, kategori1, city, id, 3);
//bölgenin en çok tıklananları getir
async function getMostClickedFromCity(connection, category, city, id, num, rows=null) {

    //!CTRL + F ile seçili olan
    //! AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicke
    //! burada bir yerde hata var. En son şunu ekledim
    //! AND m.url != "${currentUrl}"

    const urls = rows == null ? [""] : rows.map(row=>row.url);
    const placeholders = urls.map(() => '?').join(', ');

    if(category == null) {
        const [cityMost] = await connection.execute(`
            SELECT c.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
            COUNT(DISTINCT c.clicked_user_uuid) AS clickCount, m.kategori 
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.url != ? AND c.city = ? AND c.clicked_user_uuid != ? AND c.url NOT IN (${placeholders}) 
            AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?) 
            AND m.url != "${currentUrl}"
            GROUP BY c.url, m.kategori  
            ORDER BY clickCount DESC 
            LIMIT ?`, ["/", city, id, ...urls, id, num]);
        return cityMost;
    }
    else {
        const [cityMost] = await connection.execute(`
        SELECT c.url, m.baslik, m.resimYolu, SUBSTRING(m.paragraf, 1, 100) as paragraf, 
        COUNT(DISTINCT c.clicked_user_uuid) AS clickCount, m.kategori
        FROM clicks c 
        JOIN makaleler m ON c.url = m.url 
        WHERE c.url != ? AND c.city = ? AND c.clicked_user_uuid != ? AND m.kategori = ? 
        AND m.url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?)
        AND m.url NOT IN (${placeholders}) 
        AND m.url != "${currentUrl}"
        GROUP BY c.url 
        ORDER BY clickCount DESC 
        LIMIT ?`, ["/", city, id, category, id, ...urls, num]);
        return cityMost;
    }
}

//rastgele makale getir
async function getRandomArticle(connection, id, num, rows=null) {
    const urls = rows == null ? [""] : rows.map(row=>row.url);
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

async function setArticleTo6(connection, rows, num) {
    const urls = rows.map(row => row.url);
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

    console.log("helloworld!");

    if(kategori1.length === kategori2.length) {
        const kat1 = await getMostClickedFromCity(connection, kategori1, city, id, 3);
        const kat2 = await getMostClickedFromCity(connection, kategori2, city, id, 3);

        const kat12 = kat1.concat(kat2);
        if(kat12.length < 6) {
            const randomArticles = await getRandomArticle(connection, id, (6 - kat12.length), kat12);
            const grawc = kat12.concat(randomArticles);

            if(grawc.length === 6) {
                return grawc;
            }
            else {
                return await setArticleTo6(connection, grawc, (6 - grawc.length));
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
        const kat3 = await getMostClickedFromCity(connection, null, city, id, 2, kat12);
        const kat123 = kat12.concat(kat3);

        if(kat123.length < 6) {
            const randomArticles = await getRandomArticle(connection, id, (6 - kat123.length), kat123);
            const grawc = kat123.concat(randomArticles);

            if(grawc.length === 6) {
                return grawc;
            }
            else {
                return await setArticleTo6(connection, grawc, (6 - grawc.length));
            }
        }
        else {
            return kat123;
        }
    }
}