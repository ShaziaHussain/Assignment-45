// Define the sandwich_order function
function sandwich_order() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // Print a summary of the sandwich being ordered
    console.log("Sandwich Order:");
    console.log("- Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("- Bread");
    console.log("Enjoy your sandwich!\n");
}
// Call the sandwich_order function with different numbers of arguments
sandwich_order("Ham", "Cheese", "Lettuce");
sandwich_order("Turkey", "Avocado");
sandwich_order("Peanut Butter", "Jelly", "Banana");
