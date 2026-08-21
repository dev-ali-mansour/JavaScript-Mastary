let numbers = [1, 2, 3, 4];
console.log(numbers);

let _fruits = ["apple", "banana", "orange"];
console.log(_fruits);

console.log(numbers[3]); // Output: 4
console.log(_fruits[1]); // Output: banana

_fruits[1] = "cherry";
console.log(_fruits[1]); // Output: cherry

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);
console.log(matrix[0]); // Output: [1, 2, 3]
console.log(matrix[0][1]); // Output: 2

console.log(_fruits.length); // Output: 3
_fruits.push("grape");
console.log(_fruits); // Output: ["apple", "cherry", "orange", "grape"]
console.log(_fruits.length); // Output: 4

let lastFruit = _fruits.pop();
console.log(_fruits); // Output: ["apple", "cherry", "orange"]
console.log(lastFruit); // Output: grape

let firstFruit = _fruits.shift();
console.log(_fruits); // Output: ["cherry", "orange"]
console.log(firstFruit); // Output: apple

let newLength = _fruits.unshift("kiwi");
console.log(_fruits); // Output: ["kiwi", "cherry", "orange"]
console.log(newLength); // Output: 3

let newFruits = ["apple", "banana", "orange", "strawberry"];
let slicedArray = newFruits.slice(1, 3);
console.log(slicedArray); // Output: ["banana", "orange"]

let deletedItems = _fruits.splice(1, 2,"New Item", "New Item Again");
console.log(_fruits); // Output: ["kiwi"]
console.log(deletedItems); // Output: ["cherry", "orange"]
