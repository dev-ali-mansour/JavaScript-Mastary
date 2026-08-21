console.log("Hello, World!"); // Output: Hello, World!
console.log(123); // Output: 123

// Logging multiple values
console.log("Name:", "Alice", "Age:", 25);
console.log("Name:", "Alice", "Age:" + 25);

// Use variables
let x = 10;
let y = 20;
console.log("The value of x is", x);
console.log("Sum is", x + y);
console.log(`Sum is ${x + y}`);

// Logging objects
let person = {
  name: "Charlie",
  age: 28,
  profession: "Developer",
};
console.log("Person object:", person);

// Formatted output
console.log("The value of x is %d", x);
console.log("Hello %s, you are %d years old.", "Alice", 25);

// Console methods
console.error("This is an error");
console.warn("This is a warning");
console.info("This is an informational");

// Console table
console.log(person);
console.table(person);
