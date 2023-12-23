import colors, { random } from 'colors';
import { connectToDatabase } from '@/lib/mysql';
import {v4 as uuidv4 } from 'uuid';

const DEFAULT_TABLE = "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler";

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
                
                /* const response = await getUserInfo(jsonBody.data.id,
                                                   jsonBody.data.city)
                res.status(200).json({data: response}); */

                const arr = await contest(jsonBody.data.id, jsonBody.data.city);
                res.status(200).json({data: arr});
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

 async function contest(id, city) {
    let connection = await connectToDatabase();
    const cityMost = await getMostClickedFromCity(connection, null, city, id, 6);
    /* const cityMost = await getMostClickedFromCity(connection, null, city, id, 6);
    return cityMost;
    
    if(cityMost.length < 6) {
                return getRandomArticle(connection, id, city, (6 - cityMost.length), cityMost);
            }
            else {
                return cityMost;
            } */
    //const articles = await getRandomArticle(connection, id, 6, cityMost);
    //console.log(articles);
    return "hey";
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
            const cityMost = getMostClickedFromCity(connection, null, city, id, 6);
            if(cityMost.length < 6) {
                return getRandomArticle(connection, id, city, (6 - cityMost.length), cityMost);
            }
            else {
                return cityMost;
            }
        }
        else if(enFazlaTiklananKategoriler.length === 1) { // eğer kullanıcı 1 kategoride bir şeylere bakmış ise

            const createMode = getMostClickedFromCity(connection, enFazlaTiklananKategoriler[0], city, id, 4);
            const mode1 = getMostClickedFromCity(connection, null, city, id, 2, cityMostWithCategory);

            const toplamSayi = createMode.length + mode1.length;
            let moded = createMode.concat(mode1);
            if(toplamSayi < 6) {
                return getRandomArticle(connection, id, (6 - toplamSayi), moded);
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
    if(category == null) {
        const urls = rows == null ? [] : rows.map(row=>row.url);
        const [cityMost] = await connection.execute(`
            SELECT c.url, COUNT(DISTINCT c.clicked_user_uuid) AS clickCount, m.kategori 
            FROM clicks c 
            JOIN makaleler m ON c.url = m.url 
            WHERE c.url != ? AND c.city = ? AND c.clicked_user_uuid != ? AND c.url NOT IN (?) 
            GROUP BY c.url, m.kategori 
            ORDER BY clickCount DESC 
            LIMIT ?`, ["/", city, id, urls, num]);
        return cityMost;
    }
    else {
        const [cityMost] = await connection.execute(`
        SELECT c.url, COUNT(DISTINCT c.clicked_user_uuid) AS clickCount, m.kategori 
        FROM clicks c 
        JOIN makaleler m ON c.url = m.url 
        WHERE c.url != ? AND c.city = ? AND c.clicked_user_uuid != ? AND m.kategori = ? 
        GROUP BY c.url, m.kategori 
        ORDER BY clickCount DESC 
        LIMIT ?`, ["/", city, id, category, num]);
        return cityMost;
    }
}

//rastgele makale getir
async function getRandomArticle(connection, id, num, rows=null) {
    //!hata var
    const a_urls = rows === null ? [""] : rows.map(row => row.url);
    //console.log("a_urls type: ", typeof(a_urls), " value: ", a_urls);
    /* const [randomRows] = await connection.execute(`
    SELECT m.url, m.baslik, m.resimYolu, m.eklenmeTarihi, m.okunmaSuresi, m.kategori, m.paragraf, 
    COUNT(DISTINCT c.clicked_user_uuid) AS clickCount 
    FROM makaleler m 
    LEFT JOIN clicks c ON c.url = m.url 
    WHERE m.url NOT IN ( 
    SELECT DISTINCT url 
    FROM clicks 
    WHERE clicked_user_uuid = ? AND url NOT IN (?) 
    ) 
    GROUP BY m.url, m.baslik, m.resimYolu, m.eklenmeTarihi, m.okunmaSuresi, m.kategori, m.paragraf 
    ORDER BY clickCount DESC 
    LIMIT ?`, [id, ["1", "2"], num]); */
    /* return randomRows; */
    return {a_urls};
    
}

async function setRangeBetweenRandomArticle(connection, kategori1, kategori2, city, id) {
    if(kategori1.length === kategori2.length) {
        const kat1 = getMostClickedFromCity(connection, kategori1, city, id, 3);
        const kat2 = getMostClickedFromCity(connection, kategori2, city, id, 3);

        const kat12 = kat1.concat(kat2);
        if(kat12.length < 6) {
            return getRandomArticle(connection, id, (6 - kat12.length), kat12)
        }
        else {
            return kat12;
        }
    }
    else {
        const kat1 = getMostClickedFromCity(connection, kategori1, city, id, 2);
        const kat2 = getMostClickedFromCity(connection, kategori2, city, id, 1);
        const kat3 = getMostClickedFromCity(connection, null, city, id, 3);

        const kat123 = kat1.concat(kat2).concat(kat3);
        if(kat123.length < 6) {
            return getRandomArticle(connection, id, (6 - kat123.length), kat123)
        }
        else {
            return kat123;
        }
    }
}