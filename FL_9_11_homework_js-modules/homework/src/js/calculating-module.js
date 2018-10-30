import { display } from './output-module';

export function setNum (button) {
    if (button.value === '=') {        
        const result = new Function(`"use strict"; return ${display.value}` );
        display.value = result();
    } else if (button.value === 'C') {
        display.value = '';
    } else {
        display.value += button.value;
    }
    
    return button;
}

