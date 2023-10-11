function lab4_onClick_remove() {

    var string = document.getElementById("lab4").getElementsByTagName("input")[0].value;

    document.getElementById("lab4_answer").textContent = lab4_remove(string);
}


function lab4_remove(string = "") {

    if (string.length % 2 == 0) {
        return string.slice(0, string.length / 2 - 1) + string.slice(string.length / 2 + 1, string.length);
    }    
    else {
        return string.slice(0, Math.floor(string.length / 2)) + string.slice(Math.ceil(string.length / 2), string.length);
    }
}