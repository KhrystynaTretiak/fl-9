
function reverseNumber(number) {
    const reversed = String(Math.abs(number)).split('').reverse();
    
    if (number < 0) {
        reversed.unshift('-');
    }
    return Number(reversed.join(''));
}
reverseNumber(); 