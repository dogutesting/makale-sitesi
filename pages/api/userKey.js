
import { connectToDatabase } from '@/lib/mysql';
import {v4 as uuidv4 } from 'uuid';

export default async (req, res) => {
    if(req.method === 'POST') {
        try {
            const body = req.body;
            const jsonBody = JSON.parse(body);


            if(jsonBody.request === 'add-user-key') {
                res.status(200).json(await addUser());
            }
            if(jsonBody.request === 'get-user-info') {
                //res.status(200).json(getUserInfo(body.data));
                //console.log("şimdilik phpmyadmin'den bak");
                res.status(200).json("şimdilik phpmyadmin'den get user info'yu takip et");
            }
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
    throw error;
   } finally {
    connection && connection.end();
   }
}

/* async function getUserInfo(uuid) {
    let connection;
    try {
        connection = await connectToDatabase();
        const [rows] = await connection.execute("SELECT url FROM clicks WHERE clicked_user_uuid = ?", [uuid]);
        
        if (rows && rows.length > 0) {
            // URL'leri al
            const urls = rows.map(row => row.url);
        
            // İkinci sorgu: Alınan URL'leri başka bir tabloda arayarak içerikleri getir
            const [contentRows] = await connection.execute("SELECT * FROM content WHERE url IN (?)", [urls]);
        
            if (contentRows && contentRows.length > 0) {
              // İçerikleri işleme devam edebilirsiniz
              //console.log('İçerikler:', contentRows);

            } else {
              console.log('Belirtilen URL içeriği bulunamadı.');
            }
          } else {
            console.log('Belirtilen kullanıcının tıklama verileri bulunamadı.');
          }
       
       } catch (error) {
        throw error;
       } finally {
        connection && connection.end();
       }
} */