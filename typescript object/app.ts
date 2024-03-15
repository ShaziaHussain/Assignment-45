// Define an interface for the item
interface Item {
    name: string;
    price: number;
    quantity: number;
}

// Create objects for different items
const laptop: Item = {
    name: "Laptop",
    price: 999,
    quantity: 5
};

const phone: Item = {
    name: "Phone",
    price: 699,
    quantity: 10
};

const headphones: Item = {
    name: "Headphones",
    price: 99,
    quantity: 20
};

// Function to calculate the total value of items
function calculateTotal(items: Item[]): number {
    let total = 0;
    items.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}

// Display the total value of all items
const items: Item[] = [laptop, phone, headphones];
const totalValue: number = calculateTotal(items);
console.log("Total value of all items: $" + totalValue.toFixed(2));
