// FUNCTION DECL

// function greet(fName = 'John', lName = 'Doe') {
//   console.log(lName);
//   // console.log('Hello');
//   return 'Hello ' +fName +' '+ lName;
// }

// console.log(greet(fName='Jenkins'));

// const sq = function(x=3) {
//   return x*x;
// };

// console.log(sq(22, 15));

// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS
// (function() {
//   console.log('IIFE Ran...')
// })();

// (function(name) {
//   console.log(`Hello ${name}`);
// })('Vassily') 

// PROPERTY METHODS
const todo = {
  add: function() {
    console.log('Add todo...');
  }, 
  edit: function(id) {
    // console.log(`${id}`)
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function() {
  console.log('Delete todo...');
};


todo.add();
todo.edit(23);
todo.delete();
