// Primitive Data Types
// Number: represents numeric values, both integers and floating-point numbers.
let _age = 70; // integer
console.log(typeof _age); // Output: number
console.log(_age); // Output: 70

// String: represents sequences of characters, enclosed in single or double quotes.
let _name = "Alice";
console.log(typeof _name); // Output: string
console.log(_name); // Output: Alice

let city = "San Jose";
console.log(typeof city); // Output: string
console.log(city); // Output: San Jose

console.log(_name + " " + city); // Output: Alice San Jose

// Boolean: represents a logical value that can be either true or false.
let hasGraduated = true;
console.log(typeof hasGraduated); // Output: boolean
console.log(hasGraduated); // Output: true

// Undefined: represents a variable that has been declared but has not been assigned a value. It is also a primitive value that indicates the absence of a value.
let area;
console.log(typeof area); // Output: undefined
console.log(area); // Output: undefined

// Null: represents the intentional absence of any object value. It is a primitive value that can be assigned to a variable to indicate that it has no value.
let emptyValue = null;
console.log(typeof emptyValue); // Output: object (this is a known quirk in JavaScript)
console.log(emptyValue); // Output: null

// Reference Data Types
// Object: represents a collection of key-value pairs, where each key is a string and each value can be any data type.
let user = {
  name: "Alice",
  age: 30,
  city: "San Jose",
};
console.log(typeof user); // Output: object
console.log(user); // Output: { name: 'Alice', age: 30, city: 'San Jose' }
console.log(user.name); // Output: Alice
console.log(user.age); // Output: 30
user.name = "John";
console.log(user.name); // Output: John

// Array: represents an ordered collection of values, which can be of any data type. Arrays are zero-indexed, meaning that the first element has an index of 0.
let fruits = ["Apple", "Banana", "Orange"];
console.log(typeof fruits); // Output: object
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Orange' ]
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Orange
fruits.push("Grapes");
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Orange', 'Grapes' ]

/*
Staticly typed languages (for exaple: Java, C++, C#) require you to declare the data type of a variable when you create it.
For example, in Java, you would declare an integer variable like this:
int age = 30;
age = "thirty"; // This would result in a compile-time error because you cannot assign a string value to an integer variable.

Dynamically typed languages (for example: JavaScript, Python, Ruby) do not require you to declare the data type of a variable when you create it.
For example, in JavaScript, you can declare a variable like this:
*/
let myVariable = 30;
console.log(typeof myVariable); // Output: number
console.log(myVariable); // Output: 30
myVariable = "thirty"; // This is allowed because JavaScript is dynamically typed and the data type of the variable can change at runtime.
console.log(typeof myVariable); // Output: string
console.log(myVariable); // Output: thirty
myVariable = true; // This is also allowed because the data type of the variable can change at runtime.
console.log(typeof myVariable); // Output: boolean
console.log(myVariable); // Output: true

/* 
Expression
An expression is a combination of values, variables, operators, and function calls that can be evaluated to produce a value. In JavaScript, expressions can be used in various contexts, such as assignments, function arguments, and conditional statements.

Literal
A literal is a fixed value that is directly written in the code.

Operators
Operators are symbols that perform operations on values and variables. JavaScript has various types of operators, including arithmetic, comparison, logical, assignment, and more.
 */

let additionResult = 5 + 3; // Addition operator
console.log("Addition Result:", additionResult); // Output: 8

let minusResult = 10 - 4; // Subtraction operator
console.log("Subtraction Result:", minusResult); // Output: 6

let multiplicationResult = 6 * 7; // Multiplication operator
console.log("Multiplication Result:", multiplicationResult); // Output: 42

let divisionResult = 20 / 4; // Division operator
console.log("Division Result:", divisionResult); // Output: 5

let modulusResult = 10 % 3; // Modulus operator (remainder)
console.log("Modulus Result:", modulusResult); // Output: 1

let exponentiationResult = 2 ** 3; // Exponentiation operator
console.log("Exponentiation Result:", exponentiationResult); // Output: 8

let isEqual = 5 == "5"; // Equality operator (loose equality)
console.log("Is Equal:", isEqual); // Output: true

let isStrictEqual = 5 === "5"; // Strict equality operator
console.log("Is Strict Equal:", isStrictEqual); // Output: false

let isGreaterThan = 10 > 5; // Greater than operator
console.log("Is Greater Than:", isGreaterThan); // Output: true

let isLessThan = 3 < 7; // Less than operator
console.log("Is Less Than:", isLessThan); // Output: true

let logicalAnd = true && false; // Logical AND operator
console.log("Logical AND:", logicalAnd); // Output: false

let logicalOr = true || false; // Logical OR operator
console.log("Logical OR:", logicalOr); // Output: true

let logicalNot = !true; // Logical NOT operator
console.log("Logical NOT:", logicalNot); // Output: false

let X = 5;
console.log("Before increment:", X); // Output: 5
X++; // Increment operator (postfix)
console.log("After increment:", X); // Output: 6

let Y = 10;
console.log("Before decrement:", Y); // Output: 10
Y--; // Decrement operator (postfix)
console.log("After decrement:", Y); // Output: 9

let A = 5;
A += 3; // equivalent to A = A + 3
console.log("After addition assignment:", A); // Output: 8

let B = 10;
B -= 4; // equivalent to B = B - 4
console.log("After subtraction assignment:", B); // Output: 6

let C = 6;
C *= 2; // equivalent to C = C * 2
console.log("After multiplication assignment:", C); // Output: 12

let D = 20;
D /= 4; // equivalent to D = D / 4
console.log("After division assignment:", D); // Output: 5

let E = 10;
E %= 3; // equivalent to E = E % 3
console.log("After modulus assignment:", E); // Output: 1

console.log(true && true); // Output: true
console.log(true && false); // Output: false
console.log(false && true); // Output: false
console.log(false && false); // Output: false

let hasTickets = true;
let hasId = true;
console.log(hasTickets && hasId); // Output: true
hasId = false;
console.log(hasTickets && hasId); // Output: false

console.log(true || true); // Output: true
console.log(true || false); // Output: true
console.log(false || true); // Output: true
console.log(false || false); // Output: false

let isSunny = false;
let hasRaincoat = true;
console.log(isSunny || hasRaincoat); // Output: true
hasRaincoat = false;
console.log(isSunny || hasRaincoat); // Output: false

console.log(!true); // Output: false
console.log(!false); // Output: true

let isWeekend = true;
let goToWork = !isWeekend; // Negation operator
console.log(goToWork); // Output: false

let num = 10;
let message = num >= 5 ? "num is >= 5" : "num is not < 5"; // Ternary operator
console.log(message); // Output: num is >= 5

let number = 4;
let result = number % 2 === 0 ? "Even" : "Odd"; // Ternary operator
console.log(result); // Output: Even

// Nested Ternary Operator
// age < 13 -> Child
// age < 20 -> Teenager
// age > 20 -> Adult

let age = 16;
let category = age < 13 ? "Child" : age < 20 ? "Teenager" : "Adult";
console.log(category); // Output: Teenager
