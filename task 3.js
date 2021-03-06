// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
    const result = numbers.map(num => num ** 2).reduce(function (acc, currentValue, index, array) {
        return acc + currentValue;
    }, 0);
    return result;
}
squareSum([0, 3, 4, 5])