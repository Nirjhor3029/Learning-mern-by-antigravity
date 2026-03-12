/**
 * CLASS 03: YOUR TASKS 🧑‍💻
 * Instructions: Complete the tasks below using what you learned!
 * Run this file using:
 * node "d:\dev\Learning\MERN\class-03\your-tasks.js"
 */

// ==========================================
// TASK 1: Create a basic Promise
// ==========================================
// Instructions: 
// 1. Create a Promise called `checkWeather`.
// 2. Create a variable `isRaining = false`.
// 3. Keep a simple `setTimeout` for 1 second.
// 4. If `isRaining` is true, reject with "Bring an umbrella! ☔"
// 5. If false, resolve with "It's a sunny day! ☀️"

const checkWeather = new Promise((resolve, reject) => {
    // TODO: Write your code here
});



// ==========================================
// TASK 2: Use async/await to consume the Promise
// ==========================================
// Instructions:
// 1. Create an async function called `getWeatherReport()`.
// 2. Add a `try...catch` block.
// 3. Inside `try`, `await` the `checkWeather` Promise.
// 4. Log the result. If it fails, log the error in the `catch`.

const getWeatherReport = async () => {
    // TODO: Write your code here
};

// Call the function to test it
getWeatherReport();



// ==========================================
// TASK 3: Fetch API (Real-world scenario)
// ==========================================
// Instructions:
// We want to fetch to-do items from this API: https://jsonplaceholder.typicode.com/todos
// 1. Create an async function called `fetchTodos()`.
// 2. `await` the `fetch()` call to the URL.
// 3. `await` the `.json()` parsing.
// 4. Find the length of the array and log: "Total Todos: X"
// 5. (Bonus/Optional): Combine Class-2 knowledge! Use `.filter()` to log the count of ONLY completed todos (where `completed: true`).

const fetchTodos = async () => {
    // TODO: Write your code here
};

// Call the function to test it! (Uncomment line below when ready)
// fetchTodos();
