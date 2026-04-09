/**
 * This file acts like your Laravel Model
 * It defines the User structure and logic
 */
export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }

    login() {
        console.log(`${this.name} just logged in!`);
        return this; // Allows chaining
    }

    logout() {
        console.log(`${this.name} logged out.`);
        return this;
    }

    updateScore() {
        this.score++;
        console.log(`${this.name}'s score is now ${this.score}`);
        return this;
    }
}

// Admin Model inheriting User
export class Admin extends User {
    constructor(name, email, roleLevel) {
        super(name, email);
        this.roleLevel = roleLevel; 
    }

    deleteUser(user) {
        console.log(`[ADMIN ACTION] ${this.name} deleted ${user.name}`);
    }
}
