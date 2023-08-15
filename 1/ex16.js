// 비동기 프로그래밍 1
async function foo(msg){
  setTimeout(()=>console.log(msg),2000);
 
}
foo("2초 후에 출력하시오.");