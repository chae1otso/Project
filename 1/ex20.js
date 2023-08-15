// 여러개의 url을 저장한 배열을 입력받아 fetch를 병렬로 진행하는 함수 
function parallel_fetches(urls){
    return Promise.all(urls.map(url=>{
        new Promise((resolve, reject)=>{
            fetch(url)
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(err=>reject(new Error(err)))
        })
    }));
}
const urls=[
    'https://jsonplaceholder.typicode.come/todos/1',
    'https://jsonplaceholder.typicode.come/todos/2',
    'https://jsonplaceholder.typicode.come/todos/3'
];
parallel_fetches(urls)
    .then(contents=>console.log('Downloaded contents:',contents))
    .catch(error=> console.error(error));