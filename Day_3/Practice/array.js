var test1 = ['Nitin','sumar','ajay','vijay','dipak','sudip','soham']

// console.log(test1[0]); 
// console.log(typeof(test1[0]));-->String
// console.log(typeof(test1));--> object

// console.log(test1.length); -->


// ******************push method**************
// let addname = test1.push('naman');
// console.log(addname);
// console.log(test1);
// --> add the name in the test1 array

//**********************pop method **************/

// let remove = test1.pop();
// console.log(test1);

// --> pop means remove last element on array

//**********************************unshift */

// let addonStart = test1.unshift('kartik')
// console.log(test1);
// --> unshift is use for add new element on starting position on array


//*****************************shift********* */

// let removeFirst = test1.shift()
// console.log(test1);

// --> shift is use to delet first value in the array


//*********************slice*************************** */

// let test2 = test1.slice(1,3)
// console.log(test2);
// --> slice is work as like a give in between element


//******************splice******************* */
// let test3 = test1.splice(3)
// console.log(test3);

// --> splice is use to add or reove element from array

// *******************combination of split and reverse*****************

// let test4 = "rahul is here , mumbai";
// let test5 = test4.split('').reverse().join('');
// console.log('test4==>',test4);

//********************reverse******************** */

// test1.reverse();
// console.log(test1);

// ***********************tostring***************

// let newStart = test1.toString()
// console.log(newStart);

// --> toString conver array to string

// ***********************map******************

// let mapping = [1,2,3,4,5];
// let mapping2 = mapping.map(item => item + 5);
// console.log(mapping2);

// --> mapping is perform operation on every element 

// **********************Fillter********************

// let arr = [{id:2},{id:3},{id:3}];
// console.log(arr);

// let newArr = arr.filter(item => item.id===3)
// console.log(newArr);

// -->filter() is an array method in JavaScript that creates a new array containing only the elements that pass a given test (condition).


// ********************Find**************

// let arr = [{id:1},{id:2},{id:3},{id:4}]
// let arr2 =arr.find(item => item.id === 1 )
// console.log(arr2 );


// *****************************Reduce********
// let num = [1,2,3,4,5];
// let total = num.reduce((acc, curr)=> acc + curr,0);
// console.log(total);

// let add = [2,3,1,4,6];
// let newAdd = add.reduce((resp,req)=> resp + req ,0)
// console.log(newAdd);
// reduce() is an array method that reduces an array to a single value by applying a function to each element.
