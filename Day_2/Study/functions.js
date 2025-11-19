
// function defincation

// function functionName(prameter-list){
//     // block of code goes here
// }

// function declartion
function add() {
    let a = 10;
    let b = 10;
    var c = a + b;
    console.log(c);
}
add();
var result = add(10, 12);
// console.log(result);
// until and unless u call any function, block of code inside function will not be executed.

// function expression
function fullName(fName, LName){
    fullNm = fName + LName;
    return fullNm;
}

var result2= fullName('Rahul', 'Kulkarni');
console.log(result2);