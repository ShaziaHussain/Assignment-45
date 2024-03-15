// Scenario where the if block is executed
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

// Scenario where the else block is executed
alien_color = 'red';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}
