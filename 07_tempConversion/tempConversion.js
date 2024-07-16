const convertToCelsius = function (degreesF) {
  let result = (degreesF - 32) * (5 / 9);
  return +result.toFixed(1);
};

const convertToFahrenheit = function (degreesC) {
  let result = degreesC * (9 / 5) + 32;
  return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
