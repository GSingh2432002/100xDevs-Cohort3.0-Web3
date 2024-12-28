// Import the bs58 library
const bs58 = require('bs58');

// Function to encode a Uint8Array into a Base58 string
function uint8ArrayToBase58(uint8Array) {
  // Convert Uint8Array to Buffer for compatibility with bs58.encode
  return bs58.encode(Buffer.from(uint8Array));
}

// Example usage:
const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String); // Output: Base58 encoded string
