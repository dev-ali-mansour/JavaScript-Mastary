let count = 10;
let $price = 5;
// let 1name="name"; // Not acceptable as a variable name
let_name = "Ali Mansour";
let user1;

let u1$ser1;
let first_name;

let name = "Alice";
let Name = "Tom";
console.log(name); // Output: Alice
console.log(Name); // Output: Tom

// let let =10 // let is not acceptable as a variable name because it is a reserved keyword in JavaScript

// let first name ="John"; // Not acceptable as a variable name because it contains a space
let firstName = "John"; // Acceptable variable name using camelCase

let a = 22; // Use descriptive variable names to make your code more readable and maintainable. For example, instead of using a single letter like "a", use a name that describes the purpose of the variable, such as "age" or "count".

let a1 = 5,
  a2 = 10,
  a3 = 15; // You can declare multiple variables in a single line using commas to separate them. However, it's generally better to declare each variable on its own line for clarity and readability.
console.log(a1);
console.log(a2);
console.log(a3);

let x, y, z;
x = y = z = 30;
console.log(x);
console.log(y);
console.log(z);

let userName = "Alice",
  userAge = 25; // You can also declare multiple variables of different types in a single line, but it's generally better to keep related variables together and separate unrelated ones for clarity.
console.log(userName);
console.log(userAge);

/* 
In JavaScript, you can create variables using the `var`, `let`, and `const` keywords. 
The `var` keyword is function-scoped and can be redeclared and updated, 
while the `let` keyword is block-scoped and can be updated but not redeclared. 
The `const` keyword is also block-scoped and cannot be updated or redeclared. 
It's generally recommended to use `let` and `const` instead of `var` 
for better scoping and to avoid potential issues with variable hoisting.
 */

var counter = 10;
console.log(counter); // Output: 10

let newCounter = 100;
console.log(newCounter); // Output: 100
newCounter = 200;
console.log(newCounter); // Output: 200

const PI = 3.14;
console.log(PI); // Output: 3.14
// PI = 3.14159; // This will throw an error because `PI` is a constant and cannot be reassigned.

