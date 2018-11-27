// for 

// for (let i=0; i< 10; i++) {
//   // console.log(i);
//   if (i === 2) {
//     console.log('Two is my fav number.');
//     continue;
//   }

//   if (i===5) {
//     console.log('Stop looping');
//     break;
//   }
//   console.log('Number ' +i);
// }

// WHILE
// let i = 0;
// while (i<10) {
//   console.log(`Number + ${i}`);
//   i++;
// }

// DO WHILE
// let i = 100;
// do {
//   console.log(`Number ${i}`);
//   i++;
// }
// while (i<8);
// const cars = ['Ford', 'Chevy', 'Toyota', 'Honda'];
// // for (let i=0; i<cars.length; i++) {
// //   console.log(`${i}: ${cars[i]}`);
// // }
// cars.forEach(function(car) {
//   console.log(car);
// });
// const users = [
//   {id:1, name:"John"},
//   {id:2, name:'Sara'},
//   {id:3, name:'Caren'},
//   {id:4, name:'Vassily'}
// ];
// const ids = users.map(function(user) {
//   return user.id;
// });
// console.log(ids);


// const cars = ['Ford', 'Chevy', 'Toyota', 'Honda'];
// cars.forEach(function(car, index, arr) {
//   console.log(arr);
//   console.log(`${index+1}: ${car}`);
//   console.log('===========');
// });
const user = {
  fName: 'Vassily',
  lName: 'Lapitsky',
  age: 40
}
for (let x in user) {
  console.log(`${x}: ${user[x]}`);
}


//