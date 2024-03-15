// Make a list of current usernames
const current_users = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Make a list of new usernames
const new_users = ["Bob", "Frank", "Grace", "Helen", "John"];

// Loop through each new username
for (let i = 0; i < new_users.length; i++) {
    // Flag to keep track of whether the username is already taken
    let username_taken = false;
    
    // Convert both usernames to lowercase for case insensitivity
    const new_username_lowercase = new_users[i].toLowerCase();

    // Check if the new username already exists in the current usernames
    for (let j = 0; j < current_users.length; j++) {
        const current_username_lowercase = current_users[j].toLowerCase();
        
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
        console.log(`Sorry, ${new_users[i]} is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! ${new_users[i]} is available.`);
    }
}
