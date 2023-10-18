// getArticle.js

import { connectToDatabase } from '../../lib/mysql';

export default async (req, res) => {
  // İstekten kategori parametresini alıyoruz
  const { kategori } = req.query;

  // MySQL veritabanına bağlanma
  const connection = await connectToDatabase();

  try {
    // Veritabanından belirli kategoriye ait makaleleri çekiyoruz
    const [rows] = await connection.execute(`SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi FROM makaleler WHERE kategori='${kategor}'`);

    // Makaleleri istemciye gönderiyoruz
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    // Hata durumunda istemciye hata mesajını gönderiyoruz
    res.status(500).json({ error: 'Veritabanından makaleleri alırken bir hata oluştu.' });
  } finally {
    // Veritabanı bağlantısını kapatıyoruz
    connection.end();
  }
};
