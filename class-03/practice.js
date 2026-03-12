/**
 * CLASS 03: Asynchronous JavaScript (Promises & async/await)
 * Run this file in your terminal using:
 * node "d:\dev\Learning\MERN\class-03\practice.js"
 */

console.log("=== 1. The Asynchronous Nature ===");
console.log("Start");

// setTimeout is a built-in Asynchronous function
setTimeout(() => {
    console.log("Middle (Prints after 1 second)");
}, 1000);

console.log("End");
// Notice how it prints: Start -> End -> Middle
// JavaScript doesn't wait!
console.log("\n----------------------------------");


// ==========================================
// 2. Promises (ES6 - The foundation)
// ==========================================
// We create a fake Promise that resolves after 2 seconds
const getPizza = new Promise((resolve, reject) => {
    const isAvailable = true;
    
    setTimeout(() => {
        if (isAvailable) resolve("🍕 Pizza is ready!");
        else reject("❌ Sorry, sold out.");
    }, 2000);
});

// Using .then() & .catch() - The slightly older way
getPizza
    .then((message) => {
        console.log("Promise Resolved:", message);
    })
    .catch((error) => {
        console.error("Promise Rejected:", error);
    });

console.log("\n----------------------------------");


// ==========================================
// 3. async / await (Modern, Clean Way)
// ==========================================
// This is exactly the same as above, but much cleaner to read!

const handleFoodOrder = async () => {
    console.log("Waiting for food...");
    try {
        // Pauses execution here until the Promise resolves
        const result = await getPizza; 
        console.log("Async/Await Result:", result);
    } catch (err) {
        // Catches any rejection
        console.error("Async/Await Error:", err);
    }
};

handleFoodOrder();
