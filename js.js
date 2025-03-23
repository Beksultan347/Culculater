let currentInput = '';
let prevesInput = ''
let operator = '';
let display = document.getElementById("input-box");

function addNumber(num){
    currentInput += num;
    display.value = currentInput;
}

function clearDisplay(){
    currentInput = "";
    prevesInput = "";
    operator = "";
    display.value = '';
}

function setOperation(op){
    if(display.value === ''){
        return;
    }else{
        calculate();

        operator = op;
        prevesInput = display.value;
        currentInput = '';
        display.value = '';
    };
};

function calculate(){
    let result;
    const current = parseFloat(currentInput);
    const prev = parseFloat(prevesInput);

    if(isNaN(current) || isNaN(prev)){
        return;
    };

    switch(operator){
        case '+':
        result = prev + current;
        break;

        case '-':
        result = prev - current;
        break;

        case '*':
        result = prev * current;
        break;

        case '/':
            if(current === 0){
                alert("I is inpossible to delete zero");
                return;
            }
        result = prev / current;
        break;

        default:
            return;
    }

    display.value = result;
    prevesInput = result.toString();
    currentInput = '';
}