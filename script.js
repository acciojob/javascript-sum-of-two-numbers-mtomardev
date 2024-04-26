let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function
if(!isNaN(input1) && !isNaN(input2)){
	let sum = parseInt(input1) + parseInt(input2)
	alert(`The sum of ${input1} and ${input2} is ${sum}.`)
}

elseif(isNaN(input1) && !isNaN(input2)){
	alert("Invalid input. Please enter a valid number.")
}

elseif(!isNaN(input1) && isNaN(input2)){
	alert("Invalid input. Please enter a valid number.")
}