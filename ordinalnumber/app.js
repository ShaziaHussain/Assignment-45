// Store the numbers 1 through 9 in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (var i = 0; i < numbers.length; i++) {
    // Get the current number
    var num = numbers[i];
    // Use an if-else chain to determine the proper ordinal ending
    // Check if the number ends in 1, 2, or 3 and is not in the range 11-13
    if (num % 10 === 1 && num !== 11) {
        console.log("".concat(num, "st"));
    }
    else if (num % 10 === 2 && num !== 12) {
        console.log("".concat(num, "nd"));
    }
    else if (num % 10 === 3 && num !== 13) {
        console.log("".concat(num, "rd"));
    }
    else {
        console.log("".concat(num, "th"));
    }
}
