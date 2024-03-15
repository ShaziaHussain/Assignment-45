
// Define the sandwich_order function
function sandwich_order(...items: string[]) {
    // Print a summary of the sandwich being ordered
    console.log("Sandwich Order:");
    console.log("- Bread");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("- Bread");
    console.log("Enjoy your sandwich!\n");
}

// Call the sandwich_order function with different numbers of arguments
sandwich_order("Ham", "Cheese", "Lettuce");
sandwich_order("Turkey", "Avocado");
sandwich_order("Peanut Butter", "Jelly", "Banana");
