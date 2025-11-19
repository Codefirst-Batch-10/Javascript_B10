
//                            FUNCTION                                     

// functions :- block of code to execute some operations ||  unless you call function block of code will not executes 

/* ------------------------------ function declaration -----------------------------------

                            without return and variable to store value (also called void function)      */

function greet() {
    console.log("Hello World!");
}
greet(); // Hello World!


/* -------------------------------------------- function expression ------------------
                            with return and variable to store value (also called returnable function )         */                               
            
function square(n) {
    return n * n;
} 
var res=square(6)
console.log(res); // 36

         
// -------------------------------------------- function with parameters ------------------

function add(a, b) {
    console.log(a + b);
}
add(5, 10); // 15


// ----------------------------------------- factorial ------------------------------------

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5)); // 120


//------------------------------------max number -----------------------------------------------

function maxInArray(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}


// ------------------------------------------------------ arrow function -----------------------

const double = n => n * 2;
console.log(double(7)); // 14

console.log(maxInArray([5, 10, 2, 8])); // 10


// ------------------------------------- anonymous function -------------------------------------------

setTimeout(() => {
    for(let i=1; i<10; i++){
    console.log(i);
    }
}, 2000);