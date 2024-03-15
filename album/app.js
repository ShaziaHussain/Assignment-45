// Define the make_album function
function make_album(artist, title, tracks) {
    // Create an object describing a music album
    var album = {
        artist: artist,
        title: title
    };
    // Add number of tracks to the album object if provided
    if (tracks) {
        album.tracks = tracks;
    }
    // Return the album object
    return album;
}
// Make three dictionaries representing different albums
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 12); // With number of tracks
var album3 = make_album("Artist3", "Album3");
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
