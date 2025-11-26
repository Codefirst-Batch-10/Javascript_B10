/*
A Promise is an object that represents a value that may not be available yet but will be resolved in the future.

States of a Promise:
Pending → still working.
Fulfilled → success (resolved).
Rejected → failed (error).
*/


// _____________________________________________________________________________


let productOrder=new Promise((resolve,reject)=>{
    let fetchdata =true;
    if (fetchdata){
        resolve('order placed')
    }else{
        reject('no order placed')
    }
});
productOrder.then(Response=> console.log(Response));
productOrder.catch(error=> console.log(error));


// _____________________________________________________________________________


let myPromise=new Promise((resolve, reject) => {
    let success=true;
    if(success){
        resolve('promise fulfilled')
    }
    else{
        reject('something goes wrong')
    }
})

myPromise.then(Response=> console.log(Response));
myPromise.catch(error=>console.log(error));


// _________________________________ Promise with set timeout ____________________________________________
    

let p=new Promise((resolve) => {
setTimeout(() => {
        resolve('Data loaded')
        }, 2000);
    })

    p.then(Response=>console.log(Response));

    
// __________________________________ Promise with rejection ___________________________________________


let m= new Promise((resolve, reject) => {
    let successful=false;
    if(successful){
        resolve("successfully resolved")
    }else{
        reject('success rejected')
    }
})

m.then(Response=> console.log(Response));
m.catch(error=> console.log(error)
);


// _____________________________________________________________________________


let mp=new Promise((resolve, reject) => {
    let success=false;
    if(success){
        resolve('completed')
    }
    else{
        reject('failed')
    }
})

mp.then(Response=> console.log(Response)
);
mp.catch(error=> console.log(error)
);