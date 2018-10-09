let inputs = process.argv.slice(2);
let result = inputs.map(el => el[0])
    .reduce((result, el) => result + el);

console.log(result);
