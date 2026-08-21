let studentName = "Alice";
let age = 17;
let greeting = `Hello ${studentName}, you are ${age} years old.`;
console.log(greeting); // Output: Hello Alice, you are 17 years old.

let multiLineString = `This 
is 
a
multi-line 
string.`;
console.log(multiLineString);

let a = 5;
let b = 10;
let sumMessage = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sumMessage); // Output: The sum of 5 and 10 is 15.

let user = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
};
let userInfo = `User Info:
Name: ${user.firstName} ${user.lastName}
Age: ${user.age}`;
console.log(userInfo);

// Escaping Backticks
let e = `This is a backtick \``;
console.log(e); // Output: This is a backtick `
