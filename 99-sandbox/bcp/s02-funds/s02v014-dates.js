let val;

const today = new Date();
const bDate = new Date ('1976-10-26');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

bDate.setMonth(3)
bDate.setDate(12);
bDate.setFullYear(1995);
bDate.setHours(13);
bDate.setMinutes(30);
bDate.setSeconds(25);

console.log(val);
console.log("==========");
console.log(bDate);