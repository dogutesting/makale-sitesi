//const mysql = require('mysql2/promise');
import mysql from 'mysql2';

async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'makaleveritabani',
  });

  return connection;
}

async function main() {
  const db = await connectToDatabase();
  // Veritabanı işlemlerinizi burada gerçekleştirin.

  // Örnek olarak tüm kullanıcıları alalım:
  const [rows, fields] = await db.execute('SELECT * FROM makaleler');
  
  // Bağlantıyı kapatmayı unutmayın.
  db.end();
}

main();