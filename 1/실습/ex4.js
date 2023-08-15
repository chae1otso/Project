//  두 정수를 붙여 더 큰 값을 리턴
// 1.
function solution(a,b){
const x=Number(String(a)+String(b));
const y=Number(String(b)+String(a));
return Math.max(x,y);
}
console.log(solution(512,4));


// 2.
function sol(a,b){
    return Math.max(`${a}${b}`, `${b}${a}`)
}
console.log(sol(512,4));