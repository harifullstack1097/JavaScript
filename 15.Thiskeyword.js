// Global Context
console.log(this);

this.authors = ["Ravi", "Sita"];
this.books = ["My Life Story", "Journey to Success"];

this.getBookDetails = function () {
    return this.books;
};

console.log(this);

var person = {
    name: "Hari krishna",
    birthDate: "15th August 1990",
    books: ["Dream Big", "Live Free", "Stay Strong"],
    achievements: ["Best Author Award", "Motivational Speaker"],
    
    getBookDetails: function () {
        console.log(this);  // refers to the person object
    }
};

person.getBookDetails();
