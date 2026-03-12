/**
 * CLASS 02: JavaScript Arrays & Objects Deep Dive
 * Run this file in your terminal using:
 * node "d:\dev\Learning\MERN\class-02\practice.js"
 */

console.log("=== 1. map() (Transforming Data) ===");

const members = ["John", "Jane", "Bob"];

// Creates a NEW array
// We are mapping every string into an HTML-like string
const liTags = members.map(member => `<li>${member}</li>`);
console.log(liTags); // [ '<li>John</li>', '<li>Jane</li>', '<li>Bob</li>' ]


console.log("\n=== 2. filter() (Finding Data) ===");

const orders = [
    { id: 1, total: 1500, status: "delivered" },
    { id: 2, total: 500, status: "pending" },
    { id: 3, total: 2000, status: "delivered" }
];

// Creates a NEW array containing only matching elements
const deliveredOrders = orders.filter(order => order.status === "delivered");
console.log(deliveredOrders); // Array of 2 items


console.log("\n=== 3. reduce() (Accumulating Data) ===");

// We want the total sum of all DELIVERED orders.
// Notice how we chain .filter().reduce() just like Laravel Collections!
const sumOfDelivered = orders
    .filter(order => order.status === "delivered") // First get the delivered ones
    .reduce((sum, order) => sum + order.total, 0); // Then add their totals starting at 0

console.log(`Total Delivered Earnings: $${sumOfDelivered}`); // 3500


console.log("\n=== 4. Object Methods ===");

const car = { brand: "Tesla", model: "Model S", year: 2024 };

console.log("Keys:", Object.keys(car));   // [ 'brand', 'model', 'year' ]
console.log("Values:", Object.values(car)); // [ 'Tesla', 'Model S', 2024 ]

// Object.entries creates an array of arrays [key, value]
const entries = Object.entries(car); 
// Very useful for .map() over objects inside React!
console.log("Entries:", entries);


console.log("\n=== 5. Optional Chaining & Nullish Coalescing ===");

const apiData = {
    user: {
        id: 10,
        address: null // No address defined
    }
};

// Optional Chaining (?.)
// Safely reads nested properties. If undefined/null, stops and returns undefined without crashing!
const city = apiData.user?.address?.city; 
console.log("City:", city); // Output: undefined

// Nullish Coalescing (??)
// If the left side is null/undefined, use the fallback value on the right
const finalCity = apiData.user?.address?.city ?? "Not Provided";
console.log("Final City:", finalCity); // Output: Not Provided
