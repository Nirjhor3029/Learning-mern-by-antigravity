/**
 * CLASS 04: ES6 Modules & Objects (Utility Module)
 * Note: Notice the .mjs extension. Without package.json {"type":"module"},
 * Node.js needs .mjs to understand ES Modules.
 */

// A Named Export (You can have many of these)
export const calculateVAT = (price) => {
    return price * 0.15; // 15% VAT
};

// Another Named Export
export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
};

// Default Export (Only ONE per file is allowed)
const defaultTaxRate = 18;
export default defaultTaxRate;

// In Laravel this file is like a Helper or a Config file!
