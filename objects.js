let person = {
  name: "Alice",
  age: 30,
  isStudent: true,
};
console.log(person); // Output: { name: 'Alice', age: 30, isStudent: true }

console.log(person.age); // Output: 30
console.log(person["age"]); // Output: 30

person.age = 66;
console.log(person.age); // Output: 66
console.log(person); // Output: { name: 'Alice', age: 66, isStudent: true }

person.job = "Engineer";
console.log(person); // Output: { name: 'Alice', age: 66, isStudent: true, job: 'Engineer' }
console.log(person.job); // Output: Engineer

delete person.isStudent;
console.log(person); // Output: { name: 'Alice', age: 66, job: 'Engineer' }

console.log("name" in person); // Output: true
console.log(person.hasOwnProperty("age")); // Output: true

// Nested Objects
let student = {
  name: "Bob",
  courses: {
    math: true,
    science: false,
  },
};
console.log(student);
console.log(student.courses.math); // Output: true

// Object Destructuring
let { name, courses } = student;
console.log(name); // Output: Bob
console.log(courses); // Output: { math: true, science: false }
