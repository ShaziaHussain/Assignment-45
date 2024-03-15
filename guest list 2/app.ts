let guest_list: string[] = [`Nabihah`, `Nishal`, `Balaaj`, `Pehlaaj`];

// Find and print the name of the guest who can't make it
let guestWhoCantMakeIt: string = guest_list[0];
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
guest_list[0] = "Aisha";

// Print invitation messages for each remaining guest
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]},\n\nYou are cordially invited to dinner at my place.\n\nSincerely,\n[ShaziaHussain]`);
}
// Inform people about the bigger dinner table Question#16
console.log("Good news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
guest_list.unshift("Ali");

// Add one new guest to the middle of the array
let middleIndex: number = Math.floor(guest_list.length / 2);
guest_list.splice(middleIndex, 0, "Fatima");

// Add one new guest to the end of the array
guest_list.push("Zahid");

// Print invitation messages for each person in the list
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]},\n\nYou are cordially invited to dinner at my place.\n\nSincerely,\n[ShaziaHussain]`);
}
