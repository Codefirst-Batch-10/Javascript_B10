// Closures
/* Clousure : 
An inner function can still access variables of its outer function, even if the outer function is done running
*/

/* function outer() {
//     let counter = 0;
//     console.log(count);
//     function inner() {
//        var count = 0;
//         counter++;
//         console.log(counter);
//     }
//     inner();
// }
// outer();

/*

// function outer() {
//   let counter = 0;
//   if (counter == 2) {
//     return "Hello";
//   } else {
//     console.log("API Call");
//   }
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
//   return true;
// }

// let add = outer();
// console.log(add);

// Promises:
/*
A Promise is an object that represents a value that may not be available yet but will be resolved in the future.

States of a Promise:
Pending → still working.
Fulfilled → success (resolved).
Rejected → failed (error).
 */
// let orderProduct = new Promise((resolve, reject) => {
//   let data = false;
//   if (data) {
//     resolve("data found");
//   } else {
//     reject("no data");
//   }
// });

// orderProduct.then((res) => console.log(res)).catch((err) => console.log(err));

// function fetchProducts() {
//   return new Promise((res, rej) => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => {
//         if (res.ok) {
//           debugger;
//           return res.json();
//         } else {
//           rej("Failed to fetch products");
//         }
//       })
//       .then((data) => res(data))
//       .catch((err) => rej("Error- " + err));
//   });
// }

// fetchProducts()
//   .then((products) => {
//     debugger;
//     console.log("Products received!");
//     console.log(products);
//   })
//   .catch((error) => console.log(error));

// Async / Await

// function delivery() {
//   return new Promise((response, reject) => {
//     setTimeout(() => {
//       resolve("product delivered");
//     }, 3000);
//   });
// }

// function payment() {
//   return new Promise((response, reject) => {
//     setTimeout(() => {
//       resolve("Payment done");
//     }, 5000);
//   });
// }

// async function orderPlaced() {
//   console.log("Order Placed");
//   let pay = await payment();
//   console.log(pay);
//   let del = await delivery();
//   console.log(del);
//   console.log("Product revieved");
// }

// orderPlaced();

function payment() {
  setTimeout(() => {
    console.log("payment done");
  }, 5000);
}

function delivery() {
  setTimeout(() => {
    console.log("Delivery Done");
  }, 2000);
}

let order = async function orderPlace() {
  console.log("Order Placed");

  let pay = await payment();
  console.log(pay);
  let del = await delivery();
  console.log(del);
  //   console.log("Product Recieved");
};

// order();*/
