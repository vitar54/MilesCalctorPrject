
function clearRes() {
    document.getElementById("num1st").value = "";
    document.getElementById("num2nd").value = "";
    document.getElementById("txtReslts").value = "";
    document.getElementById("num1st").focus();
}

function Calculate() {
    let first = document.getElementById("num1st").valueAsNumber;
    let second = document.getElementById("num2nd").valueAsNumber;
    if (first == "") {
        alert("Please enter first number");
        return;
    }
    if (second == "") {
        alert("Please enter second number");
        return;
    }
    // determine which operation to perform
    let operType = "Divide";
    if (document.getElementById("add").checked) {
        operType = "Add";
    } else if (document.getElementById("subtr").checked) {
        operType = "Subtract";
    } else if (document.getElementById("multpl").checked) {
        operType = "Multiply";
    } else if (document.getElementById("divide").checked) {
        operType = "Divide";
    } else {
        operType = "Add";
    }
    let results = 0;
    //perform operation
    switch (operType) {
        case ("Add") :
            results = parseFloat(first) + parseFloat(second);
            break;
        case ("Subtract") :
            results = first - second;
            break;
        case ("Multiply") :
            results = first * second;
            break;
        case ("Divide") :
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

    // display first, second, operation, results
    document.getElementById("txtReslts").value = operType + " " + first + " and " + second + " resulted in: " + results;

}

