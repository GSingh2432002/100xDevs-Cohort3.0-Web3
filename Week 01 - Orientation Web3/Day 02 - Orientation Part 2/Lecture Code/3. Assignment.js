// What if I ask you to find a nonce for the following input?
// Import the built-in 'crypto' module for cryptographic functionalities
const crypto = require('crypto');

function findHashWithPrefix(prefix) {
    // Start with an initial numeric value for the input
    let input = 0;

    // Infinite loop to find a matching hash
    while (true) {
        // Construct a unique input string by appending the current input value
        // Base string contains transaction-like records for added uniqueness
        const inputStr = `
        gaurav => xyz | Rs 100
        gks => ajana | Rs 10
        ` + input.toString(); // Appends the incrementing number to make it dynamic

        // Generate the SHA-256 hash of the input string
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

        // Check if the hash starts with the specified prefix
        if (hash.startsWith(prefix)) {
            // Return the input string and its corresponding hash if a match is found
            return { input: inputStr, hash: hash };
        }

        // Increment the input value for the next iteration
        input++;
    }
}

// Find and print the input string and hash for a hash that starts with '00000'
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`); // Example: Input with appended number that matches prefix
console.log(`Hash: ${result.hash}`);  // Example: Hash starting with '00000'

/*
Key Points:-
    Dynamic Input String: The base string contains transaction-like entries followed by a dynamic number. This combination ensures each input is unique.
    SHA-256 Hashing: Uses the cryptographic hash function to produce a fixed-size hash.
    Prefix Matching: Ensures the hash starts with a specific prefix (e.g., '00000'), mimicking proof-of-work systems.
    Brute Force Search: The function iterates through possible input strings until it finds a hash that satisfies the condition.
*/