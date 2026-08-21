// This is a single line comment

/* 
This is a multi-line comment
You can write comments in your code to explain what it does 
or to leave notes for yourself or other developers. 
Comments are ignored by the JavaScript engine 
and do not affect the execution of the code.
*/

console.log("Hello, World!!!");
console.log("Hello, World!!!");

/**
 * Adds two numbers together and returns the result.
 *
 * @param {number} a - The first number to add
 * @param {number} b - The second number to add
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

document.getElementById("name").innerText = "Hello";

document.getElementById("changeTextButton").onclick = function () {
  document.getElementById("name").innerText = "Hello Again!";
  document.getElementById("name").style.backgroundColor = "red";
  document.getElementById("name").style.color = "white";
};

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

let userName = "Alice", userAge = 25; // You can also declare multiple variables of different types in a single line, but it's generally better to keep related variables together and separate unrelated ones for clarity.
console.log(userName);
console.log(userAge);
