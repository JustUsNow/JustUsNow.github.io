function lab1_add_crate() {
    
    var parent = document.getElementById("lab1_crates");

    var new_crate = document.createElement(tagName="div");
    new_crate.setAttribute("class", "lab1_crate");

    var l_text = document.createElement(tagName='p');
    l_text.textContent += "Длина";
    var l_input = document.createElement(tagName='input');
    l_input.setAttribute('type', 'number');
    l_input.setAttribute('min', '0');
    l_input.setAttribute('name', 'lab1_length');
    new_crate.appendChild(l_text);
    new_crate.appendChild(l_input);

    var w_text = document.createElement(tagName='p');
    w_text.textContent += "Ширина";
    var w_input = document.createElement(tagName='input');
    w_input.setAttribute('type', 'number');
    w_input.setAttribute('min', '0');
    w_input.setAttribute('name', 'lab1_width');
    new_crate.appendChild(w_text);
    new_crate.appendChild(w_input);

    var h_text = document.createElement(tagName='p');
    h_text.textContent += "Высота";
    var h_input = document.createElement(tagName='input');
    h_input.setAttribute('type', 'number');
    h_input.setAttribute('min', '0');
    h_input.setAttribute('name', 'lab1_height');
    new_crate.appendChild(h_text);
    new_crate.appendChild(h_input);
    
    parent.appendChild(new_crate);
}


function lab1_onClick_calculate() {

    var crates_measurements = [];
    var crates = document.getElementById("lab1_crates").getElementsByClassName("lab1_crate");

    for (var i  = 0; i < crates.length; i++) {
        var input_elems = crates[i].getElementsByTagName("input");
        var measurements = [Number(input_elems[0].value), Number(input_elems[1].value), Number(input_elems[2].value)];
        crates_measurements.push(measurements);
    }

    document.getElementById("lab1_answer").textContent = lab1_calculate(crates_measurements);
}


function lab1_calculate(crates_measurements = [[]]) {
    
    var length = 0;
    var width = 0;
    var height = 0;

    crates_measurements.forEach((crate) => {
        if ((crate[0] <= 0) | (crate[1] <= 0) | (crate[2] <= 0)) { 
            console.log("Неверно указаны размеры. Ящик исключён из подсчёта.");
            return 0;
        }
        length += crate[0];
        width += crate[1];
        height += crate[2];
    })

    return length * width * height;
}