import { connectToDatabase } from '@/lib/mysql';

export default async (req, res) => {
    if(req.method === 'POST') {
        try {
            const body = req.body;
            const jsonBody = JSON.parse(body);

            //addTimeWithUrl(jsonBody.url, jsonBody.uuid);
            res.status(200).json(addTimeWithUrl(jsonBody.url, jsonBody.uuid));
            
        } catch (error) {
            res.status(500).json({ error: 'Beklenmedik hata, kesinlikle beklemiyorduk.'});
        }
    } else {
        res.status(405).end();
    }

}

async function addTimeWithUrl(url, uuid) {
   let connection;
    try {
    connection = await connectToDatabase();
    const [rows] = await connection.execute("SELECT time FROM clicks WHERE url = ? AND clicked_user_uuid = ?", [url, uuid]);
    let time = rows[0].time;
    time+=10;
    await connection.execute('UPDATE clicks SET time = ? WHERE url = ? AND clicked_user_uuid = ?', [time, url, uuid]);
    return "true";
   } catch (error) {
    throw error;
   } finally {
    connection && connection.end();
   }
}