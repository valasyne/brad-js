const person = {
  fName: 'Steve',
  lName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    'city': 'Miami',
    'state': 'FL'
  },
  getBirthYear: function() {
    return 2018 - this.age;
  }
}

let val;

val = person;
val =person.fName;
val = person['fName'];
val = person.age;
val = person.hobbies[1];
val = person.address['city'];
val = person.getBirthYear();

console.log(val);