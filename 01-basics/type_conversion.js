/* 
Type Conversion
- JavaScript is a loosly typed language
- JavaSript supports implicit and explicit type conversion
*/

let example1 = 5 + 1;
console.log(example1); // Output: 6
console.log(typeof example1); // Output: number

let example2 = "5" + 1;
console.log(example2); // Output: 51
console.log(typeof example2); // Output: string

let example3 = "5" - 1;
console.log(example3); // Output: 4
console.log(typeof example3); // Output: number

let example4 = "5" * 2;
console.log(example4); // Output: 10
console.log(typeof example4); // Output: number

let example5 = "5" / 2;
console.log(example5); // Output: 2.5
console.log(typeof example5); // Output: number

let example6 = "5" % 2;
console.log(example6); // Output: 1
console.log(typeof example6); // Output: number

let example7 = "5" ** 2;
console.log(example7); // Output: 25
console.log(typeof example7); // Output: number

// Converting values explicitly
// toString(), string()
let num = 123;
let bool = true;

let numToString = String(num);
console.log(numToString);
console.log(typeof numToString); // Output: string

let boolToString = String(bool);
console.log(boolToString);
console.log(typeof boolToString); // Output: string

let numToString1 = num.toString();
console.log(numToString1);
console.log(typeof numToString1); // Output: string

let boolToString1 = bool.toString();
console.log(boolToString1);
console.log(typeof boolToString1); // Output: string

// Number(), parseInt(), parseFloat()
let strNum = "123";
let strFloat = "12.55";

let strToNum = Number(strNum);
console.log(strToNum);
console.log(typeof strToNum); // Output: number

let strToInt = parseInt(strFloat);
console.log(strToInt);
console.log(typeof strToInt); // Output: number

let strToFloat = parseFloat(strFloat);
console.log(strToFloat);
console.log(typeof strToFloat); // Output: number

let invalidNum = "hello";
let invalidToNum = Number(invalidNum);
console.log(invalidToNum); // Output: NaN
console.log(typeof invalidToNum); // Output: number

// Boolean()
let zero = 0;
let nonEmptyString = "hello";
let zeroToBoolean = Boolean(zero);
console.log(zeroToBoolean); // Output: false
console.log(typeof zeroToBoolean); // Output: boolean

let nonEmptyStringToBoolean = Boolean(nonEmptyString);
console.log(nonEmptyStringToBoolean); // Output: true
console.log(typeof nonEmptyStringToBoolean); // Output: boolean
