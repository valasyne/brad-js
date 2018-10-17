const name = "John";
const age = 30;
const job = "Web Dev";
const city = "Miami";
let html;

// ES5 way
html = '<ul><li>Name: ' +name+ ' </li><li>Age: ' +age+ ' </li><li>Job: ' +job+'</li><li>City: ' +city+ '</li></ul>';

html = '<ul>' +
        '<li>Name: ' +name+ ' </li>'+ 
        '<li>Age: ' +age+ ' </li>' +
        '<li>Job: ' +job+'</li>' +
        '<li>City: ' +city+ '</li>' +
        '</ul>';

function hello() {
  return "Hello";
}

// Template strings
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age} </li>
    <li>Job: ${job} </li>
    <li>City: ${city} </li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age>30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;