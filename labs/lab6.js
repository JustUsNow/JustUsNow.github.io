function lab6_onClick_calculate() {

    var date = document.getElementById("lab6").getElementsByTagName("input")[0].value;

    document.getElementById("lab6_answer").textContent = lab6_calculate(date);
}


function lab6_calculate(date = new Date("01/01/2023")) {

    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    const currentDate = new Date(date);
    const nextYearDate = new Date("01/01/" + (currentDate.getFullYear() + 1))

    const currentUTC = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const nextYearUTC = Date.UTC(nextYearDate.getFullYear(), nextYearDate.getMonth(), nextYearDate.getDate());

    return Math.ceil((nextYearUTC - currentUTC) / _MS_PER_DAY);
}