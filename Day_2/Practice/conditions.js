// If condition
// console.log("yes runnning well");

// let fname = document.getElementById("firstName");
// let lname = document.getElementById("lastName");
// let aname = document.getElementById("fullName");
// function showNames(fname, lname) {
//   console.log(fname.value);
//   console.log(lname.value);
//   let result = fname.value + lname.value;
//   console.log("Full name is " + fname.value + " " + lname.value);
//   alert(" Full Name : " + fname.value + " " + lname.value);
//   aname.innerHTML("fsdfds");
// }

function adult() {
  console.log("you are adult");
}
function minor() {
  console.log("you are minor");
}

// let age = 10;
// if (age > 18) {
//   //   console.log("adult");
//   adult();
// } else {
//   console.log("nalla");
//   minor();
// }

// if (age > 50) {
//   console.log("you are buddha adult");
// } else if (age > 30) {
//   console.log("you are mature adult");
// } else if (age > 18) {
//   adult();
// } else {
//   minor();
// }

// let date = new Date();
// // console.log(date.getDate);
// let num = 3;
// switch (num) {
//   case 1:
//     console.log("num is 1");
//     break;
//   case 2:
//     console.log("num is 2");
//     break;
//   case 3:
//     console.log("num is 3");
//     break;
//   case 4:
//     console.log("num is 4");
//     break;
//   default:
//     console.log("default");
//     break;
// }

// let num = 1;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num + "heloo");
//   num++;
// } while (num > 10);

// for (let i = 0; i < 10; i++) {
//   console.log("square of no " + i + " is " + i * i);
// }

// FOR LOOP
// let arr = [1, 6, 4];
// let newarr = [];
// prev = 1 curr=6

// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   let prev = arr[i];
//   for (let j = 0; j < arr.length; i++) {
//     let curr = arr[j];
//     if (curr > prev) {
//       newarr.push(newarr[j]);
//     } else {
//     }
//   }
// }
// console.log(newarr);

// let name = "krushna kharat";

// let x = "";
// i = krushna kharat
// x = k
// x rk
// // urk
// for (const i of name) {
//   //   console.log(i);
//   x = i + x;
// }

// console.log(x);

// console.log(arr);

// console.log("A"); 1
// setTimeout(() => console.log("B"), 0); 4
// Promise.resolve().then(() => console.log("C")); 3
// console.log("D"); 2

function greet(name) {
  console.log("Hello " + name);
}

function user(callback) {
  callback("Krishaa");
}

user(greet);
