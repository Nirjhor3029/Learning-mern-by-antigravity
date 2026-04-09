/**
 * CLASS 05: YOUR TASKS 🧑‍💻
 * Instructions: Open `d:\dev\Learning\MERN\class-05\index.html` in Chrome!
 * Write your answers below, then refresh your browser and check if it worked!
 */

// ==========================================
// TASK 1: Basic DOM Selection & Event Listening
// ==========================================
// Check the `index.html` file for Task 1!
// We have a paragraph `<p id="task1-text">...</p>` and a button `<button id="task1-btn">...`
// 
// Instructions:
// 1. Select the button using `document.getElementById` or `document.querySelector`.
// 2. Select the paragraph text.
// 3. Add a "click" event listener to the button.
// 4. Inside the listener, change the paragraph's inline style color to "red".

const task1Btn = document.getElementById("task1-btn");
const task1Text = document.getElementById("task1-text");

// TODO: Add your event listener here!
task1Btn.addEventListener("click", () => {
    // Write code to change color to red
});



// ==========================================
// TASK 2: Event Delegation (Advanced UI pattern)
// ==========================================
// Check the `index.html` file for Task 2!
// We have a list `<ul id="task2-list">` with some list items `<li>` inside it.
// Inside those items, there are `<button class="check-btn">`.
// 
// Instructions:
// 1. Select the `ul` container (`#task2-list`).
// 2. Add a 'click' event listener to the `ul` container (Event Delegation!).
// 3. Inside the event (e), check if the `e.target` (the exact element clicked) has the class 'check-btn'.
// 4. If true, find its closest parent `<li>` element.
// 5. Add the 'completed' class to that `<li>` using `classList.toggle('completed')`.
//    (I have already provided the CSS class `.completed` in index.html, it will strike-through the text!)

const taskList = document.getElementById("task2-list");

// TODO: Add your delegation logic here!
taskList.addEventListener("click", (e) => {
    // 1. Check if they clicked the 'check-btn'
    // 2. Get the closest 'li'
    // 3. Toggle the class 'completed'
});
