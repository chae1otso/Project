const fs=require('fs');
const wstream=fs.createWriteStream('./big.txt');
const sentence='1234567890\n'.repeat(100);
for(let x=0;x<100000;x++)
    wstream.write(sentence);
    wstream.end();