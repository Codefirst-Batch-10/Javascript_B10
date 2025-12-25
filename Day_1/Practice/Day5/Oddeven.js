function odd(a){
    const remider=a%2;
    if(remider===0){
        return "evern"
    }else{
        return "odd"
    }
}
console.log(odd(12));
console.log(odd(13));
console.log(odd(-25));
console.log(odd(-24));

function turnary(a){
    return a%2===0? "evern":"odd"

}
console.log(turnary(13))


