// Define the car_info function
function car_info(manufacturer: string, model: string, ...extras: (string | number)[]) {
    // Create an object to store information about the car
    const car = {
        manufacturer: manufacturer,
        model: model
    };

    // Loop through the extras and add them to the car object
    for (let i = 0; i < extras.length; i += 2) {
        const key = extras[i];
        const value = extras[i + 1];
        car[key] = value;
    }

    // Return the car object
    return car;
}

// Call the car_info function with required information and additional name-value pairs
const my_car = car_info("Toyota", "Camry", "color", "blue", "year", 2022);

// Print the returned object to ensure all information was stored correctly
console.log(my_car);
