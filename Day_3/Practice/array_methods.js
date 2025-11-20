
var test=['ramesh0','ramesh1','ramesh2','ramesh3','ramesh4','ramesh5','ramesh6','ramesh7','ramesh8'];
console.log(test);


console.log(test[2]);
console.log(typeof(test));
console.log(typeof(test[0]));
console.log(test.length);
console.log(test[5].valueOf());



// 1.push                         // add element to last

console.log(test.push('ramesh9'));
console.log(test);



// 2.pop                         // remove last element

console.log(test.pop('ramesh9'));
console.log(test);



// 3.unshift                    // add element to start

console.log(test.unshift('ramesh'));
console.log(test);



// 4.shift                      // remove first element

console.log(test.shift('ramesh'));
console.log(test);



// 5.slice                         

/**  give new array by cutting from given index to another given index -1 
*  does not affect the original array  */
// it will include start index but excludes the last index  \\

console.log(test.slice(0,4));       // (start and end index) 



// 6. splice                       

/**  remove the elements from array, from given starting index and given no. of elements to remove
and can also replace the elements by given elements.
splice can affect the original array      */
 
console.log(test.splice(0,2,'raj0','raj1'));  
console.log(test);

// splice(start index, how many to remove, new elements to be added);
// splice is used to add or remove elements from an array. 
// this method will return removed elements 
// If no new added elements are there then also this will perform operation



//  7. join                        // convert array to string

console.log(test.join(''));

// join ==> will convert array to string
// split ==> will convert string to array



//  8. concat                       // add two array and give new array

let test2=['raj0','raj1','raj2','raj3',]
console.log(test.concat(test2));

// concat will combine two arrays and return new array with all added elements.



//  9. reverse                      // reverse the elements in the array

console.log(test.reverse());



//  10. combination of split and reverse            // to reverse string

var test3='ramesh bapurao borate';  

var test4=test3.split(' ');
var test5=console.log(test4.reverse());



//  11. toString                                // convert array to string

console.log(test.toString());



//  12. filter          //  will perform operation on all elements and return all elements who can satisfy the condition.

let test6=[1,2,3,4,5,6,7,8,9,10];

console.log(test6.filter(value => value >4));

console.log(test6.filter(value => value%2==0)); //even

console.log(test6.filter(value => value%2==1)); //odd



// difference between find returns 1st matching element &&&&&&&  filter returns all matching elements



//  15. find                // perform operation and return first element that matches condition

console.log(test6.find(item => item >7));        // return first matching element

console.log(test6.filter(value => value >7));    // return all matching elements



//  13. map             // map will perform operation on each element of array and return new array of same length.

console.log(test6.map(item => item +5));

console.log(test6.map(item => item ** item)); //square

console.log(test6.map(item => item /3)); // divide by 3

console.log(test6.map(n => String(n)));      // each element convert to string

console.log(test6.map(n => n ** 3));         // cube 

console.log(test6.map(() => 1));             // convert all elements to 1



//  14. Reduce            // Reduce an array to a single value (number, object, string, array, etc.).

var test7=test6.reduce(function(res,item){
    return res*item                                     // product of all elements
},1);
console.log(test7);

let sum = test6.reduce((acc, curr) => acc + curr, 0);       // sum
console.log(sum);

let max = test6.reduce((acc, curr) => curr > acc ? curr : acc, test6[0]);       // max
console.log(max);

