const sumAll = function (a, b) {
    let sum = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }
    else if (a < b && a >= 0 && b >= 0) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    }
    else if (a > b && a >= 0 && b >= 0) {
        for (let i = a; i >= b; i--) {
            sum += i;
        }
    }
    else {
        return "ERROR";
    }
    return sum;
};
console.log(sumAll(123, 1))
// Do not edit below this line
module.exports = sumAll;
