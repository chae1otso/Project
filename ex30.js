const fs = require('fs').promises;
async function top(fname, limit,k){
    const file=await fs.open(fname,'r');
    const freq={};
    for await(let line of file.readLines()){
        let words=line.toLowerCase().split(" ");
        for(let word of words){
            if(word.length<limit)
            continue;
            freq[word]=(word in freq)? freq[word]+1:1;
        }
    }
    // 가장 많이 등장하는 k개의 단어와 빈도수 쌍 계산하여 리턴
    // 빈도수 기준(내림차순) sorting 필요
    return Object.entries(freq).sort((x,y)=>y[1]-x[1]).slice(0,k);
  
}
top('./table.txt',8,5)
    .then(result=>console.log(result));
