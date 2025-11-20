
let test1="India is a only country where people from all religions stays happily, expect one";
console.log(test1);



//  1.  typeof                              // returns datatype

console.log("typeof: "+typeof(test1));



//  2.valueof                              // returns value

console.log("valueof: "+test1.valueOf());



//  3.charAt                                // character at given index

console.log("charAT 20: "+test1.charAt(20));    // return empty if not found



//  4.length                                // lentgh of string

console.log("length: "+test1.length);



//  5.charCodeAt                            // ascii code of character of given code

console.log("charCodeAt(1): "+test1.charCodeAt(1));



//  6. concatination                        // combines strings

console.log("concatination: "+test1+ " religion");
console.log(test1);



//  7.indexof                               // index of given word

console.log("Indexof('stays): "+test1.indexOf('stays'));        // give start index of matching word
console.log("Indexof('stays): "+test1.indexOf('stayss'));       // returns -1 if does not find given word



//  8.replace                    //  replace words if found otherwise return original string

console.log("replace(one, two): "+test1.replace('one','two'));



//  9.search                                // search for given word

console.log("Search('happily): "+test1.search('happily'));         // first index of search string
console.log("Search('happy): "+test1.search('happy'));            // return -1 if not found



//  10.slice                               // return new string by cutting 

// includes start index and excludes end index
// does not affect original string

let test2="India is a only country where people from all religions stays happily, expect one";
console.log("Slice(0,5): "+test2.slice(0,5));  



//  array slice
var text1 = ['Nitin', 'Mahesh', 'Shivani', 'Vishnu', 'Ashotosh', 'Nisha', 'Savita'];
console.log("arraySlice(0,5): "+text1.slice(0,5));



//  11. split                                      // convert string to array

console.log(test1.split(' '));              // split word after every single space or takes every single word as elements

console.log(test1.split('  '));             // split word after two sapces or takes whole string as one element

console.log(test1.split(''));               // split every character including space,comma



//  12.substring                            //  same as slice but (start index , end index)

console.log("substring: "+test1.substring(0,5));



// 13.toUPPERCASE / tolowercase             // all letters capital or small 

console.log("UPPERCASE: "+test1.toUpperCase());

console.log("lowercase: "+test1.toLowerCase());


