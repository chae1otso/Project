//문자열  str과 정수 n이 주어질 때,  str이 n번 반복된 문자열 생성
function solution (str,n){
    let answer="";
    for(x=0;x<n;x++){
        answer+=str
    }
return answer;

}
console.log(solution("happy",5));

// 알파벳으로 이루어진 문자열 str이 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환해서 출력
function solution1(str){
    let answer="";
    for(let x of str){
        answer+=(x==x.toUpperCase())? x.toLowerCase() :x.toUpperCase();
    }
    return answer;
}
console.log(solution1("dfSGDdfNsgh"));

// 두 정수에 대한 연산 a와 b, b와 a를 붙인 수 비교하여 더 큰 값 리턴
function solution2(a,b){

    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
console.log(solution2(15,80));

// 입력된 수가 짝수라면 2로 나누고 홀수라면 3을 곱하고 1을 더함 결과로 나온 수가 1일 될 때까지 반복하고 시도 횟수 계산하여 출력
function solution3(n){
    let count =0;
    while(count<500){
        if(n==1)
        return count;
    if(n%2==0)
        n/=2;
     else
        n=n*3+1 
    count++;
    }
    return -1;
}
console.log(solution3(80));
console.log(solution3(8213));

/* 두 변수  x,y와 함수 f를 매개변수로 전달받아, x와 y가 숫자일 경우 f(x,y)를 계산하여 리턴하고 아니면 0을 리턴하는 함수 calculate(x,y,f)를 작성
f는 add, subtract, times, division을 구현, add times는 arrow, division은 익명함수로 구현*/
function calculate(x,y,f){
    if(typeof x=='number'&& typeof y=='number')
        return f(x,y);
    else
        return 0;
    }

const add=(x,y)=>x+y;
const times=(x,y)=>x*y;
const division=function(x,y) {return x/y};
function subtract(x,y) {return x-y};

console.log(calculate(10,2,add));
console.log(calculate(10,2,times));
console.log(calculate(10,2,division));
console.log(calculate(10,2,subtract));

// 입력받은 수가 완전수인지 확인 완전수: 자신을 제외한 약수의 합이 자신이 되는 수(e.g 6=1+2+3)  두 수를 입력받아 그 사이에 존재하는 모든 완전수를 출력하는 함수 작성
function is_perfect(n){
    let sum=0;
    for(let x=1; x<=n/2;x++)
        if(n%x==0)
            sum+=x;
    return n==sum;
}
for (let x=1;x<=20000;x++)
if(is_perfect(x))
console.log(x);
