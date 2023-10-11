function lab3_onClick_calculate() {

    var s_number = document.getElementById("lab3").getElementsByTagName("input")[0].value;

    document.getElementById("lab3_answer").textContent = lab3_calculate(s_number);
}


function lab3_calculate(s_number = "0") {

    var a_number = s_number.split("");
    min = a_number.sort().join("");
    max = a_number.sort().reverse().join("");
    
    return String(Number(max) - Number(min));
}