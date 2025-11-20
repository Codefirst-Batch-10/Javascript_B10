let sum =0;

for (let i = 1; i <= 15; i++) {
    sum = sum + i;
    console.log(i)
}

console.log("Sum =", sum);


const product=["Mobile","laptop","shoes","watch"]

for(let i=0;i<product.length;i++){
    console.log("Product",product[i])
}

const marks=[100,100,100,100]
let total=0;
for(let i=0;i<marks.length;i++)
{
total +=marks[i];
}
let average=total/marks.length;
console.log("Average=",average)