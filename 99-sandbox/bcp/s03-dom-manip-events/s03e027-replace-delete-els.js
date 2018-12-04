// What we wanna change
{/* <h5 id="task-title">Tasks</h5> */}

// Replace element


// Create element
const newHeading  = document.createElement('h2');
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
const parentEl = oldHeading.parentElement;


// Replace 
parentEl.replaceChild(newHeading, oldHeading);
// console.log(newHeading);
// console.log(oldHeading);
// console.log(parentEl);

// Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');


// console.log(lis[0]);
// Remove the item separately, and as the child element

lis[0].remove();
list.removeChild(lis[3]);

// Classes and Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className; // delete-item secondary-content
val = link.classList; // DOM Token List
val = link.classList[1];
link.classList.add('test');
link.classList.remove('test');
val = link; // <a href="#" class="delete-item secondary-content test">...</a>

// Attributes
val = link.getAttribute('href');
link.setAttribute('href', 'http://google.com');
val = link;
link.setAttribute('megatitle', 'Google');
val = link.hasAttribute('megatitle');
link.removeAttribute('megatitle');
val = link;
console.log(val);