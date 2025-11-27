//   // arrau fn

// let arrFun = () => {
//     console.log('This is arrow function');
// }

// arrFun();

// // 
// let arrFun2 = (data:any) => {
//     console.log(`This is arrow function_${data}`);
// }

// arrFun2(20);

// // single line


// let Ann = ()=> {
//     console.log('Anynomous');
// }

// let funct = ((a:any,b:any)=>{
//     console.log(a);
//     console.log(b);
// });
// funct(20, Ann());

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const mergedObj = Object.assign({}, obj1, obj2);
// console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

// spread and rest
const arr1 = [2,45,4,8];
const arr2 = [8,5,9,0];

const merge = [...arr1, ...arr2];
const concate = arr1.concat(arr2);
// console.log(merge);
// console.log(concate);

// console.log(Math.max(...arr1));
const copyArr = [...arr2];
// console.log(copyArr);

// Rest 
let sum = (...numbers:any) => {
     numbers.reduce((intial, cumm)=>{
        return intial + cumm;
     },0);
}
console.log(sum(2,57,9));

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(...rest);