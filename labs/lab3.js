function lab3_onClick_calculate() {

    var s_number = document.getElementById("lab3").getElementsByTagName("input")[0].value;

    document.getElementById("lab3_answer").textContent = lab3_calculate(String(Math.abs(Number(s_number))));
}


function lab3_calculate(s_number = "0") {

    var a_number = s_number.split("");
    var point_index = a_number.findIndex((element) => element == '.');
    a_number.splice(point_index, 1);
    
    min = a_number.slice().sort();
    min.splice(point_index, 0, '.');
    max = a_number.slice().sort().reverse();
    max.splice(point_index, 0, '.');

    return String(Number(max.join('')) - Number(min.join('')));
}