let amount = parseFloat(prompt('Imput amount of money'));
let discount = parseFloat(prompt('Input the discount'));
let rezult = 0;

if (amount < 0 || discount < 0 || discount > 100 || isNaN(amount) || isNaN(discount)) {
    rezult = 'Invalid data'
} else {
    let saved = amount * discount / 100;
    let price = amount - saved;
    saved = Math.floor(saved * 100) / 100;
    price = Math.floor(price * 100) / 100;
    rezult = 'Price without discount: ' + amount +
        '\n' + 'Discount: ' + discount + '%' +
        '\n' + 'Prise with discount: ' + price +
        '\n' + 'Saved: ' + saved;
}

console.log(rezult);

