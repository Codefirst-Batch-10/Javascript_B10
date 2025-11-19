
//                                 SWITCH                                                   

// switch case is used when we have multiple number of conditions

// ------------------------------------------------ day -------------------------------------------------

let day = "Tuesday";

switch(day) {
    case "Monday":
        console.log("Start of the week");
        break;
        case "Tuesday":
            console.log("Second day");
            break;
            case "Friday":
                console.log("Almost weekend");
                break;
                default:
        console.log("Midweek day");
    }
    
// ---------------------------------------------------------------------------------------------------------

let arr = [1, 2, 3,4,5,6];

switch(arr.length) {
    case 0:
        console.log("Empty array");
        break;
    case 1:
    case 2:
        console.log("Small array");
        break;
    default:
        console.log("Large array");
}


// ------------------------------------------------ simple calculator ---------------------------------------------------------

let a = 10, b = 5;
let operator = "+";

switch(operator) {
    case "+":
        console.log(a + b);
        // break;
    case "-":
        console.log(a - b);
        // break;
    case "*":
        console.log(a * b);
        // break;
    case "/":
        console.log(a / b);
        break;
    default:
        console.log("Invalid operator");
}



// ---------------------------------------------------------------------------------------------------------

let grade = "B";

switch(grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    default:
        console.log("Needs improvement");
}



// ---------------------------------------------------------------------------------------------------------