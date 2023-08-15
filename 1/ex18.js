function foo(x,y){

return new Promise((resolve, reject)=>
{setTimeout(() => {
    if((x+y)%2==0)
    resolve(` Success:${x+y} 합`);
    else
reject (new Error(x+y));
}, 1000);
   
})  


}
foo(10,20)
.then(msg=>console.log(msg))
.catch(msg=> console.error(msg));

foo(10,21)
.then(msg=>console.log(msg))
.catch(msg=>console.error(msg));