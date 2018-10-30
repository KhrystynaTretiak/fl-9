import { setNum } from './calculating-module';

const root = document.getElementsByTagName('body')[0];
const CALC_ACTION_BUTTONS = ['-', '+', '/', '*', '=', 'C'];
export const display = document.createElement('input');

class CalcButton {

    constructor(value, cssClass = '') {
        this.value = value;
        this.cssClass = cssClass;
    }

    getElementNode() {
        const inputNode = document.createElement('input');

        inputNode.setAttribute('type', 'button');
        inputNode.classList.add('calc-button');
        if (this.cssClass) {
            inputNode.classList.add(this.cssClass);
        }
        inputNode.value = this.value;
        inputNode.addEventListener('click', () => {
            setNum(inputNode);
        })
        return inputNode;
    }
}


export function generateCalcView() {
    display.classList.add('calc-display');
    root.appendChild(display);

    for (let i = 0; i <= 9; i++) {
        root.appendChild(new CalcButton(i).getElementNode());
    }

    CALC_ACTION_BUTTONS.forEach((element) => {
        root.appendChild(new CalcButton(element, 'operationKeys').getElementNode());
    });
    
}


