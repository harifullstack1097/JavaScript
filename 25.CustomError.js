//Example for custom error
try{
    console.log(a);
}
catch(error){
    console.log("error occured");

}

//---------------------------


try {

  let result = FunctionFail(); 
  console.log("Operation successful:", result);

   } 
catch (error)
 {
  // Handle the error
  console.error("An error occurred:", error.message);
  
  // console.error(error); 
 } 
finally {
 
  console.log("Execution of try-catch block completed.");
}

function FunctionFail()
 {
 
  if (Math.random() > 0.5)
     {
    throw new Error("Random error occurred!");
  }
  return "Success!";
}


