// const color = 'green';

// switch(color) {
//   case 'red': console.log('Color is red'); break;
//   case 'blue': console.log('Color is blue'); break;
//   default: console.log('Color is not red or blue');
// }

let today = new Date();

switch(today.getDay()) {
  case 0: console.log('Sunday'); break;
  case 1: console.log('Monday'); break;
  case 2: console.log('Tuesday'); break;
  case 3: console.log('Wednesday'); break;
  case 4: console.log('Thursday'); break;
  case 5: console.log('Friday'); break;
  case 6: console.log('Saturday'); break;
}

console.log(`Now is ${today}`);