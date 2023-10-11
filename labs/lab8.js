function lab8_add_li() {

    var new_li = document.createElement("li");
    new_li.textContent = document.getElementsByName("lab8_string")[0].value;
    document.getElementById("lab8_list").appendChild(new_li);
   
    document.getElementById("lab8_total").textContent = document.getElementById("lab8_list").childElementCount;
}

function lab8_toggle_list() {
    
    const itemList = document.getElementById("lab8_list_wrapper")
    const isHidden = itemList.style.display === "none";
    if (isHidden) {
        itemList.style.display = "block";
    } else {
        itemList.style.display = "none";
    }
}