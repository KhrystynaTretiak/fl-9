function* factorial(n) {
    let num = 1;
    for (let i = 1; i <= n; i++){
        num *= i;
        yield num;
    }
}

for (let n of factorial(5)) {
    console.log(n)
}
