// // document.getElementsByClassName()

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// // items[3].textContent = 'Hello'; 

// // const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// // console.log(listItems);
// let listItems = document.getElementsByTagName('li');
// // console.log(listItems);
// // console.log(listItems[0]);
// listItems[0].style.color = 'red';
// listItems[3].textContent = 'Hello';

// // listItems.reverse();

// // Convert an HTML Coll to an array
// listItems = Array.from(listItems);
// listItems.reverse();

// listItems.forEach(function(li, index){
//   console.log(li.className);
//   li.innerText = `${index}: Hello`;
// });


// console.log(listItems);
const items = document.querySelectorAll('ul.collection li.collection-item');


items.forEach(function(item, index) {
  item.textContent = `${index+1}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');


liOdd.forEach(function(li, index) {
  li.style.background = '#ccc';
});

for (let i=0; i<liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);
console.log(typeof items);