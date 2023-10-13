/* /filmler /makaleler gibi kategorilerde sıralama seçeneği koyacağım
sıralama seçeneğini bu api'ye istek atarak yapmak istiyorum böylelikle
her sayfa yenilendiğinde değilde sadece istek atıldığında yapılır
*/

import mysql from 'mysql2';

export default async function handler(req, res) {
  // MySQL bağlantısı oluşturun
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'makaleveritabani',
  });

  // Bağlantıyı başlatın
  connection.connect((err) => {
    if (err) {
      console.error('MySQL bağlantı hatası:', err);
      return res.status(500).json({ error: 'MySQL bağlantı hatası' });
    }

    // MySQL sorgusu örneği: Tüm makaleleri al
    const query = 'SELECT * FROM makaleler';

    // Sorguyu çalıştırın
    connection.query(query, (error, results) => {
      if (error) {
        console.error('MySQL sorgu hatası:', error);
        return res.status(500).json({ error: 'MySQL sorgu hatası' });
      }

      // MySQL'den gelen sonuçları JSON olarak yanıtlayın
      res.status(200).json(results);

      // MySQL bağlantısını kapatın
      connection.end();
    });
  });
}

