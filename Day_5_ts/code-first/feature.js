//   // arrau fn
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var arr1 = [2, 45, 4, 8];
var arr2 = [8, 5, 9, 0];
var merge = __spreadArray(__spreadArray([], arr1, true), arr2, true);
var concate = arr1.concat(arr2);
// console.log(merge);
// console.log(concate);
// console.log(Math.max(...arr1));
var copyArr = __spreadArray([], arr2, true);
// console.log(copyArr);
// Rest 
var sum = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    numbers.reduce(function (intial, cumm) {
        return intial + cumm;
    }, 0);
};
console.log(sum(2, 57, 9));
var _a = [1, 2, 3, 4, 5], first = _a[0], rest = _a.slice(1);
console.log(first);
console.log.apply(console, rest);
