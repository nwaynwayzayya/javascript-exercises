const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
    return arr.reduce((product, num) => product * num, 1);
};

const power = function(num, power) {
    return num ** power;
};

const factorial = function(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    else {
      return num * (factorial(num - 1));
    }
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
