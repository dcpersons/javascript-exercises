const palindromes = function (string) {
    const textClean = string.replaceAll(/[^a-z|0-9]/gi, "").toLowerCase();
    let textReverse = textClean.split('').reverse().join('');
    return textReverse == textClean;
};

// Do not edit below this line
module.exports = palindromes;
