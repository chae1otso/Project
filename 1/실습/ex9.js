// 배열의 처음 n개의 원소를 리턴하는 함수 first().n이 생략될 경우 첫번째 원소만 리턴
function first(b,n=1){
 return b.slice(0,n);

}
function last(b, n=1){
    if(n>b.length)
    n=b.length;
    b.slice(b.length-n, b.length);
}
console.log(first([1,5,4,8,2],4));
console.log(last([[1,5,4],-4],2));
console.log(last([[],3],1));