function repeat_function(callback, interval){
    const tid=setInterval(callback,interval);
    return tid;

}
function print(){
    console.log("1초마다 실행...");
}
const result=repeat_function(print,1000);
setTimeout(()=>clearInterval(result),4000);