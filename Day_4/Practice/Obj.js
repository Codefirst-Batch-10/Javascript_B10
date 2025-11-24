// Simple object
// const obj = {
//   name: "kk",
//   cgpa: 9,
//   active: function achievements() {
//     console.log("Sport team captain");
//     console.log("Coder");
//     console.log("etc");
//   },
// };

// console.log(obj.active());

// 2) using new keyword
// const obj = new Object();
// const newObj = new Object(obj);
// obj.name = "KK";
// obj.name = "Shubhs";
// newObj.name = "Hell";

// console.log(obj.name);
// console.log(newObj.name);

// 3) Object.assign

// const obj = Object.assign({ name: "Hello", rollNo: 21, add: "Solapur" });
// console.log(obj);

// 4) Object.craete

// const player = {
//   name: "krishaa",
//   age: 23,
// };
// const obj = Object.create(player);
// (obj.name = "Shrikrushna"), (obj.salary = 40000);
// // console.log(obj);

// const player2 = player;
// player.name = "king";
// console.log(player);

// console.log(player2);
// player2.name = "shubs";
// console.log(player2);

// for (i in player2) {
//   console.log(i + " " + player2[i]);
// }

//object reference data type + array

var car = {
  model: "maruti",
  price: 45852,
};

var car1 = Object.create(car);
var car2 = Object.create(car1);
// console.log(car1);
car1.color = "gray";
(car1.varient = "ZTI"), (car1.avg = "50km");
// console.log(car1);
console.log(car2.__proto__);
car2.price = 50000;
console.log(car2.price);
