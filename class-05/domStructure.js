/**
 * CLASS 05: DOM Structure Basics
 * NOTE: Open index.html in Chrome/Firefox to see this in action!
 * (Do not run this with node.js, Node does not have a 'document' object)
 */

console.log("=== 1. Selecting Elements ===");
// Like Laravel findOrFail(ID)
const title = document.getElementById("app-title"); 
// Like Laravel where('class', '.card')->first()
const firstCard = document.querySelector(".card"); 

console.log("Title Element:", title);
console.log("First Card Component:", firstCard);
console.log("------------------------------------------");


// ==========================================
// 2. Updating Content and Handling Events
// ==========================================
console.log("=== 2. Basic Event Listeners ===");

// 1. Grab what you want to interact with
const welcomeText = document.getElementById("welcome-msg");
const changeTextBtn = document.getElementById("change-text-btn");

// 2. Add an Event Listener (Action: Click)
changeTextBtn.addEventListener("click", () => {
    // 3. React instantly!
    welcomeText.textContent = "Hey! You clicked the button using DOM Events! 🎉";
    welcomeText.style.color = "blue"; // Direct styling (useful, but class toggling is better)
    
    // Disable it after one click
    changeTextBtn.disabled = true;
    changeTextBtn.textContent = "Clicked!";
});


// ==========================================
// 3. Form Submission (preventDefault)
// ==========================================
// Laravel usually handles form posts by reloading the page and redirecting.
// In modern web apps (React/MERN), we submit without reloading!

const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email-input');
const subscribeMsg = document.getElementById('subscribe-msg');

form.addEventListener("submit", (e) => {
    // 🔴 VITAL: Stop the browser from instantly refreshing!
    e.preventDefault(); 
    
    // Grab the value 
    const emailValue = emailInput.value;
    console.log(`Sending ${emailValue} to Node.js backend...`);

    // Update UI 
    subscribeMsg.textContent = `Thanks! ${emailValue} has been subscribed.`;
    subscribeMsg.classList.remove('hidden'); // We defined .hidden in CSS
    
    // Clear input
    emailInput.value = "";
});
