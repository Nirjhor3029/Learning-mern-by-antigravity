/**
 * CLASS 05: Real-World UI Logic (The modern way to build Lists/Carts)
 * NOTE: Open index.html in the browser!
 */

// ==========================================
// 4. Advanced: Event Delegation & Dynamic Elements
// ==========================================
// Imagine a Laravel cart where you have to do an AJAX call for every item deleted.
// Here we modify the DOM instantly!

const cartList = document.getElementById("cart-list");
const addItemBtn = document.getElementById("add-item-btn");
const itemInput = document.getElementById("item-input");
const cartCountElem = document.getElementById("cart-count");

// Helper function to update the badge total count
const updateItemCount = () => {
    const listItems = document.querySelectorAll("#cart-list li"); // Get current `li` count
    cartCountElem.textContent = listItems.length;
};

// --- ADDING AN ITEM (Dynamic Creation) ---
addItemBtn.addEventListener("click", () => {
    const itemName = itemInput.value.trim();
    if (!itemName) return alert("Please enter an item name!");

    // 1. Create a brand new <li> element "out of thin air"
    const newLi = document.createElement("li");

    // 2. Put HTML inside it. (Note: using template literals!)
    // We add the same 'delete-btn' class so delegation works later.
    newLi.innerHTML = `
        <span>🛒 ${itemName} ($0)</span>
        <button class="btn btn-danger delete-btn">Delete</button>
    `;

    // 3. Attach it to the UL container inside index.html
    cartList.appendChild(newLi);

    // 4. Update UI state (Clear input and bump cart counter)
    itemInput.value = "";
    itemInput.focus();
    updateItemCount();
});


// --- DELETING AN ITEM (Event Delegation) ---
// ❌ Novice mistake:
// const allDeleteBtns = document.querySelectorAll('.delete-btn');
// allDeleteBtns.forEach(btn => btn.addEventListener('click', () => { ... }));
// Problem: If we ADD a new apple above, the new apple's delete button WON'T work 
// because it didn't exist when we ran `querySelectorAll`! 

// ✅ Professional MERN approach (Event Delegation):
// Just listen to the PARENT (cartList, the `ul` tags). 
// The parent always exists. We check if the target has '.delete-btn' inside it.
cartList.addEventListener("click", (event) => {
    
    // Check if the exact thing clicked contains the class "delete-btn"
    if (event.target.classList.contains("delete-btn")) {
        
        // Find the closest parent <li> tag of that specific button
        const itemToRemove = event.target.closest("li");
        
        // Safely remove it from DOM
        itemToRemove.remove();
        
        // Recalculate totals
        updateItemCount();
    }
});
