// Define the describe_city function with a default value for the country parameter
function describe_city(city: string, country = "Unknown") {
    // Print a sentence describing the city and its country
    console.log(`${city} is in ${country}.`);
}

// Call the describe_city function for three different cities
describe_city("Karachi", "Pakistan"); // City in default country
describe_city("New York", "USA");     // City not in default country
describe_city("Paris");                // City with default country
