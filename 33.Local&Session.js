console.log("HI Hello this is about local and session storage");

localStorage.setItem("designation","Developer"); 
localStorage.setItem("Name","Hari");



//printing the items
localStorage.getItem("Name");


//removing the items
localStorage.removeItem("Name");


console.log(localStorage); 



//session storage

sessionStorage.setItem("subjectname","Javascript"); 
console.log(sessionStorage);



