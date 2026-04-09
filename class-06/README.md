# Class 06: React Introduction & Setup (Vite + JSX)

Welcome to **Phase 2**! Today we leave Vanilla JavaScript behind and start building with **React.js**. React is the most popular frontend library in the world, and it completely changes how we think about the UI.

## 🎯 Today's Topics
1. Why React? (Declarative vs Imperative)
2. What is Vite? (The modern build tool)
3. JSX (JavaScript XML)
4. Components (Functional Components)
5. Props (Passing data like Laravel parameters)

---

## 📖 1. Why React? (Laravel vs React mindset)
In Class 5, we manually selected elements and updated them (`document.querySelector`). This is called **Imperative Programming**. 

In React, we use **Declarative Programming**. You describe *what* the UI should look like based on data (state), and React handles the "how" (updating the DOM) for you.

**Mindset Shift:**
- **Laravel Blade:** You render HTML on the server. To change it, you usually need a page refresh or AJAX.
- **React:** The UI is an "Object" in the browser's memory. When data changes, React "re-renders" only the part of the UI that changed.

---

## 📖 2. What is Vite?
Vite is a build tool (like Webpack or Mix/Vite in Laravel). It provides a super-fast development environment. We use it to compile our JSX into regular JavaScript that the browser can understand.

---

## 📖 3. JSX (JavaScript XML)
JSX allows us to write HTML-like code inside JavaScript. 
*   **HTML:** `class="container"` -> **JSX:** `className="container"` (since `class` is a reserved word in JS).
*   **JS Variables:** Inside JSX, use curly braces `{}` to inject JS variables.

```jsx
const name = "Hasan";
const element = <h1>Hello, {name}</h1>;
```

---

## 📖 4. Components (The Building Blocks)
A React Component is just a **JavaScript Function** that returns JSX. In React, everything is a component (Header, Sidebar, UserCard).

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

---

## 📖 5. Props (Laravel Component Parameters)
Props (short for Properties) are how we pass data from a parent component to a child component.

**Laravel Blade:**
`@include('user-card', ['name' => 'Rakib'])`

**React Props:**
```jsx
// Step 1: Define the component to accept 'props'
function UserCard(props) {
  return <div>Name: {props.name}</div>;
}

// Step 2: Use it and pass data (props)
<UserCard name="Rakib" />
```

---

## 🚀 Setting Up the Project
I have initialized a Vite + React project for you in this folder. 

**Steps for you to run it:**
1.  Open your terminal in VS Code.
2.  Go to the folder: `cd class-06/code`
3.  Install dependencies: `npm install`
4.  Start dev server: `npm run dev`
5.  Open the link shown (usually `http://localhost:5173`)

---

## 💻 Practice Files
Inside `src/` folder:
- **`App.jsx`**: Our main component.
- **`components/`**: I created a `Hero.jsx` component for you to see how props work.

---

## 🎤 Interview Questions (Job Focus)

**Q1: What is the Virtual DOM in React?**
* **Answer:** It's a lightweight copy of the real DOM kept in memory. When data changes, React updates the Virtual DOM first, compares it with the previous version (Diffing), and then updates ONLY the necessary parts in the real DOM. This makes it extremely fast.

**Q2: Why can't we use `class` in JSX?**
* **Answer:** Because JSX is technically JavaScript, and `class` is a reserved keyword in JS (used for OOP Classes). So we use `className` instead.

**Q3: Can we change props inside a child component?**
* **Answer:** No. Props are **Read-Only** (Immutable). A child should never modify the props it receives from its parent. If the data needs to change, it should be handled via "State" (which we will learn next class).

***

**Your Assignment:** Go to `src/App.jsx`, try adding a new Component called `InfoCard` that accepts a `title` and `description` as props and display it! 
