// What if I ask you that the input string should start with 100xdevs? How would the code change?

// Library called crypto it is called Cryptography in Node.js
const crypto = require('crypto');

function findHashWithPrefix(prefix){
    let input = 0;
    while(true){
        // Constructs the input string by concatenating "100xdevs" with the current input value. This creates unique input strings like 100xdevs0, 100xdevs1, so on....
        let inputStr = "100xdevs" + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input: inputStr, hash: hash};
        }
        input++;
    }
}
// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);

