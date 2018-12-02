// // document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// taskTitle.style.background = "brown";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";


// taskTitle.textContent = 'Godzilla Tasks';
// taskTitle.innerText = "My Godzilla Tasks";
// taskTitle.innerHTML = '<span style="color:red">My Godzi Tasks</span>'

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
// console.log(1);
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';