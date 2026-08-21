let alicePerson = {
  name: "Alice",
  age: 30,
  isStudent: true,
};
console.log(alicePerson); // Output: { name: 'Alice', age: 30, isStudent: true }

console.log(alicePerson.age); // Output: 30
console.log(alicePerson["age"]); // Output: 30

alicePerson.age = 66;
console.log(alicePerson.age); // Output: 66
console.log(alicePerson); // Output: { name: 'Alice', age: 66, isStudent: true }

alicePerson.job = "Engineer";
console.log(alicePerson); // Output: { name: 'Alice', age: 66, isStudent: true, job: 'Engineer' }
console.log(alicePerson.job); // Output: Engineer

delete alicePerson.isStudent;
console.log(alicePerson); // Output: { name: 'Alice', age: 66, job: 'Engineer' }

console.log("name" in alicePerson); // Output: true
console.log(alicePerson.hasOwnProperty("age")); // Output: true

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
