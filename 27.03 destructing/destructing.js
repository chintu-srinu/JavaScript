const person = {
    name: "John Doe",
    age: 30,
    address: {
    city: "New York",
    country: "undefined"
    },
    hobbies: ["Reading", "Traveling"]
    };
    
    let {name:fullname,age,address:{city},country="india",hobbies}= person
    console.log(fullname,age,city,country)
    let [hobby, ,] = hobbies;
    let firstHobby = hobby;
    console.log(firstHobby);



const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
let [a,b,...rest] = fruits;
[a,b]=[b,a];
console.log(a,b);
console.log(b)
console.log(a)
console.log(rest)


console.log(sumNumbers(1, 2, 3, 4)); // Output: 10
console.log(sumNumbers(10, 20, 30)); // Output: 60

function sumnumbers(...numbers){
    console.log(numbers.reduce((sum,next)=>sum+next));
}
sumnumbers(1, 2, 3, 4); // Output: 10
sumnumbers(10, 20, 30); // Output: 60


const user = { name: "Alice", age: 25 }; 
const job = { title: "Developer", company: "TechCorp" };
let userProfile = {...user, ...job, experience : "2 years"};
console.log(userProfile);


const numbers = [1, 2, 3, 4, 5];
const numbers1=numbers
numbers1[5]=0 
 numbers1 [6]=6
console.log(numbers1)