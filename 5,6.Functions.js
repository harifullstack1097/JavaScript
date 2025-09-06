// set of statements is called a function


function firstfunction() {
    console.log("hello world 1");
    console.log("hello world 2");
}

// how to call the function
//firstfunction(); 

//function declaration
function SecondFunction() {
    console.log("hello world 1");
    console.log("hello world 2");
}


//SecondFunction(); 

function ThirdFunction() {
    let StudentsList = [
        {
            "studentname": "Hari",
            "location": "Telangana",
            "Aadharcard": "5678-12345-6789"
        },
        {
            "studentname": "Krishna",
            "location": "Tamil Nadu",
            "Aadharcard": "4321-98765-1234"
        }
    ];

    // let StudentsList = ["Hari", "Krishna"];
    console.log(StudentsList);
}

ThirdFunction();  // Calling the function


//-------------------------------------------------------------//

//function creation..
function fun1(){
     console.log("First function");

     //calling funn2
     fun2();

     //calling fun3
     fun3();
}


//function creation..
function fun2(){
     console.log("second function");
}

function fun3(){
  console.log("Third function");  
}


//function calling
fun1();