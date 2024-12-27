// What if I ask you that the input string should start with 100xdevs? How would the code change?

// Import the built-in 'crypto' module for cryptographic functionalities
const crypto = require('crypto');

function findHashWithPrefix(prefix) {
    // Start with an initial numeric value for the input
    let input = 0;

    // Infinite loop to find a matching hash
    while (true) {
        // Constructs a unique input string by appending the current input value to the base string "100xdevs"
        // Example: "100xdevs0", "100xdevs1", "100xdevs2", ...
        let inputStr = "100xdevs" + input.toString();

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
console.log(`Input: ${result.input}`); // Example output: Input: 100xdevs12345
console.log(`Hash: ${result.hash}`);  // Example output: Hash: 00000abcd1234567890...


/*
Key Points Explained:-
    Crypto Module: Provides cryptographic functions such as hashing.
    SHA-256 Hash: A cryptographic hash function generating a fixed-size string.
    Prefix Matching: Ensures the hash begins with the specified pattern (e.g., "00000").
    Brute Force Approach: Continuously generates new input strings until a matching hash is found.
    Loop Explanation: Iterates indefinitely, incrementing the input value and checking the hash in each iteration.
*/