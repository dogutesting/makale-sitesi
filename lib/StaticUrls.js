import { connectToDatabase } from "./mysql";

const db = await connectToDatabase();

export default async function StaticUrls(urls) {
  try {
    //placeholder'a gerek yok, çünkü kullanıcıdan bir girdi almıyoruz.
    const placeholders = urls.map(() => '?').join(',');
    const sql = `SELECT url, baslik, resimYolu, paragraf FROM makaleler WHERE url IN (${placeholders})`;
    const [articles] = await db.execute(sql, [...urls]);
    return articles;
  }
  catch(err) {
    console.log("hata meydana geldi: ", err);
  }
}