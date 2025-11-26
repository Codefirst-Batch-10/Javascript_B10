//          Default Parameters


function introduce(name: string = "Guest", age: number = 18) {
    console.log(`Hello ${name}, age ${age}`);
}

introduce();               // Hello Guest, age 18
introduce("Ramesh");       // Hello Ramesh, age 18
introduce("Ramesh", 25);   // Hello Ramesh, age 25


import { CODE_FIRST } from "./enum";
import { Student } from "./interFace";

// template literals
console.log(`Hello word`);

const obj1 = { a:10, b:20, c: 30}
const combinedObj = Object.assign({},obj1)
console.log(combinedObj);


let stud: Student = {
    id: 1,
    name: 'ram',
    isTeacher: false
}

console.log(stud);

setTimeout(() => {
    const value = 'codeFirst';
    if(value === CODE_FIRST.name) {
        console.log(`hi`);
        
    }
}, 100);