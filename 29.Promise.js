//Promise in js is an object that tell us event is resolve or reject

//sample program :
// let Promise1 = new Promise1((resolve, reject) => {

//     //Syntax

//     let success = true;

//     if(success){
//         resolve("the promise is succesfully executed");
//     }
//     else{
//         reject("Task failed!");
//     }
// });

//promise chaning ex 2 :

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
});

promise
    .then(num => {
        console.log(num);  // 10
        return num * 2;
    })
    .then(num => {
        console.log(num);  // 20
        return num * 3;
    })
    .then(num => {
        console.log(num);  // 60
    });


    //output :
    //10
    //20
    //60

