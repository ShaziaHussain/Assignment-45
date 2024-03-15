// Passing scenario
let alien_color: string = "green";

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Failing scenario
alien_color = 'red';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
