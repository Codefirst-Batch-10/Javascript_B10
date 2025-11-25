var test1 = [1,2,3,9,8,8,9];
var test2 = [4,5,6, 11,22,33];

var test3 = test1.concat(test2);

console.log(test3);

// [0,1,2,3,4,5,6]
var test4 = [...test1, 7,9];

console.log(test4);

var test5 ={name:'CTS', age:15};
var test6 ={gender:'Male'};
// console.log(test5);

var test7 = {...test5, ...test4};
console.log(test7);

