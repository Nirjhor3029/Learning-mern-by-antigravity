/**
 * CLASS 04: YOUR TASKS 🧑‍💻
 * Instructions: Complete the tasks below using ES6 Classes!
 * Run this file using:
 * node "d:\dev\Learning\MERN\class-04\your-tasks.mjs"
 */

// ==========================================
// TASK 1: Create a basic Class
// ==========================================
// Instructions: 
// 1. Create a class called `Vehicle`.
// 2. Add a `constructor(brand, year)`.
// 3. Add a method `startEngine()` that logs "Vroom! [brand] started."

// TODO: Write your Vehicle class here!

console.log("=== Task 1 Output ===");
// const myCar = new Vehicle("Toyota", 2022);
// myCar.startEngine(); // Should output: "Vroom! Toyota started."



// ==========================================
// TASK 2: Inheritance
// ==========================================
// Instructions:
// 1. Create a class called `ElectricCar` that `extends Vehicle`.
// 2. Add a `constructor(brand, year, batteryLife)` that calls `super(brand, year)`.
// 3. Add a method `charge()` that logs "Charging battery up to [batteryLife]%."

// TODO: Write your ElectricCar class here!

console.log("\n=== Task 2 Output ===");
// const myTesla = new ElectricCar("Tesla", 2024, 100);
// myTesla.startEngine(); // From parent class! Should work!
// myTesla.charge();      // Specific to ElectricCar



// ==========================================
// TASK 3: Real world task (Class properties)
// ==========================================
// Instructions:
// 1. Create a class called `BankAccount`.
// 2. Add a `constructor(ownerName, balance = 0)`.
// 3. Add `deposit(amount)` method which adds to this.balance. Return `this` to allow chaining.
// 4. Add `withdraw(amount)` method which subtracts from this.balance. Return `this`.
// 5. Chain the methods together.

// TODO: Write your BankAccount class here!

console.log("\n=== Task 3 Output ===");
// const myAccount = new BankAccount("Sakib Al Hasan", 5000);
// myAccount.deposit(2000).withdraw(500).deposit(100); 
// console.log(`Final Balance: $${myAccount.balance}`); // Should output: $6600

// ==========================================
// After writing the code, run it! 
// Let me know if you get stuck!
