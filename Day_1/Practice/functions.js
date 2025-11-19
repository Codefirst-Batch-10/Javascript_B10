function addValues(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const multiplication = (a, b) => a * b;

let division = (a, b) => a / b;

// console.log(addValues(3, 5));
// console.log(multiplication(33, 2));
// console.log(sub(33, 2));
// console.log(division(33, 3));

async function fetchDataa() {
  let req = await fetch("https://github.com/");
  //   let res = await req.json();
  console.log("time interval is running");
}

// fetchDataa();
// let newdo = []
// const doubled = () => {
//   for (let i = 0; i < nums.length; i++) {
//     newdo[i] = nums[i] * 2;
//   }
//   console.log(newdo); // [2,4,6]
// };

// doubled();
