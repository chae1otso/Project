// stream 형태로 읽기
const fs = require('fs');
console.log('시작전 메모리 사용량:',process.memoryUsage.rss())
const readStream = fs.createReadStream('big.txt');
const writeStream = fs.createWriteStream('big3.txt');
readStream.pipe(writeStream);

console.log('종료 후 메모리 사용량=',process.memoryUsage.rss());

