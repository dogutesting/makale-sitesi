
import { connectToDatabase } from '@/lib/mysql';
import {v4 as uuidv4 } from 'uuid';

const DEFAULT_TABLE = "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler";

export default async function handler (req, res) {
    if(req.method === 'POST') {
        try {
            const jsonBody = req.body;
            if(jsonBody.req === 'add-user-key') {
                res.status(200).json({"uuid": await addUser()});
            }
            if(jsonBody.req === 'auc') {
               await addUserClick(jsonBody.data.url,
                                                jsonBody.data.date,
                                                jsonBody.data.type,
                                                jsonBody.data.uuid);
                res.status(200).json({"onay": "true"});
            }
            if(jsonBody.req === 'gui') {
                const response = await getUserInfo(jsonBody.data.uuid)
                res.status(200).json({data: response});
            }
        } catch (error) {
            //console.log("Beklenmedik hata: ", error);
            res.status(500).json({ error: 'Beklenmedik hata, kesinlikle beklemiyorduk.'});
        }
    } else {
        res.status(405).end();
    }

}

async function addUser() {
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
        await connection.execute('INSERT INTO users (user_uuid) VALUES (?)', [uuid]);
        return uuid;
   } catch (error) {
    //throw error;
   } finally {
    connection && connection.end();
   }
}

async function addUserClick(url, time, type, uuid) {
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
     await connection.execute('INSERT INTO clicks (url, time, kategori, type, clicked_user_uuid) VALUES (?, ?, ?, ?, ?)', [url, time, kategori, type, uuid]);
     //return true;
    } catch (error) {
     //throw error;
    } finally {
     connection && connection.end();
    }
 }

async function getUserInfo(uuid) {
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
            [uuid, "/"]
        );

        const enFazlaTiklananKategoriler = rows.map((row) => row.kategori);

        if(enFazlaTiklananKategoriler.length === 0) {
            const [randomMakaleler] = await connection.execute(
                DEFAULT_TABLE +
                " ORDER BY RAND() LIMIT 6"
            )
            return randomMakaleler;
        }
        else if(enFazlaTiklananKategoriler.length === 1) {
            const [makaleRows] = await connection.execute(
                DEFAULT_TABLE +
                " WHERE kategori = ? AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?) ORDER BY RAND() LIMIT 4",
                [enFazlaTiklananKategoriler[0], uuid]
            );
            return await getRandomArticleForUser(connection, enFazlaTiklananKategoriler[0], uuid, 6 - makaleRows.length, makaleRows);
        }
        //! enFazlaTiklanan.length == 2
        else {
            return await setRangeBetweenRandomArticle(category, kategori1, kategori2)
        }

    } catch (error) {
        throw error;
    } finally {
        connection && connection.end();
    }
}

    //* url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf

async function getRandomArticleForUser(connection, category, uuid, num, rows) {
    const [rM] = await connection.execute(
        DEFAULT_TABLE +
        " WHERE kategori != ? AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?) ORDER BY RAND() LIMIT ?",
        [category, uuid, num]
    );

    if(rM.length != num) {
        const eksik = num - rM.length;

        const rM_URLs = rM.map(r => r.url);
        const rows_URLs = rows.map(row => row.url);
        const expectThisURLs = rM_URLs.concat(rows_URLs);

        const [all] = await connection.execute(
            DEFAULT_TABLE +
            " WHERE url NOT IN (?) ORDER BY RAND() LIMIT ?",
            [expectThisURLs.join(","), eksik]
        );
        
        return rows.concat(rM).concat(all);
    }
    else {
        return rows.concat(rM);
    }
}
async function setRangeBetweenRandomArticle(connection, kategori1, kategori2) {
    if(kategori1.length === kategori1.length) {
        const [cat0] = await connection.execute(
            DEFAULT_TABLE +
            " WHERE kategori = ? AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?) LIMIT 3",
            [kategori1, uuid]
        );
        const [cat1] = await connection.execute(
            DEFAULT_TABLE +
            " WHERE kategori = ? AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?) LIMIT 3",
            [kategori2, uuid]
        );
        const makales = cat0.concat(cat1);
        if(makales.length < 6) {
            return getRandomArticleForUser(connection, makales, uuid, (6-makales.length), makales);    
        }
        else {
            return makales;
        }
    }
    else {
        const [cat0] = await connection.execute(
            DEFAULT_TABLE +
            " WHERE kategori = ? AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?) LIMIT 4",
            [kategori1, uuid]
        );
        const [cat1] = await connection.execute(
            DEFAULT_TABLE +
            " WHERE kategori = ? AND url NOT IN (SELECT DISTINCT url FROM clicks WHERE clicked_user_uuid = ?) LIMIT 2",
            [kategori2, uuid]
        );
        const makales = cat0.concat(cat1);
        if(makales.length < 6) {
            return getRandomArticleForUser(connection, makales, uuid, (6-makales.length), makales);    
        }
        else {
            return makales;
        }
    }
}