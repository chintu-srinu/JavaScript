# TASK-1

function sayHello(){
console.log ("Hello World");
}
sayHello();

#TASK-2

function displayWarning(){
console.log ("warning system overloaded");
}
displayWarning();

#TASK-3

function printStatus(){
console.log ("System Status: Active");
}
printStatus();

#TASK-4

function initialize(){
console.log (" initialization complete");
shutdown();
}
function shutdown(){
consle.log("process ended");
}
initialize();

#TASK-5

function startprocess(){
console.log("process started");
endprocess();
}
function endprocess(){
console.log("process ended");
}
startprocess();

#TASK-6
function greetuser(name){
console.log("hello,[srinu]!);
}
greetuser("chintu");
greetuser("srinu");

#TASK-7

function calculatesum(a,b){
console.log(a+b);
}
calculatesum(a=5,b=8);
calculatesum(a=8,b=7);

#TASK-8

function countDown(){
    for(var i=5;i>=1;i--){
        console.log(i);
}
}
countDown();

#TASK-9
function checkevenodd(num1){
    if (num1%2==0){
console.log("even")
}
else{
console.log("odd")
}
}
checkevenodd(5)
checkevenodd(4)

#TASK10

function beginSession(){
console.log("session started");
endsession();
}
function endsession(){
console.log("session ended");
}
beginSession();