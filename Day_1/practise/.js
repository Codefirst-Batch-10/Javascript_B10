// Arithmetic operators :-

let x=20 , y=10;

console.log('add: '+ (x+y)); 
console.log('sub: '+ (x-y));
console.log('div: '+ (x/y));
console.log('mult: '+ (x*y));
console.log('mod: '+ (x%y));
console.log('inc: '+ (x++));
console.log('dec: '+ (y--));

console.log(true+true);  // 2
console.log(true+null); //1
console.log(true+[]);   //true
console.log(true*false);    //0
console.log(null+null);     //0
console.log(null+undefined);    //nan
console.log(null+NaN);          //nan
console.log(undefined+undefined);   //nan
console.log(NaN+NaN);       //nan

console.log('12+23'+2);      //12+232
console.log(2-'12');        // -10
console.log('22'-12);        // 10


// ------------------------------- Assignment operators :- ---------------------------------------


let a = 100, b=50;

a=b;           console.log(a); // a=b
a-=b;          console.log(a); // a= a-b
a+=b;          console.log(a); // a= a+b
a*=b;          console.log(a); // a= a*b
a/=b;          console.log(a); // a= a/b
a**=b;         console.log(a); // a= a**b
a%=b;          console.log(a); // a= a%b


// ----------------------------------------- comparison Operators :- ----------------------------------------


let d='20';

console.log(d==20);     //true   => checks only value
console.log(d===20);    //false  => checks value as well as data type
console.log(d<100);
console.log(d>240);
console.log(d<=2);
console.log(d>=20);
console.log(d!=20);     //false  => js convert datatype then compare value
console.log(d!==20);    // true  => check value as well as datatype


// ---------------------------------------------logical operators :- ---------------------------------------------- 


let age=30;
r=age>18 && age<30
s=age<20 || age>=30

console.log(r);
console.log(s);

console.log(true && false);   // true&&true => true
console.log(true || false);     // false||false => false
console.log(! false);           // true

let s=5, t=6;

var cond1= (s!==t); //true
var cond2= (s==5); //true
var cond3= (s==6); //false
console.log(cond1 && cond2);        //true
console.log(cond1 && cond3);        //false
console.log(cond1 || cond3);        //true
console.log(cond1 || cond2);        //true
console.log(cond3 || cond3);        //false


// -------------------------------------------------- misc operators :- -------------------------------------


// typeOf :-

let name = 'ramesh';
    age = 25n;
    isSelected = true;
console.log(typeof(name));            // string
console.log(typeof(age));            // number
console.log(typeof(isSelected));    // true

console.log(typeof(null));          // object
console.log(typeof(undefined));     // undefined
console.log(typeof(NaN));           // number
console.log(typeof(typeof(NaN)));   // string


// ternary operator :-

let s_age = 25;
let status = (s_age<18) ? "adult":"minor";
console.log(status);


let marks=55;
let isPass=(marks>35)? true : false;
console.log(isPass);


let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result); // Odd


//------------------------------------------------------------------------------------








