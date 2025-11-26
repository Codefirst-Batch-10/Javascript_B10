//  1.  arrow function
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arrFunc = function () {
    console.log('this is arrow function');
};
arrFunc();
// 2.   arrow function with parameter
var arrfunc2 = function (data) {
    console.log("this is arrow function_".concat(data));
};
arrfunc2(20);
// 3.   single line function
var single = function (data) {
    if (data === void 0) { data = 'function'; }
    return "single line ".concat(data);
};
// 4.   Anonymous function
var anon = function () {
    console.log('Anonymous');
};
var funct = (function (a, b) {
    console.log(a);
    console.log(b);
});
funct(20, anon());
//--------------------------------------------------------------------------
//           Spread and Rest
var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };
var mergedObj = Object.assign(obj1, obj2);
console.log(mergedObj);
var arr3 = [2, 45, 4, 8];
var arr4 = [8, 5, 9, 0];
var merged = __spreadArray(__spreadArray([], arr3, true), arr4, true);
var conCat = arr3.concat(arr4);
console.log(merged);
console.log(conCat);
console.log(Math.max.apply(Math, arr3));
var copyAr = __spreadArray([], arr4, true);
console.log(copyAr);
//                  Rest
var sum1 = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    number.reduce(function (initial, cumm) {
        return initial + cumm;
    }, 0);
};
console.log(sum1(1, 2, 3, 4, 5, 6, 7));
var _a = [1, 2, 3, 4, 5, 6, 7], first1 = _a[0], Rest = _a.slice(1);
console.log(first1);
console.log.apply(console, Rest);
