//Logical Operators
//Logical are OR(||), AND(&), NOT(!)
//-------
//AND - T & T -> T remaing are false
//Example: student must in 10th class and got 9.5cgpa can get free seat
let Student_01_cgpa =8.3;
let Student_01_Class =10;

if((Student_01_Class == 10) & (Student_01_cgpa >= 9.5))
    {
    console.log("He/She is Eligible to get free seat");
}
else
    {                                                       //output : He/she is not eligble to free seat
    console.log("He/she is not eligble to free seat");
}
 


//AND - f & f -> f remaing are true
//Example : student must in 10th class and got 9.5cgpa can get free seat or if have sports qouta

let Student_02_cgpa =8.3;
let Student_02_Class =10;
let Student_02_SportsQouta = true;

if((Student_02_Class == 10) & (Student_02_cgpa >= 9.5) ||(Student_02_SportsQouta = true))
    {
    console.log("He/She is Eligible to get free seat");
}
else{                                                       //output : He/She is Eligible to get free seat
    console.log("He/she is not eligble to free seat");
}

//Logical Not
//Converts true to false and false to true.
//Example : 
 let Student_03_marks = 38;
 let Student_04_marks = Number(38);
 if(!(Student_03_marks = Student_04_marks ))
    {
    console.log("both have equal marks");
 }
 else
    {
    console.log("both students not have equal marks"); //output :both students not have equal marks
 }
