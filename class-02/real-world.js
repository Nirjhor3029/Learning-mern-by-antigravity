/**
 * CLASS 02: Real-World Use Cases (Professional Level)
 * Run this file in your terminal using:
 * node "d:\dev\Learning\MERN\class-02\real-world.js"
 */

// ==========================================
// 1. React Render Lists (.map)
// ==========================================
// In Laravel, you'd use @foreach ($users as $user) ... @endforeach
// In React/MERN, we use .map() to return JSX elements or components

const fetchedEmployees = [
    { id: 101, name: "Alice", active: true },
    { id: 102, name: "Bob", active: false },
    { id: 103, name: "Charlie", active: true }
];

// Context: A React Component to show a list of names
const ActiveEmployeeCards = fetchedEmployees
    // Filter only active ones
    .filter(emp => emp.active) 
    // Return a structured object (or later, a React Component chunk)
    .map(emp => {
        return `<div class="card">${emp.name} (ID: ${emp.id})</div>`;
    });

console.log("React Output (Mock HTML string):", ActiveEmployeeCards.join('\n'));
console.log("------------------------------------------");


// ==========================================
// 2. Cart Totals & Inventory (.reduce)
// ==========================================
// A typical e-commerce backend scenario in Node.js where we need 
// to quickly sum up a payload of quantities and prices.

const shoppingCart = [
    { productId: "p1", qty: 2, unitPrice: 50 },
    { productId: "p2", qty: 1, unitPrice: 200 },
    { productId: "p3", qty: 5, unitPrice: 10 }
];

// sum starts at 0. We add (item.qty * item.unitPrice) on each iteration.
const checkoutTotal = shoppingCart.reduce((accTotal, item) => {
    return accTotal + (item.qty * item.unitPrice);
}, 0);

console.log("Cart Checking Total: $", checkoutTotal); // Expected: 100 + 200 + 50 = $350
console.log("------------------------------------------");


// ==========================================
// 3. Object Formatting (.map + Object.entries)
// ==========================================
// You fetched a raw setting object from MongoDB but need an array of {key, value} 
// objects to display a settings table in the dashboard.

const databaseSettings = {
    themeMode: "light",
    showNotifications: "yes",
    currency: "USD"
};

const formattedForTable = Object.entries(databaseSettings).map(([settingKey, settingVal]) => {
    return { fieldName: settingKey, configuredValue: settingVal };
});

console.log("Settings Table Data:", formattedForTable);
console.log("------------------------------------------");


// ==========================================
// 4. Safe Payload Extraction (?.)
// ==========================================
// A Node.js backend receiving an external API webhook. 
// Webhooks can sometimes miss nested data, crashing your app.

const stripeWebhook = {
    event_type: "charge.succeeded",
    data: {
        object: {
            amount: 5000,
            billing_details: null // User forgot to enter address 
        }
    }
};

// ❌ Bad (Crashes node server)
// const zipCode = stripeWebhook.data.object.billing_details.address.postal_code;

// ✅ Good (Returns "Unknown" cleanly)
const zipPostal = stripeWebhook.data?.object?.billing_details?.address?.postal_code ?? "Unknown";

console.log("User Postal Code:", zipPostal);
