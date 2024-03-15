let guest_list: string[] = [`Ali`, `Nabihah`, `Nishal`, `Balaaj`, `Pehlaaj`, `Fatima`, `Zahid`];

// Informing that only two people can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");

// Removing guests from the list until only two names remain
while (guest_list.length > 2) {
    let removedGuest: string = guest_list.pop()!;
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print invitation messages for the remaining two guests
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]},\n\nYou are still invited to dinner at my place.\n\nSincerely,\n[ShaziaHussain]`);
}

// Remove the last two names from the list to make it empty
guest_list.pop();
guest_list.pop();

// Print the empty list
console.log("After removing all guests, the list is now:", guest_list);
