// Define the show_magicians function
function show_magicians(magicians) {
    // Loop through the array and print the name of each magician
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Define the make_great function
function make_great(magicians) {
    // Create a copy of the array to avoid modifying the original array
    const new_magicians = [...magicians];
    
    // Loop through the copied array and modify each magician's name
    for (let i = 0; i < new_magicians.length; i++) {
        new_magicians[i] = "the Great " + new_magicians[i];
    }
    
    // Return the modified array
    return new_magicians;
}

// Array of magician's names
const magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the make_great function with a copy of the array of magician's names
const great_magicians = make_great(magician_names.slice()); // Using slice() to create a copy of the array

// Call the show_magicians function with each array to show the original and modified arrays
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
