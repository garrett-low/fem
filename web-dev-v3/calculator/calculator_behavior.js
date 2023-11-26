/** @type {HTMLElement} */
const calcBody = document.querySelector(".calc-body");

/** @type {HTMLElement} */
// const calcButtonWrapper = document.querySelector(".calc-button-wrapper");

/** @type {HTMLTextAreaElement} */
const calcScreen = document.querySelector("#calc-screen");

/** @type {{value: string}} */
let operandObservable = {
    /** @type {string} */
    __value: "",

    /** @returns {string} */
    get value() {
        return this.__value;
    },
    set value(newValue) {
        this.__value = newValue;
        calcScreen.value = this.__value;
    },
};

/** @type {char} */
let operator = "";

/** @type {Array.<number>} */
let operandList = [];

document.addEventListener("keydown", btnKeyDownHandler);

/**
 * 
 * @param {KeyboardEvent} event 
 */
function btnKeyDownHandler(event) {
    const keyUpper = event.key.toUpperCase();
    console.log(keyUpper);
    switch (keyUpper) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            operandObservable.value += event.key;
            break;
        case 'ESCAPE':
        case 'CLEAR':
        case 'C':
            operandObservable.value = "";
            break;
        case '=':
        case 'ENTER':
            handleEnter();
            break;
        case 'ADD':
        case '+':
        // break;
        case 'SUBTRACT':
        case '-':
        // break;
        case 'MULTIPLY':
        case '*':
        // break;
        case 'DIVIDE':
        case '/':
            handleOperator(event.key);
            break;
        case 'BACKSPACE':
            handleBackspace();
            break;
        default:
            break;
    }
}

function handleEnter() {
    if (operandList.length <= 0) {
        return;
    }

    operandList.push(operandObservable.value);
    operandObservable.value = ""

    doOperation();
}

/** @param {string} operatorKey  */
function handleOperator(operatorKey) {
    // calculator doesn't do anything with 0
    if (!operandObservable.value) {
        return;
    }

    switch (operatorKey) {
        case 'ADD':
        case '+':
            operator = '+';
            break;
        case 'SUBTRACT':
        case '-':
            operator = '-';
            break;
        case 'MULTIPLY':
        case '*':
            operator = '*';
            break;
        case 'DIVIDE':
        case '/':
            operator = '/';
            break;
        default:
            return;
    }

    if (operandList.length <= 1) {
        operandList.push(operandObservable.value);
    }

    operandObservable.value = ""

    if (operandList.length >= 2) {
        doOperation();
    }
}

function handleBackspace() {
    const operandLength = operandObservable.value.length;
    if (operandLength <= 0) {
        return;
    }

    operandObservable.value = operandObservable.value.substring(0, operandLength - 1);
}

function doOperation() {
    /** @type {number} */
    const operandSecond = parseInt(operandList.pop());
    /** @type {number} */
    const operandFirst = parseInt(operandList.pop());
    /** @type {number} */
    let result = 0;

    switch (operator) {
        case '+':
            result = operandFirst + operandSecond;
            break;
        case '-':
            result = operandFirst - operandSecond;
            break;
        case '*':
            result = operandFirst * operandSecond;
            break;
        case '/':
            result = Math.floor(operandFirst / operandSecond);
            break;
        default:
            break;
    }

    operator = "";
    operandObservable.value = result;
}

function resetState() {
    calcScreen.value = ''; // why does textarea not reset when refreshing page?
}

resetState();