const fibonacci = function(n) {
    if (+n == 0) return 0;
    if (!Number.isInteger(+n) || n < 0) return "OOPS";
    let fib = 1;
    let bo = 0;
    let fibo = 1;
    for (let i = 0 ; i <= +n-2 ; i++) {
        fibo = fib + bo;
        bo = fib;
        fib = fibo;
    } return fibo;
// take number
// add number to previous number
// 
};

// Do not edit below this line
module.exports = fibonacci;
