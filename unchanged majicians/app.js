var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the show_magicians function
function show_magicians(magicians) {
    // Loop through the array and print the name of each magician
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Define the make_great function
function make_great(magicians) {
    // Create a copy of the array to avoid modifying the original array
    var new_magicians = __spreadArray([], magicians, true);
    // Loop through the copied array and modify each magician's name
    for (var i = 0; i < new_magicians.length; i++) {
        new_magicians[i] = "the Great " + new_magicians[i];
    }
    // Return the modified array
    return new_magicians;
}
// Array of magician's names
var magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the make_great function with a copy of the array of magician's names
var great_magicians = make_great(magician_names.slice()); // Using slice() to create a copy of the array
// Call the show_magicians function with each array to show the original and modified arrays
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
