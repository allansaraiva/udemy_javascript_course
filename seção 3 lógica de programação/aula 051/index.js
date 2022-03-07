const person = {
  name: 'Allan',
  lastName: 'Saraiva',
  age: 21,
  address: {
    city: 'Natal',
    number: 10
  }
};

const {name: test, lastName, age} = person;

console.log(test, lastName, age);