// 일회용 패스워드 생성기 - 패스워드 생성 후 출력
let alphabet="abcdefghijklmnopqrstuvwxynz0123456789"
function otp(){
let result="";
for(let i=0;i<6;i++){
let pos=Math.floor(Math.random()*alphabet.length);
 result+=alphabet(pos);
}
return result;
}
console.log(otp());
console.log(otp());
console.log(otp());