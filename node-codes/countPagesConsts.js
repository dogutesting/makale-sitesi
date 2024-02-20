const fs = require('fs');
const path = require('path');

const pagesDirectory = path.join(__dirname, '../pages');
const files = fs.readdirSync(pagesDirectory);
const pageFiles = files.filter(file => file.endsWith('.js'));
const NUMBER_OF_PAGES = pageFiles.length - 6;

const MAX_USER = 1000;
const MAX_TIMEOUT = 4 * 60 * 60 * 1000; //* 4 saat olarak ayarlandı
const LRU_OBJECT = {
    max: MAX_USER,
    ttl: MAX_TIMEOUT
}

fs.writeFileSync(path.join(__dirname, '../consts.json'), 
    JSON.stringify(
        { NUMBER_OF_PAGES,  LRU_OBJECT }
));