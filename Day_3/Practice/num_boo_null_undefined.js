
// ------------------------------------------ NUMBER ----------------------------------------------------------------------

var num1 = 25;
var num2 = 31.5;
var num3 = 40 + 5 +(5*4);
var num6 = '25';

// Type of :-

console.log(num1);
console.log(num3);
console.log(num2);
console.log(num6);

console.log(typeof(num1));
console.log(typeof(num2));
console.log(typeof(num3));
console.log(typeof(num6));


// 1. valueOf

console.log(num1.valueOf());
console.log(num3.valueOf());
console.log(num2.valueOf());



// 2. to string


var num4 = num1.toString();
console.log(num4);
console.log(typeof(num4));
console.log(num1==num4); // true
console.log(num1===num4); // false
var num5 = 4 + 2 + '2'; // 32 // string
var num5 = 1 + '2' + 2; //122 // string
var num5 = 5-6;         
var num5 = 5-6 +'4';
var num5 = 'A' - 'B';
var num5 = 'A' - 'B' + 2;
var num5 = "e" + 5;
var num5 = '$'+ 5;
console.log(num5);
console.log(typeof(num5));




// ---------------------------------------------- NULL & UNDEFINED -----------------------------------------------------



var number1; 

console.log(number1);
console.log(typeof(number1));
console.log(typeof(undefined));
console.log(typeof(null));


console.log(typeof(number5));
console.log(number5); 
var NULL = 12;
var number5 = NULL;
console.log(number5);
var number2 = null;
var number3 = null % 5;
console.log(number3);
console.log(number2);
console.log(typeof(number2)); 

var number5 = null +'CTS';
console.log(number5);



// ------------------------------------------ BOOLEAN -------------------------------------------------------------------



var bln1 = true;

console.log(bln1);
console.log(typeof(bln1))
console.log(!bln1);
console.log(bln1.valueOf());
const value = bln1.toString();
console.log(typeof(value));
console.log(bln1.toString());
