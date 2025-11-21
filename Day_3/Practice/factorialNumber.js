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