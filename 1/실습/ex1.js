// 문자열 str, 정수 n이 주어질 때, str이 n번 반복된 문자열 만들어 출력

// 1.
function solution(str, n){
    let answer="";
    for(let i=0;i<n;i++)
        answer+=str;
    return answer;
}
console.log(solution("happy",5));

// 2.
function sol(str, n){
    return str.repeat(n);

}
console.log(sol("lotso",4));