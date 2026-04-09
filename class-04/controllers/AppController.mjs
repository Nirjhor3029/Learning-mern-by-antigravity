import Tax, { calculateVAT, formatCurrency } from '../utils/mathUtils.mjs';
import { User, Admin } from '../models/User.mjs';

/**
 * Controller-like logic where everything comes together
 */
export const handlePaymentAndUsers = () => {
    console.log("=== 1. Handing Utils/Modules ===");
    console.log(`Tax Rate: ${Tax}%`);
    console.log(`VAT on $1000: ${formatCurrency(calculateVAT(1000))}`);
    console.log("------------------------------------------");


    console.log("=== 2. Handling Models (Users) ===");
    const customer = new User("Rakib", "rakib@example.com");
    customer.login().updateScore().logout();

    console.log("------------------------------------------");

    console.log("=== 3. Admin Actions ===");
    const siteAdmin = new Admin("Ali", "admin@company.com", "Super Admin");
    siteAdmin.login();
    siteAdmin.deleteUser({ name: "SpammerUser" }); // Passing a simple object as user here
};
