let PersoName: string = "Ali";

// Convert to lowercase
console.log("lowercase:", PersoName.toLowerCase());

// Convert to UPPERCASE
console.log("UPPERCASE:", PersoName.toUpperCase());

// Convert to title case
console.log("Title:", PersoName.replace(/\b\w/g, c => c.toUpperCase()));
