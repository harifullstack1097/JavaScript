console.log("Variables")
console.log("Welcome Message - 1");
console.log("Welcome Message - 2");
console.log("Welcome Message - 3");


// Re-assigning value using var
var score = 50;
    score = 75;
console.log(score); // 75



// re-assign and re-declare with var
var count = 100;
var count = 200;
console.log(count); // 200



// re-assign but cannot re-declare with let
let temperature = 30;
temperature = 35;
console.log(temperature); // 35



// cannot re-assign and cannot re-declare with const
const maxLimit = 500;
console.log(maxLimit); // 500
