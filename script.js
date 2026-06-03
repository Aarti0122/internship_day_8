
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
