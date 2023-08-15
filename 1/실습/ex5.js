// n이 양의 정수 x의 제곱이라면 x+1 제곱 출력, 아니라면 -1 출력
function solution(n){
    let answer=0;
    let x=Math.floor(Math.sqrt(n));
    if(x**2==n)
        return (x+1)**2;
    else
      return -1;
}
console.log(solution(5665));
