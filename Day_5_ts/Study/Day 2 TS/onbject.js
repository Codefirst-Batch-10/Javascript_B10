
// let person ={ name: 'Alex', age: 55, height: 152}
// let person2 ={ name: 'Alex', age: 55, height: 152}
// // var per = Object.assign({weight:85}, person);

// // console.log(per);

// var test1= [1,2,3];
// var test2 = "CTS";
// var test3= true;

// console.log(Object.is(person, person2));

let a = 10;
let b = 10;

// console.log(Object.is(a, b));

let per1 ={name:'CTS'};
let per2= {name:'CTS'};
// per1 and per2 doesn't have same reference 
console.log(per1 == per2); // false
console.log(per1 === per2); // false

let per3 = 10;
let per4= '10';

console.log(per3 == per4); // false
console.log(per3 === per4); // false

// console.log(Object.is(per1, per2));