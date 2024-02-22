const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;

  for (num of arr) {
    sum += num;
  }

  return sum;
};

const multiply = function(arr) {
  let product = 0;

  if (arr.length > 0) {
    product = 1;

    for (num of arr) {
      product *= num;
    }
  }

  return product;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
