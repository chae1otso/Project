function add(x,y){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(`1초 후:${x}+${y}=${x+y}`);
            resolve();
        },1000);

     });
    }
    function subtract(x,y){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve(`2초 후:${x}-${y}=${x-y}`);
            },2000);
    
         });
        }
        function times(x,y){
            return new Promise(resolve=>{
                setTimeout(()=>{
                    resolve(`1.5초 후:${x}*${y}=${x*y}`);
                },1500);
        
             });
            }
async function calculate(x,y){
   
  
    try{
        await add(x,y);
        const msg=await subtract(x,y);
        console.log(msg);
        console.log(await times(x,y));
    }
    catch(error){
        console.log('Error:', error.message);

    }
}
calculate(10,20);
