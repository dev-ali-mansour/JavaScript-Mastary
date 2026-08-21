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
