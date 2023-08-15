// 비동기 순서대로 x
function http_get(url){
    fetch(url)
        .then(response=> response.json())
        .then(data=> console.log(data))
        .catch(err=>console.error(err));

    }



http_get('https://jsonplaceholder.typicode.com/todos/1');
http_get('https://non-server.typicode.com/todo/1')