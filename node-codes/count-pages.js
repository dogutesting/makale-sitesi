const fs = require('fs');
const path = require('path');

/* const pagesDirectory = path.join(process.cwd(), '/pages'); */
const pagesDirectory = path.join(__dirname, '../pages');

const files = fs.readdirSync(pagesDirectory);
const pageFiles = files.filter(file => file.endsWith('.js'));
const numberOfPages = pageFiles.length - 5;
/* console.log("number: ", numberOfPages-5); */

/* console.log("yazıldı: ", numberOfPages); */

fs.writeFileSync(path.join(__dirname, '../numberOfPages.json'), JSON.stringify({ numberOfPages }));