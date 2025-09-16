//asyncronous function
console.log("begin the test");

function fun1(){
    console.log("The fun 1 is done");

}
function fun2(){
    console.log("The fun 2 is done");

}
function fun3(){
    console.log("The fun 3 is done");
}

setTimeout(fun1,2000);
setTimeout(fun2,4000);
setTimeout(fun3,6000);


//Example of Asyn :
// Simulate async delay

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async functions for each step
async function selectDrink() {
    await wait(1000);
    console.log(" Coffee selected: hot cappuccino");
}

async function submitOrder() {
    await wait(1500);
    console.log(" Order placed for hot cappuccino");
}

async function processPayment() {
    await wait(1200);
    console.log(" Payment successfully processed");
}

async function completeOrder() {
    console.log(" Walking to the counter...");
    await selectDrink();
    await submitOrder();
    await processPayment();
    console.log(" Order received: hot cappuccino");
    console.log(" Sipping my hot cappuccino — it's absolutely perfect!");
}
    
// Start the async process
completeOrder();

// output:
// begin the test
// Walking to the counter...
// Live reload enabled.
// Coffee selected: hot cappuccino
// The fun 1 is done
// Order placed for hot cappuccino
// Payment successfully processed
// Order received: hot cappuccino
// Sipping my hot cappuccino — it's absolutely perfect!
// The fun 2 is done
//The fun 3 is done




