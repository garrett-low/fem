/** @type {HTMLElement} */
const calcBody = document.querySelector(".calc-body");

/** @type {HTMLElement} */
// const calcButtonWrapper = document.querySelector(".calc-button-wrapper");

/** @type {HTMLElement} */
const calcScreen = document.querySelector("#calc-screen");

document.addEventListener("keydown", btnKeyDownHandler);

/**
 * 
 * @param {KeyboardEvent} event 
 */
function btnKeyDownHandler(event) {
    const keyUpper = event.key.toUpperCase();
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
            calcScreen.value += keyUpper;
            break;
        case 'C':
            calcScreen.value = '';
            break;
        default:
            break;
    }
}

function resetState() {
    calcScreen.value = '';
}

resetState();