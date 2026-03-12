/**
 * CLASS 01: Modern JavaScript Essentials
 * Run this file in your terminal using:
 * node "d:\dev\Learning\MERN\class-01\practice.js"
 */

console.log("=== 1. LET & CONST ===");

const myName = "Hasan";
// myName = "Rakib"; // Uncommenting this will throw a TypeError

let job = "Laravel Developer";
console.log(`Before: ${job}`);
job = "MERN Stack Developer"; // Valid
console.log(`After: ${job}\n`);


console.log("=== 2. ARROW FUNCTIONS ===");

// Traditional
function greet(name) {
    return "Hello " + name;
}

// Arrow Function
const modernGreet = (name) => `Hello ${name} from ES6!`;

console.log(greet("PHP"));
console.log(modernGreet("JavaScript"));
console.log("\n");


console.log("=== 3. TEMPLATE LITERALS ===");

const frontend = "React";
const backend = "Node.js";
const database = "MongoDB";

// Multi-line string in modern JS is super easy
const stackDescription = `
My new tech stack:
- Frontend: ${frontend}
- Backend: ${backend}
- Database: ${database}
`;
console.log(stackDescription);


console.log("=== 4. DESTRUCTURING ===");

const userSettings = {
    theme: "Dark",
    notifications: true,
    timezone: "UTC+6"
};

// Extracting specific keys
const { theme, notifications } = userSettings;
console.log(`Theme is ${theme} and Notifications are ${notifications === true ? 'ON' : 'OFF'}\n`);


console.log("=== 5. SPREAD & REST OPERATOR ===");

// Spread example (Cloning and expanding)
const laravelSkills = ["Routing", "Eloquent", "Blade"];
const mernSkills = ["React", "Express", "Mongoose"];

// Merging arrays easily
const fullStackSkills = [...laravelSkills, ...mernSkills, "TailwindCSS"];
console.log("All Skills:", fullStackSkills);

// Rest example (Gathering parameters)
const calculateTotal = (...prices) => {
    // reduce is an array method (we will learn this in Class 2)
    return prices.reduce((total, current) => total + current, 0); 
};

console.log(`Total Price: $${calculateTotal(10, 20, 5, 15)}`);
