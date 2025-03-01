// ARROW FUNCTIONS//

//Q-1

// Definition and Comparison //

// An Arrow Function is a concise way to write functions using the => syntax.
// it reduce the amount of code needed for function expressions.
// example:
const fun = (a,b) => a + b ;
console.log(fun(10,20));

//  traditional function
const fun2 = function(a,b){
return a + b ;
};
// arrow function
const fun3 = (a,b) => a + b;

// Q-2//

var add = (a,b) =>a+b;
console.log(add(10,20))

// Q-3//

const square = n => n*n;
console.log(square(10

))

// Q-4//

// If an arrow function having only one parameter then the paranthasis is optional.

// Q-5 //
// concise body (implicit return)
var cube = n => n*n*n
console.log(cube(5));

// block ReportBody(explicit return)
var cube2 =n => {
return n**5;
}
console.log(cube2(5))

// Q-6 //
var subtract = (num5,num6) => num5-num6
console.log(subtract(33-22))

// Q-7 //

const hi = () => "hello, world!";
console.log(hi());