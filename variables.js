// --- Part 2: Variables and Data Types ---

// Using 'let' for values that might change
let score = 0;
score = 10; 

// Using 'const' for values that should remain constant
const maxAttempts = 3;

// A string example
const userName = "Student";

// A boolean example
let isFinished = false;

console.log("Variables initialized.");

/* REFLECTION:
When would you use 'const' vs 'let'?
Use 'const' by default for variables that will not be modified later. 
Use 'let' only when you know the value of the variable needs to change later.

Real example: 
If you are storing a user's name on a profile page, use 'const' because it 
usually doesn't change during the time the user is logged in. 

If you are tracking a score in a 
game, you should definitely use 'let' because the number will increase as the player progresses.
*/