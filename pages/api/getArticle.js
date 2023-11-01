// getArticle.js

import { connectToDatabase } from '@/lib/mysql';

export default async (req, res) => {
  
  /* const { kategori, limit, offset } = req.query; */
  const { k, l, o } = req.query;
  const connection = await connectToDatabase();
  try {
    const [rows] = await connection.execute(
      k == "all"
        ? "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler LIMIT ? OFFSET ?"
        : "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler WHERE kategori = ? LIMIT ? OFFSET ?",
      k == "all" ? [l, o] : [k, l, o]
    );                                      
    res.status(200).json(rows);
  }
  catch(error) {
    res.status(500).json({error: "getArticle.js hatası"});
  }
  finally {
    connection.end();
  }
};
