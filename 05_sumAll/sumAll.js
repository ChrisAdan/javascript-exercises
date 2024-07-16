const sumAll = function (...args) {
  if (args.length > 2) {
    return "ERROR";
  } else if (args.some((arg) => !Number.isInteger(arg))) {
    return "ERROR";
  } else if (args.some((arg) => arg < 0)) {
    return "ERROR";
  } else {
    let result = 0;
    const start = Math.min(...args);
    const end = Math.max(...args);
    for (let i = start; i <= end; i++) {
      result += i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
