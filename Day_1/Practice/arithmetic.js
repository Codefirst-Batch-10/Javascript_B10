first = 30;
second = 3;

console.log("additions is " + (first + second));
console.log("substraction is " + (first - second));
console.log("multiplication is " + first * second);
console.log("division is " + first / second);
console.log("mod is " + (first % second));

let inc = ++first;
let dec = --second;
console.log(
  "increament of " +
    first +
    " is " +
    inc +
    " and decreament of " +
    second +
    " is " +
    dec
);

let age = 18;
let isAdult = age > 18 ? "adult" : "not applicable";
console.log(isAdult);
