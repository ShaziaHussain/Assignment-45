let usernames = ["admin", "Alice", "Bob", "Charlie", "David", "Eve"];

// Check if the list of users is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array of usernames
    for (let i = 0; i < usernames.length; i++) {
        // Check if the current username is 'admin'
        if (usernames[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
        }
    }
}

// Remove all usernames from the array
usernames = [];

// Check if the list of users is empty after removing all usernames
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
