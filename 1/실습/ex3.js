// 문자열에서 대문자는 소문자로 소문자는 대문자로 변환
function solution(str){
    let answer="";
    for (let ch of str)
    if (ch==ch.toUpperCase())
        answer+=ch.toLowerCase();
    else
        answer+=ch.toUpperCase();
return answer;
}
console.log(solution("hAppY"));