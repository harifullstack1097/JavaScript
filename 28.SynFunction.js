// Synchronous Call
console.log("begin the test");

function Task1(){
    console.log("The task 1 is done");

}
function Task2(){
    console.log("The task 2 is done");

}
function Task3(){
    console.log("The task 3 is done");
}
Task1();
Task2();
Task3();

console.log("Tasks are completed");

function selectDrink() {
    console.log("Coffee selected: hot cappuccino");
}

function submitOrder() {
    console.log("Order placed for hot cappuccino");
}

function processPayment() {
    console.log("Payment successfully processed");
}

function completeOrder() {
    console.log("Order received: hot cappuccino");

    // Synchronous call
    selectDrink();
    submitOrder();
    processPayment();
}

// Start the process
completeOrder();

console.log("Sipping my hot cappuccino — it's absolutely perfect!");


//   Output : 
// begin the test
// The task 1 is done
// The task 2 is done
// The task 3 is done
// Tasks are completed
// Order received: hot cappuccino
// Coffee selected: hot cappuccino
// Order placed for hot cappuccino
// Payment successfully processed
// Sipping my hot cappuccino — it's absolutely perfect!










