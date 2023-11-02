import { connectToDatabase } from '@/lib/mysql';

export default async (req, res) => {
  
  const connection = await connectToDatabase();
  try {
    const [cats] = await connection.execute("SELECT DISTINCT kategori FROM makaleler");
    const newCats = cats.map((cat) => cat.kategori);                           
    res.status(200).json(newCats);
  }
  catch(error) {
    res.status(500).json({error: "404 all cats"});
  }
  finally {
    connection.end();
  }
};
