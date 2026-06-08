const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    } let sum = 0;
    let arr = [a, b];
    arr = arr.sort((a, b) => a - b);
    for (let i = arr[0] ; i <= arr[1] ; i++){
        sum += i
    } return sum;
};

// Do not edit below this line
module.exports = sumAll;
