import { parse } from 'node-html-parser';
import fs from 'fs';
import path from 'path';
import { create } from 'xmlbuilder2';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Sayfa dosyalarının bulunduğu klasörü belirtin
const pagesDirectory = path.join(__dirname, '../pages');

// Sayfa dosyalarını listele
const pageFiles = fs.readdirSync(pagesDirectory);

let values = [];
let urlArrayForXml = [
  {loc: "https://enonlar.com/", 
  lastmod: new Date().toISOString().split('.')[0]+"+03:00"}
];

let paragrafs = "";
function cleanText(input) {
  const root = parse(input);
  const cleanText = root.textContent;
  return cleanText;
}
function calculateWords(input) {
  const wordCount = input.split(" ").length;
  const readTime = Math.round((wordCount * 0.33) / 60);
  return readTime;
}


// Her sayfanın içeriğini okuyun
pageFiles.forEach((pageFile) => {

 if(!pageFile.includes(".js") || pageFile.includes("index.js") || pageFile.includes("_app.js") || 
pageFile.includes("_document.js") || pageFile.includes("test.js") || pageFile.includes("old_index.js") ||
pageFile.includes("404.js") || pageFile.includes("cerez-politikasi.js") || pageFile.includes("en10.js")) {return false}

    const pagePath = path.join(pagesDirectory, pageFile);
    const pageContent = fs.readFileSync(pagePath, 'utf-8');
  
    const urlRegex = /const\s+url\s*=\s*"([^"]+)"/;
    const baslikRegex = /const\s+baslik\s*=\s*"([^"]+)"/;
    const eklenmeTarihiRegex = /const\s+addDate\s*=\s*"([^"]+)"/;
    const degistirilmeTarihiRegex = /const\s+degistirilmeTarihi\s*=\s*"([^"]+)"/;
    const kategoriRegex = /const\s+kategori\s*=\s*"([^"]+)"/;
    /* const okunmaSuresiRegex = /const\s+okunmaSuresi\s*=\s*"([^"]+)"/; */
    const metinRegex = /const\s+metin\s*=\s*"([^"]+)"/;
    const bitisMetinRegex = /const\s+bitis_metin\s*=\s*"([^"]+)"/;
    const anaResimRegex = /const\s+ana_resim\s*=\s*"([^"]+)"/;

    const urlMatch = pageContent.match(urlRegex);
    const baslikMatch = pageContent.match(baslikRegex);
    const eklenmeTarihiMatch = pageContent.match(eklenmeTarihiRegex);
    const degistirilmeTarihiMatch = pageContent.match(degistirilmeTarihiRegex);
    const kategoriMatch = pageContent.match(kategoriRegex);
    /* const okunmaSuresiMatch = pageContent.match(okunmaSuresiRegex); */
    const metinMatch = pageContent.match(metinRegex);
    const bitisMetinMatch = pageContent.match(bitisMetinRegex);
    const anaResimMatch = pageContent.match(anaResimRegex);

    const url = urlMatch ? urlMatch[1] : '';
    const baslik = baslikMatch ? baslikMatch[1] : '';
    const eklenmeTarihi = eklenmeTarihiMatch ? eklenmeTarihiMatch[1] : '';
    const degistirilmeTarihi = degistirilmeTarihiMatch ? degistirilmeTarihiMatch[1] : '';
    const kategori = kategoriMatch ? kategoriMatch[1] : '';
    /* const okunmaSuresi = okunmaSuresiMatch ? okunmaSuresiMatch[1] : ''; */
    const metin = metinMatch ? metinMatch[1] : '';
    const bitisMetin = bitisMetinMatch ? bitisMetinMatch[1] : '';
    const anaResim = anaResimMatch ? anaResimMatch[1] : '';

    const paragraphRegex = /"paragraf"\s*:\s*"([^"]+)"/g;
    let match;
    paragrafs = "";
    while ((match = paragraphRegex.exec(pageContent)) !== null) {
        let paragraf = match[1];
        paragrafs+=paragraf;
    }

    const allMetin =  baslik + cleanText(metin) + cleanText(bitisMetin) + cleanText(paragrafs);
    const readTimeCalc = calculateWords(allMetin);

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
    
    //const resimYolu0 = resimYolu.split(":")[1].replace(/[`',]/g, "");
    const spreadMetinxD = metin.length > 157 ? metin.substring(0, 157 - 3) + "..." : metin;
    values.push('("'+url.trim()+'", "'+baslik.trim()+'", "'+anaResim+'", "'+eklenmeTarihi.trim()+'", "'+readTimeCalc+'", "'+kategori.trim()+'", "'+spreadMetinxD+'", "'+keywords+'")');

    //!xml creator
    //url
    //degistirilmeTarihi
    urlArrayForXml.push({
      loc: "https://enonlar.com/"+url.trim(), 
      lastmod: degistirilmeTarihi.trim()
    });
});

//! mysql kodu oluşturuluyor.
const sql_query = "DELETE FROM makaleler; INSERT INTO makaleler (url, baslik, resimYolu, eklenmeTarihi, okunmaSuresi, kategori, paragraf, anahtarlar) VALUES "+values.join(",")+" ON DUPLICATE KEY UPDATE baslik = VALUES(baslik), resimYolu = VALUES(resimYolu), eklenmeTarihi = VALUES(eklenmeTarihi), okunmaSuresi = VALUES(okunmaSuresi), kategori = VALUES(kategori), paragraf = VALUES(paragraf), anahtarlar = VALUES(anahtarlar);"
//console.log(sql_query);

/* fs.writeFileSync("insert_makaleler.sql", sql_query); */
fs.writeFileSync(path.join(__dirname, '../sql/insert_makaleler.sql'), sql_query);

//! xml creator
const xml = create({
  urlset: {
    '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
    url: urlArrayForXml
  }
}).end({ prettyPrint: true, headless: true });
const xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>';
const xmlWithEncodingHead = xmlDeclaration + "\n" + xml;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xmlWithEncodingHead);