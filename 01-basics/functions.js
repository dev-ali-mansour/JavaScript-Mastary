/* 
Side note: Parameter vs Argument:
A parameter is a variable that is defined in the function declaration 
and is used to accept values when the function is called. 
In the example above, "name" is a parameter of the greet function.

An argument, on the other hand, is the actual value that is passed to 
the function when it is called. In the example above, "Alice", "John", and "Lousy" are arguments that are passed to the greet function when it is called.
In summary, parameters are variables defined in the function declaration, 
while arguments are the actual values passed to the function when it is called.
*/

function greet(name, age) {
  console.log(`Hello, ${name}!`, typeof name);
  console.log(`You are ${age} years old.`, typeof age);
  console.log(" You are logged in.");
}

// Function with default parameter value
function greetPerson(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

// Function with rest parameter
function calculateSum(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  console.log(`The sum is: ${sum}`);
}

// Boolean Parameters
function checkEligibility(isMember) {
  console.log(isMember ? "Elegible" : "Not Elegible");
}

// Function with objects as parameters
function printAddress({ street, city, zip }) {
  console.log(`Address: ${street}, ${city}, ${zip}`);
}

// Function with arrays as parameters
function printNumber(numbers) {
  console.log(numbers);
}

// Function with return value
function getSquare(number) {
  return number * number;
}

// Function returning multiple values using an object
function getUserInfo(name, age) {
  return {
    userName: name,
    userAge: age,
  };
}

// Function returning multiple values using an array
function getDimension() {
  return [100, 200, 300];
}

// Function with multiple return statements
function checkAge(age) {
  if (age > 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

// Function Expressions
let greeting = function () {
  console.log("Hello");
};
let multiply = function (a, b) {
  return a * b;
};

// Functions are objects
function sayHello() {
  console.log("Hello Again!");
}

/*
Arrow functions are a more concise way to write functions in JavaScript.
*/
let greetArrow = () => console.log("Hello from Arrow Function!");
let greatArrowMultiple = (name, age) => {
  console.log(`Hello 1 ${name}`);
  console.log(`You are ${age} years old.`);
};

let fullName = (firstName, lastName) => `${firstName} ${lastName}`;

greet("Alice", 22);
greet("John", 21);
greet("Lousy", "29"); // You can dynamically change the data type of a variable in JavaScript.

greetPerson();
greetPerson("Ron");

calculateSum(10, 20);
calculateSum(10, 20, 30);
calculateSum(10, 20, 30, 80);

checkEligibility(true);
checkEligibility(false);

let address = {
  street: "Street1",
  city: "City1",
  zip: 95123,
};
printAddress(address);
printAddress({ street: "ABC", city: "City22", zip: 95124 });

printNumber([1, 2, 3, 4, 5, 6]);

let squareNum = getSquare(5);
console.log(`The square of 5 is: ${squareNum}`);

console.log(getUserInfo("Alice", 22));

let { userName, userAge } = getUserInfo("Alice", 22);
console.log(userName, userAge);

console.log(getDimension());
let [width, height, depth] = getDimension();
console.log(width, height, depth);

console.log(checkAge(14));
console.log(checkAge(24));

greeting();
console.log(multiply(10, 20));

sayHello();
let a = sayHello;
a();

greetArrow();
greatArrowMultiple("Alice", 22);
console.log(fullName("John", "Doe"));

// Function inside object
let alicePerson = {
  name: "Alice",
  age: 33,
  greet: function () {
    console.log(`Hi I am ${this.name}, and I am ${this.age} years old!`);
  },
};

let johnPerson = {
  name: "John",
  age: 33,
  greet: () =>
    console.log(
      `Hi I am ${johnPerson.name}, and I am ${johnPerson.age} years old!`,
    ),
};

alicePerson.greet();
johnPerson.greet();

// Counter
let counter = {
  value: 0,
  increment: function () {
    return ++this.value;
  },
  incrementBy: function (num) {
    this.value += num;
    return this.value;
  },
};

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.increment()); // Output: 3
console.log(counter.increment()); // Output: 4
console.log(counter.incrementBy(10)); // Output: 14

// Defining methods dynamically
let dynamicMethod = {
  value: 0,
};

console.log(dynamicMethod.value); // Output: 0

dynamicMethod.sayHello = function () {
  console.log("Hello Dynamic!");
};

dynamicMethod.sayHello(); // Output: Hello Dynamic!

//Nested
let car = {
  brand: "Toyota",
  specs: {
    speed: 120,
    displaySpecs: function () {
      console.log("speed", this.speed);
    },
  },
};

car.specs.displaySpecs(); // Output: speed 120

// Shorthand Version
let personShortHand = {
  name: "Short Hand",
  age: 33,
  greet() {
    console.log(`Hi I am ${this.name}, and I am ${this.age} years old!`);
  },
};

personShortHand.greet();
