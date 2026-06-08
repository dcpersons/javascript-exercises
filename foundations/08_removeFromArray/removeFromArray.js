const removeFromArray = function(arr, item1, item2, item3, item4) {
    for (let i = 0 ; i <= arr.length -1 ; i++) { 
        if (arr[i] === item1 || arr[i] === item2 || arr[i] === item3 || arr[i] === item4) {
            arr.splice(i, 1);
            i--;
        }
    } return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
