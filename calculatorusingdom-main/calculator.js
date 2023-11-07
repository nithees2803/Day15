var expressionInput = document.getElementById("expressionInput");
var resultInput = document.getElementById("resultInput");
var alertMessage = document.getElementById("alertMessage");

// Add number or operator to the expression
function addToExpression(value) {
    expressionInput.value += value;
}

// Calculate and display the result
function calculateResult() {
    var expression = expressionInput.value;

    try {
        var result = eval(expression);
        resultInput.value = result;
        alertMessage.style.display = "none";
    } catch (error) {
        resultInput.value = "";
        alertMessage.style.display = "block";
    }
}

// Clear the expression and result
function clearExpression() {
    expressionInput.value = "";
    resultInput.value = "";
    alertMessage.style.display = "none";
}

// Delete the last character from the expression
function deleteLastCharacter() {
    expressionInput.value = expressionInput.value.slice(0, -1);
}

// Only allow number keys and some operators
document.addEventListener("keydown", function(event) {
    var allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "%"];

    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
        alertMessage.style.display = "block";
    } else {
        alertMessage.style.display = "none";
    }
});
