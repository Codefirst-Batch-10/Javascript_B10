
// // Default parameter
// let data = (a:number,b:number)=> {
//     let sum = a + b;
//     add()
//  console.log(`The sum of two number ${sum}`);
// }
// data(10,15);

import { CODE_FIRST } from "./enum";
import { Student } from "./interface";

// // template literals
// console.log(`Hello word`);

// const obj1 = { a:10, b:20, c: 30}
// const combinedObj = Object.assign({},)

let stud: Student = {
    id: 1,
    name: 'ram',
    isTeacher: false
}

console.log(stud);

setTimeout(() => {
    const value = 'codeFirst';
    if(value === CODE_FIRST.name) {

    }
}, 100);


