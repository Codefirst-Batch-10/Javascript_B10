console.log("first line of execution");
console.log("second line of execution");

// syntax
// setTimeout(function, time in milisecond);
// setTimeout(() => {
// //   console.log("set time out its a callback function");
// // }, 2000);

console.log("third line of execution");

function addData(a, b) {
  //   console.log("heloo");

  return a + b;
  console.log(
    "this line never gonna execute because of this function is already return and exited"
  );
}

// let res = addData(3, 5);
// console.log(res);

var std = { fname: "shubham", lname: "DD" };
console.log(std);

console.log("fourth line of execution");

function add() {
  var result = addData(3, 6);
  console.log(result);
}

add();

// setTimeout(() => {
//   console.log("Hellooo boss");
// }, 0);
