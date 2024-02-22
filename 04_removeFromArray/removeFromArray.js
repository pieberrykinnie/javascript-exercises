const removeFromArray = function(arr, ...nums) {
    for (num of nums) {
        arr = arr.filter((ele) => ele !== num);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
