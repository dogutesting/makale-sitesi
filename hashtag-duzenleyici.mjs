import fs, { readdirSync } from 'fs';

const folderPath = "pages/"
const files = readdirSync(folderPath);

for(var file of files) {
    if(file.includes("filmi.js")) {
    //if(file.includes("ana-de-armas-en-iyi-10-filmi.js")) {

        console.log(file);

        const data = fs.readFileSync(folderPath + file, 'utf-8');
        const lines = data.split('\n');

        let startIndex = -1;
        const startString = "const jsonContentArray = [";

        let endIndex = -1;
        const endString = "];";

        lines.forEach((line, index) => {
            if (line.includes(startString)) {
                startIndex = index;
            }

            if (line.includes(endString)) {
                endIndex = index;
            }
        });

        startIndex+=1;
        endIndex;

        const resultLines = lines.slice(startIndex, endIndex);
        
        const oneLine = resultLines.join("").trim();
        const oneLineWithParantiese = "["+oneLine+"]";
        
        let jsonArr;
        try {
            jsonArr = JSON.parse(oneLineWithParantiese);
        }
        catch(er) {
            console.log("hata muhtemelen unexpected token");
            continue;
        }
        
        let newJson = [];

        for(var jsonLine of jsonArr) {
            if(!jsonLine.url.includes("#")) {
                jsonLine.url = jsonLine.url.replace("bolum", "#bolum");
            }
            newJson.push(jsonLine);
        }

        const newLines = [
        ...lines.slice(0, startIndex),
        JSON.stringify(newJson, null, 2).substring(1).slice(0, -1),
        ...lines.slice(endIndex)
        ];

        fs.writeFileSync(folderPath+file, newLines.join("\n"), {encoding:'utf8',flag:'w'});
    }
}

console.log("işlem sonu");