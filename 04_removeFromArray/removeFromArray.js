const removeFromArray = function (input, ...args) {
  let result = [];
  for (item of input) {
    if (args.includes(item)) {
      continue;
    } else {
      result.push(item);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
