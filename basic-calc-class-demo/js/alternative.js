function compute(operator){
    let num1 = parseFloat(document.getElementById("operand1").value)
    let num2 = parseFloat(document.getElementById("operand2").value)

    if(isNaN(num1) || isNaN(num2)) {
        result.textContent = "Please enter valid numbers.";
        result.classList.add("error");
        return;
    }

    result.classList.remove("error");

    switch(operator){
        case '+':
            result.textContent = num1 + num2;
            break;
        case '-':
            result.textContent = num1 - num2;
            break;
        case '*':
            result.textContent = num1 * num2;
            break;
        case '/':
            if(num2 === 0) {
                result.textContent = "Cannot divide by zero.";
                result.classList.add("error");
                return;
            }
            result.textContent = num1 / num2;
            break;
    }
}