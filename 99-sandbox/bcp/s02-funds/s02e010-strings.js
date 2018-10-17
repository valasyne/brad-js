const fName = "Vassily";
const lName = "Lapitsky";
const age = 38;
const str = "Hi there, my name's Vassily"
const tags = "web design, web dev";

let val;

val = fName + lName;

// Concatenate
val = fName + ' ' + lName;

// Append (add on a variable)
val = 'Vassily';
val += " Lapitsky";

val = "Hello, my name is " + fName + ' and I am ' + age;


// Escaping
val = 'That\'s awesome, I can\'t wait';
val = "That's awesome, I can't wait";


// Lenth
val = fName.length;

// Concat()
val = fName.concat(' ', lName);

// Change case
val = fName.toUpperCase();
val = fName.toLowerCase();

val = fName[0];

// indexOf()
val = fName.indexOf('s'); // 2
val = fName.lastIndexOf('s');  // 3
val = fName.lastIndexOf('z');  // -1

// charAt()
val = fName.charAt(2);

// get the last char
val = fName.charAt(fName.length - 1);

// substring
val = fName.substring(0, 4) ;  // Vass
val = fName.slice(0, 4);

// split
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace("Vassily", "Jack");

// includes()
val = str.includes('there');

console.log(val);