
// Function Declaration
function displaymessage(name) {
    console.log("hey," + name + "! This is from function displaymessage");
}

displaymessage("Aarti");

// Function Expression

function display() {
console.log("This is from function display");
}

display();

// Anonymous Function
const addititon = function (num1, num2) {
    console.log (num1 + num2);
};

addititon(5, 10);

// Arrow Function

const greet =(name) => {
    console.log("Hello, " + name + "! This is arrow function ");
};

greet("Aarti");


//callback Function
function message() {
    console.log("Welcome");
}

function show(callback) {
    callback();
}

show(message);

//Array
let departments = ["IT","computer science","civil engineering","mechanical engineering"];
console.log(departments[0]);
console.log(departments[1]);
console.log(departments[2]);
console.log(departments[3]);

//console.log(departments[4]);
for (let i = 0; i < departments.length; i++) {
    console.log(departments[i]);
}   



let table = [2,4,6,8,10,12,14,16,18,20];
console.log(table[0]);
console.log(table[1]);
console.log(table[2]);
console.log(table[3]);      
console.log(table[4]);
console.log(table[5]);
console.log(table[6]);
console.log(table[7]);
console.log(table[8]);
console.log(table[9]);

//push

table.push(22); 
console.log(table[10]);

//sorting

let numbers = [5, 2, 9, 1, 5, 6];
numbers.sort();
console.log(numbers);

let students = {
    name: "Aarti",
    age: 20,
    grade: "A"
};
console.log(students);

let student = [
    {
        name: "Aarti",
        age: 20,
        grade: "A"
    },
    {
        name: "Rahul",
        age: 22,    
        grade: "B"
    },
    {
        name: "Priya",
        age: 21,
        grade: "A"
    }
];
console.log(student);   