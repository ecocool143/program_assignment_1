// node.js

const readline = require("readline");

// interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// array to store integers
let numbers = [];

// function to calculate mean
function calculateMean(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

// function to calculate median
function calculateMedian(arr) {
  const sorted = [...arr].sort((a, b) => a - b); // sort ascending
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    // even length, average of two middle numbers
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    // odd length → middle number
    return sorted[mid];
  }
}

// function to handle user input of numbers
function askForNumber() {
  rl.question("Enter an integer (or 'q' to quit): ", (input) => {
    if (input.toLowerCase() === "q") {
      if (numbers.length === 0) {
        console.log("No numbers entered. Exiting program.");
      } else {
        console.log("\nYou entered:", numbers);

        const mean = calculateMean(numbers);
        const median = calculateMedian(numbers);

        console.log("Mean (average):", mean);
        console.log("Median:", median);
      }
      rl.close();
    } else {
      const num = parseInt(input, 10);

      if (isNaN(num)) {
        console.log("Invalid input. Please enter an integer or 'q' to quit.");
      } else {
        numbers.push(num);
      }

      askForNumber(); // repeat until user quits
    }
  });
}

// start program
console.log("Welcome! Enter integers one by one. Type 'q' when done.");
askForNumber();
