const favoriteVehicle = {
    car: "Tesla",
    model: "Model S",
    year: 2022,
    color: "White",
    topSpeedMPH: 402,
    features: ["Autopilot", "Full Self-Driving Capability", "Premium Interior"],
    isElectric: true,
    priceUSD: 74.990
};

console.log(`My favorite car is a ${favoriteVehicle.car} ${favoriteVehicle.model} and can reach speeds of up to: ${favoriteVehicle.topSpeedMPH} miles per hour.
It is an electric vehicle: ${favoriteVehicle.isElectric? "Yes" : "No"}.`);