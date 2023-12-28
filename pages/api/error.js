import { connectToDatabase } from "@/lib/mysql";

export default async function handler (req, res) {
    if(req.method === 'POST') {
        try {
            const connection = await connectToDatabase();
            const jsonBody = req.body;
            
            await connection.execute(
                "INSERT INTO hatalar (location, hata) VALUES (?, ?)",
                [jsonBody.location, jsonBody.error]
            );
            
        }
        catch(error) {
            //console.log("err: ", error);
        }
    }
}