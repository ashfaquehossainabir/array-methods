// ForEach Syntax

// array.forEach(function(currentValue, index, array) {
//     // Your code here
//   });


// Example-1: Simple Iteration

const fruits = ["apple", "banana", "orange", "pineapple", "coconut"]

fruits.forEach((fruit) => {
    console.log(fruit);
})


// Example-2: Modifying Elements

let numbers = [1, 2, 3, 4, 5]

numbers.forEach((number, i, arr) => {
    arr[i] = number * 2
})

console.log(numbers);


// Example-3: Using thisArg

const context = {
    prefix: 'Fruit: '
}

fruits.forEach(function(fruit) {
    let capitalizedFruit = fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase()

    console.log(this.prefix + capitalizedFruit)
}, context)