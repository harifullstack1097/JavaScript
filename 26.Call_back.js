//call back function without parameter

 function Student1(){
     console.log("hi hello from student1")
 }
 //2nd function
 function pricipal(callback){
     callback();
 }
 //calling
 pricipal(Student1);


//----------------------------

//Now function with parameter

function Student2(Name){
    console.log("hii hello",Name);

}

//call back function
function pricipa2(callback){
    callback("Pallavi");
    console.log("excuted after the callback");
}
pricipa2(Student2);


//Here i am passing the named function
//                      anonmous function
//                      arrow function

//Anonmous function
//


Student3(function(StuName){
    console.log("This is Anonmous Function",StuName);
})

function Student3(callback) {
   
    let name = "Hari Krishna";

    // call the callback function
    callback(name);
}


//-------------------------------

//lamda function
Student4((stuName1)=>{
   console.log(`My name is ${stuName1}`); 
})

function Student4(callback) {
   
    let name = "Ravi Krishna";

    // call the callback function
    callback(name);
}

//------------------------


//Output :
//hi hello from student1
//hii hello Pallavi
//excuted after the callback
//This is Anonmous Function Hari Krishna
//My name is Ravi Krishna



