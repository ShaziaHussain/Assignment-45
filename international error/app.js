// Create objects for different items
var laptop = {
    name: "Laptop",
    price: 999,
    quantity: 5
};
var phone = {
    name: "Phone",
    price: 699,
    quantity: 10
};
var headphones = {
    name: "Headphones",
    price: 99,
    quantity: 20
};
// Function to calculate the total value of items
function calculateTotal(items) {
    var total = 0;
    items.forEach(function (item) {
        total += item.price * item.quantity;
    });
    return total;
}
// Display the total value of all items
var items = [laptop, phone, headphones];
// Intentional Error: Trying to access an element using an invalid index
var invalidIndex = 10; // This index doesn't exist in the items array
console.log(items[invalidIndex]); // This line will cause an index error
// Correcting the error by checking if the index is valid before accessing
if (invalidIndex >= 0 && invalidIndex < items.length) {
    console.log("Item at invalid index:", items[invalidIndex]);
}
else {
    console.log("Invalid index:", invalidIndex);
}
// Calculate and display the total value of all items
var totalValue = calculateTotal(items);
console.log("Total value of all items: $" + totalValue.toFixed(2));
