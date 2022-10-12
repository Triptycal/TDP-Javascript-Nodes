function factorialise(num) {
    let i = 1;
    while(num > 1) {
        i ++;
        num /= i;
    }
    console.log(i);
}
factorialise(120);

module.exports.factorialise
