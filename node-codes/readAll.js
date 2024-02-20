const fs = require('fs');
const path = require('path');

// Sayfa dosyalarının bulunduğu klasörü belirtin
const pagesDirectory = path.join(__dirname, '../pages');

// Sayfa dosyalarını listele
const pageFiles = fs.readdirSync(pagesDirectory);

let values = [];

// Her sayfanın içeriğini okuyun
pageFiles.forEach((pageFile) => {

 if(!pageFile.includes(".js") || pageFile.includes("index.js") || pageFile.includes("_app.js") || 
pageFile.includes("_document.js") || pageFile.includes("test.js") || pageFile.includes("old_index.js") ||
pageFile.includes("404.js") || pageFile.includes("cerez-politikasi.js")) {return false}

    const pagePath = path.join(pagesDirectory, pageFile);
    const pageContent = fs.readFileSync(pagePath, 'utf-8');
  
    const urlRegex = /const\s+url\s*=\s*"([^"]+)"/;
    const baslikRegex = /const\s+baslik\s*=\s*"([^"]+)"/;
    const eklenmeTarihiRegex = /const\s+addDate\s*=\s*"([^"]+)"/;
    const kategoriRegex = /const\s+kategori\s*=\s*"([^"]+)"/;
    const okunmaSuresiRegex = /const\s+okunmaSuresi\s*=\s*"([^"]+)"/;
    const metinRegex = /const\s+metin\s*=\s*"([^"]+)"/;
    const anaResimRegex = /const\s+ana_resim\s*=\s*"([^"]+)"/;

    const urlMatch = pageContent.match(urlRegex);
    const baslikMatch = pageContent.match(baslikRegex);
    const eklenmeTarihiMatch = pageContent.match(eklenmeTarihiRegex);
    const kategoriMatch = pageContent.match(kategoriRegex);
    const okunmaSuresiMatch = pageContent.match(okunmaSuresiRegex);
    const metinMatch = pageContent.match(metinRegex);
    const anaResimMatch = pageContent.match(anaResimRegex);

    const url = urlMatch ? urlMatch[1] : '';
    const baslik = baslikMatch ? baslikMatch[1] : '';
    const eklenmeTarihi = eklenmeTarihiMatch ? eklenmeTarihiMatch[1] : '';
    const kategori = kategoriMatch ? kategoriMatch[1] : '';
    const okunmaSuresi = okunmaSuresiMatch ? okunmaSuresiMatch[1] : '';
    const metin = metinMatch ? metinMatch[1] : '';
    const anaResim = anaResimMatch ? anaResimMatch[1] : '';

    //! KEYWORDS
    const keywordsRegex = /const\s+keywordsArray\s*=\s*\[([^\]]+)\]/;
    const keywordsMatch = pageContent.match(keywordsRegex);

    let keywords = [];

    if (keywordsMatch) {
    const keywordsString = keywordsMatch[1];
    // Dizi öğelerini çekmek için virgülle ayırın ve boşlukları temizleyin
    keywords = keywordsString.split(',').map(keyword => keyword.trim().replace(/"/g, ''));
    } else {
    console.log('Keywords dizisi bulunamadı.');
    }
    //! KEYWORDS

    
    //! first_image
    //const satirlar = pageContent.split('\n');

    // Aranan metin
   /*  const arananMetin = `"num": "10",`;
    
    // Aranan metini içeren satırın indeksini bul
    const indeks = satirlar.findIndex(satir => satir.includes(arananMetin));
    
    // İstenen satırı al
    if (indeks !== -1 && indeks + 3 < satirlar.length) {
        resimYolu = satirlar[indeks + 3];
    } else {
      console.log('İstenen metin bulunamadı veya 3 satır sonrasında başka bir satır yok. Sayfa url: ' + url.trim());
    } */
    
    //! first_image
    
    //const resimYolu0 = resimYolu.split(":")[1].replace(/[`',]/g, "");
    const spreadMetinxD = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
    values.push('("'+url.trim()+'", "'+baslik.trim()+'", "'+anaResim+'", "'+eklenmeTarihi.trim()+'", "'+okunmaSuresi.trim()+'", "'+kategori.trim()+'", "'+spreadMetinxD+'", "'+keywords+'")');
});

//! mysql kodu oluşturuluyor.
const sql_query = "INSERT INTO makaleler (url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf, anahtarlar) VALUES "+values.join(",")+" ON DUPLICATE KEY UPDATE baslik = VALUES(baslik), resimYolu = VALUES(resimYolu), eklenmeTarihi = VALUES(eklenmeTarihi), okunmaSuresi = VALUES(okunmaSuresi), kategori = VALUES(kategori), paragraf = VALUES(paragraf), anahtarlar = VALUES(anahtarlar);"
//console.log(sql_query);

/* fs.writeFileSync("insert_makaleler.sql", sql_query); */
fs.writeFileSync(path.join(__dirname, '../sql/insert_makaleler.sql'), sql_query);