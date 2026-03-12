/**
 * CLASS 01: Real-World Use Cases (Professional Level)
 * Run this file in your terminal using:
 * node "d:\dev\Learning\MERN\class-01\real-world.js"
 */

// ==========================================
// 1. API Response Handling (Destructuring)
// ==========================================
// When fetching data from a database or external API, we rarely need ALL the data. 
// Destructuring makes it clean.

const apiResponse = {
    status: "success",
    data: {
        id: 101,
        authorName: "John Doe",
        email: "john@example.com",
        isActive: true,
        tokens: ["jwt-123", "refresh-456"]
    },
    message: "User fetched successfully"
};

// ❌ Bad (Novice way):
// const name = apiResponse.data.authorName;
// const email = apiResponse.data.email;

// ✅ Good (Professional way): Nested Destructuring + Renaming
// Renaming authorName to simply 'name' while extracting
const {
    data: { authorName: name, email, tokens: [mainToken] }
} = apiResponse;

console.log(`User: ${name}, Email: ${email}, Auth Token: ${mainToken}`);
console.log("------------------------------------------");


// ==========================================
// 2. State & Payload Updates (Spread Operator)
// ==========================================
// Imagine updating a record in a React state or a Node.js database update payload.
// We must keep the old values and only override the new ones.

const existingUserRecord = {
    id: 99,
    username: "devhasan",
    role: "user",
    status: "pending"
};

const updatePayload = {
    status: "active",
    plan: "premium"
};

// ❌ Bad: Object.assign or direct mutation
// existingUserRecord.status = updatePayload.status;

// ✅ Good (Professional way): Spread Operator
const updatedUserRecord = {
    ...existingUserRecord,  // Copy all existing fields
    ...updatePayload,       // Override with new fields
    updatedAt: new Date().toISOString() // Add metadata dynamically
};

console.log("Updated Record:", updatedUserRecord);
console.log("------------------------------------------");


// ==========================================
// 3. Dynamic API URL Generation (Template Literals)
// ==========================================
// Writing API endpoints cleanly instead of combining strings.

const API_BASE_URL = "https://api.myapp.com/v1";

const getUserUrl = (userId, includePosts = false) => {
    // Elegant URL construction
    return `${API_BASE_URL}/users/${userId}?includePosts=${includePosts}`;
};

console.log("Generated API URL:", getUserUrl(450, true));
console.log("------------------------------------------");


// ==========================================
// 4. Clean Data Processing (Arrow Functions)
// ==========================================
// We will learn Array methods next class, but here is a sneak peek 
// of how Arrow functions make logic beautiful.

const users = [
    { id: 1, name: "Ali", age: 24, role: "admin" },
    { id: 2, name: "Sakib", age: 19, role: "user" },
    { id: 3, name: "Rakib", age: 29, role: "editor" },
];

// Context: Give me the names of all non-admin users who are adults (18+)
// Look how arrow functions and destructuring ({ role, age, name }) make this a 1-liner!

const validUserNames = users
    .filter(({ role, age }) => role !== "admin" && age >= 18)
    .map(({ name }) => name);

console.log("Valid Users List:", validUserNames); // [ 'Sakib', 'Rakib' ]

// 💡 In Laravel, you would write this using Collections:
// $users->filter(fn($user) => $user->role !== 'admin' && $user->age >= 18)->pluck('name');
