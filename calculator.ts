function add(a: number, b: number): number {
    return a + b;
}
function subtract(a: number, b: number): number {
    return a - b;
}
function multiply(a: number, b: number): number {
    return a * b;
}
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
const num1: number = 10;
const num2: number = 5;
console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);
