const findTheOldest = function(arr) {
    let date = new Date().getFullYear();
    arr.sort((a, b) => {
        if (a.yearOfDeath == undefined) {
            return (b.yearOfDeath - b.yearOfBirth) - (date - a.yearOfBirth)
        } if (b.yearOfDeath == undefined) {
            return (date - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
        } else return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    });
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
