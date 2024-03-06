const fibonacci = function(num) {
    if (num < 0 || !Number.isInteger(Number(num))) {
        return "OOPS";
    } else if (Number(num) === 0) {
        return 0;
    } else if (Number(num) < 3) {
        return 1;
    }else {
        const fibList = [1, 1];

        for (let i = 0; i < Number(num) - 2; i++) {
            fibList[i + 2] = fibList[i] + fibList[i + 1];
        }

        return fibList[Number(num) - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
