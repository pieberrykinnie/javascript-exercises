const palindromes = function (str) {
    const charList = str.split("")
    .filter(e => e.toUpperCase() !== e.toLowerCase() || Number(e) > 0)
    .map(e => e.toLowerCase());

    const reversedCharList = charList.slice().reverse();

    return charList.every((e, i) => e === reversedCharList[i]);
};

// Do not edit below this line
module.exports = palindromes;
