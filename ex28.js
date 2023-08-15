const fs=require('fs').promises;
const process=require('process');
console.log('시작전 메모리 사용량:',process.memoryUsage.rss())
fs.readFile('./big.txt')
.then(data=>fs.writeFile('./big2.txt',data))
.then(()=> console.log('종료 후 메모리 사용량=',process.memoryUsage.rss()));