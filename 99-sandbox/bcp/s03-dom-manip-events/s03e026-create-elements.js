// Create Element
const li = document.createElement('li');

// Add class, id
li.className = 'collection-item';
li.id = 'new_item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create a link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
// Add icon
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);


// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);