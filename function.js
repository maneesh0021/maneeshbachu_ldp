function processUserInput(name, callback) {
    console.log("Processing user input...");
    callback(name);
}

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

processUserInput("Maneesh", greetUser);


const getInitials = (firstName, lastName) => firstName[0] + lastName[0];
console.log(getInitials("Roger", "Waters")); 
