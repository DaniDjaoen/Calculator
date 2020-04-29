// Calculator Display Screen
const calcScreen = document.getElementById("calculator-result-digits");
// Operators Buttons
const calcClearBtn = document.getElementById("calculator-clear-button");
const calcBackspaceBtn = document.getElementById("calculator-backspace-button");
const calcSummaryBtn = document.getElementById("calculator-summary-button");
const calcDivideBtn = document.getElementById("calculator-divide-button");
const calcMultiplyBtn = document.getElementById("calculator-multiply-button");
const calcSubstractBtn = document.getElementById("calculator-substract-button");
const calcAddBtn = document.getElementById("calculator-add-button");
// Dot Button
const calcDotBtn = document.getElementById("calculator-dot-button");
// Number Buttons
const calcNum9Btn = document.getElementById("calculator-number-9-button");
const calcNum8Btn = document.getElementById("calculator-number-8-button");
const calcNum7Btn = document.getElementById("calculator-number-7-button");
const calcNum6Btn = document.getElementById("calculator-number-6-button");
const calcNum5Btn = document.getElementById("calculator-number-5-button");
const calcNum4Btn = document.getElementById("calculator-number-4-button");
const calcNum3Btn = document.getElementById("calculator-number-3-button");
const calcNum2Btn = document.getElementById("calculator-number-2-button");
const calcNum1Btn = document.getElementById("calculator-number-1-button");
const calcNum0Btn = document.getElementById("calculator-number-0-button");
// Get all number buttons in a array
const allNumBtns = document.querySelectorAll(".number-buttons");
// Get all operator buttons in a array
const allOperatorBtns = document.querySelectorAll(".operator-buttons");
// Set default inputs
let calcInput_A = "";
let calcInput_B = "";
let isOperatorActive = false;
let isOperatorSecond = false;
let calcInput_O = "";
let calcSummary_Result = 0;
// Populate the numbers to the Calculator Display Screen
deactivateOperatorBtns(true);

function calcScreenPopulate(numbers) {
    let calcScreenData = calcScreen.innerText = numbers;
}
// Event Listener for the Calculator Buttons
calcNum0Btn.addEventListener('click', function () {
    const num0Btn = "0";
    checkIfOperatorIsActive(num0Btn);
    deactivateOperatorBtns(false);
});
calcNum1Btn.addEventListener('click', function () {
    const num1Btn = "1";
    checkIfOperatorIsActive(num1Btn);
    deactivateOperatorBtns(false);
});
calcNum2Btn.addEventListener('click', function () {
    const num2Btn = "2";
    checkIfOperatorIsActive(num2Btn);
    deactivateOperatorBtns(false);
});
calcNum3Btn.addEventListener('click', function () {
    const num3Btn = "3";
    checkIfOperatorIsActive(num3Btn);
    deactivateOperatorBtns(false);
});
calcNum4Btn.addEventListener('click', function () {
    const num4Btn = "4";
    checkIfOperatorIsActive(num4Btn);
    deactivateOperatorBtns(false);
});
calcNum5Btn.addEventListener('click', function () {
    const num5Btn = "5";
    checkIfOperatorIsActive(num5Btn);
    deactivateOperatorBtns(false);
});
calcNum6Btn.addEventListener('click', function () {
    const num6Btn = "6";
    checkIfOperatorIsActive(num6Btn);
    deactivateOperatorBtns(false);
});
calcNum7Btn.addEventListener('click', function () {
    const num7Btn = "7";
    checkIfOperatorIsActive(num7Btn);
    deactivateOperatorBtns(false);
});
calcNum8Btn.addEventListener('click', function () {
    const num8Btn = "8";
    checkIfOperatorIsActive(num8Btn);
    deactivateOperatorBtns(false);
});
calcNum9Btn.addEventListener('click', function () {
    const num9Btn = "9";
    checkIfOperatorIsActive(num9Btn);
    deactivateOperatorBtns(false);
});

function checkIfOperatorIsActive(num) {
    if (isOperatorActive === false) {
        calcInput_A = calcInput_A + num;
        calcScreenPopulate(calcInput_A);
    } else if (isOperatorActive === true) {
        calcInput_B = calcInput_B + num;
        calcScreenPopulate(calcInput_B);
    }
};

