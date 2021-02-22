
function clearRes() {
    document.getElementById("num1st").value = "";
    document.getElementById("num2nd").value = "";
    document.getElementById("txtReslts").value = "";
}

function Calculate() {
    let first = document.getElementById("num1st").value;
    let second = document.getElementById("num2nd").value;
    if (first == "") {
        alert("Please enter first number");
        return;
    }
    if (second == "") {
        alert("Please enter second number");
        return;
    }
    // determine which operation to perform
    let operType = "Division";
    if (document.getElementById("add").checked) {
        operType = "Addition";
    } else if (document.getElementById("subtr").checked) {
        operType = "Subtraction";
    } else if (document.getElementById("multpl").checked) {
        operType = "Multiplication";
    } else if (document.getElementById("divide").checked) {
        operType = "Division";
    } else {
        operType = "Addition";
    }
    let results = 0;
    //perform operation
    switch (operType) {
        case ("Addition") :
            results = parseFloat(first) + parseFloat(second);
            break;
        case ("Subtraction") :
            results = first - second;
            break;
        case ("Multiplication") :
            results = first * second;
            break;
        case ("Division") :
            if (second == 0){
                // display message - no 0
                alert("Division by 0 is not allowed")
                // return to screen
                return;
            }
            else {
                results = first / second;
                break;
            }
    }

    operType = operType.toUpperCase();
    
    // display first, second, operation, results
    document.getElementById("txtReslts").value = operType + " result is: " + results;

}

