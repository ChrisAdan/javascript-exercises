const repeatString = function (message, iterations) {
  if (iterations < 0) {
    return "ERROR";
  } else if (iterations === 0) {
    return "";
  } else {
    let result = message;
    for (let i = 1; i < iterations; i++) {
      result += message;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = repeatString;