calcDotBtn.addEventListener('click', function () {
    const dotBtn = ".";
    checkIfOperatorIsActive(dotBtn);
    deactivateNumberBtns(false);
});
calcAddBtn.addEventListener('click', function () {
    calcInput_O = "+";
    isOperatorActive = true;
    calcScreenPopulate(`(${calcInput_A})${calcInput_O}`);
    deactivateNumberBtns(false);
});
calcSubstractBtn.addEventListener('click', function () {
    calcInput_O = "-";
    isOperatorActive = true;
    calcScreenPopulate(`(${calcInput_A})${calcInput_O}`);
    deactivateNumberBtns(false);
});
calcDivideBtn.addEventListener('click', function () {
    calcInput_O = "/";
    isOperatorActive = true;
    calcScreenPopulate(`(${calcInput_A})${calcInput_O}`);
    deactivateNumberBtns(false);
});
calcMultiplyBtn.addEventListener('click', function () {
    calcInput_O = "*";
    isOperatorActive = true;
    calcScreenPopulate(`(${calcInput_A})${calcInput_O}`);
    deactivateNumberBtns(false);
});
calcSummaryBtn.addEventListener('click', function () {
    if (calcInput_O == "+") {
        console.log(`Calc A = ${calcInput_A}, Calc B = ${calcInput_B}`);
        calcSummary_Result = Number(calcInput_A) + Number(calcInput_B);
        calcScreenPopulate(calcSummary_Result);
        calcInput_O = "";
        calcInput_B = "";
        console.log(`Calc A = ${calcInput_A}, Calc B = ${calcInput_B}`);
        calcInput_A = `${calcSummary_Result}`;
        console.log(`New Calc A = ${calcInput_A}`);
        deactivateNumberBtns(true);
    } else if (calcInput_O == "-") {
        console.log(`Calc A = ${calcInput_A}, Calc B = ${calcInput_B}`);
        calcSummary_Result = Number(calcInput_A) - Number(calcInput_B);
        calcScreenPopulate(calcSummary_Result);
        calcInput_O = "";
        calcInput_B = "";
        console.log(`Calc A = ${calcInput_A}, Calc B = ${calcInput_B}`);
        calcInput_A = `${calcSummary_Result}`;
        console.log(`New Calc A = ${calcInput_A}`);
        deactivateNumberBtns(true);
    } else if (calcInput_O == "/") {
        if (calcInput_B == "0") {
            calcInput_A = "";
            calcInput_B = "";
            calcInput_O = "";
            isOperatorActive = false;
            console.log(`Cleaned all inputs, confirming all inputs: A = ${calcInput_A}, B = ${calcInput_B}, O = ${calcInput_O}`);
            calcScreenPopulate("Error");
            deactivateNumberBtns(false);
            deactivateOperatorBtns(true);
        } else {
            console.log(`Calc A = ${calcInput_A}, Calc B = ${calcInput_B}`);
            calcSummary_Result = Number(calcInput_A) / Number(calcInput_B);
            calcScreenPopulate(calcSummary_Result);
            calcInput_O = "";
            calcInput_B = "";
            console.log(`Calc A = ${calcInput_A}, Calc B = ${calcInput_B}`);
            calcInput_A = `${calcSummary_Result}`;
            console.log(`New Calc A = ${calcInput_A}`);
            deactivateNumberBtns(true);
        }
    } else if (calcInput_O == "*") {
        console.log(`Calc A = ${calcInput_A}, Calc B = ${calcInput_B}`);
        calcSummary_Result = Number(calcInput_A) * Number(calcInput_B);
        calcScreenPopulate(calcSummary_Result);
        calcInput_O = "";
        calcInput_B = "";
        console.log(`Calc A = ${calcInput_A}, Calc B = ${calcInput_B}`);
        calcInput_A = `${calcSummary_Result}`;
        console.log(`New Calc A = ${calcInput_A}`);
        deactivateNumberBtns(true);
    }
});
calcClearBtn.addEventListener('click', function () {
    calcInput_A = "";
    calcInput_B = "";
    calcInput_O = "";
    isOperatorActive = false;
    console.log(`Cleaned all inputs, confirming all inputs: A = ${calcInput_A}, B = ${calcInput_B}, O = ${calcInput_O}`);
    calcScreenPopulate("0");
    deactivateNumberBtns(false);
    deactivateOperatorBtns(true);
});
calcBackspaceBtn.addEventListener('click', function () {
    if (isOperatorActive === false) {
        calcInput_A = calcInput_A.slice(0, -1);
        calcScreenPopulate(calcInput_A);
    } else if (isOperatorActive === true) {
        calcInput_B = calcInput_B.slice(0, -1);
        calcScreenPopulate(calcInput_B);
    }
})

function deactivateNumberBtns(btnStatus) {
    for (let btn = 0; btn < allNumBtns.length; btn++) {
        allNumBtns[btn].disabled = btnStatus;
    }
    calcSummaryBtn.disabled = btnStatus;
    calcBackspaceBtn.disabled = btnStatus;
    calcDotBtn.disabled = btnStatus;
}

function deactivateOperatorBtns(btnStatus) {
    for (let btn = 0; btn < allOperatorBtns.length; btn++) {
        allOperatorBtns[btn].disabled = btnStatus;
    }
    calcSummaryBtn.disabled = btnStatus;
    calcBackspaceBtn.disabled = btnStatus;
    calcClearBtn.disabled = btnStatus;
}