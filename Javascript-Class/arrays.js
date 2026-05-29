// let fruits = [ "Banana", "Mango", "Orange", "Cashew", "Strawberry", "Grapes"]

// console.log(fruits)

// // Change values in an array
// fruits[1] = "Guava"
// console.log(fruits)

// // Check array length
// console.log(fruits.length)

// // Adding items to the end of an array
// fruits.push("Chicken")
// console.log(fruits)

// // Removing items at the end of an array
// fruits.pop()
// console.log(fruits)

// // Adding items at the beginning of the array
// fruits.unshift("Apple")
// console.log(fruits)

// // Removing items at the beginning of an aray
// fruits.shift()
// console.log(fruits)

// // Checking if an array includes a particular item
// console.log(fruits.includes("Orange"))

// // Other array methods
// console.log(fruits.indexOf("Orange"))
// console.log(fruits.join("-"))
// console.log(fruits)

// // From middle
// fruits.splice(2 , 2)
// console.log(fruits)

// Looping through an array
// let students = ["OTK", "Zion", "Great", "Precious"]

// for(let i = 0; i < students.length; i++){
//     console.log(students[i])
// }

// Nested Arrays
// let classroom = [
//     ["Zion", "GReat"],
//     ["King", "Ruth"]
// ]

// console.log(classroom)
// console.log(classroom[0])
// console.log(classroom[1][0])

// filter
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8 ]

// let evenNumbers = numbers.filter(
//     function(num){
//         return num % 2 == 0
//     }
// )

// console.log(evenNumbers)

// find()
// let users = ["John", "Mary", "Zion"]

// let result = users.find(
//     function(user){
//         return user === "Mary"
//     }
// )

// console.log(result)

// Create an array of 5 student names and display them using a loop.

// Create an array of numbers and:

// find the total
// find the average
// display the highest number

let numbers = [10, 20 ,30 ,40 ,50]

// find total
let total = 0;

for(let i = 0; i < numbers.length; i++){
    total += numbers[i];
}

console.log("Total: ", total)

// average
let average  = total / numbers.length;

console.log("Average: ", average)

// Highest number 
let highest = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > highest){
        highest = numbers[i];
    }
}

console.log("Highest Number: ", highest)