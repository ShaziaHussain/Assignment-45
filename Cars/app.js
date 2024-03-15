// Define the car_info function
function car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    // Create an object to store information about the car
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Loop through the extras and add them to the car object
    for (var i = 0; i < extras.length; i += 2) {
        var key = extras[i];
        var value = extras[i + 1];
        car[key] = value;
    }
    // Return the car object
    return car;
}
// Call the car_info function with required information and additional name-value pairs
var my_car = car_info("Toyota", "Camry", "color", "blue", "year", 2022);
// Print the returned object to ensure all information was stored correctly
console.log(my_car);
