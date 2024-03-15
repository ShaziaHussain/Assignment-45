// Define the make_shirt function with default values
function make_shirt(size = "large", message = "I love TypeScript") {
    // Print a sentence summarizing the size and message
    console.log(`You've ordered a ${size} sized shirt with the message: "${message}".`);
}

// Call the make_shirt function with default values
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Keep Calm and Code On!"); // Small shirt with custom message
