// Function to convert an array of bytes into a hexadecimal string
function arrayToHex(byteArray) { 
    // Initialize an empty string to store the hexadecimal representation
    let hexString = '';
    
    // Loop through each byte in the input byteArray
    for (let i = 0; i < byteArray.length; i++) {
        // Convert the current byte to a hexadecimal string using toString(16)
        // Use padStart(2, '0') to ensure it's always two characters (e.g., '0a' instead of 'a')
        hexString += byteArray[i].toString(16).padStart(2, '0');
    }
    
    // Return the complete hexadecimal string
    return hexString;
}

// Create a Uint8Array (an array of bytes) with values 1 to 10
const byteArray = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Call the arrayToHex function, passing the byteArray, and store the result
const hexString = arrayToHex(byteArray);

// Log the resulting hexadecimal string to the console
console.log(hexString); // Expected output: "0102030405060708090a"
