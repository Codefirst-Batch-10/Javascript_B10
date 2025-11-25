/**for(let count=1;count<=1000;count++)
{
    console.log("apna college is importnat for anyone")
}
console.log("loop has ended");

let marks=10;
for(let i=10;i<=15;i++)
{
    percentange=marks+i;
}
console.log(marks);**/
//while loop
/**let i=1;
while(i<=5){
    console.log("praidp");
    i++
}**/

//do while loop

/**let i=1;
do{
    console.log(i)
    i++;
}while(i<=5);**/

/**let str="javascript"
let size=0;
for(let  val of str){
    console.log("i",val);
    size++;
}
console.log("size"+size);**/

let student={
    name:"Pradip ",
    lastname:"kakde",
    age:30,
    rollno:25,
    cgpa:2.5,
    isapss:true
};
for(let key in student){
    console.log("key=",key,"value=",student[key])
}