let orderProduct = new Promise((res, rej) => {
  let fetchData = true;
  if (fetchData) {
    res("order places");
  } else {
    rej("Cancelled");
  }
});
orderProduct.then((res) => console.log(res));
orderProduct.catch((err) => console.log(err));
