// function factorial(num){
//     let res = 1;
//     for(let i = 1; i <= num ; i++){
//         res = res * i;
//     }
//     return res;

// }
// console.log(factorial(5));
// function fact(num){
//     let res = 1;

//     for(let i = 1; i <= num; i++){
//         res = res * i;
//     }
//     return res;
// }
// console.log(fact(6));

// **************************************************Palindrom Number

// function palindromStr(str){

//     let cheakPalindrom = str.split('').reverse('').join('');
//     return str === cheakPalindrom;

// }
// console.log(palindromStr("nayan"));
// console.log(palindromStr("dasddss"));

//*********************************FIND LARGESTNUMBER IN ARR*************************** */

// function largeNum(num){

//     let max = num[0]
//     for(let i = 1; i< num.length; i++){
//         if(max < num[i]){
//             max = num[i]
//         }
//     }
//     return max;
// }
// console.log(largeNum([5,2,9,7,66,33,45,52,86,]));

//**************************count vowels********** */

// function countVowels(str){
//     let count = 0;
//     let vowels = "aeiouAEIOU"

//     for(let i = 0; i < str.length ; i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("asdaedeeiioeuyrwaue"));

// **************************************FUNCTIONREVERSED*************************

// function reversedArray(rev){
//     let reverse = [];

//     for(let i = rev.length - 1; i >= 0; i--){
//         reverse.push(rev[i]);
//     }
//     return reverse;
// }
// console.log(reversedArray([1,2,3,4,5]));

// **********************************REMOVE DUPLICATE****************************

// function removeDuplicate(rem){
//     return [...new Set(rem)];

// }
// console.log(removeDuplicate([1,2,1,3,6,4,6,8,3,9,0,4,5,44,56,3]));

//*************************************FIBONACCIS FUNCTION************* */

function fibonacci(n) {
  let a = 0;
  let b = 1;

    console.log(a); // first term
  if (n > 1) console.log(b); // second term

  for (let i = 3; i <= n; i++) {
    let next = a + b;
    console.log(next);

    a = b;
    b = next;
  }
}

fibonacci(4);
