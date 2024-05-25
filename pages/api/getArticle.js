// getArticle.js

import { connectToDatabase } from '@/lib/mysql';

export default async (req, res) => { 

  const { kategori, sayfa } = req.query;
  const currentCategory = kategori === undefined ? "hepsi" : kategori; //hepsi
  const currentPageOffset0 = sayfa === 1 ? 0 : (sayfa - 1) * 10; //offset ayarı

  const db = await connectToDatabase();
  try {
    const currentPageOffset = currentPageOffset0.toString();
    const [articles] = await db.execute( 
        
      currentCategory !== 'hepsi' ?
      /* "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler WHERE kategori = ? ORDER BY eklenmeTarihi DESC LIMIT 10 OFFSET ?"
      : "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler ORDER BY eklenmeTarihi DESC LIMIT 10 OFFSET ?", */
      "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler WHERE kategori = ? ORDER BY CONCAT('20', MID(eklenmeTarihi, 7, 2), MID(eklenmeTarihi, 4, 2), LEFT(eklenmeTarihi, 2)) DESC LIMIT 10 OFFSET ?"
      : "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler ORDER BY CONCAT('20', MID(eklenmeTarihi, 7, 2), MID(eklenmeTarihi, 4, 2), LEFT(eklenmeTarihi, 2)) DESC LIMIT 10 OFFSET ?",
      currentCategory !== 'hepsi' ? 
        [currentCategory, currentPageOffset]
        : [currentPageOffset]

    );
    const [maxRows] = await db.execute(
      currentCategory !== "hepsi" ? 
      "SELECT COUNT(*) FROM makaleler WHERE kategori = ?" :
      "SELECT COUNT(*) FROM makaleler",
      currentCategory !== "hepsi" &&
      [currentCategory]
    );
    const totalCount = parseInt(maxRows[0]["COUNT(*)"], 10);
    const paginationCount = Math.ceil(totalCount / 10);    

    const [getCats] = await db.execute("SELECT DISTINCT kategori FROM makaleler");
    const cats = getCats.map((item) => item.kategori);

    res.status(200).json({
      articles,
      cats,
      paginationCount,
      currentCategory,
      currentPageOffset
    });
  }
  catch(error) {
    res.status(500).end("Burayı kodlayan için F");
    /* res.status(500).send(
      `
      <html>
      <body>
      <div>
      Hata: <b>${error}</b>
      </div>
      <div>
      kategori: <b>${kategori}</b> ||| sayfa: <b>${sayfa}</b>
      </div>
      <div>
      currentCategory: <b>${currentCategory}</b> ||| currentPage: <b>${currentPageOffset}</b>
      </div>
      </body>
      </html>
      `
    ) */
  }
  finally {
    db.end();
  }
};
