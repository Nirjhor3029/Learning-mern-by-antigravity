# Class 05: JavaScript DOM Manipulation & Events

Welcome to Class 05! This is the bridge between JavaScript and the UI. Before React existed, developers had to manually update the Document Object Model (DOM) using strict JavaScript APIs. While React will handle most of this for us automatically later (Virtual DOM), understanding how the DOM actually works is crucial for debugging and handling complex UI interactions.

## 🎯 Today's Topics
1. Selecting Elements (`querySelector`)
2. Updating Content & Attributes (`innerHTML`, `classList`)
3. Event Listeners (`addEventListener`)
4. Event Delegation (Advanced UI pattern)

---

## 📖 1. Selecting Elements
To change something on the page, you must first find it. Modern JS relies heavily on `querySelector` since it takes standard CSS selectors.

```javascript
// Selecting by ID
const header = document.getElementById('main-title');

// Modern standard way (CSS Selectors)
const submitButton = document.querySelector('.btn-primary'); // Class
const allListItems = document.querySelectorAll('ul li'); // NodeList (Array-like)
```

---

## 📖 2. Updating Content & Styling
Once selected, you can manipulate the element's content, classes, and styles directly.

```javascript
const alertBox = document.querySelector('.alert');

// Update text cleanly (avoids XSS attacks vs innerHTML)
alertBox.textContent = "Data saved successfully!";

// Handling classes professionally (Better than inline styles)
alertBox.classList.add('success');
alertBox.classList.remove('hidden');
alertBox.classList.toggle('active'); 
```

---

## 📖 3. Event Listeners
How your UI responds to user actions. We use `addEventListener` rather than inline HTML events (like `onclick=""`) because it keeps JS strictly separated from HTML structure.

```javascript
const loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', (event) => {
    // Prevent a form from submitting (reloading the page) immediately
    event.preventDefault(); 
    console.log("Button clicked!", event.target);
});
```

---

## 📖 4. Event Delegation (Professional Pattern)
If you have a dynamic list of items (e.g., a Todo list where items are added/deleted), adding an event listener to EVERY single `<li>` is terrible for performance and difficult to maintain.

**The Solution:** Add ONE listener to the parent container (`<ul>`) and check *what* was clicked inside it.

```javascript
const todoList = document.querySelector('#todo-list');

// Listen on the parent container
todoList.addEventListener('click', (e) => {
    // Did they click a delete button inside the list?
    if (e.target.matches('.delete-btn')) {
        const itemToRemove = e.target.closest('li');
        itemToRemove.remove();
        console.log("Item deleted successfully!");
    }
});
```

---

## 💻 Practice Code & Real-World Examples
Since DOM manipulation requires a browser (HTML output), we have created an HTML file for this class!
Check the files:
1. `index.html` - Open this in your browser to see the UI.
2. `domStructure.js` - Basic DOM interactions matching the HTML file.
3. `real-world-cart.js` - A mini shopping cart interactions built the professional way.
4. `your-tasks.js` - Your assignments!

---

## 🎤 Interview Questions (Job Focus)

**Q1: What is the difference between `textContent` and `innerHTML`?**
* **Answer:** `textContent` reads/writes the raw text safely, ignoring HTML tags. `innerHTML` parses HTML tags, which makes it dangerous (XSS vulnerabilities) if used with untrusted user input. React handles this safely using its `{variable}` syntax, but in vanilla JS, use `textContent` whenever possible.

**Q2: What is Event Bubbling?**
* **Answer:** When an event happens on an element (like a click), it first runs the handlers on that element, then on its parent, then all the way up the DOM tree like a bubble rising in water. We use `event.stopPropagation()` to stop this if needed.

**Q3: Why is Event Delegation better than attaching listeners to individual child elements?**
* **Answer:** It saves memory and improves performance because we only create one listener on the parent. It also automatically handles dynamically added child elements (like newly added comments), meaning we don't have to attach a new listener every time an item is created via JS.

***

**Your Assignment:** You'll find three tasks in `your-tasks.js`. They require interacting with `index.html`. Open `index.html` in Chrome!
