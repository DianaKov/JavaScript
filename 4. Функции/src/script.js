//1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
//Функция должна расчитывать результат операции, исходя из переданного ей знака. 
//Функция должна проверять корректность введенных чисел и знака операции.
//Все аргументы для функции принять от пользователя.

var operand1 = +prompt("Введите 1-е число:");
var sign = prompt("Введите знак: '+', '-', '*', '/', '**', '%':");
var operand2 = +prompt("Введите 2-е число:");

function calculate(operand1, operand2, sign){
    switch (sign) {
        case "+":
            result = (operand1 + operand2);
            break;
        case "-":
            result = (operand1 - operand2);
            break;
        case "*":
            result = (operand1 * operand2);
            break;
        case "/":
            result = (operand1 / operand2);
            break;
        case "**":
            result = (operand1 ** operand2);
            break;
        case "%":
            result = (operand1 % operand2);
            break;
        default:
            document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.<br></p>");
    }
    if (isNaN(operand1)){
        document.write("<p>Введите число! Вы ввели: <b style='color:red'>" + operand1 + "</b>" + "</p>");
    } if(isNaN(operand2)){
        document.write("<p>Введите число! Вы ввели: <b style='color:red'>" + operand2 + "</b>" + "</p>");
    }
    if (!isNaN(result)) {
        document.write("<p>Результат операции: <b style='color:red'>" + result + "</b>"  + "</p>");
    }
}

calculate(operand1, operand2, sign);
