// 비동기 프로그래밍 예시
f = function(x) { console.log('f', x + 2); }
g = function(x) { console.log('g', x ** 2); }
h = function(f1, f2) { // f1, f2: callback 함수
now = Date.now();
console.log(now);
if (now % 2 == 0) f1(10); // callback 함수의 호출
else f2(10); // callback 함수의 호출
}
h(f, g); // h(g, f)로 호출할 수도 있다

console.log('1');
console.log('2');
setTimeout(function() {console.log('3');}, 1000);
console.log('4');


const fs = require('fs');
console.log("readFile started");
fs.readFile('a.txt', 'utf8', function(err, data) { // callback 함수를 이용하여 readFile
if (err) console.error(err);
else console.log(data);
});
console.log("readFile completed");


