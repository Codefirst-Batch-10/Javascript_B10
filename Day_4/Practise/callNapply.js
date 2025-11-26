
//         call():-    invokes a function immediately, and lets you set the this value and pass arguments one-by-one.


function greet() {
  console.log("Hello " + this.name);
}

const obj = { name: "Ramesh" };

greet.call(obj);       // Hello Ramesh


// ------------------------ --------------------------------------------



var stud = {
    fName:'Alex',
    lName: 'Simi',
    age: 15,
    getFullName: function(){
        var fullNm = this.fName +' '+ this.lName
        // console.log(fullNm);
    }   
}

stud.getFullName();
stud.fName =" CTS";
console.log(stud.fName);


// ------------------------ Passing Arguments with call --------------------------------------------


function intro(age, city){
    console.log(this.name, age, city);
    
}
const person={name:'ramesh'};

intro.call(person, 24, 'pune');



// ------------------------ --------------------------------------------------------------



//             apply():-   is same as call(), but arguments must be passed in an array.



function intro(age, city) {
  console.log(this.name, age, city);
}

const person1 = { name: "Ramesh" };

intro.apply(person1, [25, "Mumbai"]);
// Ramesh 25 Mumbai


// ------------------------ --------------------------------------------


function Person(a, b) {
  this.name = a;
  this.age = b;
}

const obj1 = {};
Person.apply(obj1, ["Ramesh", 25]);

console.log(obj1);
// { name: "Ramesh", age: 25 }
