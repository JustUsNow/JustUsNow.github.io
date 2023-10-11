function lab7_onClick_calculate() {

    const number1 = document.getElementsByName("lab7_number1")[0].value;
    const number2 = document.getElementsByName("lab7_number2")[0].value;
    const radioGroup = document.getElementsByName("lab7_operation");
    var operation = "+";
    
    radioGroup.forEach(radio => {
        if (radio.checked) {
            operation = radio.value;
        }
    })

    document.getElementById("lab7_answer").textContent = lab7_calculate(number1, number2, operation);
}


function lab7_calculate(number1 = 0, number2 = 0, operation = "+") {

    number1 = Number(number1);
    number2 = Number(number2);
    
    switch (operation) {
        case "+": return Calculator.addition(number1, number2);
        case "-": return Calculator.subtraction(number1, number2);
        case "*": return Calculator.multiplication(number1, number2);
        case "/": return Calculator.division(number1, number2);
    }
}


class Calculator {

    static multiplication(number1, number2) { return number1 * number2 }
    static subtraction(number1, number2) { return number1 - number2 }
    static division(number1, number2) { return number1 / number2 }
    static addition(number1, number2) { return number1 + number2 }
}