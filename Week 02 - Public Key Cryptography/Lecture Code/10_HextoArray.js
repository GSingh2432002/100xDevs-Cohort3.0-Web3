// Function to convert a hexadecimal string to a byte array (Uint8Array)
function hexToArray(hexString) { 
    // Create a new Uint8Array with a length of half the hex string length (2 hex characters = 1 byte)
    const bytearray = new Uint8Array(hexString.length / 2);
    
    // Loop through the bytearray to convert each pair of hex characters into a byte
    for (let i = 0; i < bytearray.length; i++) {
        // Extract a 2-character substring from hexString, starting from i*2
        // Parse the substring as a hexadecimal number and assign it to the bytearray[i]
        bytearray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    
    // Return the resulting byte array
    return bytearray;
}

// Example hex string "48656c6c6f" (represents the ASCII characters "Hello")
const hex = "48656c6c6f";

// Call the hexToArray function to convert the hex string to a byte array
const StoringArrayFromHex = hexToArray(hex);

// Log the resulting byte array to the console
console.log(StoringArrayFromHex); 
// Expected output: Uint8Array [72, 101, 108, 108, 111] which corresponds to "Hello" in ASCII
