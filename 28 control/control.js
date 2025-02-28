// task-1
function findLarger(num1,num2,callback){
    return callback(num1,num2)+5;
}
var result = findLarger(12,20,(num1,num2) =>{
    if (num1>num2) {
        return num1;
    }
    return num2;
})
console.log(result)

// // task-2
function Calculcate(num1,num2,callback){
    return callback(num1,num2)*3;
}
var result = Calculcate(10,5,(num1,num2) => {
    if (num1>num2){
        return num1 + num2;
    }
    return num2;
}
)
console.log(result);

// task-3
function checkevenodd(num1,callback){
    return callback(num1);
}
var result = checkevenodd (8,(num1) =>{
    if (num1%2==0){
        return "given number is even"
    }
    return "it is odd"
}
)
console.log(result)

// task-4
function checksign(num1,callback){
    return callback (num1);
}
var result = checksign (-2,(num1) =>{
    if (num1 > 0){
        return "positive"
    }
    else if (num1 < 0){
        return "negative"
    }
    else if (num1 ==0){
    return "zero"
    }
}
)
console.log(result)

// task-5
function multiply(num1, num2,callback){
    return callback (num1,num2)*4;
}
var result = multiply (4,6,(num1,num2) =>{
    if (num1 > num2){
        return num1*num2
    }
    else if (num2 >num1){
        return num1+num2
    }
    else if(num1 == num2){
        return num1;
    }
   })

console.log(result)







