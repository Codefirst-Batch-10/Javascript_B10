// Default parameter
var data = function (a, b) {
    var sum = a + b;
    // secAdd(sum);
    console.log(sum, 'this is set data');
};
data(10, 15);
var secAdd = function (sum) {
    console.log(sum);
};
