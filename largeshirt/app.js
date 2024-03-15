// Define the make_shirt function with default values
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    // Print a sentence summarizing the size and message
    console.log("You've ordered a ".concat(size, " sized shirt with the message: \"").concat(message, "\"."));
}
// Call the make_shirt function with default values
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Keep Calm and Code On!"); // Small shirt with custom message
