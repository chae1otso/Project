// 변수 x,y와 함수 f를 매개 변수로 전달 받고 x,y가 숫자인 경우 f(x,y)계산하여 리턴, 아니면 0 리턴
function calculate(x,y,f){
    if(typeof(x)!='number' || typeof(y)!='number')
    return 0;
    else
        return f(x,y);

}
const add = (x,y) => x+y; // arrow 함수
const times =(x,y) => x *y;  // arrow 함수
const division=function(x,y) {return x/y;} // 익명함수
function subtract(x,y) {return x-y;}

console.log(calculate(10,20,add));
console.log(calculate(50,30,times));
console.log(calculate(10,20,division));
