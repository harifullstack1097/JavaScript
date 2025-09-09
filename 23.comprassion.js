// ==, ===, !=, >, <, >=, <= // Comparison Operators in JavaScript

console.log(25 == 25); // true, because values are the same

console.log(25 == 30); // false, because values are different

let temperature = 25;

console.log(temperature == 25); // true, because temperature equals 25

console.log(temperature != 25); // false, because temperature is exactly 25

console.log(temperature < 25); // false, 25 is not less than 25

console.log(temperature > 25); // false, 25 is not greater than 25

console.log(temperature <= 25); // true, because 25 is equal to 25

console.log(temperature >= 25); // true, because 25 is equal to 25

// Type coercion: JavaScript automatically converts one data type to another when using ==

console.log(25 == '25'); // true, because '25' is coerced to number 25 before comparison

console.log(25 === '25'); // false, because strict equality (===) checks both value and type


// Using if-else with comparison operators

let currentTemp = 28;

// Choose cooling method based on temperature
if(currentTemp >= 35){
    console.log("Turn on the air conditioner");
}
else if(currentTemp >= 30){
    console.log("Use a ceiling fan");
}
else if(currentTemp >= 25){
    console.log("Open the windows");
}
else{
    console.log("No cooling needed");
}
