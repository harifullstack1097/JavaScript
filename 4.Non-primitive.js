//NON-primitive
var myName = "Hari Krishna";
var myAge = 30;

console.log(myName); // string
console.log(myAge);  // number

// let subjects = {HTML, CSS, JavaScript};
// console.log(subjects); 

let studentname = ["Hari", "Kumar"];
console.log(studentname);

let isWorking = false;
console.log(isWorking); // boolean   

// Object -> value can be anything
let my_personal_details = {
    "aadharCardNo": "5678-4321-8765",
    "DOB": "10-10-1992",
    "Location": "Telangana",
    "isMarried": false,
    "Salary": 45000.75
};

console.log(my_personal_details);
console.log(my_personal_details.Location);


let my_personal_details_1 = {
    "aadharCardNo": "5678-4321-8765",
    "DOB": "10-10-1992",
    "Kids": {
        'firstKid': 'Aryan'
    },
    "Hobbies": ["Singing", "Painting", "Travelling"]  // 0       1         2
};

console.log(my_personal_details_1);
console.log(my_personal_details_1.Hobbies);        // ["Singing", "Painting", "Travelling"]
console.log(my_personal_details_1.Hobbies[1]);     // Painting

console.log(my_personal_details_1.Kids);           // { 'firstKid': 'Aryan' }
console.log(my_personal_details_1.Kids.firstKid);  // Aryan
