// Array Methods:
// map(): creates a new array by applying a function to each element of the original array.
function double(num) {
  return num * 2;
}

let numbers = [1, 2, 3, 4];
let doubledNumbers = numbers.map(double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]

//Using anonymous function
let doubleAnonymous = numbers.map(function (num) {
  return num * 2;
});
console.log(doubleAnonymous); // Output: [2, 4, 6, 8]

//Using arrow function
let doubleArrow = numbers.map((num) => num * 2);
console.log(doubleArrow); // Output: [2, 4, 6, 8]

// filter(): creates a new array with all elements that pass a test implemented by the provided function.
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce(): applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum); // Output: 10

// forEach(): executes a provided function once for each array element.
numbers.forEach((num) => console.log(num)); // Output: 1 2 3 4

// find(): returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
let firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // Output: 2

// some(): tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let hasNegative = [-1, 2, 3, 4].some((num) => num < 0);
console.log(hasNegative); // Output: true

// every(): tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let hasEvery = [-1, -2, -3, -4].every((num) => num > 0);
console.log(hasEvery); // Output: false

// concat(): merges two or more arrays and returns a new array without modifying the original arrays.
let moreNumbers = [5, 6, 7, 9];
let newArray = numbers.concat(moreNumbers);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 9]

// slice(): returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let slicedNumbers = newArray.slice(2, 5);
console.log(slicedNumbers); // Output: [3, 4, 5]

// splice(): changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let fruites = ["apple", "banana", "Orange"];
fruites.splice(1, 1, "Mango");
console.log(fruites); // Output: ["apple", "Mango", "Orange"]

// join(): joins all elements of an array into a string and returns this string.
let allFruites = fruites.join(", ");
console.log(allFruites); // Output: "apple, Mango, Orange"

// reverse(): reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
let reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // Output: [4, 3, 2, 1]

// sort(): sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
numbers = [3, 1, 10, 2];
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 2, 3, 10]

// includes(): determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let hasThree = numbers.includes(3);
console.log(hasThree); // Output: true

// indexOf(): returns the first index at which a given element can be found in the array, or -1 if it is not present.
let indexOfTen = numbers.indexOf(10);
console.log(indexOfTen); // Output: 3

// split(): splits a string into an array of substrings based on a specified separator and returns the new array.
let sentence = "Hello, my dog is cute";
let words = sentence.split(" ");
console.log(words); // Output: ["Hello,", "my", "dog", "is", "cute"]
