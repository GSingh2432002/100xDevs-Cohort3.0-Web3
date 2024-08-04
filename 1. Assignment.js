// What if I ask you the following question-Give me an inout string that outputs a SHA-256 hash that starts with 00000. How we will do?
// Ans:- We will have to brute force until we find a value that starts with 00000

// imports the crypto module from Node.js which provides cryptographic functionalities. It will be used to generate hashes.
const crypto = require('crypto');

// That takes one argument prefix. Function aims to find an input string whose hash starts with the given prefix.
function findHashWithPrefix(prefix){
    // Variable name input initialized as 0
    let input = 0;

    // Starts infinite loop that will running until a hash with the desired prefix is found
    while(true){

        // Convert current input number to string and stores it in inputStr.
        let inputStr = input.toString();

        // Creates a SHA-256 hash of the inputStr string
        // crypto.createHash('sha256') creates a SHA-256 hash object.
        // .update(inputStr) updates the hash object with the inputStr data.
        // .digest('hes') computes the digest (final hash value) and returns it as a hexadecimal string.
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

        // Checks if the resulting hash string starts with the specified 'prefix'
        if(hash.startsWith(prefix)){
            // If the hash starts with the prefix,the function returns an object containing the input string and the hash.
            return {input: inputStr, hash: hash};
        }
        // Otherwise increments the input.
        input++;
    }
}

//Find and print the input string and hash

// Calls the findHasWithPrefix function with the prefix 00000 and stores the result in the result variable.
const result = findHashWithPrefix('00000');

// Prints the input string that produced the desired hash.
console.log(`Input: ${result.input}`);

// Prints the hash that starts with the prefix 00000
console.log(`Hash: ${result.hash}`);
