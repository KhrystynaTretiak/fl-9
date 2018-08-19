let a = parseFloat(prompt('Length of a'));
let b = parseFloat(prompt('Length of b'));
let angle = parseFloat(prompt('Angle'));
const DEGREE = 180;
let rezult = 0;
let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(angle / DEGREE * Math.PI));
let s = a * b * Math.sin(angle / DEGREE * Math.PI) / 2;
let p = a + b + c;

if (a <= 0 || isNaN(a) || b <= 0 || isNaN(b) || angle <= 0 || isNaN(angle) || c <= 0 || s <= 0) {
    rezult = 'Invalid data'
} else {
    rezult = 'c length: ' + Math.floor(c * 100) / 100 +
        '\n' + 'Triangle square: ' + Math.round(s) +
        '\n' + 'Triangle perimeter: ' + Math.floor(p * 100) / 100;
}

console.log(rezult);