//  1.  arrow function

let arrFunc=()=> {
    console.log('this is arrow function');
    
}

arrFunc();

// 2.   arrow function with parameter

let arrfunc2=(data:any)=>{
    console.log(`this is arrow function_${data}`);
    
}

arrfunc2(20);

// 3.   single line function

let single=(data:any='function')=> `single line ${data}`

// 4.   Anonymous function

let anon = () => {
    console.log('Anonymous');
    
}

let funct = ((a:any, b:any) =>{
    console.log(a);
    console.log(b);
    
});
funct(20, anon());


//--------------------------------------------------------------------------


//           Spread and Rest


const obj1={a:1, b:2};
const obj2={c:3, d:4};

const mergedObj=Object.assign(obj1,obj2);
console.log(mergedObj);


const arr3=[2,45,4,8];
const arr4=[8,5,9,0];

const merged=[...arr3, ...arr4];
const conCat=arr3.concat(arr4);
console.log(merged);
console.log(conCat);


console.log(Math.max(...arr3));
const copyAr=[...arr4];
console.log(copyAr);



//                  Rest


let sum1=(...number:any)=>{
    number.reduce((initial:any, cumm:any)=>{
        return initial+cumm;
    },0)
}
console.log(sum1(1,2,3,4,5,6,7));

const [first1, ...Rest] = [1,2,3,4,5,6,7];
console.log(first1);
console.log(...Rest);

