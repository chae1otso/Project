fetch('https://jsonplaceholder.typicode.com/todos/1') // 작업 1. Promise 1을 반환.
.then(function(response) { return response.json(); })
.then(function(myJson) { console.log(myJson); })
.catch(function(e) {
if (e instanceof TypeError)
console.log("Something is wrong with our server!");
else console.error(e);
});