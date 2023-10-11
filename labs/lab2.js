function lab2_onClick_shorten() {

    var string = document.getElementById("lab2").getElementsByTagName("input")[0].value;

    document.getElementById("lab2_answer").textContent = lab2_shorten(string);
}


function lab2_shorten(string = String()) {

    var removed = Math.ceil(string.length / 10);
    
    return string.slice(0, string.length - removed);
}