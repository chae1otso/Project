// 2부터 10000000 사이에 존재하는 소수의 개수를 세는 single-thread 프로그램. console.time(),console.timeEnd()이용->실행시간 출력
function is_prime(){
        if(i<=1|| i>2 && i%2==0)
        return false;
        if(i==2)
        return true;
        for(let x=3;x<=Math.floor(Math.sqrt(x))+1;x+=2)
            if(n%x==0)
            return false;
        return true;
    }

console.time("실행시간");
let cnt=0;
for(i=2;i<=10000000;i++)
if(is_prime(i))
cnt++;
console.log(`소수개수 : ${cnt}`)
console.time('실행시간 :' )

