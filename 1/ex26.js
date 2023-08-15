const {Worker,isMainThread,parentPort,workerData}=require('worker_threads');
console.time(실행시간)
    const threads= new Set();
    const limit=10000000;
    const amount=Math.floor(limit/8);
    for(let x=0; x<8;x++){
        let start = x*amount;
        let end=(x<7)?(x+1) *amount :limit;
        threads.add(new Worker("./worker.js",{workerData:{start,end}}));

    }
    let count=0;
    for(let worker of threads){
        worker.on('message', message => console.log('from worker', message));
        worker.on('exit', () => {
        threads.delete(worker);
        if (threads.size === 0) 
        console.log('소수개수:')
        console.timeEnd('시간측정');
    })};
       
