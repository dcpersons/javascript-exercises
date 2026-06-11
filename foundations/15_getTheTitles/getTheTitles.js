const getTheTitles = function(arr) {
    const titles = [];
    arr.forEach((item) => {
        titles.push(item.title);
    })
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;