# Class 04: ES6 Modules & Object-Oriented JS (Classes/Prototypes)

Welcome to Class 04! Today we'll learn how to organize JavaScript code into multiple files (Modules) and how Object-Oriented Programming (OOP) works in modern JS. 

**PHP/Laravel Comparison:**
*   **Modules:** Think of MS Modules (`import`/`export`) like PHP's `namespace` and `use` statements. In Laravel, you `use App\Models\User;`. In JS, you `import User from './models/User.js';`.
*   **Classes:** Just like PHP Classes (`class Controller extends BaseController {}`), JS now has similar syntax!

## 🎯 Today's Topics
1. Named Exports vs Default Exports
2. Importing Modules
3. JS Classes & Constructors
4. Inheritance (`extends` & `super()`)
5. Prototypes (What goes on under the hood)

---

## 📖 1. ES6 Modules (Export/Import)
In older JS or traditional Node.js (CommonJS), you saw `require()` and `module.exports`. In modern JS (ES6) and React, we strictly use `import` and `export`.

### A. Named Exports
Used when you want to export **multiple things** from one file.
```javascript
// math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

// main.js (You must use exactly the same names inside `{}`)
import { add, sub } from './math.js';
console.log(add(5, 5));
```

### B. Default Exports
Used when a file basically exports **one main thing** (like a React Component or a Model).
```javascript
// UserController.js
const UserController = () => { /* ... */ };
export default UserController;

// main.js (You can name it whatever you want when importing)
import UserCtrl from './UserController.js';
```

---

## 📖 2. Classes and OOP in Modern JS
JavaScript is functionally a prototype-based language, but ES6 introduced the `class` syntax to make it feel like traditional OOP (like PHP/Java).

**Laravel/PHP Comparison:**
Constructor in PHP: `public function __construct($name) { $this->name = $name; }`
Constructor in JS: `constructor(name) { this.name = name; }`

```javascript
class User {
    // 1. Constructor: Runs automatically when creating a new object
    constructor(name, email) {
        this.name = name; // 'this' refers to the current instance
        this.email = email;
    }

    // 2. Method
    login() {
        console.log(`${this.name} just logged in!`);
        return this; // Allows chaining: user.login().logout()
    }
}

// Instantiation (Creating an object from the class)
const hasan = new User("Hasan", "hasan@test.com");
hasan.login();
```

---

## 📖 3. Inheritance (`extends`)
You can create a child class that inherits all properties and methods from a parent class.

**Laravel Comparison:**
Think of `class PostController extends Controller`.

```javascript
class Admin extends User {
    constructor(name, email, permissions) {
        // You MUST call super() to pass arguments to the Parent constructor
        super(name, email); 
        this.permissions = permissions;
    }

    deleteUser() {
        console.log(`${this.name} is deleting a user!`);
    }
}

const superAdmin = new Admin("Ali", "ali@admin.com", ["read", "write", "delete"]);
superAdmin.deleteUser();
superAdmin.login(); // Inherited from User!
```

---

## 📖 4. A brief note on Prototypes
Under the hood, JS doesn't have "real" classes like PHP. It uses "Prototypal Inheritance". When you add a method `login()` to `class User`, JS actually adds it to `User.prototype.login`.
*You won't directly write prototype code much in React/Node, but knowing that classes are just "syntactic sugar" over prototypes is a common interview question.*

---

## 💻 Practice Code & Real-World Examples (Professional Structure 🔥)
I have set up the files exactly how professionals structure their MERN/Node apps. Notice how clean `app.mjs` is!

**Folder Structure Check:**
1. `utils/mathUtils.mjs` - Utility functions (Like Laravel `app/Helpers`).
2. `models/User.mjs` - Contains your `User` and `Admin` classes (Like Laravel `app/Models/User`).
3. `controllers/AppController.mjs` - Where you import the models and utils and write your business logic (Like Laravel `app/Http/Controllers`).
4. `app.mjs` - The main entry point (Like `public/index.php` or `routes/web.php`).
5. `real-world.mjs` - How you will actually use ES6 Classes in Node.js (e.g., APIs).
6. `your-tasks.mjs` - Your homework assignments!

**To run the main app, simply execute:**
```bash
node d:\dev\Learning\MERN\class-04\app.mjs
```

---

## 🎤 Interview Questions (Job Focus)

**Q1: What is the difference between Default Export and Named Export?**
* **Answer:** A file can have multiple **Named Exports** but only one **Default Export**. When importing named exports, you must use curly braces `{}` and use the exact name. For default exports, you don't use `{}` and can name the imported variable anything.

**Q2: Does JavaScript have traditional Classes like PHP or Java?**
* **Answer:** No. JavaScript uses prototypal inheritance. The `class` keyword introduced in ES6 is just "syntactic sugar" to make prototypal inheritance easier to read and write for developers coming from OOP languages.

**Q3: Explain the `super()` function in JS OOP.**
* **Answer:** The `super()` function is used inside a child class's `constructor` to call the parent class's `constructor`. If a child class has a constructor, it must call `super()` before using the `this` keyword.

***

**Your Assignment:** Open `d:\dev\Learning\MERN\class-04\your-tasks.js` and try to solve the OOP tasks!
