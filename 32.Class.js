// A class which is group of relative members


// Constrctuor - special method
// Mehtod      - function inside of class
// Fields      - holds  the data
// Properties  - handle the data




class Student{
    constructor(){
        console.log("This is a constructor");

    }
    studentPro(){
        console.log("HI i am student intermeditate");
    }



}

const stu = new Student();
stu.studentPro();



class Person {
  _fullName = "No Name";

  getOriginalName() {
    return this._fullName;
  }

  // getter and setter

  // modify (getter)
  get name() {
    return this._fullName.toLowerCase();
  }

  // validation (setter)
  set name(newName) {
    if (typeof newName === "string" && newName.trim().length > 4) {
      this._fullName = newName;
    } else {
      window.alert(
        `Invalid name entered.
         Person name must contain more than 5 characters`
      );
    }
  }
}

let person = new Person();
// console.log(person._fullName);  // "No Name"

person.name = "Alexandra";  // valid
console.log(person.name);   // "alexandra"

person.name = "Bob";        // invalid, alert will show
console.log(person.name);   // still "alexandra"




