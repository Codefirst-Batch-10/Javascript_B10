/* Clousure : 
An inner function can still access variables of its outer function, even if the outer function is done running
*/


function outer(){
    var counter=0;
    // console.log(count);
    
    function inner(){
        var count=0;
        counter++;
        console.log(counter);
        
    }
    inner();
}
outer();



//----------------------------------------------------------------------------------------------------------------


function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

const fn = outer();
fn(); // 10



//----------------------------------------------------------------------------------------------------------------


for (var i = 1; i <= 3; i++) {
  (function(x){
    setTimeout(() => console.log(x), 100);
  })(i);
}



//----------------------------------------------------------------------------------------------------------------


function bank() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log(balance);
    }
  }
}

const acc = bank();
acc.deposit(500); // 1500
acc.withdraw(200); // 1300



//----------------------------------------------------------------------------------------------------------------