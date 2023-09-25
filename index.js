// Define the findMatching function
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
// Test cases for the findMatching function
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}


