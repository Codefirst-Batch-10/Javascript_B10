function Addition(){
    let result=10+5;
    document.getElementById("output").innerHTML="10+5="+result;
}

function Substraction(){
    let result=10-5;
    document.getElementById("output").innerHTML="50-2="+result;

}
function Multiplication(){
    let result=10*5;
    document.getElementById("output").innerHTML="10*5="+result;

}
function Division(){
    let result=10/5;
    document.getElementById("output").innerHTML="10/5="+result;
}
function Modulus(){
    let result=10%5;
    document.getElementById("output").innerHTML="10%5="+result;
}

let incrnumber=1;
function Increment(){
    incrnumber++;
    document.getElementById("output").innerHTML="increment result= "+incrnumber;
}

let decrement=5;
function Decrement(){
    decrement--;
    document.getElementById("output").innerHTML="Decreent result="+decrement;
}

