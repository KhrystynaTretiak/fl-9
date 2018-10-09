function* range(from, to) {
    let num = from;
    while(num <= to){
        yield num++;
    }
}

for (let r of range(5, 10)) {
    console.log(r);
}
