const max = process.argv[2];
let FizzBuzz = function* () {
    let count = 1;
    while (count <= max) {
        let num = count;
        count++;

        if (num % 3 === 0 && num % 5 === 0) {
            num = 'FizzBuzz';
        } else if (num % 3 === 0) {
            num = 'Fizz';
        } else if (num % 5 === 0) {
            num = 'Buzz'
        }
        yield num;
    }
}();

for (let n of FizzBuzz) {
    console.log(n);
}