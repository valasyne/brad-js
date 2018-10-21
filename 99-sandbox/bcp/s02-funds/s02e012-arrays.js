// Create some arrays
const numbers = [43, 56, 33, 23, 34, 36, 5];
const numbers2 = new Array(32, 45, 33);
const fruit = ['apple', 'banana', 'orange', 'pears'];
const mixed = [22, 'banana', null, {a:1, b:1}, new Date()];


let val;
// Length
val = numbers.length;

// chack if is array
val = Array.isArray(numbers);

// Get a value
val = numbers[3];
val = numbers[0];

// Insert into an array
numbers[2] = 100; // replace

// Find index of value
val = numbers.indexOf(36);


// // Mutate
// // Add on to the end
// numbers.push(250);
// // Add on to the front
// numbers.unshift(120);
// // Take off from the end
// numbers.pop();
// // Take of from the front
// numbers.shift();
// // Splice values
// // numbers.splice(1, 1); // from and to - just one value here
// numbers.splice(1,3);
// // reverse the array
// numbers.reverse();

// Concatenate
val = numbers.concat(numbers2);
// Sort
val = fruit.sort();
// val = numbers.sort();
// val = numbers.sort(function(x, y){
//   return x-y;
// });
// val = numbers.sort(function(x, y){
//   return y-x;
// });

// Find
function under50(num) {
  return num < 50;
}
function over50(num) {
  return num >50;
}

// Find the first el thats under 50
val = numbers.find(under50);
val = numbers.find(over50);

// console.log(numbers);
// console.log(val);

var arr2 = [23, 11, -11, 103, 78, 45, 19];
console.log(`Array: ${arr2}`);
var arraySorted = arr2.sort(function(x, y) {
  return x-y;
});
console.log(`Sorted Array: ${arraySorted}`);


