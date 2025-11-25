var number=prompt("Please enter your number");
var fact=1;
if(number==0)
{
    console.log(`The factorial number is ${number} 1`)
}else if(number<0)
{
    console.log(`the factorial -1 is not possible`);

}else{
    for(var i=1;i<=number;i++)
{
    fact=fact*i;
    console.log(`factorial of ${number} is ${fact}` )
}
}

/**function factorialrecursive(n){
    if(!Number.isInteger(n)||n<0)
    {
        throw new console.error("facotrial give the non negative interge");
        
    }
    if(n===0||n===1)
        return 1;

    return n * factorialrecursive(n-1);

}
console.log(factorialrecursive(10));**/