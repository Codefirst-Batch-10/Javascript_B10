"use strict";
//          Default Parameters
Object.defineProperty(exports, "__esModule", { value: true });
function introduce(name, age) {
    if (name === void 0) { name = "Guest"; }
    if (age === void 0) { age = 18; }
    console.log("Hello ".concat(name, ", age ").concat(age));
}
introduce(); // Hello Guest, age 18
introduce("Ramesh"); // Hello Ramesh, age 18
introduce("Ramesh", 25); // Hello Ramesh, age 25
var enum_1 = require("./enum");
// template literals
console.log("Hello word");
var obj1 = { a: 10, b: 20, c: 30 };
var combinedObj = Object.assign({}, obj1);
console.log(combinedObj);
var stud = {
    id: 1,
    name: 'ram',
    isTeacher: false
};
console.log(stud);
setTimeout(function () {
    var value = 'codeFirst';
    if (value === enum_1.CODE_FIRST.name) {
        console.log("hi");
    }
}, 100);
