// Define the show_magicians function
function show_magicians(magicians) {
    // Loop through the array and print the name of each magician
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician's names
var magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the show_magicians function with the array of magician's names
show_magicians(magician_names);
