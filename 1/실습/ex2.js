// 문자열 str이 주어질 때 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력
//  입력 : abcde, 출력 : a\nb\nc\nd\ne
function solution(str){
    for(let ch of str)
        console.log(ch);
}
console.log(solution("happy"));