// Entry point of the app (Like index.php or routes/web.php in Laravel)
import { handlePaymentAndUsers } from './controllers/AppController.mjs';

console.log("🚀 Starting Application...\n");

// Execute the controller logic
handlePaymentAndUsers();

console.log("\n✅ Application Finished.");
