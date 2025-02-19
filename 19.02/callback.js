// TASK-1
function processNumbers(x,y,callback){
    return callback(x,y);
  
}
var sum=processNumbers(3,4,function(x,y){
  return x+y
})
console.log("sum:",sum)



//    TASK-2
function greet (callback){
    return callback("Alice")
    callback();
}
var x=greet(function(name){
    console.log("Name :","Alice")});


    // TASK-3
    function calculate(x,y,callback){
        return callback(x,y);
      //   callback("sum:",sum);
      
  }
  var diff=calculate(10,5,function(x,y){
      return x-y
  })
  console.log("sum:",diff)