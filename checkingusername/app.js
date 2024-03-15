// Make a list of current usernames
var current_users = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Make a list of new usernames
var new_users = ["Bob", "Frank", "Grace", "Helen", "John"];
// Loop through each new username
for (var i = 0; i < new_users.length; i++) {
    // Flag to keep track of whether the username is already taken
    var username_taken = false;
    // Convert both usernames to lowercase for case insensitivity
    var new_username_lowercase = new_users[i].toLowerCase();
    // Check if the new username already exists in the current usernames
    for (var j = 0; j < current_users.length; j++) {
        var current_username_lowercase = current_users[j].toLowerCase();
        // If the new username matches any of the current usernames
        if (new_username_lowercase === current_username_lowercase) {
            // Set the flag to true
            username_taken = true;
            // Break out of the loop since we found a match
            break;
        }
    }
    // Check if the username is already taken
    if (username_taken) {
        console.log("Sorry, ".concat(new_users[i], " is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! ".concat(new_users[i], " is available."));
    }
}
