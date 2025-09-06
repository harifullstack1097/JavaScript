// Arrow function - no parameters
let displayAuthorName = () => {
    console.log("hari");
};

displayAuthorName();  // Output: hari

// Regular function with parameters
function displayAuthorDetails(fullName,birthDate, famousBook, yearPublished) {
    console.log("Author Name:", fullName);
    console.log("dob:", birthDate);
    console.log("Book_Name:", famousBook);
    console.log("Year Published:", yearPublished);
}

displayAuthorDetails("hari", "5th March 1985", "Waves of Thought", "2010");

// Arrow function with parameters
let calculateSum = (num1, num2) => {
    console.log("Performing Addition:");
    console.log("First Number:", num1);
    console.log("Second Number:", num2);
    console.log("Sum:", num1 + num2);
};

calculateSum(35, 65);

// setTimeout using arrow function
setTimeout(() => {
    console.log("This is a delayed message shown after 3 seconds...");
}, 3000);
