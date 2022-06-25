
let firstNumber = parseFloat(prompt("Please Enter First digit: "));
let preferedOperator = prompt("Enter mathematical operator ( either +, -, * or / ) : ");
let secondNumber = parseFloat(prompt("Please Enter your Second digit : "));

let result;

/* using switch statement */
switch(preferedOperator) 
{
    case "+":
        result = firstNumber + secondNumber;   // addition
        break;

    case "-":
        result = firstNumber - secondNumber;   // subtraction
        break;

    case "*":
        result = firstNumber * secondNumber;   // multiplication
        break;

    case "/":
        result = firstNumber / secondNumber;   // division
        break;

    default:
        console.log('Invalid operator');
        break;
}

// Displaying Result
alert("Your result is : " + result);