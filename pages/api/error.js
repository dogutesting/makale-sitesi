import { connectToDatabase } from "@/lib/mysql";

//! bu koda gerçekten gerek var mı?

export default async function handler (req, res) {
    if(req.method === 'POST') {
        try {
            const connection = await connectToDatabase();
            const jsonBody = req.body;
            if(jsonBody.type == "other") {
                connection.execute(
                    "INSERT INTO hatalar (location, hata) VALUES (?, ?)",
                    [jsonBody.location, jsonBody.error]
                );
            }
            if(jsonBody.type == "404") {
                connection.execute(
                    "INSERT INTO notfound (location, date, uuid) VALUES (?, ?, ?)",
                    [jsonBody.location, jsonBody.date, jsonBody.uuid]
                );
            }
            res.status(200).send(); //* Burayı ekleyince hata kalkıyor.
        }
        catch(error) {
            //console.log("err: ", error);
        }
    }
}