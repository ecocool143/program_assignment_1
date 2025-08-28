// program
const readline = require("readline");

// user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// store integers
let numbers = [];

// function to check condition: a * b == c
function checkProductCondition(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (k !== i && k !== j) {
          if (arr[i] * arr[j] === arr[k]) {
            return `${arr[i]} x ${arr[j]} = ${arr[k]}`;
          }
        }
      }
    }
  }
  return null;
}

// function to repeatedly ask for numbers
function askForNumber() {
  rl.question("Enter an integer (or 'q' to quit): ", (input) => {
    if (input.toLowerCase() === "q") {
      // quit → check condition
      console.log("\nYou entered:", numbers);

      if (numbers.length >= 3) {
        const result = checkProductCondition(numbers);
        if (result) {
          console.log(`Condition is met: ${result}`);
        } else {
          console.log("Condition was not met.");
        }
      } else if (numbers.length > 0) {
        console.log("Not enough numbers to check condition.");
      } else {
        console.log("No numbers entered.");
      }

      rl.close();
    } else {
      const num = parseInt(input, 10);

      if (isNaN(num)) {
        console.log("❌ Invalid input. Please enter an integer or 'q' to quit.");
      } else {
        numbers.push(num);
      }

      askForNumber(); // repeat until quit
    }
  });
}

// start program
console.log("Welcome! Enter integers (type 'q' to finish).");
askForNumber();
