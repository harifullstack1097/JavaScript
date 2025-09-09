//Looping Statements - For, while, for - in,For - on, do-while 


for(let i =1; i<5; i++){
    console.log("My name is __",i);
}

//output is : My name is __ 1
//            My name is __ 2
//            My name is __ 3
//            My name is __ 4

//------------

//while
let a=1;
while(a<6){
    console.log("iterating While ",a);
    a++;
}

//output : iterating While  1
//         iterating While  2
//         iterating While  3
//         iterating While  4


//----------------


//for in : loop is used for object properties

let Student01 = {
    student    : "Hari Krishna",
    class      : "Aiml",
    Location   : "Bangolre"
    };
for (let obj1 in Student01){
    console.log(obj1);           //student ,class , Location

    console.log(Student01[obj1]);  //output : Hari Krishna, Aiml, Bangolre
}


//---------------------------


//for on loop

let Apps = ['Ajio','Youtube','Insta'];
for(let App of Apps)
    {
    console.log(App);         // Ajio , Youtube , Insta
    console.log(Apps[1]);     //Youtube
   }


//------------------


//do-while : Excutes atleast 1time
let dowhile = 4;
do{
    console.log("Do while exutes atleast one time");
    dowhile++
    
}while(dowhile == 5)   //output : Do while exutes atleast one time


