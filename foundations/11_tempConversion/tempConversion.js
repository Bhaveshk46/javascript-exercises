const convertToCelsius = function(num) {
  //Formula for Fahrenheit to celsius
  return Number( (5/9 * (num-32) ).toFixed(1))
};

const convertToFahrenheit = function(num) {
  //Formula for Celsius to Fahrenheit
  return Number( (num * 9/5+32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
