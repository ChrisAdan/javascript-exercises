const reverseString = function (input) {
  let sourceArray = input.split("");
  let resultArray = [];
  for (let i = sourceArray.length - 1; i >= 0; i--) {
    resultArray.push(sourceArray[i]);
  }
  return resultArray.join("");
};
// Do not edit below this line
module.exports = reverseString;
