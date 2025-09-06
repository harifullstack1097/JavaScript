
//here i have declared function  to use prototype
 function car(model,Amount)
 {
     this.model = model;
     this.Amount = Amount;

 }

 car.prototype.Gettype = function(){
     console.log(this.model);
 }
 
 var newcar = new car("Toyata","50lak");
 newcar.Gettype();

let student = {
    name : "hari krishna",
    location : "Andhra pradesh",
    getStudents :function(){
        console.log(this);
    }
}
function getStudents(){
    console.log(this);
}
getStudents();
student.getStudents();





//simple program to understand prototype
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};

let p1 = new Person("Alice");
let p2 = new Person("Bob");

p1.sayHello();  // Hello, my name is Alice
p2.sayHello();  // Hello, my name is Bob

console.log(p1.sayHello === p2.sayHello);   //it return true











