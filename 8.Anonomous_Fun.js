//Anonymous Function 

var greet = function () {
    let message = "Welcome to JavaScript!";
    console.log(message);
};

// Calling the anonymous function
greet();


//Anonymous Function with Parameters 

var displayUserInfo = function (username, location) {
    console.log("User Name:", username);
    console.log("Location:", location);
};

displayUserInfo("Hari Krishna", "Andhra Pradesh");


// Immediately Invoked Function Expression 

(
    function (greetingMessage, userAge) {
        console.log("Greeting from Line 1");
        console.log("Greeting from Line 2");
        console.log("Greeting from Line 3");
        console.log("Message:", greetingMessage);
        console.log("Age:", userAge);
    }
)("Nice to meet you!", 30);
