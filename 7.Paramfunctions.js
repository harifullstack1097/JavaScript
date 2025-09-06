//functions with params and auguments

//Addition
function getAddition(param1 , param2){
    
    //How to use param?  
     let firstnum  = param1;
     let secondNum = param2;

     let ouput = firstnum + secondNum;
     return ouput;
}

//Subtraction
function getSubtraction(param1 , param2){
    
     let firstnum  = param1;
     let secondNum = param2;

     let ouput = firstnum - secondNum;
     return ouput;
}


var calData = getAddition(15, 25);   // Calling the function 
console.log("First Data", calData);

var calData1 = getAddition(50, 75);   // Calling the function 
console.log("Second Data", calData1);
