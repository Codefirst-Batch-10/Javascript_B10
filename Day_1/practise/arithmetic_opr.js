let x=20 , y=10;

console.log('add: '+ (x+y)); 
console.log('sub: '+ (x-y));
console.log('div: '+ (x/y));
console.log('mult: '+ (x*y));
console.log('mod: '+ (x%y));
console.log('inc: '+ (x++));
console.log('dec: '+ (y--));

console.log(true+true);  // 2
console.log(true+null); //1
console.log(true+[]);   //true
console.log(true*false);    //0
console.log(null+null);     //0
console.log(null+undefined);    //nan
console.log(null+NaN);          //nan
console.log(undefined+undefined);   //nan
console.log(NaN+NaN);       //nan

console.log('12+23'+2);      //12+232
console.log(2-'12');        // -10
console.log('22'-12);        // 10

