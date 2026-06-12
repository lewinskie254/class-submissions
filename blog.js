// 1. Log a welcome message when the page loads
console.log("Blog loaded successfully!");

// 2. Use typeof to log the type of 3 different values from the page
// Note: In a real scenario, you might grab these from DOM elements, 
// but we will define them as variables here to demonstrate the logic.
const blogTitle = "My Tech Blog";
const postCount = 3;
const commentsEnabled = true;

console.log("Type of blog title:", typeof blogTitle);      // string
console.log("Type of post count:", typeof postCount);      // number
console.log("Type of comments enabled:", typeof commentsEnabled); // boolean

// 3. Call calculateArea function to calculate a "reading area"
// We assume this function is defined in functions.js.
// Since functions.js is linked in the same HTML, we can call it here.
function calculateArea(width, height) {
    return width * height;
}

const readingArea = calculateArea(800, 600);
console.log("Calculated reading area (800x600):", readingArea);

// 4. Call celsiusToFahrenheit(22) and log the result
// We assume this function is defined in functions.js.
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

const tempResult = celsiusToFahrenheit(22);
console.log("Today's temperature: " + tempResult + "°F");