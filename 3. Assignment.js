// What if I ask you to find a nonce for the following input?

const { log } = require('console');
const crypto = require('crypto');

function findHashWithPrefix(prefix){
    let input = 0;
    while(true){
        const inputStr = `
        Gaurav => Rohan | Rs 100
        Rohit => Sanjana | Rs 10
        ` + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input: inputStr, hash: hash};
        }
        input++;
    }
}

// Find and print the input string hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);

