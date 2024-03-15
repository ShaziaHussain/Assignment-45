// Store the locations in an array
let placesToVisit: string[] = [
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Tokyo, Japan",
    "Northern Lights in Iceland",
    "Safari in Serengeti National Park, Tanzania"
];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Print the array to show it's still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Print the array to show it's still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again to show it's back to its original order
placesToVisit.reverse();
console.log("\nOriginal Order (after reversing again):");
console.log(placesToVisit);

// Sort the array so it's stored in alphabetical order
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit.sort());

// Sort to change the array so it's stored in reverse alphabetical order
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit.sort().reverse());
