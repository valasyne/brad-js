const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keyup
// taskInput.addEventListener('keyup', runEvent);
// Keypress 
// taskInput.addEventListener('keypress', runEvent); 
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur (opposite of focus)
// taskInput.addEventListener('blur', runEvent);
// Cut & paste
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
// taskInput.addEventListener('copy', runEvent);

// Input event - fires off on any input event
// taskInput.addEventListener('input', runEvent);

// Change event on select lists
select.addEventListener('change', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  // Catch event from each keydown
  console.log(e.target.value);

  // heading.innerText = e.target.value;

  // stop the default behav
  // console.log(taskInput.value);
  // e.preventDefault();
}