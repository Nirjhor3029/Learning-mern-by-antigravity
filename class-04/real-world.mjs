/**
 * CLASS 04: Real-World Use Cases (Professional Level)
 * Run this file in your terminal using:
 * node "d:\dev\Learning\MERN\class-04\real-world.mjs"
 */

// ==========================================
// 1. Extending Built-in Classes (Custom Error Handling)
// ==========================================
// In a professional Node.js (Express) backend, you don't just throw normal strings.
// You create a custom 'AppError' class that extends JS's built-in Error class.
// This is exactly like extending PHP's 'Exception' class.

console.log("=== 1. Custom Error Class (Node.js Backend) ===");

class AppError extends Error {
    constructor(message, statusCode) {
        // Must call super(message) to pass message to the parent Error class
        super(message); 
        
        this.statusCode = statusCode;
        // Determine if it's a 4xx error (fail) or 5xx (error)
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true; // Flag to identify our errors vs unknown crashes

        // This captures the exact line number where the error occurred
        Error.captureStackTrace(this, this.constructor);
    }
}

// Try/Catch block simulating an API Endpoint throwing our custom error
const handleUserLogin = () => {
    try {
        const userProvidedPassword = "wrongPassword123";
        const dbPassword = "secretPassword";

        // Login fails...
        if (userProvidedPassword !== dbPassword) {
            // We throw our custom class!
            throw new AppError("Invalid email or password", 401);
        }

    } catch (err) {
        // Outputting exactly what we need to send to the frontend!
        console.log({
            status: err.status,          // "fail"
            statusCode: err.statusCode,  // 401
            message: err.message,        // "Invalid email or password"
            operational: err.isOperational // true
        });
    }
};

handleUserLogin();
console.log("------------------------------------------");


// ==========================================
// 2. Data Transfer Objects (DTOs) & Services
// ==========================================
// In modern MERN architecture, you often fetch raw DB data and use a class
// to format it for the frontend. Like Laravel Resources / Transformers.

console.log("=== 2. Real-world Data Classes ===");

// A Model-like Class
class ProductResource {
    constructor(dbDoc) {
        this.id = dbDoc._id; // Mapping MongoDB id to a clean id
        this.name = dbDoc.title.toUpperCase(); 
        this.price = `$${(dbDoc.amountInCents / 100).toFixed(2)}`;
        this.inStock = dbDoc.qty > 0;
    }

    display() {
        return `[PRODUCT] ${this.name} | ${this.price} | Stock: ${this.inStock ? 'Yes' : 'No'}`;
    }
}

// Raw data from MongoDB
const rawMongoProduct = {
    _id: "647b2d5a1b32",
    title: "Mechanical Keyboard",
    amountInCents: 12500, // $125
    qty: 5,
    __v: 0 // MongoDB unneeded version key
};

// Transform it cleanly!
const formattedProduct = new ProductResource(rawMongoProduct);
console.log(formattedProduct.display());
// Look how clean the resulting object is without the `__v` and formatted price
console.log(formattedProduct); 

