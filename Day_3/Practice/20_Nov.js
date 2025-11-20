// Data types

//String
let str1 = "Bharat maza desh ahe ";
let str2 = "Ani Pakistan murdabad";

// let addedStr = str1.concat(str2);
// console.log(addedStr);

// let res = str1.slice(2, 4);
// console.log(res);

let res = str1.substring(0, 4);
console.log(res.toUpperCase());

// Boolean

// let a = true;
// console.log(a + false);

// Null and Undefined
// let a = null;
// console.log(a);

// let b;
// console.log(b);

// Array

let arr = ["nitin", "kunal", "kk", "shubz", "dips", "viabz"];
// console.log(arr[2]);
// console.log(typeof arr); object
// console.log(typeof arr[0]); string

// 1.push - is add a new element at the end of array
// arr.push("new");
// console.log(arr);

// 2.pop - pop will remove last element of an array
// console.log(arr.pop());
// console.log(arr);

// 3. unshift - unshift will add a new element to the start of an array and return length of new array

// console.log(arr.unshift("dips"));
// console.log(arr);

// 4.shift - shift will remove first element of an array and return first or removed element from array
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// 5.slice - slice(start index, end index) - slice returns new array of given start index and ending index -1 (index starts from 0)

// console.log(arr);

// let arr2 = arr.slice(1, 2);

// console.log(arr2);

// 6.splice - is used to add or remove elements from array
// splice(starting index, how many to remove , new element to be added)

// console.log(arr);

// let arr2 = arr.splice(1, 1);
// let arr2 = arr.splice(1, 1, "monal");
// console.log(arr2);
// console.log(arr);

// 7.join - join will convert a array to string

// let arr2 = arr.join();
// console.log(arr2);
// console.log(typeof arr2);

// 8.split - split will convert a string to an array

// let str = "hellooso sas";
// let arr2 = str.split();
// console.log(arr2);
// for (i of arr2) {
//   console.log(i);
// }

// 9.concat - it will combine two arrays and return new array with all added elements

// let arr2 = ["wewe", "wewe"];
// let newarr = arr.concat(arr2);
// console.log(arr);

// console.log(newarr);

// 10. combination of split and reverse

// let str = "Jai Hind, Jai Maharastra";
// console.log(str.split());
// let newStr = "";

// for (i of str) {
//   newStr = i + newStr;
// }
// console.log(newStr);

// let arr2 = newStr.split();
// console.log(arr2);

// for (i of arr2) {
//   console.log(i);
// }

// let reversed = str.split("").reverse().join("");

// console.log(str);

// 11.toString - converts a array to a string

// console.log(arr.toString());

// 12.map - map will perform operation on each element of array and return new array
// let newArr = [1, 3, 5, 6, 8, 9];
// let gege = newArr.map((i) => i * 2);
// console.log(gege);

// 13.filter - is perform operation on each element of array and return new array

// const newArr = [2, 1, 5, 3, 7, 9, 99, 9, 9, 9];
// let res = newArr.filter((i) => i == 9);
// console.log(res);

// 14.find - is perform opertion on finding an element from array if found then it breaks without searching further
// const newarr = [2, 54, 2, 23, 6, 2, 2, 2, 6, 2];
// let res = newarr.find((i) => i == 2);
// console.log(res);

// 15.reduce - reduce is an array method that reduces an array to a single value by applying a function to each element

// let arr2 = [3, 5, 6, 7, 2, 2];

// let res = arr2.reduce((res, item) => {
//   return res * item;
// }, 0);

// console.log(res);
