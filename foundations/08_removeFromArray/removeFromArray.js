const removeFromArray = function(array,...targetNum) {
return array.filter(item => !targetNum.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
