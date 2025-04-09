const printName = name => `Hi${name}`;
console.log(printName("Maneesh"))

const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;
console.log(printBill("Maneesh",500))

const person = {
    name: "Noam Chomsky",
    age: 92
  };
  const { name, age } = person;
  console.log(name);
  console.log(age);
  
  
  