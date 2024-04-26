let firstNumber = prompt("First number:");
let secondNumber = prompt("Second number:");

// Check if inputs are valid numbers
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    // Both inputs are valid numbers
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    alert(`The sum of ${firstNumber} and ${secondNumber} is ${sum}.`);
} else if (isNaN(firstNumber) && !isNaN(secondNumber)) {
    // First input is invalid
    alert("Invalid input. Please enter a valid number for the first number.");
} else if (!isNaN(firstNumber) && isNaN(secondNumber)) {
    // Second input is invalid
    alert("Invalid input. Please enter a valid number for the second number.");
} else {
    // Both inputs are invalid
    alert("Invalid input. Please enter a valid number for both numbers.");
}
