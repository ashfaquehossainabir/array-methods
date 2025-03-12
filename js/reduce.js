// The reduce method in JavaScript is a powerful tool for transforming an array into a single value by applying a function to each element of the array. Here's a concise guide on how to use it:

// Basic Syntax
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
// callback: A function to execute on each element in the array, taking four arguments:
// accumulator: The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// currentValue: The current element being processed in the array.
// currentIndex (optional): The index of the current element being processed in the array.
// array (optional): The array reduce was called upon.
// initialValue (optional): A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used and skipped.

// Example 1: Sum of All Elements
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Example 2: Flattening an Array of Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

// Example 3: Counting Instances of Values in an Object
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
const fruitCount = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(fruitCount); // Output: { apple: 2, banana: 3, orange: 2 }

// Example 4: Grouping Objects by a Property
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 },
  { name: 'David', age: 25 }
];

const groupedByAge = people.reduce((accumulator, currentValue) => {
  const age = currentValue.age;
  if (!accumulator[age]) {
    accumulator[age] = [];
  }
  accumulator[age].push(currentValue);
  return accumulator;
}, {});
console.log(groupedByAge);
// Output: { '21': [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }], '25': [{ name: 'Bob', age: 25 }, { name: 'David', age: 25 }] }