// Global scope

var a = 1;
let b = 2;
const c = 3;

// function tst() {
//   console.log(`A before declaring: ${a}`);
//   // console.log(`B before declaring: ${b}`);
//   console.log(`C before declaring: ${c}`);
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log(`Function scope: ${a}, ${b}, ${c}`);
// }

// tst();
// if (true) {
//   var a = 7;
//   let b = 8;
//   const c = 9;
//   console.log(`Block scope: ${a}, ${b}, ${c}`);
// }

for (var a = 1; a <=5; a++) {
  console.log(`Loop: ${a}`);
}

console.log(`Global scope: ${a}, ${b}, ${c}`);