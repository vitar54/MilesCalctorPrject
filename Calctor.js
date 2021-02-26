
function clearRes() {
    document.getElementById("num1st").value = "";
    document.getElementById("num2nd").value = "";
    document.getElementById("txtReslts").value = "";
    document.getElementById("num1st").focus();
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
    let operType = "Divide";
    operType = document.querySelector('input[name="operation"]:checked').value;
    
    // display first, second, operation, results
    document.getElementById("txtReslts").value = doSelected(operType,first,second);

}

function doSelected(operType, first, second) {
    let results = 0;
    //perform operation
    switch (operType) {
        case ("Add") :
            results = parseFloat(first)  + parseFloat(second);
            return "The result of adding " + first + " and " + second + " is " + results;
            break;
        case ("Subtract") :
            results = first - second;
            return "The result of subtracting " + second + " from " + first + " is " + results;
            break;
        case ("Multiply") :
            results = first * second;
            return "The result of multiplying " + first + " by " + second + " is " + results;
            break;
        case ("Divide") :
            if (second == 0){
                // display message - no 0
                return "Division by 0 is not allowed";
            }
            else {
                results = first / second;
                return "The result of dividing " + first + " by " + second + " is " + results;
            }
            break;
    }
    return "Unknown operation: " + operType;

}
