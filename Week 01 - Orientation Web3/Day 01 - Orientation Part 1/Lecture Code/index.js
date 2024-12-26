// Import the built-in 'crypto' module in Node.js, which provides cryptographic functionalities
const crypto = require('crypto');

// Define the input string that needs to be hashed
const input = "100xdevs";

// Create a SHA-256 hash object, update it with the input string, and generate the hash in hexadecimal format
const hash = crypto.createHash('sha256') // Create a SHA-256 hash object
                   .update(input)        // Update the hash object with the input string
                   .digest('hex');       // Get the hash as a hexadecimal string

// Print the resulting hash to the console
console.log(hash);
