
function getMyName(param1){
      console.log(param1);
 }

 getMyName("Madan")


function getMyLocation(callbackfn) {
    var test = callbackfn; 
    test("Madan");
}

getMyLocation(
    function(param1){
        console.log("Hello world");
        console.log(param1);
     }
);


function getName(param1){
           param1 

 }

 getName("Javascript")


 var test = function(){
     console.log("Hi are you");
 }

 test(); // here we are calling





function greetUser(name, callback) {
    console.log("Hello, " + name);
    callback();    // call the callback function
}

function sayBye() {
    console.log("Goodbye!");
}

greetUser("Hari", sayBye); //output will be Hello, Hari ,Goodbye!




let numbers = [1, 2, 3];

let doubled = numbers.map(function (num) {
    return num * 2;
});

console.log(doubled);  // output :[2, 4, 6]










 