
//                              IF ELSE                                

// if(condition){code};

//---------------------------------- number is +ve,-ve or zero -------------------------

let num = -5;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


//---------------------------------------- even or odd -------------------------------------------------

let number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//----------------------------------------  -------------------------------------------------

let marks = 85;

if (marks >= 90) {
    console.log("A+");
} else if (marks >= 75) {
    console.log("A");
} else if (marks >= 50) {
    console.log("B");
} else {
    console.log("Fail");
}


//---------------------------------------- divisible by 3 and 5 -------------------------------------------------

let n = 115;

if (n % 3 === 0 && n % 5 === 0) {
    console.log("Divisible by 3 and 5");
} else if (n % 3 === 0) {
    console.log("Divisible by 3 only");
} else if (n % 5 === 0) {
    console.log("Divisible by 5 only");
} else {
    console.log("Not divisible by 3 or 5");
}

//---------------------------------------- &&  -------------------------------------------------

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}
