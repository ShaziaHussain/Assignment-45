// Define the show_magicians function
function show_magicians(magicians) {
    // Loop through the array and print the name of each magician
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Define the make_great function
function make_great(magicians) {
    // Loop through the array and modify each magician's name
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Array of magician's names
var magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the make_great function to modify the array of magician's names
make_great(magician_names);
// Call the show_magicians function to see the modified list of magicians
show_magicians(magician_names);
