// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//   console.log('Hello World');
// });
function onClick(e) {
  console.log('Clicked');
  let val;
  val = e;
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello';

  // Event type
  val = e.type;


  // Timestamp
  val = e.timeStamp;

  // Coordinates rel to window
  val = e.clientY;
  val = e.clientX;

  // Coordinates rel to the element itself
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}

document.querySelector('.clear-tasks').addEventListener('click', onClick);
