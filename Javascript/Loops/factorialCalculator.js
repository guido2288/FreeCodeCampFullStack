//     Build a Factorial Calculator
// A factorial is the product of an integer and all the integers below it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. In this lab, you will create a factorial calculator that takes a number from the user and calculates the factorial of that number.

let num = 5;

function factorialCalculator (number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result *= i;
    }
    return result;
}

factorialCalculator(num);