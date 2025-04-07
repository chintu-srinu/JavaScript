import {add,sub }from "./modules.js"
console.log(add(10,20))
console.log(sub(20,10))



import sub from './modules.js'
import {add} from'./modules.js'
console.log("hello")
console.log(sub(10,20));
console.log(add(20,30))


import { add, subtract } from './modules.js';
import multiply from './modules.js';

console.log(add(5, 3));       
console.log(subtract(10, 4)); 
console.log(multiply(3, 4));  

import { add as sum, subtract as minus } from './modules.js';

console.log(sum(5, 3));     
console.log(minus(10, 4));  

