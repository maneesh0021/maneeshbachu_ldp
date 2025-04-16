 const printName = name => `Hi${name}`;
printName("Maneesh");

const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;
printBill("Maneesh", 500);

const person = {
  name: "Noam Chomsky",
  age: 92
};
const { name, age } = person;
name;
age;
