/**for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);

}**/


//pyarimid pattern
let n=4;
for(let i=1;i<=n;i++){
    let row="";

    for(let s=1;s<=n-i;s++){
        row +="";
    }
    for(let j=1;j<=2*i-1;j++)
    {
        row+="*"
    }
    console.log(row)
    

}


