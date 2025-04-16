function processUserInput(name, callback) {
   
     callback(name);
}

function greetUser(name) {
    
}

processUserInput("Maneesh", greetUser);


const getInitials = (firstName, lastName) => firstName[0] + lastName[0];
