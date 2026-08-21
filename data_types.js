// Primitive Data Types
// Number: represents numeric values, both integers and floating-point numbers.
let age = 70; // integer
console.log(typeof age); // Output: number
console.log(age); // Output: 70

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
