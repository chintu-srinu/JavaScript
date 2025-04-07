const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'tomato'];
const combined = [...fruits, ...vegetables];
console.log(combined);

const original = [1, 2, 3];
const copy = [...original];
console.log(copy);

const person = { name: 'John', age: 30 };
const personCopy = { ...person };
console.log(personCopy)

const person1 = { name: 'John', age: 30 };
const person2 = { job: 'Developer', country: 'USA' };
const merged = { ...person1, ...person2 };
console.log(merged);

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4));

  const person = {
    name: 'Emma',
    age: 28,
    city: 'London',
    job: 'Designer',
    hobby: 'Painting'
  };
  
  const { name, age, ...otherInfo } = person;
  
  console.log(name);   
  console.log(age);    
  console.log(otherInfo); 