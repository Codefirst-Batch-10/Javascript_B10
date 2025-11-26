
//                                                 OBJECT

//           object is collection of data in { key : value } pairs 


//      1. simple object   



const person = {
    name: "Ramesh",
    age: 23,
    isDeveloper: true,
};
delete person.age;
// person.name='raj';
// return person.age;

console.log(person);   // "Ramesh"



const user = {
    name: "Ramesh",
    greet() {
        console.log("Hello " + this.name);
    }
};

user.greet();  // Hello Ramesh



const student = {
    name: "Raj",
    marks: {
        math: 90,
        science: 85
    }
};

console.log(student.marks.math); // 90




//          2.  using NEW keyword



const obj = new Object();

obj.name = "Ramesh";
obj.age = 23;

console.log(obj);



const d = new Date();
console.log(d);



const info = new Object();

info.name='ramesh';
info.isGraduate=true;
info.mobile='9552906367';
info.age=()=>{
    console.log(info.name)
};

console.log(info);
info.age();



const student1=new Object();

student1.name='raj';
student1.marks=30;
student1.result=()=>{
    if (student1.marks>35){
        console.log('result: pass');
    }else{
        console.log('result: fail'); 
    }
}

console.log(student1);
student1.result();




//           3.   OBJECT ASSIGN

// is used to copy properties from one object to another.



const obj1 = { a: 1, b: 2 };
const obj2 = {};

Object.assign(obj2, obj1);

console.log(obj2);  // { a: 1, b: 2 }



const user1 = { name: "Ramesh",address:'pune' };
const details = { age: 23 };

const result = Object.assign(user1, details);  // combine properties

console.log(result);



const obj3 = { x: 1 };

Object.assign(obj3, { y: 2 });       // update

console.log(obj3); // { x: 1, y: 2 }



const obj5 = { a: 1, b: { c: 2 } };                 //  shallow copy
                                                    // changes original object also
const copy = Object.assign(obj5);

copy.b.c = 99;

console.log(obj5.b.c); // 99 (changed!)
console.log(copy.b.c); // 99 (changed!)



const obj4 = { a: 1, b: { c: 2 } };                 //  Deep copy
                                                    // Does not changes the original object 
const deepCopy = JSON.parse(JSON.stringify(Object.assign(obj4)));

deepCopy.b.c = 99;

console.log(obj4.b.c); // 2 (unchanged!)
console.log(deepCopy.b.c); // 99 (changed!)



//             4.   Object.create()

//     creates a new object and sets another object as its prototype.



const person2 = {
    name:'ramesh',
    age:24,
    address:'pune'
};

const user2 = Object.create(person2);

user.isDeveloper=true; 
user.age=25;        

console.log(person2);
console.log(user2);


