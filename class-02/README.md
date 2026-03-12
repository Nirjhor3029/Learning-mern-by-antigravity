# Class 02: JavaScript Arrays & Objects Deep Dive

Welcome to Class 2! In Laravel, you heavily use `Collections` (like `map()`, `filter()`, `pluck()`). In modern JavaScript, Arrays have these methods built-in! You will use these constantly in React to render lists and manipulate state.

## 🎯 Today's Topics
1. Array `.map()`
2. Array `.filter()`
3. Array `.reduce()`
4. Object Methods (`Object.keys()`, `Object.values()`)
5. Optional Chaining (`?.`) & Nullish Coalescing (`??`)

---

## 📖 1. Array `.map()` (Transforming Data)
`.map()` creates a **new array** by applying a function to every element in the original array. 
*Rule of thumb in React:* Every time you need to show a list of items on the screen, you will use `.map()`.

**PHP/Laravel Comparison:**
Same as Laravel's `$collection->map()` or PHP's `array_map()`.

```javascript
const numbers = [1, 2, 3];

// Multiply every number by 2
const doubled = numbers.map(num => num * 2); 
// doubled is [2, 4, 6]
```

---

## 📖 2. Array `.filter()` (Finding Data)
`.filter()` creates a **new array** with all elements that pass the test implemented by the provided function.

**PHP/Laravel Comparison:**
Same as Laravel's `$collection->filter()` or PHP's `array_filter()`.

```javascript
const ages = [15, 22, 18, 12, 30];

// Give me only the ages that are 18 or above
const adults = ages.filter(age => age >= 18);
// adults is [22, 18, 30]
```

---

## 📖 3. Array `.reduce()` (Accumulating Data)
`.reduce()` takes an array and "reduces" it to a single value (like a sum, or combining into one object).

**PHP/Laravel Comparison:**
Same as Laravel's `$collection->reduce()`.

```javascript
const cartPrices = [500, 200, 300];

// sum = running total (starts at 0)
// price = current item in the array
const total = cartPrices.reduce((sum, price) => sum + price, 0);
// total is 1000
```

---

## 📖 4. Object Methods
Sometimes you need to convert an object into an array to loop over it using `.map()`.

```javascript
const user = { name: "Rakib", role: "Admin", status: "Active" };

// Get all keys as an array
const keys = Object.keys(user); // ["name", "role", "status"]

// Get all values as an array
const values = Object.values(user); // ["Rakib", "Admin", "Active"]
```

---

## 📖 5. Optional Chaining (`?.`) & Nullish Coalescing (`??`)

### Optional Chaining (`?.`)
When trying to access a deeply nested property that might not exist, JS normally throws a fatal error. `?.` safely returns `undefined` instead of crashing.

**PHP/Laravel Comparison:**
Same as PHP 8's nullsafe operator `?->` (e.g., `$user?->profile?->photo`).

```javascript
const user = { name: "Anis", profile: {} };

// ❌ Crash: Cannot read properties of undefined (reading 'url')
// const photo = user.profile.photo.url; 

// ✅ Safe: Returns undefined without crashing
const photo = user.profile?.photo?.url; 
```

### Nullish Coalescing (`??`)
Provides a default value if the left side is exactly `null` or `undefined`.

**PHP/Laravel Comparison:**
Same as PHP's null coalescing operator `??`.

```javascript
const inputName = null;
// If inputName is null/undefined, use "Guest"
const displayName = inputName ?? "Guest"; 
```

---

## 💻 Practice Code & Real-World Examples
Check the files:
1. `practice.js` - Basic examples
2. `real-world.js` - How professionals use these in real projects (with React/Node context).
3. `your-tasks.js` - Complete these tasks yourself!

---

## 🎤 Interview Questions (Job Focus)

**Q1: What is the difference between `.map()` and `.forEach()`?**
* **Answer:** `.map()` returns a brand **new array**, making it chainable and perfect for React rendering. `.forEach()` does not return anything (`undefined`) and is only used when you want a side effect (like saving to a database).

**Q2: Does `.filter()` modify the original array?**
* **Answer:** No. Array methods like `map`, `filter`, and `reduce` do not mutate (change) the original array. They always return a new array/value. This is a core principle in React state management.

**Q3: Explain Optional Chaining (`?.`) and why it's useful.**
* **Answer:** It permits reading the value of a property located deep within a chain of connected objects without having to check if each reference in the chain is valid. It prevents "TypeError: Cannot read properties of undefined" which is one of the most common UI crashes in React.

***

**Your Assignment:** Open `d:\dev\Learning\MERN\class-02\your-tasks.js` and try to solve the 3 tasks inside it! Let me know when you are done or if you get stuck.
