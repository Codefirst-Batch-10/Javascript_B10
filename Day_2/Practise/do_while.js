
//                                   DO WHILE

// do while will be execute at any cost for first time then depending on condition code will be executed.

// ------------------------------------------ print number 1 to 5----------------------------------------------------

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

// ------------------------------------------ print elements ----------------------------------------------------

let arr = [10, 20, 30];
let index = 0;
do {
    console.log(arr[index]);
    index++;
} while (index < arr.length);


// ------------------------------------------- count 5 to 1---------------------------------------------------

let count = 5;
do {
    console.log(count);
    count--;
} while (count > 0);

// ------------------------------------------- ---------------------------------------------------

let num = 2;
do {
    console.log(num);
    num += 2;
} while (num <= 10);

// ------------------------------------------- ---------------------------------------------------

let arr2 = [10, 2, 36, 45, 53];
let idx = arr2.length - 1;
do {
    console.log(arr2[idx]);
    idx--;
} while (idx >= 0);
