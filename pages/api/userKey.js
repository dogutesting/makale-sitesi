
import { connectToDatabase } from '@/lib/mysql';
import {v4 as uuidv4 } from 'uuid';

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
                
                res.status(200).json({data: await getUserInfo(jsonBody.data.uuid)});
            }

            res.status(200).json(body.req);
        } catch (error) {
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
            "SELECT kategori, COUNT(DISTINCT url) AS sayi " +
            "FROM clicks " +
            "WHERE clicked_user_uuid = ? " +
            "GROUP BY kategori",
            [uuid]
          );
        
        const sonuc = {};
        rows.map(row => {
            const kategori = row.kategori;
            const sayi = row.sayi;
            sonuc[kategori] = sayi;
        });
        return sonuc;
        
       
       } catch (error) {
        throw error;
       } finally {
        connection && connection.end();
       }
}