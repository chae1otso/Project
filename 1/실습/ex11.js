// 문자열을 입력받고 문자에 대해 발생 빈도수를 객체로 저장하여 리턴하는 함수
function frequency(str){
    let obj={};
    for (let ch of str){
        obj[ch]=(ch in obj) ? obj[ch]+1 :1;
    }
    console.log("빈도수=", obj);
    let maxVal=0;
    let maxCh;
    for(let key in obj){
        if(obj[key]>maxVal){
            maxVal=obj[key];
            maxCh=key;
        }
       
    }

}
frequency("dfahbfhreyetgwefegwg");