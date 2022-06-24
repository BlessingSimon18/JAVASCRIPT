// Program that build a basic arithmetic calculator without a frontend

// taking the operator from the user through prompt box 
const operator = prompt("Enter operator to perform the calculation (either +, -, *, or /):");

// accepting the number from the user through prompt box
const number1 = parseFloat(prompt("Enter the first number: "));
const number2 = parseFloat(prompt("Enter the second number: "));

// declaration of the variable.
let result;

// using if, elseif and else keyword to define the calculator condition
if (operator == "+")
{result = number1 + number2;}

else if (operator == "-")
{result = number1 - number2}

else if (operator == "*")
{result = number1 * number2}

else (operator == "/")
{result = number1 / number2}

// displaying the result of the calculator
window.alert("The result of the operation is " + result);