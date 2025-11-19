
//                               FOR LOOP                                

// for loop is used when u know how many times u have to iterate

// for(Initialisation; condition(runs till condtion become false) ; incr/decreament ){}


//---------------------------------- printing 1 to 5 ------------------------------------------------

for (i = 1; i <= 5; i++) {
    console.log(i);
}

//---------------------------------- reverse string  ------------------------------------------------

function strf(str){
    let x='';
    for(let val of str){
        x=val+x;
    }
    console.log(x);
    
}
strf('etarob ouaupab hsemar');

//---------------------------------- reverse array  ------------------------------------------------

let arr=[1,2,3,4,5,6];
let rev=[];

// for(let i=0; i<arr.length;  i++){
//     rev.unshift(arr[i]);
// }

for (let val of arr){
    rev=[val,...rev]
}

console.log(rev);

//---------------------------------- string palindrome ------------------------------------------------

// let word='hello'; 
let word='madam';
let isPalindrome=true;
for (let i=0; i<Math.floor(word.length/2); i++){
    if(word[i]!==word[word.length-1-i]){
        isPalindrome=false;
        break;
    }
}
console.log(isPalindrome);


//---------------------------------- count vowels ------------------------------------------------

let  text='hello world';
let count=0;

for(let char of text.toLocaleLowerCase()){
    if("aeiou".includes(char))
        count++;
}
console.log(count);

//---------------------------------- sum of all numbers ------------------------------------------------

let arr1=[20,30,50];
let sum=0;

for(let num of arr1){
    sum+=num;
}
console.log(sum);


//---------------------------------- largest number ------------------------------------------------

let arr2 = [5, 10, 2, 8, 3];
let max = arr2[0];
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > max) max = arr2[i];
}
console.log(max); // 10

//----------------------------------  ------------------------------------------------