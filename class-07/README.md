# Class 07: React State & useState Hook (State management basics)

Welcome back! In Class 06, we learned about Components and Props. However, Props represent **static** data (passed from parent). Today, we learn how to make our app **interactive** using **State**.

## 🎯 Today's Topics
1. What is State? (Variable vs State)
2. The `useState` Hook
3. Handling Events (`onClick`, `onChange`)
4. Data flow: Props (Immutable) vs State (Mutable)
5. Comparison with Laravel (Session or Request?)

---

## 📖 1. What is State?
In a simple website, you might use a JS variable: `let count = 0;`. If you update `count`, the browser doesn't automatically show the new number. You'd have to manually update the DOM (`document.getElementById().innerText = count`).

In React, **State** is a special JavaScript object that holds data. When the state changes, React **re-renders** (refreshes) the component automatically.

---

## 📖 2. The `useState` Hook
To use state in a functional component, we use the `useState` hook.

```jsx
import { useState } from 'react';

function Counter() {
  // const [stateName, setterFunction] = useState(initialValue);
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

**Breakdown:**
- `count`: The current value of the state.
- `setCount`: A function used to update the state.
- `useState(0)`: We initialize `count` with 0.

---

## 📖 3. Handling Events
In React, event names are **camelCase** (e.g., `onClick`, `onChange`, `onSubmit`).

**Laravel Blade (AlpineJS example):**
`<button @click="count++">`

**React:**
`<button onClick={() => setCount(count + 1)}>`

---

## 📖 4. State vs Props
| Feature | Props | State |
| :--- | :--- | :--- |
| **Origin** | Passed from Parent | Defined inside Component |
| **Changeable?** | No (Read-only) | Yes (via setter function) |
| **Purpose** | Configuration/Data passing | Interactivity/User actions |

---

## 📖 5. Comparison with Laravel
Think of **Props** like the parameters you pass to a `@component` or `@include`.
Think of **State** like a temporary form state or a variable in an Livewire component. When you update a property in Livewire, the UI "magically" updates. React `useState` does the same thing on the frontend.

---

## 🚀 Setting Up Today's Practice
Go to the `code` folder and run the project:

1. `cd class-07/code`
2. `npm install`
3. `npm run dev`

---

## 💻 Practice Files
Inside `src/App.jsx`, I have set up a counter and a text input example for you. Practice by adding a "Decrease" button!

---

## 🎤 Interview Questions (Job Focus)

**Q1: Why can't we just update a variable instead of using `useState`?**
* **Answer:** Regular variables don't trigger a re-render. React doesn't know the variable changed, so it won't update the UI. `useState` tells React: "Hey, data changed, please re-draw this component."

**Q2: Is `useState` synchronous or asynchronous?**
* **Answer:** It is **Asynchronous**. If you call `setCount(count + 1)` and then immediately `console.log(count)`, you will see the **old** value. React batches state updates for performance.

**Q3: Can we have multiple `useState` hooks in one component?**
* **Answer:** Yes! You can use as many as you need for different pieces of data (e.g., `name`, `email`, `isLoggedIn`).

***

**Your Assignment:** Create a "Toggle" button that shows or hides a secret message! (Hint: use a boolean state `const [show, setShow] = useState(false)`)
