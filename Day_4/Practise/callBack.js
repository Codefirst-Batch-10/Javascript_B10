
//                                      CALLbACK FUNCTION

// A callback is a function passed as an argument to another function



// _____________________________________ timeout __________________________________________

console.log("first line of execution");

console.log("second line of execution");

setTimeout(()=>{
    console.log("after 3 sec");
    
},3000)

console.log("fourth line of execution");


// ____________________________________ inteval ___________________________________________


setInterval(() => {
    console.log('running....');
    
}, 2000);


// _______________________________________________________________________________


setTimeout(()=>{
    console.log("after 3 sec");
    
},3000)


setInterval(() => {
        const now=new Date();
        console.log(now.toLocaleTimeString());
    
    }, 1000);



// _______________________________________________________________________________


let count=1;
setInterval(() => {
    console.log('count: '+count);
    count++;
    
}, 2000);


// _______________________________________________________________________________


setInterval(() => {
    console.log(Math.floor(Math.random()*1000));
    
}, 2000);

// _______________________________________________________________________________


let i=1;
let timer=setInterval(() => {
    console.log(i);
    i++;
    
    if(i>10){
        clearInterval(timer);
    }
}, 1000);

// ___________________________________ we are showing every character separate ________________________________________
// _____________________________________ Text Animation Example ____________________________________________________________


let message='"hello user we want to tell you that the message you are seeing on the terminal screen is created by using javascript.';
let index=0;

setInterval(() => {
    console.log(message[index]);
    index++;
    
}, 200);


// _______________________________________________________________________________