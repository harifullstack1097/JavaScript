
var cityName = "Hyderabad"; 
var cityNameLength = cityName.length;
console.log(cityNameLength);  // Output: 9

var fruit = "apple";
var upperCaseFruit = fruit.toUpperCase();
console.log( upperCaseFruit);  // Output: APPLE

var country = "INDIA";
var lowerCaseCountry = country.toLowerCase();
console.log(lowerCaseCountry);  // Output: india

var mixedCase = "HeLLoWoRLd";
var lowerCaseMixed = mixedCase.toLowerCase();
console.log( lowerCaseMixed);  // Output: helloworld


var greeting = "Hello";
var name = " Universe";

var completeGreeting = greeting.concat(name);
console.log(completeGreeting);  // Output: Hello Universe

var indexOfX = greeting.indexOf("x");  
console.log(indexOfX);  // Output: -1 (not found)



var employee = {
    empName: "Ravi Kumar",
    joinDate: "01-01-2020",
    skills: ["React", "Node.js", "MongoDB"],
    getEmpLocation: function() {
        return "Telangana";
    }
};

console.log("Employee Name:", employee.empName);              // Ravi Kumar
console.log("Second Skill:", employee.skills[1]);             // Node.js
console.log("Employee Location:", employee.getEmpLocation()); // Telangana
