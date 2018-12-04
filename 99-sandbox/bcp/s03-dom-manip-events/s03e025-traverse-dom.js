let val;


const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
// val = list.childNodes;
// val = list.children;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeName;
// val = list.childNodes[0].nodeType;
// val = list.childNodes[1].nodeType;


// 1 - Element 
// 2 - Attribute (deprecated)
// 3 - Text node 
// 8 - Comment 
// 9 - Document itself 
// 10 - Doctype 


// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Some sample text';

// Children of children
val = list.children[3].children;
list.children[3].children[0].id = 'test-id';

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;


val = list.childElementCount;


// Get the parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;


// Siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.previousSibling;
val = listItem.previousElementSibling;


// console.log(listItem);
console.log(val);