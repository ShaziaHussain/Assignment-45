// Equality and inequality with strings
const string1: string = "apple";
const string2: string = "banana";
const string3: string = "cat";
console.log(string1 === "apple"); // true
console.log(string2 !== "orange"); // true
console.log(string3 === "dog"); // false

// Lowercase function
console.log("HELLO".toLowerCase() === "hello"); // true
console.log("WORLD".toLowerCase() !== "world"); // false

// Numerical tests
console.log(10 === 10); // true
console.log(5 < 10); // true
console.log(20 > 30); // false
console.log(15 >= 15); // true
console.log(25 <= 20); // false

// Tests using "and" and "or" operators
console.log((5 > 3) && (10 < 15)); // true
console.log((8 < 5) || (10 === 10)); // true
console.log((7 !== 7) && (20 <= 20)); // false

// Test whether an item is in an array
console.log([1, 2, 3, 4, 5].includes(3)); // true
console.log(["banana", "orange", "apple", "grape"].includes("apple")); // true
console.log(["dog", "rabbit", "hamster"].includes("cat")); // false

// Test whether an item is not in an array
console.log(![1, 2, 3, 4, 5].includes(10)); // true
console.log(!["banana", "orange", "grape"].includes("apple")); // false
console.log(!["tiger", "lion", "leopard"].includes("lion")); // false
