function lab5_onClick_validate() {

    var string = document.getElementById("lab5").getElementsByTagName("input")[0].value;

    document.getElementById("lab5_answer").textContent = lab5_validate(string);
}


function lab5_validate(string = "") {

    //Только буквы
    var ex1 = /^[A-Za-zа-яА-Я]+$/;
    //Только цифры
    var ex2 = /^\d+$/;

    return (ex1.test(string) || ex2.test(string));
}