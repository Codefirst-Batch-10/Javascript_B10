// function :- block of code to execute some operations


// 1. void or non returnable function  
// function declaration - without return and variable to store result


function fun1(){
    console.log("having fun! ");
    
}
fun1();


// 2. nonvoid and returnable function
// function expression - with return and variable to store result


function fun2(){
    return 5;
}
var result=fun2();
console.log(result);


// 3. with parameter and returnable


function fun3(a,b){
    return a**b;
}
var result1=fun3(5,2);
console.log(result1);


//  4. with parameter and non returnable


function fun4(a,b){
    console.log(a+=b);
    
}fun4(5,10)


//  5. function with default parameter


function fun5(a,b=200){
    return a-b;
}
var res5=fun5(50,100)
console.log(res5);


//  6.  Returnable arrow function


const sum = (a, b) => a + b;
console.log(sum(5, 10)); // 15



//  7.  Anonynous function


const square = function(x) { return x * x; };
console.log(square(5)); // 25



//  8.  callBack function


setTimeout(() => {
    console.log('this will print after 2 seconds');
    
}, 2000);