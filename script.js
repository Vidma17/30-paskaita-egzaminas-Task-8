/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// Constructor
function Calculator(first, second) {
    this.firstNumber = first;
    this.secondNumber = second;
}

// Calculator objects
let numbers = new Calculator(20, 10);
let sum = numbers.firstNumber + numbers.secondNumber;
let subtraction = numbers.firstNumber - numbers.secondNumber;
let multiplication = numbers.firstNumber * numbers.secondNumber;
let division = numbers.firstNumber / numbers.secondNumber;

// Display
console.log("Suma:", sum);
console.log("Atimtis:", subtraction);
console.log("Daugyba:", multiplication);
console.log("Dalyba:", division);