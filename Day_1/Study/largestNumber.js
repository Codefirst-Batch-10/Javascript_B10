let arr=[10,20,30,40,50];
let largestNumber=arr[0];

for(let i=1;i<arr.length;i++){
    if(arr[i]>largestNumber){
        largestNumber=arr[i];
    }
}
console.log("The largest number in the array is: " + largestNumber);


let marks;
switch(marks>=90){
    case true:
        console.log("Grade A");             
        break;
    case false:

        switch(marks>=75){
            case true:
                console.log("Grade B");
                break;
            case false:

                switch(marks>=60){
                    case true:
                        console.log("Grade C");
                        break;
                    case false:
                        console.log("Grade F");
                }
        }  }