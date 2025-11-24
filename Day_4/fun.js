/*interview question :
1) why void is used
2) what is diff between void and non void function.
*/


// 1. function without param void & non-void
function fun() {
    console.log('simple function');
}
fun();

// 2 returanable
function nonVoid() {
    return 5;
}
const test = nonVoid();
console.log(test);

// function with param
function func(a,b) {
    console.log(a+b);
}
func(5,4);

// function param and returanable
function funct(a,b) {
   return a+b;
}
const res = funct(50,4);
console.log(res);

// function with default parameter
function funct(a=200, b) {
   return a+b;
}
const x = funct(400);
console.log(x);