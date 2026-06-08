// const repeatString = function(str, amount) {
function repeatString(str, amount) {
    let result = "";
    if (amount < 0) {
        return "ERROR"
    } 
    for (i = 0 ; i < amount ; i++) {
        result += str
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
