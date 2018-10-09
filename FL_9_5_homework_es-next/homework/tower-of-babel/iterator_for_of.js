const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let count = 1;
        
        return {
            next() {
                if (count > max) {

                    return { done: true };
                }
                let num = count;
                if (num % 3 === 0 && num % 5 === 0) {
                    num = 'FizzBuzz';
                } else if (num % 3 === 0) {
                    num = 'Fizz';
                } else if (num % 5 === 0) {
                    num = 'Buzz'
                }
                count++;

                return { done: false, value: num };
            }
        }
    }
}

for (let n of FizzBuzz) {
    console.log(n);
}