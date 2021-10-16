
const operator = prompt('Пожалуйста, выберите, какую операцию хотите совершить : +, - , *, / ');

const number1 = Number(prompt('Пожалуйста. введите первое число'));
const number2 = Number(prompt('Пожалуйста, введите второе число'));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

alert(`${number1} ${operator} ${number2} = ${result}`);