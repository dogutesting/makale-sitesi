// getArticle.js

import { connectToDatabase } from '@/lib/mysql';

export default async (req, res) => {

  const { kategori, sayfa } = req.query;
  const currentCategory = kategori === undefined ? "hepsi" : kategori; //hepsi
  const currentPageOffset = sayfa === 1 ? 0 : (sayfa - 1) * 10; //offset ayarı

  const db = await connectToDatabase();
  try {
    
    const [articles] = await db.execute( 
        
      currentCategory !== 'hepsi' ?
      "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler WHERE kategori = ? LIMIT 10 OFFSET ?"
      : "SELECT url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf FROM makaleler LIMIT 10 OFFSET ?",

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
      cats,//her seferinde category yollamak zorunda mıyım?
      paginationCount,
      currentCategory
    });
  }
  catch(error) {
    //res.status(500).json({error: "Burayı kodlayan büyük bir hata yaptı. Kodlayıcı için F" + "\n" + error + "\n" + "current Category: " + currentCategory + "\n" + "current Page: " + sayfa});
    res.status(500).send(
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
    )
  }
  finally {
    db.end();
  }
};
