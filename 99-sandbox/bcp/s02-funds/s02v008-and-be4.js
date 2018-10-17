// S02E08 DATA CONVERSIONS
let val;
val = 5;
val = String(555);
val = String(true);
val = String(new Date());
val = String([1,2,3,4]);
val = [4,5,6].toString();
val = true.toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Hello");
val = Number([1,2,3]);

// parseInt()
val = parseInt('100.30');
val = parseFloat('100.3');

// Coersion
const val1 = '5';
const val2 = 6;
const sum = val1 + val2;

// Output 2
console.log(sum);
console.log(typeof sum);

// // Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2))


// // S02E07 DATA TYPES 
// // Primitive
// // String
// const name = "John Smith";
// // Number 
// const age = 26;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbol 
// const sym = Symbol();
// // Array
// const hobbies = ['movies', 'music'];
// // Object literals 
// const address = {
//   'city': 'Boston',
//   'state': 'MA'
// }
// const today = new Date();

// console.log(typeof today);




// S02V06 VARIABLES - var, let, const
// const person = {
//   name: "John",
//   age: 30
// }
// person.name = "Sarah";
// person.age = 32;
// console.log(person);
// const numbers = [1,2,3, 4,5];
// numbers.push(6);
// console.log(numbers);
// numbers = [2,3,4];
// console.log(numbers);

// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // initialize
// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);

// // letters, numbers, _'s, $
// // can't start with a number
// var $name = "Vassily";
// console.log($name);

// VERSION 01 - S02V05
// // alert("Hello World");

// // log to console
// console.log("Hello World");
// console.log(123);
// console.log(true);
// var greeting = "Hello";
// console.log(greeting);
// console.log([1,2,3,5]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});


// console.error('This is some error');
// // console.clear();
// console.warn('This is a warning');

// console.time('Hello');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.timeEnd('Hello');