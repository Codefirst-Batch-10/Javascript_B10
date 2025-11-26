
// ****************************************** Async / Await **********************************************


/* Async / Await

Instead of using .then(), we “wait” for a promise result inside an async function.
- async/await cannot work without Promises.

*/



function del(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('order delievered');
            
        }, 3000);
    });
}

function paym(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('payment successful');
            
        }, 5000);
    });
}

async function ordPlaced() {
    console.log('order placed');
    // payment();
    let pay=await paym();
    console.log(pay);
    // delievery();
    let delvr=await del();
    console.log(delvr);
    console.log('product delievered');
    
}
ordPlaced();



//-------------------------------------------------------------------------------------



async function getData(){
    let promise= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data found')
        }, 2000);
    });

    let result=await promise;
    console.log(result);
    
}
getData();



//_______________________________________________________________________________________-


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hello() {
    console.log("Start");
    await wait(2000); // wait 2 seconds
    console.log("End after 2 seconds");
}

hello();


//_______________________________________________________________________________________-


