# Class 03: Asynchronous JavaScript (Promises & async/await)

Welcome to Class 03! Today's topic is how JavaScript handles tasks that take time (like fetching data from a database or API). 

**PHP/Laravel Comparison:**
PHP is **Synchronous** (line-by-line blocking). If a Laravel DB query takes 5 seconds, the entire page waits 5 seconds to load. (Unless you use background Laravel Queues).
JavaScript is **Asynchronous** (Non-blocking). If an API call takes 5 seconds, JS will keep running the rest of the code and handle the API data once it arrives!

## 🎯 Today's Topics
1. The Problem: Synchronous vs Asynchronous
2. Callbacks (The Old Way - Avoid)
3. Promises (The Core Mechanism)
4. `async` / `await` (The Modern Professional Way)
5. `fetch()` API / `axios` basics

---

## 📖 1. What is a Promise?
A Promise is exactly what it sounds like. It's an object representing the eventual completion (or failure) of an asynchronous operation.

Imagine ordering food:
1. **Pending:** You placed the order.
2. **Fulfilled (Resolved):** You got your food.
3. **Rejected:** The restaurant ran out of food and canceled.

```javascript
// Creating a simple Promise
const orderFood = new Promise((resolve, reject) => {
    let hasFood = true;
    
    if (hasFood) resolve("Here is your Pizza! 🍕");
    else reject("Sorry, we are out of stock. ❌");
});

// Consuming the Promise (Old way using .then)
orderFood
    .then(food => console.log(food))
    .catch(error => console.log(error));
```

---

## 📖 2. The Modern Way: `async` / `await`
`.then()` chains can get messy. `async/await` is "syntactic sugar" on top of Promises that makes asynchronous code look synchronous (just like PHP/Laravel!).

* **`async`**: Put this before a function to tell JS it contains asynchronous tasks. It makes the function automatically return a Promise.
* **`await`**: Put this before a Promise to tell JS to **pause** execution inside the function until the Promise resolves.

**Laravel/PHP Comparison:**
This looks exactly like assigning a DB query result to a variable in Laravel!

```javascript
// The Modern Way
const getLunch = async () => {
    try {
        // Code pauses here until orderFood is done
        const myLunch = await orderFood; 
        console.log("Success:", myLunch);
    } catch (error) {
        // Catches the 'reject' or any crash
        console.log("Error:", error); 
    }
}
```

---

## 📖 3. `fetch()` API
`fetch` is the browser's built-in tool that returns a **Promise** to make HTTP requests (like fetching JSON from an API). In React, we use this (or `axios`) to talk to our Node.js Backend or Laravel API.

```javascript
const fetchUsers = async () => {
    try {
        // 1. Make the request
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // 2. We MUST "await" .json() because parsing JSON also takes time!
        const users = await response.json(); 
        
        // 3. Use the data
        console.log(`Fetched ${users.length} users!`);
    } catch (err) {
        console.log("Network error:", err.message);
    }
};
```

---

## 💻 Practice Code & Real-World Examples
Check the files:
1. `practice.js` - Basic Promises and `async/await`.
2. `real-world.js` - How professionals fetch data from APIs and handle loading states in React.
3. `your-tasks.js` - Your assignments!

---

## 🎤 Interview Questions (Job Focus)

**Q1: What is the difference between Synchronous and Asynchronous JavaScript?**
* **Answer:** Synchronous code executes top-to-bottom, blocking the thread until a line is finished. Asynchronous code kicks off a task (like API call) and immediately moves to the next line without waiting, handling the result later via a callback or Promise.

**Q2: What is the advantage of `async/await` over `.then()`?**
* **Answer:** Readability and maintainability. `async/await` makes asynchronous code look synchronous, avoiding the "Callback Hell" (deeply nested `.then()` chains). It also allows us to use traditional `try/catch` blocks for error handling.

**Q3: Can you use `await` anywhere?**
* **Answer:** No. `await` can only be used inside a function that is marked with the `async` keyword (or at the top level in modern ES modules).

***

**Your Assignment:** Open `d:\dev\Learning\MERN\class-03\your-tasks.js` and try to solve the fetching data task! Let me know when you are done.
