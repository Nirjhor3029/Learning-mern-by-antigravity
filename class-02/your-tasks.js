/**
 * CLASS 02: YOUR TASKS 🧑‍💻
 * Instructions: Complete the tasks below using what you learned!
 * Run this file using:
 * node "d:\dev\Learning\MERN\class-02\your-tasks.js"
 */

const students = [
    { id: 1, name: "Sakib", marks: 85, isPassed: true },
    { id: 2, name: "Tamim", marks: 32, isPassed: false },
    { id: 3, name: "Mushfiq", marks: 78, isPassed: true },
    { id: 4, name: "Mahmudullah", marks: 45, isPassed: false }
];

console.log("=== Task 1 ===");
// TASK 1: Use .map() to create a new array containing ONLY the names of the students.
// Expected Output: [ 'Sakib', 'Tamim', 'Mushfiq', 'Mahmudullah' ]

const studentNames = students; // TODO: Replace this with your map code!
console.log("Task 1 Output:", studentNames);



console.log("\n=== Task 2 ===");
// TASK 2: Use .filter() to create a new array containing ONLY the students who PASSED (isPassed: true).
// Expected Output: Array containing Sakib and Mushfiq's objects.

const passedStudents = students; // TODO: Replace this with your filter code!
console.log("Task 2 Output:", passedStudents);



console.log("\n=== Task 3 ===");
// TASK 3: Use .reduce() to calculate the total sum of ALL marks.
// Expected Output: 240

const totalMarks = students; // TODO: Replace this with your reduce code!
console.log("Task 3 Output:", totalMarks);



console.log("\n=== Task 4 ===");
// TASK 4: Safely access the user's city below WITHOUT crashing the app!
// Use Optional Chaining (?.) and provide a default of "Dhaka" using Nullish Coalescing (??).

const testUser = {
    username: "coder123",
    profile: null // profile is intentionally missing!
};

// TODO: Replace null with your ?. and ?? logic!
const userCity = null; 
console.log("Task 4 Output:", userCity); // Expected Output: "Dhaka"

// ==========================================
// After writing the code, run it! 
// Let me know if you get stuck!
