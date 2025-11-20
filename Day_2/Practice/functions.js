function add(a, b) {
  console.log(a + b);
}

let square = (a) => {
  console.log(a * a);
};

add(3, 4);
square(11);

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

//  Callback function

function greet(name) {
  console.log("Hello " + name);
}

function user(callback) {
  callback("Krishaa");
}

user(greet);
