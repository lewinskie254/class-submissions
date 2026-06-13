// 1. Area calculation
function calculateArea(width, height) {
    return width * height;
}
console.log("Area (5,10):", calculateArea(5, 10));
console.log("Area (3,7):", calculateArea(3, 7));
console.log("Area (100,0):", calculateArea(100, 0));

// 2. isEven 
const isEven = (number) => number % 2 === 0;
console.log("isEven(4):", isEven(4));
console.log("isEven(7):", isEven(7));
console.log("isEven(0):", isEven(0));

// 3. Letter Grade
function letterGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}
console.log("Grade 95:", letterGrade(95));
console.log("Grade 83:", letterGrade(83));
console.log("Grade 72:", letterGrade(72));
console.log("Grade 61:", letterGrade(61));
console.log("Grade 45:", letterGrade(45));

// 4. Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}
console.log("0C to F:", celsiusToFahrenheit(0));
console.log("100C to F:", celsiusToFahrenheit(100));
console.log("37C to F:", celsiusToFahrenheit(37));

// 5. Leap Year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("2000 leap?", isLeapYear(2000));
console.log("1900 leap?", isLeapYear(1900));
console.log("2024 leap?", isLeapYear(2024));
console.log("2023 leap?", isLeapYear(2023));

// 6. Reverse String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(`Reverse ${Name}:`, reverseString(Name));

// 7. Longest Word
function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) longest = word;
    }
    return longest;
}
console.log("Longest word:", longestWord(templateLiteral));